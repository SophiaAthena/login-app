import React from 'react';

const ErrorPage = ({ message }) => {
  return (
    <div>
      <h1>Error</h1>
      <p>{message}</p>
    </div>
  );
};

export default ErrorPage;
