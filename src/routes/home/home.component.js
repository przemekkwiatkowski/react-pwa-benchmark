import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';

import messages from './home.messages';
import { H1 } from '../../theme/typography';
import { Container } from './home.styles';
import { Timer } from '../../shared/components/timer';

export class Home extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Container>
        <Helmet title={this.props.intl.formatMessage(messages.pageTitle)} />
        <H1>
          <FormattedMessage {...messages.welcome} />
        </H1>
        <Timer />
      </Container>
    );
  }
}
