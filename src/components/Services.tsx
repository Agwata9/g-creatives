import {
  Box,
  Typography,
  Paper,
  Container,
  Stack,
} from '@mui/material';
import {
  DesignServices,
  InsertPhoto,
  Campaign,
  CheckCircleOutline,
} from '@mui/icons-material';

const services = [
  {
    title: 'Brand Identity & Logo Design',
    description: 'Timeless logo marks and cohesive visual systems that define your brand.',
    icon: <DesignServices fontSize="large" color="primary" />,
    items: [
      'Custom Logo Design',
      'Brand Style Guides',
      'Business Stationery',
      'Visual Identity Systems',
      'Brand Strategy Development',
      'Packaging & Signage',
      'Typography & Color Palettes',
      'Brand Guidelines',
    ],
  },
  {
    title: 'Web & UI Design',
    description: 'Modern, responsive designs tailored for web and mobile experiences.',
    icon: <InsertPhoto fontSize="large" color="primary" />,
    items: [
      'UI/UX Design & Prototyping',
      'Responsive Website Design',
      'Mobile App Interfaces',
      'E-commerce Design',
      'User Flow Optimization',
      'Design Systems',
      'Website Redesign',
      'Interaction Design',
    ],
  },
  {
    title: 'Marketing & Strategy',
    description: 'Creative direction, campaign design, and data-driven brand strategies.',
    icon: <Campaign fontSize="large" color="primary" />,
    items: [
      'Digital Campaign Design',
      'Social Media Strategy',
      'Content Marketing',
      'Brand Positioning',
      'Audience Research',
      'Email Marketing Design',
      'Advertising Concepts',
      'Conversion Optimization',
    ],
  },
];

const Services = () => {
  return (
    <Box
      id="services"
      sx={{
        py: 10,
        backgroundColor: '#f4f6f8',
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            What I Do
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
            Helping brands connect through thoughtful design and strategy.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
          }}
        >
          {services.map((service, index) => (
            <Paper
              key={index}
              elevation={4}
              sx={{
                flex: { xs: '1 1 100%', md: '1 1 30%' },
                maxWidth: 360,
                p: 4,
                borderRadius: 3,
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                },
              }}
            >
              <Box mb={2}>{service.icon}</Box>

              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {service.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2 }}
              >
                {service.description}
              </Typography>

              <Box
                sx={{
                  width: 40,
                  height: 2,
                  bgcolor: 'primary.main',
                  mx: 'auto',
                  mb: 2,
                }}
              />

              <Stack spacing={1.2} sx={{ textAlign: 'left' }}>
                {service.items.map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: 'text.secondary',
                    }}
                  >
                    <CheckCircleOutline
                      sx={{ color: 'primary.main', mr: 1 }}
                      fontSize="small"
                    />
                    <Typography variant="body2">{item}</Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
