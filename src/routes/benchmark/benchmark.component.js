import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './benchmark.styles';
import { H2 } from '../../theme/typography';
import { StartButton } from '../../shared/components/startButton';
import { SaveButton } from '../../shared/components/saveButton';
import { AddSample } from '../../shared/components/addSample';

const Benchmark = props => {
  const handleClick = () => {
    props.history.goBack();
  };

  return (
    <Container>
      <button type="button" onClick={handleClick}>
        go back
      </button>
      <H2>Test</H2>
      <StartButton />
      {props.isActive && props.startedAt && <AddSample />}
      {props.isActive && <SaveButton />}
    </Container>
  );
};

Benchmark.propTypes = {
  startedAt: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Benchmark;
