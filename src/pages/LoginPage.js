import React from "react";
import { Box, Button, TextField, Typography, Container, Paper } from "@mui/material";

export default function LoginPage() {
  const [ubicacion, setUbicacion] = React.useState('');

  return (
    <Box
      sx={{
        backgroundColor: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Iniciar Sesión
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              label="Correo Electrónico"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
            />
            <TextField
              label="Contraseña"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
            />
            <TextField
              label="Ubicación"
              variant="outlined"
              fullWidth
              margin="normal"
              value={ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#1565c0" },
              }}
            >
              Iniciar Sesión
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}