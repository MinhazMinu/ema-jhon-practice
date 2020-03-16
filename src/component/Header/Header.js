import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="logo" />
      </div>
      <nav >
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/Manage">Manage Inventory</a>
      </nav>
    </div>
  );
};

export default Header;
