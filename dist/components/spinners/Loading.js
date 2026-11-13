import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

// Takes all window space
import { jsx as _jsx } from "react/jsx-runtime";
export default function Loading() {
  return /*#__PURE__*/_jsx("div", {
    className: "loading-container d-flex justify-content-center align-items-center",
    children: /*#__PURE__*/_jsx(Spinner, {
      animation: "border",
      className: "loading-spinner m-5",
      role: "status",
      children: /*#__PURE__*/_jsx("span", {
        className: "visually-hidden",
        children: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F..."
      })
    })
  });
}