import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "@babel/polyfill";
const APIKEY = 'e1ce364a'

const PredictionBox = (props) => {
  // let results;
  const id = props.id
  const [results, setResults] = useState(); // [stateProp, funcToChangeStateProp]  --- aka stateless component

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${APIKEY}`);
        // results = res.data
        setResults(res.data)
      } catch(err) {
      }
    };
    load();
  }, [results]);

  //CONDITIONAL//
  return (
    <div className="prediction-box">
      <li>#{props.index}</li>
      <h3>{results && results.Title}</h3>
      <li>Directed by <strong>{results && results.Director}</strong></li>
      <li>imdbID:{results && results.imdbID}</li>
      {results && <button className="button-delete" onClick={() => props.deleteEntry(results.imdbID)}>delete</button>}
      {results && <button className="button-up" onClick={() => props.moveUp(results.imdbID)}>up</button>}
      {results && <button className="button-down" onClick={() => props.moveDown(results.imdbID)}>down</button>}
    </div>
  );

};

export default PredictionBox;
