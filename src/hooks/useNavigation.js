import { useEffect, useState } from "react";
import { fetchNavigation } from "../services/wordpressService";

export function useNavigation() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadNavigation() {
      try {
        const data = await fetchNavigation();
        setCategories(data);
      } catch (err) {
        setError(err);
      }
    }

    loadNavigation();
  }, []);

  return { categories, error };
}
