import React, { useReducer } from "react";
const reducerFn = (action) => {
  return "buddy";
};
export const UseReducer = () => {
  let [state, dispatch] = useReducer(reducerFn, 100);
  function modifyState() {
    dispatch({ type: "dummy" });
  }
  return (
    <div>
      <h2>UseReducer : {state}</h2>
      <button onClick={modifyState}>Update state</button>
    </div>
  );
};
