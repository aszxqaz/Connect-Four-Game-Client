import { LazyMotion, domAnimation } from "framer-motion";
import { createContext } from "react";
import "./App.css";
import { ScreenResolver } from "./ScreenResolver";
import { Mechanics } from "./mechanics/Mechanics";
import { GlobalStyle } from "./components/GlobalStyle";

const mechanics = new Mechanics(632, 594);

export const MechanicsContext = createContext(mechanics);

function App() {
  console.log(import.meta.env)
  return (
    <MechanicsContext.Provider value={mechanics}>
      <LazyMotion features={domAnimation}>
        <GlobalStyle />
        <ScreenResolver />
      </LazyMotion>
    </MechanicsContext.Provider>
  );
}

export default App;
