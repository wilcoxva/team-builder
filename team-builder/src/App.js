import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Members from './components/Members';

const [members, setMembers] = useState([]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {members.map(member => {
            return (
              <Members

              />
            )}
          )}
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
