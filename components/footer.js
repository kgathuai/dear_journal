"use client";

import { Box, Container, Typography } from "@mui/material";
import NextLink from "next/link";
import { socialMedia } from "../lib/journals";
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "grey.200",
        py: 6,
        mt: 8,
      }}
    >
      
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            mb: 4,
          }}
        >
          {/* Company Information */}
          <Box sx={{ mb: { xs: 4, md: 0 } }}>
            <Typography variant="h6" gutterBottom>
              Dear Journal
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Inspiring creativity and organization through quality journals.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Kanyariri- Gitaru Road, GreenVille
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Kiambu, Kikuyu 1913
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <a
                  href="tel:+12125551234"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  +254758808026
                </a>
              </Typography>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box component="nav">
              <Typography
                variant="body2"
                component={NextLink}
                href="/"
                sx={{ display: "block", mb: 1, color: "text.secondary" }}
              >
                Home
              </Typography>
              <Typography
                variant="body2"
                component={NextLink}
                href="/about"
                sx={{ display: "block", mb: 1, color: "text.secondary" }}
              >
                About Us
              </Typography>
              <Typography
                variant="body2"
                component={NextLink}
                href="/gallery"
                sx={{ display: "block", mb: 1, color: "text.secondary" }}
              >
                Gallery
              </Typography>
              <Typography
                variant="body2"
                component={NextLink}
                href="/contact"
                sx={{ display: "block", mb: 1, color: "text.secondary" }}
              >
                Contact
              </Typography>
            </Box>
          </Box>

          {/* Social Media Links */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {socialMedia.map((link) => (
                <Typography
                  key={link.name}
                  component="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    fontSize: "1.5rem",
                    color: "text.secondary",
                    transition: "color 0.2s, transform 0.2s",
                    "&:hover": {
                      color: "primary.main",
                      transform: "scale(1.2)",
                    },
                  }}
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.icon}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Copyright */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Suenest. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
