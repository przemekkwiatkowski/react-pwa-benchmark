import React, { memo, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { startCameraBenchmark } from '../../utils/camera';
import messages from './controls.messages';
import { ControlButton } from '../controlButton';
import {
  Container,
  StartButton,
  SampleButton,
  SaveButton,
  CameraContainer,
  Video,
  Canvas,
  StopButton,
  CaptureButton,
} from './controls.styles';

export const Controls = memo(props => {
  const { match, start, stop, addSample, saveResult, isActive, benchmark, startedAt, samples, device } = props;
  const buttonMessage = isActive ? messages.stopBenchmark : messages.startBenchmark;
  const video = useRef(null);
  const canvas = useRef(null);
  // const context = canvas.getContext('2d');

  useEffect(() => {
    console.log(video, canvas);
  }, [video, canvas]);

  const handleStartButton = () => {
    if (isActive) {
      stop();
    } else {
      start(match.params.id);
      startCameraBenchmark(video.current);
    }
  };

  const handleStopButton = () => stop();

  // const handleCaptureButton = () => {
  //   context.drawImage(video, 0, 0, canvas.width, canvas.height);
  //   video.srcObject.getVideoTracks().forEach(track => track.stop());
  // };

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
    <>
      <CameraContainer isActive={isActive}>
        <Video ref={video} autoplay />
        <Canvas ref={canvas} width="100vw" height="100vh" />
        <StopButton>
          <ControlButton primary title={messages.stopBenchmark} onClick={handleStopButton} />
        </StopButton>
        <CaptureButton>
          <ControlButton primary title={messages.capture} onClick={handleStopButton} />
        </CaptureButton>
      </CameraContainer>
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
    </>
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
