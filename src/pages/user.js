// src/pages/user.js
import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  createTheme,
  ThemeProvider,
  Tabs,
  Tab,
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // light_blue
    },
    secondary: {
      main: '#223c6a', // udec_blue
    },
    neutral: {
      main: '#575757', // dark_gray
      contrastText: '#fff',
    },
    background: {
      default: '#F6F6F7', // light_gray
    },
  },
});

function RegistroForm() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nombreError, setNombreError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (!nombre) {
      setNombreError('Por favor, ingresa tu nombre.');
      isValid = false;
    } else {
      setNombreError('');
    }

    if (!email) {
      setEmailError('Por favor, ingresa tu email.');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Por favor, ingresa un email válido.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Por favor, ingresa una contraseña.');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Las contraseñas no coinciden.');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    if (isValid) {
      alert('Registro exitoso!');
      setNombre('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="nombre"
        label="Nombre"
        name="nombre"
        autoComplete="nombre"
        autoFocus
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        error={!!nombreError}
        helperText={nombreError}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!emailError}
        helperText={emailError}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Contraseña"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!!passwordError}
        helperText={passwordError}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="confirmPassword"
        label="Confirmar Contraseña"
        type="password"
        id="confirmPassword"
        autoComplete="new-password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={!!confirmPasswordError}
        helperText={confirmPasswordError}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
      >
        Registrarse
      </Button>
    </Box>
  );
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (!email) {
      setEmailError('Por favor, ingresa tu email.');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Por favor, ingresa un email válido.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Por favor, ingresa tu contraseña.');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      alert('Inicio de sesión exitoso!');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="loginEmail"
        label="Email"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!emailError}
        helperText={emailError}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Contraseña"
        type="password"
        id="loginPassword"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!!passwordError}
        helperText={passwordError}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
      >
        Iniciar Sesión
      </Button>
    </Box>
  );
}

function User() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'white', p: 3, borderRadius: 2, boxShadow: 3 }}>
        <Typography component="h1" variant="h5" color="secondary.main" sx={{ mb: 2 }}>
          {value === 0 ? 'Registro' : 'Iniciar Sesión'}
        </Typography>
        <Tabs value={value} onChange={handleChange} aria-label="registro o inicio de sesión">
          <Tab label="Registro" />
          <Tab label="Iniciar Sesión" />
        </Tabs>
        {value === 0 && <RegistroForm />}
        {value === 1 && <LoginForm />}
      </Container>
    </ThemeProvider>
  );
}

export default User;