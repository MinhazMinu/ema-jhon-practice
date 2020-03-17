import React, { useState, useEffect } from "react";
import fakeData from "../../fakeData";
import "./Shop.css";
import Product from "../product/Product";
import Cart from "../cart/Cart";
import {
  addToDatabaseCart,
  getDatabaseCart
} from "../../utilities/databaseManager";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeyes = Object.keys(savedCart);
    const previousCart = productKeyes.map(pdkey => {
      const product = fakeData.find(pd => pdkey === pd.key);
      product.quantity = savedCart[pdkey];
      return product;
    });

    setCart(previousCart);
  }, []);

  const handleAddProduct = product => {
    const toBeadded = product.key;
    const sameProduct = cart.find(pd => pd.key === product.key);
    let count;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter(pd => pd.key !== toBeadded);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);

    addToDatabaseCart(product.key, count);
  };
  return (
    <div className="twin-container">
      <div className="product-container">
        <ul>
          {products.map(product => (
            <Product
              showAddToCart={true}
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
        <Cart cart={cart}>
          <Link to="/review">
            <button className="main-button">Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
