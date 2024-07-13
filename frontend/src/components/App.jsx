import React from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, CssBaseline, AppBar, Toolbar, Typography, Button, Avatar, Box} from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Container component="main"  style={{overflow: 'hidden', height: '100vh'}}>
      <AppBar color='primary' position="static">
        <Toolbar>
        <Box
          component="img"
          src="/react.svg"
          sx={{
            height: 40,
            width: 40,
            marginRight: 2,
          }}
        />
          <Typography variant="h6">
            
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit"component={Link} to="/Register">
              Register
            </Button>
            <Button color="inherit" component={Link} to="/Login">
              Login
            </Button>
        </Toolbar>
      </AppBar>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        
   
      </Container>
    </BrowserRouter>
  );
}

export default App;
