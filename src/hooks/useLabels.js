import { useEffect, useState } from "react";
import { fetchLabels } from "../services/wordpressService";

export function useLabels(perPage = 15) {
  const [labels, setLabels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadLabels() {
      try {
        const data = await fetchLabels({ per_page: perPage });
        setLabels(data);
      } catch (err) {
        setError(err);
      }
    }

    loadLabels();
  }, [perPage]);

  return { labels, error };
}
