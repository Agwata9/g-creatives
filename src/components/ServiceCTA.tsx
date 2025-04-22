import { Box, Typography, Button, Stack } from '@mui/material';
import { CalendarMonth } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Add this import

export const ServiceCTA = () => {
  const navigate = useNavigate(); // Initialize navigation hook

  return (
    <Box sx={{ 
      py: 8, 
      backgroundColor: '#f8f9fa',
      borderTop: 1,
      borderColor: 'divider'
    }}>
      <Stack spacing={4} alignItems="center" maxWidth={800} mx="auto">
        <Box textAlign="center">
          <Typography variant="h4" fontWeight={800} gutterBottom>
            Find Your Ideal Service Solution
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
            Get matched in minutes or talk to an expert
          </Typography>
        </Box>

        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={3} 
          width="100%"
          justifyContent="center"
        >
          <Button
            variant="outlined"
            startIcon={<CalendarMonth />}
            fullWidth
            sx={{ 
              py: 2,
              px: 4,
              fontSize: '1.1rem',
              borderRadius: 2,
              borderWidth: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                borderWidth: 2,
                backgroundColor: 'action.hover'
              }
            }}
            onClick={() => navigate('/book-expert')} // Updated navigation
          >
            Book Expert Session
          </Button>
        </Stack>

        <Typography variant="body2" color="text.secondary" textAlign="center">
          92% of users find their ideal solution through our smart matching system
        </Typography>
      </Stack>
    </Box>
  );
};