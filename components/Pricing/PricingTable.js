import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import RemoveIcon from "@mui/icons-material/Remove";

const pricingData = {
  title: "Product Management and Catalog",
  features: [
    {
      name: "WhatsApp Message",
      description: "Facilitates to provide the message,which is sent to the customer.",
      values: [true, true, true, true]
    },
    {
      name: "Bulk Message",
      description: "Send a message to multiple contacts without creating a group.",
      values: [true, true, true, true]
    },
    {
      name: "Barcode Scanner",
      description: "A barcode scanner is a device or software that  retrieve encoded information.",
      values: [true, true, true, true]
    },
    {
      name: "Staff Account",
      description: "A staff account is a user account created for employees within a system organization",
      values: [true, true, true, true]
    },
    {
      name: "Cloud Storage",
      description: " It provides scalability, security, and accessibility from any device.",
      values: [true, true, true, true]
    },
    {
      name: "Dynamic Website",
      description: "Unlike static websites, which display fixed content, dynamic sites can update automatically.",
      values: [true, true, true, true]
    },
    {
      name: "Bulk Catalog Operations",
      description: "Facilitates mass changes to the catalog, saving time on bulk operations.",
      values: [true, true, true, true]
    },
    {
      name: "Inventory Management",
      description: "Manages stock levels, preventing overselling and stockouts.",
      values: [true, true, true, true]
    },
    {
      name: "Discounts & Coupons",
      description: "Creates promotional offers with discounts and coupons to attract customers.",
      values: [true, true, true, true]
    },
    {
      name: "Pjsofttech Service Features",
      description: "Pjsofttech charges a service fee on sales made through the platform. Not applicable for manual orders.",
      values: ["4.00%", "3.00%", "1.00%", "0.99%"]
    },
    {
      name: "Platform access",
      description: "Grants varying levels of access to the platform for different user roles.",
      values: [true, true, true, true]
    },
    {
      name: "Custom Domain",
      description: "Lets you personalize your store with a custom domain name.",
      values: [false, true, true, true]
    },
    {
      name: "Price List / B2B Support",
      description: "Supports differentiated pricing structures for wholesale or B2B transactions.",
      values: [false, false, false, false]
    },
      {
        name: "Multi-Store",
        description: "Manages multiple storefronts from a single platform, ideal for diverse product lines.",
        values: [1, 1, 3, 10]
      },
     
      {
        name: "Digital products",
        description: "Supports the sale of digital goods like ebooks, music, and software.",
        values: [false, false, true, true]
      },
      {
        name: "Product filters and attributes",
        description: "Enhances product searchability with filters and specific attributes.",
        values: [true, true, true, true]
      },
      {
        name: "Duplicate orders",
        description: "Allows for easy duplication of orders, streamlining repeat purchases.",
        values: [false, false, true, true]
      },
  ],
  headers: ["Feature", "Free", "Basic", "Premium", "Business"]
};  

const PricingTable = () => {
  return (
    <Box
    sx={{
      width: "100%",
      pl: { xs: 2, sm: 4, md: 10, lg: 20 }, 
      pr: { xs: 2, sm: 4, md: 10, lg: 20 },
      pb: 8,
    }}
  >
      <Typography variant="h5" fontWeight="bold" fontFamily="Poppins, sans-serif" mb={2}>
        {pricingData.title}
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {pricingData.headers.map((header, index) => (
                <TableCell key={index} sx={{ fontWeight: "bold",fontSize:"18px" ,fontFamily:"Poppins, sans-serif", textAlign: index === 0 ? "left" : "center" }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {pricingData.features.map((feature, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography fontWeight="bold" fontFamily="Poppins, sans-serif">{feature.name}</Typography>
                  <Typography variant="body2" color="textSecondary" fontFamily="Poppins, sans-serif">
                    {feature.description}
                  </Typography>
                </TableCell>
                {feature.values.map((value, i) => (
                  <TableCell key={i} align="center">
                    {typeof value === "boolean" ? (value ? <CheckIcon sx={{ color: "black" }} /> : <RemoveIcon sx={{ color: "gray" }} />) : value}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PricingTable;
