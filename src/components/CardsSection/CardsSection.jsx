import React, { useEffect, useState } from "react";
import "./CardsSection.scss";
import Card from "./Card";
import { fetchFromWordPress } from "../../services/wordpressService";

function CardsSection() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function loadCards() {
      try {
        const data = await fetchFromWordPress("card", {
          _fields: "title,acf",
        });
        setCards(data);
      } catch (error) {
        console.error("Erro ao carregar os cards:", error);
      }
    }

    loadCards();
  }, []);

  return (
    <section className="cards">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title?.rendered || "Título não disponível"}
          content={card.acf?.content || "Conteúdo não disponível"}
          buttonText={card.acf?.button_text || "Texto do botão não disponível"}
        />
      ))}
    </section>
  );
}

export default CardsSection;
