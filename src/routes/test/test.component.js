import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Container } from './test.styles';

const Test = ({ history }) => {
  const goBack = () => history.goBack();

  return (
    <Container>
      <button type="button" onClick={goBack}>
        go back
      </button>
      <p>Test</p>
    </Container>
  );
};

Test.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Test);
