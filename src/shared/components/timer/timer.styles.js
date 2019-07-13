import styled from 'styled-components';

export const PlayButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #8b0000;
  border: 2px solid red;
  color: white;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  outline: none;
  text-transform: uppercase;
  font-family: sans-serif;
  font-size: 12px;
  &:hover {
    color: red;
  }
  &:active {
    background-color: #a02e2e;
  }
`;

export const Time = styled.p`
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 600;
  margin: 50px;
`;

export const DefaultButton = styled.button`
  padding: 5px 10px;
  font-family: sans-serif;
  font-size: 10px;
  text-transform: uppercase;
  border: 1px solid grey;
  background-color: lightgrey;
  margin: 5px;
  outline: 0;
  cursor: pointer;
  &:hover {
    color: #666666;
  }
  &:active {
    background-color: white;
  }
`;
