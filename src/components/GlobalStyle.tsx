import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        margin: 0;
        height: 100%;

        font-family: 'Space Grotesk';
        font-size: 16px; 

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
        /* display: block; */
    }

    ol { 
        counter-reset: item;
        list-style-type: none;
        padding: 0;
    }

    li { 
        display: flex; 
        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    li:before { 
        display: block;
        content: counter(item) "  "; 
        counter-increment: item;
        margin-right: 20px;
        font-weight: 700;
    }
`;
