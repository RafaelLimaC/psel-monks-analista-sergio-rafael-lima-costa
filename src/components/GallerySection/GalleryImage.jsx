import React from "react";
import "./GalleryImage.scss";

function GalleryImage({ src, alt }) {
  return (
    <div className="gallery-image">
      <img src={src} alt={alt} />
    </div>
  );
}

export default GalleryImage;
