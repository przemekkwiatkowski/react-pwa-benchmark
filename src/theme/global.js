import styled, { createGlobalStyle } from 'styled-components';
import { colors, fonts } from './styled';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body {
    width: 100vw;
    height: 100vh;
    font-family: ${fonts.montserrat};
    font-size: 15px;
    background-color: ${colors.whiteSmoke};
    
    #app {
      width: inherit;
      height: inherit;
    } 
  }
`;

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: inherit;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
