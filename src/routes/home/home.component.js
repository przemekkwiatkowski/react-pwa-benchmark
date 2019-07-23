import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { FormattedMessage } from 'react-intl';

import messages from './home.messages';
import { Container, BenchmarksContainer } from './home.styles';
import { H1 } from '../../theme/typography';
import { BenchmarkTile } from '../../shared/components/testTile';

export class Home extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    language: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Container>
        <Helmet title={this.props.intl.formatMessage(messages.pageTitle)} />
        <H1>
          <FormattedMessage {...messages.welcome} />
        </H1>
        <BenchmarksContainer>
          <BenchmarkTile title="Test 1" link="/1" />
          <BenchmarkTile title="Test 2" link="/2" />
          <BenchmarkTile title="Test 3" link="/3" />
          <BenchmarkTile title="Test 4" link="/4" />
        </BenchmarksContainer>
      </Container>
    );
  }
}
