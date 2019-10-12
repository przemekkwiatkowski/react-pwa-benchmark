import React from 'react';
import { shallow } from 'enzyme';

import { Content } from '../content.component';

describe('Content: Component', () => {
  const defaultProps = {};

  const component = props => <Content {...defaultProps} {...props} />;

  const render = (props = {}) => shallow(component(props));

  it('should render correctly', () => {
    const wrapper = render();
    global.expect(wrapper).toMatchSnapshot();
  });
});
