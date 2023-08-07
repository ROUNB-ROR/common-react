import React from 'react';
import { useNavigate, useRouteError, Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Message from './Message/index';

// Default error page
export default function ErrorPage() {
  const error = useRouteError();
  //
  let errorText = error.statusText || error.message;
  if (error.response && error.response.status === 404) {
    errorText = 'Такий ресурс не знайдено.\nСпробуйте перевірити посилання.';
  }

  // Component
  const navigate = useNavigate();
  return /*#__PURE__*/React.createElement(Row, {
    as: "main",
    className: "flex-grow-1 align-items-center"
  }, /*#__PURE__*/React.createElement(Col, {
    className: "text-center"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Message, {
    header: "\u041F\u043E\u043C\u0438\u043B\u043A\u0430!",
    text: errorText
  })), /*#__PURE__*/React.createElement(Row, {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement(Col, {
    xs: 12,
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => navigate(-1)
  }, "\u041D\u0430\u0437\u0430\u0434"))), /*#__PURE__*/React.createElement(Row, {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement(Col, {
    xs: 12,
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044C \u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443")))));
}