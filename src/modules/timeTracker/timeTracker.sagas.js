import { takeLatest, put } from 'redux-saga/effects';

import { getFirestore } from '../../shared/services/firestore';
import reportError from '../../shared/utils/reportError';
import { TimeTrackerTypes, TimeTrackerActions } from './timeTracker.redux';

export function* saveResult({ benchmarkId, result }) {
  const endedAt = performance.now();
  try {
    yield put(TimeTrackerActions.stop());
    const db = yield getFirestore();
    yield db.collection(benchmarkId).add({ ...result, endedAt: endedAt });
    yield put(TimeTrackerActions.reset());
    alert(`${benchmarkId} test executed sucessfully`);
  } catch (error) {
    reportError(error);
    alert(`${benchmarkId} test error: ${error}`);
  }
}

export function* watchTimerTrackerSaga() {
  try {
    yield takeLatest(TimeTrackerTypes.SAVE_RESULT, saveResult);
  } catch (error) {
    reportError(error);
  }
}
