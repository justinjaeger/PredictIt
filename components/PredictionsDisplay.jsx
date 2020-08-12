import React, { Component } from 'react';
// import child components
import PredictionBox from '../components/PredictionBox.jsx';

const PredictionsDisplay = (props) => {

  const list = []
  for (let i=0; i<props.predictionList.length; i++) {
    list.push(
      <PredictionBox 
        title = {props.predictionList[i].title}
        year = {props.predictionList[i].year}
      />
    );
  }

  return (
    <div id="prediction-container">
      <h2>Predictions</h2>
      { list }
    </div>
  )
};

export default PredictionsDisplay;
