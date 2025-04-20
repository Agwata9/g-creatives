import React, { JSX, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
} from '@mui/material';
import { Code, Brush, Campaign } from '@mui/icons-material';

import PortfolioHero from '../components/PortfolioHero';
import PortfolioSection from '../components/PortfolioSection';
import { ProjectInquiryCTA } from '../components/ProjectInquiryCTA';
import { Clients } from '../components/Clients';

// Define the shape of each project
interface Project {
  title: string;
  image: string;
  description: string;
  services: Array<{ name: string; icon: JSX.Element }>;
}

const Portfoliopage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  // Handle tab switching
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  // --------------------
  // Sample Project Data
  // --------------------

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
    // You can add more similar objects here...
  ];

  const brandingProjects: Project[] = [
    {
      title: 'Corporate Branding',
      image: '/portfolio/branding-bg.jpg',
      description: 'Created comprehensive brand guidelines for a corporate entity...',
      services: [
        { name: 'Adobe Illustrator', icon: <Brush fontSize="small" /> },
        { name: 'Typography', icon: <Brush fontSize="small" /> },
        { name: 'Color Theory', icon: <Brush fontSize="small" /> }
      ]
    },
  ];

  const marketingProjects: Project[] = [
    {
      title: 'Social Media Campaign',
      image: '/portfolio/marketing-bg.png',
      description: 'Launched a successful marketing strategy with measurable KPIs...',
      services: [
        { name: 'SEO', icon: <Campaign fontSize="small" /> },
        { name: 'Google Analytics', icon: <Campaign fontSize="small" /> },
        { name: 'Content Strategy', icon: <Campaign fontSize="small" /> }
      ]
    },
  ];

  // --------------------
  // Tab Sections Setup
  // --------------------
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
      {/* Hero Section */}
      <PortfolioHero />

      {/* Main Portfolio Container */}
      <Box sx={{ fontFamily: 'Arial, sans-serif', py: 4 }}>
        <Container maxWidth="lg">
          {/* Page Title */}
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 4 }}>
            Portfolio Overview
          </Typography>

          {/* Tab Navigation */}
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

          {/* Tab Content Sections */}
          {tabContent.map((section, index) => (
            <Box
              key={section.id}
              role="tabpanel"
              hidden={selectedTab !== index}
              id={`tabpanel-${index}`}
              aria-labelledby={`tab-${index}`}
              sx={{ width: '100%' }}
            >
              {/* Only render if this tab is active */}
              {selectedTab === index && (
                <>
                  {/* Portfolio Items */}
                  <PortfolioSection
                    id={section.id}
                    title={section.title}
                    projects={section.projects}
                  />

                  {/* CTA for project inquiries */}
                  <ProjectInquiryCTA />

                  {/* Clients Section */}
                  <Clients />
                </>
              )}
            </Box>
          ))}
        </Container>
      </Box>
    </>
  );
};

export default Portfoliopage;
