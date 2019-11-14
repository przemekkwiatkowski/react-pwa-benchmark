import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { navigation } from '../../../content';
import { Container, List, ListItem, ItemLink } from './navigation.styles';
import { ROUTES } from '../../../routes';

const Navigation = () => {
  const renderListItem = (index, link, name) => {
    return (
      <ListItem key={index}>
        <ItemLink exact to={link}>
          {name}
        </ItemLink>
      </ListItem>
    );
  };

  const renderHomeNavigation = () => {
    return navigation.home.map(({ name, path }, index) => {
      const link = path === ROUTES.base ? path : `${ROUTES.home}${path}`;
      return renderListItem(index, link, name);
    });
  };

  const renderBenchmarkNavigation = ({ match }) => {
    return navigation.benchmark.map(({ name, path }, index) => {
      const link = path === ROUTES.base ? match.url : `${match.url}${path}`;
      return (
        <ListItem key={index}>
          <ItemLink exact to={link}>
            {name}
          </ItemLink>
        </ListItem>
      );
    });
  };

  return (
    <Container>
      <List>
        <Switch>
          <Route path={ROUTES.benchmarkId} render={props => renderBenchmarkNavigation(props)} />
          <Route path={ROUTES.home} render={renderHomeNavigation} />
          <Route exact path={ROUTES.base} render={renderHomeNavigation} />
        </Switch>
      </List>
    </Container>
  );
};

export default Navigation;
