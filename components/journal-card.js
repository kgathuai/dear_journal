"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function DearJournal({ title, description, image, type }) {
  const router = useRouter();

  return (
    <Card
      key={title}
      sx={{
        maxWidth: 345,
        margin: 2,
        height: 420,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="div"
        sx={{
          height: 240,
          minHeight: 240,
          maxHeight: 240,
          position: "relative",
          overflow: "hidden",
          p: 0, // remove padding
          m: 0, // remove margin
          display: "block",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          sizes="(max-width: 345px) 100vw, 345px"
        />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #274F3B 60%, #4CAF50 100%)",
            color: "#fff",
            fontWeight: 600,
            borderRadius: 2,
            px: 2,
            py: 0.5,
            boxShadow: 1,
            textTransform: "none",
            fontSize: 15,
            letterSpacing: 0.3,
            minWidth: 0,
            transition: "background 0.2s, transform 0.2s",
            '&:hover': {
              background: "linear-gradient(90deg, #4CAF50 60%, #274F3B 100%)",
              color: "#fff",
              transform: "scale(1.04)",
              boxShadow: 2,
            },
          }}
          onClick={() => router.push(`/journals/${type}`)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
