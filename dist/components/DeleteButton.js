import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Delete button with confirmation modal
export default function DeleteButton(props) {
  const {
    enabled,
    deletePath,
    entityName,
    onConfirm
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
    modal = /*#__PURE__*/React.createElement(Modal, {
      show: show,
      onHide: () => handleHideModal()
    }, /*#__PURE__*/React.createElement(Modal.Header, {
      closeButton: true
    }, /*#__PURE__*/React.createElement(Modal.Title, null, "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F")), /*#__PURE__*/React.createElement(Modal.Body, null, `Ви дійсно бажаєте видалити ${entityName}?`), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(Button, {
      as: Link,
      variant: "danger",
      to: deletePath,
      onClick: () => handleConfirm()
    }, "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => handleHideModal()
    }, "\u0417\u0430\u043A\u0440\u0438\u0442\u0438")));
  }

  // Component
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    className: "m-2",
    variant: "danger",
    disabled: !enabled,
    onClick: () => handleShowModal()
  }, "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"), modal);
}

// prop types
DeleteButton.propTypes = {
  enabled: PropTypes.bool,
  deletePath: PropTypes.string.isRequired,
  entityName: PropTypes.string.isRequired,
  onConfirm: PropTypes.func
};

// default values
DeleteButton.defaultProps = {
  enabled: true,
  onConfirm: () => {}
};