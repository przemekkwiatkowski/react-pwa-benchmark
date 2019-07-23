import { takeLatest, put } from 'redux-saga/effects';

import { getFirestore } from '../../shared/services/firestore';
import { TimeTrackerTypes, TimeTrackerActions } from './timeTracker.redux';
import reportError from '../../shared/utils/reportError';

export function* saveResult() {
  try {
    const db = yield getFirestore();
    yield db
      .collection('pwa')
      .doc('benchmark-1')
      .collection('results')
      .add({
        benchmark: 1,
        device: 'Samsung Galaxy S10',
        duration: 20,
        samples: [25, 42, 73],
      });
    yield put(TimeTrackerActions.stop());
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
