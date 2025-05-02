import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@mui/material'; 
import AppRoutes from './routes/AppRoutes';
import CustomAppBar from './components/CustomAppBar';
import Footer from './components/Footer';
import Background from './components/Background';

const App = () => {
  return (
    <Router>
      <CssBaseline /> {/* Elimina estilos predeterminados del navegador */}
      <Background>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh', // Asegura que ocupe toda la altura de la ventana
            margin: 0, // Asegura márgenes en 0
            padding: 0, // Asegura paddings en 0
          }}
        >
          {/* Barra de navegación */}
          <CustomAppBar />

          {/* Contenido principal */}
          <div style={{ flex: 1, width: '100%' }}> {/* Asegura que el contenido ocupe el espacio disponible */}
            <AppRoutes />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </Background>
    </Router>
  );
};

export default App;