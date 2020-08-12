import { combineReducers } from 'redux';
// import all reducers here
import predictionsReducer from './predictionsReducer';


// combine reducers
const reducers = combineReducers({ // list all reducers inside
  predictions: predictionsReducer, // use the word PREDICTIONS when mapping state to props
});

// export combined reducers
export default reducers;
// imports to src/index.js