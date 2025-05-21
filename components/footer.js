"use client";

import { Box, Container, Typography } from "@mui/material";
import NextLink from "next/link";
import { socialMedia } from "../lib/journals";
import Image from "next/image";
import logo from "../public/images/newlogo.png";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#274F3B",
        color: "#fff",
        py: 3, // Reduced vertical padding
        mt: 4, // Reduced margin top
        boxShadow: 4,
        borderTopLeftRadius: 0, // No border radius
        borderTopRightRadius: 0, // No border radius
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: { xs: "center", md: "flex-start" },
            gap: 3, // Reduced gap
            mb: 2, // Reduced margin bottom
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Company Information */}
          <Box
            sx={{
              mb: { xs: 4, md: 0 },
              minWidth: 220,
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  background: "#fff",
                  borderRadius: 2,
                  p: 0.5,
                  boxShadow: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 1,
                }}
              >
                <Image
                  src={logo}
                  alt="logo"
                  height={48}
                  width={56}
                  style={{ borderRadius: 6, display: "block" }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  letterSpacing: 1,
                  display: { xs: "none", sm: "block" },
                }}
              >
                Dear Journal
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                letterSpacing: 1,
                textAlign: "center",
                display: { xs: "block", sm: "none" },
                mb: 1,
              }}
            >
              Dear Journal
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#e0e0e0",
                mb: 1,
                textAlign: "center",
              }}
            >
              Inspiring creativity and organization through quality journals.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography
                variant="body2"
                sx={{ color: "#e0e0e0", textAlign: "center" }}
              >
                Kanyariri- Gitaru Road, GreenVille
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#e0e0e0", textAlign: "center" }}
              >
                Kiambu, Kikuyu 1913
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#e0e0e0", textAlign: "center" }}
              >
                <a
                  href="tel:+254758808026"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  +254 758 808 026
                </a>
              </Typography>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box sx={{ minWidth: 180, alignItems: "center", display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, textAlign: "center" }}>
              Quick Links
            </Typography>
            <Box component="nav">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Typography
                  key={link.label}
                  variant="body2"
                  component={NextLink}
                  href={link.href}
                  sx={{
                    display: "block",
                    mb: 1,
                    color: "#e0e0e0",
                    fontWeight: 500,
                    letterSpacing: 0.5,
                    transition: "color 0.2s",
                    textAlign: "center",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Social Media Links */}
          <Box sx={{ minWidth: 180, alignItems: "center", display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, textAlign: "center" }}>
              Connect With Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 1, justifyContent: "center" }}>
              {socialMedia.map((link) => (
                <Box
                  key={link.name}
                  component="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    bgcolor: "transparent",
                    color: "#e0e0e0",
                    fontSize: 28,
                    transition: "all 0.2s",
                    "&:hover": {
                      bgcolor: "#fff",
                      color: "#274F3B",
                      transform: "scale(1.15)",
                    },
                  }}
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.icon}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Copyright */}
        <Box
          sx={{ textAlign: "center", pt: 1, borderTop: "1px solid #e0e0e0" }}
        >
          <Typography variant="body2" sx={{ color: "#e0e0e0" }}>
            © {new Date().getFullYear()} Suenest. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
