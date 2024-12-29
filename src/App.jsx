import React from 'react';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Contact from './components/Contact';
import Books from './components/Books';
import Offerings from './components/Offerings';
import Media from './components/Media';

function App() {
  return (
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
  );
}

export default App;