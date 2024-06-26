import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import './Register.css';

function Register() {
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [users, setUsers] = useState([]);

    async function submit() {
        const form = document.getElementById("user-info");
        if (form.elements["uname"].value == "" ||
        form.elements["fname"].value == "" ||
        form.elements["lname"].value == "" ||
        form.elements["gender"].value == "" ||
        form.elements["addr"].value == "" ||
        form.elements["dob"].value == "" ||
        form.elements["phone"].value == "" ||
        form.elements["email"].value == "" ||
        form.elements["password"].value == "" 
        )
        {
        console.log("lmao")
        return;
        }

        console.log(`http://localhost:3001/api/user/register/${form.elements["uname"].value}-${form.elements["fname"].value}-${form.elements["lname"].value}-${form.elements["gender"].value}-${form.elements["addr"].value}-${form.elements["dob"].value}-${form.elements["phone"].value}-${form.elements["email"].value}-${form.elements["password"].value}-${false}`)
        try {
            const response = await fetch(`http://localhost:3001/api/user/register/${form.elements["uname"].value}-${form.elements["fname"].value}-${form.elements["lname"].value}-${form.elements["gender"].value}-${form.elements["addr"].value}-${form.elements["dob"].value}-${form.elements["phone"].value}-${form.elements["email"].value}-${form.elements["password"].value}-${false}`, {
                method: 'GET'
            });
            const data = await response.json();
            navigate('/'); 
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
                Home Address <input type="text" name="addr" />
                <br></br>
                Birth Year <input type="text" name="dob" />
                Phone Number <input type="text" name="phone" />
                Email <input type="text" name="email" />
                Password <input type="text" name="password" />
            </form>
            <div className="center">
                <button onClick={submit}>Register</button>
            </div>
        </div>
    );
}

export default Register;
