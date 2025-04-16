import React, { useState } from "react";
import "./Ref.css";
export const Ref = () => {
  let [state, setState] = useState(null);
  let value;
  function updateState() {
    setState(100);
  }

  function displayValue() {
    console.log("state", state);
    console.log("value", value);
  }
  function updateValue() {
    value = 500;
  }
  return (
    <div className="refContainer">
      <h2>Ref Comp : {state}</h2>
      <button onClick={updateState}>Update state</button>
      <button onClick={updateValue}>Update value</button>
      <button onClick={displayValue}>Display</button>
    </div>
  );
};
