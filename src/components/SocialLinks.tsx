import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Tooltip,
  Button,
  Modal,
  TextField,
  Typography,
  Stack,
  Divider,
  useTheme
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  WhatsApp,
  Telegram,
  Email,
  Close,
  Send
} from '@mui/icons-material';

const SocialLinks = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Contact Request',
    message: ''
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your email
    // For example using EmailJS, a backend API, or mailto link
    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    handleClose();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        my: 6,
        px: 2
      }}
    >
      {/* Social Media Links */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}
      >
        {[
          { icon: <Facebook fontSize="large" />, color: '#4267B2', name: 'Facebook', url: 'https://facebook.com' },
          { icon: <Twitter fontSize="large" />, color: '#1DA1F2', name: 'Twitter', url: 'https://twitter.com' },
          { icon: <LinkedIn fontSize="large" />, color: '#0077B5', name: 'LinkedIn', url: 'https://linkedin.com' },
          { icon: <Instagram fontSize="large" />, color: '#E1306C', name: 'Instagram', url: 'https://instagram.com' },
          { icon: <WhatsApp fontSize="large" />, color: '#25D366', name: 'WhatsApp', url: 'https://wa.me/1234567890' },
          { icon: <Telegram fontSize="large" />, color: '#0088cc', name: 'Telegram', url: 'https://t.me/yourchannel' }
        ].map((social) => (
          <Tooltip key={social.name} title={social.name}>
            <IconButton
              aria-label={social.name.toLowerCase()}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: social.color,
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                '&:hover': {
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
                  transform: 'scale(1.1)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              {social.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Box>

      {/* Divider with "OR" */}
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: 400 }}>
        <Divider sx={{ flexGrow: 1 }} />
        <Typography variant="body2" sx={{ px: 2, color: 'text.secondary' }}>
          OR
        </Typography>
        <Divider sx={{ flexGrow: 1 }} />
      </Box>

      {/* Email Me Button */}
      <Button
        variant="contained"
        startIcon={<Email />}
        onClick={handleOpen}
        sx={{
          px: 4,
          py: 1.5,
          borderRadius: 50,
          fontWeight: 'bold',
          textTransform: 'none',
          fontSize: '1rem',
          boxShadow: theme.shadows[3],
          '&:hover': {
            boxShadow: theme.shadows[6],
            transform: 'translateY(-2px)'
          },
          transition: 'all 0.3s ease'
        }}
      >
        Email Me Directly
      </Button>

      {/* Email Form Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <Box
          sx={{
            backgroundColor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            width: '100%',
            maxWidth: 500,
            p: 3
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 3
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Contact Me
            </Typography>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>

          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                required
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
              />

              <TextField
                required
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
              />

              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
              />

              <TextField
                required
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                variant="outlined"
              />

              <TextField
                required
                fullWidth
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                variant="outlined"
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<Send />}
                sx={{
                  py: 1.5,
                  fontWeight: 'bold',
                  textTransform: 'none'
                }}
              >
                Send Message
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default SocialLinks;