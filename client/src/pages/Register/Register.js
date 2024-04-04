import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './Register.css';

function Register() {

    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        sex: '',
        homeAddress: '',
        DOB: new Date(),
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        is_admin: false,
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const errors = {};
      if (!formData.username.trim()) {
        errors.username = 'Username is required';
        }
      if (!formData.firstName.trim()) {
          errors.firstName = 'First name is required';
      }
      if (!formData.lastName.trim()) {
          errors.lastName = 'Last name is required';
      }
      if (!formData.sex.trim()) {
          errors.sex = 'Sex is required';
      }
      if (!formData.homeAddress.trim()) {
          errors.homeAddress = 'Home address is required';
      }
      if (!formData.phoneNumber.trim()) {
          errors.phoneNumber = 'Phone number is required';
      }
      if (!formData.email.trim()) {
          errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = 'Email is invalid';
      }
      if (!formData.password.trim()) {
          errors.password = 'Password is required';
      } 
      if (!formData.confirmPassword.trim()) {
          errors.confirmPassword = 'Confirm password is required';
      } else if (formData.confirmPassword !== formData.password) {
          errors.confirmPassword = 'Passwords do not match';
      }
  
      if (Object.keys(errors).length > 0) {
          setFormErrors(errors);
          return;
      }
  
      fetch(`http://localhost:3000/api/user/register/${formData.username}-${formData.firstName}-${formData.lastName}-${formData.sex}-${formData.homeAddress}-${formData.DOB}-${formData.email}-${formData.password}-${formData.is_admin}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to register');
            }
        })
        .then(data => {
            // Handle register
            console.log(data);
        })
        .catch(error => {
            // Handle error
            console.error(error);
        } )
      }

    return (
      <div className="main-page-container">
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
            <TextField
                label="Sex"
                variant="outlined"
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                error={!!formErrors.sex}
                helperText={formErrors.sex}
            />
            <TextField
                label="Home Address"
                variant="outlined"
                name="homeAddress"
                value={formData.homeAddress}
                onChange={handleChange}
                error={!!formErrors.homeAddress}
                helperText={formErrors.homeAddress}
            />
            <TextField
                label="Phone Number"
                variant="outlined"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                error={!!formErrors.phoneNumber}
                helperText={formErrors.phoneNumber}
            />
            <TextField
                label="Email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!formErrors.email}
                helperText={formErrors.email}
            />
            <TextField
                label="Password"
                variant="outlined"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={!!formErrors.password}
                helperText={formErrors.password}
            />
            <TextField
                label="Confirm Password"
                variant="outlined"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!formErrors.confirmPassword}
                helperText={formErrors.confirmPassword}
            />
            <Button className='primary-button' type="submit" variant="contained">Register</Button>
        </Box>
      </div>
    );

}

export default Register;
