import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, showAddToCart }) => {
  console.log(cart);
  const Total = cart.reduce((sum, i) => {
    sum += i.price;
    const tot = parseFloat(sum) * parseFloat(i.quantity);
    debugger;
    return tot;
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

      <Link to="/review">
        <button className="main-button">Review Order</button>
      </Link>
    </div>
  );
};

export default Cart;
