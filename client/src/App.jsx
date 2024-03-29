import React from "react";
import "./App.css";

const products = [
  { title: "Kubis", isFruit: false, id: 1 },
  { title: "Bawang Putih", isFruit: false, id: 2 },
  { title: "Apel", isFruit: true, id: 3 },
];

export default function App() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));

  
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}
