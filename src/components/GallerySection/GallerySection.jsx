import React from "react";
import "./GallerySection.scss";
import GalleryImage from "./GalleryImage";
import { useGalleries } from "@/hooks/useGalleries";

function Gallery() {
  const { galleries, error } = useGalleries();

  if (error) {
    console.error("Erro ao carregar galerias:", error);
  }

  return (
    <div className="gallery" id="gallery">
      <div className="gallery-wrapper">
        {galleries.length > 0 && (
          <div className="gallery-main">
            <h3>{galleries[0].title?.rendered || "Título não disponível"}</h3>
            <p>{galleries[0].acf?.subtitle || "Subtítulo não disponível"}</p>
            <GalleryImage
              src={
                galleries[0].acf?.large_image || "URL da imagem não disponível"
              }
              alt={galleries[0].title?.rendered || "Imagem principal"}
            />
          </div>
        )}
        {galleries.slice(1, 3).map((gallery, index) => (
          <GalleryImage
            key={index}
            src={gallery.acf?.large_image || "URL da imagem não disponível"}
            alt={gallery.title?.rendered || `Imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
