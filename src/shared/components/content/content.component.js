import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from '../../../routes';
import { BenchmarksContainer } from '../benchmarksContainer';
import { Controls } from '../controls';
import { Container } from './content.styles';

export const Content = () => {
  return (
    <Container>
      <Switch>
        <Route exact path={ROUTES.base} component={BenchmarksContainer} />
        <Route path={ROUTES.benchmark} component={Controls} />
      </Switch>
    </Container>
  );
};
