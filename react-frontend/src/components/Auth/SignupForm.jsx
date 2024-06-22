import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import SignupImg from "../../assets/signup2.png";
// import { createUser } from "../../services/api";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../services/api";

export default function SignupForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dob: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await createUser(formData);
            console.log(data);
            toast.success(data?.message);
            setFormData({
                name: "",
                email: "",
                dob: "",
                password: "",
            });
            navigate('/login');
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Error submitting form");
        }
    };

    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center vh-100 gradient-background"
        >
            <Row className="w-100">
                <Col md={8} className="mx-auto">
                    <Row className="h-100">
                        <Col
                            md={6}
                            className="p-0 d-flex justify-content-center align-items-center bg-light"
                            id="left-section"
                        >
                            <img
                                src={SignupImg}
                                alt="Signup"
                                className="img-fluid h-100 w-100"
                            />
                        </Col>
                        <Col
                            md={6}
                            className="d-flex justify-content-center align-items-center bg-white"
                            id="right-section"
                        >
                            <Form onSubmit={handleSubmit} className="p-4 rounded">
                                <div className="d-flex justify-content-center">
                                    <h2 className="mb-4">Sign up</h2>
                                </div>
                                <Form.Group controlId="formName" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="form-control-custom"
                                        placeholder="Name"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formEmail" className="mb-3">
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-control-custom"
                                        placeholder="Email"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formdob" className="mb-3">
                                    <Form.Control
                                        type="date"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        className="form-control-custom"
                                        placeholder="Date of Birth"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formPassword" className="mb-3">
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="form-control-custom"
                                        placeholder="Password"
                                        required
                                    />
                                </Form.Group>
                                <Button
                                    type="submit"
                                    className="w-100 gradient-background btn-custom"
                                >
                                    Sign Up
                                </Button>
                                <div className="mt-3 text-center">
                                    <p>Already have an account? <Link to="/login">Login here!</Link></p>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

