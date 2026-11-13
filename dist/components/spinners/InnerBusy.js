import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

// Spinner. Takes most of parent space, does not expand outside parent
// Requires position-relative class for parent container
// Always responsive
export default function InnerBusy() {
  // Resulting component
  return /*#__PURE__*/React.createElement("div", {
    className: "busy-container-inside d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "busy-inner-container"
  }, /*#__PURE__*/React.createElement(Spinner, {
    animation: "border",
    className: "busy-spinner",
    role: "status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "visually-hidden"
  }, "\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0437\u0430\u043F\u0438\u0442\u0443..."))));
}