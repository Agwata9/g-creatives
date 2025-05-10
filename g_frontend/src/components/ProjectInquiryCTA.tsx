import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
  Stack,
  Input,
} from "@mui/material";
import {
  Description,
  Schedule,
  ConnectWithoutContact,
  Download,
  Upload,
} from "@mui/icons-material";

export const ProjectInquiryCTA = () => {
  const [showFileOptions, setShowFileOptions] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 10240) {
        alert("File size exceeds 10KB limit");
        event.target.value = "";
        return;
      }
      setSelectedFile(file);
    }
  };

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center">
          <Typography variant="h4" textAlign="center" fontWeight={800}>
            Ready to Start Your Project?
          </Typography>

          <Divider sx={{ width: 80, height: 4, bgcolor: "primary.main" }} />

          <Box sx={{ width: "100%" }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              sx={{ mb: showFileOptions ? 2 : 0 }}
            >
              <Button
                fullWidth
                variant="outlined"
                size="large"
                startIcon={<Description />}
                onClick={(e) => {
                  e.preventDefault();
                  setShowFileOptions(!showFileOptions);
                }}
                sx={{
                  py: { xs: 1.5, md: 2.5 },
                  height: { xs: 48, md: 56 },
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  borderRadius: 2,
                  "&:hover": { borderWidth: 2, boxShadow: 2 },
                }}
              >
                Submit Project Brief
              </Button>

              <Button
                fullWidth
                variant="outlined"
                size="large"
                startIcon={<Schedule />}
                onClick={() => { window.location.href = "/book-expert"; }}
                sx={{
                  py: { xs: 1.5, md: 2.5 },
                  height: { xs: 48, md: 56 },
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  borderRadius: 2,
                  "&:hover": { borderWidth: 2, boxShadow: 2 },
                }}
              >
                Schedule
              </Button>

              <Button
                fullWidth
                variant="contained"
                size="large"
                startIcon={<ConnectWithoutContact />}
                href="https://wa.me/message/UMFDNJDDPTZUA1"
                sx={{
                  py: { xs: 1.5, md: 2.5 },
                  height: { xs: 48, md: 56 },
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  borderRadius: 2,
                  boxShadow: 4,
                }}
              >
                Instant Connect
              </Button>
            </Stack>

            {showFileOptions && (
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={2}
                sx={{ mt: 2 }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  component="a"
                  href="/temp/project-brief-template.docx"
                  download
                  size="large"
                  startIcon={<Download />}
                  sx={{
                    py: { xs: 1.5, md: 2.5 },
                    height: { xs: 48, md: 56 },
                    fontSize: { xs: "0.875rem", md: "1rem" },
                    borderRadius: 2,
                    bgcolor: "success.main",
                    "&:hover": { bgcolor: "success.dark" },
                  }}
                >
                  Download Template
                </Button>

                <Input
                  type="file"
                  inputProps={{ accept: ".doc,.docx,.pdf", maxLength: 10240 }}
                  onChange={handleFileUpload}
                  id="file-upload"
                  sx={{ display: "none" }}
                />
                <label htmlFor="file-upload">
                  <Button
                    fullWidth
                    variant="contained"
                    component="span"
                    size="large"
                    startIcon={<Upload />}
                    sx={{
                      py: { xs: 1.5, md: 2.5 },
                      height: { xs: 48, md: 56 },
                      fontSize: { xs: "0.875rem", md: "1rem" },
                      borderRadius: 2,
                      bgcolor: "secondary.main",
                      "&:hover": { bgcolor: "secondary.dark" },
                    }}
                  >
                    {selectedFile ? 
                      `Uploaded: ${selectedFile.name.slice(0, 10)}...` : 
                      "Upload Brief"}
                  </Button>
                </label>
              </Stack>
            )}
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="center"
            mt={2}
          >
            Average response time: 2 hours during business days
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};