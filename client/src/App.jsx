import React from "react";
import "./App.css";

const products = [
  { title: 'Kubis', id: 1 },
  { title: 'Bawang Putih', id: 2 },
  { title: 'Apel', id: 3 },
];

export default function App () {

  const listItems = products.map((product) => (
    <li key={product.id}>
      {product.title}
    </li>
  ))
  return (
   <div>
    <ul>{listItems}</ul>
   </div>
  )
}