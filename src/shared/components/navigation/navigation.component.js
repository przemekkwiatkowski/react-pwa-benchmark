import React, { memo } from 'react';

import { Container, List, ListItem, ItemLink } from './navigation.styles';

const Navigation = () => {
  return (
    <Container>
      <List>
        <ListItem>
          <ItemLink exact to="/">
            benchmarks
          </ItemLink>
        </ListItem>
        <ListItem>
          <ItemLink exact to="/home/info">
            information
          </ItemLink>
        </ListItem>
        <ListItem>
          <ItemLink exact to="/home/stats">
            statistics
          </ItemLink>
        </ListItem>
        <ListItem>
          <ItemLink exact to="/home/credits">
            credits
          </ItemLink>
        </ListItem>
      </List>
    </Container>
  );
};

export default Navigation;
