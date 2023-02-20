import styled, { keyframes } from "styled-components";
import { BaseDivFC } from "../components/base";
import { BaseComponent } from "../types";

const bgAnimation = keyframes`
    from {
            background-position: 0;
    }

	to {
		background-position: 0 450px;
	}
`;

export const HoverLine: BaseComponent<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  return (
    <Border {...props}>
      <Inner />
      <div></div>
    </Border>
  );
};

const Border = styled.div`
  width: 90px;
  height: 550px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  transition: left 0.15s ease-out;
  trans

  background: rgb(0 0 0 / 20%);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
          45deg,
          white 0%,
          white 7.5px,
          blue 7.5px,
          blue 15px,
          white 15px,
          white 22.5px,
          blue 22.5px,
          blue 30px
        )
        0 0 / 1000% 1000%,
      linear-gradient(currentColor 0 0) 0 50% /100% 10px no-repeat;

    /* transform: translateX(-20%) translateY(-20%) rotate(-45deg); */
    animation: ${bgAnimation} 100s linear infinite;
    transition: 0.35s;

    box-shadow: 0 0 100px rgb(0 0 0 / 50%);
    border: 1px solid black;

    --b: 2px; /* the border thickness */
    --d: 10px; /* the distance from the edge */
    --o: 15px; /* the offset on hover */
    --s: 1; /* the direction of the hover effect (+1 or -1)*/

    --_d: calc(var(--d) + var(--s) * 1em);
    --_g: calc(100% - 2 * (var(--_d) + var(--b)));
    --_m: conic-gradient(from 90deg at var(--_d) var(--_d), #0000 25%, #000 0) 0
      0 / calc(100% - var(--_d)) calc(100% - var(--_d));
    -webkit-mask: var(--_m);
    mask: var(--_m);
    font-size: 0;
    transition: 0.35s;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
   /* --b: 5px; /* the border thickness */
  --d: 20px; /* the distance from the edge */
  --o: 15px; /* the offset on hover */
  --s: 1; /* the direction of the hover effect (+1 or -1)*/

  --_d: calc(var(--d) + var(--s) * 1em);
  --_g: calc(100% - 2 * (var(--_d) + var(--b)));
  --_m: conic-gradient(from 90deg at var(--_d) var(--_d), #0000 25%, #000 0) 0 0 /
      calc(100% - var(--_d)) calc(100% - var(--_d)),
    linear-gradient(#000 0 0) 50% / var(--_g) var(--_g) no-repeat;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  font-size: 0;
  cursor: pointer;
  transition: 0.35s;  */
`;
