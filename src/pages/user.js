import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';

const Profile = () => {
  const [name, setName] = useState("Juan Pérez");
  const [email, setEmail] = useState("juan.perez@email.com");

  const handleSave = () => {
    alert('Datos guardados');
    // Aquí agregarías la lógica para guardar los cambios, por ejemplo, haciendo una llamada API.
  }

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h3" gutterBottom>
        Perfil de Usuario
      </Typography>
      <TextField
        label="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Guardar cambios
      </Button>
    </div>
  );
}

export default Profile;
