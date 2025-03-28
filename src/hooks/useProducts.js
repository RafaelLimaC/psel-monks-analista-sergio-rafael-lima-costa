import { useEffect, useState } from "react";
import { fetchProducts } from "../services/wordpressService";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err);
      }
    }

    loadProducts();
  }, []);

  return { products, error };
}
