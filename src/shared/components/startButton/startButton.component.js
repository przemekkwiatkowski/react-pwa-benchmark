import React from 'react';

import { FormattedMessage } from 'react-intl';

import messages from './startButton.messages';
import { Button } from './startButton.styles';

const StartButton = () => {
  return (
    <Button type="button">
      <FormattedMessage {...messages.startButton} />
    </Button>
  );
};

export default StartButton;
