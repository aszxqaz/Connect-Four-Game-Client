import { createContext, useState } from "react";
import "./App.css";
import { EnterName } from "./partials/EnterName";
import { Board } from "./partials/Board";
import { CounterLarge } from "./icons/CounterLargeSVG";
import { colors } from "./components/constants";
import { Mechanics } from "./mechanics/Mechanics";
import { MotionCounter } from "./motions/MotionCounter";
import { LazyMotion, domAnimation } from "framer-motion";
import { ScreenResolver } from "./ScreenResolver";
import { Spinner } from "./components/Spinner";

const mechanics = new Mechanics(632, 594);

export const MechanicsContext = createContext(mechanics);

function App() {
  console.log(import.meta.env)
  return (
    <MechanicsContext.Provider value={mechanics}>
      <LazyMotion features={domAnimation}>
        <ScreenResolver />
      </LazyMotion>
    </MechanicsContext.Provider>
  );
}

export default App;
