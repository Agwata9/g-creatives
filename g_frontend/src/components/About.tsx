import { Box, Typography, Container, Stack, Chip, useTheme, useMediaQuery } from '@mui/material';
import { DesignServices, Code, Palette, Psychology, CheckCircle } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const skillChips = [
    { label: 'Graphic Design', icon: <DesignServices />, color: '#f97316' },
    { label: 'Web Development', icon: <Code />, color: '#06b6d4' },
    { label: 'UI/UX Design', icon: <Palette />, color: '#8b5cf6' },
    { label: 'Branding', icon: <Psychology />, color: '#10b981' },
    { label: 'ICT Solutions', icon: <DesignServices />, color: '#f59e0b' },
    { label: 'Content Creation', icon: <Psychology />, color: '#ec4899' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <Box
      id="about"
      sx={{
        width: '100%',
        py: { xs: 10, md: 16 },
        px: { xs: 2, sm: 3, md: 4 },
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.5) 0%, transparent 100%)',
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '-5%',
          left: '-10%',
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '350px',
          height: '350px',
          background: `radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Stack
            direction={{ xs: 'column', lg: 'row' }}
            spacing={{ xs: 4, lg: 6 }}
            alignItems="center"
            justifyContent="center"
          >
            {/* Content Section */}
            <Stack spacing={4} sx={{ flex: 1, maxWidth: '900px', mx: 'auto' }}>
              {/* Headline */}
              <motion.div variants={itemVariants}>
                <Stack spacing={2}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                      fontWeight: 800,
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      display: 'inline-block',
                    }}
                  >
                    About Me
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 700,
                      fontSize: { xs: '1rem', md: '1.3rem' },
                    }}
                  >
                    ICT Solutions Expert • Graphic Designer • Web Developer
                  </Typography>
                </Stack>
              </motion.div>

              {/* Description */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    lineHeight: 1.8,
                    color: 'text.secondary',
                  }}
                >
                  With over a decade of experience in ICT and digital design, specializing in creating comprehensive solutions that merge technology with creativity. Designing stunning brand identities, building responsive websites, and providing strategic ICT solutions that help businesses thrive in the digital landscape.
                </Typography>
              </motion.div>

              {/* Features/Points */}
              <motion.div variants={itemVariants}>
                <Stack spacing={2}>
                  {[
                    'Brand-focused design that resonates with your audience',
                    'Full-stack digital solutions from concept to deployment',
                    'Strategic approach to maximize ROI and engagement',
                  ].map((point, index) => (
                    <Stack key={index} direction="row" spacing={2} alignItems="flex-start">
                      <CheckCircle
                        sx={{
                          color: theme.palette.primary.main,
                          fontSize: '1.5rem',
                          mt: 0.5,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '1rem',
                        }}
                      >
                        {point}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </motion.div>

              {/* Skills */}
              <motion.div variants={itemVariants}>
                <Stack spacing={3}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.1rem',
                    }}
                  >
                    Core Expertise
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {skillChips.map((skill, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, y: -4 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Chip
                          icon={skill.icon}
                          label={skill.label}
                          sx={{
                            backgroundColor: `${skill.color}20`,
                            color: skill.color,
                            border: `1.5px solid ${skill.color}`,
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            py: 3,
                            '& .MuiChip-icon': {
                              color: `${skill.color} !important`,
                            },
                            transition: 'all 300ms ease',
                            cursor: 'pointer',
                          }}
                        />
                      </motion.div>
                    ))}
                  </Stack>
                </Stack>
              </motion.div>

              {/* Signature */}
              {!isMobile && (
                <motion.div variants={itemVariants}>
                  <Box
                    component="img"
                    src="/signature.png"
                    alt="Signature"
                    sx={{
                      height: 50,
                      opacity: 0.7,
                      filter: 'invert(1)',
                      mt: 2,
                    }}
                  />
                </motion.div>
              )}
            </Stack>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
