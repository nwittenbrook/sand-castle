import React, { Component } from 'react';
import logo from './sandcastle.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Sand Castle</h1>
        </header>
        <p className="App-intro">
          Look at this beautiful sand castle
        </p>
      </div>
    );
  }
}

export default App;
