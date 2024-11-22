import React from 'react';
import PropTypes from 'prop-types';
import RBForm from 'react-bootstrap/Form';
import './styles.scss';
import { isValid, isInvalid, getFeedback } from '../validation';

//
export default function FormCheck(props) {
  //
  const {
    name,
    as,
    checked,
    horizontal,
    fullwidth,
    displayName,
    hidden,
    errors,
    onChange
  } = props;

  //
  const label = hidden ? '' : /*#__PURE__*/React.createElement(RBForm.Label, null, displayName);

  // Classes for control
  const controlClasses = [];
  if (horizontal) controlClasses.push('m-2');
  if (fullwidth) controlClasses.push('flex-grow-1');
  const controlClassName = controlClasses.join(' ');
  // Control element
  const controlElement = /*#__PURE__*/React.createElement(RBForm.Check, {
    name: name,
    className: controlClassName,
    as: as,
    type: "checkbox",
    hidden: hidden,
    defaultChecked: checked,
    id: name,
    isValid: isValid(errors, name),
    isInvalid: isInvalid(errors, name),
    onChange: t => onChange(t)
  });

  // Controls with feedback
  const controls = /*#__PURE__*/React.createElement(React.Fragment, null, label, controlElement);
  const feedback = getFeedback(errors, name);

  // Different wrapping depending on layout
  const result = horizontal ? /*#__PURE__*/React.createElement("div", {
    className: `horizontal d-flex${fullwidth ? ' flex-grow-1' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: fullwidth ? 'd-flex flex-grow-1' : ''
  }, controls), feedback) : /*#__PURE__*/React.createElement(RBForm.Group, null, controls, feedback);
  return result;
}
FormCheck.defaultProps = {
  checked: false,
  as: 'input',
  horizontal: false,
  fullwidth: false,
  hidden: false,
  errors: null,
  onChange: () => {}
};
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