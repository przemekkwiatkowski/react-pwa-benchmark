import styled from 'styled-components';
import { colors } from '../../../theme/styled';

export const Container = styled.div`
  height: 40%;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  height: 60%;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  &::after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    display: block;
    height: 1px;
    width: 60%;
    background-color: ${colors.grey};
  }
`;

export const NavigationContainer = styled.div`
  height: 40%;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

export const NavigationBackIcon = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 20px;
  padding: 0;

  &::after {
    position: absolute;
    content: '<-';
    display: block;
    height: 100%;
    width: 100%;
    text-align: left;
    top: 0;
  }
`;

export const Image = styled.div`
  height: 60px;
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: inherit;
    height: inherit;
  }
`;
