import * as action from '../actions/actions.js';
import * as types from '../actions/actionTypes.js';


const initialState = {
  predictionList: [],
  searchArr: [],
}

const predictionsReducer = (state = initialState, action) => {

  switch(action.type) {

    case types.ENTER_FILM: // fires when you click a cell in the Search Display
      const newEntry = action.payload;
      const predictionList = state.predictionList.slice(); // shallow copy of current state predictionlist
      predictionList.push(newEntry); // push new input to predictionList
      
      return { // return updated state
        ...state,
        predictionList,
      };

    case types.DISPLAY_SEARCH: // fires when you type in search in Prediction Entry
      // populate the array w payload input
      const searchArr = action.payload // comes in as raw array of objects
      
      return {
        ...state,
        searchArr,
      }

    default:
      return state;
  };
};

export default predictionsReducer;