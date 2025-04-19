import React from "react";

export const NewUser = () => {
  return (
    <div>
      <h2>NewUser</h2>
      <input
        type="text"
        placeholder="username"
        style={{ marginRight: "10px" }}
      />
      <select name="" id="" style={{ marginRight: "10px" }}>
        <option value="">c1</option>
        <option value="">c2</option>
        <option value="">c3</option>
        <option value="">c4</option>
        <option value="">c5</option>
      </select>
      <button>New user</button>
    </div>
  );
};
