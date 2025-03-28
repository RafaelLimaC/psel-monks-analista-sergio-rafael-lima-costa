import { useEffect, useState } from "react";
import { fetchGalleries } from "../services/wordpressService";

export function useGalleries() {
  const [galleries, setGalleries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadGalleries() {
      try {
        const data = await fetchGalleries();
        setGalleries(data);
      } catch (err) {
        setError(err);
      }
    }

    loadGalleries();
  }, []);

  return { galleries, error };
}
