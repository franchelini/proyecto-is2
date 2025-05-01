import React from 'react';
import { 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  Box,
  Chip,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';

const HorizontalWeekCalendar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Función para obtener recomendación según el clima
  const getWeatherRecommendation = (condition) => {
    switch(condition) {
      case 'Lluvia':
        return '☔ Lleva paraguas';
      case 'Soleado':
        return '☀️ Protector solar';
      case 'Nublado':
        return '⛅ Ideal para exteriores';
      case 'Viento':
        return '🌬️ Abrígate bien';
      default:
        return '😊 Buen día';
    }
  };

  // Datos fijos
  const weekData = [
    { day: 'LUN', activity: 'Yoga', weather: { condition: 'Soleado', temp: '22°C' } },
    { day: 'MAR', activity: 'Correr', weather: { condition: 'Nublado', temp: '19°C' } },
    { day: 'MIÉ', activity: 'Cine', weather: { condition: 'Lluvia', temp: '14°C' } },
    { day: 'JUE', activity: 'Gimnasio', weather: { condition: 'Viento', temp: '10°C' } },
    { day: 'VIE', activity: 'Senderismo', weather: { condition: 'Soleado', temp: '24°C' } },
    { day: 'SÁB', activity: 'Bicicleta', weather: { condition: 'Nublado', temp: '21°C' } },
    { day: 'DOM', activity: 'Descanso', weather: { condition: 'Soleado', temp: '25°C' } }
  ];

  // Dimensiones fijas para todas las cards
  const cardDimensions = {
    width: isMobile ? '140px' : '160px',
    height: '380px'
  };

  return (
    <Box sx={{ 
      padding: 4,
      overflowX: 'auto',
      '&::-webkit-scrollbar': { display: 'none' },
      mt:"-15rem"
      
    }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center', color: "#2c5a8a", fontSize: '2rem', fontWeight:"bold" }}>
        CALENDARIO SEMANAL
      </Typography>

      {/* Contenedor horizontal */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 2, // Espacio uniforme entre cards
        minHeight: cardDimensions.height,
        pb: 3
      }}>
        {weekData.map((day, index) => (
          <Card key={index} sx={{
            ...cardDimensions,
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: theme.shadows[6]
            }
          }}>
            <CardContent sx={{ 
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              p: 2,
              height: '100%'
            }}>
              {/* Sección superior: Día */}
              <Box sx={{ textAlign: 'center', mb: 1 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 'bold',
                    color: theme.palette.primary.main,
                    fontSize: '1.1rem'
                  }}
                >
                  {day.day}
                </Typography>
                <Divider sx={{ my: 1.5 }} />
              </Box>

              {/* Sección media: Actividad */}
              <Typography 
                variant="body1"
                sx={{ 
                  textAlign: 'center',
                  mb: 2,
                  fontSize: '1rem',
                  fontWeight: 500,
                  flexGrow: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {day.activity}
              </Typography>

              {/* Sección de recomendación */}
              <Box sx={{
                backgroundColor: theme.palette.action.selected,
                borderRadius: 1,
                p: 1,
                mb: 2,
                textAlign: 'center',
                minHeight: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Typography 
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.mode === 'dark' ? 
                      theme.palette.getContrastText(theme.palette.action.selected) : 
                      theme.palette.text.primary,
                    fontSize: '0.85rem'
                  }}
                >
                  {getWeatherRecommendation(day.weather.condition)}
                </Typography>
              </Box>

              {/* Sección inferior: Clima y botón */}
              <Box sx={{ 
                textAlign: 'center',
                mt: 'auto'
              }}>
                <Chip 
                  label={day.weather.condition}
                  size="small"
                  sx={{ 
                    mb: 1.5,
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    width: '100%'
                  }}
                  color={
                    day.weather.condition === 'Soleado' ? 'warning' :
                    day.weather.condition === 'Lluvia' ? 'info' : 'default'
                  }
                />
                <Typography variant="body1" sx={{ mb: 2, fontWeight: 600 }}>
                  {day.weather.temp}
                </Typography>
                
                <Button 
                  variant="outlined" 
                  size="small"
                  sx={{ 
                    width: '100%',
                    fontSize: '0.75rem',
                    fontWeight: 500
                  }}
                >
                  Detalles
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default HorizontalWeekCalendar;