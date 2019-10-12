import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { ROUTES } from '../../../routes';
import messages from './header.messages';
import { H1, H2 } from '../../../theme/typography';
import { Navigation } from '../navigation';
import { Container, HeaderContainer, NavigationContainer, NavigationBackIcon } from './header.styles';

export const Header = props => {
  const handleClick = () => {
    props.history.goBack();
  };

  const renderHomeHeader = () => {
    return (
      <H1>
        <FormattedMessage {...messages.welcome} />
      </H1>
    );
  };

  const renderBenchmarkHeader = () => {
    return (
      <>
        <NavigationBackIcon onClick={handleClick} />
        <H1>Title of the test</H1>
        <H2>benchmark</H2>
      </>
    );
  };

  return (
    <Container>
      <HeaderContainer>
        <Switch>
          <Route path={ROUTES.benchmarkId} component={renderBenchmarkHeader} />
          <Route path={ROUTES.home} component={renderHomeHeader} />
          <Route exact path={ROUTES.base} component={renderHomeHeader} />
        </Switch>
      </HeaderContainer>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Container>
  );
};

Header.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
