import styled from "styled-components";
import { BaseDivFC } from "./base";
import { colors, fontSizes, fontWeights } from "./constants";


export const ErrorMessage = styled(BaseDivFC)`
    display: flex;
    align-items: flex-end;
    width: 100%;

    color: ${colors.white};
    font-size: ${fontSizes.medium};
    font-weight: ${fontWeights.bold};
    min-height: 40px;
`