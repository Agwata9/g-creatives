import { Box, Typography, Button, Container, IconButton, Tooltip, Stack } from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Telegram,
  Email
} from '@mui/icons-material';

const ContactCTA = () => {
  const socialLinks = [
    { icon: <Facebook />, name: 'Facebook', color: '#4267B2', url: 'https://facebook.com' },
    { icon: <Twitter />, name: 'Twitter', color: '#1DA1F2', url: 'https://twitter.com' },
    { icon: <LinkedIn />, name: 'LinkedIn', color: '#0077B5', url: 'https://linkedin.com' },
    { icon: <Instagram />, name: 'Instagram', color: '#E1306C', url: 'https://instagram.com' },
    { icon: <Telegram />, name: 'Telegram', color: '#0088cc', url: 'https://t.me/yourchannel' },
    { icon: <Email />, name: 'Email', color: '#EA4335', url: 'mailto:contact@mrgeedesigns.com' },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 10 },
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
        <Stack spacing={3} alignItems="center">
          <Typography 
            variant="h3" 
            fontWeight="bold" 
            sx={{ 
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              lineHeight: 1.2
            }}
          >
            Let's Create Something Amazing
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 4,
              fontSize: { xs: '1rem', md: '1.1rem' },
              maxWidth: '700px'
            }}
          >
            Got a project in mind? Whether you need a stunning design or powerful web development,
            let's collaborate to bring your vision to life.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Email />}
              href="mailto:contact@mrgeedesigns.com"
              sx={{
                borderColor: 'white',
                color: 'white',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                borderRadius: 3,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderColor: 'white',
                  transform: 'translateY(-2px)',
                  boxShadow: 2
                },
                transition: 'all 0.3s ease',
              }}
            >
              Email Me
            </Button>
          </Stack>

          <Typography 
            variant="body2" 
            sx={{ 
              mt: 2, 
              opacity: 0.9,
              fontWeight: 'bold',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}
          >
            OR CONNECT VIA
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 1,
              maxWidth: '500px',
              mx: 'auto',
              mt: 1 // Added small margin top
            }}
          >
            {socialLinks.map((link, index) => (
              <Tooltip key={index} title={link.name} arrow>
                <IconButton
                  aria-label={link.name}
                  href={link.url}
                  target="_blank"
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
