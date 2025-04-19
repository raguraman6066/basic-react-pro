import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products);

  const product = products.filter((p) => p.id == id);

  return (
    <div>
      <h2>ProductDetails - {id}</h2>
      <img src={product[0].image} alt="" width={300} />
      <h3>{product[0].title}</h3>
    </div>
  );
};
