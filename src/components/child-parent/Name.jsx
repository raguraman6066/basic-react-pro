import React, { useState } from "react";
import { Display } from "./Display";

export const Name = () => {
  let [state, setState] = useState("");
  return (
    <div>
      <h2>Name Comp</h2>
      <br />
      <p>Child Data: {state}</p>
      <hr />
      <Display setData={setState} />
    </div>
  );
};
