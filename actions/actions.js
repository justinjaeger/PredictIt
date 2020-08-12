import * as types from './actionTypes'; 

// ACTIONS
export const enterFilm = (input) => ({
  type: types.ENTER_FILM,
  payload: input,
});

export const displaySearch = (input) => ({
  type: types.DISPLAY_SEARCH,
  payload: input,
});