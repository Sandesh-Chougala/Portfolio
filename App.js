import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/main.css';
import './styles/Navbar.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <Navbar onSectionChange={setActiveSection} />
      <main>
        {activeSection === 'home' && <Hero />}
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </main>
    </div>
  );
};

export default App;
