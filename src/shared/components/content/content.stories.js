import React from 'react';
import { storiesOf } from '@storybook/react';

import { Content } from './content.component';

const defaultProps = {};

storiesOf('Content', module).add('Default', () => <Content {...defaultProps} />);
