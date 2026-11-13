import React from 'react';
import PropTypes from 'prop-types';
import RBForm from 'react-bootstrap/Form';
import { isValid, isInvalid, getFeedback } from '../validation';

/**
 * Select for forms.
 * @param {*} props
 *  items - should contain pairs with display and value fields
 * @returns
 */
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export default function FormItem(props) {
  //
  const {
    name,
    value = '',
    horizontal = false,
    fullwidth = false,
    displayName = '',
    hidden,
    errors = null,
    items = [],
    onChange = () => {}
  } = props;

  //
  const label = hidden || displayName === '' ? '' : /*#__PURE__*/_jsx(RBForm.Label, {
    htmlFor: name,
    children: displayName
  });

  // Classes for control
  const controlClasses = [];
  if (horizontal) controlClasses.push('m-2');
  if (fullwidth) controlClasses.push('flex-grow-1');
  const controlClassName = controlClasses.join(' ');
  // Options
  let controlOptions = '';
  if (items) {
    controlOptions = /*#__PURE__*/_jsx(_Fragment, {
      children: items.map(item => /*#__PURE__*/_jsx("option", {
        value: item.value,
        disabled: item.disabled || false,
        children: item.display
      }, `${name}${item.value}`))
    });
  }

  // Control element
  const controlElement = /*#__PURE__*/_jsx(RBForm.Select, {
    name: name,
    className: controlClassName,
    id: name,
    defaultValue: value,
    isValid: isValid(errors, name),
    isInvalid: isInvalid(errors, name),
    onChange: onChange,
    children: controlOptions
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
FormItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape]),
  displayName: PropTypes.string,
  horizontal: PropTypes.bool,
  fullwidth: PropTypes.bool,
  errors: PropTypes.shape(),
  items: PropTypes.arrayOf(PropTypes.shape({
    display: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape])
  })),
  onChange: PropTypes.func
};