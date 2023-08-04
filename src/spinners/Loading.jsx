import React from 'react';

import Spinner from 'react-bootstrap/Spinner';

// Takes all window space
export default function Loading() {
  return (
    <div
      className="loading-container d-flex justify-content-center align-items-center"
    >
      <Spinner animation="border" className="loading-spinner m-5" role="status">
        <span className="visually-hidden">Завантаження...</span>
      </Spinner>
    </div>
  );
}
