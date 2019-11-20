import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const StopButton = styled.div`
  button {
    font-size: 10px;
    width: 60px;
    height: 30px;
    padding: 2px;
    min-width: auto;
  }
`;

export const SaveResultButton = styled.div`
  button {
    font-size: 10px;
    width: 60px;
    height: 30px;
    padding: 2px;
    min-width: auto;
  }
`;

export const Number = styled.p`
  &:last-of-type {
    color: darkgreen;
  }
`;

export const InfoBox = styled.div`
  position: fixed;
  bottom: 0;
  height: 50px;
  display: flex;
  box-sizing: border-box;
  padding: 0 30px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;
  border-top: 1px solid grey;
`;

export const Clicker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #ff726f;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  text-align: center;
  transition: 0.3s ease;
  opacity: 1;

  &.active {
    background-color: firebrick;
    transform: scale(0.9);
  }

  &:disabled,
  &[disabled] {
    opacity: 0.5;
  }
`;

export const Cords = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 20px auto;

  p {
    padding: 5px;
    margin: 0;
  }

  &.disabled {
    opacity: 0.5;
  }
`;

export const ConnectionStatus = styled.p`
  color: ${({ connection }) => (connection ? 'darkgreen' : 'darkred')};
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ connection }) => (connection ? 'darkgreen' : 'darkred')};
  }
`;
