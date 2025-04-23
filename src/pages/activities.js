import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box
  
} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import AddIcon from '@mui/icons-material/Add';
const PaginaActividades = () => {
  const [actividad, setActividad] = useState('');
  const [actividades, setActividades] = useState([]);
  

  const agregarActividad = () => {
    if (actividad.trim() !== '') {
      const nuevaActividad = {
        nombre: actividad,
      };

      setActividades([...actividades, nuevaActividad]);
      setActividad('');
      
    }
  };

  return (
    <div style={{ backgroundColor: '#31EBD9', minHeight: '100vh', padding: '2rem' }}>
      
      <Typography variant="h4" gutterBottom>
        
        Tus Actividades
      </Typography>
      <Typography variant="body1" paragraph>
        En esta página podrás agregar actividades y ver el clima actual
      </Typography>

      <TextField
        label="Nombre de la actividad"
        value={actividad}
        onChange={(e) => setActividad(e.target.value)}
        sx={{ width: '30%' }}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AddIcon />
            </InputAdornment>
          ),
        }}

      />
      <Button variant="contained" color="primary" onClick={agregarActividad} sx={{ mt: 2 }}>
        Agregar Actividad
      </Button>
      
      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 2, borderRadius: '20px', boxShadow: 3 }}
        >
        Borrar Actividad
      </Button>
      <Box
      sx={{
        backgroundColor: '#6CE51C',
        padding: 4,
        borderRadius: 4,
        minHeight: '10vh',
        maxWidth: '100vh',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
      }}>
      <List sx={{ marginTop: 0 }}>
        {actividades.map((act, index) => (
          <ListItem key={index} sx={{ backgroundColor: '#fff', borderRadius: 2, marginBottom: 1 }}>
            <ListItemText primary={act.nombre} />
          </ListItem>
        ))}
      </List>
      </Box>
    </div>
  );
};

export default PaginaActividades;