import axios from "axios";
import React, { useEffect, useState } from "react";

export const Users = ({ users, getUsers, setIsNewUser, setnewuser }) => {
  useEffect(() => {
    getUsers();
  }, []);
  function deleteUser(id) {
    axios
      .delete(`http://localhost:3000/result/${id}`)
      .then((res) => {
        console.log("user deleted successfully", res);
      })
      .catch((err) => {
        console.log("failed to remove user");
      });
    alert("user deleted");
    getUsers();
  }

  function updateUser(user) {
    setIsNewUser(false);
    setnewuser(user);
  }

  return (
    <div>
      <h2>User Information</h2>
      {users.length > 0 && (
        <div style={{ margin: "30px " }}>
          <table frame="box" rules="all" cellPadding="10px" width="70%">
            <thead>
              <tr>
                <th>Name</th>
                <th>City</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr align="center">
                    <td>{user.name}</td>
                    <td>{user.city}</td>
                    <td>
                      <button
                        onClick={() => {
                          updateUser(user);
                        }}
                      >
                        edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          deleteUser(user.id);
                        }}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
