import React, { memo } from 'react';
import PropTypes from 'prop-types';

import messages from './controls.messages';
import { ControlButton } from '../controlButton';
import { Container, StartButton, SampleButton, SaveButton } from './controls.styles';

export const Controls = memo(({ isActive, stop, start, saveResult }) => {
  const buttonMessage = isActive ? messages.stopBenchmark : messages.startBenchmark;

  const handleStartButton = () => {
    isActive ? stop() : start();
  };

  const handleSaveButton = () => saveResult();

  return (
    <Container>
      <StartButton>
        <ControlButton title={buttonMessage} primary onClick={handleStartButton} />
      </StartButton>
      {isActive && (
        <SampleButton>
          <ControlButton title={messages.addSample} />
        </SampleButton>
      )}
      {isActive && (
        <SaveButton>
          <ControlButton title={messages.saveResult} onClick={handleSaveButton} />
        </SaveButton>
      )}
    </Container>
  );
});

Controls.propTypes = {
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  saveResult: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
