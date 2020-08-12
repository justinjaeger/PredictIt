import * as types from './actionTypes';

export const testAction = (value) => ({
  type: types.TEST_ACTION,
  payload: value,
});