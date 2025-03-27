import React, { useEffect, useState } from "react";
import "./GallerySection.scss";
import GalleryImage from "./GalleryImage";
import { fetchFromWordPress } from "../../services/wordpressService";

function Gallery() {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    async function loadGalleries() {
      try {
        const data = await fetchFromWordPress("galleries", {
          _fields: "title,acf.subtitle,acf.large_image",
          acf_format: "standard",
        });
        setGalleries(data);
      } catch (error) {
        console.error("Erro ao carregar galerias:", error);
      }
    }

    loadGalleries();
  }, []);

  return (
    <div className="gallery">
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
