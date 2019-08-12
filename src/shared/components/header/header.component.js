import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { getBenchmarkData } from '../../../content';
import { ROUTES } from '../../../routes';
import messages from './header.messages';
import { H1, H2 } from '../../../theme/typography';
import { Navigation } from '../navigation';
import reactImage from '../../../images/react.png';
import benchmarkImage from '../../../images/benchmark.png';
import { Container, HeaderContainer, NavigationContainer, NavigationBackIcon, Image } from './header.styles';

export const Header = props => {
  const handleClick = () => {
    props.history.push(ROUTES.base);
  };

  const renderHomeHeader = () => {
    return (
      <>
        <H1>
          <FormattedMessage {...messages.welcome} />
        </H1>
        <Image>
          <img src={reactImage} />
        </Image>
      </>
    );
  };

  const renderBenchmarkHeader = ({ match }) => {
    const benchmark = getBenchmarkData(match.params.id)[0];
    const header = benchmark.name.toLowerCase();
    return (
      <>
        <NavigationBackIcon onClick={handleClick} />
        <H1>{header}</H1>
        <H2>
          <FormattedMessage {...messages.benchmarkSubtitle} />
        </H2>
        <Image>
          <img src={benchmarkImage} />
        </Image>
      </>
    );
  };

  return (
    <Container>
      <HeaderContainer>
        <Switch>
          <Route path={`${ROUTES.benchmarkId}`} render={props => renderBenchmarkHeader(props)} />
          <Route path={ROUTES.home} render={renderHomeHeader} />
          <Route exact path={ROUTES.base} render={renderHomeHeader} />
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
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
