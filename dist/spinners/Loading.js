import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

// Takes all window space
export default function Loading() {
  return /*#__PURE__*/React.createElement("div", {
    className: "loading-container d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/React.createElement(Spinner, {
    animation: "border",
    className: "loading-spinner m-5",
    role: "status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "visually-hidden"
  }, "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F...")));
}