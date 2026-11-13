import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Delete button with confirmation modal
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function DeleteButton(props) {
  const {
    enabled = true,
    deletePath,
    entityName,
    onConfirm = () => {},
    children = /*#__PURE__*/_jsx(_Fragment, {
      children: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"
    })
  } = props;
  // Id to delete
  const [show, setShow] = useState(false);
  const handleShowModal = () => setShow(true);
  const handleHideModal = () => setShow(false);

  //
  const handleConfirm = () => {
    handleHideModal();
    onConfirm();
  };

  // Modal for delete confirmation
  let modal = '';
  if (enabled) {
    modal = /*#__PURE__*/_jsxs(Modal, {
      show: show,
      onHide: () => handleHideModal(),
      children: [/*#__PURE__*/_jsx(Modal.Header, {
        closeButton: true,
        children: /*#__PURE__*/_jsx(Modal.Title, {
          children: "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F"
        })
      }), /*#__PURE__*/_jsx(Modal.Body, {
        children: `Ви дійсно бажаєте видалити ${entityName}?`
      }), /*#__PURE__*/_jsxs(Modal.Footer, {
        children: [/*#__PURE__*/_jsx(Button, {
          as: Link,
          variant: "danger",
          to: deletePath,
          onClick: () => handleConfirm(),
          children: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"
        }), /*#__PURE__*/_jsx(Button, {
          variant: "secondary",
          onClick: () => handleHideModal(),
          children: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438"
        })]
      })]
    });
  }

  // Component
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Button, {
      className: "m-2",
      variant: "danger",
      disabled: !enabled,
      onClick: () => handleShowModal(),
      children: children
    }), modal]
  });
}

// prop types
DeleteButton.propTypes = {
  enabled: PropTypes.bool,
  deletePath: PropTypes.string.isRequired,
  entityName: PropTypes.string.isRequired,
  onConfirm: PropTypes.func,
  children: PropTypes.node
};