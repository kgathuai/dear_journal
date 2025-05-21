import React, { useState, useEffect } from "react";
import { Tooltip, useMediaQuery } from "@mui/material";
import { usePathname } from "next/navigation";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box } from "@mui/system";

function WhatsAppButton({ phoneNumber }) {
  const [open, setOpen] = useState(true);
  const [isSpanVisible, setIsSpanVisible] = useState(true);
  const isMobile = useMediaQuery("(max-width:768px)");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";
  const showTooltip = pathname === "/";

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = () => {
      setIsSpanVisible(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <Box
      style={{
        position: "fixed",
        right: isMobile ? "4%" : "3%", // Move to right
        bottom: isMobile ? "3%" : "5%", // Remain close to footer
        zIndex: 1000,
        marginLeft: isMobile ? " " : undefined,
      }}
    >
      {showTooltip && (
        <Tooltip
          title={
            isSpanVisible && (
              <div style={{ position: "relative", padding: "5px" }}>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  style={{
                    width: "10px",
                    height: "10px",
                    position: "absolute",
                    color: "black",
                    backgroundColor: "white",
                    top: "-9px",
                    right: "-9px",
                    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <CloseIcon
                    style={{
                      fontSize: "17px",
                      padding: "2px",
                      fontWeight: "bolder",
                    }}
                  />
                </IconButton>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingRight: "0px",
                  }}
                >
                  <span
                    style={{
                      marginBottom: "4px",
                      whiteSpace: "nowrap",
                      zIndex: 999,
                    }}
                  >
                    Chat With Us
                  </span>
                </div>
              </div>
            )
          }
          placement="right"
          arrow
          open={open}
        >
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
              window.open(whatsappUrl);
            }}
            sx={{
              backgroundColor: "#1ebe5f",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              padding: "20px",
              "&:hover": {
                backgroundColor: "#17a957",
              },
            }}
          >
            <WhatsAppIcon
              sx={{
                color: "white",
                height: isMobile ? "50px" : "55px",
                width: isMobile ? "50px" : "55px",
                padding: "4px",
              }}
            />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
}

export default WhatsAppButton;
