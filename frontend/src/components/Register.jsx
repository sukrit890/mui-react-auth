import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:3001/register', { name, email, password })
        .then(result => {
            console.log(result);
            if (result.data === "Already registered") {
                alert("E-mail already registered! Please Login to proceed.");
                navigate('/login');
            } else {
                alert("Registered successfully! Please Login to proceed.");
                navigate('/login');
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <Box
            sx={{
                backgroundImage: '<div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                height: '100vh',
            }}
        >
            <Container maxWidth="xs" sx={{ bgcolor: 'white', p: 3, borderRadius: 2 }}>
                <Typography variant="h4" component="h1" color="primary" gutterBottom>
                    Register
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box mb={3} textAlign="left">
                        <TextField
                            fullWidth
                            type="text"
                            label="Name"
                            variant="outlined"
                            placeholder="Enter Name"
                            onChange={(event) => setName(event.target.value)}
                            required
                        />
                    </Box>
                    <Box mb={3} textAlign="left">
                        <TextField
                            fullWidth
                            type="email"
                            label="Email Id"
                            variant="outlined"
                            placeholder="Enter Email"
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </Box>
                    <Box mb={3} textAlign="left">
                        <TextField
                            fullWidth
                            type="password"
                            label="Password"
                            variant="outlined"
                            placeholder="Enter Password"
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </Box>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Register
                    </Button>
                </form>
                <Typography mt={2}>
                    Already have an account?
                </Typography>
                <Button component={Link} to="/login" variant="contained" color="secondary" fullWidth>
                    Login
                </Button>
            </Container>
        </Box>
    );
}

export default Register;
