"use client";

import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { galleryItems } from "../../lib/journals";

export default function GalleryPage() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const theme = useTheme();

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography
        variant="h3"
        align="center"
        fontWeight={700}
        sx={{ mb: 5, letterSpacing: 1, color: theme.palette.text.primary }}
      >
        Gallery
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        justifyContent="center"
        alignItems="stretch"
      >
        {galleryItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card
              onClick={() => handleClickOpen(item)}
              sx={{
                height: 340,
                borderRadius: 4,
                boxShadow: 3,
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                '&:hover': {
                  transform: 'scale(1.035)',
                  boxShadow: 8,
                },
              }}
              elevation={0}
            >
              <Box sx={{ position: "relative", height: "100%" }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    height: 260,
                    width: "100%",
                    objectFit: "cover",
                    transition: "filter 0.2s",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 60,
                    bgcolor: "rgba(0,0,0,0.55)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.2s",
                    pointerEvents: "none",
                    fontWeight: 600,
                    fontSize: 20,
                    letterSpacing: 0.5,
                    zIndex: 2,
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                  className="gallery-card-overlay"
                >
                  {item.title}
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            bgcolor: theme.palette.background.paper,
            boxShadow: 10,
          },
        }}
      >
        <DialogContent sx={{ position: "relative", p: 0, bgcolor: "transparent" }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              color: "#fff",
              bgcolor: "rgba(0,0,0,0.5)",
              zIndex: 2,
              '&:hover': {
                bgcolor: "rgba(0,0,0,0.7)",
              },
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
          {selectedImage && (
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "center",
                minHeight: { xs: 300, md: 400 },
                p: { xs: 2, md: 4 },
                gap: { xs: 2, md: 4 },
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  maxHeight: 420,
                  maxWidth: 500,
                  overflow: "hidden",
                  borderRadius: 3,
                  boxShadow: 3,
                  bgcolor: "#fff",
                }}
              >
                <img
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: 400,
                    objectFit: "cover",
                    borderRadius: 12,
                  }}
                />
              </Box>
              <Box sx={{ flex: 1, minWidth: 220, p: { xs: 2, md: 3 } }}>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  {selectedImage.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {selectedImage.description}
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
}
