import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';

import messages from './controls.messages';
import { ControlButton } from '../controlButton';
import { Container, StartButton } from './controls.styles';
import { BatteryTest } from '../batteryTest';
import { RenderingTest } from '../renderingTest';
import { ResponsivenessTest } from '../responsivenessTest';
import { renderWhenTrue } from '../../utils/rendering';

export const Controls = memo(props => {
  const { match, start, stop, addSample, saveResult, isActive, benchmark, startedAt, samples, device } = props;
  const buttonMessage = isActive ? messages.stopBenchmark : messages.startBenchmark;

  const startBenchmark = () => {
    start(match.params.id);
  };

  const handleStartButton = () => {
    isActive ? stop() : startBenchmark();
  };

  const handleSaveResult = useCallback(() => {
    saveResult(benchmark, { device, startedAt, samples });
  }, [device, startedAt, samples, isActive]);

  const renderBatteryTest = renderWhenTrue(() => {
    return <BatteryTest stop={stop} saveResult={handleSaveResult} addSample={addSample} />;
  });

  const renderRenderingTest = renderWhenTrue(() => {
    return <RenderingTest stop={stop} saveResult={handleSaveResult} addSample={addSample} />;
  });

  const renderResponsivenessTest = renderWhenTrue(() => {
    return <ResponsivenessTest stop={stop} saveResult={handleSaveResult} addSample={addSample} />;
  });

  return (
    <Container>
      <StartButton>
        <ControlButton title={buttonMessage} primary onClick={handleStartButton} />
      </StartButton>
      {renderBatteryTest(isActive && match.params.id === 'battery')}
      {renderRenderingTest(isActive && match.params.id === 'rendering')}
      {renderResponsivenessTest(isActive && match.params.id === 'geolocation')}
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
  startedAt: PropTypes.string,
  samples: PropTypes.array,
  device: PropTypes.string,
};
