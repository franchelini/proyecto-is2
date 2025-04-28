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

  // Paleta de colores UDEC
  const colores = {
    azul_udec: "#223c6a",
    azul_claro: "#1976d2",
    azul: "#10487f",
    gris_oscuro: "#575757",
    gris_claro: "#F6F6F7"
  };

  const getRecomendacionClima = (condicion) => {
    switch(condicion) {
      case 'Lluvia': return '☔ Lleva paraguas';
      case 'Soleado': return '☀️ Protector solar';
      case 'Nublado': return '⛅ Ideal para pasear';
      case 'Viento': return '🌬️ Abrígate bien';
      default: return '😊 Buen día';
    }
  };

  const semana = [
    { dia: 'LUN', actividad: 'Yoga', clima: { condicion: 'Soleado', temp: '22°C' } },
    { dia: 'MAR', actividad: 'Correr', clima: { condicion: 'Nublado', temp: '19°C' } },
    { dia: 'MIÉ', actividad: 'Cine', clima: { condicion: 'Lluvia', temp: '14°C' } },
    { dia: 'JUE', actividad: 'Gimnasio', clima: { condicion: 'Viento', temp: '10°C' } },
    { dia: 'VIE', actividad: 'Senderismo', clima: { condicion: 'Soleado', temp: '24°C' } },
    { dia: 'SÁB', actividad: 'Bicicleta', clima: { condicion: 'Nublado', temp: '21°C' } },
    { dia: 'DOM', actividad: 'Descanso', clima: { condicion: 'Soleado', temp: '25°C' } }
  ];

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
      background: 'linear-gradient(160deg, #e3f2fd 0%, #bbdefb 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'auto',
      '&::before': { // Efecto de nubes sutiles
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: 'url("https://cdn-icons-png.freepik.com/512/9812/9812010.png")', // SVG de nubes
        opacity: 0.1,
        animation: 'moveClouds 60s linear infinite'
      },
      '@keyframes moveClouds': {
        '0%': { backgroundPosition: '0 0' },
        '100%': { backgroundPosition: '1000px 0' }
      }
    }}>
      <Box sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 2,
        p: 2,
        width: isMobile ? '95%' : 'fit-content',
        maxWidth: '1200px',
        margin: '20px auto',
        display: 'inline-block',
        border: `1px solid ${colores.azul_claro}`
      }}>
        <Typography variant="h5" gutterBottom sx={{ 
          mb: 3, 
          textAlign: 'center',
          color: colores.azul_udec,
          fontWeight: 600
        }}>
          Calendario Semanal
        </Typography>

        {/* Contenedor principal con espacio adicional */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          minHeight: `calc(${cardDimensions.height} + 20px)`, // +20px de espacio extra
          pb: 2,
          overflowX: 'auto',
          overflowY: 'visible',
          '&::-webkit-scrollbar': { display: 'none' }
        }}>
          {semana.map((dia, index) => (
            <Box key={index} sx={{
              position: 'relative',
              height: cardDimensions.height,
              pt: '10px', // Espacio para la animación
              overflow: 'visible',
              '&:hover .card-animada': {
                transform: 'translateY(-10px)',
                boxShadow: `0 10px 20px 0 ${colores.azul}33`
              }
            }}>
              <Card className="card-animada" sx={{
                ...cardDimensions,
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                backgroundColor: colores.gris_claro,
                border: `1px solid ${colores.azul_claro}`,
                position: 'relative',
                overflow: 'visible',
                '&:hover': {
                  borderColor: colores.azul
                }
              }}>
                <CardContent sx={{ 
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  p: 1.5,
                  height: '100%'
                }}>
                  <Box sx={{ textAlign: 'center', mb: 1 }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold',
                      color: colores.azul,
                      fontSize: '0.95rem'
                    }}>
                      {dia.dia}
                    </Typography>
                    <Divider 
                      sx={{ 
                        my: 1,
                        backgroundColor: colores.azul_claro,
                        opacity: 0.5,
                        position: 'relative',
                        zIndex: 2
                      }}
                    />
                  </Box>

                  <Typography variant="body2" sx={{ 
                    textAlign: 'center',
                    mb: 1.5,
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colores.gris_oscuro
                  }}>
                    {dia.actividad}
                  </Typography>

                  <Box sx={{
                    backgroundColor: colores.azul_claro,
                    borderRadius: 1,
                    p: 0.8,
                    mb: 1.5,
                    textAlign: 'center',
                    minHeight: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Typography variant="caption" sx={{
                      fontWeight: 600,
                      color: colores.gris_claro,
                      fontSize: '0.75rem'
                    }}>
                      {getRecomendacionClima(dia.clima.condicion)}
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: 'center', mt: 'auto' }}>
                    <Chip 
                      label={dia.clima.condicion}
                      size="small"
                      sx={{ 
                        mb: 1,
                        fontSize: '0.7rem',
                        fontWeight: 500,
                        width: '100%',
                        backgroundColor: 
                          dia.clima.condicion === 'Soleado' ? '#FFD700' :
                          dia.clima.condicion === 'Lluvia' ? colores.azul : colores.gris_oscuro,
                        color: colores.gris_claro
                      }}
                    />
                    <Typography variant="body2" sx={{ 
                      mb: 1.5, 
                      fontWeight: 600, 
                      fontSize: '0.9rem',
                      color: colores.azul_udec
                    }}>
                      {dia.clima.temp}
                    </Typography>
                    
                    <Button 
                      variant="outlined" 
                      size="small"
                      sx={{ 
                        width: '100%',
                        fontSize: '0.7rem',
                        fontWeight: 500,
                        py: 0.5,
                        color: colores.azul,
                        borderColor: colores.azul,
                        '&:hover': {
                          backgroundColor: `${colores.azul}20`,
                          borderColor: colores.azul
                        }
                      }}
                    >
                      Detalles
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HorizontalWeekCalendar;