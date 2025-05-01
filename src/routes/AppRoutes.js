import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Activities from '../pages/activities';
import Time from '../pages/time';
import User from '../pages/user';
import LoginPage from '../pages/loginPage';

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
