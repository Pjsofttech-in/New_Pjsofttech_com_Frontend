import React from "react";
import { Box, Container, Grid, Typography, Link, Divider } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import LocalMallIcon from '@mui/icons-material/LocalMall';

const footerLinks = [
  {
    title: "Business tools",
    links: [
      "Dukaan for PC",
      "Dukaan delivery",
      "Dukaan plugins",
      "Dukaan themes",
      "Dukaan enterprise",
    ],
  },
  {
    title: "Awards '22",
    links: ["Help center", "Blog", "Banned items"],
  },
  {
    title: "About",
    links: ["Privacy", "Terms", "Contact", "FAQs"],
  },
  {
    title: "Jobs",
    links: ["Branding", "Press inquiry", "Bug bounty"],
  },
];

const socialLinks = [
  { icon: <Facebook />, label: "Facebook" },
  { icon: <Twitter />, label: "Twitter" },
  { icon: <LinkedIn />, label: "LinkedIn" },
];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#121212", color: "#fff", py: 6 }}>
      <Container>
        <Grid container spacing={4} justifyContent="space-between">
          {/* Logo Section */}
          <Grid item xs={12} sm={2}>
            <Typography variant="h5" fontWeight="bold">
              <LocalMallIcon
                style={{ verticalAlign: "middle", marginRight: 8, height: "60px", width: "80px" }}
              />
              dukaan
            </Typography>
          </Grid>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <Grid item xs={6} sm={2} key={index}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                {section.title}
              </Typography>
              {section.links.map((link, idx) => (
                <Typography key={idx} variant="body2" sx={{ mb: 0.8 }}>
                  <Link href="#" color="inherit" underline="none">
                    {link}
                  </Link>
                </Typography>
              ))}
            </Grid>
          ))}

          {/* Social Media Links */}
          <Grid item xs={6} sm={2}>
            {socialLinks.map((social, idx) => (
              <Typography key={idx} variant="body2" sx={{ display: "flex", alignItems: "center", mb: 0.8 }}>
                {social.icon}
                <Link href="#" color="inherit" underline="none" sx={{ ml: 1 }}>
                  {social.label}
                </Link>
              </Typography>
            ))}
          </Grid>
        </Grid>

        <Divider sx={{ backgroundColor: "#333", my: 4 }} />

        {/* Bottom Section */}
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="body2">
            Growthpond Technology Pvt Ltd. All rights reserved, 2025.
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography variant="body2" sx={{ mr: 1 }}>
              Made in
            </Typography>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
              alt="India Flag"
              width="24"
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
