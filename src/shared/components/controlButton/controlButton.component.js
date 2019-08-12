import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Button } from './controlButton.styles';

export const ControlButton = memo(({ title, primary, onClick }) => {
  return (
    <Button type="button" primary={primary} onClick={onClick}>
      <FormattedMessage {...title} />
    </Button>
  );
});

ControlButton.propTypes = {
  title: PropTypes.object.isRequired,
  primary: PropTypes.bool,
  onClick: PropTypes.func,
};
