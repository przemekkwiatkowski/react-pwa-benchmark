import styled, { css } from 'styled-components';
import { colors } from '../../../theme/styled';
import { styleWhenTrue } from '../../utils/rendering';

const primary = css`
  color: ${colors.whiteSmoke};
  border: 2px solid ${colors.whiteSmoke};
  background-color: ${colors.blue};
`;

const secondary = css`
  color: ${colors.blue};
  border: 2px solid ${colors.blue};
  background-color: ${colors.whiteSmoke};
`;

export const Button = styled.button`
  padding: 20px 30px;
  border-radius: 30px;
  min-width: 200px;
  font-size: 0.8rem;
  text-transform: uppercase;
  outline: none;
  ${styleWhenTrue(props => props.primary, primary, secondary)}
`;
