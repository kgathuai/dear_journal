"use client";

import { Container, Typography, Box, Paper, Grid, Avatar } from "@mui/material";
import { journalTypes, teamMembers } from "@/lib/journals";

export default function AboutPage() {
  // Redesigned JournalCard for modern look
  const JournalCard = () => (
    <Grid
      container
      spacing={4}
      sx={{
        mb: 6,
        justifyContent: { xs: "flex-start", sm: "center" },
        flexWrap: "nowrap",
        overflowX: { xs: "auto", sm: "visible" },
        scrollSnapType: { xs: "x mandatory", sm: "none" },
        WebkitOverflowScrolling: "touch",
      }}
      wrap="nowrap"
    >
      {journalTypes.map(({ icon, title, description }, index) => (
        <Grid
          item
          xs={10}
          sm={6}
          md={4}
          key={index}
          sx={{
            minWidth: { xs: 260, sm: 300 },
            maxWidth: 340,
            flex: "0 0 auto",
            scrollSnapAlign: { xs: "start", sm: "unset" },
            display: "flex",
          }}
        >
          <Paper
            elevation={4}
            sx={{
              p: 4,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 4,
              boxShadow: 6,
              bgcolor: "#f8faf9",
              transition: "box-shadow 0.2s, transform 0.2s",
              "&:hover": {
                boxShadow: 12,
                transform: "scale(1.03)",
              },
            }}
          >
            <Box sx={{ mb: 2, fontSize: 48 }}>{icon}</Box>
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              align="center"
              sx={{ fontWeight: 700, color: "#274F3B" }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{ color: "#274F3B", opacity: 0.8 }}
            >
              {description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{
            mb: 6,
            fontWeight: { xs: 300, sm: 800 },
            fontSize: { xs: "20px", sm: "28px" },
            letterSpacing: 1,
            color: "#274F3B",
          }}
        >
          Our Journal Categories
        </Typography>
        <JournalCard />

        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{
            mb: 6,
            fontWeight: { xs: 300, sm: 800 },
            fontSize: { xs: "20px", sm: "28px" },
            letterSpacing: 1,
            color: "#274F3B",
          }}
        >
          Meet Our Team
        </Typography>

        <Grid
          container
          spacing={4}
          sx={{
            mb: 6,
            justifyContent: { xs: "flex-start", sm: "center" },
            flexWrap: "nowrap",
            overflowX: { xs: "auto", sm: "visible" },
            flexDirection: "row",
            // Add horizontal scroll snap for mobile
            scrollSnapType: { xs: "x mandatory", sm: "none" },
            WebkitOverflowScrolling: "touch",
          }}
          wrap="nowrap"
        >
          {teamMembers.map((member, index) => (
            <Grid
              item
              xs={10}
              sm={6}
              md={4}
              key={index}
              sx={{
                minWidth: { xs: 260, sm: 300 },
                maxWidth: 340,
                flex: "0 0 auto",
                scrollSnapAlign: { xs: "start", sm: "unset" },
                display: "flex",
              }}
            >
              <Paper
                elevation={5}
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: 4,
                  boxShadow: 8,
                  bgcolor: "#fff",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  "&:hover": {
                    boxShadow: 16,
                    transform: "scale(1.03)",
                  },
                }}
              >
                <Avatar
                  src={member.avatar}
                  alt={member.name}
                  sx={{
                    width: 100,
                    height: 100,
                    mb: 2,
                    boxShadow: 3,
                    border: "3px solid #274F3B",
                  }}
                />
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 700, color: "#274F3B" }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#4CAF50", fontWeight: 600, mb: 1 }}
                  gutterBottom
                >
                  {member.role}
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  sx={{ color: "#274F3B", opacity: 0.8 }}
                >
                  {member.bio}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
