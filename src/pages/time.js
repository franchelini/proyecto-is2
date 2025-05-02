import React, { useState } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import HorizontalWeekCalendar from '../components/timeComponents/WeekCalendar';
import DayWeatherDetails from '../components/timeComponents/DayWeatherDetails';

const TimePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <Box
      sx={{
        padding: 4,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row', // Diseño responsivo
        gap: 4, // Espaciado entre los componentes
        justifyContent: 'center',
        alignItems: 'stretch', // Asegura que ambos componentes tengan la misma altura
      }}
    >
      {/* Calendario semanal (siempre visible) */}
      <Box sx={{ flex: 1, minHeight: '400px' }}> {/* Altura mínima para igualar */}
        <HorizontalWeekCalendar onDaySelect={setSelectedDay} />
      </Box>

      {/* Detalles del día (solo visible cuando hay selección) */}
      {selectedDay && (
        <Box sx={{ flex: 1, minHeight: '400px' }}> {/* Altura mínima para igualar */}
          <DayWeatherDetails
            day={selectedDay.day}
            month={selectedDay.month}
            year={selectedDay.year}
            weather={selectedDay.weather}
            activity={selectedDay.activity}
            recommendation={selectedDay.recommendation}
          />
        </Box>
      )}
    </Box>
  );
};

export default TimePage;