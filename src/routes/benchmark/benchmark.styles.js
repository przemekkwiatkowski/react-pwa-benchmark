import styled from 'styled-components';
import { colors } from '../../theme/styled';

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

export const TestDescription = styled.div`
  height: 80%;
  width: 100%;
  border: 1px solid ${colors.greyLight2};
`;
