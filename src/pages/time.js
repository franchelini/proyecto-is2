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
    width: isMobile ? '120px' : '140px',
    height: '320px'
  };

  return (
    <Box sx={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'url(https://www.transparenttextures.com/patterns/fresh-snow.png)',
      backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#70b0f5',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'auto',
      '&::-webkit-scrollbar': { display: 'none' }
    }}>
      {/* Contenedor principal ajustado y compacto */}
      <Box sx={{
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(4px)',
        borderRadius: 2,
        p: 2,
        width: isMobile ? '95%' : 'fit-content',
        maxWidth: '1200px',
        margin: '20px auto',
        display: 'inline-block'
      }}>
        <Typography 
          variant="h5" 
          gutterBottom 
          sx={{ 
            mb: 3, 
            textAlign: 'center',
            color: theme.palette.mode === 'dark' ? '#ffffff' : '#333333',
            fontWeight: 600
          }}
        >
          Calendario Semanal
        </Typography>

        {/* Contenedor horizontal del calendario */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          minHeight: cardDimensions.height,
          pb: 2,
          overflowX: 'auto',
          '&::-webkit-scrollbar': { display: 'none' }
        }}>
          {weekData.map((day, index) => (
            <Card key={index} sx={{
              ...cardDimensions,
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s ease',
              backgroundColor: theme.palette.background.paper,
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: theme.shadows[6]
              }
            }}>
              <CardContent sx={{ 
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                p: 1.5,
                height: '100%'
              }}>
                {/* Sección superior: Día */}
                <Box sx={{ textAlign: 'center', mb: 1 }}>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      fontWeight: 'bold',
                      color: theme.palette.primary.main,
                      fontSize: '0.95rem'
                    }}
                  >
                    {day.day}
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                </Box>

                {/* Sección media: Actividad */}
                <Typography 
                  variant="body2"
                  sx={{ 
                    textAlign: 'center',
                    mb: 1.5,
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: theme.palette.text.primary
                  }}
                >
                  {day.activity}
                </Typography>

                {/* Sección de recomendación */}
                <Box sx={{
                  backgroundColor: theme.palette.action.selected,
                  borderRadius: 1,
                  p: 0.8,
                  mb: 1.5,
                  textAlign: 'center',
                  minHeight: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Typography 
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.mode === 'dark' ? 
                        theme.palette.getContrastText(theme.palette.action.selected) : 
                        theme.palette.text.primary,
                      fontSize: '0.75rem'
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
                      mb: 1,
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      width: '100%'
                    }}
                    color={
                      day.weather.condition === 'Soleado' ? 'warning' :
                      day.weather.condition === 'Lluvia' ? 'info' : 'default'
                    }
                  />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 1.5, 
                      fontWeight: 600, 
                      fontSize: '0.9rem',
                      color: theme.palette.text.primary
                    }}
                  >
                    {day.weather.temp}
                  </Typography>
                  
                  <Button 
                    variant="outlined" 
                    size="small"
                    sx={{ 
                      width: '100%',
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      py: 0.5
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
    </Box>
  );
};

export default HorizontalWeekCalendar;