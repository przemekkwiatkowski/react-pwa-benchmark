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

export const Header = styled.header`
  height: 25%;
  width: 100%;
  box-sizing: border-box;
  position: relative;

  &::after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    display: block;
    height: 1px;
    width: 60%;
    background-color: ${colors.greyLight};
  }
`;

export const NavigationContainer = styled.header`
  height: 15%;
  width: 100%;
  box-sizing: border-box;
`;

export const Content = styled.header`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
`;
