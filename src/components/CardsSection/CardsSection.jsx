import React from "react";
import "./CardsSection.scss";
import Card from "./Card";
import { useCards } from "../../hooks/useCards";

function CardsSection() {
  const { cards, error } = useCards();

  if (error) {
    console.error("Erro ao carregar os cards:", error);
  }

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
