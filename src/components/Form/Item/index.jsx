import React from 'react';
import PropTypes from 'prop-types';

import RBForm from 'react-bootstrap/Form';

import './styles.scss';

import { isValid, isInvalid, getFeedback } from '../validation';

//
export default function FormItem(props) {
  //
  const {
    name, as, value, type, autocomplete, horizontal, fullwidth, accept, multiple, size,
    min, max, rows, displayName, hidden, placeholder, errors, onChange,
  } = props;

  //
  const label = hidden ? '' : <RBForm.Label>{displayName}</RBForm.Label>;

  // Classes for control
  const controlClasses = [];
  if (horizontal) controlClasses.push('m-2');
  if (fullwidth) controlClasses.push('flex-grow-1');
  const controlClassName = controlClasses.join(' ');
  // Control element
  let controlElement = '';
  if (type === 'checkbox') {
    controlElement = (
      <RBForm.Check
        name={name}
        className={controlClassName}
        as={as}
        type={type}
        hidden={hidden}
        id={name}
        defaultValue={value}
        isValid={isValid(errors, name)}
        isInvalid={isInvalid(errors, name)}
        onChange={(t) => onChange(t)}
      />
    );
  } else {
    controlElement = (
      <RBForm.Control
        name={name}
        className={controlClassName}
        as={as}
        type={type}
        autoComplete={autocomplete ? 'on' : 'off'}
        accept={accept}
        multiple={multiple}
        htmlsize={size}
        maxLength={size}
        min={min}
        max={max}
        rows={rows}
        placeholder={placeholder}
        hidden={hidden}
        id={name}
        defaultValue={value}
        isValid={isValid(errors, name)}
        isInvalid={isInvalid(errors, name)}
        onChange={(t) => onChange(t)}
      />
    );
  }

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

FormItem.defaultProps = {
  value: '',
  as: 'input',
  type: 'text',
  autocomplete: true,
  horizontal: false,
  fullwidth: false,
  accept: '',
  multiple: false,
  size: null,
  rows: 1,
  min: null,
  max: null,
  placeholder: '',
  hidden: false,
  errors: null,
  onChange: () => {},
};

FormItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape]),
  as: PropTypes.string,
  displayName: PropTypes.string.isRequired,
  type: PropTypes.string,
  autocomplete: PropTypes.bool,
  horizontal: PropTypes.bool,
  fullwidth: PropTypes.bool,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  size: PropTypes.number,
  rows: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  placeholder: PropTypes.string,
  hidden: PropTypes.bool,
  errors: PropTypes.shape(),
  onChange: PropTypes.func,
};
