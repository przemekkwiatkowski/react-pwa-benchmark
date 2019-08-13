import React, { memo } from 'react';
import PropTypes from 'prop-types';

import messages from './controls.messages';
import { ControlButton } from '../controlButton';
import { Container, StartButton, SampleButton, SaveButton } from './controls.styles';

export const Controls = memo(props => {
  const { match, start, stop, addSample, saveResult, isActive, benchmark, startedAt, samples, device } = props;
  const buttonMessage = isActive ? messages.stopBenchmark : messages.startBenchmark;

  const handleStartButton = () => {
    isActive ? stop() : start(match.params.id);
  };

  const handleAddSampleButton = () => {
    if (isActive && startedAt) {
      addSample();
    }
  };

  const getResult = () => {
    return {
      device: device,
      startedAt: startedAt,
      samples: samples,
    };
  };

  const handleSaveButton = () => {
    if (isActive) {
      const result = getResult();
      saveResult(benchmark, result);
    }
  };

  return (
    <Container>
      <StartButton>
        <ControlButton title={buttonMessage} primary onClick={handleStartButton} />
      </StartButton>
      {isActive && (
        <SampleButton>
          <ControlButton title={messages.addSample} onClick={handleAddSampleButton} />
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
  match: PropTypes.object.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  addSample: PropTypes.func.isRequired,
  saveResult: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  benchmark: PropTypes.string,
  startedAt: PropTypes.number,
  samples: PropTypes.array,
  device: PropTypes.string,
};
