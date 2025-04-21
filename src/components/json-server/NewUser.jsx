import axios from "axios";
import React, { useState } from "react";

export const NewUser = ({
  getUsers,
  user,
  isNewUser,
  newuser,
  setIsNewUser,
  setnewuser,
}) => {
  function addNewUser() {
    console.log(newuser);
    axios
      .post("http://localhost:3000/result", newuser)
      .then((res) => {
        console.log("success", res);
        alert("new user created");
        getUsers();
        setnewuser({ name: "", city: "" });
      })
      .catch((error) => {
        alert("newuser is not created");
      });
  }

  function updateUser() {
    axios
      .put(`http://localhost:3000/result/${newuser.id}`, newuser)
      .then((res) => {
        console.log("success", res);
        alert("user updated ");
        getUsers();
        setnewuser({ name: "", city: "" });
        setIsNewUser(true);
      })
      .catch((error) => {
        alert("newuser is not created");
      });
  }

  return (
    <div>
      <h2>{isNewUser ? "NewUser" : "UpdateUser"}</h2>
      <input
        value={newuser.name}
        type="text"
        placeholder="username"
        style={{ marginRight: "10px" }}
        onChange={(event) => {
          setnewuser({ ...newuser, name: event.target.value });
        }}
      />
      <select
        value={newuser.city}
        name=""
        id=""
        style={{ marginRight: "10px" }}
        onChange={(event) => {
          setnewuser({ ...newuser, city: event.target.value });
        }}
      >
        <option>select city</option>
        <option>c1</option>
        <option>c2</option>
        <option>c3</option>
        <option>c4</option>
        <option>c5</option>
      </select>
      <button onClick={isNewUser ? addNewUser : updateUser}>
        {isNewUser ? "New user" : "Update user"}
      </button>
    </div>
  );
};
