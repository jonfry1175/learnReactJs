import React,{useState} from "react";
import NowLoading from "./NowLoading";

const Profile = () => {
  const [users, setUsers] = useState([
    {
      name: "andri",
      age: "20",
      hobby: "coding",
    },
    {
      name: "jojo",
      age: "19",
      hobby: "mandi",
    },
  ]);

  return (
    <>
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
