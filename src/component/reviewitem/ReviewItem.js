import React from "react";
import "./ReviewItem.css";
import { MdDelete } from "react-icons/md";

const ReviewItem = ({ product, removeProduct }) => {
  const { name, quantity, key, price } = product;
  return (
    <div className="review-item">
      <h4 className="">{name}</h4>
      <p>Quantity : {quantity}</p>
      <p> ${price}</p>
      <br />
      <button className="main-button" onClick={() => removeProduct(key)}>
        <MdDelete />
        Remove
      </button>
    </div>
  );
};

export default ReviewItem;
