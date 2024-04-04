import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import './Register.css';

function Register() {
    const [formErrors, setFormErrors] = useState({});
    const [users, setUsers] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = document.getElementById("user-info");
        const formData = {
            username: form.elements["uname"].value,
            firstName: form.elements["fname"].value,
            lastName: form.elements["lname"].value,
            sex: form.elements["gender"].value,
            homeAddress: form.elements["addr"].value,
            DOB: form.elements["dob"].value,
            phoneNumber: form.elements["phone"].value,
            email: form.elements["email"].value,
            password: form.elements["password"].value,
            confirmPassword: form.elements["confirmPassword"].value,
            is_admin: false,
        };

        const errors = {};
        for (const [key, value] of Object.entries(formData)) {
            if (!value.trim()) {
                errors[key] = `${key} is required`;
            }
        }
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (formData.confirmPassword !== formData.password) {
            errors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        try {
            const response = await fetch(`http://localhost:3001/api/dashboard/users/update/${formData.username}-${formData.firstName}-${formData.lastName}-${formData.sex}-${formData.email}-${formData.phoneNumber}-${formData.homeAddress}-${formData.DOB}`, {
                method: 'GET'
            });
            const data = await response.json();
            // Handle response data
        } catch (error) {
            console.error("Error fetching classified listings data:", error);
        }
    };

    return (
        <div className="main-page-container">
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                onSubmit={handleSubmit}
                id="user-info"
            >
                Username <input type="text" name="uname" />
                First Name <input type="text" name="fname" />
                Last Name <input type="text" name="lname" />
                Gender <input type="text" name="gender" />
                <br />
                Email <input type="text" name="email" />
                Phone Number <input type="text" name="phone" />
                Home Address <input type="text" name="addr" />
                Date of Birth <input type="text" name="dob" />
                Password <input type="password" name="password" />
                Confirm Password <input type="password" name="confirmPassword" />
                <Button className='primary-button' type="submit" variant="contained">Register</Button>
            </Box>
        </div>
    );
}

export default Register;
