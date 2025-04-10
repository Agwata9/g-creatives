
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <ContactCTA />
      <Footer />
    </>
  );
};

export default App;