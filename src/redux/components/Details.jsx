import React from "react";
import { useSelector } from "react-redux";

export const Details = () => {
  let data = useSelector((storedata) => {
    return storedata;
  });
  return (
    <div style={{ padding: "50px" }}>
      <h2> Details Component</h2>
      <p style={{ color: "green", fontWeight: "bold", fontSize: "21px" }}>
        {data.name}
      </p>
    </div>
  );
};
