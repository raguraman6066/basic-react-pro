import React, { useContext } from "react";
import myFirstContext from "./context";

export const E = () => {
  let contextData = useContext(myFirstContext);
  return (
    <div style={{ padding: "10px" }}>
      <h2>E Component</h2>

      <br />
      <h4 style={{ color: "green" }}>Data : {contextData}</h4>
    </div>
  );
};
