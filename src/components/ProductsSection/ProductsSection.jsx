import React, { useEffect, useState } from "react";
import "./ProductsSection.scss";
import ProductCard from "./ProductCard";
import { fetchFromWordPress } from "../../services/wordpressService";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchFromWordPress("products", {
          _fields: "title,acf.subtitle,acf.large_image",
          acf_format: "standard",
        });
        setProducts(data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    }

    loadProducts();
  }, []);

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

export default Products;
