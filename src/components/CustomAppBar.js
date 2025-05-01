import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1, height:"100hv" }}>
      <AppBar position="static" sx={{ backgroundColor: '#4982ef', height: '9rem' }}>
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
         
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center', 
              gap: '0.5rem', 
              alignContent:"space-between"
            }}
          >
            {/* Imagen */}
            <img
              src="clima3.png" 
              alt="Logo"
              style={{ width: '60px', height: '60px', mt: '2rem' }} 
            />
            {/* Texto */}
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                mt: '1rem',
              }}
            >
              App MyTime
            </Typography>
          </Box>
          {/* Botones */}
          <Box
            sx={{
              display: 'flex',
              gap: '10rem',
            }}
          >
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem' }}
            >
              Inicio
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/activities"
              sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem' }}
            >
              Actividades
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/user"
              sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem' }}
            >
              Usuario
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/time"
              sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem' }}
            >
              Tiempo
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CustomAppBar;