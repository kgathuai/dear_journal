"use client";

import { Box, Container, Typography, Paper, Button } from "@mui/material";
import { journals } from "@/lib/journals";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function JournalPage({ params }) {
  const { type } = params;

  // Check if the journal type exists
  if (!journals[type]) {
    notFound();
  }

  const journal = journals[type];

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Button
          component={Link}
          href="/"
          variant="outlined"
          sx={{ mb: 4, color: "white", background: "#274F3B" }}
        >
          Back to All Journals
        </Button>

        <Typography variant="h3" component="h1" gutterBottom>
          {journal.title}
        </Typography>

        <Box
          component="img"
          src={journal.image || `/placeholder.svg?height=300&width=700`}
          alt={journal.title}
          sx={{
            width: "100%",
            height: 300,
            objectFit: "cover",
            borderRadius: 2,
            mb: 4,
          }}
        />

        <Paper elevation={1} sx={{ p: 4, mb: 4 }}>
          <Typography variant="body1" paragraph>
            {journal.fullDescription}
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
            Key Features
          </Typography>

          <ul>
            {journal.features.map((feature, index) => (
              <Typography component="li" key={index} sx={{ mb: 1 }}>
                {feature}
              </Typography>
            ))}
          </ul>
        </Paper>
      </Box>
    </Container>
  );
}
