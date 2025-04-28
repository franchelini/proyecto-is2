// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Activities from './pages/activities';
import Time from './pages/time';
import User from './pages/user';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/user" element={<User />} />
        <Route path="/time" element={<Time />} />
      </Routes>
    </Router>
  );
}

export default App;

