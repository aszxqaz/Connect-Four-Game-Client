import { createContext, useState } from "react";
import "./App.css";
import { EnterName } from "./partials/EnterName";
import { Board } from "./partials/Board";
import { CounterLarge } from "./icons/CounterLargeSVG";
import { colors } from "./components/constants";
import { Mechanics } from "./mechanics/Mechanics";
import { MotionCounter } from "./motions/MotionCounter";

const mechanics = new Mechanics(632, 594);

export const MechanicsContext = createContext(mechanics);

function App() {
  const [count, setCount] = useState(0);

  return (
    <MechanicsContext.Provider value={mechanics}>
      {/* <Button variant="primary" icon={<IconPvP />}>
        Play With Player
      </Button>
      <Button variant="outline" align="start">
        Game Rules
      </Button> */}
      {/* <TurnPlate colorScheme="white" title="PLAYER 2’S TURN">14s</TurnPlate> */}
      {/* <SimpleButton>Menu</SimpleButton> */}
      <Board>
        <MotionCounter />
      </Board>
    </MechanicsContext.Provider>
  );
}

export default App;
