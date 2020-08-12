import React, { Component } from 'react';

const PredictionBox = (props) => {
  return (
    <div className="prediction-box">
      <li>Title: {props.title}</li>
      <li>Year: {props.year}</li>
    </div>
  )
};

export default PredictionBox;
