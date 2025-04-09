// src/components/Portfolio.tsx
import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const Portfolio: React.FC = () => {
  // Sample projects (update the images and details accordingly)
  const projects = [
    { title: 'Project One', image: '/path/to/project1.jpg', description: 'A creative project.' },
    { title: 'Project Two', image: '/path/to/project2.jpg', description: 'An innovative solution.' },
    { title: 'Project Three', image: '/path/to/project3.jpg', description: 'A unique design.' },
  ];

  return (
    <Box id="portfolio" sx={{ my: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Portfolio
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={project.title}
                height="200"
                image={project.image}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
