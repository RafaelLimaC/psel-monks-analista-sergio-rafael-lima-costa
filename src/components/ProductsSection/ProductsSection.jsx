import React from "react";
import "./ProductsSection.scss";
import cardPicture from "../../assets/temp/card-image.png";

function Products() {
  return (
    <div className="products">
      <div className="products-title">
        <h3>Lorem ipsum dolor sit amet consectetur</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
          faucibus sit scelerisque quis commodo
        </p>
      </div>

      <div className="products-card">
        <div className="products-card-item">
          {/* TODO - remover infos chumbadas e pegar pela API */}
          <img src={cardPicture} alt="" />
          <div className="products-card-item__text">
            <h5>Lorem ipsum dolor</h5>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="products-card-item">
          {/* TODO - remover infos chumbadas e pegar pela API */}
          <img src={cardPicture} alt="" />
          <div className="products-card-item__text">
            <h5>Lorem ipsum dolor</h5>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="products-card-item">
          {/* TODO - remover infos chumbadas e pegar pela API */}
          <img src={cardPicture} alt="" />
          <div className="products-card-item__text">
            <h5>Lorem ipsum dolor</h5>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="products-card-item">
          {/* TODO - remover infos chumbadas e pegar pela API */}
          <img src={cardPicture} alt="" />
          <div className="products-card-item__text">
            <h5>Lorem ipsum dolor</h5>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
