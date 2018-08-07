import React, { Component } from 'react';
import './App.css';
import Device from './components/Device/Device';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Drum Machine</h1>
        </header>
        <Device />
        <div className='App-footer'>Craig Blair &copy; 2018</div>
      </div>
    );
  }
}

export default App;
