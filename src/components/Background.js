import React from 'react';

const Background = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        fontFamily: 'Poppins, sans-serif',
        minHeight: '100vh',
        color: '#fff',
      }}
    >
      {/* Imagen de fondo */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundImage: 'url(/fondo4.jpg)', // Ruta de la imagen
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: -2,
        }}
      ></div>

      {/* Overlay blanco transparente */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // Blanco con transparencia
          zIndex: -1,
        }}
      ></div>

      {/* Contenido */}
      <div style={{ zIndex: 1, width: '100%' }}>
        {children}
      </div>
    </div>
  );
};

export default Background;