import React from 'react';
import PropTypes from 'prop-types';
import RBForm from 'react-bootstrap/Form';
import '../scss/form-item.scss';
import { isValid, isInvalid, getFeedback } from '../../helpers/validation';

//
export default function FormItem(props) {
  //
  const {
    name,
    as,
    value,
    type,
    horizontal,
    accept,
    size,
    min,
    max,
    rows,
    displayName,
    hidden,
    placeholder,
    errors
  } = props;

  // Basic class
  const controlClassName = horizontal ? 'm-2' : '';

  //
  const label = hidden ? '' : /*#__PURE__*/React.createElement(RBForm.Label, null, displayName);

  // Controls with feedback
  const controls = /*#__PURE__*/React.createElement(React.Fragment, null, label, /*#__PURE__*/React.createElement(RBForm.Control, {
    name: name,
    className: controlClassName,
    as: as,
    type: type,
    accept: accept,
    htmlSize: size,
    maxLength: size,
    min: min,
    max: max,
    rows: rows,
    placeholder: placeholder,
    hidden: hidden,
    id: name,
    defaultValue: value,
    isValid: isValid(errors, name),
    isInvalid: isInvalid(errors, name)
  }));
  const feedback = getFeedback(errors, name);

  // Different wrapping depending on layout
  const result = horizontal ? /*#__PURE__*/React.createElement("div", {
    className: "horizontal"
  }, /*#__PURE__*/React.createElement("div", null, controls), feedback) : /*#__PURE__*/React.createElement(RBForm.Group, null, controls, feedback);
  return result;
}
FormItem.defaultProps = {
  value: '',
  as: 'input',
  type: 'text',
  horizontal: false,
  accept: '',
  size: null,
  rows: 1,
  min: null,
  max: null,
  placeholder: '',
  hidden: false,
  errors: null
};
FormItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  as: PropTypes.string,
  displayName: PropTypes.string.isRequired,
  type: PropTypes.string,
  horizontal: PropTypes.bool,
  accept: PropTypes.string,
  size: PropTypes.number,
  rows: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  placeholder: PropTypes.string,
  hidden: PropTypes.bool,
  errors: PropTypes.shape()
};