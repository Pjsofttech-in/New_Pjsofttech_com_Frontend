import React from "react";
import { Box, Typography, Grid, Paper, Link } from "@mui/material";

// Sample plugin icons and labels
const plugins = [
  { icon: "📊", name: "Google Analytics" },
  { icon: "📘", name: "Facebook Pixel" },
  { icon: "📢", name: "Google Ads" },
  { icon: "🔧", name: "Custom Code" },
  { icon: "💬", name: "Live Chat" },
  { icon: "🏷️", name: "Product Tagging" },
  { icon: "🛠️", name: "Store Toolkit" },
];

const PluginSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "40vh", // Centers vertically
        backgroundColor: "#f0f2f5", // Optional background color
      }}
    >
      <Paper
        elevation={2}
        sx={{
          borderRadius: "12px",
          width: "1000px",
          p: 3,
          background: "linear-gradient(135deg, #E3F2FD, #FFFFFF)",
        }}
      >
        {/* Title & Description */}
        <Typography variant="h5" fontWeight="bold">
          Dukaan In-built Plugins!
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
          Dukaan's built-in plugins are included in the plans, providing everything that your business needs.
        </Typography>

        {/* Plugin Icons Grid */}
        <Grid container spacing={2} alignItems="center">
          {plugins.slice(0, 6).map((plugin, index) => (
            <Grid item key={index}>
              <Box
                sx={{
                  fontSize: "2rem",
                  p: 1.5,
                  borderRadius: "8px",
                  backgroundColor: "#FFF",
                  boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                {plugin.icon}
              </Box>
            </Grid>
          ))}
          {/* "View More" Link */}
          <Grid item>
            <Link href="#" underline="hover" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
              + View {plugins.length - 6} more
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default PluginSection;
