
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import ContactCTA from '../components/ContactCTA';

import { Box } from '@mui/material';
import { ServiceCTA } from '../components/ServiceCTA';


const Homepage = () => {
    return (
        <Box>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <ServiceCTA />
            <Portfolio />
            <ContactCTA />
            
        </Box>
    );
};

export default Homepage;