import { takeLatest, put } from 'redux-saga/effects';

import { getFirestore } from '../../shared/services/firestore';
import reportError from '../../shared/utils/reportError';
import { TimeTrackerTypes, TimeTrackerActions } from './timeTracker.redux';

export function* saveResult() {
  try {
    yield put(TimeTrackerActions.stop());
    const db = yield getFirestore();
    yield db.doc('benchmark-1').add({
      benchmark: 1,
      device: 'Samsung Galaxy S10',
      duration: 20,
      samples: [25, 42, 73],
    });
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
