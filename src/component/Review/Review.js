import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart
} from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import ReviewItem from "../reviewitem/ReviewItem";
import Cart from "../cart/Cart";

const Review = () => {
  const [cart, setCart] = useState([]);

  const removeProduct = productKey => {
    console.log("removed" + productKey);
    const newCart = cart.filter(pd => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };
  useEffect(() => {
    //
    const savedCart = getDatabaseCart();

    const productKeys = Object.keys(savedCart);
    let cartProducts = productKeys.map(key => {
      const product = fakeData.find(pd => pd.key === key);

      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  return (
    <div className="twin-container">
      <div className="product-container">
        {cart.map(pd => (
          <ReviewItem
            key={pd.key}
            product={pd}
            removeProduct={removeProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="cartContainer">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Review;
