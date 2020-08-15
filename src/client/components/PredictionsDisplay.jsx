import React, { Component, useState } from 'react';
import axios from 'axios';
const APIKEY = 'e1ce364a'
// import child components
import PredictionBox from './PredictionBox.jsx';

const PredictionsDisplay = (props) => {

  const list = []
  for (let i=0; i<props.predictionList.length; i++) {
    let el = props.predictionList[i]

    list.push(
      <PredictionBox 
        // Taken from predictionList
        id = {el.id}
        index = {el.index}
        // other props
        key = {i}
        deleteEntry = {props.deleteEntry}
        moveUp = {props.moveUp}
        moveDown = {props.moveDown}
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
