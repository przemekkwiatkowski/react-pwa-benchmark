import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../../theme/styled';

export const Tile = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  border: 1px solid ${colors.grey};
  text-decoration: none;
`;
