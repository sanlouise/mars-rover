import React, { Component } from 'react';
import GetImageForm from '../GetImageForm';
const AppStyle = {
  padding: '100',
};

class App extends Component {
  render() {
    return (
      <div style={AppStyle} className="App col-md-6 offset-md-3">
        <h1 className="text-center">Nasa Images</h1>
        <GetImageForm />
      </div>
    );
  }
}

export default App;
