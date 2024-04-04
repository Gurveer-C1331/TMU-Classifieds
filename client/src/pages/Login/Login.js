import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './Login.css';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        }
        if (!formData.password.trim()) {
            errors.password = 'Password is required';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

      
        .then(response => {
          if (response.ok) {
              return response.json();
          } else {
              throw new Error('Failed to register/login');
          }
        })
        .then(data => {
          // Handle login
          console.log(data);
        })
        .catch(error => {
          // Handle error
          console.error(error);
        });
      }
      
      return (
        <div className="main-page-container">
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
            >
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
                <Button className='primary-button' type="submit" variant="contained">Login</Button>
            </Box>
        </div>
      );
  }
  
  export default Login;