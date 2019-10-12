import styled, { css } from 'styled-components';
import { colors } from '../../../theme/styled';
import { styleWhenTrue } from '../../utils/rendering';

const primary = css`
  padding: '10px 20px';
  color: ${colors.whiteSmoke};
  border: 2px solid ${colors.whiteSmoke};
  background-color: ${colors.blue};
`;

const secondary = css`
  padding: '5px 10px';
  color: ${colors.blue};
  border: 2px solid ${colors.blue};
  background-color: ${colors.whiteSmoke};
`;

export const Button = styled.button`
  width: 100px;
  border-radius: 10px;
  font-size: 0.8rem;
  text-transform: uppercase;
  outline: none;
  ${styleWhenTrue(props => props.primary, primary, secondary)}
`;
