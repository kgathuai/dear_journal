"use client";

import { useState } from "react";
import { Container, Typography, Box, Grid, Paper, Link } from "@mui/material";
import { socialMedia } from "../../lib/journals";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import FeedbackForm from "@/components/feedback-form";

export default function ContactPage() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 6 }}>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          sx={{ mb: 5, fontWeight: 800, letterSpacing: 1, color: "#274F3B" }}
        >
          Connect with Us
        </Typography>

        <Grid
          container
          spacing={6}
          alignItems="flex-start"
          justifyContent="center"
        >
          {/* Contact Form */}
          <Grid item xs={12} md={7} sx={{ flexGrow: 1, minWidth: 400 }}>
            <Paper
              elevation={4}
              sx={{
                p: { xs: 2, sm: 5 },
                borderRadius: 4,
                boxShadow: 6,
                bgcolor: "#f8faf9",
              }}
            >
              <Typography
                variant="h6"
                sx={{ mb: 2, color: "#274F3B", fontWeight: 700 }}
              >
                Send Us a Message
              </Typography>
              <FeedbackForm />
            </Paper>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: { xs: 2, sm: 4 },
                borderRadius: 4,
                boxShadow: 0,
                bgcolor: "transparent",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  flexWrap: "wrap",
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                {socialMedia.map((platform) => {
                  let icon = platform.icon;
                  if (platform.name === "LinkedIn") {
                    icon = (
                      <LinkedInIcon
                        fontSize="large"
                        sx={{ color: "#0A66C2" }}
                      />
                    );
                  }
                  return (
                    <Link
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        color: "#274F3B",
                        fontSize: 32,
                        boxShadow: 1,
                        transition: "all 0.2s",
                        "&:hover": {
                          color: "#4CAF50",
                          transform: "scale(1.12)",
                          boxShadow: 4,
                        },
                      }}
                      aria-label={platform.name}
                      title={platform.name}
                    >
                      {icon}
                    </Link>
                  );
                })}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
