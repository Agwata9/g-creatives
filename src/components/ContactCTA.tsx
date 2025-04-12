import { Box, Typography, Button, Container, IconButton, Tooltip, Stack, Chip } from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Telegram,
  WhatsApp,
  AccessTime,
  CalendarMonth,
  DesignServices,
  Computer,
  SupportAgent,
  Article,
  Settings,
  Public,
  ShoppingCart,
  Devices
} from '@mui/icons-material';

const ContactCTA = () => {
  const services = [
    { icon: <DesignServices />, name: 'Graphic Design' },
    { icon: <Computer />, name: 'ICT Consultancy' },
    { icon: <ShoppingCart />, name: 'ICT Procurement' },
    { icon: <SupportAgent />, name: 'Virtual Assistance' },
    { icon: <Article />, name: 'Content Writing' },
    { icon: <Settings />, name: 'Web Administration' },
    { icon: <Public />, name: 'Social Media Management' },
    { icon: <Devices />, name: 'Tech Setup Support' }
  ];

  const socialLinks = [
    { icon: <Facebook />, name: 'Facebook', color: '#4267B2', url: 'https://facebook.com' },
    { icon: <Twitter />, name: 'Twitter', color: '#1DA1F2', url: 'https://x.com' },
    { icon: <LinkedIn />, name: 'LinkedIn', color: '#0077B5', url: 'https://linkedin.com/in/agwata9' },
    { icon: <Instagram />, name: 'Instagram', color: '#E1306C', url: 'https://instagram.com' },
    { icon: <Telegram />, name: 'Telegram', color: '#0088cc', url: 'https://t.me/yourchannel' },
    { icon: <WhatsApp />, name: 'WhatsApp', color: '#25D366', url: 'https://wa.me/message/UMFDNJDDPTZUA1' },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#f97316',
        color: '#fff',
        width: '100%',
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
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center">
          <Typography 
            variant="h3" 
            fontWeight="bold" 
            sx={{ 
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              lineHeight: 1.2
            }}
          >
            Available for Projects
          </Typography>
          
          <Typography 
            variant="h5"
            sx={{
              fontWeight: 500,
              maxWidth: '800px'
            }}
          >
            Let's collaborate on your next project - whether it's a <Box component="span" sx={{ fontWeight: 'bold' }}>short-term task</Box> or <Box component="span" sx={{ fontWeight: 'bold' }}>long-term engagement</Box>
          </Typography>

          {/* Service Chips */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.5, maxWidth: '800px' }}>
            {services.map((service, index) => (
              <Chip
                key={index}
                icon={service.icon}
                label={service.name}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  color: 'white',
                  px: 1.5,
                  py: 2,
                  fontSize: '0.95rem',
                  '& .MuiChip-icon': {
                    color: 'white'
                  }
                }}
              />
            ))}
          </Box>

          {/* Engagement Options */}
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mt: 2 }}>
            <Box sx={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: 3,
              p: 3,
              maxWidth: 350,
              textAlign: 'center'
            }}>
              <AccessTime sx={{ fontSize: 50, mb: 1.5 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>Short-Term Projects</Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Perfect for one-time tasks, quick fixes, or specific deliverables with clear scope and timeline.
              </Typography>
              <Button
                variant="contained"
                size="medium"
                startIcon={<WhatsApp />}
                href="https://wa.me/message/UMFDNJDDPTZUA1"
                sx={{
                  backgroundColor: '#25D366',
                  '&:hover': { backgroundColor: '#128C7E' }
                }}
              >
                Discuss Short-Term Work
              </Button>
            </Box>

            <Box sx={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: 3,
              p: 3,
              maxWidth: 350,
              textAlign: 'center'
            }}>
              <CalendarMonth sx={{ fontSize: 50, mb: 1.5 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>Long-Term Engagements</Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Ideal for ongoing support, retainer agreements, or complex projects needing sustained development.
              </Typography>
              <Button
                variant="contained"
                size="medium"
                startIcon={<WhatsApp />}
                href="https://wa.me/message/UMFDNJDDPTZUA1"
                sx={{
                  backgroundColor: '#25D366',
                  '&:hover': { backgroundColor: '#128C7E' }
                }}
              >
                Discuss Long-Term Work
              </Button>
            </Box>
          </Stack>

          <Typography 
            variant="body2" 
            sx={{ 
              mt: 4, 
              opacity: 0.9,
              fontWeight: 'bold',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
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
              maxWidth: '500px',
              mx: 'auto',
              mt: 1
            }}
          >
            {socialLinks.map((link, index) => (
              <Tooltip key={index} title={link.name} arrow>
                <IconButton
                  aria-label={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: 'white',
                    backgroundColor: link.color,
                    '&:hover': {
                      backgroundColor: link.color,
                      transform: 'scale(1.1)',
                      boxShadow: 2
                    },
                    transition: 'all 0.2s ease',
                    width: 44,
                    height: 44
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