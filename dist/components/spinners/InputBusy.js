import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

// Spinner for inputs. Takes some space on the right side of input
// Requires position-relative d-flex align-items-center classes for parent container
export default function InputBusy(props) {
  const {
    visible
  } = props;
  // Resulting component
  return /*#__PURE__*/React.createElement("div", {
    className: `busy-container-input ${visible ? '' : 'invisible'}`
  }, /*#__PURE__*/React.createElement(Spinner, {
    animation: "border",
    className: "app-spinner",
    role: "status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "visually-hidden"
  }, "\u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u0437\u0430\u043F\u0438\u0442\u0443...")));
}
InputBusy.defaultProps = {
  visible: true
};
InputBusy.propTypes = {
  visible: PropTypes.bool
};