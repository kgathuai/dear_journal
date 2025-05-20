"use client";

import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  Card,
  CardContent,
  Link,
} from "@mui/material";
import { socialMedia } from "../../lib/journals";

import FeedbackForm from "@/components/feedback-form";

export default function ContactPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Connect with us
        </Typography>

        <Grid>
          {/* Contact Form */}
          <Grid>
            <FeedbackForm />
          </Grid>

          {/* Social Media Section */}
          <Grid>
            <Grid container spacing={2} justifyContent="center">
              {socialMedia.map((platform) => (
                <Grid item key={platform.name}>
                  <Link
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{ display: "block", pt: "50px" }}
                  >
                    {platform.icon}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
