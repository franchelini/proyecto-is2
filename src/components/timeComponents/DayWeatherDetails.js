import React from 'react';
import { Box, Typography, Chip, Divider } from '@mui/material';

const DayWeatherDetails = ({ day, month, year, weather, activity, recommendation }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5', // Fondo claro
        borderRadius: 2, // Bordes redondeados
        padding: 3, // Espaciado interno
        boxShadow: 3, // Sombra para darle profundidad
        maxWidth: '400px', // Ancho máximo
        margin: '0 auto', // Centrar horizontalmente
        textAlign: 'center', // Centrar el texto
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
        {day}, {month} {year}
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body1" sx={{ mb: 2, fontWeight: 500 }}>
        Actividad: {activity}
      </Typography>
      <Chip
        label={weather.condition}
        size="medium"
        sx={{
          mb: 2,
          fontSize: '1rem',
          fontWeight: 500,
          backgroundColor:
            weather.condition === 'Soleado'
              ? '#ffeb3b'
              : weather.condition === 'Lluvia'
              ? '#2196f3'
              : '#9e9e9e',
          color: '#fff',
        }}
      />
      <Typography variant="body1" sx={{ mb: 2, fontWeight: 600 }}>
        Temperatura: {weather.temp}
      </Typography>
      <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 2 }}>
        Recomendación: {recommendation}
      </Typography>
    </Box>
  );
};

export default DayWeatherDetails;