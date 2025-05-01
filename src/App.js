import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import CustomAppBar from './components/CustomAppBar';

const App = () => {
  return (
    <Router>
      <CustomAppBar />
      <AppRoutes />
    </Router>
  );
};

export default App;
