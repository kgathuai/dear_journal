"use client";

import { Container, Grid, Box } from "@mui/material";
import Image from "next/image";
import { allImages } from "@/lib/journals";

function getImageSize(img) {
  if (img && img.width && img.height) {
    return img.width * img.height;
  }
  return 0;
}

export default function GalleryPage() {
  const sortedImages = [...allImages].sort(
    (a, b) => getImageSize(b) - getImageSize(a)
  );

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        justifyContent="center"
        alignItems="stretch"
      >
        {sortedImages.map((img, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
            <Box
              sx={{
                position: "relative",
                height: 340,
                width: "100%",
                overflow: "hidden",
                "&:hover img": {
                  transform: "scale(1.08)",
                  transition: "transform 0.4s cubic-bezier(.4,0,.2,1)",
                },
              }}
            >
              <Image
                src={img}
                alt={`Gallery image ${idx + 1}`}
                width={400}
                height={340}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.4s cubic-bezier(.4,0,.2,1)",
                }}
                loading="lazy"
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
