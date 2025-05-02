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
  'Yoga': 'https://st4.depositphotos.com/13194036/38182/i/380/depositphotos_381821650-stock-photo-handsome-young-man-meditating-while.jpg',
  'Turismo': 'https://st3.depositphotos.com/12332520/19126/i/380/depositphotos_191260114-stock-photo-woman-hiker-mountains-city.jpg',
  'Caminar': 'https://st3.depositphotos.com/9880800/12768/i/380/depositphotos_127688114-stock-photo-family-walking-in-autumn-forest.jpg',
  'Shopping': 'https://st5.depositphotos.com/1635543/77601/i/380/depositphotos_776014828-stock-photo-young-woman-walking-busy-city.jpg',
  'Pescar': 'pesca',
  'Ciclismo': 'c',
  'Futbol': 'futbol',
  'Fotografia': 'fotografia'
};

const actividadesPredeterminadas = Object.keys(imagenesActividades);


const PaginaActividades = () => {
  const [actividadesSeleccionadas, setActividadesSeleccionadas] = useState([]);
  const [actividadesGuardadas, setActividadesGuardadas] = useState([]);

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

  const guardarActividades = () => {
    setActividadesGuardadas((prev) => {
      const nuevas = actividadesSeleccionadas.filter((actividad) => !prev.includes(actividad));
      return [...prev, ...nuevas];
    });
  };

  const borrarGuardadas = () => {
    setActividadesGuardadas([]);
  };

  return (

  <Box>
  {/* Título principal */}
  <Typography variant="h4" gutterBottom sx={{ color: '#223c6a' /* udec_blue */ }}>
    Tus Actividades
  </Typography>

  {/* Subtítulo */}
  <Typography variant="body1" paragraph sx={{ color: '#575757' /* dark_gray */ }}>
    Selecciona las actividades que deseas realizar.
  </Typography>

  {/* Botones de acción */}
  <Box sx={{ display: 'flex', gap: 2 }}>
    <Button
      variant="contained"
      onClick={borrarSeleccion}
      sx={{
        mt: 2,
        borderRadius: '20px',
        backgroundColor: '#1976d2', // light_blue
        color: '#fff',
        boxShadow: 3,
        '&:hover': { backgroundColor: '#10487f' } // blue
      }}
    >
      Borrar Selección
    </Button>

    <Button
      variant="contained"
      onClick={guardarActividades}
      sx={{
        mt: 2,
        borderRadius: '20px',
        backgroundColor: '#10487f', // blue
        color: '#fff',
        boxShadow: 3,
        '&:hover': { backgroundColor: '#1976d2' } // light_blue
      }}
    >
      Guardar Actividades
    </Button>
  </Box>

  <Box
  sx={{
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    mt: 3,
    flexWrap: 'wrap'
  }}
>
  {/* Lista de selección */}
  <Box
  sx={{
    backgroundColor: '#223c6a',
    padding: 4,
    borderRadius: 4,
    maxWidth: '50vh',
    height: '400px',
    overflowY: 'auto',
    overflowX: 'hidden',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    flex: 1,

    // Scrollbar personalizado
    '&::-webkit-scrollbar': {
      width: '10px',
      height: '10px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#223c6a',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#10487f',
      borderRadius: '10px',
      border: '2px solid #223c6a',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#1976d2',
    },

    // Scrollbar a la izquierda (solo funciona en navegadores basados en WebKit)
    'scrollbar-width': 'thin',
    'scrollbar-color': '#10487f #223c6a',
    direction: 'rtl', // Truco para mover scrollbar a la izquierda
    '& *': {
      direction: 'ltr', // Restaura dirección de texto normal
    }
  }}
>
    <List>
      {actividadesPredeterminadas.map((actividad, index) => {
        const seleccionada = actividadesSeleccionadas.includes(actividad);
        return (
          <ListItem
            key={index}
            onClick={() => manejarSeleccion(actividad)}
            sx={{
              backgroundColor: seleccionada ? '#F6F6F7' : '#ffffff',
              borderRadius: 2,
              marginBottom: 1,
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: '#e0e0e0',
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
              sx={{
                color: '#10487f',
                '&.Mui-checked': {
                  color: '#1976d2'
                }
              }}
            />
            <Typography
              variant="body1"
              sx={{
                fontWeight: 700,
                color: "#575757",
                fontSize: '1.1rem',
                lineHeight: 1.4
              }}
            >
              {actividad}
            </Typography>
          </ListItem>
        );
      })}
    </List>
  </Box>

  {/* Cuadro: Actividades guardadas */}
  <Box
  sx={{
    backgroundColor: '#ffffff',
    borderRadius: 4,
    padding: 3,
    maxWidth: '50vh',
    height: '400px', // Altura fija
    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }}
>
  <Box sx={{ overflowY: 'auto', flexGrow: 1 }}>
    <Typography variant="h6" gutterBottom sx={{ color: '#223c6a' }}>
      Tus Actividades Guardadas
    </Typography>
    {actividadesGuardadas.length === 0 ? (
      <Typography variant="body2" color="#575757">
        No has guardado actividades.
      </Typography>
    ) : (
      <List>
        {actividadesGuardadas.map((actividad, index) => (
          <ListItem key={index}>
            <Typography variant="body2" sx={{ color: '#10487f' }}>
              {actividad}
            </Typography>
          </ListItem>
        ))}
      </List>
    )}
  </Box>

  <Button
    variant="outlined"
    onClick={borrarGuardadas}
    sx={{
      mt: 2,
      borderRadius: '20px',
      color: '#575757',
      borderColor: '#575757',
      '&:hover': {
        borderColor: '#10487f',
        color: '#10487f'
      }
    }}
  >
    Borrar Guardadas
  </Button>
</Box>
</Box>
  
</Box>

  );
};

export default PaginaActividades;