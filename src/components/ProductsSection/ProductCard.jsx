import "./ProductCard.scss";

function ProductCard({ image, title, subtitle }) {
  return (
    <div className="products-card-item">
      <div className="products-card-item__image">
        <img src={image} alt={title} />
      </div>
      <div className="products-card-item__text">
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default ProductCard;
