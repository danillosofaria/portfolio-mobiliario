import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import { supabase } from "../supabaseClient";
import './CardList.css';

function CardList({ limit }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        let query = supabase.from('products').select('*');

        
        if (limit) {
          query = query.limit(limit);
        }

        const { data, error } = await query;

        if (error) throw error;

        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [limit]);

  if (loading) return <p>Loading products...</p>;
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
