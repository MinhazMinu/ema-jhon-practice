import React, { useState } from "react";
import fakeData from "../../fakeData";
import "./Shop.css";
import Product from "../product/Product";

const Shop = () => {
  /**
   * initail fake data state
   */
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);

  return (
    <div className="shop-container">
      <div className="product-container">
        <ul>
          {products.map(product => (
            <Product product={product}> </Product>
          ))}
        </ul>
      </div>
      <div className="cart-container">
        <h2>cart</h2>
      </div>
    </div>
  );
};

export default Shop;
