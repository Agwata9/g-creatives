import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

const SocialLinks: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 2,
        my: 6,
      }}
    >
      <Tooltip title="Facebook">
        <IconButton
          aria-label="facebook"
          href="https://facebook.com"
          target="_blank"
          sx={{ color: '#4267B2' }}
        >
          <FacebookIcon fontSize="large" />
        </IconButton>
      </Tooltip>

      <Tooltip title="X (Twitter)">
        <IconButton
          aria-label="x"
          href="https://x.com"
          target="_blank"
          sx={{ color: '#1DA1F2' }}
        >
          <TwitterIcon fontSize="large" />
        </IconButton>
      </Tooltip>

      <Tooltip title="LinkedIn">
        <IconButton
          aria-label="linkedin"
          href="https://linkedin.com"
          target="_blank"
          sx={{ color: '#0077B5' }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Instagram">
        <IconButton
          aria-label="instagram"
          href="https://instagram.com"
          target="_blank"
          sx={{ color: '#E1306C' }}
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
      </Tooltip>

      <Tooltip title="WhatsApp">
        <IconButton
          aria-label="whatsapp"
          href="https://wa.me/1234567890"
          target="_blank"
          sx={{ color: '#25D366' }}
        >
          <WhatsAppIcon fontSize="large" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Telegram">
        <IconButton
          aria-label="telegram"
          href="https://t.me/yourchannel"
          target="_blank"
          sx={{ color: '#0088cc' }}
        >
          <TelegramIcon fontSize="large" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SocialLinks;
