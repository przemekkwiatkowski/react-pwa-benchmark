import { createSelector } from 'reselect';
import { prop } from 'ramda';

const selectTimeTrackerDomain = prop('timeTracker');

export const selectIsActive = createSelector(
  selectTimeTrackerDomain,
  prop('isActive')
);

export const selectStartedAt = createSelector(
  selectTimeTrackerDomain,
  prop('startedAt')
);

export const selectSamples = createSelector(
  selectTimeTrackerDomain,
  prop('samples')
);
