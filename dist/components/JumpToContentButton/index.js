import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './index.module.scss';

//
import { jsx as _jsx } from "react/jsx-runtime";
export default function JumpToContentButton() {
  // Component
  return /*#__PURE__*/_jsx(Button, {
    className: styles.button,
    as: "a",
    href: "#content",
    children: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043E \u0432\u043C\u0456\u0441\u0442\u0443"
  });
}