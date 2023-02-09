import styled from "styled-components";
import { basicPlateStyle, fontSizes } from "./constants";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type TextInputProps = {
  className?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = ({ className, ...restProps }: { className: string }) => {
  return <input type="text" className={className} {...restProps} />;
};

export const TextInput = styled.input`
  font-size: ${fontSizes.lg};
  font-family: inherit;

  letter-spacing: 0.05em;

  padding: 12px 20px;
  width: 100%;

  text-transform: uppercase;

  ${basicPlateStyle}
`;
