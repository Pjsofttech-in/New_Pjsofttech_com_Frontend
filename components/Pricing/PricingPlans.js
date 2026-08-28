import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Box,
  Divider,
  Link,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useNavigate } from "../../router-compat";


  
//Monthly Yearly Plan Data
const plansData = {
  monthly: [
    {
      name: "Free",
      price: "â‚¹0",
      features: [
        "Income / Expense",
        "Cloud Storing",
        "24/7 Support",
        "Digital ID cards",
        "Employee Mobile App",
        "Student Management System",
        "Employee Management System",
        "1k WhatsApp Messaging (Monthly)",
        "Bulk Message",
        "Admin App",
        "Dynamic Website",
        "Cloud Storage",
        "Staff Account",
        "Barcode Scanner",
        "Order Whatsapp Alert",
      ],
      highlight: false,
    },
    {
      name: "Basic",
      title: "For small businesses and influencers.",
      price: "â‚¹1,000/month",
      oldPrice: "â‚¹400",
      features: [
        "Income / Expense",
        "Cloud Storing",
        "24/7 Support",
        "Digital ID cards",
        "Employee Mobile App",
        "Student Management System",
        "Employee Management System",
        "1k WhatsApp Messaging (Monthly)",
        "Bulk Message",
        "Admin App",
        "Dynamic Website",
        "Cloud Storage",
        "Staff Account",
        "Barcode Scanner",
        "Order Whatsapp Alert",
      ],
      highlight: false,
      discount: "-50%",
    },
    {
      name: "Premium",
      title: "For medium businesses and influencers.",
      price: "â‚¹2,000/month",
      oldPrice: "â‚¹500",
      features: [
        "Cloud Storing",
        "Sub Admin",
        "Cloud Storing",
        "No hidden charges",
        "Digital ID cards",
        "Employee Mobile App",
        "Admission Management System",
        "Project Management System",
        "EBook Management System",
        "Shipment System",
        "Fees Management System",
        "1k WhatsApp Messaging (Monthly)",
        "Bulk Message",
        "Admin App",
        "Dynamic Website",
        "Cloud Storage",
        "Staff Account",
        "Barcode Scanner",
        "Order Whatsapp Alert",
      ],
      highlight: true,
      discount: "-50%",
    },
    {
      name: "Business",
      title: "For large businesses and influencers.",
      price: "â‚¹10,000/month",
      oldPrice: "â‚¹1,399",
      features: [
        "Unlimited Entries (Yearly)",
        "Income / Expense",
        "Multiple Branches",
        "Digital ID cards",
        "Sub Admin",
        "Employee Mobile App",
        "Inquiry Management System",
        "Employee Management System",
        "1k WhatsApp Messaging (Monthly)",
        "Bulk Message",
        "Admin App",
        "Dynamic Website",
        "Cloud Storage",
        "Staff Account",
        "Barcode Scanner",
        "Order Whatsapp Alert",
      ],
      highlight: false,
      discount: "-50%",
    },
  ],
  yearly: [
    {
      name: "Free",
      price: "â‚¹0",
      features: [
        "Income / Expense",
        "Cloud Storing",
        "24/7 Support",
        "Digital ID cards",
        "Employee Mobile App",
        "Student Management System",
        "Employee Management System",
        "1k WhatsApp Messaging (Monthly)",
        "Bulk Message",
        "Admin App",
        "Dynamic Website",
        "Cloud Storage",
        "Staff Account",
        "Barcode Scanner",
        "Order Whatsapp Alert",
      ],
      highlight: false,
    },
    {
      name: "Basic",
      title: "For small businesses and influencers.",
      price: "â‚¹5,000/year",
      oldPrice: "â‚¹1,399",
      features: [
        "Income / Expense",
        "Cloud Storing",
        "24/7 Support",
        "Digital ID cards",
        "Employee Mobile App",
        "1k WhatsApp Messaging (Monthly)",
        "Bulk Message",
        "Admin App",
        "Dynamic Website",
        "Cloud Storage",
        "Staff Account",
        "Barcode Scanner",
        "Order Whatsapp Alert",
      ],
      highlight: false,
      discount: "-50%",
    },
    {
      name: "Premium",
      title: "For medium businesses and influencers.",
      price: "â‚¹10,000/year",
      oldPrice: "â‚¹1,499",
      features: [
        "Cloud Storing",
        "Sub Admin",
        "Cloud Storing",
        "No hidden charges",
        "Digital ID cards",
        "Employee Mobile App",
        "1k WhatsApp Messaging (Monthly)",
        "Bulk Message",
        "Admin App",
        "Dynamic Website",
        "Cloud Storage",
        "Staff Account",
        "Barcode Scanner",
        "Order Whatsapp Alert",
      ],
      highlight: true,
      discount: "-50%",
    },
    {
      name: "Business",
      title: "For large businesses and influencers.",
      price: "â‚¹50,000",
      oldPrice: "â‚¹14,000",
      features: [
        "10 Online Stores",
        "20 Staff Accounts",
        "20 Warehouses",
        "1k WhatsApp Messaging (Monthly)",
        "Bulk Message",
        "Admin App",
        "Dynamic Website",
        "Cloud Storage",
        "Staff Account",
        "Barcode Scanner",
        "Order Whatsapp Alert",
      ],
      highlight: false,
      discount: "-50%",
    },
  ],
};

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState("yearly");
  const [selectedPlan, setSelectedPlan] = useState("Growth");
  const [expandedPlan, setExpandedPlan] = useState(null);
  const navigate = useNavigate();


  const handleBillingChange = (event, newCycle) => {
    if (newCycle !== null) setBillingCycle(newCycle);
  };

  const handlePlanClick = (planName) => {
    setSelectedPlan(planName);
  };

  const handleShowMoreClick = (planName) => {
    setExpandedPlan(expandedPlan === planName ? null : planName);
  };

  const handleClick = () => {
    navigate('/login-page'); // route path, not file path
  };


  return (
    <>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        sx={{ mt: 5, fontFamily: "Poppins, sans-serif" }}
      >
        Choose Your Success Path With Pjsofttech Flexible Pricing
      </Typography>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* Toggle Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <ToggleButtonGroup
            value={billingCycle}
            exclusive
            onChange={handleBillingChange}
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: "20px",
              p: 0.5,
            }}
          >
            <ToggleButton
              value="monthly"
              sx={{
                borderRadius: "20px",
                px: 3,
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
              }}
            >
              Monthly
            </ToggleButton>
            <ToggleButton
              value="yearly"
              sx={{
                borderRadius: "20px",
                px: 3,
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif",
                backgroundColor:
                  billingCycle === "monthly" ? "#1565c0" : "transparent",
                color: billingCycle === "Yearly" ? "yellow" : "inherit",
                "&:hover": { backgroundColor: "#1565c0", color: "#fff" },
              }}
            >
              Yearly{" "}
              <Typography
                variant="body2"
                sx={{
                  ml: 1,
                  fontSize: "0.8rem",
                  opacity: 0.8,
                  fontWeight: "bold",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                (UPTO 50% OFF)
              </Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Pricing Plans */}
        <Grid
          container
          spacing={3}
          sx={{ mt: 3, marginBottom: "40px" }}
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {plansData[billingCycle].map((plan, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              style={{ display: "flex" }}
            >
              <Paper
                elevation={plan.highlight ? 6 : 2}
                sx={{
                  p: 3,
                  textAlign: "center",
                  border:
                    selectedPlan === plan.name ? "2px solid #f4b400" : "none",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontFamily: "Poppins, sans-serif",
                  backgroundColor:
                    selectedPlan === plan.name ? "#e8ba30" : "#e8ba30",
                }}
                onClick={() => handlePlanClick(plan.name)}
              >
                {plan.discount && (
                  <Box
                    sx={{
                      backgroundColor: "#FFCC80",
                      p: 1,
                      borderRadius: "10px",
                      fontWeight: "bold",
                      display: "inline-block",
                      fontWeight: "bold",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {plan.discount}
                  </Box>
                )}
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    mt: 2,
                    fontWeight: "bold",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {plan.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  fontFamily="Poppins, sans-serif"
                >
                  {plan.title}
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mt: 2, fontFamily: "Poppins, sans-serif" }}
                >
                  {plan.price}
                </Typography>
                {plan.oldPrice && (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                      textDecoration: "line-through",
                      fontWeight: "bold",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {plan.oldPrice}
                  </Typography>
                )}

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleClick}
                  sx={{
                    mt: 2,
                    fontWeight: "bold",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Get Started
                </Button>

                <Divider sx={{ my: 2 }} />
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  fontFamily="Poppins, sans-serif"
                >
                  Whatâ€™s included:
                </Typography>
                {plan.features
                  .slice(
                    0,
                    expandedPlan === plan.name ? plan.features.length : 3
                  )
                  .map((feature, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      color="textSecondary"
                      fontFamily="Poppins, sans-serif"
                    >
                      â€¢ {feature}
                    </Typography>
                  ))}
                <Link
                  href="#"
                  underline="hover"
                  sx={{
                    display: "block",
                    mt: 1,
                    fontWeight: "bold",
                    mt: "auto",
                    fontFamily: "Poppins, sans-serif",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleShowMoreClick(plan.name);
                  }}
                >
                  {expandedPlan === plan.name
                    ? "Show less features â†"
                    : "Show more features â†’"}
                </Link>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default PricingPlans;

