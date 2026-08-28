import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import SpeedIcon from "@mui/icons-material/Speed";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const paymentIcons = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png", alt: "Visa" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg", alt: "Mastercard" },
  
];

const features = [
  {
    icon: <LockIcon fontSize="large" />,
    bgColor: "#D6ECFF",
    title: "Secure Payments",
    description: "Your information is protected by strong data encryption technology.",
  },
  {
    icon: <SpeedIcon fontSize="large" />,
    bgColor: "#FFF3CF",
    title: "Blazing Fast",
    description: "Turbo-charged performance to boost your conversions",
  },
  {
    icon: <CreditCardIcon fontSize="large" />,
    bgColor: "#D8F3DC",
    title: "Accepted Payments",
    description: "",
  },
  {
    icon: <CreditCardIcon fontSize="large" />,
    bgColor: "#D8F3DC",
    title: "Aws Cloud",
    description: "Turbo-charged performance to boost your conversions",
  },
];

const Payments = () => {
  return (
    <Box sx={{ maxWidth: "1000px", mx: "auto", p: 2, marginTop: "80px", marginBottom: "80px"}}>
      <Grid container spacing={4} alignItems="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={3} key={index} display="flex" alignItems="center">
            <Avatar
              sx={{
                bgcolor: feature.bgColor,
                width: 50,
                height: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {feature.icon}
            </Avatar>
            <Box sx={{ ml: 2 }}>
              <Typography fontWeight="bold" fontFamily="popins sans-serif">{feature.title}</Typography>
              {feature.description && (
                <Typography variant="body2" color="textSecondary" fontFamily="popins sans-serif">
                  {feature.description}
                </Typography>
              )}
              {index === 2 && (
                <Box sx={{ display: "flex", mt: 1 }}>
                  {paymentIcons.map((icon, idx) => (
                    <img key={idx} src={icon.src} alt={icon.alt} style={{ width: 40, marginRight: 8 }} />
                  ))}
                </Box>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Payments;
