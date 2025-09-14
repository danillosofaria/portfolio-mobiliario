import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import './CardList.css'

function CardList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao buscar produtos");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando produtos...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="CardList">
      {products.map((product) => (
        <CardProduct
          key={product.id}
          image={product.image}
          name={product.title}
          category={product.category}
        />
      ))}
    </div>
  );
}

export default CardList;
