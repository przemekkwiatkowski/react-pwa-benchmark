import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Tile = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  border: 1px solid grey;
  text-decoration: none;
`;
