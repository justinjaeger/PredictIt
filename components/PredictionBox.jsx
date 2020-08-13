import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { library, icon } from '@fortawesome/fontawesome-svg-core'
const APIKEY = 'e1ce364a'

const PredictionBox = (props) => {
  let test;
  // const id = props.id
  // const [results, setResults] = useState(null); // [stateProp, funcToChangeStateProp]  --- aka stateless component

  // useEffect(() => {
    
    // const load = async () => {
    //   try {
    //     const res = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${APIKEY}`);
    //     setResults(res.data)
    //   } catch(err) {
    //     console.log(err);
    //   }
    // };
    // load();
  // });

  // const testFunc = async () => {
  //   console.log('testFunc')
  //     try {
  //       const res = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${APIKEY}`);
  //       console.log('result of fetch: ', res.data)
  //     } catch(err) {
  //       console.log(err);
  //     }
  // }

  const deleteEntry = () => {
    props.deleteEntry(props.id)
  };

  const moveUp = () => {
    props.moveUp(props.id)
  };

  const moveDown = () => {
    props.moveDown(props.id)
  };

  // testFunc();
  // console.log('runs before return')
  return (
    <div className="prediction-box">
      {/* <li>Title: 'Hello'</li>
      <li>Year: '2020'</li> */}
      <li>#{props.index}</li>
      <li>Title: {props.title}</li>
      <li>Year: {props.year}</li>

      <button className="button-delete" onClick={deleteEntry}>delete</button>
      <button className="button-up" onClick={moveUp}>up</button>
      <button className="button-down" onClick={moveDown}>down</button>
    </div>
  );
};

export default PredictionBox;
