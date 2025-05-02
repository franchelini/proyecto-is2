import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper, Container } from "@mui/material";

const UserInfoPage = () => {
  const [userData, setUserData] = useState({
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    phone: "+56 9 1234 5678",
    location: "Concepción, Chile",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Esta es la lógica para guardar los datos del usuario con respecto a la base de datos.
    alert("Datos guardados correctamente");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 3 }}>
        <Typography variant="h5" component="h1" gutterBottom align="center">
          Información del Usuario
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            fullWidth
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <TextField
            label="Teléfono"
            variant="outlined"
            fullWidth
            name="phone"
            value={userData.phone}
            onChange={handleChange}
          />
          <TextField
            label="Ubicación"
            variant="outlined"
            fullWidth
            name="location"
            value={userData.location}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#1976d2",
              "&:hover": { backgroundColor: "#1565c0" },
            }}
            onClick={handleSave}
          >
            Guardar Cambios
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default UserInfoPage;