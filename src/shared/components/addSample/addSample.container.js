import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';
import { compose } from 'ramda';

import { selectIsActive } from '../../../modules/timeTracker/timeTracker.selectors';
import { TimeTrackerActions } from '../../../modules/timeTracker/timeTracker.redux';

import AddSample from './addSample.component';

const mapStateToProps = createStructuredSelector({
  isActive: selectIsActive,
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addSample: TimeTrackerActions.addSample,
    },
    dispatch
  );

export default compose(
  hot(module),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(AddSample);
