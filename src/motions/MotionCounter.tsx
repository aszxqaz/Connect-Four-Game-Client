import { m } from "framer-motion";
import { colors } from "../components/constants";
import { CounterLarge } from "../icons/CounterLargeSVG";
import { useContext } from "react";
import { MechanicsContext } from "../App";
import { useAnimationControls } from "framer-motion";

export const MotionCounter = () => {
  const mec = useContext(MechanicsContext);
  const animate = useAnimationControls();
  return (
    <m.div
      style={{
        position: "absolute",
        transform: `translate(-50%, -50%)`,
        left: mec.getInitialLeftPos(7),
        width: mec.getCounterSize()
      }}
      initial={{
        top: 0,
      }}
      animate={animate}
      onClick={() => {
        animate.start({
          top: mec.getYPos(6),
          transition: {
            type: "tween",
          },
        });
      }}
    >
      <CounterLarge fillColor={colors.pink} />
    </m.div>
  );
};
