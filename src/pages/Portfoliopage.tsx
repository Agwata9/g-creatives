import React, { JSX, useState } from "react";
import { Box, Container, Typography, Tabs, Tab, Divider } from "@mui/material";
import { Code, Brush, Campaign } from "@mui/icons-material";

import PortfolioHero from "../components/PortfolioHero";
import PortfolioSection from "../components/PortfolioSection";
import { ProjectInquiryCTA } from "../components/ProjectInquiryCTA";
import { Clients } from "../components/Clients";

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
      title: "Designer Platform",
      image: "/portfolio/OK_Printers.png",
      description:
        "OKPrints a complete graphic design solution site with React, Node.js, and ...",
      services: [
        { name: "React", icon: <Code fontSize="small" /> },
        { name: "Node.js", icon: <Code fontSize="small" /> },
        { name: "MYSQL", icon: <Code fontSize="small" /> },
        { name: "Material UI", icon: <Code fontSize="small" /> },
      ],
    },
    {
      title: "Business Platform",
      image: "/portfolio/webdev-bg.jpg",
      description:
        "Developed a complete e-commerce solution with React, Node.js, and MongoDB...",
      services: [
        { name: "React", icon: <Code fontSize="small" /> },
        { name: "Node.js", icon: <Code fontSize="small" /> },
        { name: "MongoDB", icon: <Code fontSize="small" /> },
        { name: "Material UI", icon: <Code fontSize="small" /> },
      ],
    },
    {
      title: "E-commerce Platform",
      image: "/portfolio/webdev-bg.jpg",
      description:
        "Developed a complete e-commerce solution with React, Node.js, and MongoDB...",
      services: [
        { name: "React", icon: <Code fontSize="small" /> },
        { name: "Node.js", icon: <Code fontSize="small" /> },
        { name: "MongoDB", icon: <Code fontSize="small" /> },
        { name: "Material UI", icon: <Code fontSize="small" /> },
      ],
    },
    {
      title: "E-commerce Platform",
      image: "/portfolio/webdev-bg.jpg",
      description:
        "Developed a complete e-commerce solution with React, Node.js, and MongoDB...",
      services: [
        { name: "React", icon: <Code fontSize="small" /> },
        { name: "Node.js", icon: <Code fontSize="small" /> },
        { name: "MongoDB", icon: <Code fontSize="small" /> },
        { name: "Material UI", icon: <Code fontSize="small" /> },
      ],
    },
    // You can add more similar objects here...
  ];

  const brandingProjects: Project[] = [
    {
      title: "Corporate Branding",
      image: "/portfolio/branding-bg.jpg",
      description:
        "Created comprehensive brand guidelines for a corporate entity...",
      services: [
        { name: "Adobe Illustrator", icon: <Brush fontSize="small" /> },
        { name: "Typography", icon: <Brush fontSize="small" /> },
        { name: "Color Theory", icon: <Brush fontSize="small" /> },
      ],
    },
    {
      title: "Corporate Branding",
      image: "/portfolio/branding-bg.jpg",
      description:
        "Created comprehensive brand guidelines for a corporate entity...",
      services: [
        { name: "Adobe Illustrator", icon: <Brush fontSize="small" /> },
        { name: "Typography", icon: <Brush fontSize="small" /> },
        { name: "Color Theory", icon: <Brush fontSize="small" /> },
      ],
    },
    {
      title: "Corporate Branding",
      image: "/portfolio/branding-bg.jpg",
      description:
        "Created comprehensive brand guidelines for a corporate entity...",
      services: [
        { name: "Adobe Illustrator", icon: <Brush fontSize="small" /> },
        { name: "Typography", icon: <Brush fontSize="small" /> },
        { name: "Color Theory", icon: <Brush fontSize="small" /> },
      ],
    },
    {
      title: "Corporate Branding",
      image: "/portfolio/branding-bg.jpg",
      description:
        "Created comprehensive brand guidelines for a corporate entity...",
      services: [
        { name: "Adobe Illustrator", icon: <Brush fontSize="small" /> },
        { name: "Typography", icon: <Brush fontSize="small" /> },
        { name: "Color Theory", icon: <Brush fontSize="small" /> },
      ],
    },
  ];

  const marketingProjects: Project[] = [
    {
      title: "Social Media Campaign",
      image: "/portfolio/marketing-bg.png",
      description:
        "Launched a successful marketing strategy with measurable KPIs...",
      services: [
        { name: "SEO", icon: <Campaign fontSize="small" /> },
        { name: "Google Analytics", icon: <Campaign fontSize="small" /> },
        { name: "Content Strategy", icon: <Campaign fontSize="small" /> },
      ],
    },
    {
      title: "Social Media Campaign",
      image: "/portfolio/marketing-bg.png",
      description:
        "Launched a successful marketing strategy with measurable KPIs...",
      services: [
        { name: "SEO", icon: <Campaign fontSize="small" /> },
        { name: "Google Analytics", icon: <Campaign fontSize="small" /> },
        { name: "Content Strategy", icon: <Campaign fontSize="small" /> },
      ],
    },
    {
      title: "Social Media Campaign",
      image: "/portfolio/marketing-bg.png",
      description:
        "Launched a successful marketing strategy with measurable KPIs...",
      services: [
        { name: "SEO", icon: <Campaign fontSize="small" /> },
        { name: "Google Analytics", icon: <Campaign fontSize="small" /> },
        { name: "Content Strategy", icon: <Campaign fontSize="small" /> },
      ],
    },
    {
      title: "Social Media Campaign",
      image: "/portfolio/marketing-bg.png",
      description:
        "Launched a successful marketing strategy with measurable KPIs...",
      services: [
        { name: "SEO", icon: <Campaign fontSize="small" /> },
        { name: "Google Analytics", icon: <Campaign fontSize="small" /> },
        { name: "Content Strategy", icon: <Campaign fontSize="small" /> },
      ],
    },
  ];

  // --------------------
  // Tab Sections Setup
  // --------------------
  const tabContent = [
    {
      id: "web-design",
      title: "Website & UI Design",
      projects: websiteProjects,
    },
    {
      id: "branding",
      title: "Brand Identity & Logo Design",
      projects: brandingProjects,
    },
    {
      id: "marketing",
      title: "Marketing & Strategy",
      projects: marketingProjects,
    },
  ];

  return (
    <>
    <PortfolioHero />

    <Box sx={{ py: 4, fontFamily: "Arial, sans-serif" }}>
      <Container maxWidth="lg">
        {/* Title Section */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h2" gutterBottom>
            Portfolio Overview
          </Typography>
          <Divider sx={{
            width: { xs: '100%', sm: 80 },
            height: 4,
            bgcolor: 'primary.main',
            mx: 'auto',
            mb: 4
          }} />
        </Box>

        {/* Scrollable Tabs */}
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          indicatorColor="primary"
          textColor="primary"
          sx={{
            mb: 6,
            '& .MuiTab-root': {
              py: 2,
              minWidth: 'unset',
              px: { xs: 1.5, sm: 3 },
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }
          }}
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

        {/* Tab Content */}
        {tabContent.map((section, index) => (
          <Box
            key={section.id}
            role="tabpanel"
            hidden={selectedTab !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
          >
            {selectedTab === index && (
              <>
                <PortfolioSection
                  id={section.id}
                  title={section.title}
                  projects={section.projects}
                />
                <ProjectInquiryCTA />
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