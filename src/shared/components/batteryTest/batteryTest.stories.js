import React from 'react';
import { storiesOf } from '@storybook/react';

import { BatteryTest } from './batteryTest.component';

const defaultProps = {};

storiesOf('BatteryTest', module).add('Default', () => <BatteryTest {...defaultProps} />);
