import { Box, Typography, Button, TextField, Stack, Divider, InputAdornment } from '@mui/material';
import { Quiz, CalendarMonth, Phone } from '@mui/icons-material';

export const ServiceCTA = () => {
  return (
    <Box sx={{ 
      py: 8, 
      backgroundImage: 'linear-gradient(to right, #f8f9fa 0%, #ffffff 100%)',
      borderTop: 1,
      borderColor: 'divider'
    }}>
      <Stack spacing={4} alignItems="center" maxWidth={800} mx="auto">
        <Box textAlign="center">
          <Typography variant="h4" fontWeight={800} gutterBottom>
            Discover Your Perfect Service Match
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              backgroundColor: 'primary.main',
              margin: '0 auto',
              mb: 2,
            }}
          />
          <Typography variant="h6" color="text.secondary">
            Get tailored solutions in just 2 minutes
          </Typography>
        </Box>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} width="100%" alignItems="center">
          <Button
            variant="contained"
            startIcon={<Quiz />}
            fullWidth
            sx={{ 
              py: 2, 
              fontSize: '1.1rem', 
              borderRadius: 2,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 3
              },
              transition: 'all 0.3s ease'
            }}
          >
            Start Quick Assessment
          </Button>

          <Divider flexItem orientation="vertical" sx={{ 
            display: { xs: 'none', sm: 'block' },
            borderColor: 'divider',
            height: 40
          }} />
          <Typography sx={{ 
            display: { sm: 'none' }, 
            color: 'text.secondary',
            fontWeight: 500
          }}>
            OR
          </Typography>

          <Stack spacing={2} width="100%">
            <TextField
              variant="outlined"
              placeholder="Enter phone for callback"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone color="action" />
                  </InputAdornment>
                )
              }}
              fullWidth
              sx={{ borderRadius: 2 }}
            />
            <Button
              variant="outlined"
              startIcon={<CalendarMonth />}
              fullWidth
              sx={{ 
                py: 2, 
                fontSize: '1.1rem', 
                borderRadius: 2,
                '&:hover': {
                  borderWidth: 2
                }
              }}
            >
              Schedule Expert Consultation
            </Button>
          </Stack>
        </Stack>

        <Typography variant="body2" color="text.secondary" textAlign="center">
          Our AI-powered matching system will recommend the ideal services for your specific needs
        </Typography>
      </Stack>
    </Box>
  );
};