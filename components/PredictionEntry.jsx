import React, { Component } from 'react';
import axios from 'axios';
// import child components
import SearchDisplay from '../components/SearchDisplay.jsx';

const APIKEY = 'e1ce364a'

const PredictionEntry = (props) => {

  const cells = []
  if (props.searchArr.length > 0) { // if displaySearch isn't empty
    for (let i=0; (i<props.searchArr.length) && (i<6); i++) {
      const el = props.searchArr[i]

      const title = el.Title
      const year = el.Year

      cells.push(
        <SearchDisplay 
          // will eventually be dynamic props that deconstruct the obj
          title = {title}
          year = {year}
          enterFilm = {props.enterFilm}
        />
      );
    };
  }

  const displaySearch = () => {
    const input = document.querySelector('#film-entry-input').value;

    if (input !== undefined) {
      axios.get(`http://www.omdbapi.com/?s=${input}&apikey=${APIKEY}`) // searches your input
      .then((res) => {
        const resultsArr = res.data.Search; // gets an array of search results
        if (resultsArr !== undefined) {
          console.log(resultsArr);
          //======= STATE CHANGE: DISPLAY_SEARCH =======/
          props.displaySearch(resultsArr);
        }
      })
      .catch((err) => {
        console.log('error while fetching from OMDb: ', err)
      })
    };
  };

  return(
    <div id="film-entry-container">
      <h2>Add new prediction</h2>
      <input 
        type="search" 
        id="film-entry-input"
        onKeyUp={displaySearch}
      />
      <div id="film-entry-dropdown">
        { cells }
      </div>
    </div>
  )
};

export default PredictionEntry;