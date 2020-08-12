import React, { Component } from 'react';
import { connect } from 'react-redux'; // generates a container component 
import * as actions from '../actions/actions';
// import child components
import PredictionsDisplay from '../components/PredictionsDisplay.jsx';
import PredictionEntry from '../components/PredictionEntry.jsx';

const mapStateToProps = (state) => ({
  predictionList: state.predictions.predictionList,
  searchArr: state.predictions.searchArr,
});

const mapDispatchToProps = (dispatch) => ({ // receives dispatch method and returns callback props (aka actions) that allow you to update state
  enterFilm: (input) => dispatch(actions.enterFilm(input)),
  displaySearch: (input) => dispatch(actions.displaySearch(input)),
});

class PredictionsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
      <PredictionsDisplay 
        // state
        predictionList = {this.props.predictionList}
      />
      <PredictionEntry 
        // state
        searchArr = {this.props.searchArr}
        // dispatch
        enterFilm = {this.props.enterFilm}
        displaySearch = {this.props.displaySearch}
      />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PredictionsContainer);