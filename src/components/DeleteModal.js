import React from 'react';
import {
  Modal
} from 'react-bootstrap';

import {FaTrash} from 'react-icons/fa'

import Button from './Button.js'

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
        <Button variant="danger" icon={FaTrash} onClick={() => { console.log(deleteUrl) }}>
          Delete Payee
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal;
