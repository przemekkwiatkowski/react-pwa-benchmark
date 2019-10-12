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
