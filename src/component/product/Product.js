import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { img, name, seller, price, stock } = product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-info">{name}</h4> <br />
        <p>
          <small>by : {seller}</small>
        </p>
        <p>$ {price}</p>
        <br />
        <p>
          <small>Only {stock} left! - Order soon</small>
        </p>
      </div>
    </div>
  );
};

export default Product;
