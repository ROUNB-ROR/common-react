import React from 'react';
import Feedback from 'react-bootstrap/Feedback';

// Checks whether the form field is valid
import { jsx as _jsx } from "react/jsx-runtime";
const isValid = (errors, fieldName) => {
  let result = false;
  if (errors) result = typeof errors[fieldName] === 'undefined';
  return result;
};

// Checks whether the form field is invalid
const isInvalid = (errors, fieldName) => {
  let result = false;
  if (errors) result = errors[fieldName] !== undefined;
  return result;
};

// Returns the feedback based on the validation results
const getFeedback = (errors, fieldName) => {
  //
  let result = '';
  if (errors && errors[fieldName] !== undefined) {
    let text = '';
    if (Array.isArray(errors[fieldName])) {
      // Merging all the related error messages
      text = errors[fieldName].join('. ');
    } else {
      text = errors[fieldName];
    }
    // The resulting feedback
    result = /*#__PURE__*/_jsx(Feedback, {
      type: "invalid",
      children: text
    });
  }
  return result;
};
export { isValid, isInvalid, getFeedback };