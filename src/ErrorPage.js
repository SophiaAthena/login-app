import React from 'react';

const ErrorPage = ({ message }) => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <h1>Error</h1>
      <p>{message}</p>
      <button onClick={goBack}>Return to Previous Page</button>
    </div>
  );
};

export default ErrorPage;
