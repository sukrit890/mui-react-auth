import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('https://mui-react-auth.vercel.app/', { email, password })
        .then(result => {
            console.log(result);
            if (result.data === "Success") {
                console.log("Login Success");
                alert('Login successful!');
                navigate('/home');
            } else {
                alert('Incorrect password! Please try again.');
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <Box
            sx={{
             
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                height: '100vh',
            }}
        >
            <Container maxWidth="xs" sx={{ bgcolor: 'white', p: 3, borderRadius: 2 }}>
                <Typography variant="h4" component="h1" color="primary" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
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
                        Login
                    </Button>
                </form>
                <Typography mt={2}>
                    Don&apos;t have an account?
                </Typography>
                <Button component={Link} to="/register" variant="contained" color="secondary" fullWidth>
                    Register
                </Button>
            </Container>
        </Box>
    );
}

export default Login;
