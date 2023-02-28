import { createGlobalStyle } from "styled-components";

import { Mali } from "@next/font/google";

const mali = Mali({
  weight: ['600', '700'],
  subsets: ["latin"]
})

const GlobalStyle = createGlobalStyle`
  html {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${mali.style.fontFamily};
  }

  body {
    padding: 1.5rem;
    background-color: ${props => props.theme.colors.background.body};
  }
`

export default GlobalStyle