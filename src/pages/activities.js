import React from 'react';
import { Typography } from '@mui/material';

const Home = () => {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h3" gutterBottom>
        Bienvenido a las actividades
      </Typography>
      <Typography variant="body1" paragraph>
        Esta es la página de inicio. Aquí puedes agregar las actividades propuestas al usuario
      </Typography>
    </div>
  );
}

export default Home;
