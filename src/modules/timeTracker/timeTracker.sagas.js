import { takeLatest, put } from 'redux-saga/effects';

import { getFirestore } from '../../shared/services/firestore';
import reportError from '../../shared/utils/reportError';
import { TimeTrackerTypes, TimeTrackerActions } from './timeTracker.redux';

export function* saveResult({ benchmarkId, result }) {
  try {
    yield put(TimeTrackerActions.stop());
    const db = yield getFirestore();
    yield db.collection(benchmarkId).add(result);
    yield put(TimeTrackerActions.reset());
  } catch (error) {
    reportError(error);
  }
}

export function* watchTimerTrackerSaga() {
  try {
    yield takeLatest(TimeTrackerTypes.SAVE_RESULT, saveResult);
  } catch (error) {
    reportError(error);
  }
}
