import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile";
// import LearnButton from "./components/LearnButton";
import LearnForm from "./components/LearnForm";

const App = () => {


  return (
    <div>
      <h1> Data</h1>
      <Profile></Profile> 
      {/* <LearnButton /> */}
      <LearnForm></LearnForm>
    </div>
  );
};

export default App;
