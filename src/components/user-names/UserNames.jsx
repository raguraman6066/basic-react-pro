import React, { useState } from "react";

export const UserNames = () => {
  let [names, setname] = useState(["Rohan", "Aish", "Vaish", "Aadi"]);
  return (
    <div>
      <h2>User Names</h2>
      <ul>
        {names.map((name) => {
          return <li>{name}</li>;
        })}
      </ul>
    </div>
  );
};
