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
        <Typography variant="h4" textAlign="center" fontWeight={800}>
          Get Precise Service Recommendations
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} width="100%" alignItems="center">
          <Button
            variant="contained"
            startIcon={<Quiz />}
            fullWidth
            sx={{ py: 2, fontSize: '1.1rem', borderRadius: 2 }}
          >
            Take 2-Minute Quiz
          </Button>

          <Divider flexItem orientation="vertical" sx={{ display: { xs: 'none', sm: 'block' } }} />
          <Typography sx={{ display: { sm: 'none' }, color: 'text.secondary' }}>OR</Typography>

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
              sx={{ py: 2, fontSize: '1.1rem', borderRadius: 2 }}
            >
              Book Discovery Call
            </Button>
          </Stack>
        </Stack>

        <Typography variant="body2" color="text.secondary" textAlign="center">
          Get matched with the perfect service package for your needs
        </Typography>
      </Stack>
    </Box>
  );
};
