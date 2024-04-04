import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './Login.css';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
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
        if (!formData.username.trim()) {
            errors.username = 'Username is required';
        }
        if (!formData.password.trim()) {
            errors.password = 'Password is required';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        fetch(`http://localhost:3000/login/${formData.username}-${formData.password}`, {
          method: 'GET',
        })

      
        .then(response => {
          if (response.ok) {
              console.log("Ok");
          } else {
              throw new Error('Failed to login');
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
                    label="Username"
                    variant="outlined"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    error={!!formErrors.username}
                    helperText={formErrors.username}
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
