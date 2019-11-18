import React from 'react';
import { storiesOf } from '@storybook/react';

import { RenderingTest } from './renderingTest.component';

const defaultProps = {};

storiesOf('RenderingTest', module).add('Default', () => <RenderingTest {...defaultProps} />);
