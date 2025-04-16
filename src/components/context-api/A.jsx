import React from "react";
import { B } from "./B";
import myFirstContext from "./context";
export const A = () => {
  return (
    <div style={{ padding: "50px" }}>
      <h2>A Component</h2>
      <button>Submit</button>
      <br />
      <hr />
      <myFirstContext.Provider value={"buddy"}>
        <B />
      </myFirstContext.Provider>
    </div>
  );
};
