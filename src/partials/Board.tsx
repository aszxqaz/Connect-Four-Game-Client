import styled from "styled-components";
import { LayerBlack } from "../icons/LayerBlack";
import { LayerWhite } from "../icons/LayerWhite";
import { PropsWithChildren, createElement } from "react";
import { BaseDivFC } from "../components/base";

export const Board: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper>
      <LayerBlack />
      {children}
      <Absolute>
        <LayerWhite />
      </Absolute>
    </Wrapper>
  );
};

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

