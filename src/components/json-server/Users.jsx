import axios from "axios";
import React, { useEffect, useState } from "react";

export const Users = () => {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
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
                      <button>edit</button>
                    </td>
                    <td>
                      <button>delete</button>
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
