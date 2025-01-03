import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Content from './components/pages/Content';
import Books from './components/pages/Books';
import Offerings from './components/pages/Offerings';
import ContentDetail from './components/pages/ContentDetail';
import Impressum from './components/pages/Impressum';

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
          <Content contentType="blog" />
          <div className="mt-40"></div>
          <Books />
          <div className="mt-40"></div>
          <Content contentType="media" />
          <div className="mt-40"></div>
          <Content contentType="publications" />
          <div className="mt-40"></div>
          <Contact />
        </>
      } />
      <Route path="/content/:id" element={<ContentDetail />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;