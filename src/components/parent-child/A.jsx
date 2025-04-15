import React from "react";
import { C } from "./C";
const asytle = {
  width: "200px",
  boxShadow: "0 0 10px green",
  textAlign: "center",
  margin: "100px auto",
  padding: "20px",
};

export const A = ({ info }) => {
  return (
    <div style={asytle}>
      <h2>A Component</h2>
      <p>Data: {info} </p>
      <C data={info} />
    </div>
  );
};
