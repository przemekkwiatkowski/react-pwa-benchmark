import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../../theme/styled';

export const Container = styled.div`
  height: 50%;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  overflow-x: auto;
  position: relative;
  left: -30px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const List = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding-left: 30px;
`;

export const ListItem = styled.li`
  padding: 10px 0;
  margin-right: 25px;
  font-size: 0.9rem;
  flex: 0 0 auto;

  &:last-of-type {
    margin-right: 0;
    padding-right: 30px;
  }
`;

export const ItemLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  position: relative;

  &.active {
    color: ${colors.blue};

    &::after {
      position: absolute;
      content: '';
      display: block;
      height: 2px;
      width: 30px;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${colors.blue};
      border-radius: 1px;
    }
  }
`;
