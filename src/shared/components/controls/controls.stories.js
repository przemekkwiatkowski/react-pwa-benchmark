import React from 'react';
import { storiesOf } from '@storybook/react';

import { Controls } from './controls.component';

const defaultProps = {};

storiesOf('Controls', module).add('Default', () => <Controls {...defaultProps} />);
