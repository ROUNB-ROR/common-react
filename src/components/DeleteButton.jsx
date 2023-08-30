import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Delete button with confirmation modal
export default function DeleteButton(props) {
  const {
    enabled, deletePath, entityName, onConfirm,
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
    modal = (
      <Modal
        show={show}
        onHide={() => handleHideModal()}
      >
        <Modal.Header closeButton>
          <Modal.Title>Підтвердження видалення</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {`Ви дійсно бажаєте видалити ${entityName}?`}
        </Modal.Body>
        <Modal.Footer>
          <Button
            as={Link}
            variant="danger"
            to={deletePath}
            onClick={() => handleConfirm()}
          >
            Видалити
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleHideModal()}
          >
            Закрити
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  // Component
  return (
    <>
      <Button
        className="m-2"
        variant="danger"
        disabled={!enabled}
        onClick={() => handleShowModal()}
      >
        Видалити
      </Button>
      {modal}
    </>
  );
}

// prop types
DeleteButton.propTypes = {
  enabled: PropTypes.bool,
  deletePath: PropTypes.string.isRequired,
  entityName: PropTypes.string.isRequired,
  onConfirm: PropTypes.func,
};

// default values
DeleteButton.defaultProps = {
  enabled: true,
  onConfirm: () => {},
};
