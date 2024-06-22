import axios from 'axios';

const API_URL = 'http://localhost:8000';

// Function to handle user registration
export const createUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/api/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to handle user login
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/api/login`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to get all users
export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/users`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to get a user by ID
export const getUserById = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/api/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to update a user
export const updateUser = async (userId, userData) => {
    try {
        const response = await axios.put(`${API_URL}/api/users/${userId}`, userData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to delete a user
export const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`${API_URL}/api/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
