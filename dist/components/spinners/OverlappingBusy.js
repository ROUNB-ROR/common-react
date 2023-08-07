import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

// Spinner. Takes all parent space and some outside
// Requires position-relative class for parent container
// Responsiveness is not ideal so flag is used to specify whether spinner
// should be responsive or not
export default function OverlappingBusy(props) {
  const {
    responsive
  } = props;

  // Spinner part - depends whether spinner is responsive or not
  let spinnerPart = '';
  if (responsive) {
    spinnerPart = /*#__PURE__*/React.createElement("div", {
      className: "busy-inner-container"
    }, /*#__PURE__*/React.createElement(Spinner, {
      animation: "border",
      className: "busy-spinner",
      role: "status"
    }, /*#__PURE__*/React.createElement("span", {
      className: "visually-hidden"
    }, "\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0437\u0430\u043F\u0438\u0442\u0443...")));
  } else {
    spinnerPart = /*#__PURE__*/React.createElement(Spinner, {
      animation: "border",
      className: "app-spinner",
      role: "status"
    }, /*#__PURE__*/React.createElement("span", {
      className: "visually-hidden"
    }, "\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0437\u0430\u043F\u0438\u0442\u0443..."));
  }

  // Resulting component
  return /*#__PURE__*/React.createElement("div", {
    className: "busy-container-overlapping d-flex justify-content-center align-items-center"
  }, spinnerPart);
}
OverlappingBusy.defaultProps = {
  responsive: true
};
OverlappingBusy.propTypes = {
  responsive: PropTypes.bool
};