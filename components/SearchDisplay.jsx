import React, { Component } from 'react';

const SearchDisplay = (props) => {

  const selectFilm = () => {
    //======= STATE CHANGE: ENTER_FILM =======/
    props.enterFilm({title: props.title, year: props.year})
    document.querySelector('#film-entry-input').value = ''; // reset the input field
  };

  return (
    <div 
      className="dropdown-cell" 
      onClick={selectFilm} // function should populate the 
    >
      <li>Title: {props.title}</li>
      <li>Year: {props.year}</li>
    </div>
  )
};

export default SearchDisplay;
