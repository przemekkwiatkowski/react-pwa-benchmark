import React from 'react';
import { storiesOf } from '@storybook/react';

import { ResponsivenessTest } from './responsivenessTest.component';

const defaultProps = {};

storiesOf('ResponsivenessTest', module).add('Default', () => <ResponsivenessTest {...defaultProps} />);
