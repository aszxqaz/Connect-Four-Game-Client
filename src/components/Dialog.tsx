import styled from "styled-components";
import { basicPlateStyle, colors, fontSizes, fontWeights } from "./constants";

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  max-width: 480px;

  margin: auto;

  padding: 50px 40px;

  background-color: ${colors.lightblue};
  color: ${colors.white};
  ${basicPlateStyle};
`;