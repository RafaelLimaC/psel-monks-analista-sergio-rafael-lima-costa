import React from "react";
import "./ProductsSection.scss";
import ProductCard from "./ProductCard";

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

      <div className="products-cards">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Products;
