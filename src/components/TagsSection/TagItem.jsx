import React from "react";
import "./TagItem.scss";

function TagItem({ name }) {
  return <li className="tag-item">{name}</li>;
}

export default TagItem;
