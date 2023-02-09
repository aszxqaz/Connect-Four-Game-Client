import { HTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";
import { TurnPlateSvg } from "../icons/TurnPlateSvg";
import {
  Color,
  ColorScheme,
  colorSchemes,
  colors,
  fontSizes,
  fontWeights,
} from "./constants";

type TurnPlateProps = {
  title: string;
  colorScheme: ColorScheme;
} & HTMLAttributes<HTMLDivElement>;

const InternalTurnPlate: React.FC<PropsWithChildren<TurnPlateProps>> = ({
  children,
  className,
  colorScheme,
  title,
}) => {
  return (
    <Outer>
      <TurnPlateSvg color={colorSchemes[colorScheme].bgColor} />
      <div className={className}>
        <div className="title">{title}</div>
        <div className="content">{children}</div>
      </div>
      ;
    </Outer>
  );
};

export const TurnPlate = styled(InternalTurnPlate)`
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: ${fontSizes.xl};
  font-weight: ${fontWeights.bold};

  padding-bottom: 5px;

  color: ${(props) => colorSchemes[props.colorScheme].color};

  & .title {
    font-size: ${fontSizes.small};
    text-transform: uppercase;
  }
`;

export const Outer = styled.div`
  position: relative;

  width: fit-content;
`;
