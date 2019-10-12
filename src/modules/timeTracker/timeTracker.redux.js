import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types: TimeTrackerTypes, Creators: TimeTrackerActions } = createActions(
  {
    start: ['benchmark'],
    stop: null,
    reset: null,
    addSample: null,
    saveResult: ['benchmarkId', 'result'],
  },
  { prefix: 'TIME_TRACKER/' }
);

const INITIAL_STATE = Immutable({
  isActive: false,
  benchmark: null,
  samples: [],
  startedAt: 0,
});

const start = (state, benchmark) =>
  state.merge({
    isActive: true,
    benchmark: benchmark.benchmark,
    startedAt: Date.now(),
    samples: [],
  });

const stop = state =>
  state.merge({
    isActive: false,
  });

const addSample = state => state.set('samples', state.samples.concat([{ savedAt: Date.now() }]));

const reset = () => INITIAL_STATE;

export const reducer = createReducer(INITIAL_STATE, {
  [TimeTrackerTypes.START]: start,
  [TimeTrackerTypes.STOP]: stop,
  [TimeTrackerTypes.ADD_SAMPLE]: addSample,
  [TimeTrackerTypes.RESET]: reset,
});
