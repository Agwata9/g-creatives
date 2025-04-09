// src/App.tsx
import React from 'react';
import { Container } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactCTA from './components/ContactCTA';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <ContactCTA />
        <SocialLinks />
      </Container>
      <Footer />
    </>
  );
};

export default App;
