"use client";

import { Box, Container, Typography } from "@mui/material";
import { OurJournal } from "@/lib/journals";
import JournalCarousel from "@/components/journal-carousel";
import DearJournal from "@/components/journal-card";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <JournalCarousel />

        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{ mb: 6, fontWeight: 800, letterSpacing: 1, color: "#274F3B" }}
        >
          Our Journals
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
            px: { xs: 0, md: 2 },
          }}
        >
          {OurJournal.map((journal, idx) => (
            <Box
              key={journal.type}
              sx={{
                flex: "0 1 340px",
                maxWidth: 360,
                minWidth: 280,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "stretch",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: 3,
                borderRadius: 4,
                bgcolor: "#fff",
                p: 0,
                '&:hover': {
                  boxShadow: 8,
                  transform: 'scale(1.03)'
                }
              }}
            >
              <DearJournal
                title={journal.title}
                description={journal.description}
                image={journal.image}
                type={journal.type}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
