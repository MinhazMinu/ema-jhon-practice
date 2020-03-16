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
  const [cart, setCart] = useState([]);

  /**
   * event handel
   */

  const handleAddProduct = product => {
    console.log("product add");
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        <ul>
          {products.map(product => (
            <Product
              key={product.key}
              product={product}
              handleAddProduct={handleAddProduct}
            >
              {" "}
            </Product>
          ))}
        </ul>
      </div>
      <div className="cart-container">
        <h2>cart</h2>
        <h5>Order Summery : {cart.length}</h5>
      </div>
    </div>
  );
};

export default Shop;
