import React, { useState } from "react";
import fakeData from "../../fakeData";
import "./Shop.css";
import Product from "../product/Product";
import Cart from "../cart/Cart";

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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
