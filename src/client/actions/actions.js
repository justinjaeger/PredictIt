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

export const deleteEntry = (input) => ({
  type: types.DELETE_ENTRY,
  payload: input,
});

export const moveUp = (input) => ({
  type: types.MOVE_UP,
  payload: input,
});

export const moveDown = (input) => ({
  type: types.MOVE_DOWN,
  payload: input,
});