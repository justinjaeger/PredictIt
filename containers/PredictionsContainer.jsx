import React, { Component } from 'react';
import { connect } from 'react-redux'; // generates a container component 
// import child components
import PredictionsDisplay from '../components/PredictionsDisplay.jsx';

const mapStateToProps = (state) => {
  // add props you want to use
  // totalMarkets: state.predictions.totalMarkets,
  return {}
};

const mapDispatchToProps = (dispatch) => {
  // receives dispatch method and returns callback props (aka actions) that you want to use
  // addMarket: (location) => dispatch(actions.addMarket(location)),
  return {}
};

const PredictionsContainer = (props) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(PredictionsContainer);