import React from "react";
import "./TagsSection.scss";
import TagItem from "./TagItem";

function Tags() {
  return (
    <section className="tags">
      <h3 className="tags-title">Lorem ipsum dolor sit amet consectetur</h3>
      <ul className="tags-content">
        {/* {items.map((item) => ( 
          <TagItem key={item.id} name={item.name} />
        )} */}

        <TagItem name="Perfumaria" />
        <TagItem name="Corpo e banho" />
        <TagItem name="Hidratante" />
        <TagItem name="Desodorante" />
        <TagItem name="Cabelos" />
        <TagItem name="Maquiagem" />
        <TagItem name="Rosto" />
        <TagItem name="Casa" />
        <TagItem name="Infantil" />
        <TagItem name="Shampoo" />
        <TagItem name="Sabonete" />
        <TagItem name="Body splash" />
        <TagItem name="Óleo corporal" />
        <TagItem name="Corretivo" />
        <TagItem name="Proteção solar" />
      </ul>
    </section>
  );
}

export default Tags;
