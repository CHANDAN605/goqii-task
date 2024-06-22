import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import { loginUser } from "../../services/api";
import { toast } from "react-toastify";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
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
            const data = await loginUser(formData);
            console.log("Login successful:", data);
            toast.success(data?.message);
            localStorage.setItem("token", data.token);
            setFormData({
                email: "",
                password: "",
            });

            navigate('/dashboard');
        } catch (error) {
            console.error("Login error:", error);
            toast.error(error.message); // Handle error message display
        }
    };

    return (
        <Container
            fluid
            className="d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
        >
            <Row className="w-100">
                <Col xs={12} md={6} lg={4} className="mx-auto">
                    <Form
                        onSubmit={handleSubmit}
                        className="p-4 border rounded shadow-sm bg-white"
                    >
                        <div className="d-flex justify-content-center">
                            <h2 className="text-center mb-4">Login</h2>
                        </div>
                        <Form.Group controlId="formBasicEmail" className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Login
                        </Button>

                        <div className="mt-3 text-center">
                            <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginForm;
