import React, { useState } from 'react';
import {
  Typography,
  Checkbox,
  List,
  ListItem,
  Box,
  Button
} from '@mui/material';

// Cambia estas rutas por tus propias imágenes
const imagenesActividades = {
  'Correr': 'https://st2.depositphotos.com/2146559/7450/i/380/depositphotos_74505673-stock-photo-runner-athlete-running-at-seaside.jpg',
  'Lectura al Aire Libre': 'https://st5.depositphotos.com/12248864/73569/i/380/depositphotos_735694884-stock-photo-close-photo-you-can-see.jpg',
  'Meditación': 'https://st4.depositphotos.com/13194036/38182/i/380/depositphotos_381821650-stock-photo-handsome-young-man-meditating-while.jpg',
  'Turismo': 'https://st3.depositphotos.com/12332520/19126/i/380/depositphotos_191260114-stock-photo-woman-hiker-mountains-city.jpg',
  'Salir a caminar': 'https://st3.depositphotos.com/9880800/12768/i/380/depositphotos_127688114-stock-photo-family-walking-in-autumn-forest.jpg',
  'Boxing': 'https://via.placeholder.com/400x300?text=Boxing',
  'Salir de compras': 'https://st5.depositphotos.com/1635543/77601/i/380/depositphotos_776014828-stock-photo-young-woman-walking-busy-city.jpg',
};

const actividadesPredeterminadas = Object.keys(imagenesActividades);

const PaginaActividades = () => {
  const [actividadesSeleccionadas, setActividadesSeleccionadas] = useState([]);
  const [hoverActividad, setHoverActividad] = useState(null);

  const manejarSeleccion = (actividad) => {
    setActividadesSeleccionadas((prev) =>
      prev.includes(actividad)
        ? prev.filter((a) => a !== actividad)
        : [...prev, actividad]
    );
  };

  const borrarSeleccion = () => {
    setActividadesSeleccionadas([]);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', padding: '2rem', gap: 4 }}>
      {/* Lado izquierdo: Lista de actividades */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" gutterBottom>
          Tus Actividades
        </Typography>
        <Typography variant="body1" paragraph>
          Selecciona las actividades que deseas realizar hoy.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={borrarSeleccion}
          sx={{ mt: 2, borderRadius: '20px', boxShadow: 3 }}
        >
          Borrar Selección
        </Button>

        <Box
          sx={{
            backgroundColor: '#6CE51C',
            padding: 4,
            borderRadius: 4,
            maxWidth: '50vh',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            mt: 3
          }}
        >
          <List>
            {actividadesPredeterminadas.map((actividad, index) => {
              const seleccionada = actividadesSeleccionadas.includes(actividad);
              return (
                <ListItem
                  key={index}
                  onClick={() => manejarSeleccion(actividad)}
                  onMouseEnter={() => setHoverActividad(actividad)}
                  onMouseLeave={() => setHoverActividad(null)}
                  sx={{
                    backgroundColor: seleccionada ? '#d1f5c3' : '#fff',
                    borderRadius: 2,
                    marginBottom: 1,
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                      transform: 'scale(1.02)',
                      boxShadow: '0px 4px 12px rgba(0,0,0,0.15)'
                    },
                    px: 2,
                    py: 1
                  }}
                >
                  <Checkbox
                    checked={seleccionada}
                    onChange={() => manejarSeleccion(actividad)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                    fontWeight: 700,
                    color: '#000',
                    fontSize: '1.1rem',
                    lineHeight: 1.4,
                    fontFamily: 'Roboto, sans-serif' // o cambia por la que uses
              }}
              >
                {actividad}
                </Typography>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>

      {/* Lado derecho: Imagen con degradado blanco */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: 2,
          borderRadius: 4
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            borderRadius: '2rem',
            overflow: 'hidden',
            transition: 'opacity 1.5s ease-in-out, transform 0.8s ease',
            opacity: hoverActividad ? 1 : 0,
            transform: hoverActividad ? 'scale(1)' : 'scale(0.97)',
            visibility: hoverActividad ? 'visible' : 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: `
                radial-gradient(ellipse at top left, rgba(255,255,255,0.6), transparent 60%),
                radial-gradient(ellipse at bottom right, rgba(255,255,255,0.6), transparent 60%)
              `,
              zIndex: 1,
              pointerEvents: 'none'
            }
          }}
        >
          <Box
            component="img"
            src={hoverActividad ? imagenesActividades[hoverActividad] : ''}
            alt={hoverActividad || 'actividad'}
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '2rem',
              objectFit: 'cover',
              display: 'block',
              zIndex: 0
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PaginaActividades;
