import React, { Component } from 'react';

import App from './app.container';
import { PageContainer } from '../theme/global';
import { Header } from '../shared/components/header';
import { Content } from '../shared/components/content';

export const ROUTES = {
  base: '/',
  home: '/home',
  notFound: '/404',
  benchmark: '/benchmark',
  benchmarkId: '/benchmark/:id',
};

export default class RootContainer extends Component {
  render() {
    return (
      <App>
        <PageContainer>
          <Header />
          <Content />
        </PageContainer>
      </App>
    );
  }
}
