import React, { useState, useEffect } from "react";
import axios from "axios";
import NowLoading from "./NowLoading";

const Profile = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios({
        method: "get",
        url: "http://localhost:3000/users",
      });
      setUsers(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      {/* <button onClick={getUsers}>Get Data</button> */}
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>hobby</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, id) => {
              const { name, age, hobby } = user;
              return (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{hobby}</td>
                </tr>
              );
            })
          ) : (
            <NowLoading />
          )}
        </tbody>
      </table>
    </>
  );
};

export default Profile;
