import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { FilterableProductTable } from "./components/filterableproducttable/filterableproducttable/index";
import { Movingdot } from "./components/movingdot/index";
import { Form } from "./components/form/index";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  return (
    <>
      <h1>Vite App</h1>

      <FilterableProductTable products={PRODUCTS} />

      <Form />
      <Movingdot />
    </>
  );
}

export default App;
