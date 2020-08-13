import React, { Component } from 'react';

const SearchDisplay = (props) => {

  const selectFilm = () => {
    //======= STATE CHANGE: ENTER_FILM =======// where each obj is created
    props.enterFilm({
      title: props.title, 
      year: props.year,
      id: props.id,
      poster: props.poster,
      index: props.index,
    })
    document.querySelector('#film-entry-input').value = ''; // reset the input field
  };

  return (
    <div 
      className="dropdown-cell" 
      onClick={selectFilm} // function should populate the 
    >
      <li>{props.title} ({props.year})</li>
    </div>
  )
};

export default SearchDisplay;
