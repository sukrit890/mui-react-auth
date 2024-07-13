import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { ThemeProvider, createTheme, CssBaseline, Container, Box } from '@mui/material';

function App() {

  

  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
        
              <Container>
                  <Box mt={4}>
                      <Routes>
                          <Route path="/Login" element={<Login />} />
                          <Route path="/Register" element={<Register />} />
                        
     
                      </Routes>
                  </Box>
              </Container>
          </BrowserRouter>
      </ThemeProvider>
  );
};

export default App;
