import React from 'react';
import PropTypes from 'prop-types';

import { Tile } from './benchmarkTile.styles';
import { ROUTES } from '../../../routes/index';

const BenchmarkTile = ({ title, link }) => {
  return (
    <Tile to={`${ROUTES.test}${link}`}>
      <span>{title}</span>
    </Tile>
  );
};

BenchmarkTile.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default BenchmarkTile;
