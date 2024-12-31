import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Contact from './components/Contact';
import Books from './components/Books';
import Offerings from './components/Offerings';
import Media from './components/Media';
import SecretLogin from './components/SecretLogin';
import SecretDashboard from './components/SecretDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <LandingPage />
          <div className="mt-40"></div>
          <About />
          <div className="mt-40"></div>
          <Offerings />
          <div className="mt-40"></div>
          <Books />
          <div className="mt-40"></div>
          <Media />
          <div className="mt-40"></div>
          <Contact />
        </>
      } />
      <Route path="/secret-login" element={<SecretLogin />} />
      <Route path="/secret-dashboard" element={
        <ProtectedRoute>
          <SecretDashboard />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;