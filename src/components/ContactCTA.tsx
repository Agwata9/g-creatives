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
  List,
  ListItem,
  ListItemIcon,
  Divider,
  useTheme
} from '@mui/material';
import { FiberManualRecord } from '@mui/icons-material';
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
    { icon: <Twitter />, label: 'Twitter', color: '#1DA1F2', url: 'https://x.com' },
    { icon: <LinkedIn />, label: 'LinkedIn', color: '#0077B5', url: 'https://linkedin.com/in/agwata9' },
    { icon: <Instagram />, label: 'Instagram', color: '#E1306C', url: 'https://instagram.com' },
    { icon: <Telegram />, label: 'Telegram', color: '#0088cc', url: 'https://t.me/yourchannel' },
    { icon: <WhatsApp />, label: 'WhatsApp', color: '#25D366', url: 'https://wa.me/message/UMFDNJDDPTZUA1' },
  ];

  const engagementModels = [
    {
      type: 'Short-Term',
      items: [
        'Quick fixes and one-time tasks',
        'Specific deliverables',
        'Clear scope and timeline'
      ]
    },
    {
      type: 'Long-Term',
      items: [
        'Ongoing support and maintenance',
        'Retainer agreements',
        'Complex project development'
      ]
    }
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
          </Typography>

          {/* Services Grid */}
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

          {/* Engagement Models Section */}
          <Box
            sx={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: 3,
              p: 4,
              width: '100%',
              maxWidth: 600,
              backdropFilter: 'blur(8px)',
            }}
          >
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Ready to Start Your Project?
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              Whether you need a <strong>one-time service</strong> or{' '}
              <strong>ongoing support</strong>, I can help bring your ideas to life.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
                mb: 4,
                textAlign: 'left',
              }}
            >
              {engagementModels.map((model, index) => (
                <Box key={model.type} sx={{ flex: 1 }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {model.type}
                  </Typography>
                  <List dense sx={{ p: 0 }}>
                    {model.items.map((item) => (
                      <ListItem key={item} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: theme.spacing(3), color: 'white' }}>
                          <FiberManualRecord fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="body2" component="span">
                          {item}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                  {index === 0 && (
                    <Divider
                      sx={{
                        my: 3,
                        borderColor: 'rgba(255,255,255,0.3)',
                        display: { xs: 'block', md: 'none' }
                      }}
                    />
                  )}
                </Box>
              ))}
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
                fontWeight: 600,
                transition: theme.transitions.create(['background-color', 'transform'], {
                  duration: theme.transitions.duration.short,
                }),
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