import React from 'react'
import { Modal, Button } from 'react-bootstrap'
const BuyModal = ({show, setShow}) => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default BuyModal
