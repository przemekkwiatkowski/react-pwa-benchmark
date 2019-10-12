import React from 'react';
import { shallow } from 'enzyme';

import { BenchmarksContainer } from '../benchmarksContainer.component';

describe('BenchmarksContainer: Component', () => {
  const defaultProps = {};

  const component = props => <BenchmarksContainer {...defaultProps} {...props} />;

  const render = (props = {}) => shallow(component(props));

  it('should render correctly', () => {
    const wrapper = render();
    global.expect(wrapper).toMatchSnapshot();
  });
});
