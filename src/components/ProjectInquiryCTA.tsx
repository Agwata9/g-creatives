import { Box, Container, Typography, Button, Divider, Stack } from '@mui/material';
import { Description, Schedule, ConnectWithoutContact } from '@mui/icons-material';

export const ProjectInquiryCTA = () => {
  return (
    <Box sx={{ 
      py: 8, 
      bgcolor: 'background.paper',
      borderTop: 1, 
      borderColor: 'divider' 
    }}>
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center">
          <Typography variant="h4" textAlign="center" fontWeight={800}>
            Ready to Start Your Project?
          </Typography>

          <Divider sx={{ width: 80, height: 4, bgcolor: 'primary.main' }} />

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
            <Button
              variant="outlined"
              fullWidth
              size="large"
              startIcon={<Description />}
              href="/project-brief"
              sx={{ 
                py: 3,
                fontSize: '1.1rem',
                borderRadius: 2,
                '&:hover': { borderWidth: 2, boxShadow: 2 }
              }}
            >
              Submit Project Brief
            </Button>

            <Button
              variant="outlined"
              fullWidth
              size="large"
              startIcon={<Schedule />}
              onClick={() => {
              window.location.href = '/book-expert';
              }}
              sx={{ 
              py: 3,
              fontSize: '1.1rem',
              borderRadius: 2,
              '&:hover': { borderWidth: 2, boxShadow: 2 }
              }}
            >
              Schedule Consultation
            </Button>

            <Button
              variant="contained"
              fullWidth
              size="large"
              startIcon={<ConnectWithoutContact />}
              href="/contact"
              sx={{ 
                py: 3,
                fontSize: '1.1rem',
                borderRadius: 2,
                boxShadow: 4
              }}
            >
              Instant Connect
            </Button>
          </Stack>

          <Typography variant="body2" color="text.secondary" textAlign="center" mt={2}>
            Average response time: 2 hours during business days
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
