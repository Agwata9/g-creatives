// src/components/SocialLinks.tsx
import React from 'react';
import { Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialLinks: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
      <IconButton aria-label="facebook" href="https://facebook.com" target="_blank">
        <FacebookIcon />
      </IconButton>
      <IconButton aria-label="twitter" href="https://twitter.com" target="_blank">
        <TwitterIcon />
      </IconButton>
      <IconButton aria-label="linkedin" href="https://linkedin.com" target="_blank">
        <LinkedInIcon />
      </IconButton>
      <IconButton aria-label="instagram" href="https://instagram.com" target="_blank">
        <InstagramIcon />
      </IconButton>
    </Box>
  );
};

export default SocialLinks;
