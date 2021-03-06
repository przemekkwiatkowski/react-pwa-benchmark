import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { compose } from 'ramda';

import Navigation from './navigation.component';

const mapStateToProps = createStructuredSelector({});

export const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default compose(
  hot(module),
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Navigation);
