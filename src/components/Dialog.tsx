import styled from "styled-components";
import { basicPlateStyle, colors, fontSizes, fontWeights } from "./constants";
import { BaseDivFC } from "./base";

type DialogProps = {
  isCollapsedAtMobile?: boolean;
};

const Base = BaseDivFC<DialogProps>;

export const Dialog = styled(Base)`
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

  ${(props) =>
    props.isCollapsedAtMobile
      ? `
    @media (max-width: 550px) {
        padding: 0;
        border: none;
        box-shadow: none;
    }
  `
      : ""}
`;
