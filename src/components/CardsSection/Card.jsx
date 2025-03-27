import "./Card.scss";

function Card({ title, content, buttonText }) {
  return (
    <div className="card-item">
      <h5>{title}</h5>
      <p>{content}</p>
      <button>{buttonText}</button>
    </div>
  );
}

export default Card;
