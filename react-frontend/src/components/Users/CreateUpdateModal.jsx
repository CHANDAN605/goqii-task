import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { createUser, updateUser } from "../../services/api";
import { toast } from "react-toastify";

const CreateUpdateModal = ({ show, onHandleClose, flag, userdata }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dob: "",
        password: "",
    });
    useEffect(() => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            name: userdata?.name || "",
            email: userdata?.email || "",
            dob: userdata?.dob || "",
        }));
    }, [userdata]);
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            let data = [];
            if (flag === 'create') {
                data = await createUser(formData);

            }
            if (flag === 'update') {
                data = await updateUser(userdata?.id, formData);
            }
            console.log(data);
            toast.success(data?.message);
            setFormData({
                name: "",
                email: "",
                dob: "",
                password: "",
            });
            onHandleClose();
        } catch (error) {
            toast.error("Error creating user");
            console.error("Error creating user", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Modal
                show={show}
                onHide={onHandleClose}
                dialogClassName="modal-90w"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{flag} User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter name"
                                required
                                className="mb-2"
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                required
                                className="mb-2"
                            />
                        </Form.Group>
                        <Form.Group controlId="formDOB">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                required
                                className="mb-2"
                            />
                        </Form.Group>
                        {flag === "create" ? <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter password"
                                required
                                className="mb-2"
                            />
                        </Form.Group> : <></>}

                        <Button
                            variant="primary"
                            type="submit"
                            className="mt-2"
                            disabled={loading}
                        >
                            {loading ? "Saving..." : "Save Changes"}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CreateUpdateModal;
