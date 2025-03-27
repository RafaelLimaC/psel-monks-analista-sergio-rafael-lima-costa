import React, { useEffect, useState } from "react";
import "./TagsSection.scss";
import TagItem from "./TagItem";
import { fetchFromWordPress } from "../../services/wordpressService";

function Tags() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function loadTags() {
      try {
        const data = await fetchFromWordPress("label", {
          _fields: "title",
          per_page: 15,
        });
        setTags(data);
      } catch (error) {
        console.error("Erro ao carregar tags:", error);
      }
    }

    loadTags();
  }, []);

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
