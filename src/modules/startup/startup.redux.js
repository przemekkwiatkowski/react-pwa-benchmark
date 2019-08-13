import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types: StartupTypes, Creators: StartupActions } = createActions(
  {
    startup: [],
    getDevice: null,
  },
  { prefix: 'STARTUP/' }
);

export const INITIAL_STATE = new Immutable({
  device: null,
});

const getDeviceType = state =>
  state.merge({
    device: navigator.userAgent,
  });

export const reducer = createReducer(INITIAL_STATE, {
  [StartupTypes.GET_DEVICE]: getDeviceType,
});
