import React, { Component } from 'react';
import PredictionsContainer from '../containers/PredictionsContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PredictionsContainer />
      </div>
    );
  }
}

export default App;
// imports to src/index.js