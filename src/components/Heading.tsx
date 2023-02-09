import styled from "styled-components";
import { fontSizes, fontWeights } from "./constants";
import { PropsWithChildren } from "react";

type HeadingProps = {
  size?: keyof typeof fontSizes;
  className?: string;
};

const Internal: React.FC<PropsWithChildren<HeadingProps>> = ({
  className,
  children,
}) => <div className={className}>{children}</div>;

export const Heading = styled(Internal)`
  font-size: ${(props) => fontSizes[props.size || "xl"]};
  font-weight: ${fontWeights.bold};

  text-align: center;
  text-transform: uppercase;
`;
