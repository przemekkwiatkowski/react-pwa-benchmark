import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from './styled';

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
    font-family: ${fonts.montserrat};
    font-size: 15px;
    border: 1px solid ${colors.grey};
    margin: 0 auto;
    box-sizing: inherit;
    padding: 20px;
    
    div {
      height: 100%;
    }
  }
`;
