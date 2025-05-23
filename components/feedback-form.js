"use client";

import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { sendFeedback } from "@/app/actions";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    journalType: "",
    message: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const result = await sendFeedback(formData);

      if (result?.success) {
        setSnackbar({
          open: true,
          message: "Feedback sent successfully! Thank you.",
          severity: "success",
        });
        setFormData({
          name: "",
          email: "",
          journalType: "",
          message: "",
        });
      } else {
        throw new Error(result?.error || "Failed to send feedback.");
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.message || "Failed to send feedback. Please try again.",
        severity: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />

          <FormControl fullWidth required>
            <InputLabel>Journal Type</InputLabel>
            <Select
              name="journalType"
              value={formData.journalType}
              onChange={handleChange}
              label="Journal Type"
            >
              <MenuItem value="academic">Her Wealth</MenuItem>
              <MenuItem value="personal">Heart & Truth</MenuItem>
              <MenuItem value="bullet">Daily goals & Grace</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Your Feedback"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            fullWidth
            required
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 2, background: "#274F3B" }}
            disabled={submitting}
          >
            {submitting ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Submit Feedback"
            )}
          </Button>
        </Box>
      </form>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Paper>
  );
}
