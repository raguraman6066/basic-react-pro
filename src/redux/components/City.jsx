import React, { useState } from "react";
import { cityAction } from "../actions/CityAction";
import { useDispatch } from "react-redux";

export const City = () => {
  let [city, setCity] = useState();
  let dispatch = useDispatch();
  function getValue() {
    let cityObj = cityAction(city);
    dispatch(cityObj);
    console.log(cityObj);
  }
  return (
    <div style={{ padding: "50px" }}>
      <h2>City Component</h2>
      <select
        name=""
        id=""
        onChange={(event) => {
          setCity(event.target.value);
        }}
      >
        <option value="Chennai">Chennai</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Pune">Pune</option>
      </select>
      <button onClick={getValue}>Submit</button>
    </div>
  );
};
