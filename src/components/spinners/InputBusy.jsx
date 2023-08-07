import React from 'react';
import PropTypes from 'prop-types';

import Spinner from 'react-bootstrap/Spinner';

// Spinner for inputs. Takes some space on the right side of input
// Requires position-relative d-flex align-items-center classes for parent container
export default function InputBusy(props) {
  const { visible } = props;
  // Resulting component
  return (
    <div
      className={`busy-container-input ${visible ? '' : 'invisible'}`}
    >
      <Spinner animation="border" className="app-spinner" role="status">
        <span className="visually-hidden">Обробка запиту...</span>
      </Spinner>
    </div>
  );
}

InputBusy.defaultProps = {
  visible: true,
};

InputBusy.propTypes = {
  visible: PropTypes.bool,
};
