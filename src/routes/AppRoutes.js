import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Activities from '../pages/Activities';
import Time from '../pages/Time';
import User from '../pages/User';
import LoginPage from '../pages/LoginPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Activities" element={<Activities />} />
      <Route path="User" element={<User />} />
      <Route path="/Time" element={<Time />} />
    </Routes>
  );
};

export default AppRoutes;
