import React from 'react';
import Feedback from 'react-bootstrap/Feedback';

// Checks whether form field is valid
const isValid = (errors, fieldName) => {
  let result = false;
  if (errors) result = typeof errors[fieldName] === 'undefined';
  return result;
};

// Checks whether form field is invalid
const isInvalid = (errors, fieldName) => {
  let result = false;
  if (errors) result = errors[fieldName] !== undefined;
  return result;
};

// Returns feeedback based on validation results
const getFeedback = (errors, fieldName) => {
  //
  let result = '';
  if (errors && errors[fieldName] !== undefined) {
    // Merging all related error messages
    const text = errors[fieldName].join('. ');
    // Resulting feedback
    result = /*#__PURE__*/React.createElement(Feedback, {
      type: "invalid"
    }, text);
  }
  return result;
};
export { isValid, isInvalid, getFeedback };