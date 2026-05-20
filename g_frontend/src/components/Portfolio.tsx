import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Chip,
  Stack,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  image: string;
  description: string;
  category: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "OKPrints Design Platform",
    image: "/portfolio/OK_Printers.png",
    description: "A complete graphic design solution platform built with React, Node.js, and MySQL.",
    category: "web",
    tags: ["React", "Node.js", "MySQL", "Material UI"],
  },
  {
    title: "ByteCity E-Commerce",
    image: "/portfolio/bytecity.png",
    description: "Full-featured e-commerce platform with product management, cart, and payments.",
    category: "web",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Corporate Branding Suite",
    image: "/portfolio/branding-bg.jpg",
    description: "Comprehensive brand identity including logo, typography, color systems, and guidelines.",
    category: "branding",
    tags: ["Logo Design", "Typography", "Color Theory", "Brand Guidelines"],
  },
  {
    title: "Modern Business Site",
    image: "/portfolio/webdev-bg.jpg",
    description: "Responsive business website with optimized performance and seamless UX.",
    category: "web",
    tags: ["UI/UX", "Responsive", "SEO", "Performance"],
  },
  {
    title: "Marketing Campaign Suite",
    image: "/portfolio/marketing-bg.png",
    description: "Data-driven marketing campaign with targeted content strategy and analytics.",
    category: "marketing",
    tags: ["SEO", "Analytics", "Content Strategy", "Social Media"],
  },
];

const categories = [
  { value: "all", label: "All Work" },
  { value: "branding", label: "Branding" },
  { value: "web", label: "Web & UI" },
  { value: "marketing", label: "Marketing" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Box
      id="portfolio"
      sx={{
        py: { xs: 10, md: 16 },
        px: { xs: 2, sm: 3, md: 4 },
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.4) 100%)",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              letterSpacing: "0.15em",
              fontSize: "0.85rem",
              mb: 1,
              display: "block",
            }}
          >
            Creative Portfolio
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
              background: "linear-gradient(90deg, #f97316 0%, #fb923c 50%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
              mb: 1,
            }}
          >
            Showcasing Innovation in Digital Design & Development
          </Typography>
        </Box>

        {/* Filter Chips */}
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          flexWrap="wrap"
          useFlexGap
          sx={{ mb: { xs: 4, md: 6 } }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Chip
                label={cat.label}
                onClick={() => setActiveCategory(cat.value)}
                variant={activeCategory === cat.value ? "filled" : "outlined"}
                color={activeCategory === cat.value ? "primary" : "default"}
                sx={{
                  px: 2,
                  py: 2.5,
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  borderColor: activeCategory === cat.value ? "primary.main" : "rgba(255,255,255,0.15)",
                  color: activeCategory === cat.value ? "#fff" : "text.secondary",
                  backgroundColor: activeCategory === cat.value ? "primary.main" : "transparent",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    backgroundColor: activeCategory === cat.value ? "primary.dark" : "rgba(249,115,22,0.1)",
                  },
                }}
              />
            </motion.div>
          ))}
        </Stack>

        {/* Project Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
            gap: { xs: 3, md: 4 },
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: 320,
                    borderRadius: 3,
                    overflow: "hidden",
                    cursor: "pointer",
                    backgroundColor: "rgba(30, 41, 59, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      borderColor: "rgba(249, 115, 22, 0.3)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                      "& .portfolio-image": {
                        transform: "scale(1.08)",
                      },
                      "& .portfolio-overlay": {
                        opacity: 1,
                      },
                      "& .portfolio-content": {
                        transform: "translateY(0)",
                      },
                    },
                  }}
                >
                  {/* Background Image */}
                  <Box
                    className="portfolio-image"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />

                  {/* Gradient Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.3) 50%, rgba(15,23,42,0.1) 100%)",
                    }}
                  />

                  {/* Hover overlay */}
                  <Box
                    className="portfolio-overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(135deg, rgba(249,115,22,0.15) 0%, transparent 100%)",
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                    }}
                  />

                  {/* Content */}
                  <Box
                    className="portfolio-content"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 3,
                      transform: { xs: "translateY(0)", md: "translateY(8px)" },
                      transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "#fff",
                        fontSize: "1.1rem",
                        mb: 0.5,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(241,245,249,0.8)",
                        fontSize: "0.85rem",
                        mb: 1.5,
                        display: { xs: "block", md: "-webkit-box" },
                        WebkitLineClamp: { md: 2 },
                        WebkitBoxOrient: { md: "vertical" },
                        overflow: "hidden",
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Tags - visible on hover (desktop) or always (mobile) */}
                    <Stack
                      direction="row"
                      flexWrap="wrap"
                      gap={0.8}
                      sx={{
                        opacity: { xs: 1, md: 0 },
                        transition: "opacity 0.3s ease 0.1s",
                        ".MuiBox-root:hover &": { opacity: 1 },
                      }}
                    >
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            color: "#fff",
                            backgroundColor: "rgba(255,255,255,0.12)",
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            height: 24,
                            "&:hover": { backgroundColor: "rgba(249,115,22,0.4)" },
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
};

export default Portfolio;
