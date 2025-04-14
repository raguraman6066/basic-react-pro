import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <div class="nav">
      <h2>React Router</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/allproducts">AllProducts</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/imagetask">ImageTask</Link>
        <Link to="/usernames">UserNames</Link>
      </div>
    </div>
  );
};
