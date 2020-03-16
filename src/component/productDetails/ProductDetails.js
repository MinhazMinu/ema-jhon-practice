import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../product/Product";

const ProductDetails = () => {
  const { key } = useParams();
  const product = fakeData.find(pd => pd.key == key);

  return (
    <div>
      <h2>Product Key {key}</h2>
      <Product showAddToCart={false} product={product}></Product>
    </div>
  );
};

export default ProductDetails;
