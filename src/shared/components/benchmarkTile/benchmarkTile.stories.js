import React from 'react';
import { storiesOf } from '@storybook/react';

import { BenchmarkTile } from './benchmarkTile.component';

const defaultProps = {};

storiesOf('Content', module).add('Default', () => <BenchmarkTile {...defaultProps} />);
