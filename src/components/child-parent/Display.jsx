import React, { useState } from "react";

export const Display = ({ setData }) => {
  let [childdata, setChildData] = useState("react js");
  return (
    <div>
      <h1>Display Comp</h1>
      <br />
      <button
        onClick={() => {
          setData(childdata);
        }}
      >
        Pass data to parent
      </button>
    </div>
  );
};
