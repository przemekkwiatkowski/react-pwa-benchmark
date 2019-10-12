import styled from 'styled-components';

import { fonts, colors } from './styled';

export const H1 = styled.h1`
  font-family: ${fonts.montserrat};
  font-weight: 600;
  color: ${colors.greyDark};
  text-align: left;
  margin: 0;

  span {
    word-spacing: 100vw;
  }
`;

export const H2 = styled.h2`
  font-family: ${fonts.montserrat};
  font-size: 0.8rem;
  font-weight: bold;
  color: ${colors.grey};
  margin: 0;
`;

export const Link = styled.a`
  text-decoration: none;
`;
