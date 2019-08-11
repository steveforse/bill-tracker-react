import React from 'react';
import {
  Button,
  Modal
} from 'react-bootstrap';

const DeleteModal = ({isShowing, modalHide, onEnter, deleteUrl, bodyText}) => {
  return (
    <Modal show={isShowing} onHide={modalHide} onEnter={onEnter} >
      <Modal.Header closeButton>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>{bodyText}</Modal.Body>
      <Modal.Footer>
        <Button variant="default" onClick={modalHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => { console.log(deleteUrl) }}>
          Delete Payee
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal;
