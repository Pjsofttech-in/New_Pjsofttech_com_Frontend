import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const plans = [
  { name: "Free", price: "₹0", highlight: false },
  { name: "Basic", price: "₹5,000/month", highlight: false },
  { name: "Premium", price: "₹10,000/month", highlight: true },
  { name: "Business", price: "₹50,000/month", highlight: false },
];

const Features = () => {
  return (
    <Box sx={{ textAlign: "center", p: 5 }}>
      {/* Title */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 ,fontFamily:"Poppins, sans-serif"}}>
        Compare plans and features
      </Typography>

      {/* Pricing Grid */}
      <Grid container spacing={5} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item key={index}>
            <Typography variant="h6" fontWeight="bold" fontFamily="Poppins, sans-serif">
              {plan.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 ,fontFamily:"Poppins, sans-serif"}}>
              {plan.price}
            </Typography>
            <Button
              variant={plan.highlight ? "contained" : "outlined"}
              color="primary"
              sx={{ borderRadius: "8px", fontWeight: "bold", minWidth: "140px",fontFamily:"Poppins, sans-serif" }}
            >
              Get started
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
