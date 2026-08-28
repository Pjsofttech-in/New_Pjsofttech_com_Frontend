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
import ecommerceGif from "../images/ecommerce.gif";
import dashboard1 from "../images/leaddashboard1.png";
import dashboard2 from "../images/LeadDashboard2.png";
import dashboard3 from "../images/leaddashboard3.png";
import styles from "./EcommerceManagementSystem.module.css";
;
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
  "Marketing",
  "Inventory",
  "Products",
  "Orders",
  "Customers",
  "Analytics",
  "Reports",
  "Support",
  "Apps",
];

const blogs = [
  {
    id: 1,
    title: <span style={{ fontSize: "16px" }}>Product Catalog</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/product-list-3d-icon-download-in-png-blend-fbx-gltf-file-formats--checklist-shopping-e-commerce-pack-icons-9863226.png",
    group: "Products",
  },

  {
    id: 2,
    title: <span style={{ fontSize: "16px" }}>Order Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/inventory-management-3d-icon-download-in-png-blend-fbx-gltf-file-formats--software-stock-control-warehouse-tracking-product-pack-e-commerce-shopping-icons-10958653.png",
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
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Bcg5gm9N2ge4bPbA46n6NB9HgxMAivprfNYlOw_ClpukvfywiJxd6KtPKlt3gSs569Q&usqp=CAU",
    group: "Inventory",
  },
  {
    id: 5,
    title: <span style={{ fontSize: "16px" }}>Sales Analytics</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfIFb6UGxj2VEXOU4FzzUTUIaNxu2fqhF5g&s",
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
    title: <span style={{ fontSize: "16px" }}>Mobile Ecommerce App</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-t6CEKsTYcgbDlMV0AIlBt_bCh416SKWKug&s",
    group: "Apps",
  },
  {
    id: 8,
    title: (
      <span style={{ fontSize: "16px" }}>Discount & Coupon Management</span>
    ),
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/discount-coupon-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--vouchers-voucher-e-commerce-pack-shopping-illustrations-3337563.png",
    group: "Marketing",
  },
  {
    id: 9,
    title: <span style={{ fontSize: "16px" }}>Order Reports</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/report-3d-icon-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-chart-graph-business-pack-finance-icons-5665049.png",
    group: "Reports",
  },
  {
    id: 10,
    title: <span style={{ fontSize: "16px" }}>Customer Insights</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlkGb7ddy2qCvZRZt-ZzuQtTXdZo1Fa8zQGQ&s",
    group: "Reports",
  },
  {
    id: 11,
    title: <span style={{ fontSize: "16px" }}>Sales Performance</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUIXh43BqfooW0QPpiW5sZUQ_s2tvgjZR4pw&s",
    group: "Reports",
  },
  {
    id: 12,
    title: <span style={{ fontSize: "16px" }}>Inventory Reports</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/inventory-3d-icon-download-in-png-blend-fbx-gltf-file-formats--management-system-tracking-stock-product-pack-e-commerce-shopping-icons-10958665.png?f=webp",
    group: "Reports",
  },

  {
    id: 14,
    title: <span style={{ fontSize: "16px" }}>Customer Segmentation</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtNXq5vuTWM3zb_U9kYx01F7MrFL5dIMhPqg&s",
    group: "Marketing",
  },
  {
    id: 15,
    title: <span style={{ fontSize: "16px" }}>Pro motional Offers</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWoJOV_Meh5KU3Vg50J2mMofelZIK3qcVi8w&s",
    group: "Marketing",
  },
  {
    id: 16,
    title: <span style={{ fontSize: "16px" }}>Mobile App Features</span>,
    image:
      "https://thumbs.dreamstime.com/b/colorful-mobile-application-interface-design-various-icons-d-rendering-app-s-designed-easy-navigation-375395538.jpg",
    group: "Apps",
  },
  {
    id: 17,
    title: <span style={{ fontSize: "16px" }}>App Customization</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-customization-3d-icon-download-in-png-blend-fbx-gltf-file-formats--setting-maintenance-configuration-machine-learning-pack-science-technology-icons-6622082.png",
    group: "Apps",
  },
  {
    id: 18,
    title: <span style={{ fontSize: "16px" }}>App Analytics</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/infographic-3d-icon-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-diagram-investment-digital-marketing-pack-business-icons-5115854.png?f=webp",
    group: "Apps",
  },

  {
    id: 20,
    title: <span style={{ fontSize: "16px" }}>App User Experience</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQJ82rgURXL-9tMMmM8cIGT5I6nadKHhn4w&s",
    group: "Apps",
  },
  {
    id: 21,
    title: <span style={{ fontSize: "16px" }}>Inventory Management</span>,
    image:
      "https://static.vecteezy.com/system/resources/previews/025/350/872/non_2x/inventory-management-of-3d-icon-png.png",
    group: "Inventory",
  },
  {
    id: 22,
    title: <span style={{ fontSize: "16px" }}>Stock Alerts</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSYELFQb49mYqxZieV5iXzF_o8gV_1mCcfQ&s",
    group: "Inventory",
  },
  {
    id: 23,
    title: <span style={{ fontSize: "16px" }}>Supplier Management</span>,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/039/833/693/small_2x/3d-cooperation-icon-on-transparent-background-png.png",
    group: "Inventory",
  },
  {
    id: 24,
    title: <span style={{ fontSize: "16px" }}>Inventory Reports</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/inventory-3d-icon-download-in-png-blend-fbx-gltf-file-formats--management-system-tracking-stock-product-pack-e-commerce-shopping-icons-10958665.png?f=webp",
    group: "Inventory",
  },
  {
    id: 25,
    title: <span style={{ fontSize: "16px" }}>Customer Support</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/customer-support-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--helping-service-center-assistance-online-help-business-pack-people-illustrations-4487272.png?f=webp",
    group: "Support",
  },
  {
    id: 26,
    title: <span style={{ fontSize: "16px" }}>Live Chat</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpxPQGPGJ_ML55fqRpYjQEbFOSVnBpsRa6Fw&s",
    group: "Support",
  },
  {
    id: 27,
    title: <span style={{ fontSize: "16px" }}>Email Support</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/email-3d-icon-download-in-png-blend-fbx-gltf-file-formats--mail-envelope-message-letter-contact-us-pack-tech-support-icons-5523022.png?f=webp",
    group: "Support",
  },
  {
    id: 28,
    title: <span style={{ fontSize: "16px" }}>Knowledge Base</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00x4FPI9ax0kyCaEqajRqiGG3byr0HTR3euUhy2QU-1EiXO0T90g7DuTlr3miaz5IVOM&usqp=CAU",
    group: "Support",
  },
  {
    id: 29,
    title: <span style={{ fontSize: "16px" }}>Feedback & Reviews</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1P0becd-Lqzx0VeTuHMPk1orfYRvh3WOzZA&s",
    group: "Support",
  },
  {
    id: 30,
    title: <span style={{ fontSize: "16px" }}>Sales Reports</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYWGkhW0myQLo4hYMahhraLUgN9WtiI1l0A&s",
    group: "Reports",
  },
  {
    id: 31,
    title: <span style={{ fontSize: "16px" }}>Customer Insights</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzrWdbs7Bww9az3n4BPnxDMRAkkwq6o3J_g&s",
    group: "Reports",
  },
  {
    id: 33,
    title: <span style={{ fontSize: "16px" }}>Marketing Analytics</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/preview/marketing-analytics-3d-icon-download-in-png-blend-fbx-gltf-file-formats--data-analysis-statistics-advertising-pack-business-icons-8411800.png?f=webp&h=700",
    group: "Reports",
  },
  {
    id: 34,
    title: <span style={{ fontSize: "16px" }}>Performance Dashboards</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-user-analysis-account-business-marketing-pack-illustrations-3930409.png?f=webp",
    group: "Reports",
  },
  {
    id: 35,
    title: <span style={{ fontSize: "16px" }}>Marketing Campaigns</span>,
    image: "https://cdn-icons-png.flaticon.com/512/7933/7933249.png",
    group: "Marketing",
  },
  {
    id: 38,
    title: <span style={{ fontSize: "16px" }}>Email Campaigns</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHcm-dJNUEZbxGofklkh_UqgD7om-85cK3Hg&s",
    group: "Marketing",
  },
  {
    id: 39,
    title: <span style={{ fontSize: "16px" }}>Social Media Integration</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwH-mKa8D4lvfStfMXkn0roY-UUEyIWuZrbA&s",
    group: "Marketing",
  },
  {
    id: 40,
    title: <span style={{ fontSize: "16px" }}>App Customization</span>,
    image:
      "https://www.shutterstock.com/image-vector/smartphone-repair-service-3d-style-600nw-2431205925.jpg",
    group: "Apps",
  },

  {
    id: 42,
    title: <span style={{ fontSize: "16px" }}>App Security</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBDMIRB_Gru8-wqRCmW_hEc6SYJY_lrEKjTw&s",
    group: "Apps",
  },
];
const dashboardData = [
  {
    title: "Daily Ecommerce Dashboard",
    desc: "The Daily Lead Count Dashboard provides a clear picture of the leads generated on a day-to-day basis. It helps businesses closely monitor their daily performance, identify peak hours of lead generation, and quickly act on any sudden drops in numbers. This real-time visibility is especially valuable for tracking the effectiveness of ongoing campaigns, advertisements, or short-term promotions.",
    img: dashboard1,
  },
  {
    title: "Yearly/Monthly Ecommerce Dashboard",
    desc: "The Monthly/Monthly Lead Count Dashboard consolidates leads generated throughout the month and highlights growth trends compared to previous months. It enables businesses to track monthly targets, analyze marketing effectiveness, and plan resources more efficiently. Seasonal or campaign-driven variations also become more visible in this view, making it easier to understand customer behavior patterns.",
    img: dashboard2,
  },
  {
    title: "Source / Course-Wise Ecommerce Dashboard",
    desc: "The Source / Course-Wise Lead Dashboard categorizes leads based on their origin, such as website inquiries, social media ads, referrals, walk-ins, agents, or QR code scans. By identifying the most effective lead sources, businesses can optimize their marketing spend, maximize ROI, and focus on the channels that bring in the highest-quality leads. This breakdown ensures better decision-making for campaign planning and channel prioritization.",
    img: dashboard3,
  },

];

const subfeatures = [
  {
    title: "Automated Inventory Updates",
    detail:
      "Track stock levels in real-time and get alerts for low inventory to avoid stockouts.",
    image: "https://cdn-icons-png.flaticon.com/512/6797/6797273.png",
  },
  {
    title: "Order & Delivery Tracking",
    detail:
      "Monitor order status, shipping, and delivery for better customer satisfaction.",
    image: "https://cdn-icons-png.flaticon.com/512/4003/4003738.png",
  },
  {
    title: "Customer Segmentation",
    detail:
      "Segment customers based on purchase history and behavior for targeted marketing.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTM_FihezbNewiWHj7gwNTeRtXrpMlqD3bXKi7RKfmyYTsiYIL1dm-XDhDEAu7zcPVVhk&usqp=CAU",
  },
  {
    title: "Sales Analytics & Reporting",
    detail:
      "Get actionable insights with customizable sales reports, dashboards, and trend analysis.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRXxtVdRd5Wm3RCD-LOHCBmEiNiLoZ4dMnkffvC6-l1vmZWzrbzGRWd70QUZmVY7WGe8&usqp=CAU",
  },
  {
    title: "Mobile Ecommerce App",
    detail:
      "Empower your customers to shop on the go with a secure mobile app.",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055668.png",
  },
  {
    title: "Discount & Coupon Management",
    detail:
      "Create and manage promotional offers, discounts, and coupons easily.",
    image: "https://cdn-icons-png.flaticon.com/512/9368/9368410.png",
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

const EcommerceManagementSystem = () => {
  const [selectedGroup, setSelectedGroup] = useState("Products");

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
                  E-commerce <span style={{ color: "#FFBF00" }}>Management System</span>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
                >
                  <b>Manage, monitor, and grow</b> your online business efficiently with our
                  E-commerce Management System. Handle your products, orders, inventory, and
                  customers — all from a single intuitive dashboard.
                  <br />
                  <br />
                  Automate operations, gain valuable insights, and enhance customer satisfaction
                  while reducing manual workload and boosting overall sales performance.
                </Typography>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                  <Chip label="Product & Inventory Control" color="primary" />
                  <Chip label="Order Tracking & Analytics" color="secondary" />
                  <Chip
                    label="Customer Management"
                    sx={{ background: "#e1bee7", color: "#333" }}
                  />
                </Box>
              </Grid>

              {/* Right Image Section */}
              <Grid item xs={12} md={6} data-aos="fade-left">
                <motion.img
                  src={ecommerceGif.src} // replace with an e-commerce dashboard or store management image
                  alt="E-commerce Management System"
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
                for Ecommerce & Online Store Management
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
                The Ecommerce Management System streamlines and automates all
                online store processes for businesses. It covers product
                management, order processing, customer communication, reporting,
                and analytics, ensuring transparency and efficiency for both
                store owners and customers.
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
          {/* Left: Phone Mockup */}
          <div className={styles.phoneMockup} data-aos="fade-right">
            <img
              className={styles.img22}
              src={phone.src}
              alt="Ecommerce Management Mobile"
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
              <span className={styles.highlight}>Ecommerce Management System</span>
            </h1>
            <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

            <ul className={styles.benefitList}>
              <li>
                <b>Centralized Ecommerce Administration:</b> Manage all products,
                orders, and customers from a unified dashboard.
              </li>
              <li>
                <b>Automated Inventory Management:</b> Simplifies stock tracking,
                replenishment, and order fulfillment with automation.
              </li>
              <li>
                <b>Accurate Order Tracking:</b> Real-time tracking of orders,
                shipping, and delivery status for enhanced transparency.
              </li>
              <li>
                <b>Streamlined Customer Communication:</b> Send automated emails,
                notifications, and updates to customers instantly.
              </li>
              <li>
                <b>Comprehensive Sales Reporting:</b> Generate real-time analytics
                on revenue, customer trends, and product performance.
              </li>
              <li>
                <b>Mobile Accessibility:</b> Manage your entire ecommerce business
                anytime, anywhere through mobile devices.
              </li>
              <li>
                <b>Data Security:</b> Protects all business and customer data with
                advanced encryption and role-based access controls.
              </li>
            </ul>
          </motion.div>
        </div>

        {/*  Dashboard Section */}
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
              <span style={{ color: "#FFBF00" }}>Ecommerce</span> Management System
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

        {/* Ecommerce Management & EMS Section */}
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
                    <span> Ecommerce Management </span>
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      lineHeight: "1.8",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    An Ecommerce Management System (EMS) serves as a centralized
                    platform for businesses to efficiently manage online store
                    operations. It encompasses functionalities including product
                    management, order processing, inventory tracking, customer
                    support, and analytics.
                    <br />
                    <br />
                    EMS often integrates with other ERP and CRM systems and
                    offers customization options to adapt to the specific needs
                    of each business. Overall, it plays a vital role in
                    streamlining ecommerce administration, improving conversion
                    rates, and enhancing customer satisfaction.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.img
                  src="https://miro.medium.com/v2/resize:fit:1400/1*WGLqWjL48iQWHQjgok1FSQ.gif"
                  alt="Ecommerce Management"
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
                  src="https://topwebpro.co.uk/wp-content/uploads/2023/02/inventory-management.gif"
                  alt="Ecommerce Information System"
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
                    <span style={{ color: "#2874A6" }}>Ecommerce</span>{" "}
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
                    An Ecommerce Information System is a robust platform
                    designed to manage and maintain comprehensive ecommerce data
                    throughout the customer lifecycle. It enables businesses to
                    securely store and access product records, order histories,
                    customer details, and more. The system streamlines ecommerce
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
              of Ecommerce Management System
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

export default EcommerceManagementSystem;

// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Container,
//   Grid,
//   Typography,
//   Button,
//   Box,
//   useMediaQuery,
// } from "@mui/material";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { motion } from "framer-motion";
// import phone from "../images/student-info-detail.png";
// import ecommerceGif from "../images/ecommerce.gif";
// import { red } from "@mui/material/colors";

// const theme = createTheme({
//   palette: {
//     primary: { main: "#3498DB" },
//     secondary: { main: "#FFBF00" },
//   },
//   typography: {
//     fontFamily: "'Inter', sans-serif",
//     button: { textTransform: "none" },
//   },
// });

// const groups = [
//   "Marketing",
//   "Inventory",
//   "Products",
//   "Orders",
//   "Customers",
//   "Analytics",
//   "Support",
//   "Reports",
//   "Apps",
// ];

// const blogs = [
//   {
//     id: 1,
//     title: <span style={{ fontSize: "16px" }}>Product Catalog</span>,
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/product-list-3d-icon-download-in-png-blend-fbx-gltf-file-formats--checklist-shopping-e-commerce-pack-icons-9863226.png",
//     group: "Products",
//   },

//   {
//     id: 2,
//     title: <span style={{ fontSize: "16px" }}>Order Management</span>,
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/inventory-management-3d-icon-download-in-png-blend-fbx-gltf-file-formats--software-stock-control-warehouse-tracking-product-pack-e-commerce-shopping-icons-10958653.png",
//     group: "Orders",
//   },
//   {
//     id: 3,
//     title: <span style={{ fontSize: "16px" }}>Customer Database</span>,
//     image:
//       "https://img.freepik.com/premium-psd/3d-file-data-user-account-icon-illustration_148391-1081.jpg",
//     group: "Customers",
//   },
//   {
//     id: 4,
//     title: <span style={{ fontSize: "16px" }}>Inventory Tracking</span>,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Bcg5gm9N2ge4bPbA46n6NB9HgxMAivprfNYlOw_ClpukvfywiJxd6KtPKlt3gSs569Q&usqp=CAU",
//     group: "Inventory",
//   },
//   {
//     id: 5,
//     title: <span style={{ fontSize: "16px" }}>Sales Analytics</span>,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfIFb6UGxj2VEXOU4FzzUTUIaNxu2fqhF5g&s",
//     group: "Analytics",
//   },
//   {
//     id: 6,
//     title: <span style={{ fontSize: "16px" }}>24*7 Support</span>,
//     image: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
//     group: "Support",
//   },
//   {
//     id: 7,
//     title: <span style={{ fontSize: "16px" }}>Mobile Ecommerce App</span>,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-t6CEKsTYcgbDlMV0AIlBt_bCh416SKWKug&s",
//     group: "Apps",
//   },
//   {
//     id: 8,
//     title: (
//       <span style={{ fontSize: "16px" }}>Discount & Coupon Management</span>
//     ),
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/discount-coupon-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--vouchers-voucher-e-commerce-pack-shopping-illustrations-3337563.png",
//     group: "Marketing",
//   },
//   {
//     id: 9,
//     title: <span style={{ fontSize: "16px" }}>Order Reports</span>,
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/report-3d-icon-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-chart-graph-business-pack-finance-icons-5665049.png",
//     group: "Reports",
//   },
//   {
//     id: 10,
//     title: <span style={{ fontSize: "16px" }}>Customer Insights</span>,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlkGb7ddy2qCvZRZt-ZzuQtTXdZo1Fa8zQGQ&s",
//     group: "Reports",
//   },
//   {
//     id: 11,
//     title: <span style={{ fontSize: "16px" }}>Sales Performance</span>,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUIXh43BqfooW0QPpiW5sZUQ_s2tvgjZR4pw&s",
//     group: "Reports",
//   },
//   {
//     id: 12,
//     title: <span style={{ fontSize: "16px" }}>Inventory Reports</span>,
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/inventory-3d-icon-download-in-png-blend-fbx-gltf-file-formats--management-system-tracking-stock-product-pack-e-commerce-shopping-icons-10958665.png?f=webp",
//     group: "Reports",
//   },

//   {
//     id: 14,
//     title: <span style={{ fontSize: "16px" }}>Customer Segmentation</span>,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtNXq5vuTWM3zb_U9kYx01F7MrFL5dIMhPqg&s",
//     group: "Marketing",
//   },
//   {
//     id: 15,
//     title: <span style={{ fontSize: "16px" }}>Pro motional Offers</span>,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWoJOV_Meh5KU3Vg50J2mMofelZIK3qcVi8w&s",
//     group: "Marketing",
//   },
//   {
//     id: 16,
//     title: <span style={{ fontSize: "16px" }}>Mobile App Features</span>,
//     image:
//       "https://thumbs.dreamstime.com/b/colorful-mobile-application-interface-design-various-icons-d-rendering-app-s-designed-easy-navigation-375395538.jpg",
//     group: "Apps",
//   },
//   {
//     id: 17,
//     title: <span style={{ fontSize: "16px" }}>App Customization</span>,
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-customization-3d-icon-download-in-png-blend-fbx-gltf-file-formats--setting-maintenance-configuration-machine-learning-pack-science-technology-icons-6622082.png",
//     group: "Apps",
//   },
//   {
//     id: 18,
//     title: <span style={{ fontSize: "16px" }}>App Analytics</span>,
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/infographic-3d-icon-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-diagram-investment-digital-marketing-pack-business-icons-5115854.png?f=webp",
//     group: "Apps",
//   },

//   {
//     id: 20,
//     title: <span style={{ fontSize: "16px" }}>App User Experience</span>,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQJ82rgURXL-9tMMmM8cIGT5I6nadKHhn4w&s",
//     group: "Apps",
//   },
//   {
//     id: 21,
//     title: <span style={{ fontSize: "16px" }}>Inventory Management</span>,
//     image:
//       "https://static.vecteezy.com/system/resources/previews/025/350/872/non_2x/inventory-management-of-3d-icon-png.png",
//     group: "Inventory",
//   },
//   {
//     id: 22,
//     title: <span style={{ fontSize: "16px" }}>Stock Alerts</span>,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSYELFQb49mYqxZieV5iXzF_o8gV_1mCcfQ&s",
//     group: "Inventory",
//   },
//   {
//     id: 23,
//     title: <span style={{ fontSize: "16px" }}>Supplier Management</span>,
//     image:
//       "https://static.vecteezy.com/system/resources/thumbnails/039/833/693/small_2x/3d-cooperation-icon-on-transparent-background-png.png",
//     group: "Inventory",
//   },
//   {
//     id: 24,
//     title: <span style={{ fontSize: "16px" }}>Inventory Reports</span>,
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/inventory-3d-icon-download-in-png-blend-fbx-gltf-file-formats--management-system-tracking-stock-product-pack-e-commerce-shopping-icons-10958665.png?f=webp",
//     group: "Inventory",
//   },
//   {
//     id: 25,
//     title: <span style={{ fontSize: "16px" }}>Customer Support</span>,
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/customer-support-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--helping-service-center-assistance-online-help-business-pack-people-illustrations-4487272.png?f=webp",
//     group: "Support",
//   },
//   {
//     id: 26,
//     title: <span style={{ fontSize: "16px" }}>Live Chat</span>,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpxPQGPGJ_ML55fqRpYjQEbFOSVnBpsRa6Fw&s",
//     group: "Support",
//   },
//   {
//     id: 27,
//     title: <span style={{ fontSize: "16px" }}>Email Support</span>,
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/email-3d-icon-download-in-png-blend-fbx-gltf-file-formats--mail-envelope-message-letter-contact-us-pack-tech-support-icons-5523022.png?f=webp",
//     group: "Support",
//   },
//   {
//     id: 28,
//     title: <span style={{ fontSize: "16px" }}>Knowledge Base</span>,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00x4FPI9ax0kyCaEqajRqiGG3byr0HTR3euUhy2QU-1EiXO0T90g7DuTlr3miaz5IVOM&usqp=CAU",
//     group: "Support",
//   },
//   {
//     id: 29,
//     title: <span style={{ fontSize: "16px" }}>Feedback & Reviews</span>,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1P0becd-Lqzx0VeTuHMPk1orfYRvh3WOzZA&s",
//     group: "Support",
//   },
//   {
//     id: 30,
//     title: <span style={{ fontSize: "16px" }}>Sales Reports</span>,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYWGkhW0myQLo4hYMahhraLUgN9WtiI1l0A&s",
//     group: "Reports",
//   },
//   {
//     id: 31,
//     title: <span style={{ fontSize: "16px" }}>Customer Insights</span>,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzrWdbs7Bww9az3n4BPnxDMRAkkwq6o3J_g&s",
//     group: "Reports",
//   },
//   {
//     id: 33,
//     title: <span style={{ fontSize: "16px" }}>Marketing Analytics</span>,
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/preview/marketing-analytics-3d-icon-download-in-png-blend-fbx-gltf-file-formats--data-analysis-statistics-advertising-pack-business-icons-8411800.png?f=webp&h=700",
//     group: "Reports",
//   },
//   {
//     id: 34,
//     title: <span style={{ fontSize: "16px" }}>Performance Dashboards</span>,
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-user-analysis-account-business-marketing-pack-illustrations-3930409.png?f=webp",
//     group: "Reports",
//   },
//   {
//     id: 35,
//     title: <span style={{ fontSize: "16px" }}>Marketing Campaigns</span>,
//     image: "https://cdn-icons-png.flaticon.com/512/7933/7933249.png",
//     group: "Marketing",
//   },
//   {
//     id: 38,
//     title: <span style={{ fontSize: "16px" }}>Email Campaigns</span>,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHcm-dJNUEZbxGofklkh_UqgD7om-85cK3Hg&s",
//     group: "Marketing",
//   },
//   {
//     id: 39,
//     title: <span style={{ fontSize: "16px" }}>Social Media Integration</span>,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwH-mKa8D4lvfStfMXkn0roY-UUEyIWuZrbA&s",
//     group: "Marketing",
//   },
//   {
//     id: 40,
//     title: <span style={{ fontSize: "16px" }}>App Customization</span>,
//     image:
//       "https://www.shutterstock.com/image-vector/smartphone-repair-service-3d-style-600nw-2431205925.jpg",
//     group: "Apps",
//   },

//   {
//     id: 42,
//     title: <span style={{ fontSize: "16px" }}>App Security</span>,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBDMIRB_Gru8-wqRCmW_hEc6SYJY_lrEKjTw&s",
//     group: "Apps",
//   },
// ];

// const subfeatures = [
//   {
//     title: "Automated Inventory Updates",
//     detail:
//       "Track stock levels in real-time and get alerts for low inventory to avoid stockouts.",
//     image: "https://cdn-icons-png.flaticon.com/512/6797/6797273.png",
//   },
//   {
//     title: "Order & Delivery Tracking",
//     detail:
//       "Monitor order status, shipping, and delivery for better customer satisfaction.",
//     image: "https://cdn-icons-png.flaticon.com/512/4003/4003738.png",
//   },
//   {
//     title: "Customer Segmentation",
//     detail:
//       "Segment customers based on purchase history and behavior for targeted marketing.",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTM_FihezbNewiWHj7gwNTeRtXrpMlqD3bXKi7RKfmyYTsiYIL1dm-XDhDEAu7zcPVVhk&usqp=CAU",
//   },
//   {
//     title: "Sales Analytics & Reporting",
//     detail:
//       "Get actionable insights with customizable sales reports, dashboards, and trend analysis.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRXxtVdRd5Wm3RCD-LOHCBmEiNiLoZ4dMnkffvC6-l1vmZWzrbzGRWd70QUZmVY7WGe8&usqp=CAU",
//   },
//   {
//     title: "Mobile Ecommerce App",
//     detail:
//       "Empower your customers to shop on the go with a secure mobile app.",
//     image: "https://cdn-icons-png.flaticon.com/512/1055/1055668.png",
//   },
//   {
//     title: "Discount & Coupon Management",
//     detail:
//       "Create and manage promotional offers, discounts, and coupons easily.",
//     image: "https://cdn-icons-png.flaticon.com/512/9368/9368410.png",
//   },
// ];

// const EcommerceManagementSystem = () => {
//   const [selectedGroup, setSelectedGroup] = useState("Support");
//   const isMobile = useMediaQuery("(max-width:600px)");

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const handleGroupChange = (group) => {
//     setSelectedGroup(group);
//     AOS.refresh();
//   };

//   const filteredBlogs = blogs.filter((blog) => blog.group === selectedGroup);

//   return (
//     <ThemeProvider theme={theme}>
//       <Box
//         sx={{
//           position: "relative",
//           minHeight: "100vh",
//           background: "linear-gradient(120deg, #3498DB, #FFBF00)",
//           backgroundSize: "200% 200%",
//           animation: "glowBG 10s ease infinite",
//         }}
//       >
//         <Container sx={{ py: { xs: 6, md: 10 } }}>
//           <Grid container spacing={4} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 <Typography
//                   variant="h3"
//                   fontWeight="bold"
//                   color="white"
//                   gutterBottom
//                 >
//                   Modern Ecommerce
//                 </Typography>
//                 <Typography variant="h4" color="secondary.light" gutterBottom>
//                   Management System
//                 </Typography>
//                 <Typography variant="body1" color="white" paragraph>
//                   Manage orders, inventory, reports & more in a single
//                   integrated platform. Get real-time insights with elegant UI &
//                   animations.
//                 </Typography>
//                 <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
//                   Launch Now
//                 </Button>
//               </motion.div>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <motion.img
//                 src="https://5.imimg.com/data5/SELLER/Default/2023/6/314549195/ND/RM/MC/190226425/e-commerce-website-development-services.png"
//                 alt="Ecommerce GIF"
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ type: "spring", stiffness: 100 }}
//                 style={{ width: "100%", borderRadius: 16 }}
//               />
//             </Grid>
//           </Grid>
//         </Container>

//         <style>{`
//           @keyframes glowBG {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }
//         `}</style>
//       </Box>

//       {/* Description Section */}
//       <Box
//         sx={{
//           background: "rgb(245, 250, 255)",
//           color: "#333",
//           py: { xs: 6, md: 8 },
//           px: 2,
//           textAlign: "center",
//         }}
//       >
//         <Container>
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             <Typography
//               variant="h4"
//               sx={{
//                 fontWeight: "bold",
//                 fontSize: { xs: "1.6rem", md: "2.2rem" },
//                 position: "relative",
//                 display: "inline-block",
//                 mb: 3,
//               }}
//             >
//               <span
//                 style={{
//                   color: "#2874A6",
//                   position: "relative",
//                   paddingBottom: "2px",
//                   borderBottom: "3px solid #FFBF00",
//                   marginRight: "6px",
//                   display: "inline-block",
//                   transition: "all 0.3s ease",
//                 }}
//               >
//                 A
//               </span>{" "}
//               <span style={{ color: "#2874A6" }}>
//                 Complete Solution for{" "}
//                 <span style={{ color: "#FFBF00" }}>BookShop & Inventory </span>
//                 Management
//               </span>
//             </Typography>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.2 }}
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             <Typography
//               variant="body1"
//               sx={{
//                 color: "#555",
//                 lineHeight: 1.8,
//                 maxWidth: 800,
//                 mx: "auto",
//                 fontSize: { xs: "1rem", md: "1.125rem" },
//               }}
//             >
//               The BookShop Management System streamlines and automates all
//               bookshop processes for businesses. It covers book management,
//               order processing, customer communication, reporting, and
//               analytics, ensuring transparency and efficiency for both shop
//               owners and customers.
//             </Typography>
//           </motion.div>
//         </Container>
//       </Box>

//       {/* Key Features Section */}

//       <Box
//         sx={{
//           background: "linear-gradient(135deg, #fff 0%, #fef9e7 100%)",
//           display: "flex",
//           textAlign: "center",
//           marginBottom: "40px",
//           padding: "40px 0",
//         }}
//       >
//         <Container>
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: "bold",
//               color: "#3498DB",
//               marginBottom: "40px",
//               position: "relative",
//               display: "inline-block",
//               "&::after": {
//                 content: '""',
//                 position: "absolute",
//                 left: 0,
//                 bottom: -8,
//                 height: "4px",
//                 width: "100%",
//                 background: "linear-gradient(90deg, #3498DB 0%, #FFBF00 100%)",
//                 borderRadius: "2px",
//               },
//             }}
//           >
//             Key Features
//           </Typography>

//           {/* Filter Buttons */}
//           <Box className="text-center mb-4">
//             {groups.map((group) => (
//               <Button
//                 key={group}
//                 onClick={() => handleGroupChange(group)}
//                 variant={selectedGroup === group ? "contained" : "outlined"}
//                 sx={{
//                   margin: "5px",
//                   borderRadius: "20px",
//                   textTransform: "none",
//                   backgroundColor:
//                     selectedGroup === group ? "#FFBF00" : "transparent",
//                   color: selectedGroup === group ? "#fff" : "#3498DB",
//                   borderColor: "#3498DB",
//                   "&:hover": {
//                     backgroundColor:
//                       selectedGroup === group ? "#e6ac00" : "#FFBF00",
//                     color: "#fff",
//                     borderColor: "#3498DB",
//                   },
//                 }}
//               >
//                 {group}
//               </Button>
//             ))}
//           </Box>

//           {/* Feature Cards */}
//           <Grid container spacing={4}>
//             {filteredBlogs.map((blog, i) => (
//               <Grid item xs={12} sm={6} md={3} key={blog.id}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{
//                     delay: i * 0.08,
//                     duration: 0.5,
//                     type: "spring",
//                   }}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   viewport={{ once: true, amount: 0.2 }}
//                 >
//                   <Card
//                     sx={{
//                       boxShadow: "0px 4px 20px rgba(255, 191, 0, 0.3)",
//                       border: "2px solid #FFBF00",
//                       borderRadius: "12px",
//                       overflow: "hidden",
//                       transition: "all 0.3s ease",
//                       height: "100%",
//                       backgroundColor: "#fffbea",
//                     }}
//                   >
//                     <CardMedia
//                       component="img"
//                       image={blog.image}
//                       alt={blog.title}
//                       sx={{
//                         height: "80px",
//                         objectFit: "contain",
//                         margin: "30px auto 0",
//                       }}
//                     />
//                     <CardContent>
//                       <Typography
//                         sx={{
//                           fontWeight: "bold",
//                           textAlign: "center",
//                           color: "#333",
//                           fontSize: "16px",
//                           borderTop: "1px solid #FFBF00",
//                           paddingTop: "12px",
//                         }}
//                       >
//                         {blog.title}
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Benefits Section */}

//       <div className="container2 mt-5">
//         <div className="phone-mockup">
//           <img
//             className="img22"
//             data-aos="fade-right"
//             src={phone}
//             alt="Ecommerce Mobile"
//           />
//         </div>
//         <motion.div
//           className="benefits-section"
//           data-aos="fade-left"
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <h1 className="pp fw-bold">
//             Benefits of{" "}
//             <span className="highlight">Ecommerce Management System</span>
//           </h1>
//           <p className="pp fs-4 fw-bold">With PJSOFTTECH, you get:</p>
//           <ul style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
//             <li>
//               <b>Centralized Ecommerce Administration:</b> Manage all products,
//               orders, and customers from a single platform.
//             </li>
//             <li>
//               <b>Automated Inventory:</b> Simplifies stock management and order
//               fulfillment.
//             </li>
//             <li>
//               <b>Accurate Tracking:</b> Real-time tracking of orders and
//               inventory.
//             </li>
//             <li>
//               <b>Streamlined Communication:</b> Seamless communication with
//               customers via email or notifications.
//             </li>
//             <li>
//               <b>Comprehensive Reporting:</b> Generate detailed analytics for
//               sales and performance.
//             </li>
//             <li>
//               <b>Mobile Accessibility:</b> Access the system anytime, anywhere
//               with mobile compatibility.
//             </li>
//             <li>
//               <b>Data Security:</b> Ensures data integrity and privacy with
//               secure, role-based access controls.
//             </li>
//           </ul>
//         </motion.div>
//       </div>

//       {/* Ecommerce Management & EMS Section */}

//       <Box
//         sx={{
//           padding: "40px 20px",
//           background: "linear-gradient(135deg, #3498DB 0%, #FFBF00 100%)",
//         }}
//       >
//         <Container>
//           {/* First Grid Block */}
//           <Grid
//             container
//             spacing={4}
//             alignItems="center"
//             sx={{ marginBottom: "40px" }}
//           >
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1 }}
//                 viewport={{ once: true, amount: 0.3 }}
//               >
//                 <Typography
//                   variant="h4"
//                   sx={{
//                     fontWeight: "bold",
//                     color: "#fff",
//                     marginBottom: "20px",
//                     textAlign: { xs: "center", md: "left" },
//                   }}
//                 >
//                   <span style={{ color: "#FFBF00" }}>Ecommerce</span> Management
//                 </Typography>

//                 <Typography
//                   variant="body1"
//                   sx={{
//                     color: "#f0f0f0",
//                     lineHeight: "1.8",
//                     textAlign: { xs: "center", md: "left" },
//                   }}
//                 >
//                   An Ecommerce Management System (EMS) serves as a centralized
//                   platform for businesses to efficiently manage online store
//                   operations. It encompasses functionalities including product
//                   management, order processing, inventory tracking, customer
//                   support, and analytics.
//                   <br />
//                   <br />
//                   EMS often integrates with other ERP and CRM systems and offers
//                   customization options to adapt to the specific needs of each
//                   business. Overall, it plays a vital role in streamlining
//                   ecommerce administration, improving conversion rates, and
//                   enhancing customer satisfaction.
//                 </Typography>
//               </motion.div>
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <motion.img
//                 src="https://miro.medium.com/v2/resize:fit:1400/1*WGLqWjL48iQWHQjgok1FSQ.gif"
//                 alt="Ecommerce Management"
//                 style={{
//                   width: "100%",
//                   maxWidth: 340,
//                   height: "auto",
//                   maxHeight: 260,
//                   objectFit: "contain",
//                   borderRadius: "10px",
//                   display: "block",
//                   margin: "0 auto",
//                 }}
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 whileHover={{
//                   scale: 1.04,
//                   boxShadow: "0px 8px 24px  #FFBF00",
//                 }}
//                 whileTap={{ scale: 0.97 }}
//                 transition={{ duration: 1 }}
//                 viewport={{ once: true, amount: 0.3 }}
//               />
//             </Grid>
//           </Grid>

//           {/* Second Grid Block */}
//           <Grid
//             container
//             spacing={4}
//             alignItems="center"
//             sx={{ marginBottom: "40px" }}
//           >
//             <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
//               <motion.img
//                 src="https://topwebpro.co.uk/wp-content/uploads/2023/02/inventory-management.gif"
//                 alt="Ecommerce Information System"
//                 style={{
//                   width: "100%",
//                   maxWidth: 340,
//                   height: "auto",
//                   maxHeight: 260,
//                   objectFit: "contain",
//                   borderRadius: "10px",
//                   display: "block",
//                   margin: "0 auto",
//                 }}
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 whileHover={{
//                   scale: 1.04,
//                   boxShadow: "0px 8px 24px rgba(255,191,0,0.4)",
//                 }}
//                 whileTap={{ scale: 0.97 }}
//                 transition={{ duration: 1 }}
//                 viewport={{ once: true, amount: 0.3 }}
//               />
//             </Grid>

//             <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1 }}
//                 viewport={{ once: true, amount: 0.3 }}
//               >
//                 <Typography
//                   variant="h4"
//                   sx={{
//                     fontWeight: "bold",
//                     color: "#fff",
//                     marginBottom: "20px",
//                     textAlign: { xs: "center", md: "left" },
//                   }}
//                 >
//                   <span style={{ color: "#FFBF00" }}>Ecommerce</span>{" "}
//                   Information System
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     color: "#f0f0f0",
//                     lineHeight: "1.8",
//                     textAlign: { xs: "center", md: "left" },
//                   }}
//                 >
//                   An Ecommerce Information System is a robust platform designed
//                   to manage and maintain comprehensive ecommerce data throughout
//                   the customer lifecycle. It enables businesses to securely
//                   store and access product records, order histories, customer
//                   details, and more. The system streamlines ecommerce
//                   processing, supports analytics, and empowers teams to make
//                   informed decisions, ensuring timely order fulfillment and
//                   improved customer relationships.
//                 </Typography>
//               </motion.div>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Subfeatures Section */}

// <Box sx={{ py: 8 }}>
//   <Container>
//     <Typography
//       variant="h4"
//       fontWeight="bold"
//       textAlign="center"
//       color="#3498DB"
//       mb={6}
//       sx={{
//         "& span::after": {
//           content: '""',
//           display: "block",
//           width: "100%",
//           height: "4px",
//           backgroundColor: "#FFBF00",
//           marginTop: "4px",
//         },
//       }}
//     >
//       <span style={{ display: "inline-block", position: "relative" }}>
//         Sub Features
//       </span>
//       {" "} of Ecommerce Management System
//     </Typography>

//     <Grid container spacing={4}>
//       {subfeatures.map((item, idx) => (
//         <Grid item xs={12} md={6} key={item.title}>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.85, y: 60 }}
//             whileInView={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{
//               delay: idx * 0.1,
//               duration: 0.55,
//               type: "spring",
//               bounce: 0.3,
//             }}
//             viewport={{ once: true, amount: 0.2 }}
//             style={{
//               background: "#f5faff",
//               borderLeft: `6px solid ${theme.palette.secondary.main}`,
//               borderRadius: 12,
//               padding: 24,
//               display: "flex",
//               gap: 20,
//             }}
//           >
//             <motion.img
//               src={item.image}
//               alt={item.title}
//               initial={{ rotate: -10 }}
//               whileHover={{ rotate: 10, scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 200, damping: 10 }}
//               style={{
//                 width: 56,
//                 height: 56,
//                 objectFit: "contain",
//                 flexShrink: 0,
//               }}
//             />

//             <div>
//               <Typography
//                 variant="h6"
//                 fontWeight="bold"
//                 color="primary"
//                 mb={0.5}
//               >
//                 {item.title}
//               </Typography>

//               <Typography variant="body2" color="text.secondary">
//                 {item.detail}
//               </Typography>
//             </div>
//           </motion.div>
//         </Grid>
//       ))}
//     </Grid>
//   </Container>
// </Box>

//       {/*  🔑  KEYFRAMES  */}

//       <style>
//         {`
//           @keyframes gradientBG {
//             0%   { background-position: 0% 50%; }
//             50%  { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }
//         `}
//       </style>

//     </ThemeProvider>
//   );
// };

// export default EcommerceManagementSystem;
