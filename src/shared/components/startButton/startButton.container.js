import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';
import { compose } from 'ramda';
import { TimeTrackerActions } from '../../../modules/timeTracker/timeTracker.redux';
import { selectIsActive } from '../../../modules/timeTracker/timeTracker.selectors';

import StartButton from './startButton.component';

const mapStateToProps = createStructuredSelector({
  isActive: selectIsActive,
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      start: TimeTrackerActions.start,
      stop: TimeTrackerActions.stop,
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
)(StartButton);
