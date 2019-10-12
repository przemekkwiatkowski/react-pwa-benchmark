import React from 'react';
import { storiesOf } from '@storybook/react';

import { BenchmarksContainer } from './benchmarksContainer.component';

const defaultProps = {};

storiesOf('BenchmarksContainer', module).add('Default', () => <BenchmarksContainer {...defaultProps} />);
