import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import './styles.scss';
export default function Message(props) {
  //
  const {
    header,
    text
  } = props;
  const headerElement = /*#__PURE__*/React.createElement("p", {
    className: "message-in-page text-center"
  },
  // Splitting text on lines, adding unique key and the forming the text
  header.split('\n').map((str, index) => ({
    line: str,
    key: index
  })).map(item => /*#__PURE__*/React.createElement("span", {
    key: item.key
  }, item.line, /*#__PURE__*/React.createElement("br", null))));
  let textElement = '';
  if (text) {
    textElement = /*#__PURE__*/React.createElement("p", {
      className: "text-center"
    },
    // Splitting text on lines, adding unique key and the forming the text
    text.split('\n').map((str, index) => ({
      line: str,
      key: index
    })).map(item => /*#__PURE__*/React.createElement("span", {
      key: item.key
    }, item.line, /*#__PURE__*/React.createElement("br", null))));
  }
  return /*#__PURE__*/React.createElement(Col, {
    xs: "12",
    className: "pb-2"
  }, headerElement, textElement);
}
Message.defaultProps = {
  text: ''
};
Message.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string
};