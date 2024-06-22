import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { getUsers } from "../../services/api";

function UserTable({ handleDelete, handleUpdate, setFlag }) {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUsers();
                setUserData(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchData();
    }, [handleUpdate, handleDelete, setFlag]);

    return (
        <Table striped>
            <thead>
                <tr>
                    <th>Sr no.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date of birth</th>
                    {/* <th>Password</th> */}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {userData.map((data, id) => (
                    <tr key={id}>
                        <td>{id + 1}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.dob}</td>
                        {/* <td>{data.password}</td> */}
                        <td>
                            <Button
                                variant="secondary me-3"
                                onClick={() => handleUpdate(data.id)}
                            >
                                Update
                            </Button>
                            <Button
                                variant="danger"
                                onClick={() => handleDelete(data.id)}
                            >
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default UserTable;
