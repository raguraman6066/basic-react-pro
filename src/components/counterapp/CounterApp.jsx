import React, { useReducer } from "react";
import "./CounterApp.css";
import counterReducer from "./counterReducer";

function reducerFun() {}
export const CounterApp = () => {
  let [state, dispatch] = useReducer(counterReducer, { count: 0 });
  function increaseCount() {
    dispatch({ type: "increment" });
  }
  function decreaseCount() {
    dispatch({ type: "decrement" });
  }
  function clearCount() {
    dispatch({ type: "clear" });
  }

  return (
    <div className="reducerCounter">
      <h2>CounterApp: {state.count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={clearCount}>Clear</button>
    </div>
  );
};
