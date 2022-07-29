import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';


function App() {
  
 
  return (
    <div className="App">
      <div id="root"></div>
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <h1>this is my react</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
