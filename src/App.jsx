import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Content from './components/pages/Content';
import Books from './components/pages/Books';
import Offerings from './components/pages/Offerings';
import Media from './components/pages/MediaAppearances';
import SecretLogin from './components/pages/SecretLogin';
import SecretDashboard from './components/pages/SecretDashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';

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
          <Content contentType='blog' />
          <div className="mt-40"></div>
          <Books />
          <div className="mt-40"></div>
          <Content contentType='media_appearances' />
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