import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "400px",
        borderRadius: "16px",
        textAlign: "left",
        padding: "40px",
        background: "linear-gradient(135deg, #dcb1ff, #ffda9e)",
        color: "#000",
      }}
    >
      <Container maxWidth="sm">
        <Box display="flex" alignItems="center" mb={2}>
          <Typography
            variant="h4"
            fontWeight="bold"
            fontFamily="popins sans-serif"
          >
            <LocalMallIcon
              style={{
                verticalAlign: "middle",
                marginRight: 8,
                height: "60px",
                width: "80px",
              }}
            />
            Pjsofttech
          </Typography>
        </Box>
        <Typography
          variant="h4"
          fontWeight="bold"
          fontFamily="popins sans-serif"
          gutterBottom
        >
          Chase your dreams. <br /> Start your online store.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#333", mb: 3, fontFamily: "popins sans-serif" }}
        >
          Take your business online with Pjsofttech. Get your free online store
          in 30 seconds.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "10px 20px",
            fontWeight: "bold",
            fontFamily: "popins sans-serif",
            "&:hover": { backgroundColor: "#333" },
          }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
