import React from 'react';
import {
  Box,
  Typography,
  Container,
  IconButton,
  Tooltip,
  Stack,
  Button,
  useTheme,
} from '@mui/material';
import {
  Facebook,
  LinkedIn,
  Instagram,
  Telegram,
  WhatsApp,
  Email,
  X as XIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ContactCTA: React.FC = () => {
  const theme = useTheme();

  const socialLinks = [
    { icon: <WhatsApp />, label: 'WhatsApp', color: '#25D366', url: 'https://wa.me/message/UMFDNJDDPTZUA1' },
    { icon: <LinkedIn />, label: 'LinkedIn', color: '#0077B5', url: 'https://linkedin.com/in/agwata9' },
    { icon: <XIcon />, label: 'X', color: '#1DA1F2', url: 'https://x.com/g_creatives_' },
    { icon: <Telegram />, label: 'Telegram', color: '#0088cc', url: 'https://t.me/g_creatives' },
    { icon: <Instagram />, label: 'Instagram', color: '#E1306C', url: 'https://instagram.com/g_creatives_' },
    { icon: <Facebook />, label: 'Facebook', color: '#4267B2', url: 'https://facebook.com/g_creatives' },
  ];

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        px: 2,
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
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
          background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(6,182,212,0.1) 0%, transparent 60%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Stack spacing={5} alignItems="center">
            {/* Heading */}
            <Box>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.25rem', md: '3rem' },
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Let's Work Together
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 400,
                  opacity: 0.95,
                  maxWidth: 500,
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                I'm available for both{' '}
                <Box component="span" fontWeight={700}>
                  short-term projects
                </Box>{' '}
                and{' '}
                <Box component="span" fontWeight={700}>
                  long-term collaborations
                </Box>
                . Let's bring your vision to life.
              </Typography>
            </Box>

            {/* Primary CTA */}
            <MotionBox
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              sx={{ width: '100%', maxWidth: 400 }}
            >
              <Button
                variant="contained"
                size="large"
                fullWidth
                href="https://wa.me/message/UMFDNJDDPTZUA1"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<WhatsApp />}
                sx={{
                  backgroundColor: '#25D366',
                  color: '#fff',
                  py: 2,
                  px: 4,
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  borderRadius: '50px',
                  boxShadow: '0 8px 24px rgba(37, 211, 102, 0.35)',
                  '&:hover': {
                    backgroundColor: '#20bd5a',
                    boxShadow: '0 12px 32px rgba(37, 211, 102, 0.5)',
                  },
                }}
              >
                Start a Conversation
              </Button>
            </MotionBox>

            {/* Email contact */}
            <Typography
              variant="body1"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                opacity: 0.9,
                '&:hover': { opacity: 1 },
              }}
            >
              <Email fontSize="small" />
              <Box
                component="a"
                href="mailto:hello@gcreatives.com"
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.3)',
                  '&:hover': { borderBottomColor: 'common.white' },
                }}
              >
                hello@gcreatives.com
              </Box>
            </Typography>

            {/* Divider */}
            <Box sx={{ width: 60, height: 2, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 1 }} />

            {/* Social Links */}
            <Box>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  opacity: 0.7,
                  mb: 2,
                  fontSize: '0.75rem',
                }}
              >
                Connect on social
              </Typography>
              <Box
                component="nav"
                aria-label="social media links"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: 1.5,
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
                        backgroundColor: 'rgba(255,255,255,0.12)',
                        color: 'white',
                        width: 44,
                        height: 44,
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          backgroundColor: link.color,
                          transform: 'translateY(-3px)',
                          boxShadow: `0 6px 16px ${link.color}44`,
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
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactCTA;
