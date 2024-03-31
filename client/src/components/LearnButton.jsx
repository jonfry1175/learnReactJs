import React, { useState } from "react";

const LearnButton = () => {
  const [number, setNumber] = useState(0);

  const addNumber = () => {
    const plus = number + 1;
    plus > 10 ? alert(`max = ${number}`) : setNumber(plus);
    console.log(number);
  };

  const substractNumber = () => {
    const min = number - 1;
    min < 0 ? alert(`Min = ${number}`) : setNumber(min);
  };
  console.log(number);

  return (
    <div>
      {/* ()=> callback = function yang dijadikan sebagai paramater */}
      <button onClick={() => addNumber()}>+ Number</button>
      <button onClick={() => substractNumber()}>- Number</button>
      <h1>{number}</h1>
    </div>
  );
};

export default LearnButton;
