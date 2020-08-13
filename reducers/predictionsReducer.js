import * as action from '../actions/actions.js';
import * as types from '../actions/actionTypes.js';


const initialState = {
  predictionList: [],
  searchArr: [],
}

const predictionsReducer = (state = initialState, action) => {
  let predictionList;
  let imdbID;
  let index;
  let i;

  switch(action.type) {

    case types.ENTER_FILM: // SearchDisplay
      const newEntry = action.payload;
      predictionList = state.predictionList.slice(); // shallow copy of current state predictionlist
      predictionList.push(newEntry); // push new input to predictionList
      
      return { // return updated state
        ...state,
        searchArr: [],
        predictionList,
      };

    case types.DISPLAY_SEARCH: // PredictionEntry
      // populate the array w payload input
      const searchArr = (Array.isArray(action.payload)) ? action.payload : [action.payload] // comes in as raw array of objects

      searchArr.sort((a,b) => (a.Year < b.Year) ? 1 : -1) // sort by year

      return {
        ...state,
        searchArr,
      };

    case types.DELETE_ENTRY: // PredictionBox
      imdbID = action.payload;
      predictionList = [];

      for (let i=0; i<state.predictionList.length; i++) { // DEEP CLONE
        const clone = Object.assign({}, state.predictionList[i])
        predictionList.push(clone)
      }
      
      index = () => { // get index using id
        for (let i=0; i<predictionList.length; i++) {
          if (predictionList[i].id === imdbID) return i;
        }
      };

      i = index()
      predictionList.splice(i, 1); // remove element from array

      for (let i=0; i<predictionList.length; i++){ // loop through again to reassign numbers
        predictionList[i].index = i+1;
      }

      console.log('DELETE_ENTRY: New PredictionList is: ', predictionList)

      return {
        ...state,
        predictionList,
      };

    case types.MOVE_UP: // PredictionBox
      imdbID = action.payload;
      predictionList = [];

      for (let i=0; i<state.predictionList.length; i++) { // DEEP CLONE
        const clone = Object.assign({}, state.predictionList[i])
        predictionList.push(clone)
      }
      
      index = () => { // get index using id
        for (let i=0; i<predictionList.length; i++) {
          if (predictionList[i].id === imdbID) return i;
        }
      };
      
      i = index()
      if (i!==0) { // move up
        let store = predictionList[i];
        predictionList[i] = predictionList[i-1]
        predictionList[i-1] = store;
      }

      for (let i=0; i<predictionList.length; i++){ // loop through again to reassign numbers
        predictionList[i].index = i+1;
      }

      console.log('MOVE_UP: New PredictionList is: ', predictionList)

      return {
        ...state,
        predictionList,
      };

    case types.MOVE_DOWN: // PredictionBox
      imdbID = action.payload;
      predictionList = [];

      for (let i=0; i<state.predictionList.length; i++) { // DEEP CLONE
        const clone = Object.assign({}, state.predictionList[i])
        predictionList.push(clone)
      }
      
      index = () => { // get index using id
        for (let i=0; i<predictionList.length; i++) {
          if (predictionList[i].id === imdbID) return i;
        }
      };
      
      i = index()
      if (i!==predictionList.length-1) { // move down
        let store = predictionList[i];
        predictionList[i] = predictionList[i+1]
        predictionList[i+1] = store;
      }

      for (let i=0; i<predictionList.length; i++){ // loop through again to reassign numbers
        predictionList[i].index = i+1;
      }

      console.log('MOVE_DOWN: New PredictionList is: ', predictionList)

      return {
        ...state,
        predictionList,
      };

    default:
      return state;
  };
};

export default predictionsReducer;