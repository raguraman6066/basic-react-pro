import React from "react";
import "./Card.css";
export const Card = ({ title, image, price }) => {
  return (
    <div className="card">
      <img src={image} width={270} height={200} alt="" />
      <h3>{title}</h3>
      <p>${price}</p>
      <button>Product Details</button>
    </div>
  );
};
