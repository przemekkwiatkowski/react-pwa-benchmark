import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 20%;
  position: relative;
`;

export const StartButton = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const SampleButton = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const SaveButton = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const CameraContainer = styled.div`
  display: ${props => (props.isActive ? 'block' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 1;
`;

export const Video = styled.video`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const Canvas = styled.canvas`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const StopButton = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
`;

export const CaptureButton = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
`;
