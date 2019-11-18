import React from 'react';
import { shallow } from 'enzyme';

import { RenderingTest } from '../renderingTest.component';

describe('RenderingTest: Component', () => {
  const defaultProps = {};

  const component = props => <RenderingTest {...defaultProps} {...props} />;

  const render = (props = {}) => shallow(component(props));

  it('should render correctly', () => {
    const wrapper = render();
    global.expect(wrapper).toMatchSnapshot();
  });
});
