
import { Box, Typography, Avatar, Container, Stack } from '@mui/material';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        width: '100%',
        backgroundColor: '#f3f4f6',
        py: 10,
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Stack
          direction="column"
          alignItems="center"
          spacing={3}
          textAlign="center"
        >
          <Avatar
            alt="Mr. Gee"
            src="/profile.jpg"
            sx={{
              width: 120,
              height: 120,
              border: "4px solid white",
              boxShadow: 3,
            }}
          />
          <Typography variant="h4" fontWeight="bold">
            About Me
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Hi, I'm <strong>Mr. Gee</strong> — a passionate creative dedicated
            to crafting stunning digital experiences. With a deep background in
            graphic design, web development, and UI/UX, I bring ideas to life
            with design precision and technical expertise.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;