import React from 'react';

import Spinner from 'react-bootstrap/Spinner';

// Spinner. Takes most of parent space, does not expand outside parent
// Requires position-relative class for parent container
// Always responsive
export default function InnerBusy() {
  // Resulting component
  return (
    <div
      className="busy-container-inside d-flex justify-content-center align-items-center"
    >
      <div className="busy-inner-container">
        <Spinner animation="border" className="busy-spinner" role="status">
          <span className="visually-hidden">Обробка запиту...</span>
        </Spinner>
      </div>
    </div>
  );
}
