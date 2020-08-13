import React, { Component } from 'react';
import axios from 'axios';
// import child components
import SearchDisplay from '../components/SearchDisplay.jsx';

const APIKEY = 'e1ce364a'

const PredictionEntry = (props) => {

  const cells = []
  if (props.searchArr.length > 0) { // if displaySearch isn't empty
    for (let i=0; (i<props.searchArr.length) && (i<10); i++) {
      const el = props.searchArr[i]

      // These end up in the final object
      const title = el.Title
      const year = el.Year
      const id = el.imdbID
      const poster = el.Poster
      const index = props.predictionList.length+1;

      cells.push(
        <SearchDisplay 
          title = {title}
          year = {year}
          id = {id}
          poster = {poster}
          index = {index}
          enterFilm = {props.enterFilm}
          // searchArr = {props.searchArr}
          key = {i}
        />
      );
    };
  }

  const displaySearch = () => {
    const input = document.querySelector('#film-entry-input').value;
    const titleOrId = (input[0]==='t' && input[1]==='t') ? 'i' : 's'; // searching a title or movie?

    if (input !== undefined) {
      axios.get(`http://www.omdbapi.com/?${titleOrId}=${input}&apikey=${APIKEY}`) // searches your input
      .then((res) => {
        const results = (titleOrId==='i') ? res.data : res.data.Search; // if search by title, returns array
        if (results !== undefined) {
          //======= STATE CHANGE: DISPLAY_SEARCH =======/
          props.displaySearch(results);
        };
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
        autoComplete="off"
        onKeyUp={displaySearch}
      />
      <div id="film-entry-dropdown">
        { cells }
      </div>
    </div>
  )
};

export default PredictionEntry;