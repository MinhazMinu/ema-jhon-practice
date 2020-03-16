import React from "react";

const Cart = ({ cart }) => {
  console.log(cart);
  const Total = cart.reduce((sum, i) => {
    return (sum += i.price);
  }, 0);
  const shipping = cart.length ? (Total > 350 ? 0 : 40.95) : 0;
  const tex = (Total * 0.15).toFixed(2);
  const grandtotal = (Total + shipping).toFixed(2);
  return (
    <div>
      <h4>Order Summery</h4>
      <h5>Item Ordered : {cart.length}</h5>
      <h5>Shiping Cost :{shipping}</h5>
      <h5>Tex + Vat : {tex}</h5>
      <h5>Total Price: {parseFloat(grandtotal)}</h5>
    </div>
  );
};

export default Cart;
