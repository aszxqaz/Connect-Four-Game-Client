import styled from "styled-components";
import { basicBorderRadius, bgColorTransition, colors, fontWeights } from "./constants";

export const SimpleButton = styled.button`
    ${basicBorderRadius}
    padding: 10px 21px;
    color: ${colors.white};
    font-weight: ${fontWeights.bold};
    background-color: ${colors.darkblue};
    text-transform: uppercase;
    border: none;

    cursor: pointer;
    ${bgColorTransition}

    &:hover {
        background-color: ${colors.pink};
    }
`
