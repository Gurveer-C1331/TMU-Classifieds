import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './Register.css';


function Register(){

    const RegistrationForm = () => {
        const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        sex: '',
        homeAddress: '',
        dateOfBirth: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        });
    }
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        if (!formData.firstName.trim()) {
          errors.firstName = 'First Name is required';
        }
        if (!formData.lastName.trim()) {
          errors.lastName = 'Last Name is required';
        }

        // Add for other fields
    
        if (Object.keys(errors).length > 0) {
          setFormErrors(errors);
          return;
        }

    return (
        <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            onSubmit={handleSubmit}
        >
            <TextField
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={!!formErrors.firstName}
                helperText={formErrors.firstName}
            />
            <TextField
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={!!formErrors.lastName}
                helperText={formErrors.lastName}
            />
            {/* Add rest */}
            <Button type="submit" variant="contained">Register</Button>
        </Box>
        );
    };
        
}

export default Register;