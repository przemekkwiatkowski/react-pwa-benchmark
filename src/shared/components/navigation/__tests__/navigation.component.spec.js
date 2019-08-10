import React from 'react';
import { shallow } from 'enzyme';

import Navigation from '../navigation.component';

describe('Navigation: Component', () => {
  const defaultProps = {};

  const component = props => <Navigation {...defaultProps} {...props} />;

  const render = (props = {}) => shallow(component(props));

  it('should render correctly', () => {
    const wrapper = render();
    global.expect(wrapper).toMatchSnapshot();
  });
});
