import React from "react";
const csytle = {
  width: "100px",
  boxShadow: "0 0 10px red",
  textAlign: "center",
  margin: "30px auto",
  padding: "50px",
};
export const C = ({ data }) => {
  return (
    <div style={csytle}>
      <h2>C Component</h2>
      <h5>Data:{data}</h5>
    </div>
  );
};
