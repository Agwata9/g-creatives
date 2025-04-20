import React, { JSX, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  
} from '@mui/material';

import { Code, Brush, Campaign } from '@mui/icons-material';
import PortfolioSection from '../components/PortfolioSection';
import PortfolioHero from '../components/PortfolioHero';
import { ProjectInquiryCTA } from '../components/ProjectInquiryCTA';

interface Project {
  title: string;
  image: string;
  description: string;
  services: Array<{ name: string; icon: JSX.Element }>;
}

const Portfoliopage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const websiteProjects: Project[] = [
    {
      title: 'E-commerce Platform',
      image: '/portfolio/webdev-bg.jpg',
      description: 'Developed a complete e-commerce solution with React, Node.js, and MongoDB...',
      services: [
        { name: 'React', icon: <Code fontSize="small" /> },
        { name: 'Node.js', icon: <Code fontSize="small" /> },
        { name: 'MongoDB', icon: <Code fontSize="small" /> },
        { name: 'Material UI', icon: <Code fontSize="small" /> }
      ]
    },
    {
        title: 'E-commerce Platform',
        image: '/portfolio/webdev-bg.jpg',
        description: 'Developed a complete e-commerce solution with React, Node.js, and MongoDB...',
        services: [
          { name: 'React', icon: <Code fontSize="small" /> },
          { name: 'Node.js', icon: <Code fontSize="small" /> },
          { name: 'MongoDB', icon: <Code fontSize="small" /> },
          { name: 'Material UI', icon: <Code fontSize="small" /> }
        ]
      },
      {
        title: 'E-commerce Platform',
        image: '/portfolio/webdev-bg.jpg',
        description: 'Developed a complete e-commerce solution with React, Node.js, and MongoDB...',
        services: [
          { name: 'React', icon: <Code fontSize="small" /> },
          { name: 'Node.js', icon: <Code fontSize="small" /> },
          { name: 'MongoDB', icon: <Code fontSize="small" /> },
          { name: 'Material UI', icon: <Code fontSize="small" /> }
        ]
      },
    // Add more if needed
  ];

  const brandingProjects: Project[] = [
    {
      title: 'Corporate Branding',
      image: '/portfolio/branding-bg.jpg',
      description: 'Created comprehensive brand guidelines for a NPS...',
      services: [
        { name: 'Adobe Illustrator', icon: <Brush fontSize="small" /> },
        { name: 'Typography', icon: <Brush fontSize="small" /> },
        { name: 'Color Theory', icon: <Brush fontSize="small" /> }
      ]
    },
    {
        title: 'Corporate Branding',
        image: '/portfolio/branding-bg.jpg',
        description: 'Created comprehensive brand guidelines for a tech startup...',
        services: [
          { name: 'Adobe Illustrator', icon: <Brush fontSize="small" /> },
          { name: 'Typography', icon: <Brush fontSize="small" /> },
          { name: 'Color Theory', icon: <Brush fontSize="small" /> }
        ]
      },
      {
        title: 'Corporate Branding',
        image: '/portfolio/branding-bg.jpg',
        description: 'Created comprehensive brand guidelines KPS...',
        services: [
          { name: 'Adobe Illustrator', icon: <Brush fontSize="small" /> },
          { name: 'Typography', icon: <Brush fontSize="small" /> },
          { name: 'Color Theory', icon: <Brush fontSize="small" /> }
        ]
      },
    // Add more if needed
  ];

  const marketingProjects: Project[] = [
    {
      title: 'Social Media Campaign',
      image: '/portfolio/marketing-bg.png',
      description: 'Developed and executed a social media campaign resulting in 500% engagement increase...',
      services: [
        { name: 'SEO', icon: <Campaign fontSize="small" /> },
        { name: 'Google Analytics', icon: <Campaign fontSize="small" /> },
        { name: 'Content Strategy', icon: <Campaign fontSize="small" /> }
      ]
    },
    {
        title: 'Social Media Campaign',
        image: '/portfolio/marketing-bg.png',
        description: 'Developed and executed a social media campaign resulting in 500% engagement increase...',
        services: [
          { name: 'SEO', icon: <Campaign fontSize="small" /> },
          { name: 'Google Analytics', icon: <Campaign fontSize="small" /> },
          { name: 'Content Strategy', icon: <Campaign fontSize="small" /> }
        ]
      },
      {
        title: 'Social Media Campaign',
        image: '/portfolio/marketing-bg.png',
        description: 'Developed and executed a social media campaign resulting in 500% engagement increase...',
        services: [
          { name: 'SEO', icon: <Campaign fontSize="small" /> },
          { name: 'Google Analytics', icon: <Campaign fontSize="small" /> },
          { name: 'Content Strategy', icon: <Campaign fontSize="small" /> }
        ]
      },
    // Add more if needed
  ];

  const tabContent = [
    {
      id: 'web-design',
      title: 'Website & UI Design',
      projects: websiteProjects
    },
    {
      id: 'branding',
      title: 'Brand Identity & Logo Design',
      projects: brandingProjects
    },
    {
      id: 'marketing',
      title: 'Marketing & Strategy',
      projects: marketingProjects
    }
  ];

  return (
    <>
    <PortfolioHero />
    <Box sx={{ fontFamily: 'Arial, sans-serif', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 4 }}>
          Portfolio Overview
        </Typography>

        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          centered
          indicatorColor="primary"
          textColor="primary"
          aria-label="portfolio categories"
          sx={{ mb: 6 }}
        >
          {tabContent.map((section, index) => (
            <Tab
              key={section.id}
              label={section.title}
              id={`tab-${index}`}
              aria-controls={`tabpanel-${index}`}
            />
          ))}
        </Tabs>

        {tabContent.map((section, index) => (
          <Box
            key={section.id}
            role="tabpanel"
            hidden={selectedTab !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            sx={{ width: '100%' }}
          >
            {selectedTab === index && (
              <><PortfolioSection
                        id={section.id}
                        title={section.title}
                        projects={section.projects} /><ProjectInquiryCTA /></>
              
            )}
          </Box>
        ))}
      </Container>
    </Box>
    </>
   
  );
  <>
  <ProjectInquiryCTA />
  </>
};

export default Portfoliopage;
