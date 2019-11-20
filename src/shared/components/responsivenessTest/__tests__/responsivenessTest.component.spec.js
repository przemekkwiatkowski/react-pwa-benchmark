import React from 'react';
import { shallow } from 'enzyme';

import { ResponsivenessTest } from '../responsivenessTest.component';

describe('ResponsivenessTest: Component', () => {
  const defaultProps = {};

  const component = props => <ResponsivenessTest {...defaultProps} {...props} />;

  const render = (props = {}) => shallow(component(props));

  it('should render correctly', () => {
    const wrapper = render();
    global.expect(wrapper).toMatchSnapshot();
  });
});
