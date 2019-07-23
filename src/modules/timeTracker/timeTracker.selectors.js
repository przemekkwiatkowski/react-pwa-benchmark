import { createSelector } from 'reselect';
import Immutable from 'seamless-immutable';

const selectTimeTrackerDomain = state => state.timeTracker;

export const selectIsActive = createSelector(
  selectTimeTrackerDomain,
  state => Immutable.getIn(state, ['isActive'], false)
);

export const selectStartedAt = createSelector(
  selectTimeTrackerDomain,
  state => Immutable.getIn(state, ['startedAt'], 0)
);

export const selectSamples = createSelector(
  selectTimeTrackerDomain,
  state => Immutable.getIn(state, ['samples'], [])
);
