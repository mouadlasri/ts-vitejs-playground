import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Movingdot } from "./components/movingdot/index";

function App() {
  return (
    <>
      <h1>Vite App</h1>

      <Movingdot />
    </>
  );
}

export default App;
