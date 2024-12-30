import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Contact from './components/Contact';
import Books from './components/Books';
import Offerings from './components/Offerings';
import Media from './components/Media';
import OwnerLogin from './components/OwnerLogin';

function App() {
  return (
    <Routes>
      <Route path="/secret-login" element={<OwnerLogin />} />
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
    </Routes>
  );
}

export default App;