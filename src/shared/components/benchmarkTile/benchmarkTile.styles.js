import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../../theme/styled';

export const Image = styled.div`
  width: 65px;
  height: 65px;
  transform: translateY(-10px);
  transition: transform 0.3s ease-in-out;
  background-image: url('./images/benchmark.png');
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Tile = styled(Link)`
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  box-sizing: border-box;
  padding: 20px;
  justify-content: center;
  align-items: center;
  color: ${colors.greyDark};
  text-transform: lowercase;
  background-color: ${colors.greyLight};
  border-radius: 5px;
  text-decoration: none;
  box-shadow: 0 1px 2px ${colors.shadow1}, 0 1px 2px ${colors.shadow2};

  &:hover,
  &:active {
    background-color: ${colors.greyLight2};
    cursor: pointer;
    box-shadow: 0 3px 4px ${colors.shadow1}, 0 3px 4px ${colors.shadow2};

    ${Image} {
      transform: translateY(0);
    }
  }
`;

export const Title = styled.span`
  position: absolute;
  width: 100%;
  text-align: center;
  left: 0;
  bottom: 20px;
`;
