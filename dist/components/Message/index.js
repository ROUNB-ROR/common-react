import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import './styles.scss';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Message(props) {
  //
  const {
    header,
    text = ''
  } = props;
  const headerElement = /*#__PURE__*/_jsx("p", {
    className: "message-in-page text-center",
    children:
    // Splitting text on lines, adding unique key and the forming the text
    header.split('\n').map((str, index) => ({
      line: str,
      key: index
    })).map(item => /*#__PURE__*/_jsxs("span", {
      children: [item.line, /*#__PURE__*/_jsx("br", {})]
    }, item.key))
  });
  let textElement = '';
  if (text) {
    textElement = /*#__PURE__*/_jsx("p", {
      className: "text-center",
      children:
      // Splitting text on lines, adding unique key and the forming the text
      text.split('\n').map((str, index) => ({
        line: str,
        key: index
      })).map(item => /*#__PURE__*/_jsxs("span", {
        children: [item.line, /*#__PURE__*/_jsx("br", {})]
      }, item.key))
    });
  }
  return /*#__PURE__*/_jsxs(Col, {
    xs: "12",
    className: "pb-2",
    children: [headerElement, textElement]
  });
}
Message.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string
};