
import { Box, Typography, Card, CardMedia, Container } from '@mui/material';

const Portfolio = () => {
  const projects = [
    {
      title: 'Creative Branding',
      image: 'https://via.placeholder.com/600x400?text=Project+1',
      description: 'Brand identity and visual storytelling.',
    },
    {
      title: 'Modern Web App',
      image: 'https://via.placeholder.com/600x400?text=Project+2',
      description: 'Built using React, TypeScript & Strapi.',
    },
    {
      title: 'Marketing Campaign',
      image: 'https://via.placeholder.com/600x400?text=Project+3',
      description: 'Complete digital marketing package.',
    },
  ];

  return (
    <Box
      id="portfolio"
      sx={{
        py: 10,
        backgroundColor: '#f9f9f9',
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Portfolio
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              backgroundColor: 'primary.main',
              margin: '0 auto',
              mb: 2,
            }}
          />
          <Typography variant="body1" color="text.secondary">
            A showcase of my latest work.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            gap: 4,
            flexWrap: 'wrap',
          }}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' },
                maxWidth: { md: 350 },
                height: 300,
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                '&:hover .overlay': {
                  opacity: 1,
                },
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{ height: '100%', objectFit: 'cover' }}
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  color: '#fff',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: 3,
                  textAlign: 'center',
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2">{project.description}</Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Portfolio;