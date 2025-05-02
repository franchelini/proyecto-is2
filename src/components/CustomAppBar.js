import React from 'react';
import { AppBar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#4982ef', padding: 0 }}>
        {/* Sección del título */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#3a6fb0', 
            padding: '1rem', 
            borderBottom: '2px solid #2c5a8a', 
          }}
        >
          {/* Imagen */}
          <img
            src="clima3.png"
            alt="Logo"
            style={{ width: '60px', height: '60px' }}
          />
          {/* Texto */}
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: '#fff', 
              marginLeft: '1rem', 
            }}
          >
            App MyTime
          </Typography>
        </Box>

        {/* Sección de botones */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2c5a8a', 
            padding: '0.5rem 1rem', 
            gap: '5rem', 
          }}
        >
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            REGISTRO
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/activities"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            ACTIVIDADES
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/user"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            USUARIO
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/time"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            CALENDARIO SEMANAL
          </Button>
        </Box>
      </AppBar>
    </Box>
  );
};

export default CustomAppBar;