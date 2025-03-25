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
          <img src={bigImage} alt="" />
        </div>
        {/* TODO - remover infos chumbadas e pegar pela API */}
        <img className="gallery-image" src={cardPicture} alt="" />
        <img className="gallery-image" src={bigImage} alt="" />
      </div>
    </div>
  );
}

export default Gallery;
