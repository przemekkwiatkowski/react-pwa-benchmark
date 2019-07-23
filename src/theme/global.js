import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body {
    width: 414px;
    height: 736px;
    border: 1px solid grey;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 20px;
    
    div {
      height: 100%;
    }
  }
`;
