import React, { JSX, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  IconButton,
  Stack,
  Chip,
  useMediaQuery,
  useTheme
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Project {
  title: string;
  image: string;
  description: string;
  services: Array<{ name: string; icon: JSX.Element }>;
}

interface PortfolioSectionProps {
  id: string;
  title: string;
  projects: Project[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ id, title, projects }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % Math.ceil(projects.length / 3));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + Math.ceil(projects.length / 3)) % Math.ceil(projects.length / 3));
  };

  const visibleProjects = projects.slice(activeIndex * 3, (activeIndex + 1) * 3);

  return (
    <Box id={id} sx={{ mb: 8, position: 'relative' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 4 }}>
        {title}
      </Typography>

      {!isMobile && (
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: -40,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2
          }}
        >
          <ArrowBackIosIcon fontSize="large" />
        </IconButton>
      )}

      <Box
        sx={{
          display: 'flex',
          gap: 4,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {visibleProjects.map((project, index) => (
          <Box
            key={index}
            sx={{
              flex: '1 1 calc(33.333% - 24px)',
              minWidth: isMobile ? '100%' : 'calc(33.333% - 24px)',
              maxWidth: isMobile ? '100%' : 'calc(33.333% - 24px)',
            }}
          >
            <Card
              sx={{
                height: 380,
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.85)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%)',
                  color: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                  p: 4,
                }}
              >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" mb={3} sx={{ opacity: 0.9 }}>
                  {project.description}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {project.services.map((service, i) => (
                    <Chip
                      key={i}
                      icon={service.icon}
                      label={service.name}
                      size="small"
                      sx={{
                        color: 'white',
                        backgroundColor: 'rgba(255,255,255,0.15)',
                        '& .MuiChip-icon': {
                          color: 'white',
                          marginLeft: '8px',
                        },
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </Card>
          </Box>
        ))}
      </Box>

      {!isMobile && (
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: -40,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2
          }}
        >
          <ArrowForwardIosIcon fontSize="large" />
        </IconButton>
      )}

      {isMobile && (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
          <IconButton onClick={handlePrev}>
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton onClick={handleNext}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default PortfolioSection;
