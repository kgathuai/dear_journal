"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
          The journal you're looking for doesn't exist or has been moved.
        </Typography>
        <Button component={Link} href="/" variant="contained" color="primary">
          Return to Home
        </Button>
      </Box>
    </Container>
  );
}
