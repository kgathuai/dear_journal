"use client";

import { Container, Typography, Box, Paper, Grid, Avatar } from "@mui/material";
import { journalTypes, teamMembers } from "@/lib/journals";

export default function AboutPage() {
  const JournalCard = () => (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ mb: "35px" }}
    >
      {journalTypes.map(({ icon, title, description }, index) => (
        <Grid size={4} key={index}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {icon}
            <Typography variant="h6" component="h3" gutterBottom align="center">
              {title}
            </Typography>
            <Typography variant="body2" align="center">
              {description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            align="center"
            sx={{ mb: 4 }}
          >
            Our Journal Categories
          </Typography>
          <JournalCard />
        </>

        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center"
          sx={{ mb: 4 }}
        >
          Meet Our Team
        </Typography>

        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ mb: "35px" }}
        >
          {teamMembers.map((member, index) => (
            <Grid item size={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={member.avatar}
                  alt={member.name}
                  sx={{ width: 100, height: 100, mb: 2 }}
                />
                <Typography variant="h6" component="h3" gutterBottom>
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  gutterBottom
                >
                  {member.role}
                </Typography>
                <Typography variant="body2" align="center">
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
