import React, { useState } from "react";
import axios from "axios"; 

const LearnForm = () => {
  const [name, setName] = useState("");
  const [hobby, setHobby] = useState("");
  const [age, setAge] = useState(10)

  const addUser = async () => {
    try {
      const result = await axios({
        method: "POST",
        url: "http://localhost:3000/users",
        data: {
          name, age, hobby
        }
      })
      console.log(result.data)
    } catch (error) {
      console.log(error.data)
    }
  }

  const handleSubmit = async(event) => {

    event.preventDefault();
    addUser()
    // console.log(()=>addUser())
  };

  return (
    <div>
      <h2>Add data user D</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            id="name"
            name="name"
          />
        </div><div>
          <label htmlFor="name">Age:</label>
          <input
            onChange={(e) => setAge(e.target.value)}
            value={age}
            type="number"
            id="age"
            name="age"
          />
        </div>
        <div>
          <label htmlFor="hobby">Hobby:</label>
          <input
            onChange={(e) => setHobby(e.target.value)}
            value={hobby}
            type="text"
            id="hobby"
            name="hobby"
          />
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LearnForm;
