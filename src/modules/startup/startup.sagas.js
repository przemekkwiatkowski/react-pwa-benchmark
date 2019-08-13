import { all, takeLatest, put } from 'redux-saga/effects';
import { StartupTypes, StartupActions } from './startup.redux';
import reportError from '../../shared/utils/reportError';

export function* startup() {
  try {
    yield put(StartupActions.getDevice());
  } catch (error) {
    reportError(error);
  }
}

export function* watchStartup() {
  yield all([takeLatest(StartupTypes.STARTUP, startup)]);
}
