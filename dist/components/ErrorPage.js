import React from 'react';
import { useNavigate, useRouteError, Link } from 'react-router';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Message from './Message/index';

// Default error page
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ErrorPage() {
  const error = useRouteError();
  //
  let errorText = [error.statusText, error.message].join('\n');
  const {
    response
  } = error;
  if (response) {
    const {
      status
    } = response;
    // Custom messages from some codes
    switch (status) {
      // Not Found
      case 404:
        {
          errorText = 'Такий ресурс не знайдено.\nСпробуйте перевірити посилання.';
          break;
        }
      // Conflict
      case 409:
        {
          errorText = 'Даний запит неможливий так як викликає конфлікт';
          break;
        }
      // Too Many Requests
      case 429:
        {
          errorText = 'Вибачте, однак Ви здійснили занадто багато запитів за короткий проміжок часу. Спробуйте зачекати та оновити сторінку знову';
          break;
        }
      default:
        {
          errorText = [errorText, response.data].join('\n');
          break;
        }
    }
  }

  // Component
  const navigate = useNavigate();
  return /*#__PURE__*/_jsx(Row, {
    as: "main",
    className: "flex-grow-1 align-items-center",
    children: /*#__PURE__*/_jsxs(Col, {
      className: "text-center",
      children: [/*#__PURE__*/_jsx(Row, {
        children: /*#__PURE__*/_jsx(Message, {
          header: "\u041F\u043E\u043C\u0438\u043B\u043A\u0430!",
          text: errorText
        })
      }), /*#__PURE__*/_jsx(Row, {
        className: "mt-5",
        children: /*#__PURE__*/_jsx(Col, {
          xs: 12,
          className: "d-flex justify-content-center",
          children: /*#__PURE__*/_jsx(Button, {
            onClick: () => navigate(-1),
            children: "\u041D\u0430\u0437\u0430\u0434"
          })
        })
      }), /*#__PURE__*/_jsx(Row, {
        className: "mt-5",
        children: /*#__PURE__*/_jsx(Col, {
          xs: 12,
          className: "d-flex justify-content-center",
          children: /*#__PURE__*/_jsx("p", {
            children: /*#__PURE__*/_jsx(Link, {
              to: "/",
              children: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044C \u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443"
            })
          })
        })
      })]
    })
  });
}