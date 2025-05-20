"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { journals } from "@/lib/journals";

export default function JournalCarousel() {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const maxSteps = Object.keys(journals).length;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  // Auto play functionality
  useEffect(() => {
    let timer;
    if (autoPlay) {
      timer = setInterval(() => {
        handleNext();
      }, 10000); // Change slide every 5 seconds
    }
    return () => {
      clearInterval(timer);
    };
  }, [autoPlay, activeStep]);

  // Pause autoplay when user interacts with carousel
  const handleInteraction = () => {
    setAutoPlay(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoPlay(true), 4000);
  };

  const journalKeys = Object.keys(journals);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 300, sm: 400, md: 500 },
        overflow: "hidden",
        mb: 3,
      }}
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
      onClick={handleInteraction}
      onTouchStart={handleInteraction}
    >
      {/* Carousel slides */}
      {journalKeys.map((key, index) => (
        <Box
          key={key}
          sx={{
            transition: "opacity 1s ease-in-out",
            opacity: index === activeStep ? 1 : 0,
            pointerEvents: index === activeStep ? "auto" : "none",
          }}
        >
          <Image
            key={key}
            src={journals[key].image}
            alt={journals[key].title}
            fill // this makes the image take the full size of its container
            style={{ objectFit: "cover" }}
          />
        </Box>
      ))}

      {/* Navigation arrows */}
      <Button
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          bgcolor: "#274F3B",
          p: { xs: 0.5, sm: 1 },
          minWidth: { xs: 30, sm: 40 },
          height: { xs: 30, sm: 40 },
          borderRadius: "0 4px 4px 0",
          "&:hover": {
            bgcolor: "#274F3B",
          },
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleBack();
        }}
      >
        <Typography sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}>
          ‹
        </Typography>
      </Button>

      <Button
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          bgcolor: "#274F3B",
          p: { xs: 0.5, sm: 1 },
          minWidth: { xs: 30, sm: 40 },
          height: { xs: 30, sm: 40 },
          borderRadius: "4px 0 0 4px",
          "&:hover": {
            bgcolor: "#274F3B",
          },
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
      >
        <Typography sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}>
          ›
        </Typography>
      </Button>

      {/* Dots indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {journalKeys.map((_, index) => (
          <Box
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              handleStepChange(index);
            }}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor: index === activeStep ? "white" : "#274F3B",
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": {
                transform: "scale(1.2)",
                bgcolor: index === activeStep ? "white" : "#274F3B",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
