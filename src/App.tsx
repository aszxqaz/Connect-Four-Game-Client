import { useState } from "react";
import blackLayer from "./layer_black.svg";
import whiteLayer from "./layer_white.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ position: "relative" }}>
      <img src={blackLayer} />
      <div style={{ position: "absolute", top: 0 }}>
        <img src={whiteLayer} />
      </div>
    </div>
  );
}

export default App;
