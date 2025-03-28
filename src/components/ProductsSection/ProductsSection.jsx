import React from "react";
import "./ProductsSection.scss";
import ProductCard from "./ProductCard";
import { useProducts } from "../../hooks/useProducts";

function ProductsSection() {
  const { products, error } = useProducts();

  if (error) {
    console.error("Erro ao carregar os produtos:", error);
  }

  return (
    <div className="products" id="products">
      <div className="products-title">
        <h3>Lorem ipsum dolor sit amet consectetur</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
          faucibus sit scelerisque quis commodo
        </p>
      </div>

      <div className="products-cards">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title?.rendered || "Título não disponível"}
            subtitle={product.acf?.subtitle || "Subtítulo não disponível"}
            image={product.acf?.large_image || "URL da imagem não disponível"}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsSection;
