import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#4982ef' }}>
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'column', // Cambia la dirección a columna para centrar todo
            alignItems: 'center', // Centra horizontalmente
            gap: '1rem', // Espaciado entre el título y los botones
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 'bold',
            }}
          >
            App MyTime
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '2rem', // Espaciado entre los botones
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