import React from 'react';
import { storiesOf } from '@storybook/react';
import { StoryRouter as storyRouter } from 'storybook-react-router';

import Navigation from './navigation.component';

const defaultProps = {};

storiesOf('Navigation', module)
  .addDecorator(storyRouter())
  .add('Default', () => <Navigation {...defaultProps} />);
