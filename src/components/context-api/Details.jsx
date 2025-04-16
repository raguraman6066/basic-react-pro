import React, { useContext } from "react";
import myHomeContext from "./MyhomeContext";

export const Details = () => {
  let valuecontext = useContext(myHomeContext);
  return (
    <div>
      <h2>Details Comp</h2>
      <h4>Data:{valuecontext}</h4>
    </div>
  );
};
