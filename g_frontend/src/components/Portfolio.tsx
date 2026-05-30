import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Chip,
  Stack,
  useTheme,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowOutward } from "@mui/icons-material";

interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "OKPrints Design Platform",
    description: "A complete graphic design solution platform built with React, Node.js, and MySQL.",
    category: "web",
    tags: ["React", "Node.js", "MySQL"],
  },
  {
    title: "ByteCity E-Commerce",
    description: "Full-featured e-commerce platform with product management, cart, and payments.",
    category: "web",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Corporate Branding Suite",
    description: "Comprehensive brand identity including logo, typography, color systems, and guidelines.",
    category: "branding",
    tags: ["Logo Design", "Typography", "Brand Guidelines"],
  },
  {
    title: "Modern Business Site",
    description: "Responsive business website with optimized performance and seamless UX.",
    category: "web",
    tags: ["UI/UX", "Responsive", "Performance"],
  },
  {
    title: "Marketing Campaign Suite",
    description: "Data-driven marketing campaign with targeted content strategy and analytics.",
    category: "marketing",
    tags: ["SEO", "Analytics", "Content Strategy"],
  },
];

const categories = [
  { value: "all", label: "All Work" },
  { value: "branding", label: "Branding" },
  { value: "web", label: "Web & UI" },
  { value: "marketing", label: "Marketing" },
];

const Portfolio = () => {
  const theme = useTheme();
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      web: "#06b6d4",
      branding: "#8b5cf6",
      marketing: "#f59e0b",
    };
    return colors[category] || "#06b6d4";
  };

  const getCategoryLabel = (category: string) => {
    const labels: { [key: string]: string } = {
      web: "Web",
      branding: "Branding",
      marketing: "Marketing",
    };
    return labels[category] || category;
  };

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
            Selected Works
          </Typography>
        </Box>

        {/* Filter Chips */}
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          flexWrap="wrap"
          useFlexGap
          sx={{ mb: { xs: 6, md: 8 } }}
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

        {/* Portfolio List */}
        <Stack spacing={3}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "stretch",
                    gap: 3,
                    p: { xs: 2.5, sm: 3, md: 4 },
                    borderRadius: 2,
                    backgroundColor: "rgba(30, 41, 59, 0.4)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: 4,
                      backgroundColor: getCategoryColor(project.category),
                      borderRadius: "4px 0 0 4px",
                    },
                    "&:hover": {
                      backgroundColor: "rgba(30, 41, 59, 0.8)",
                      borderColor: `${getCategoryColor(project.category)}40`,
                      boxShadow: `0 8px 24px ${getCategoryColor(project.category)}15`,
                      transform: "translateX(8px)",
                    },
                  }}
                >
                  {/* Left Section - Title & Description */}
                  <Stack spacing={1.5} sx={{ flex: 1, minWidth: 0 }}>
                    <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: "#fff",
                          fontSize: { xs: "1rem", md: "1.1rem" },
                          margin: 0,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Chip
                        label={getCategoryLabel(project.category)}
                        size="small"
                        sx={{
                          backgroundColor: `${getCategoryColor(project.category)}20`,
                          color: getCategoryColor(project.category),
                          border: `1px solid ${getCategoryColor(project.category)}40`,
                          fontWeight: 600,
                          fontSize: "0.75rem",
                        }}
                      />
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(241,245,249,0.7)",
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Tags */}
                    <Stack direction="row" gap={1} flexWrap="wrap" useFlexGap sx={{ pt: 0.5 }}>
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            height: 28,
                            backgroundColor: "rgba(255,255,255,0.08)",
                            color: "rgba(241,245,249,0.8)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            transition: "all 0.2s ease",
                            "&:hover": {
                              backgroundColor: "rgba(249,115,22,0.15)",
                              borderColor: "rgba(249,115,22,0.4)",
                              color: "#fff",
                            },
                          }}
                        />
                      ))}
                    </Stack>
                  </Stack>

                  {/* Right Section - Arrow Icon */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: 44,
                      height: 44,
                      borderRadius: "8px",
                      backgroundColor: "rgba(249,115,22,0.1)",
                      color: "primary.main",
                      transition: "all 0.3s ease",
                      flexShrink: 0,
                      "_groupHover": {
                        backgroundColor: "rgba(249,115,22,0.2)",
                        transform: "translate(4px, -4px)",
                      },
                    }}
                  >
                    <ArrowOutward sx={{ fontSize: "1.2rem" }} />
                  </Box>
                </Box>
              </motion.div>
            ))}
          </AnimatePresence>
        </Stack>

        {/* Empty State */}
        {filtered.length === 0 && (
          <Box textAlign="center" py={6}>
            <Typography color="text.secondary">
              No projects found in this category.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Portfolio;
