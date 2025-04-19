import { Box, Typography, Button, Container, IconButton, Tooltip, Stack, Chip } from '@mui/material';
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
            Let's Work Together
          </Typography>
          
          <Typography 
            variant="h5"
            sx={{
              fontWeight: 500,
              maxWidth: '800px'
            }}
          >
            I'm available for both <Box component="span" sx={{ fontWeight: 'bold' }}>short-term projects</Box> and <Box component="span" sx={{ fontWeight: 'bold' }}>long-term collaborations</Box>
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

          {/* Combined Engagement Section */}
          <Box sx={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: 3,
            p: 4,
            maxWidth: 600,
            textAlign: 'center',
            width: '100%'
          }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Ready to Start Your Project?
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 3 }}>
              Whether you need a <strong>one-time service</strong> or <strong>ongoing support</strong>, 
              I can help bring your ideas to life. My flexible engagement models include:
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center', 
              gap: 3,
              mb: 4,
              textAlign: 'left'
            }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>Short-Term</Typography>
                <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                  <li>Quick fixes and one-time tasks</li>
                  <li>Specific deliverables</li>
                  <li>Clear scope and timeline</li>
                </ul>
              </Box>
              
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>Long-Term</Typography>
                <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
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
              sx={{
                backgroundColor: '#25D366',
                fontSize: '1rem',
                px: 4,
                py: 1.5,
                '&:hover': { 
                  backgroundColor: '#128C7E',
                  transform: 'translateY(-2px)',
                  boxShadow: 3
                },
                transition: 'all 0.2s ease',
              }}
            >
              Get in Touch
            </Button>
          </Box>

          <Typography 
            variant="body2" 
            sx={{ 
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