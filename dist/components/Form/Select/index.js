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
export default function FormItem(props) {
  //
  const {
    name,
    value,
    horizontal,
    fullwidth,
    displayName,
    hidden,
    errors,
    items
  } = props;

  //
  const label = hidden ? '' : /*#__PURE__*/React.createElement(RBForm.Label, null, displayName);

  // Classes for control
  const controlClasses = [];
  if (horizontal) controlClasses.push('m-2');
  if (fullwidth) controlClasses.push('flex-grow-1');
  const controlClassName = controlClasses.join(' ');
  // Options
  let controlOptions = '';
  if (items) {
    controlOptions = /*#__PURE__*/React.createElement(React.Fragment, null, items.map(item => /*#__PURE__*/React.createElement("option", {
      value: item.value,
      key: `${name}${item.value}`
    }, item.display)));
  }
  // Control element
  const controlElement = /*#__PURE__*/React.createElement(RBForm.Select, {
    name: name,
    className: controlClassName,
    id: name,
    defaultValue: value,
    isValid: isValid(errors, name),
    isInvalid: isInvalid(errors, name)
  }, controlOptions);

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
FormItem.defaultProps = {
  value: '',
  horizontal: false,
  fullwidth: false,
  errors: null,
  items: []
};
FormItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape]),
  displayName: PropTypes.string.isRequired,
  horizontal: PropTypes.bool,
  fullwidth: PropTypes.bool,
  errors: PropTypes.shape(),
  items: PropTypes.arrayOf(PropTypes.shape({
    display: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape])
  }))
};