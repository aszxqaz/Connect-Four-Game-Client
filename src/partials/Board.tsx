import styled from "styled-components";
import { LayerBlack as UnstyledLayerBlack } from "../icons/LayerBlack";
import { LayerWhite as UnstyledLayerWhite } from "../icons/LayerWhite";
import { PropsWithChildren, createElement, useContext, useState } from "react";
import { BaseDivFC } from "../components/base";
import { MechanicsContext } from "../App";
import { HoverLine } from "./LineHover";

export const Board: React.FC<PropsWithChildren> = ({ children }) => {
  const mec = useContext(MechanicsContext);
  const [pos, setPos] = useState(0);

  return (
    <Wrapper>
      <BlackLayer />
      {children}
      {/* <Absolute> */}
      <WhiteLayer />
      {/* <HoverLine
        onClick={() => {
          setPos((prev) => prev + 1);
        }}
        style={{
          position: "absolute",
          top: 0,
          bottom: "10%",
          left: mec.getXPos(pos),
          //   transform: "translateX(-50%)",
          //   width: "70px",
          //   backgroundColor: "red",
          //   borderRadius: "10px",
          translate: "-50%",
        }}
      /> */}
      {/* </Absolute> */}
    </Wrapper>
  );
};

const BlackLayer = styled(UnstyledLayerBlack)`
  width: 336px;
  height: 316px;
  @media (min-width: 768px) {
    width: 632px;
    height: 594px;
  }
`;

const WhiteLayer = styled(UnstyledLayerWhite)`
  position: absolute;
  inset: 0;
  width: 336px;
  height: 311px;
  @media (min-width: 768px) {
    width: 632px;
    height: 584px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin: auto;
  max-width: 632px;
`;

type AbsoluteProps = {
  className?: string;
  zIndex?: number;
};

const _Absolute = BaseDivFC<AbsoluteProps>;

// const _Absolute: React.FC<PropsWithChildren<AbsoluteProps>> = ({
//   children,
//   className,
// }) => {
//   return <div className={className}>{children}</div>;
// };

const Absolute = styled(_Absolute)`
  position: absolute;
  inset: 0;
  ${({ zIndex }) => (zIndex ? `z-index: ${zIndex};` : "")}
`;
