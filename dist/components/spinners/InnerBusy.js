import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

// Spinner. Takes most of parent space, does not expand outside parent
// Requires position-relative class for parent container
// Always responsive
import { jsx as _jsx } from "react/jsx-runtime";
export default function InnerBusy() {
  // Resulting component
  return /*#__PURE__*/_jsx("div", {
    className: "busy-container-inside d-flex justify-content-center align-items-center",
    children: /*#__PURE__*/_jsx("div", {
      className: "busy-inner-container",
      children: /*#__PURE__*/_jsx(Spinner, {
        animation: "border",
        className: "busy-spinner",
        role: "status",
        children: /*#__PURE__*/_jsx("span", {
          className: "visually-hidden",
          children: "\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0437\u0430\u043F\u0438\u0442\u0443..."
        })
      })
    })
  });
}