import React from "react";
import "./TagsSection.scss";
import TagItem from "./TagItem";
import { useLabels } from "../../hooks/useLabels";

function Tags() {
  const { labels: tags, error } = useLabels(15);

  if (error) {
    console.error("Erro ao carregar tags:", error);
  }

  return (
    <section className="tags" id="tags">
      <h3 className="tags-title">Lorem ipsum dolor sit amet consectetur</h3>
      <ul className="tags-content">
        {tags.map((tag, index) => (
          <TagItem
            key={index}
            name={tag.title?.rendered || "Nome da tag não disponível"}
          />
        ))}
      </ul>
    </section>
  );
}

export default Tags;
