import React from "react";
import { Name } from "./components/Name";
import { City } from "./components/City";
import { Details } from "./components/Details";

export const ReduxHome = () => {
  return (
    <div>
      <h2>Redux Home</h2>
      <div style={{ display: "flex" }}>
        <Name />
        <City />
      </div>
      <hr />
      <Details />
    </div>
  );
};
