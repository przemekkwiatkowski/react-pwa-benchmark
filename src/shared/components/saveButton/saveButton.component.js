import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import messages from './saveButton.messages';
import { Button } from './saveButton.styles';

const SaveButton = ({ saveResult }) => {
  const handleClick = () => saveResult();

  return (
    <Button type="button" onClick={handleClick}>
      <FormattedMessage {...messages.saveResults} />
    </Button>
  );
};

SaveButton.propTypes = {
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  saveResult: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  startedAt: PropTypes.string,
};

export default SaveButton;
