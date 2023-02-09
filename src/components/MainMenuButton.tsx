import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import { basicPlateStyle, colors, fontSizes, fontWeights, hoverBoxShadow } from "./constants";

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

const InternalButton: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  icon,
  align = "center",
}) => {
  return (
    <button className={className}>
      <span>{children}</span>
      {icon}
    </button>
  );
};

export const MainMenuButton = styled(InternalButton)`
  display: flex;
  justify-content: ${(props) =>
    props.icon
      ? `space-between`
      : props.align === "start"
      ? "flex-start"
      : "center"};

  align-items: center;

  width: 100%;
  max-width: 400px;
  height: 72px;

  padding: 21px 20px 20px 20px;

  text-transform: uppercase;
  background-color: ${({ variant = "outline" }) => internalColors[variant]};

  ${basicPlateStyle}

  font-size: ${fontSizes.medium};
  font-weight: ${fontWeights.bold};
  font-family: inherit;
  letter-spacing: 0.08em;
  color: ${({ variant = "outline" }) =>
    variant === "danger" ? colors.white : colors.black};

  cursor: pointer;

  &:hover {
    border-color: ${colors.darkblue};
    ${hoverBoxShadow};
  }
`;
