import React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const featuresList = [
  "Custom Themes & 3rd party integrations",
  "20+ Additional Plugins",
  "B2B or B2C Marketplace",
  "Vendor Management Dashboard",
  "Marketplace Integration",
  "Custom Shipping Rules",
  "Dedicated Support",
];

const Enterprises = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        borderRadius: "12px",
        overflow: "hidden",
        maxWidth: "1000px",
        mx: "auto",
        boxShadow: 2,
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flex: 1,
          background: "linear-gradient(135deg, #FFCDD2, #FFF9C4)",
          p: 4,
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          fontFamily="Poppins, sans-serif"
          gutterBottom
        >
          Pjsofttech Enterprise
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 3, fontFamily: "Poppins, sans-serif" }}
        >
          Scale your D2C business on Pjsofttech’s lightning-fast infrastructure with
          custom-built features.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "6px",
            px: 3,
            py: 1,
            textTransform: "none",
            fontFamily:"Poppins, sans-serif",
            "&:hover": { backgroundColor: "#333",fontFamily:"Poppins, sans-serif" },
          }}
        >
          Get in touch
        </Button>
        <Typography
          component="a"
          href="#"
          sx={{
            ml: 2,
            textDecoration: "underline",
            color: "black",
            cursor: "pointer",
            fontWeight: "bold",
            display: "inline-block",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Learn More
        </Typography>
      </Box>

      {/* Right Section */}

      <Box sx={{ flex: 1, backgroundColor: "#FFECB3", p: 4 }}>
        <List>
          {featuresList.map((feature, index) => (
            <ListItem key={index} disableGutters>
              <Typography sx={{ mr: 1 }}>✨</Typography>
              <ListItemText
                primary={feature}
                primaryTypographyProps={{
                  sx: { fontFamily: "Poppins, sans-serif" },
                }}npm 
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Enterprises;
