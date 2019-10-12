import styled from 'styled-components';

import { fonts, colors } from './styled';

export const H1 = styled.h1`
  font-family: ${fonts.montserrat};
  font-weight: 600;
  color: ${colors.greyDark};
  text-align: left;
  margin-top: 0;

  span {
    word-spacing: 100vw;
  }
`;

export const H2 = styled.h2`
  font-family: ${fonts.montserrat};
  font-weight: bold;
  color: ${colors.black};
`;

export const Link = styled.a`
  text-decoration: none;
`;
