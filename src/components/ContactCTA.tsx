import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  IconButton,
  Tooltip,
  Stack,
  Chip,
} from '@mui/material';

import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Telegram,
  WhatsApp,
  DesignServices,
  Computer,
  SupportAgent,
  Article,
  Settings,
  Public,
  ShoppingCart,
  Devices,
} from '@mui/icons-material';

const ContactCTA: React.FC = () => {
  const services = [
    { icon: <DesignServices />, label: 'Graphic Design' },
    { icon: <Computer />, label: 'ICT Consultancy' },
    { icon: <ShoppingCart />, label: 'ICT Procurement' },
    { icon: <SupportAgent />, label: 'Virtual Assistance' },
    { icon: <Article />, label: 'Content Writing' },
    { icon: <Settings />, label: 'Web Administration' },
    { icon: <Public />, label: 'Social Media Management' },
    { icon: <Devices />, label: 'Tech Setup Support' },
  ];

  const socialLinks = [
    { icon: <Facebook />, label: 'Facebook', color: '#4267B2', url: 'https://facebook.com' },
    { icon: <Twitter />, label: 'Twitter', color: '#1DA1F2', url: 'https://x.com' },
    { icon: <LinkedIn />, label: 'LinkedIn', color: '#0077B5', url: 'https://linkedin.com/in/agwata9' },
    { icon: <Instagram />, label: 'Instagram', color: '#E1306C', url: 'https://instagram.com' },
    { icon: <Telegram />, label: 'Telegram', color: '#0088cc', url: 'https://t.me/yourchannel' },
    { icon: <WhatsApp />, label: 'WhatsApp', color: '#25D366', url: 'https://wa.me/message/UMFDNJDDPTZUA1' },
  ];

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
        bgcolor: '#f97316',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1), transparent 60%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={5} alignItems="center">
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}
          >
            Let’s Work Together
          </Typography>

          <Typography variant="h5" sx={{ maxWidth: 800, fontWeight: 500 }}>
            I'm available for both{' '}
            <Box component="span" fontWeight="bold">
              short-term projects
            </Box>{' '}
            and{' '}
            <Box component="span" fontWeight="bold">
              long-term collaborations
            </Box>
            .
          </Typography>

          {/* Services */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 1.5,
              maxWidth: 800,
            }}
          >
            {services.map((service, idx) => (
              <Chip
                key={idx}
                icon={service.icon}
                label={service.label}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  color: 'white',
                  fontSize: '0.95rem',
                  px: 2,
                  py: 1,
                  '& .MuiChip-icon': { color: 'white' },
                }}
              />
            ))}
          </Box>

          {/* Engagement Box */}
          <Box
            sx={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: 3,
              p: 4,
              textAlign: 'center',
              maxWidth: 600,
              width: '100%',
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Ready to Start Your Project?
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              Whether you need a <strong>one-time service</strong> or{' '}
              <strong>ongoing support</strong>, I can help bring your ideas to life.
              My flexible engagement models include:
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 3,
                textAlign: 'left',
                mb: 4,
              }}
            >
              <Box flex={1}>
                <Typography variant="h6" fontWeight="bold">
                  Short-Term
                </Typography>
                <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                  <li>Quick fixes and one-time tasks</li>
                  <li>Specific deliverables</li>
                  <li>Clear scope and timeline</li>
                </ul>
              </Box>

              <Box flex={1}>
                <Typography variant="h6" fontWeight="bold">
                  Long-Term
                </Typography>
                <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                  <li>Ongoing support and maintenance</li>
                  <li>Retainer agreements</li>
                  <li>Complex project development</li>
                </ul>
              </Box>
            </Box>

            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsApp />}
              href="https://wa.me/message/UMFDNJDDPTZUA1"
              aria-label="Start a WhatsApp chat"
              sx={{
                backgroundColor: '#25D366',
                fontSize: '1rem',
                px: 4,
                py: 1.5,
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: '#128C7E',
                  transform: 'translateY(-2px)',
                  boxShadow: 3,
                },
              }}
            >
              Get in Touch
            </Button>
          </Box>

          {/* Social Links */}
          <Typography
            variant="body2"
            sx={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              opacity: 0.9,
            }}
          >
            Or Connect Via Other Channels
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 1,
              mt: 1,
              maxWidth: 500,
            }}
          >
            {socialLinks.map((link, idx) => (
              <Tooltip key={idx} title={link.label} arrow>
                <IconButton
                  aria-label={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: link.color,
                    color: 'white',
                    width: 44,
                    height: 44,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      boxShadow: 2,
                    },
                  }}
                >
                  {link.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactCTA;
