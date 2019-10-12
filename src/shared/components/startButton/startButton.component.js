import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import messages from './startButton.messages';
import { Button } from './startButton.styles';

const StartButton = ({ isActive, start, stop }) => {
  const handleClick = () => (isActive ? stop() : start());
  const buttonMessage = isActive ? messages.stopBenchmark : messages.startBenchmark;

  return (
    <Button type="button" onClick={handleClick}>
      <FormattedMessage {...buttonMessage} />
    </Button>
  );
};

StartButton.propTypes = {
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default StartButton;
