import { all, fork } from 'redux-saga/effects';

import reportError from '../shared/utils/reportError';
import { watchStartup } from './startup/startup.sagas';
import { watchTimerTrackerSaga } from './timeTracker/timeTracker.sagas';
//<-- IMPORT MODULE SAGA -->

export default function* rootSaga() {
  try {
    yield all([
      fork(watchStartup),
      fork(watchTimerTrackerSaga),
      //<-- INJECT MODULE SAGA -->
    ]);
  } catch (e) {
    yield reportError(e);
  }
}
