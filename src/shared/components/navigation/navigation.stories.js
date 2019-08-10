import React from 'react';
import { storiesOf } from '@storybook/react';
import { Router } from 'react-router';

import Navigation from './navigation.component';

const defaultProps = {};

const RouterDecorator = story => <Router>{story}</Router>;

storiesOf('Navigation', module)
  .addDecorator(RouterDecorator)
  .add('Default', () => <Navigation {...defaultProps} />);
