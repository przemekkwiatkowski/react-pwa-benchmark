import React from 'react';
import { shallow } from 'enzyme';

import { ControlButton } from '../controlButton.component';

describe('ControlButton: Component', () => {
  const defaultProps = {};

  const component = props => <ControlButton {...defaultProps} {...props} />;

  const render = (props = {}) => shallow(component(props));

  it('should render correctly', () => {
    const wrapper = render();
    global.expect(wrapper).toMatchSnapshot();
  });
});
