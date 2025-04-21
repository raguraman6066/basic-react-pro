import React, { useState, useEffect } from "react";
import { NewUser } from "./NewUser";
import { Users } from "./Users";
import axios from "axios";

export const UserHome = () => {
  let [users, setUsers] = useState([]);
  let [newuser, setnewuser] = useState({ name: "", city: "" });

  const getUsers = () => {
    console.log("called getusers");
    axios
      .get("http://localhost:3000/result")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        alert("something went wrong");
        console.log(err);
      });
  };

  let [user, setUser] = useState({});

  let [isNewUser, setIsNewUser] = useState(true);

  return (
    <div>
      {
        <NewUser
          getUsers={getUsers}
          user={user}
          setIsNewUser={setIsNewUser}
          isNewUser={isNewUser}
          newuser={newuser}
          setnewuser={setnewuser}
        />
      }
      {
        <Users
          users={users}
          getUsers={getUsers}
          setIsNewUser={setIsNewUser}
          setnewuser={setnewuser}
        />
      }
    </div>
  );
};
