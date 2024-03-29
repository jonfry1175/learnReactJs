import React from "react";

const App = () => {
  function MyButton() {
    return (
      <button>Saya adalah tombol</button>
    );
  }
  return (
   <div>
    <h1>Welcome to my react app</h1>
    <MyButton />
   </div>
  );
};

export default App;
