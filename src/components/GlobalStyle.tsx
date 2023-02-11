import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        margin: 0;
        height: 100%;

        font-family: 'Space Grotesk';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: hsl(257, 100%, 64%);
    }
    #root {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    svg {
        display: block;
    }
`;
