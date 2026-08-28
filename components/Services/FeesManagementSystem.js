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
import styles from "./FeesManagementSystem.module.css";
import image1 from "../images/GIF IMAGES/fees.gif"
import phone from "../images/student-info-detail.png";
import dashboard1 from "../images/leaddashboard1.png";
import dashboard2 from "../images/LeadDashboard2.png";
import dashboard3 from "../images/leaddashboard3.png";

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

const groups = ["Payments", "Reminders", "Reports", "Support", "Fees", "Apps"];

const blogs = [
  {
    id: 1,
    title: <span style={{ fontSize: "16px" }}>Fee Payment</span>,
    image: "https://cdn-icons-png.flaticon.com/512/8595/8595059.png",
    group: "Payments",
  },
  {
    id: 2,
    title: <span style={{ fontSize: "16px" }}>Payment Reminders</span>,
    image: "https://cdn0.iconfinder.com/data/icons/budget/66/5-512.png",
    group: "Reminders",
  },
  {
    id: 3,
    title: <span style={{ fontSize: "16px" }}>Fee Collection</span>,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/025/134/984/small_2x/fees-icon-design-vector.jpg",
    group: "Payments",
  },
  {
    id: 4,
    title: <span style={{ fontSize: "16px" }}>Automated Reminders</span>,
    image:
      "https://eduxpert.in/wp-content/uploads/2018/02/icon-fees-150x150.png",
    group: "Reminders",
  },
  {
    id: 5,
    title: <span style={{ fontSize: "16px" }}>Fee Reporting</span>,
    image:
      "https://cdn-icons-png.freepik.com/256/14639/14639173.png?semt=ais_hybrid",
    group: "Reports",
  },
  {
    id: 6,
    title: <span style={{ fontSize: "16px" }}>Accuracy and Precision</span>,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJhXCTYxCmeQrPLAW5S1AVSk7DQYlAgQhr3Q&s",
    group: "Reports",
  },
  {
    id: 7,
    title: <span style={{ fontSize: "16px" }}>24*7 Support</span>,
    image: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
    group: "Support",
  },
  {
    id: 8,
    title: <span style={{ fontSize: "16px" }}>Reports and Dashboard</span>,
    image:
      "https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1509.jpg?ga=GA1.1.1863634387.1705751972&semt=ais_hybrid",
    group: "Reports",
  },
  {
    id: 9,
    title: <span style={{ fontSize: "16px" }}> Next Generation Software</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3950/3950815.png",
    group: "Support",
  },
  {
    id: 10,
    title: (
      <span style={{ fontSize: "16px" }}>
        {" "}
        Fees Reminder On Email/ WhatsApp/Text
      </span>
    ),
    image:
      "https://img.freepik.com/premium-vector/chat-orange-speech-bubble-mobile-phone-screen-realistic-3d-design-plastic-cartoon-style_178888-1510.jpg",
    group: "Reminders",
  },
  {
    id: 10,
    title: (
      <span style={{ fontSize: "16px" }}>
        Fees Report (Class wise/Day wise)
      </span>
    ),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlGxBQIEZahE4_5xo5rK_8PX8YXTzokcbbg&s",
    group: "Reports",
  },
  {
    id: 11,
    title: <span style={{ fontSize: "16px" }}>Exportable Reports</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNRO3oPmWxw1oDGAYbboywe73uaCZuZYi3zA&s",
    group: "Reports",
  },

  {
    id: 13,
    title: <span style={{ fontSize: "16px" }}>Real-Time Payment Tracking</span>,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/021/347/198/small/document-3d-icon-white-sheet-of-paper-on-clipboard-document-with-stripes-and-check-mark-vector.jpg",
    group: "Reports",
  },
  {
    id: 14,
    title: (
      <span style={{ fontSize: "16px" }}>
        {" "}
        Secure Payment Gateway Integration
      </span>
    ),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4hGOVe5NIIeowjHfo_ODk9bQOem_-33RXNrq6tCpMMC-oNH53zry5fq4blYnXYE8FLSA&usqp=CAU",
    group: "Payments",
  },
  {
    id: 15,
    title: (
      <span style={{ fontSize: "16px" }}> Real-Time Payment Tracking</span>
    ),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFwQohKB4mneDtGnVtzuPkN-0iczxDTc5hg&s",
    group: "Payments",
  },
  {
    id: 16,
    title: (
      <span style={{ fontSize: "16px" }}>Customizable Fee Structures</span>
    ),
    image:
      "https://www.shutterstock.com/image-vector/education-fee-vector-3d-icon-260nw-2461550949.jpg",
    group: "Fees",
  },
  {
    id: 17,
    title: <span style={{ fontSize: "16px" }}>Fee Management Mobile App </span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/educational-app-3d-icon-download-in-png-blend-fbx-gltf-file-formats--online-education-learning-study-mobile-university-e-pack-icons-8248946.png?f=webp",
    group: "Apps",
  },
  {
    id: 18,
    title: <span style={{ fontSize: "16px" }}>Receipt Generation </span>,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/043/987/949/small_2x/invoice-3d-icon-png.png",
    group: "Apps",
  },
  {
    id: 19,
    title: <span style={{ fontSize: "16px" }}>User Access Control </span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxHAonYhNJV7qhM4VjUApJLPbGsrz7_LEzg&s",
    group: "Support",
  },
  {
    id: 20,
    title: <span style={{ fontSize: "16px" }}>Audit Trail</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfrSlpygQGj41CY90TtdfgRWjMWhRWLl4J5Q&s",
    group: "Support",
  },
  {
    id: 21,
    title: <span style={{ fontSize: "16px" }}>Mobile Accessibility</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-access-3d-icon-download-in-png-blend-fbx-gltf-file-formats--key-security-smartphone-data-cyber-crime-pack-icons-10259523.png?f=webp",
    group: "Apps",
  },
  {
    id: 22,
    title: (
      <span style={{ fontSize: "16px" }}> Student Ledger Maintenance </span>
    ),
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/maintenance-3d-icon-png-download-10740570.png",
    group: "Support",
  },
  {
    id: 23,
    title: (
      <span style={{ fontSize: "16px" }}>
        {" "}
        Comprehensive Graphical Reports{" "}
      </span>
    ),
    image:
      "https://static.vecteezy.com/system/resources/previews/043/987/820/non_2x/report-3d-icon-png.png",
    group: "Support",
  },
  {
    id: 24,
    title: (
      <span style={{ fontSize: "16px" }}>Comprehensive Graphical Reports</span>
    ),
    group: "Reports",
    image: "https://static.vecteezy.com/system/resources/previews/043/987/820/non_2x/report-3d-icon-png.png",
  },
  {
    id: 25,
    title: <span style={{ fontSize: "16px" }}>Late Fee Management</span>,
    group: "Fees",
    image: "https://png.pngtree.com/png-clipart/20250217/original/pngtree-financial-costs-3d-icon-expense-management-symbol-for-budgeting-and-economic-png-image_20452284.png",
  },
  {
    id: 26,
    title: <span style={{ fontSize: "16px" }}>Concession Handling</span>,
    group: "Fees",
    image: "https://png.pngtree.com/png-clipart/20250217/original/pngtree-management-3d-icon-business-strategy-symbol-for-financial-planning-and-corporate-png-image_20452292.png",
  },
  {
    id: 27,
    title: <span style={{ fontSize: "16px" }}>Automated Fee Reminders</span>,
    group: "Reminders",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/bill-payment-reminder-3d-icon-png-download-4396856.png",
  },
  {
    id: 28,
    title: <span style={{ fontSize: "16px" }}>Manual Reminder Option</span>,
    group: "Reminders",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/reminders-3d-icon-png-download-6431125.png",
  },
  {
    id: 29,
    title: (
      <span style={{ fontSize: "16px" }}>Multi-Channel Notifications</span>
    ),
    group: "Reminders",
    image: "https://img.freepik.com/free-vector/realistic-notification-bell-3d-icon-isolated-white-background-new-notification-concept-social-media-element_145391-1218.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 30,
    title: <span style={{ fontSize: "16px" }}>Detailed Fee Reports</span>,
    group: "Reports",
    image: "https://static.vecteezy.com/system/resources/previews/043/987/820/non_2x/report-3d-icon-png.png",
  },
  {
    id: 31,
    title: <span style={{ fontSize: "16px" }}>Flexible Payment Options</span>,
    group: "Payments",
    image: "https://img.freepik.com/free-vector/bill-receipt-credit-card-3d-illustration-cartoon-drawing-paper-sheet-with-dollar-symbol-credit-card-3d-style-white-background-business-payment-finances-transaction-concept_778687-705.jpg",
  },
  {
    id: 32,
    title: (
      <span style={{ fontSize: "16px" }}>
        Multiple Payment Modes (UPI, Cash)
      </span>
    ),
    group: "Payments",
    image: "https://static.vecteezy.com/system/resources/previews/022/604/056/non_2x/online-shopping-3d-illustration-online-shop-online-payment-and-delivery-concept-png.png",
  },
  {
    id: 33,
    title: (
      <span style={{ fontSize: "16px" }}>Exportable Reports (PDF/Excel)</span>
    ),
    group: "Reports",
    image: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
  },
  {
    id: 34,
    title: <span style={{ fontSize: "16px" }}>Real-Time Payment Tracking</span>,
    group: "Payments",
    image: "https://png.pngtree.com/png-clipart/20250207/original/pngtree-employee-time-tracking-software-featuring-3d-icon-isolated-on-a-transparent-png-image_20375421.png",
  },
  {
    id: 35,
    title: (
      <span style={{ fontSize: "16px" }}>Customizable Fee Structures</span>
    ),
    group: "Fees",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/price-list-3d-icon-png-download-9197886.png?f=webp",
  },
  {
    id: 36,
    title: (
      <span style={{ fontSize: "16px" }}>
        Secure Payment Gateway Integration
      </span>
    ),
    group: "Payments",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/secure-payment-3d-icon-png-download-10896133.png",
  },
  {
    id: 37,
    title: <span style={{ fontSize: "16px" }}>Receipt Generation</span>,
    group: "Payments",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/invoice-3d-icon-png-download-5175128.png",
  },
  {
    id: 38,
    title: <span style={{ fontSize: "16px" }}>User Access Control</span>,
    group: "Support",
    image: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
  },

  {
    id: 41,
    title: <span style={{ fontSize: "16px" }}>Dashboard Overview</span>,
    group: "Reports",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-icon-png-download-4800664.png",
  },
  {
    id: 42,
    title: <span style={{ fontSize: "16px" }}>Student Ledger Maintenance</span>,
    group: "Payments",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/student-task-list-3d-icon-png-download-3926030.png",
  },
  {
    id: 43,
    title: (
      <span style={{ fontSize: "16px" }}>Integration with Other Modules</span>
    ),
    group: "Support",
    image: "https://cdn-icons-png.flaticon.com/512/4202/4202842.png",
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
    title: "Online Payment Integration",
    detail:
      "Seamlessly integrate with multiple payment gateways to allow parents and students to pay fees online using credit/debit cards.",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/payment-gateway-3d-icon-download-in-png-blend-fbx-gltf-file-formats--credit-card-finance-online-banking-business-pack-icons-9336135.png?f=webp",
  },
  {
    title: "Automated Late Fee Calculation",
    detail:
      "Automatically calculates late fees based on institution policies and adds them to outstanding dues.",
    image:
      "https://static.vecteezy.com/system/resources/previews/028/115/002/non_2x/accounting-3d-rendering-isometric-icon-png.png",
  },
  {
    title: "Custom Fee Structures",
    detail:
      "Supports flexible fee structures for different classes, categories, and student types.",
    image:
      "https://static.vecteezy.com/system/resources/previews/021/615/728/non_2x/cost-structure-3d-render-icon-illustration-png.png",
  },
  {
    title: "Fee Receipt Generation",
    detail:
      "Generates digital and printable fee receipts instantly after payment.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyhAcD9KYhuUey033tdi4CKS4q_lJvZab7TWFSzT2VlAd-caLnt-65GNJ9ik471OhlWfw&usqp=CAU",
  },
  {
    title: "SMS/Email Notifications",
    detail:
      "Sends automated SMS and email notifications for payment reminders, successful transactions.",
    image: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
  },
  {
    title: "Comprehensive Fee Reports",
    detail:
      "Provides detailed reports on fee collection, outstanding dues, concessions, and refunds.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqm36s9BhP6VfugrFyYW8oRWDATx5rlpVlVg&s",
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

const FeesManagementSystem = () => {
  const [selectedGroup, setSelectedGroup] = useState("Payments");

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
                  Fees Management <span style={{ color: "#FFBF00" }}>System</span>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
                >
                  <b>Automate, simplify, and track</b> all your school’s financial
                  transactions with our comprehensive Fees Management System.
                  Effortlessly manage student fee records, generate invoices, track
                  pending payments, and send instant reminders — all from one secure
                  dashboard. Improve accuracy, save time, and enhance transparency in
                  your institution’s financial operations.
                  <br /><br />
                </Typography>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                  <Chip label="Automated Billing" color="primary" />
                  <Chip label="Instant Receipts" color="secondary" />
                  <Chip
                    label="Secure Payments"
                    sx={{ background: "#e1bee7", color: "#333" }}
                  />
                </Box>
              </Grid>

              {/* Right Image Section */}
              <Grid item xs={12} md={6} data-aos="fade-left">
                <motion.img
                  src={image1.src} // replace with a finance or payment-related image
                  alt="Fees Management System"
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
                <span className={styles.span}>A</span> Complete Solution for
                Fees & Payment Management
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
                The Fees Management System streamlines and automates all
                fee-related processes for educational institutions. It covers
                payment collection, reminders, reporting, and analytics,
                ensuring transparency and efficiency for both administrators and
                parents.
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
              alt="Fees Management Mobile"
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
              <span className={styles.highlight}>Fees Management System</span>
            </h1>
            <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

            <ul className={styles.benefitList}>
              <li>
                <b>Centralized Fee Administration:</b> Manage all fee operations,
                including payments, reminders, and reports, from a single platform.
              </li>
              <li>
                <b>Automated Reminders:</b> Simplifies fee collection, reminders,
                and receipt generation, reducing manual work.
              </li>
              <li>
                <b>Accurate Collection Tracking:</b> Get real-time updates on
                payments, defaulters, and financial summaries instantly.
              </li>
              <li>
                <b>Streamlined Communication:</b> Seamless communication with
                parents via SMS, email, and in-app notifications.
              </li>
              <li>
                <b>Comprehensive Reporting:</b> Generate detailed analytics for fee
                collection, outstanding dues, and department-wise reports.
              </li>
              <li>
                <b>Mobile Accessibility:</b> Access the fee dashboard and reports
                anytime, anywhere using mobile devices.
              </li>
              <li>
                <b>Data Security & Compliance:</b> Protect sensitive financial data
                with secure encryption and role-based access controls.
              </li>
            </ul>
          </motion.div>
        </div>
        {/* Dashboard Section */}
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
              <span style={{ color: "#FFBF00" }}>Fees</span> Management System Dashboards
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

        {/* Fees Management & FMS Section */}
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
                    <span> Fees Management </span>
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      lineHeight: "1.8",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    A Fees Management System (FMS) serves as a centralized
                    platform for institutions to efficiently manage all
                    fee-related operations. It encompasses functionalities
                    including fee collection, payment tracking, receipt
                    generation, dues management, and financial analytics.
                    <br />
                    <br />
                    FMS often integrates with other ERP and accounting systems
                    and offers customization options to adapt to the specific
                    needs of each institution. Overall, it plays a vital role in
                    streamlining fee administration, improving transparency, and
                    enhancing financial management.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.img
                  src="https://assets-v2.lottiefiles.com/a/d54a7b96-1168-11ee-a430-6f03c755d724/43YEHDHEip.gif"
                  alt="Fees Management"
                  style={{
                    width: "100%",
                    maxWidth: 380,
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
                  src="https://cdn.dribbble.com/userupload/24008823/file/original-8b0d4a9f9cb8b0a74f06dc55449980bc.gif"
                  alt="Fees Information System"
                  style={{
                    width: "100%",
                    maxWidth: 380,
                    height: "auto",
                    maxHeight: 260,
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
                    <span style={{ color: "#2874A6" }}>Fees</span> Information
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
                    A Fees Information System is a robust platform designed to
                    manage and maintain comprehensive fee data throughout the
                    student lifecycle. It enables institutions to securely store
                    and access payment records, dues, receipts, and more. The
                    system streamlines fee processing, supports analytics, and
                    empowers teams to make informed decisions, ensuring timely
                    payments and improved financial transparency.
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
              of Fees Management System
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

export default FeesManagementSystem;
