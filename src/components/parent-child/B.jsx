import React, { useState } from "react";
import { A } from "./A";

const bsytle = {
  width: "300px",
  boxShadow: "0 0 10px red",
  textAlign: "center",
  margin: "30px auto",
  padding: "50px",
};

export const B = () => {
  let [state, setState] = useState("----");
  function btnClick() {
    setState("Hello");
  }
  return (
    <div style={bsytle}>
      <h2>B Component</h2>
      <button onClick={btnClick}>Pass data to A</button>
      <A info={state} />
    </div>
  );
};
