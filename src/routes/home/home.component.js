import React, { PureComponent, memo } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { FormattedMessage } from 'react-intl';

import messages from './home.messages';
import { BenchmarksContainer } from './home.styles';
import { H1 } from '../../theme/typography';
import { PageContainer, Header, NavigationContainer, Content } from '../../theme/global';
import { BenchmarkTile } from '../../shared/components/benchmarkTile';

const Home = props => {
  return (
    <PageContainer>
      <Helmet title={props.intl.formatMessage(messages.pageTitle)} />
      <Header>
        <H1>
          <FormattedMessage {...messages.welcome} />
        </H1>
      </Header>
      <NavigationContainer />
      <Content>
        <BenchmarksContainer>
          <BenchmarkTile title="Test 1" link="/1" />
          <BenchmarkTile title="Test 2" link="/2" />
          <BenchmarkTile title="Test 3" link="/3" />
          <BenchmarkTile title="Test 4" link="/4" />
        </BenchmarksContainer>
      </Content>
    </PageContainer>
  );
};

Home.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default memo(Home);
