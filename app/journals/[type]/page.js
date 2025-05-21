"use client";

import { Box, Container, Typography, Paper, Button, Chip, Divider } from "@mui/material";
import { journals } from "@/lib/journals";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";

export default function JournalPage({ params }) {
  const { type } = React.use(params);

  const typeToKey = {
    "heart-and-truth": "Spiritual",
    "daily-goals-grace": "Daily",
    "her-wealth": "Finantial",
  };
  const key = typeToKey[type];
  if (!key || !journals[key]) notFound();
  const journal = journals[key];

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Button
          component={Link}
          href="/"
          variant="outlined"
          sx={{ mb: 4, color: "white", background: "#274F3B", borderRadius: 3, fontWeight: 600, px: 3 }}
        >
          ← Back to All Journals
        </Button>

        <Box
          sx={{
            width: "100%",
            minHeight: 350,
            maxHeight: 420,
            position: "relative",
            borderRadius: 5,
            mb: 4,
            overflow: "visible",
            background: "transparent",
            boxShadow: 4,
            transition: "box-shadow 0.3s, transform 0.3s",
            '&:hover': {
              boxShadow: 10,
              transform: 'scale(1.01)'
            }
          }}
        >
          <Image
            src={journal.detailImage || journal.image}
            alt={journal.title}
            fill
            style={{ objectFit: "cover", borderRadius: 20, zIndex: 0, filter: "brightness(0.97)" }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
          <Box sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            bgcolor: 'rgba(39,79,59,0.92)',
            color: 'white',
            py: 2,
            px: 4,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: 2,
          }}>
            <Typography variant="h4" sx={{ fontWeight: 700, letterSpacing: 1, textShadow: "0 2px 8px #274F3B55" }}>
              {journal.title}
            </Typography>
            <Chip label={`KES ${journal.price}`} sx={{ bgcolor: "#fff", color: "#274F3B", fontWeight: 700, fontSize: 18, px: 2, py: 1, borderRadius: 2 }} />
          </Box>
        </Box>

        <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, mb: 4, borderRadius: 4, background: "#f8faf9" }}>
          <Typography variant="body1" paragraph sx={{ fontSize: 18, color: "#274F3B", mb: 2 }}>
            {journal.fullDescription}
          </Typography>

          <Divider sx={{ my: 3 }}>
            <Chip label="Key Features" sx={{ bgcolor: "#274F3B", color: "#fff", fontWeight: 600, fontSize: 16 }} />
          </Divider>

          <Box component="ul" sx={{ pl: 3, mb: 0 }}>
            {journal.features.map((feature, index) => (
              <Typography component="li" key={index} sx={{ mb: 1.5, fontSize: 17, color: "#274F3B", fontWeight: 500 }}>
                {feature}
              </Typography>
            ))}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
