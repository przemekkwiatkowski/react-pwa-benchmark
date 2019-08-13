import { prop } from 'ramda';
import { createSelector } from 'reselect';

export const selectStartupDomain = prop('startup');

export const selectDevice = createSelector(
  selectStartupDomain,
  prop('device')
);
