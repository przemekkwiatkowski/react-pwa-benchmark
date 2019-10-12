import React from 'react';
import { storiesOf } from '@storybook/react';

import { ControlButton } from './controlButton.component';

const defaultProps = {};

storiesOf('ControlButton', module).add('Default', () => <ControlButton {...defaultProps} />);
