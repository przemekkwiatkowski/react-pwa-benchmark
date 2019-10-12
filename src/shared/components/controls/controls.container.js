import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { compose } from 'ramda';

import { Controls } from './controls.component';
import { TimeTrackerActions } from '../../../modules/timeTracker/timeTracker.redux';
import { selectIsActive } from '../../../modules/timeTracker/timeTracker.selectors';

const mapStateToProps = createStructuredSelector({
  isActive: selectIsActive,
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      start: TimeTrackerActions.start,
      stop: TimeTrackerActions.stop,
      saveResult: TimeTrackerActions.saveResult,
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
)(Controls);
