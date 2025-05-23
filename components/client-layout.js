"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../public/images/newlogo.png";
import Footer from "./footer";
import WhatsAppButton from "./whats-app";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon, Book as BookIcon } from "@mui/icons-material";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

export function ClientHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", bgcolor: "#274F3B", height: "100%" }}
    >
      <Image src={logo} alt="logo" height={60} width={70} />

      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={NextLink}
              href={item.path}
              sx={{
                textAlign: "center",
                borderRadius: 2,
                mx: 1,
                my: 0.5,
                bgcolor:
                  pathname === item.path
                    ? "rgba(255,255,255,0.10)"
                    : "transparent",
                fontWeight: pathname === item.path ? 700 : 500,
                color: "#fff",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.18)",
                  color: "#FFD700",
                },
              }}
            >
              <ListItemText
                primary={item.name}
                sx={{ textAlign: "center", color: "inherit" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1, m: 0 }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          px: { xs: 1, sm: 2, md: 8 },
          py: { xs: 0, sm: 0.5 },
          background: "#274F3B",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          boxShadow: "0 2px 12px 0 rgba(0,0,0,0.07)",
        }}
      >
        <Toolbar disableGutters sx={{ minHeight: { xs: 56, sm: 80 } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: "none" }, p: 1 }}
            size="large"
          >
            <MenuIcon sx={{ fontSize: 28 }} />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Box
              component={NextLink}
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                borderRadius: 2,
                px: 1.5,
                py: 0.5,
                boxShadow: 2,
                transition: "box-shadow 0.2s",
                "&:hover": { boxShadow: 0 },
              }}
            >
              <Image
                src={logo}
                alt="logo"
                height={64}
                width={80}
                style={{
                  borderRadius: 12,
                  marginRight: 10,
                  padding: 4,
                  maxHeight: 64,
                  width: "auto",
                  height: "auto",
                }}
                priority
              />
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={NextLink}
                href={item.path}
                disableElevation
                sx={{
                  color: pathname === item.path ? "#FFD700" : "#fff",
                  fontWeight: pathname === item.path ? 700 : 500,
                  fontSize: 16,
                  borderRadius: 3,
                  px: 2,
                  py: 1,
                  bgcolor:
                    pathname === item.path
                      ? "rgba(255, 215, 0, 0.13)"
                      : "transparent",
                  boxShadow: pathname === item.path ? 2 : 0,
                  textTransform: "none",
                  letterSpacing: 0.5,
                  transition: "background 0.2s, color 0.2s",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.18)",
                    color: "#FFD700",
                  },
                }}
                tabIndex={0}
                aria-current={pathname === item.path ? "page" : undefined}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 220,
            borderTopRightRadius: 14,
            borderBottomRightRadius: 14,
            boxShadow: 6,
            pt: 2,
            bgcolor: "#274F3B",
          },
        }}
        aria-label="Site navigation menu"
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export function ClientFooter() {
  return <Footer />;
}

export function ClientMain({ children }) {
  return (
    <>
      <Box component="main">{children}</Box>
      <WhatsAppButton phoneNumber="254758808026" />
    </>
  );
}
