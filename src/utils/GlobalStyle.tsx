import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #1a1a1a;
        font-family: 'Titillium Web', sans-serif;
        font-weight: 300;
        color: #ffffff;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.05em;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        position: relative;
        min-height: 100vh;
    }

    h1 {
        font-size: 48px;
    }

    h2 {
        font-size: 32px;
    }

    h3 {
        font-size: 24px;
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle;