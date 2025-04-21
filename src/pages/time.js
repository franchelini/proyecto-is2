import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    alert('Mensaje enviado');
    // Aquí podrías agregar la lógica para enviar el mensaje, por ejemplo, hacer una llamada a un API.
  }

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h3" gutterBottom>
        Aqui se vera la actividad semanal. 
      </Typography>
      <TextField
        label="Mensaje"
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Enviar
      </Button>
    </div>
  );
}

export default Contact;
