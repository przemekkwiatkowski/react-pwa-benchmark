import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
`;

export const StopButton = styled.div`
  position: absolute;
  left: 25%;
  transform: translateX(-50%);
  top: 20px;
`;

export const SaveResultButton = styled.div`
  position: absolute;
  right: 25%;
  transform: translateX(50%);
  top: 20px;
`;

export const Video = styled.video`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100vw;
  height: 56.25vw;
`;

export const InfoBox = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  box-sizing: border-box;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
