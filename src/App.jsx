import React, { Component } from 'react';
import PredictionsContainer from '../containers/PredictionsContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('rendering in app.jsx');
    return (
      <div>
        this is the app.jsx
        <PredictionsContainer />
      </div>
    );
  }
}

export default App;
// imports to src/index.js