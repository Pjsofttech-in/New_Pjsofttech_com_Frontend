import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Chip,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import image1 from "../images/shipment-gif.gif";
import phone from "../images/student-info-detail.png";
import shipment from "../images/dashboard-shipment.png";
import dashboard1 from "../images/Shipment-Dashboard-1.png"
import dashboard2 from "../images/Shipment-Monthly-Dashboard-2.png"
import dashboard3 from "../images/Shipment-Yearly-Dashboard-3.png"
import styles from "./ShippmentManagementSystem.module.css";

const theme = createTheme({
  palette: {
    primary: { main: "rgba(52, 152, 219, 1)" },
    secondary: { main: "#FFBF00" },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    button: { textTransform: "none" },
  },
});

const groups = [
  "Dashboard",
  "Managements",
  "Settings",
  "Finance",
  "Communications",
  "Logistics",
  "Support",
  "Report & Analytics",
  "Apps",
];

const imageVariants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, type: "spring", bounce: 0.4 },
  },
};

const blogs = [
  {
    id: 1,
    title: "Order Booking",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/booking-3d-icon-png-download-8950039.png",
    group: "Logistics",
  },
  {
    id: 2,
    title: "Order Tracking",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/order-tracking-3d-icon-png-download-12247419.png",
    group: "Logistics",
  },
  {
    id: 3,
    title: "Order Messaging",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/message-3d-icon-png-download-5576258.png",
    group: "Communications",
  },
  {
    id: 4,
    title: "Shipment Scheduling",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6Q8LaPW_irj-czczUCPXoTzBLQxKsjO2BQ&s",
    group: "Logistics",
  },
  {
    id: 5,
    title: "Delivery Route Optimization",
    image: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
    group: "Logistics",
  },
  {
    id: 6,
    title: "Inventory Management",
    image: "https://png.pngtree.com/png-clipart/20250207/original/pngtree-inventory-management-software-featuring-3d-icon-isolated-on-a-transparent-background-png-image_20375453.png",
    group: "Managements",
  },
  {
    id: 7,
    title: "Customer Database",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/data-3d-icon-png-download-7232746.png",
    group: "Managements",
  },
  {
    id: 8,
    title: "Invoice Generation",
    image: "https://static.vecteezy.com/system/resources/thumbnails/028/114/979/small_2x/invoice-3d-rendering-isometric-icon-png.png",
    group: "Finance",
  },
  {
    id: 9,
    title: "Payment Integration",
    image: "https://img.freepik.com/free-vector/bill-receipt-credit-card-3d-illustration-cartoon-drawing-paper-sheet-with-dollar-symbol-credit-card-3d-style-white-background-business-payment-finances-transaction-concept_778687-705.jpg",
    group: "Finance",
  },
  {
    id: 10,
    title: "Return Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/return-box-3d-icon-png-download-6629438.png",
    group: "Logistics",
  },
  {
    id: 11,
    title: "Delivery Confirmation",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/delivery-confirmation-3d-icon-png-download-12569591.png",
    group: "Logistics",
  },
  {
    id: 12,
    title: "Reporting and Analytics",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/data-analytics-3d-icon-png-download-6149163.png",
    group: "Support",
  },
  {
    id: 13,
    title: "User Access Control",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/access-control-3d-icon-png-download-9899131.png",
    group: "Support",
  },
  {
    id: 14,
    title: "Mobile Accessibility",
    image: "https://cdn-icons-png.flaticon.com/512/8462/8462282.png",
    group: "Apps",
  },
  {
    id: 15,
    title: "Multi-Language Support",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/login-password-3d-icon-png-download-9693509.png",
    group: "Support",
  },
  {
    id: 16,
    title: "Notification Alerts",
    image: "https://cdn-icons-png.flaticon.com/512/1827/1827270.png",
    group: "Communications",
  },
  {
    id: 17,
    title: "Customer Feedback Collection",
    image: "https://cdn-icons-png.flaticon.com/512/2920/2920290.png",
    group: "Communications",
  },
  {
    id: 18,
    title: "Integration with Other Systems",
    image: "https://cdn-icons-png.flaticon.com/512/4206/4206329.png",
    group: "Apps",
  },
  {
    id: 19,
    title: "Customizable Templates",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTszDXNeUDqWNXudNtoloBdclmwWO7hjEaJjA&s",
    group: "Support",
  },
  {
    id: 20,
    title: "Audit Trail",
    image: "https://cdn-icons-png.flaticon.com/512/3719/3719813.png",
    group: "Support",
  },
  {
    id: 21,
    title: "Shipment Management App",
    image:
      "https://img.freepik.com/free-photo/3d-render-smartphone-black-hands-with-finger_107791-17739.jpg",
    group: "Apps",
  },
  {
    id: 22,
    title: "Daily Shipment Count Dashboard",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-icon-png-download-3930409.png",
    group: "Dashboard",
  },
  {
    id: 23,
    title: "Monthly Shipment Count Dashboard",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/online-report-3d-icon-png-download-4884473.png",
    group: "Dashboard",
  },
  {
    id: 24,
    title: "Yearly Shipment Count Dashboard",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/online-video-tutorial-3d-icon-png-download-8746901.png",
    group: "Dashboard",
  },
  {
    id: 26,
    title: "Order Management",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmox_93TWFXvJwPgeW2_GsoZVwpgN4NoBlLQ&s",
    group: "Managements",
  },
  {
    id: 27,
    title: "Transport Management",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjXi2C1K9-JOhH3Zv7bouPKJQJqvpUYUcQig&s",
    group: "Managements",
  },
  {
    id: 28,
    title: "Shipment Management",
    image:
      "https://thumbs.dreamstime.com/b/delivery-logistics-concept-courier-isometric-d-icon-freight-shipping-warehouse-management-delivery-transportation-vector-106265641.jpg",
    group: "Managements",
  },
  {
    id: 29,
    title: "Generate Product",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYgPsWAmYhDkTja3xVNQ7QYX7PYafix8CKA&s",
    group: "Settings",
  },
  {
    id: 30,
    title: "Product Management",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/product-3d-icon-png-download-8646279.png",
    group: "Settings",
  },
  {
    id: 31,
    title: "Generate Product Type",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/product-3d-icon-png-download-8330395.png",
    group: "Settings",
  },
  {
    id: 32,
    title: "Vendor Management",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/wholesaler-3d-icon-png-download-9628101.png",
    group: "Settings",
  },
  {
    id: 33,
    title: "Send By Shipment",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf52lLAqLqHQqC8Ae3tLl36al2FrUjHHAYYA&s",
    group: "Settings",
  },
  {
    id: 34,
    title: "Employee By Shipment",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/employee-3d-icon-png-download-9394772.png",
    group: "Settings",
  },
  {
    id: 35,
    title: "Generate New Transport Report",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlGxBQIEZahE4_5xo5rK_8PX8YXTzokcbbg&s",
    group: "Settings",
  },
  {
    id: 36,
    title: "Generate New Order",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/order-3d-icon-png-download-6557333.png",
    group: "Settings",
  },
  {
    id: 37,
    title: "Shipment Management",
    image: "https://cdn3d.iconscout.com/3d/premium/preview/supply-chain-management-3d-icon-png-download-8330363.png?f=webp&h=700",
    group: "Settings",
  },
  {
    id: 38,
    title: "Shipment Report",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/delivery-report-3d-icon-png-download-7311179.png",
    group: "Settings",
  },
  {
    id: 39,
    title: "Generate New Shipment Form",
    image: "https://img.freepik.com/premium-photo/delivery-man-hand-package-icon-3d-rendering-isolated-background_150525-3336.jpg",
    group: "Settings",
  },
  {
    id: 40,
    title: "Shipment List Reporting",
    image: "https://cdn-icons-png.flaticon.com/512/10473/10473656.png",
    group: "Report & Analytics",
  },
  {
    id: 41,
    title: "Shipment Conduct Reporting",
    image: "https://static.vecteezy.com/system/resources/previews/046/680/407/non_2x/3d-report-icon-report-symbol-3d-free-png.png",
    group: "Report & Analytics",
  },
  {
    id: 42,
    title: "Shipment Sourses Reporting",
    image: "https://static.vecteezy.com/system/resources/previews/046/680/425/non_2x/3d-report-icon-report-symbol-3d-free-png.png",
    group: "Report & Analytics",
  },
  {
    id: 43,
    title: "Shipment Courses Reporting",
    image: "https://static.vecteezy.com/system/resources/thumbnails/047/666/837/small/business-planning-business-object-illustration-3d-png.png",
    group: "Report & Analytics",
  },
  {
    id: 44,
    title: "Shipment Feedback Reporting Analytics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsJ058P7MPoAdMN-nF3vj46nFUo35dwwo7Q&s",
    group: "Report & Analytics",
  },
  {
    id: 45,
    title: "Shipment Task Reporting Analytics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61xKylgS10ddLCbPG7MLHebCHIeE53UTO-w&s",
    group: "Report & Analytics",
  },





];
const dashboardData = [
  {
    title: "Daily Shipment Count Dashboard",
    desc: "The Daily Lead Count Dashboard provides a clear picture of the leads generated on a day-to-day basis. It helps businesses closely monitor their daily performance, identify peak hours of lead generation, and quickly act on any sudden drops in numbers. This real-time visibility is especially valuable for tracking the effectiveness of ongoing campaigns, advertisements, or short-term promotions.",
    img: dashboard1,
  },
  {
    title: "Monthly Shipment Count Dashboard",
    desc: "The Monthly Lead Count Dashboard consolidates leads generated throughout the month and highlights growth trends compared to previous months. It enables businesses to track monthly targets, analyze marketing effectiveness, and plan resources more efficiently. Seasonal or campaign-driven variations also become more visible in this view, making it easier to understand customer behavior patterns.",
    img: dashboard2,
  },
  {
    title: "Yearly Shipment Count Dashboard",
    desc: "The Yearly Lead Dashboard categorizes leads based on their origin, such as website inquiries, social media ads, referrals, walk-ins, agents, or QR code scans. By identifying the most effective lead sources, businesses can optimize their marketing spend, maximize ROI, and focus on the channels that bring in the highest-quality leads. This breakdown ensures better decision-making for campaign planning and channel prioritization.",
    img: dashboard3,
  },

];

export const subfeatures = [
  {
    title: "Real-Time Shipment Tracking",
    detail: "Track shipments in real time with GPS integration, providing accurate location updates and estimated delivery times.",
    image: "https://cdn-icons-png.flaticon.com/512/2930/2930016.png"
  },
  {
    title: "Automated Notifications",
    detail: "Send automated SMS and email notifications to customers and staff about shipment status, delays, and delivery confirmations.",
    image: "https://cdn-icons-png.flaticon.com/512/1827/1827270.png"
  },
  {
    title: "Delivery Route Optimization",
    detail: "Optimize delivery routes for drivers to reduce fuel costs and improve delivery efficiency.",
    image: "https://cdn-icons-png.flaticon.com/512/854/854878.png"
  },
  {
    title: "Order Management",
    detail: "Manage all shipment orders from booking to delivery, including returns and cancellations.",
    image: "https://cdn-icons-png.flaticon.com/512/9423/9423667.png"
  },
  {
    title: "Customer Database",
    detail: "Maintain a comprehensive database of customers for personalized service and repeat business.",
    image: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
  },
  {
    title: "Invoice Generation",
    detail: "Automatically generate invoices for each shipment and integrate with accounting systems.",
    image: "https://cdn-icons-png.flaticon.com/512/2886/2886661.png"
  },
  {
    title: "Return Management",
    detail: "Handle product returns efficiently, updating inventory and processing refunds or exchanges.",
    image: "https://cdn-icons-png.flaticon.com/512/4257/4257484.png"
  },
  {
    title: "Reporting & Analytics",
    detail: "Generate detailed reports on shipment performance, delivery times, and customer satisfaction.",
    image: "https://cdn-icons-png.flaticon.com/512/1296/1296907.png"
  }
];

const ShippmentManagementSystem = () => {
  const [selectedGroup, setSelectedGroup] = useState("Dashboard");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleGroupChange = (group) => {
    setSelectedGroup(group);
    AOS.refresh();
  };

  const filteredBlogs = blogs.filter((blog) => blog.group === selectedGroup);

  return (
    <ThemeProvider theme={theme}>
      {/* Hero Section */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            {/* Left Content Section */}
            <Grid item xs={12} md={6} data-aos="fade-right">
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  color: "#3498DB",
                  mb: 2,
                  fontSize: { xs: 28, md: 38 },
                }}
              >
                Shipment Management <span style={{ color: "#FFBF00" }}>System</span>
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
              >
                <b>Optimize and automate</b> your logistics operations with our
                advanced Shipment Management System. Manage <b>orders, dispatches,
                  tracking, fleet,</b> and <b>delivery performance</b> — all from a single
                centralized dashboard. Ensure faster deliveries, minimize errors,
                and enhance customer satisfaction with real-time visibility across
                your entire supply chain.
                <br /><br />
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                <Chip label="Real-Time Tracking" color="primary" />
                <Chip label="Smart Dispatching" color="secondary" />
                <Chip
                  label="Paperless Operations"
                  sx={{ background: "#e1bee7", color: "#333" }}
                />
              </Box>
            </Grid>

            {/* Right Image Section */}
            <Grid item xs={12} md={6} data-aos="fade-left">
              <motion.img
                src={image1.src} // replace with a logistics/shipment-related image
                alt="Shipment Management System"
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "contain",
                  borderRadius: "16px",
                  boxShadow: "0 8px 32px rgba(52,152,219,0.10)",
                }}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0px 8px 24px rgba(52,152,219,0.18)",
                }}
                whileTap={{ scale: 0.97 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Description Section */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#3498DB",
                marginBottom: "20px",
              }}
            >
              <span style={{ color: "#2874A6" }}>A</span> Complete Solution for
              Shipment & Logistics Management
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#555",
                lineHeight: "1.8",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              The Shipment Management System streamlines and automates all
              shipment and logistics processes for organizations. It covers
              shipment creation, real-time tracking, delivery scheduling,
              communication, reporting, and analytics, ensuring transparency and
              efficiency for both staff and customers.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Key Features Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #fff 0%, #fef9e7 100%)",
          display: "flex",
          textAlign: "center",
          marginBottom: "40px",
          padding: "40px 0",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#3498DB",
              marginBottom: "40px",
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -8,
                height: "4px",
                width: "100%",
                background: "linear-gradient(90deg, #3498DB 0%, 100%)",
                borderRadius: "2px",
              },
            }}
          >
            Key Features
          </Typography>

          {/* Filter Buttons */}
          <Box className="text-center mb-4">
            {groups.map((group) => (
              <Button
                key={group}
                onClick={() => handleGroupChange(group)}
                variant={selectedGroup === group ? "contained" : "outlined"}
                sx={{
                  margin: "5px",
                  borderRadius: "20px",
                  textTransform: "none",
                  backgroundColor:
                    selectedGroup === group ? "#FFBF00" : "transparent",
                  color: selectedGroup === group ? "#fff" : "#3498DB",
                  borderColor: "#3498DB",
                  "&:hover": {
                    backgroundColor:
                      selectedGroup === group ? "#e6ac00" : "#FFBF00",
                    color: "#fff",
                    borderColor: "#3498DB",
                  },
                }}
              >
                {group}
              </Button>
            ))}
          </Box>

          {/* Feature Cards */}
          <Grid container spacing={4}>
            {filteredBlogs.map((blog, i) => (
              <Grid item xs={12} sm={6} md={3} key={blog.id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.5,
                    type: "spring",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Card
                    sx={{
                      boxShadow: "0px 4px 20px rgba(255, 191, 0, 0.3)",
                      border: "2px solid  #3498DB",
                      borderRadius: "12px",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      height: "100%",
                      backgroundColor: "#fffbea",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={blog.image}
                      alt={blog.title}
                      sx={{
                        height: "80px",
                        objectFit: "contain",
                        margin: "30px auto 0",
                      }}
                    />
                    <CardContent>
                      <Typography
                        sx={{
                          textAlign: "center",
                          color: "#333",
                          fontSize: "14px",
                          borderTop: "1px solid #3498DB",
                          paddingTop: "12px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "normal",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {blog.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <div className={styles.container2}>
        {/* Left Section: Phone Mockup */}
        <div className={styles.phoneMockup} data-aos="fade-right">
          <img
            className={styles.img22}
            src={phone.src}
            alt="Shipment Management Mobile"
          />
        </div>

        {/* Right Section: Benefits */}
        <motion.div
          className={styles.benefitsSection}
          data-aos="fade-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className={styles.heading}>
            Benefits of{" "}
            <span className={styles.highlight}>Shipment Management System</span>
          </h1>
          <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

          <ul className={styles.benefitList}>
            <li>
              <b>Shipment Scheduling:</b> Plan and schedule deliveries to optimize
              timelines and minimize delays.
            </li>
            <li>
              <b>Order Messaging:</b> Enable real-time communication and order updates
              for improved coordination.
            </li>
            <li>
              <b>Delivery Route Optimization:</b> Identify the most efficient delivery
              routes to save time and reduce costs.
            </li>
            <li>
              <b>Customer Database:</b> Maintain detailed customer records to support
              personalized service and repeat business.
            </li>
            <li>
              <b>Invoice Generation:</b> Automatically generate invoices for orders to
              streamline billing and payment.
            </li>
            <li>
              <b>Return Management:</b> Handle returns efficiently by updating
              inventory and processing refunds or replacements quickly.
            </li>
            <li>
              <b>Customizable Reports:</b> Generate detailed reports on shipment
              performance, delivery status, and financials.
            </li>
            <li>
              <b>Integration with Other Systems:</b> Seamlessly connect with ERP,
              accounting, and logistics systems for unified operations.
            </li>
            <li>
              <b>Customizable Templates:</b> Use and modify templates for invoices,
              labels, and communications to match your branding.
            </li>
            <li>
              <b>Audit Trail:</b> Maintain a transparent record of all activities for
              accountability and compliance.
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Shipment Dashboard Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: "linear-gradient(120deg, #3498DB 60%, #FFBF00 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              mb: 4,
              textAlign: "center",
              textShadow: "0 2px 8px rgba(0,0,0,0.18)",
              fontSize: { xs: "2rem", md: "2.8rem" },
              letterSpacing: 1,
            }}
          >
            <span style={{ color: "#FFBF00" }}>Shipment</span> Management System Dashboards
          </Typography>

          <Typography
            sx={{
              color: "#fff",
              opacity: 0.92,
              fontSize: { xs: "1.1rem", md: "1.2rem" },
              mb: 6,
              textAlign: "center",
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Visualize your entire school operations at a glance. Track academics,
            attendance, exams, and staff performance with interactive, real-time
            dashboards—empowering you to make data-driven decisions and boost
            productivity.
          </Typography>

          {/* Full-width Card with Slider */}
          <Box
            sx={{
              background: "#fff",
              borderRadius: 4,
              boxShadow: "0 4px 24px rgba(52,152,219,0.10)",
              p: 3,
              textAlign: "center",
              maxWidth: "100%",
              mx: "auto",
            }}
          >
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{ delay: 3000 }}
              loop
            >
              {dashboardData.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <Box>
                    <Box
                      component="img"
                      src={item.img.src || item.img}
                      alt={item.title}
                      sx={{
                        width: "100%",
                        height: { xs: 220, md: 400 },
                        objectFit: "contain",
                        borderRadius: 2,
                        mb: 2,
                        background: "#fafdff",
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{ color: "#3498DB", fontWeight: "bold", mb: 1 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#444", fontSize: "1rem" }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(90deg, #FFBF00 0%, #3498DB 100%)",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: 3,
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                boxShadow: "0 2px 8px rgba(52,152,219,0.13)",
                "&:hover": {
                  background: "linear-gradient(90deg, #3498DB 0%, #FFBF00 100%)",
                },
              }}
              onClick={() => window.open("https://pjsofttech.in/superadminclient")}
            >
              Explore Live Dashboards
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Shipment Management & SMS Section */}
      <Box sx={{ padding: "40px 20px" }}>
        <Container>
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{ marginBottom: "40px" }}
          >
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#3498DB",
                    marginBottom: "20px",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <span>Shipment Management</span>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    lineHeight: "1.8",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  A Shipment Management System (SMS) serves as a centralized
                  platform for organizations to efficiently manage all shipments
                  and logistics operations. It encompasses functionalities
                  including shipment creation, real-time tracking, delivery
                  scheduling, communication, and analytics.
                  <br />
                  <br />
                  SMS often integrates with ERP and inventory tools, offering
                  customization options to adapt to the specific needs of each
                  business. Overall, it plays a vital role in streamlining
                  shipment handling, improving delivery rates, and enhancing
                  customer satisfaction.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.img
                src="https://www.lpcloudlabs.com/assets/images/bg/logistics.gif"
                alt="Shipment Management"
                style={{
                  width: "100%",
                  maxWidth: 340,
                  height: "auto",
                  maxHeight: 260,
                  objectFit: "contain",
                  borderRadius: "10px",
                  display: "block",
                  margin: "0 auto",
                }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0px 8px 24px rgba(52,152,219,0.18)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{ marginBottom: "40px" }}
          >
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <motion.img
                // src="https://assets-v2.lottiefiles.com/a/2681c568-1188-11ee-b933-53168cfaa024/ednXx8k3Un.gif"
                src="https://www.poweredbyasl.com/s/HomePage_V3.gif"
                alt="Shipment Information System"
                style={{
                  width: "100%",
                  maxWidth: 380,
                  height: "auto",
                  maxHeight: 380,
                  objectFit: "contain",
                  borderRadius: "10px",
                  display: "block",
                  margin: "0 auto",
                }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0px 8px 24px rgba(52,152,219,0.18)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
              />
            </Grid>

            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#3498DB",
                    marginBottom: "20px",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <span style={{ color: "#2874A6" }}>Shipment</span> Information
                  System
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    lineHeight: "1.8",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  A Shipment Information System is a robust platform designed to
                  manage and maintain comprehensive shipment and logistics data
                  throughout the delivery journey. It enables organizations to
                  securely store and access shipment records, tracking logs,
                  delivery history, and more. The system streamlines shipment
                  processing, supports analytics, and empowers teams to make
                  informed decisions, ensuring timely deliveries and improved
                  customer experience.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Subfeatures Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            color="#3498DB"
            mb={6}
            sx={{
              "& span::after": {
                content: '""',
                display: "block",
                width: "100%",
                height: "4px",
                marginTop: "4px",
              },
            }}
          >
            <span style={{ display: "inline-block", position: "relative" }}>
              Sub Features
            </span>{" "}
            of Shipment Management System
          </Typography>

          <Grid container spacing={4}>
            {subfeatures.map((item, idx) => (
              <Grid item xs={12} md={6} key={item.title}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 60 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: idx * 0.1,
                    duration: 0.55,
                    type: "spring",
                    bounce: 0.3,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  style={{
                    background: "#f5faff",
                    borderLeft: `6px solid ${theme.palette.secondary.main}`,
                    borderRadius: 12,
                    padding: 24,
                    display: "flex",
                    gap: 20,
                  }}
                >
                  <motion.img
                    src={item.image.src || item.image}
                    alt={item.title}
                    initial={{ rotate: -10 }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                    }}
                    style={{
                      width: 56,
                      height: 56,
                      objectFit: "contain",
                      flexShrink: 0,
                    }}
                  />

                  <div>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="primary"
                      mb={0.5}
                    >
                      {item.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {item.detail}
                    </Typography>
                  </div>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>


    </ThemeProvider>
  );
};

export default ShippmentManagementSystem;
