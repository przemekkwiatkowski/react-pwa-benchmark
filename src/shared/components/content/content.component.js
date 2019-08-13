import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from '../../../routes';
import { BenchmarksContainer } from '../benchmarksContainer';
import { Controls } from '../controls';
import { Container } from './content.styles';

export const Content = () => {
  const renderControls = props => <Controls {...props} />;

  return (
    <Container>
      <Switch>
        <Route exact path={ROUTES.base} component={BenchmarksContainer} />
        <Route exact path={ROUTES.benchmarkId} render={props => renderControls(props)} />
      </Switch>
    </Container>
  );
};
