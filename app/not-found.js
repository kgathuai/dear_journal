"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function NotFound() {
  return (
    <Container maxWidth="sm" sx={{ py: { xs: 6, md: 10 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
          bgcolor: "background.paper",
          borderRadius: 5,
          boxShadow: 6,
          px: { xs: 2, md: 6 },
          py: { xs: 6, md: 8 },
        }}
      >
        <Box
          sx={{
            bgcolor: "primary.main",
            color: "#fff",
            borderRadius: "50%",
            width: 90,
            height: 90,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
            boxShadow: 3,
          }}
        >
          <ErrorOutlineIcon sx={{ fontSize: 54 }} />
        </Box>
        <Typography variant="h2" fontWeight={800} sx={{ mb: 1, letterSpacing: 2 }}>
          404
        </Typography>
        <Typography variant="h5" fontWeight={600} sx={{ mb: 2, color: "text.secondary" }}>
          Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: "text.secondary", maxWidth: 380 }}>
          Sorry, the page or journal you’re looking for doesn’t exist, was moved, or is temporarily unavailable.
        </Typography>
        <Button
          component={Link}
          href="/"
          variant="contained"
          color="primary"
          size="large"
          sx={{
            borderRadius: 3,
            px: 4,
            py: 1.5,
            fontWeight: 700,
            fontSize: 18,
            boxShadow: 2,
            textTransform: "none",
            transition: "background 0.2s",
            '&:hover': {
              background: "#1a237e",
            },
          }}
        >
          Return to Home
        </Button>
      </Box>
    </Container>
  );
}
