import { useEffect, useState } from "react";
import { fetchCards } from "../services/wordpressService";

export function useCards() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCards() {
      try {
        const data = await fetchCards();
        setCards(data);
      } catch (err) {
        setError(err);
      }
    }

    loadCards();
  }, []);

  return { cards, error };
}
