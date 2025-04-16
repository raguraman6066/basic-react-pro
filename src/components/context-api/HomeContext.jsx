import React, { useState } from "react";
import { Details } from "./Details";
import myHomeContext from "./MyhomeContext";

export const HomeContext = () => {
  let [state, setState] = useState();
  let [data, setData] = useState();
  function submitData() {
    console.log(state);
    setData(state);
  }
  return (
    <div style={{ padding: "50px" }}>
      <h2>HomeContext Comp</h2>
      <input
        type="text"
        placeholder="Enter Text"
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <button onClick={submitData}>Submit</button>
      <br />
      <hr />
      <myHomeContext.Provider value={data}>
        <Details />
      </myHomeContext.Provider>
    </div>
  );
};
