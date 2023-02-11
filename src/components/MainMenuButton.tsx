import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import {
  basicPlateStyle,
  colors,
  fontSizes,
  fontWeights,
  hoverBoxShadow,
} from "./constants";
import { Spinner } from "./Spinner";

type Variants = "primary" | "outline" | "danger";

type ButtonProps = {
  variant?: Variants;
  icon?: ReactNode;
  align?: "start" | "center";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const internalColors: Record<Variants, typeof colors[keyof typeof colors]> = {
  primary: colors.green,
  outline: colors.white,
  danger: colors.pink,
};

const Base: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  icon,
  align = "center",
  ...rest
}) => {
  return (
    <button className={className} {...rest}>
      {rest.disabled ? <Spinner /> : null}
      <span>{children}</span>
      {icon}
    </button>
  );
};

export const MainMenuButton = styled(styled(Base)`
  display: flex;
  position: relative;

  align-items: center;

  width: 100%;
  max-width: 400px;
  height: 72px;

  padding: 21px 20px 20px 20px;

  text-transform: uppercase;

  ${basicPlateStyle}

  font-size: ${fontSizes.medium};
  font-weight: ${fontWeights.bold};
  font-family: inherit;

  cursor: pointer;
  user-select: none;

  transition: all 0.2s ease-in;

  &:disabled {
    box-shadow: 0px 2px 0px ${colors.black};
    color: transparent;
    transform: translateY(8px);
    cursor: initial;
  }
`)`
  justify-content: ${(props) =>
    props.icon
      ? `space-between`
      : props.align === "start"
      ? "flex-start"
      : "center"};

  background-color: ${({ variant = "outline" }) => internalColors[variant]};

  color: ${({ variant = "outline" }) =>
    variant === "danger" ? colors.white : colors.black};
  &:hover:not(:disabled) {
    border-color: ${colors.darkblue};
    ${hoverBoxShadow};
  }
`;
