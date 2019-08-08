import React from 'react';
import PropTypes from 'prop-types';

import { Tile, Title, Image } from './benchmarkTile.styles';
import { ROUTES } from '../../../routes/index';

const BenchmarkTile = ({ title, link }) => {
  return (
    <Tile to={`${ROUTES.test}${link}`}>
      <Image />
      <Title>{title}</Title>
    </Tile>
  );
};

BenchmarkTile.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default BenchmarkTile;
