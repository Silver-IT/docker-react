import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const getUsers = () => {
    axios.get('http://localhost:3030/users').then(res => {
      const { data } = res;
      if (typeof data === 'number') {
        setCount(data);
      } else {
        setCount(0);
      }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {count} Users Found.
        </p>
        <button className="App-link" onClick={getUsers}>
          Get Users Count
        </button>
      </header>
    </div>
  );
}

export default App;
