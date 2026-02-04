import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tupoksi from './components/Tupoksi';
import Activities from './components/Activities';
import Structure from './components/Structure';
import Documentation from './components/Documentation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-tekno-black text-tekno-white font-poppins selection:bg-tekno-primary selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Tupoksi />
      <Activities />
      <Structure />
      <Documentation />
      <Footer />
    </div>
  );
}

export default App;
