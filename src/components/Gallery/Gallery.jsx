import React from "react";
import "./Gallery.scss";
import cardPicture from "../../assets/temp/card-image.png";
import bigImage from "../../assets/temp/big-image.png";

function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery-wrapper">
        <div className="gallery-main">
          <h3>Lorem ipsum dolor sit amet consectetur</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
            faucibus sit scelerisque quis commodo
          </p>
          <div className="gallery-main__image">
            <img src={bigImage} alt="" />
          </div>
        </div>
        {/* TODO - remover infos chumbadas e pegar pela API */}
        <div className="gallery-image">
          <img src={cardPicture} alt="" />
        </div>
        <div className="gallery-image">
          <img src={bigImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
