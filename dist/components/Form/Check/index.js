import React from 'react';
import PropTypes from 'prop-types';
import RBForm from 'react-bootstrap/Form';
import './styles.scss';
import { isValid, isInvalid, getFeedback } from '../validation';

//
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export default function FormCheck(props) {
  //
  const {
    name,
    as = 'input',
    checked = false,
    horizontal = false,
    fullwidth = false,
    displayName,
    hidden = false,
    errors = null,
    onChange = () => {}
  } = props;

  //
  const label = hidden ? '' : /*#__PURE__*/_jsx(RBForm.Label, {
    htmlFor: name,
    children: displayName
  });

  // Classes for control
  const controlClasses = [];
  if (horizontal) controlClasses.push('m-2');
  if (fullwidth) controlClasses.push('flex-grow-1');
  const controlClassName = controlClasses.join(' ');

  // Control element
  const controlElement = /*#__PURE__*/_jsx(RBForm.Check, {
    name: name,
    className: controlClassName,
    as: as,
    type: "checkbox",
    hidden: hidden,
    defaultChecked: checked,
    id: name,
    isValid: isValid(errors, name),
    isInvalid: isInvalid(errors, name),
    onChange: onChange
  });

  // Controls with feedback
  const controls = /*#__PURE__*/_jsxs(_Fragment, {
    children: [label, controlElement]
  });
  const feedback = getFeedback(errors, name);

  // Different wrapping depending on layout
  const result = horizontal ? /*#__PURE__*/_jsxs("div", {
    className: `horizontal d-flex${fullwidth ? ' flex-grow-1' : ''}`,
    children: [/*#__PURE__*/_jsx("div", {
      className: fullwidth ? 'd-flex flex-grow-1' : '',
      children: controls
    }), feedback]
  }) : /*#__PURE__*/_jsxs(RBForm.Group, {
    children: [controls, feedback]
  });
  return result;
}
FormCheck.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  as: PropTypes.string,
  displayName: PropTypes.string.isRequired,
  horizontal: PropTypes.bool,
  fullwidth: PropTypes.bool,
  hidden: PropTypes.bool,
  errors: PropTypes.shape(),
  onChange: PropTypes.func
};