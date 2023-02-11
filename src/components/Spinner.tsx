import styled, { keyframes } from "styled-components";
import { LogoSVG } from "../icons/Logo";
import React, { PropsWithChildren } from "react";
import { BaseDivFC } from "./base";

const rotation = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const RotatingLogo = styled(LogoSVG)`
  position: absolute;
  inset: 0;
  scale: 0.5;
  animation: 0.7s ${rotation} ease-in-out infinite;
`;

const Wrapper = styled(BaseDivFC)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 100%:
  
  
  /* display: flex: */
  justify-content: center;
  align-items:center;
    width: 50px;
    height: 50px;
`;

export const Spinner = () => (
  <Wrapper>
    <RotatingLogo />
  </Wrapper>
);
