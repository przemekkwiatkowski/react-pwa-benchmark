import React from 'react';
import PropTypes from 'prop-types';

import { Tile } from './testTile.styles';
import { ROUTES } from '../../../routes/index';

const TestTile = ({ title, link }) => {
  return (
    <Tile to={`${ROUTES.test}${link}`}>
      <span>{title}</span>
    </Tile>
  );
};

TestTile.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default TestTile;
