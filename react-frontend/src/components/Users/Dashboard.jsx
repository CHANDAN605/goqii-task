import React, { useState } from "react";
import { Navbar, Container, Button, Alert } from "react-bootstrap";
import CreateUpdateModal from "./CreateUpdateModal";
import DeleteUserModal from "./DeleteUserModal";
import UserTable from "./UserTable";
import logo from "../../assets/goqii-logo.png";
import { ToastContainer } from "react-toastify";
import { getUserById } from "../../services/api";

const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const [flag, setFlag] = useState("");
    const [userdata, setUserData] = useState("");
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDelete = (userId) => {
        setUserData(userId);
        setShowDeleteModal(true);
    };

    const handleCreateUser = async () => {
        setFlag('create')
        setShowModal(true)
    };
    const handleUpdate = async (userId) => {
        const data = await getUserById(userId);
        setUserData(data)
        setFlag('update')
        setShowModal(true);
    };
    // console.log("userdata", userdata)
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{" "}
                        Dashboard
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <ToastContainer />
            <Container fluid className="flex-grow-1">
                <div className="p-4">
                    <div className="d-flex w-100 justify-content-between my-3">
                        <h4>Welcome to the Dashboard!</h4>
                        <Button variant="primary" onClick={() => handleCreateUser()}>
                            Create user
                        </Button>
                    </div>
                    <UserTable
                        setShowModal={setShowModal}
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                    />
                </div>
            </Container>

            <CreateUpdateModal
                show={showModal}
                onHandleClose={() => setShowModal(false)}
                flag={flag}
                userdata={userdata}
            />

            <DeleteUserModal
                show={showDeleteModal}
                userId={userdata}
                onClose={() => setShowDeleteModal(false)}
            />
        </div>
    );
};

export default Dashboard;