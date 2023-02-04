import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import EduExp from './EduExp';
import Portfolio from './Portfolio';
import Contact from './Contact';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <EduExp />
      <Contact />
    </Router>
  );
}

export default App;
