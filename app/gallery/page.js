"use client";

import { useState } from "react";
import {
  Container,
  Box,
  Grid,
  Card,
  CardMedia,
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
                borderRadius: 0,
                boxShadow: 0,
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                transition: "transform 0.2s",
                '&:hover': {
                  transform: 'scale(1.035)',
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
                    height: 340,
                    width: "100%",
                    objectFit: "cover",
                    transition: "none",
                  }}
                />
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
            borderRadius: 0,
            bgcolor: theme.palette.background.paper,
            boxShadow: 0,
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
                alignItems: "center",
                justifyContent: "center",
                minHeight: { xs: 300, md: 400 },
                p: { xs: 2, md: 4 },
              }}
            >
              <Box
                sx={{
                  maxHeight: 420,
                  maxWidth: 600,
                  overflow: "hidden",
                  borderRadius: 0,
                  boxShadow: 0,
                  bgcolor: "#fff",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
                    borderRadius: 0,
                    boxShadow: "none",
                  }}
                />
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
}
