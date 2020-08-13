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
  }, []);

  const deleteEntry = () => {
    console.log(results.imdbID)
    props.deleteEntry(results.imdbID)
  };

  const moveUp = () => {
    props.moveUp(results.imdbID)
  };

  const moveDown = () => {
    props.moveDown(results.imdbID)
  };

  // FOR CONDITIONAL RENDERING //
  // if (results !== undefined) {
  //   return (
  //     <div className="prediction-box">
  //       <li className="list-rank">#{props.index}</li>
  //       <h3>{results.Title}</h3>
  //       <li>Directed by <strong>{results.Director}</strong></li>
  //       <li>imdbID:{results.imdbID}</li>
  
  //       <button className="button-delete" onClick={deleteEntry}>delete</button>
  //       <button className="button-up" onClick={moveUp}>up</button>
  //       <button className="button-down" onClick={moveDown}>down</button>
  //     </div>
  //   );
  // }
  // if (results === undefined) {
  //   return (
  //     <div className="prediction-box">
  //       <li>#{props.index}</li>
  //       <li>imdbID:{props.id}</li>
  //       <button className="button-delete" onClick={deleteEntry}>delete</button>
  //       <button className="button-up" onClick={moveUp}>up</button>
  //       <button className="button-down" onClick={moveDown}>down</button> */
  //     </div>
  //   );
  // }

  // FOR NON-CONDITIONAL RENDERING //
  return (
    <div className="prediction-box">
      <li>#{props.index}</li>
      <li>imdbID:{props.id}</li>
      <button className="button-delete" onClick={deleteEntry}>delete</button>
      <button className="button-up" onClick={moveUp}>up</button>
      <button className="button-down" onClick={moveDown}>down</button>
    </div>
  );

};

export default PredictionBox;
