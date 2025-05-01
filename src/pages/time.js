import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import HorizontalWeekCalendar from '../components/timeComponents/WeekCalendar';
import DayWeatherDetails from '../components/timeComponents/DayWeatherDetails';

const TimePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Datos ficticios para el día seleccionado
  const selectedDay = {
    day: 'Lunes',
    month: 'Mayo',
    year: 2025,
    weather: { condition: 'Soleado', temp: '22°C' },
    activity: 'Yoga',
    recommendation: 'Usa protector solar',
  };

  return (
    <Box
      sx={{
        padding: 4,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row', // Diseño responsivo
        gap: 4, // Espaciado entre los componentes
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      {/* Calendario semanal */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
          CALENDARIO SEMANAL
        </Typography>
        <HorizontalWeekCalendar />
      </Box>

      {/* Detalles del clima de un día */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
          DETALLES DEL DÍA
        </Typography>
        <DayWeatherDetails
          day={selectedDay.day}
          month={selectedDay.month}
          year={selectedDay.year}
          weather={selectedDay.weather}
          activity={selectedDay.activity}
          recommendation={selectedDay.recommendation}
        />
      </Box>
    </Box>
  );
};

export default TimePage;