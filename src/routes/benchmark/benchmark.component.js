import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Container } from './benchmark.styles';
import { H2 } from '../../theme/typography';
import { StartButton } from '../../shared/components/startButton';

const Test = ({ history }) => {
  const goBack = () => history.goBack();

  return (
    <Container>
      <button type="button" onClick={goBack}>
        go back
      </button>
      <H2>Test</H2>
      <StartButton />
    </Container>
  );
};

Test.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Test);
