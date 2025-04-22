import {
  Box,
  Typography,
  Card,
  CardMedia,
  Container,
  Stack,
  Chip,
  Button,
} from "@mui/material";
import { Brush, Code, Campaign } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      title: "Brand Identity & Logo Design",
      image: "/portfolio/branding-bg.jpg",
      description:
        "From concept to execution, we create strong brand identities that leave a lasting impression.",
      services: [
        { name: "Logo Design", icon: <Brush fontSize="small" /> },
        { name: "Brand Guidelines", icon: <Brush fontSize="small" /> },
        { name: "Stationery", icon: <Brush fontSize="small" /> },
        { name: "Packaging", icon: <Brush fontSize="small" /> },
      ],
    },
    {
      title: "Website & UI Design",
      image: "/portfolio/webdev-bg.jpg",
      description:
        "Modern, user-centric web designs that enhance user experience and drive engagement.",
      services: [
        { name: "Web Design", icon: <Code fontSize="small" /> },
        { name: "Responsive Layouts", icon: <Code fontSize="small" /> },
        { name: "Portfolio Pages", icon: <Code fontSize="small" /> },
        { name: "SEO Optimization", icon: <Code fontSize="small" /> },
      ],
    },
    {
      title: "Marketing & Strategy",
      image: "/portfolio/marketing-bg.png",
      description:
        "Data-driven marketing strategies that grow your brand and deliver measurable results.",
      services: [
        { name: "Social Media Strategy", icon: <Campaign fontSize="small" /> },
        { name: "Email Campaigns", icon: <Campaign fontSize="small" /> },
        { name: "Ad Creative", icon: <Campaign fontSize="small" /> },
        { name: "Analytics & Reporting", icon: <Campaign fontSize="small" /> },
      ],
    },
  ];

  return (
    <Box
      id="portfolio"
      sx={{
        py: 10,
        backgroundColor: "#f9f9f9",
        width: "100%",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(25,118,210,0.03) 0%, transparent 100%)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "text.primary" }}
          >
            My Work Portfolio
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              backgroundColor: "primary.main",
              margin: "0 auto",
              mb: 2,
            }}
          />
          <Typography variant="body1" color="text.secondary">
            Explore a selection of projects that showcase my expertise in
            branding, design, and marketing.
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
            mb: 6,
          }}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                height: 380,
                borderRadius: 3,
                overflow: "hidden",
                position: "relative",
                boxShadow: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.85)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%)",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  p: 4,
                }}
              >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" mb={3} sx={{ opacity: 0.9 }}>
                  {project.description}
                </Typography>

                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {project.services.map((service, i) => (
                    <Chip
                      key={i}
                      icon={service.icon}
                      label={service.name}
                      size="small"
                      sx={{
                        color: "white",
                        backgroundColor: "rgba(255,255,255,0.15)",
                        "& .MuiChip-icon": {
                          color: "white",
                          marginLeft: "8px",
                        },
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </Card>
          ))}
        </Box>

        {/* Portfolio Request Button */}
        <Box textAlign="center" mt={2}>
          <Typography variant="body1" color="text.secondary" mb={3}>
            Interested in seeing more of my work?
          </Typography>
            <Button
            component={Link}
            to="/Portfolio"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: "bold",
              textTransform: "none",
              fontSize: "1rem",
              boxShadow: 2,
              "&:hover": {
              boxShadow: 4,
              transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
            >
            View Full Portfolio
            </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Portfolio;
