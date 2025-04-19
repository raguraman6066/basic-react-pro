import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
export const Card = ({ title, image, price, id }) => {
  return (
    <div className="card">
      <h3>{id}</h3>
      <img src={image} width={270} height={200} alt="" />
      <h3>{title}</h3>
      <p>${price}</p>
      <Link to={`/productdetails/${id}`}>
        <button>Product Details</button>
      </Link>
    </div>
  );
};
