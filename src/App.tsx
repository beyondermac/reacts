import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from './redux/appDuck';
import logo from './logo.svg';

const App = () => {
  const dispatch = useDispatch();
  const message = useSelector((state:any) => state.appReducer.message);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React {message}
        </a>
        <button onClick={() => dispatch(setMessage())}>change message </button>
      </header>
    </div>
  );
};

export default App;
