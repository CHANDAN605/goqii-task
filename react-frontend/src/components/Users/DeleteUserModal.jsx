import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../services/api";

function DeleteUserModal({ show, userId, onClose }) {
    const handleClick = async () => {
        const res = await deleteUser(userId);
        onClose();
        localStorage.clear();
    }
    return (
        <>
            <Modal show={show} onHide={onClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body className="no-border">
                    Do you want to delete the user?
                </Modal.Body>
                <Modal.Footer className="no-border">
                    <Button variant="secondary" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClick}>Yes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteUserModal;