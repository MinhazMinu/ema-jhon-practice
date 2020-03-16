import React from "react";
import "./Product.css";
import { FaCartPlus } from "react-icons/fa";

const Product = ({ product, handleAddProduct }) => {
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
          <small>Only {stock} left! - Order soon</small> <br />
          <button
            className="main-button"
            onClick={() => handleAddProduct(product)}
          >
            <FaCartPlus />
            &nbsp; add to cart
          </button>
        </p>
      </div>
    </div>
  );
};

export default Product;
