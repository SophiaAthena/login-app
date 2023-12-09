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
    if (username === 'example' && password === 'password') {
      setIsLoggedIn(true);
      setError(null);
    } else {
      setError('Incorrect username or password');
      setIsLoggedIn(false);
    }
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
              {isLoggedIn ? <Logout onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
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
        </>
      )}
    </div>
  );
}

export default App;
