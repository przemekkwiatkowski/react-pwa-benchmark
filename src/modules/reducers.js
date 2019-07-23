import { combineReducers } from 'redux';

import { reducer as localesReducer } from './locales/locales.redux';
import { reducer as startupReducer } from './startup/startup.redux';
import { reducer as timeTracker } from './timeTracker/timeTracker.redux';
//<-- IMPORT MODULE REDUCER -->

export default function createReducer() {
  return combineReducers({
    locales: localesReducer,
    startup: startupReducer,
    timeTracker,
    //<-- INJECT MODULE REDUCER -->
  });
}
