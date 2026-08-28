import React from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMenu, setOpenMenu] = React.useState("");

  const handleMenuOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu("");
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ padding: "10px 40px" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left: Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src="https://th.bing.com/th/id/OIP.3vJMDL6nyWPN0PzcXqKHPQAAAA?rs=1&pid=ImgDetMain" alt="Logo" style={{ marginRight: 8 }} height={'140px'}  />
          {/* <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
            dukaan
          </Typography> */}
          {/* <sup style={{ fontSize: "10px", marginLeft: "2px" }}>®</sup> */}
        </Box>

        {/* Center: Navigation Links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          {["Products", "Company", "Resources"].map((item) => (
            <Box key={item}>
              <Button
                color="inherit"
                onClick={(event) => handleMenuOpen(event, item)}
                endIcon={<ArrowDropDownIcon />}
                sx={{ color: "#000", textTransform: "none", fontSize: "16px" }}
              >
                {item}
              </Button>
              <Menu anchorEl={anchorEl} open={openMenu === item} onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose}>{item} Option 1</MenuItem>
                <MenuItem onClick={handleMenuClose}>{item} Option 2</MenuItem>
              </Menu>
            </Box>
          ))}
          <Button color="inherit" sx={{ color: "#000", textTransform: "none", fontSize: "16px" }}>
            Pricing
          </Button>
        </Box>

        {/* Right: Sign In & Start Free Button */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button color="inherit" sx={{ color: "#000", textTransform: "none", fontSize: "16px" }}>
            Sign in
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0070F3",
              color: "#fff",
              textTransform: "none",
              fontSize: "16px",
              padding: "6px 20px",
              borderRadius: "8px",
            }}
          >
            Start free
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
