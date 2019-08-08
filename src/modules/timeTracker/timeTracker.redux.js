import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types: TimeTrackerTypes, Creators: TimeTrackerActions } = createActions(
  {
    start: null,
    stop: null,
    addSample: null,
    saveResult: ['result'],
  },
  { prefix: 'TIME_TRACKER/' }
);

const INITIAL_STATE = Immutable({
  isActive: false,
  startedAt: '0',
  samples: [],
  duration: '0',
});

const start = state =>
  state
    .set('isActive', true)
    .set('startedAt', String(Date.now()))
    .set('samples', []);

const stop = state =>
  state
    .set('isActive', false)
    .set('startedAt', '0')
    .set('samples', []);

const addSample = state => state.set('samples', [...state.samples, { savedAt: String(Date.now()) }]);

export const reducer = createReducer(INITIAL_STATE, {
  [TimeTrackerTypes.START]: start,
  [TimeTrackerTypes.STOP]: stop,
  [TimeTrackerTypes.ADD_SAMPLE]: addSample,
});
