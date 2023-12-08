import React, { useState } from 'react';
import Login from './Login';
import Logout from './Logout';
import ErrorPage from './ErrorPage';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = (username, password) => {
    // Here, add logic to validate login credentials
    // If there's an error, set the error state
    // For example:
    // setError('Incorrect username or password');
    // Otherwise, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {error ? (
        <ErrorPage message={error} />
      ) : (
        <>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hello <code>src/App.js</code> and save to reload.
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

          <div>
            {isLoggedIn ? <Logout onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
