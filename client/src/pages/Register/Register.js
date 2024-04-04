import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import './Register.css';

function Register() {
    const [formErrors, setFormErrors] = useState({});
    const [users, setUsers] = useState([]);

    async function submit() {
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

        try {
            const response = await fetch(`http://localhost:3001/api/dashboard/users/update/${formData.username}-${formData.firstName}-${formData.lastName}-${formData.sex}-${formData.email}-${formData.phoneNumber}-${formData.homeAddress}-${formData.DOB}`, {
                method: 'GET'
            });
            const data = await response.json();
            // Handle response data as needed
        } catch (error) {
            console.error("Error fetching classified listings data:", error);
        }
    }

    return (
        <div className="main-page-container">
            <form id="user-info">
                Username <input type="text" name="uname" />
                First Name <input type="text" name="fname" />
                Last Name <input type="text" name="lname" />
                Gender <input type="text" name="gender" />
                <br></br>
                Email <input type="text" name="email" />
                Phone Number <input type="text" name="phone" />
                Home Address <input type="text" name="addr" />
                Date of Birth <input type="text" name="dob" />
            </form>
            <div className="center">
                <button onClick={submit}>Register</button>
            </div>
        </div>
    );
}

export default Register;
