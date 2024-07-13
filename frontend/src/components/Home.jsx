import React from 'react';
import { Link } from "react-router-dom";
import { Box, Button, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h3" sx={{color: 'white'}}component="h1">
        Login Success 
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/login"
        sx={{ mt: 5, bgcolor: 'white', color: 'black' }}
      >
        Logout
      </Button>
    </Box>
  );
}

export default Home;
