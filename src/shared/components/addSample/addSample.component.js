import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import messages from './addSample.messages';
import { Button } from './addSample.styles';

const AddSample = props => {
  const handleClick = () => props.addSample();

  return (
    <Button type="button" onClick={handleClick}>
      <FormattedMessage {...messages.addSample} />
    </Button>
  );
};

AddSample.propTypes = {
  isActive: PropTypes.bool.isRequired,
  addSample: PropTypes.func.isRequired,
};

export default AddSample;
