export const colors = {
  black: `#000000`,
  darkblue: `#5C2DD5`,
  lightblue: `#7945FF`,
  pink: `#FD6687`,
  green: `#FFCE67`,
  white: `#FFFFFF`,
} as const;

const defaultColor = colors.black;

export const colorSchemes = {
  white: getColorScheme([colors.white]),
  pink: getColorScheme([colors.pink, colors.white]),
  green: getColorScheme([colors.green]),
} as const;

export type Color = typeof colors[keyof typeof colors];

export type ColorScheme = keyof typeof colorSchemes

export const fontSizes = {
  small: "16px",
  medium: "24px",
  lg: "36px",
  xl: "56px",
} as const

export const fontWeights = {
  bold: "700",
  regular: "400",
};
export const basicBorderRadius = `border-radius: 20px;`

export const basicPlateStyle = `
    box-shadow: 0px 10px 0px ${colors.black};
    border: 3px solid ${colors.black};
    ${basicBorderRadius}
`;

export const bgColorTransition = `transition: background-color 0.2s ease-in;`
export const hoverBoxShadow = `box-shadow: 0px 10px 0px ${colors.darkblue};`


function getColorScheme([bgColor, color]: [Color, Color?]) {
  return {
    bgColor,
    color: color ? color : defaultColor,
  };
}
