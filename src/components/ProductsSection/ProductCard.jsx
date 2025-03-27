import cardPicture from "../../assets/temp/card-image.png";
import "./ProductCard.scss";

function ProductCard() {
  return (
    <div className="products-card-item">
      {/* TODO - remover infos chumbadas e pegar pela API */}
      <div className="products-card-item__image">
        <img src={cardPicture} alt="" />
      </div>
      <div className="products-card-item__text">
        <h5>Lorem ipsum dolor</h5>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </div>
  );
}

export default ProductCard;
