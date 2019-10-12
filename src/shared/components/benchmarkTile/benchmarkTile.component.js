import React from 'react';
import PropTypes from 'prop-types';

import benchmarkIcon from '../../../images/benchmark.png';
import { Tile, Title, Image } from './benchmarkTile.styles';
import { ROUTES } from '../../../routes/index';

export const BenchmarkTile = ({ title, link }) => {
  return (
    <Tile to={`${ROUTES.benchmark}${link}`}>
      <Image>
        <img src={benchmarkIcon} />
      </Image>
      <Title>{title}</Title>
    </Tile>
  );
};

BenchmarkTile.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
