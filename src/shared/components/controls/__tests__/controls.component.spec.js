import React from 'react';
import { shallow } from 'enzyme';

import { Controls } from '../controls.component';

describe('Controls: Component', () => {
  const defaultProps = {};

  const component = props => <Controls {...defaultProps} {...props} />;

  const render = (props = {}) => shallow(component(props));

  it('should render correctly', () => {
    const wrapper = render();
    global.expect(wrapper).toMatchSnapshot();
  });
});
