import { Box } from '@mui/material';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import { ServiceCTA } from '../components/ServiceCTA';
import Portfolio from '../components/Portfolio';
import { ProjectInquiryCTA } from '../components/ProjectInquiryCTA';
import { Clients } from '../components/Clients';
import ContactCTA from '../components/ContactCTA';
import ExpertSessionForm from '../book_components/ExpertSessionForm';

const Homepage = () => {
    return (
        <Box>
            <Hero />
            <About />
            <Services />
            <ServiceCTA />
            <Portfolio />
            <ProjectInquiryCTA />
            <Clients />
            <div id="book-session">
              <ExpertSessionForm />
            </div>
            <ContactCTA />
        </Box>
    );
};

export default Homepage;
