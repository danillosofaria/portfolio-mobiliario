import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import { supabase } from "../supabaseClient";
import './CardList.css'

function CardList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('products')   // nome da tabela no Supabase
        .select('*');

      if (error) {
        setError(error.message);
      } else {
        setProducts(data);
      }
      setLoading(false);
    }

    fetchProducts();
  }, []);

  if (loading) return <p>Carregando produtos...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="CardList">
      {products.map((product) => (
        <CardProduct
          key={product.id}
          image={product.image}
          name={product.name}
          category={product.category}
        />
      ))}
    </div>
  );
}

export default CardList;
