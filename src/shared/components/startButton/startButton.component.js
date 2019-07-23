import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import messages from './startButton.messages';
import { Button } from './startButton.styles';

const StartButton = ({ isActive, start, stop }) => {
  const handleClick = () => (isActive ? stop() : start());

  return (
    <Button type="button" onClick={handleClick}>
      {isActive ? <FormattedMessage {...messages.stopBenchmark} /> : <FormattedMessage {...messages.startBenchmark} />}
    </Button>
  );
};

StartButton.propTypes = {
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default StartButton;
