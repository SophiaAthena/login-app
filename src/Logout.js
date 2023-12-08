import React from 'react';

function Logout({ onLogout }) {
  return (
    <div className="logout-container">
      <h2>Welcome, [username]!</h2>
      <button className="logout-button" onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Logout;