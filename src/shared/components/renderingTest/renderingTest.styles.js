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

export const Number = styled.p``;

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

export const RenderContainer = styled.div`
  height: calc(100% - 50px);
  width: 100%;
  overflow: auto;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;

  * {
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid ghostwhite;
    padding: 0;
    margin: 0;
  }
`;
