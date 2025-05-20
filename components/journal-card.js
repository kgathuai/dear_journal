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
import herWealth from "../public/images/heartandtruth.png";
import hearttruth from "../public/images/general.png";
import general from "../public/images/_DSC0030.png";

const books = [
  {
    title: "Heart & Truth journal",
    description:
      "Guided Bible study journal for growth, reflection, revelation, and connection.",
    image: hearttruth,
    type: "heart-and-truth",
  },
  {
    title: "Daily Goals & Grace",
    description:
      "Purposeful journal aligning goals, routines, faith, gratitude, and progress tracking.",
    image: general,
    type: "daily-goals-grace",
  },
  {
    title: "Her Wealth Journal",
    description:
      "48-week journal empowering women through faith, finance, growth, and freedom.",
    image: herWealth,
    type: "her-wealth",
  },
];

export default function OurJournal() {
  const router = useRouter();

  return (
    <>
      {books.map((book) => (
        <Card key={book.title} sx={{ maxWidth: 345, margin: 2 }}>
          <CardMedia component="div" sx={{ height: 140, position: "relative" }}>
            <Image
              src={book.image}
              alt={book.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {book.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {book.description}
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              size="small"
              sx={{ backgroundColor: "#274F3B", color: "white" }}
            >
              Learn less
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
