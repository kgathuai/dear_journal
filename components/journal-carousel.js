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
  const journalKeys = Object.keys(journals);
  const maxSteps = journalKeys.length;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Carousel navigation
  const handleNext = () => setActiveStep((prev) => (prev + 1) % maxSteps);
  const handleBack = () =>
    setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);
  const handleStepChange = (step) => setActiveStep(step);

  // Auto play functionality
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(handleNext, 7000);
    return () => clearInterval(timer);
  }, [autoPlay, activeStep]);

  // Pause autoplay on interaction
  const handleInteraction = () => {
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 4000);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        height: { xs: 220, sm: 360, md: 480, lg: 600 },
        overflow: "hidden",
        mb: { xs: 1, sm: 4 },
        mt: { xs: 0, sm: 0 },
        background: "linear-gradient(120deg, #f8faf9 60%, #e0f2f1 100%)",
        borderRadius: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: 0,
      }}
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
      onClick={handleInteraction}
      onTouchStart={handleInteraction}
      tabIndex={0}
      aria-label="Journal carousel"
      role="region"
    >
      {/* Carousel slides */}
      {journalKeys.map((key, index) => (
        <Box
          key={key}
          sx={{
            transition: "opacity 1s cubic-bezier(.4,0,.2,1)",
            opacity: index === activeStep ? 1 : 0,
            pointerEvents: index === activeStep ? "auto" : "none",
            position: "absolute",
            top: { xs: 0, sm: 8 },
            left: 0,
            width: "100%",
            height: "100%",
            boxShadow: index === activeStep ? 8 : 0,
            overflow: "hidden",
            zIndex: index === activeStep ? 2 : 1,
            display: "flex",
            alignItems: "flex-end",
            background: "#f8faf9",
            borderRadius: 0,
            mt: { xs: 0, sm: 2 },
            pt: { xs: 0, sm: 2 },
          }}
        >
          <Image
            src={journals[key].image}
            alt={journals[key].title}
            fill
            style={{ objectFit: "contain", filter: "brightness(0.93)" }}
            sizes="100vw"
            priority={index === activeStep}
          />
        </Box>
      ))}

      {/* Navigation arrows */}
      <Button
        sx={{
          position: "absolute",
          left: 4,
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          bgcolor: "#274F3B",
          p: 0.5,
          minWidth: 28,
          height: 28,
          borderRadius: "50%",
          boxShadow: 2,
          zIndex: 10,
          display: { xs: "none", sm: "flex" },
          "&:hover": { bgcolor: "#4CAF50" },
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleBack();
        }}
        aria-label="Previous Journal"
      >
        <Typography sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>
          ‹
        </Typography>
      </Button>
      <Button
        sx={{
          position: "absolute",
          right: 4,
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          bgcolor: "#274F3B",
          p: 0.5,
          minWidth: 28,
          height: 28,
          borderRadius: "50%",
          boxShadow: 2,
          zIndex: 10,
          display: { xs: "none", sm: "flex" }, // Hide arrows on xs for touch
          "&:hover": { bgcolor: "#4CAF50" },
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        aria-label="Next Journal"
      >
        <Typography sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>
          ›
        </Typography>
      </Button>

      {/* Dots indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 1,
          zIndex: 12,
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
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: index === activeStep ? "#4CAF50" : "#274F3B",
              border:
                index === activeStep
                  ? "2px solid #fff"
                  : "2px solid transparent",
              cursor: "pointer",
              transition: "all 0.3s",
              boxShadow: index === activeStep ? 3 : 0,
              "&:hover": {
                transform: "scale(1.15)",
                bgcolor: "#4CAF50",
              },
            }}
            aria-label={`Go to slide ${index + 1}`}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleStepChange(index);
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
