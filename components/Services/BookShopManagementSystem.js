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
import Slider from "react-slick";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import phone from "../images/student-info-detail.png";
import image1 from "../images/GIF IMAGES/Bookshop-gif.jpeg"
import dashboard1 from "../images/leaddashboard1.png";
import dashboard2 from "../images/LeadDashboard2.png";
import dashboard3 from "../images/leaddashboard3.png";
import styles from "./BookShopManagementSystem.module.css";

const dashboardImages = [dashboard1, dashboard2, dashboard3];

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
};

const theme = createTheme({
  palette: {
    primary: { main: "#3498DB" },
    secondary: { main: "#FFBF00" },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    button: { textTransform: "none" },
  },
});

const groups = [
  "Customers",
  "Inventory",
  "Analytics",
  "Marketing",
  "Books",
  "Orders",
  "Reports",
  "Support",
  "Apps",
];

const blogs = [
  {
    id: 1,
    title: <span style={{ fontSize: "16px" }}>Book Catalog</span>,
    image: "https://cdn-icons-png.flaticon.com/512/29/29302.png",
    group: "Books",
  },
  {
    id: 2,
    title: <span style={{ fontSize: "16px" }}>Order Management</span>,
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
    group: "Orders",
  },
  {
    id: 3,
    title: <span style={{ fontSize: "16px" }}>Customer Database</span>,
    image:
      "https://img.freepik.com/premium-psd/3d-file-data-user-account-icon-illustration_148391-1081.jpg",
    group: "Customers",
  },
  {
    id: 4,
    title: <span style={{ fontSize: "16px" }}>Inventory Tracking</span>,
    image: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
    group: "Inventory",
  },
  {
    id: 5,
    title: <span style={{ fontSize: "16px" }}>Sales Analytics</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3209/3209265.png",
    group: "Analytics",
  },
  {
    id: 6,
    title: <span style={{ fontSize: "16px" }}>24*7 Support</span>,
    image: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
    group: "Support",
  },
  {
    id: 7,
    title: <span style={{ fontSize: "16px" }}>Mobile Bookshop App</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    group: "Apps",
  },
  {
    id: 8,
    title: (
      <span style={{ fontSize: "16px" }}>Discount & Coupon Management</span>
    ),
    image: "https://cdn-icons-png.flaticon.com/512/10473/10473656.png",
    group: "Marketing",
  },

  {
    id: 9,
    title: <span style={{ fontSize: "16px" }}>Order Reports</span>,
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
    group: "Reports",
  },
];
const dashboardData = [
  {
    title: "Daily Lead Dashboard",
    desc: "The Daily Lead Count Dashboard provides a clear picture of the leads generated on a day-to-day basis. It helps businesses closely monitor their daily performance, identify peak hours of lead generation, and quickly act on any sudden drops in numbers. This real-time visibility is especially valuable for tracking the effectiveness of ongoing campaigns, advertisements, or short-term promotions.",
    img: dashboard1,
  },
  {
    title: "Yearly/Monthly Lead Dashboard",
    desc: "The Monthly/Monthly Lead Count Dashboard consolidates leads generated throughout the month and highlights growth trends compared to previous months. It enables businesses to track monthly targets, analyze marketing effectiveness, and plan resources more efficiently. Seasonal or campaign-driven variations also become more visible in this view, making it easier to understand customer behavior patterns.",
    img: dashboard2,
  },
  {
    title: "Source / Course-Wise Lead Dashboard",
    desc: "The Source / Course-Wise Lead Dashboard categorizes leads based on their origin, such as website inquiries, social media ads, referrals, walk-ins, agents, or QR code scans. By identifying the most effective lead sources, businesses can optimize their marketing spend, maximize ROI, and focus on the channels that bring in the highest-quality leads. This breakdown ensures better decision-making for campaign planning and channel prioritization.",
    img: dashboard3,
  },

];

const subfeatures = [
  {
    title: "Automated Inventory Updates",
    detail:
      "Track book stock levels in real-time and get alerts for low inventory to avoid stockouts.",
    image: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
  },
  {
    title: "Order & Delivery Tracking",
    detail:
      "Monitor order status, shipping, and delivery for better customer satisfaction.",
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
  },
  {
    title: "Customer Segmentation",
    detail:
      "Segment customers based on purchase history and behavior for targeted marketing.",
    image:
      "https://img.freepik.com/premium-psd/3d-file-data-user-account-icon-illustration_148391-1081.jpg",
  },
  {
    title: "Sales Analytics & Reporting",
    detail:
      "Get actionable insights with customizable sales reports, dashboards, and trend analysis.",
    image: "https://cdn-icons-png.flaticon.com/512/3209/3209265.png",
  },
  {
    title: "Mobile Bookshop App",
    detail:
      "Empower your customers to browse and buy books on the go with a secure mobile app.",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Discount & Coupon Management",
    detail:
      "Create and manage promotional offers, discounts, and coupons easily.",
    image: "https://cdn-icons-png.flaticon.com/512/10473/10473656.png",
  },
];

const imageVariants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, type: "spring", bounce: 0.4 },
  },
};

const BookShopManagementSystem = () => {
  const [selectedGroup, setSelectedGroup] = useState("Books");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleGroupChange = (group) => {
    setSelectedGroup(group);
    AOS.refresh();
  };

  const filteredBlogs = blogs.filter((blog) => blog.group === selectedGroup);

  return (
    <>
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
                  Bookshop <span style={{ color: "#FFBF00" }}>Management System</span>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
                >
                  <b>Organize, manage, and sell</b> books effortlessly with our
                  Bookshop Management System. Handle inventory, track sales, manage
                  suppliers, and streamline billing — all through an intuitive and
                  user-friendly dashboard.
                  <br />
                  <br />
                  Simplify your daily operations, maintain accurate stock levels,
                  and deliver a smooth shopping experience for your customers both
                  online and offline.
                </Typography>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                  <Chip label="Inventory Tracking" color="primary" />
                  <Chip label="Sales & Billing" color="secondary" />
                  <Chip
                    label="Customer Management"
                    sx={{ background: "#e1bee7", color: "#333" }}
                  />
                </Box>
              </Grid>

              {/* Right Image Section */}
              <Grid item xs={12} md={6} data-aos="fade-left">
                <motion.img
                  src={image1.src} // replace with a bookstore or inventory dashboard image
                  alt="Bookshop Management System"
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
                <span style={{ color: "#2874A6" }}>A</span> Complete Solution
                for BookShop & Inventory Management
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
                The BookShop Management System streamlines and automates all
                bookshop processes for businesses. It covers book management,
                order processing, customer communication, reporting, and
                analytics, ensuring transparency and efficiency for both shop
                owners and customers.
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
                        image={blog.image.src || blog.image}
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
          {/* Left: Phone Mockup */}
          <div className={styles.phoneMockup} data-aos="fade-right">
            <img
              className={styles.img22}
              src={phone.src}
              alt="BookShop Management Mobile"
            />
          </div>

          {/* Right: Benefits Section */}
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
              <span className={styles.highlight}>BookShop Management System</span>
            </h1>
            <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

            <ul className={styles.benefitList}>
              <li>
                <b>Centralized BookShop Administration:</b> Manage books, customers,
                and transactions from a unified digital dashboard.
              </li>
              <li>
                <b>Automated Inventory Management:</b> Tracks stock levels, updates
                quantities automatically, and simplifies order fulfillment.
              </li>
              <li>
                <b>Accurate Order Tracking:</b> Monitors orders, invoices, and
                delivery status in real-time for transparency.
              </li>
              <li>
                <b>Streamlined Customer Communication:</b> Integrated notifications
                and email updates for seamless customer engagement.
              </li>
              <li>
                <b>Comprehensive Sales Reporting:</b> Generate reports for sales
                trends, revenue, and inventory turnover insights.
              </li>
              <li>
                <b>Mobile Accessibility:</b> Access and manage your bookstore from
                any device, anytime.
              </li>
              <li>
                <b>Data Security:</b> Protects sensitive data with encryption and
                secure role-based access.
              </li>
            </ul>
          </motion.div>
        </div>

        {/*Bookshop Dashboard*/}
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
              <span style={{ color: "#FFBF00" }}>Bookshop</span> Management System
              Dashboards
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

        {/* BookShop Management & BMS Section */}
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
                    <span> BookShop Management </span>
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      lineHeight: "1.8",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    A BookShop Management System (BMS) serves as a centralized
                    platform for businesses to efficiently manage bookshop
                    operations. It encompasses functionalities including book
                    management, order processing, inventory tracking, customer
                    support, and analytics.
                    <br />
                    <br />
                    BMS often integrates with other ERP and CRM systems and
                    offers customization options to adapt to the specific needs
                    of each business. Overall, it plays a vital role in
                    streamlining bookshop administration, improving sales, and
                    enhancing customer satisfaction.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.img
                  src="https://hrsoftbd.com/assets/servicePhoto/_20210901170743.gif"
                  alt="BookShop Management"
                  style={{
                    width: "100%",
                    maxWidth: 340,
                    height: "auto",
                    maxHeight: 260,
                    objectFit: "contain",
                    borderRadius: "10px",
                    display: "block",
                    margin: "0 auto",
                    scale: 1.04,
                    boxShadow: "24px 24px 14px rgba(52,152,219,0.18)",
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
                  src="https://cdnl.iconscout.com/lottie/premium/thumb/preteen-girl-doing-homework-on-library-floor-12631274-10284446.gif"
                  alt="BookShop Information System"
                  style={{
                    width: "100%",
                    maxWidth: 340,
                    height: "auto",
                    maxHeight: 260,
                    objectFit: "contain",
                    borderRadius: "10px",
                    display: "block",
                    margin: "0 auto",
                    scale: 1.04,
                    boxShadow: "24px 24px 14px rgba(52,152,219,0.18)",
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
                    <span style={{ color: "#2874A6" }}>BookShop</span>{" "}
                    Information System
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      lineHeight: "1.8",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    A BookShop Information System is a robust platform designed
                    to manage and maintain comprehensive bookshop data
                    throughout the customer lifecycle. It enables businesses to
                    securely store and access book records, order histories,
                    customer details, and more. The system streamlines bookshop
                    processing, supports analytics, and empowers teams to make
                    informed decisions, ensuring timely order fulfillment and
                    improved customer relationships.
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
              of BookShop Management System
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
    </>
  );
};

export default BookShopManagementSystem;
