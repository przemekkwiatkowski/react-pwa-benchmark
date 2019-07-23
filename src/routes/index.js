import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import App from './app.container';
import { Home } from './home';
import { Benchmark } from './benchmark';
import { NotFound } from './notFound';

export const ROUTES = {
  home: '/',
  notFound: '/404',
  test: '/test',
};

export default class RootContainer extends Component {
  render() {
    return (
      <App>
        <Switch>
          <Route exact path={`${ROUTES.home}`} component={Home} />
          <Route path={`${ROUTES.test}`} component={Benchmark} />
          <Route component={NotFound} />
        </Switch>
      </App>
    );
  }
}
