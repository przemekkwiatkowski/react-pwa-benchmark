import styled from 'styled-components';
import { colors } from '../../../theme/styled';

export const Button = styled.button`
  width: 100px;
  padding: ${props => (props.primary ? '10px 20px' : '5px 10px')};
  color: ${props => (props.primary ? colors.whiteSmoke : colors.blue)};
  border: 2px solid ${props => (props.primary ? colors.whiteSmoke : colors.blue)};
  background-color: ${props => (props.primary ? colors.blue : colors.whiteSmoke)};
  border-radius: 10px;
  font-size: 0.8rem;
  text-transform: uppercase;
  outline: none;
`;
