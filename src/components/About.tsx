import { Box, Typography, Avatar, Container, Stack, Chip, useTheme } from '@mui/material';
import { DesignServices, Code, Palette, Psychology } from '@mui/icons-material';

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
            width: { xs: 200, md: 280 },
            height: { xs: 200, md: 280 },
            flexShrink: 0
          }}>
            <Avatar
              alt="Mr. Gee"
              src="/profile.jpg"
              sx={{
                width: '100%',
                height: '100%',
                border: "6px solid white",
                boxShadow: 6,
              }}
            />
            <Box sx={{
              position: 'absolute',
              bottom: -20,
              right: -20,
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              borderRadius: '50%',
              width: 80,
              height: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 3
            }}>
              <Typography variant="h4" fontWeight="bold">5+</Typography>
            </Box>
          </Box>

          {/* Content */}
          <Stack spacing={3} textAlign={{ xs: 'center', md: 'left' }}>
            <Typography 
              variant="h3" 
              fontWeight="bold"
              sx={{
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              About Me
            </Typography>
            
            <Typography variant="h5" component="div" sx={{ lineHeight: 1.3 }}>
              Hi, I'm <Box component="span" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>Mr. Gee</Box> — 
              Digital Craftsman & Creative Visionary
            </Typography>
            
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              With over 5 years of experience in the digital realm, I specialize in transforming 
              complex ideas into elegant, user-friendly solutions. My approach combines 
              artistic sensibility with technical precision to deliver exceptional results.
            </Typography>

            {/* Skills Chips */}
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip 
                icon={<DesignServices />} 
                label="UI/UX Design" 
                sx={{ 
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.contrastText
                }} 
              />
              <Chip 
                icon={<Code />} 
                label="Web Development" 
                sx={{ 
                  backgroundColor: theme.palette.secondary.light,
                  color: theme.palette.secondary.contrastText
                }} 
              />
              <Chip 
                icon={<Palette />} 
                label="Brand Identity" 
                sx={{ 
                  backgroundColor: '#f59e0b',
                  color: 'white'
                }} 
              />
              <Chip 
                icon={<Psychology />} 
                label="User Psychology" 
                sx={{ 
                  backgroundColor: '#10b981',
                  color: 'white'
                }} 
              />
            </Stack>

            {/* Signature */}
            <Box sx={{ 
              mt: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' }
            }}>
              <Box 
                component="img" 
                src="/signature.png" 
                alt="Signature" 
                sx={{ 
                  height: 40,
                  opacity: 0.8,
                  filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none'
                }} 
              />
              <Typography variant="caption" color="text.secondary">
                Crafting digital excellence since 2018
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;