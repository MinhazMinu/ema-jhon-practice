import React from "react";

const Cart = ({ cart }) => {
  console.log(cart);

  return (
    <div>
      <h4>Order Summery</h4>
      <h5>Item Ordered : {cart.length}</h5>
    </div>
  );
};

export default Cart;
