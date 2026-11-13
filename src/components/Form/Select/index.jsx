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
    name, value = '', horizontal = false, fullwidth = false, displayName = '', hidden, errors = null,
    items = [], onChange = () => {},
  } = props;

  //
  const label = (hidden || displayName === '') ? '' : <RBForm.Label htmlFor={name}>{displayName}</RBForm.Label>;

  // Classes for control
  const controlClasses = [];
  if (horizontal) controlClasses.push('m-2');
  if (fullwidth) controlClasses.push('flex-grow-1');
  const controlClassName = controlClasses.join(' ');
  // Options
  let controlOptions = '';
  if (items) {
    controlOptions = (
      <>
        {
          items.map((item) => (
            <option value={item.value} key={`${name}${item.value}`} disabled={item.disabled || false}>
              {item.display}
            </option>
          ))
        }
      </>
    );
  }

  // Control element
  const controlElement = (
    <RBForm.Select
      name={name}
      className={controlClassName}
      id={name}
      defaultValue={value}
      isValid={isValid(errors, name)}
      isInvalid={isInvalid(errors, name)}
      onChange={onChange}
    >
      {controlOptions}
    </RBForm.Select>
  );

  // Controls with feedback
  const controls = (
    <>
      {label}
      {controlElement}
    </>
  );
  const feedback = getFeedback(errors, name);

  // Different wrapping depending on layout
  const result = horizontal
    ? (
      <div className={`horizontal d-flex${fullwidth ? ' flex-grow-1' : ''}`}>
        <div className={fullwidth ? 'd-flex flex-grow-1' : ''}>{controls}</div>
        {feedback}
      </div>
    )
    : (
      <RBForm.Group>
        {controls}
        {feedback}
      </RBForm.Group>
    );

  return result;
}

FormItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number, PropTypes.shape],
  ),
  displayName: PropTypes.string,
  horizontal: PropTypes.bool,
  fullwidth: PropTypes.bool,
  errors: PropTypes.shape(),
  items: PropTypes.arrayOf(PropTypes.shape({
    display: PropTypes.string,
    value: PropTypes.oneOfType(
      [PropTypes.string, PropTypes.number, PropTypes.shape],
    ),
  })),
  onChange: PropTypes.func,
};
