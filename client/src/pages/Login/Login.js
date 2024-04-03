import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './Login.css';


function Login(){

    const LoginForm = () => {
        const [formData, setFormData] = useState({
        email: '',
        password: '',
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
            {/* Add rest */}
            <Button className='primary-button' type="submit" variant="contained">Login</Button>
        </Box>
      </div>
        );
    };
        
}

export default Login;