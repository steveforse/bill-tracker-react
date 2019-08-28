import React from 'react';
import {
  Modal
} from 'react-bootstrap';

import {FaTrash} from 'react-icons/fa'

import Button from './Button.js'

export default ({isShowing, modalHide, deleteUrl, bodyText, ...otherProps}) => {
  return (
    <Modal {...otherProps} show={isShowing} onHide={modalHide} >
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

