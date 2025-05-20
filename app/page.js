"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import OurJournal from "@/components/journal-card";
import { journals } from "@/lib/journals";
import JournalCarousel from "@/components/journal-carousel";

export default function Home() {
  const journalKeys = Object.keys(journals);
  const journalTitles = journalKeys.map((key) => journals[key].title);
  console.log("Journal Titles:", journalTitles);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <JournalCarousel />

        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center"
          sx={{ mb: 4 }}
        >
          Our Journal
        </Typography>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {journalKeys.map((type) => {
            const image = journals[type].image;
            console.log("Journal Title:", image); // 👈 Logs the title of each journal
            return (
              <Grid item xs={12} sm={6} md={4} key={type}>
                <OurJournal
                  title={journals[type].title}
                  description={journals[type].shortDescription}
                  image={journals[type].image}
                  type={type}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
