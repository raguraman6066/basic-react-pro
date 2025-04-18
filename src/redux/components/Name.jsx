import React, { useRef } from "react";
import { useDispatch } from "react-redux";

export const Name = () => {
  let inputRef = useRef(null);
  let dispatch = useDispatch();
  const getData = () => {
    //create a action object
    var actionObj = {
      type: "NAME",
      nameComp: inputRef.current.value,
    };
    dispatch(actionObj);
    console.log(actionObj);
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2>Name Component</h2>
      <input ref={inputRef} type="text" placeholder="Add some data" />
      <button onClick={getData}>Submit</button>
    </div>
  );
};
