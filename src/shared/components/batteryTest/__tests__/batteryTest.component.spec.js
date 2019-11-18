import React from 'react';
import { shallow } from 'enzyme';

import { BatteryTest } from '../batteryTest.component';

describe('BatteryTest: Component', () => {
  const defaultProps = {};

  const component = props => <BatteryTest {...defaultProps} {...props} />;

  const render = (props = {}) => shallow(component(props));

  it('should render correctly', () => {
    const wrapper = render();
    global.expect(wrapper).toMatchSnapshot();
  });
});
