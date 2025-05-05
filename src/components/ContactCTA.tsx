import React from 'react';
import {
  Box,
  Typography,
  Container,
  IconButton,
  Tooltip,
  Stack,
  Chip,
  useTheme,
} from '@mui/material';
import {
  Facebook,
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
  X as XIcon,
} from '@mui/icons-material';

const ContactCTA: React.FC = () => {
  const theme = useTheme();

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
    { icon: <XIcon />, label: 'X', color: '#1DA1F2', url: 'https://x.com' },
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
        color: theme.palette.common.white,
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
        <Stack spacing={6} alignItems="center">
          {/* Heading */}
          <Box>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3rem' },
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Let's Work Together
            </Typography>
            <Typography
              variant="h6"
              sx={{
                opacity: 0.95,
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              I'm available for both{' '}
              <Box component="span" fontWeight="bold" color="primary.light">
                short-term projects
              </Box>{' '}
              and{' '}
              <Box component="span" fontWeight="bold" color="primary.light">
                long-term collaborations
              </Box>
            </Typography>
          </Box>

          {/* Services Tags */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 2,
              maxWidth: 800,
              '& .MuiChip-root': {
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: theme.palette.common.white,
                fontSize: '1rem',
                px: 2,
                py: 1.5,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.25)',
                  transform: 'translateY(-2px)',
                },
                '& .MuiChip-icon': {
                  color: theme.palette.common.white,
                  marginLeft: '8px',
                },
              },
            }}
          >
            {services.map((service, idx) => (
              <Chip
                key={idx}
                icon={service.icon}
                label={service.label}
                sx={{ borderRadius: 2 }}
              />
            ))}
          </Box>

          {/* Call-to-Action */}
          <Box sx={{ textAlign: 'center', maxWidth: 600 }}>
            <Typography variant="h6" sx={{ mb: 4, fontWeight: 500, opacity: 0.95 }}>
              Ready to start your project?
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                opacity: 0.95,
                mt: 4,
              }}
            >
              Let's Connect Through
            </Typography>

            {/* Social Buttons */}
            <Box
              component="nav"
              aria-label="social media links"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 1.5,
                mt: 2,
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
                      width: 48,
                      height: 48,
                      '&:hover': {
                        transform: 'scale(1.1)',
                        backgroundColor: link.color,
                      },
                    }}
                  >
                    {link.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactCTA;
