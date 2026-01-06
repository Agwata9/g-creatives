import { Box, Typography, Avatar, Container, Stack, Chip, useTheme, IconButton } from '@mui/material';
import { DesignServices, Code, Palette, Psychology, WhatsApp } from '@mui/icons-material';

const About = () => {
  const theme = useTheme();

  return (
    <Box
      id="about"
      sx={{
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        py: { xs: 8, md: 12 },
        px: 2,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, transparent 100%)`,
          opacity: 0.05,
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          spacing={{ xs: 4, md: 8 }}
          sx={{ position: 'relative', zIndex: 1 }}
        >
          {/* Profile Image */}
          <Box sx={{
            position: 'relative',
            width: { xs: 160, md: 200, lg: 280 },
            height: { xs: 160, md: 200, lg: 280 },
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Avatar
              alt="Mr. Gee"
              src="/profile.jpg"
              sx={{
                width: '100%',
                height: '100%',
                border: { xs: '4px solid white', md: '6px solid white' },
                boxShadow: 6,
              }}
            />
            <Box sx={{
              position: 'absolute',
              bottom: { xs: -12, md: -20 },
              right: { xs: -12, md: -20 },
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              borderRadius: '50%',
              width: { xs: 56, md: 80 },
              height: { xs: 56, md: 80 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 3
            }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>{'10+'}</Typography>
            </Box>
          </Box>

          {/* Content */}
          <Stack spacing={3} textAlign={{ xs: 'center', md: 'left' }} sx={{ width: '100%' }}>
            <Typography 
              variant="h3" 
              fontWeight="bold"
              sx={{
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                fontSize: { xs: '2rem', md: '2.6rem', lg: '3rem' }
              }}
            >
              About Me
            </Typography>
            
            <Typography variant="h6" component="div" sx={{ lineHeight: 1.3, fontSize: { xs: '1rem', md: '1.25rem' } }}>
ICT Solutions Expert, Graphic Design Specialist & Web Developer

            </Typography>
            
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', mb: 1 }}>
              With over a decade of experience in ICT and digital design, I specialize in 
              providing comprehensive solutions including graphic design, ICT consultancy, 
              virtual assistance, content creation, and web management.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              My services bridge the gap between technology and creativity, delivering professional 
              solutions that enhance digital presence and operational efficiency for businesses and individuals.
            </Typography>

            {/* Skills Chips */}
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ pt: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Chip 
                icon={<DesignServices />} 
                label="Graphic Design" 
                sx={{ 
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.contrastText
                }} 
              />
              <Chip 
                icon={<Code />} 
                label="ICT Consultancy" 
                sx={{ 
                  backgroundColor: theme.palette.secondary.light,
                  color: theme.palette.secondary.contrastText
                }} 
              />
              <Chip 
                icon={<Palette />} 
                label="Virtual Assistance" 
                sx={{ 
                  backgroundColor: '#f59e0b',
                  color: 'white'
                }} 
              />
              <Chip 
                icon={<Psychology />} 
                label="Content Writing" 
                sx={{ 
                  backgroundColor: '#10b981',
                  color: 'white'
                }} 
              />
              <Chip
                icon={<Psychology />}
                label="Web Administration"
                sx={{
                  backgroundColor: '#8b5cf6',
                  color: 'white'
                }}
              />
              <Chip
                icon={<Psychology />}
                label="Social Media Management"
                sx={{
                  backgroundColor: '#ec4899',
                  color: 'white'
                }}
              />
            </Stack>

            {/* Contact option - more subtle */}
            <Stack direction="row" alignItems="center" spacing={1} sx={{ pt: 1 }}>
              <Typography variant="body2" color="text.secondary">
                Available for projects:
              </Typography>
              <IconButton 
                color="primary" 
                href="https://wa.me/message/UMFDNJDDPTZUA1" 
                target="_blank"
                sx={{
                  backgroundColor: theme.palette.primary.light,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                    color: 'white'
                  }
                }}
              >
                <WhatsApp />
              </IconButton>
            </Stack>

            {/* Signature */}
            <Box 
              component="img" 
              src="/signature.png" 
              alt="Signature" 
              sx={{ 
                height: 40,
                mt: 2,
                opacity: 0.8,
                alignSelf: { xs: 'center', md: 'flex-start' },
                filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none'
              }} 
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;