"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../public/images/newlogo.png";
import Footer from "./footer";
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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          my: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BookIcon sx={{ mr: 1 }} />
        <Typography variant="h6">Journal Collection</Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={NextLink}
              href={item.path}
              sx={{
                textAlign: "center",
                bgcolor:
                  pathname === item.path
                    ? "rgba(25, 118, 210, 0.08)"
                    : "transparent",
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1, m: 0 }}>
      <AppBar position="static" sx={{ px: "60px", backgroundColor: "#274F3B" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Image src={logo} height={73} width={85} />
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={NextLink}
                href={item.path}
                sx={{
                  color: "#fff",
                  mr: "4px",
                  bgcolor:
                    pathname === item.path
                      ? "rgba(255, 255, 255, 0.12)"
                      : "transparent",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.2)",
                  },
                }}
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
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
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
  return <Box component="main">{children}</Box>;
}
