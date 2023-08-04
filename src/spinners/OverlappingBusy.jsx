import React from 'react';
import PropTypes from 'prop-types';

import Spinner from 'react-bootstrap/Spinner';

// Spinner. Takes all parent space and some outside
// Requires position-relative class for parent container
// Responsiveness is not ideal so flag is used to specify whether spinner
// should be responsive or not
export default function OverlappingBusy(props) {
  const { responsive } = props;

  // Spinner part - depends whether spinner is responsive or not
  let spinnerPart = '';
  if (responsive) {
    spinnerPart = (
      <div className="busy-inner-container">
        <Spinner animation="border" className="busy-spinner" role="status">
          <span className="visually-hidden">Обробка запиту...</span>
        </Spinner>
      </div>
    );
  } else {
    spinnerPart = (
      <Spinner animation="border" className="app-spinner" role="status">
        <span className="visually-hidden">Обробка запиту...</span>
      </Spinner>
    );
  }

  // Resulting component
  return (
    <div
      className="busy-container-overlapping d-flex justify-content-center align-items-center"
    >
      { spinnerPart }
    </div>
  );
}

OverlappingBusy.defaultProps = {
  responsive: true,
};

OverlappingBusy.propTypes = {
  responsive: PropTypes.bool,
};
