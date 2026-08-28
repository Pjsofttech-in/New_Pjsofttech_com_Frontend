import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Chip,
  Typography,
  Box,
  Button,
} from "@mui/material";
import Slider from "react-slick";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import image1 from "../images/admissiongif.gif";
import phone from "../images/student-info-detail.png";
import dashboard1 from "../images/newadmissiondashboard2.png";
import dashboard2 from "../images/newadmissiondashboard2.png";
import dashboard3 from "../images/newadmissiondashboard2.png";

import styles from "./AdmissionManagementSystem.module.css"



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
  "Dashboard",
  "Admission",
  "Applications",
  "Notifications",
  "Fees",
  "Student Data",
  "Interview & Scheduling",
  "Reports & Analytics",
  "Apps",
];

const blogs = [
  {
    id: 1,
    title: "Student Record Management",
    group: "Student Data",
    image:
      "https://img.freepik.com/free-vector/visual-teenager-reading-book-mobile-phone-educate-learing-online-concept-design-isometric-illustration_1150-37267.jpg",
  },
  {
    id: 2,
    title: "Academic Year-wise Records",
    group: "Student Data",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/result-sheet-3d-icon-png-download-8102539.png",
  },
  {
    id: 3,
    title: "QR Application Form",
    group: "Applications",
    image: "https://cdn-icons-png.flaticon.com/512/4202/4202842.png",
  },
  {
    id: 4,
    title: "Link-based Application Form",
    group: "Applications",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/verified-document-3d-icon-download-in-png-blend-fbx-gltf-file-formats--approved-check-verification-pack-user-interface-icons-5915204.png",
  },
  {
    id: 5,
    title: "Application Approval Workflow",
    group: "Applications",
    image: "https://cdn-icons-png.flaticon.com/512/11447/11447239.png",
  },
  {
    id: 6,
    title: "Merit List Generation (Category-wise)",
    group: "Reports & Analytics",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/list-3d-icon-png-download-9531796.png",
  },
  {
    id: 7,
    title: "Fee Management",
    group: "Fees",
    image:
      "https://img.freepik.com/free-photo/online-payment-security-concept-3d-phone-bill_107791-16722.jpg",
  },
  {
    id: 8,
    title: "Interview Scheduling",
    group: "Interview & Scheduling",
    image: "https://cdn-icons-png.flaticon.com/512/726/726476.png",
  },
  {
    id: 9,
    title: "Notification Send by WhatsApp, Text, Email",
    group: "Notifications",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/message-notification-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--receiving-new-notifications-bell-push-reminder-pack-network-communication-illustrations-3998333.png",
  },

  {
    id: 11,
    title: "Add Admission",
    group: "Admission",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/id-card-3d-icon-download-in-png-blend-fbx-gltf-file-formats--about-person-admission-pass-identification-employee-travel-pack-holidays-icons-10075634.png?f=webp",
  },
  {
    id: 12,
    title: "Admission List",
    group: "Admission",
    image:
      "https://png.pngtree.com/png-clipart/20250422/original/pngtree-3d-favorite-list-icon-png-image_20854585.png",
  },
  {
    id: 13,
    title: "Monthly Admission",
    group: "Dashboard",
    image:
      "https://thumbs.dreamstime.com/b/monthly-report-d-icon-perfectly-isolated-white-background-business-financial-analysis-358982518.jpg",
  },
  {
    id: 14,
    title: "Compare Admissions",
    group: "Dashboard",
    image:
      "https://static.vecteezy.com/system/resources/previews/021/221/151/non_2x/3d-rendering-blue-and-yellow-school-supplies-with-a-clock-with-a-graduation-cap-on-it-vector.jpg",
  },
  {
    id: 15,
    title: "Year-wise Comparison",
    group: "Dashboard",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRflxgWkFaeRkk5xeGndHkhg-5DJwhpz5TEbu2urEGD-EDhQ3zvDffrYqcGFQTP9jA9vlQ&usqp=CAU",
  },
  {
    id: 16,
    title: "Source-wise Revenue",
    group: "Dashboard",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtRrnwDjRuUewSm6ixO59f2WBnGAEuIyK4ug&s",
  },
  {
    id: 17,
    title: "Admission QR",
    group: "Admission",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLSOsnga_wl63eYwqAJwZyTG4nUEkBzuYY-Q&s",
  },
  {
    id: 18,
    title: "Inquiry QR",
    group: "Admission",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXjQuKkS1lkGO0MHbuYlF9ConjdAWYyvcsaA&s",
  },
  {
    id: 18,
    title: "Add Source",
    group: "Admission",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrDjQjT4UtKd3AyFpeBkk2zo7Hgz6jcBuMA&s",
  },
  {
    id: 19,
    title: "Add Seat",
    group: "Admission",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhI4cwLwkYe1LG0rz03KMrl_RyjSI9GK3vg&s",
  },
  {
    id: 19,
    title: "Add Conduct",
    group: "Admission",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgwbFQ6VBlWXkxW3O8Dm2gMv-225TKrYBtNg&s",
  },
  {
    id: 20,
    title: "Admission Management App",
    group: "Admission",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-app-development-3d-icon-download-in-png-blend-fbx-gltf-file-formats--smartphone-code-software-engineer-vol-1-pack-design-icons-9394536.png?f=webp",
  },
  {
    id: 20,
    title: "Admission Management App",
    group: "Apps",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-app-development-3d-icon-download-in-png-blend-fbx-gltf-file-formats--smartphone-code-software-engineer-vol-1-pack-design-icons-9394536.png?f=webp",
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
    title: "Automated Application Processing",
    detail:
      "Streamline the entire application process with automated workflows, reducing manual effort and errors.",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Document Verification",
    detail:
      "Easily upload, verify, and manage applicant documents securely within the system.",
    image: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
  },
  {
    title: "Fee Management",
    detail:
      "Track application and admission fees, generate receipts, and manage payment status efficiently.",
    image: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
  },
  {
    title: "Communication Tools",
    detail:
      "Send automated emails, SMS, and notifications to applicants and parents at every stage.",
    image: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
  },
  {
    title: "Real-time Analytics & Reporting",
    detail:
      "Get actionable insights on applications, enrollments, and conversion rates with interactive dashboards.",
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
  },
  {
    title: "Mobile Accessibility",
    detail:
      "Access and manage the admission process from any device, anywhere, anytime.",
    image: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
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

const AdmissionManagementSystem = () => {
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
                Admission <span style={{ color: "#FFBF00" }}>Management</span> System
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
              >
                <b>Digitize and simplify your admission process</b> with our advanced
                Admission Management System. From application submission and document
                verification to merit lists, seat allocation, and enrollment—everything
                is centralized in one secure platform. Ensure transparency, save time,
                and provide a seamless experience for students and administrators.
                <br /><br />
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                <Chip label="Centralized Applications" color="primary" />
                <Chip label="Smart Automation" color="secondary" />
                <Chip
                  label="24x7 Support"
                  sx={{ background: "#e1bee7", color: "#333" }}
                />
              </Box>
            </Grid>

            {/* Right Image Section */}
            <Grid item xs={12} md={6} data-aos="fade-left">
              <motion.img
                src={image1.src} // replace with an admission-related image
                alt="Admission Management System"
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
              Admission & Student Enrollment Management
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
              The Admission Management System streamlines and automates all
              admission and enrollment processes for educational institutions.
              It covers application management, document verification,
              communication, reporting, and analytics—ensuring transparency and
              efficiency for both administrators and applicants.
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
            alt="Admission Management Mobile"
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
            <span className={styles.highlight}>Admission Management System</span>
          </h1>
          <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

          <ul className={styles.benefitList}>
            <li>
              <b>Centralized Admission Control:</b> Manage all student
              applications, documents, and approvals from one online platform.
            </li>
            <li>
              <b>Automated Application Workflow:</b> Streamline the process from
              registration to enrollment, minimizing manual effort.
            </li>
            <li>
              <b>Real-Time Tracking:</b> Instantly monitor application status,
              fee payments, and admission confirmations.
            </li>
            <li>
              <b>Smart Communication:</b> Send instant updates via email or SMS
              about admission status, document verification, and deadlines.
            </li>
            <li>
              <b>Comprehensive Analytics:</b> Generate insightful reports on
              applicant data, conversion rates, and admission trends.
            </li>
            <li>
              <b>Mobile & Web Accessibility:</b> Access and manage admissions
              anytime, anywhere, from any device.
            </li>
            <li>
              <b>Data Security & Privacy:</b> Protect sensitive applicant
              information with encrypted, role-based access controls.
            </li>
          </ul>
        </motion.div>
      </div>

      {/*Dashboard Section*/}
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
            <span style={{ color: "#FFBF00" }}>Admission</span> Management System Dashboards
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

      {/* Admission Management & AMS Section */}
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
                  <span> Admission Management </span>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    lineHeight: "1.8",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  An Admission Management System (AMS) serves as a centralized
                  platform for educational institutions to efficiently manage
                  the entire admission process. It encompasses functionalities
                  including application management, document verification, fee
                  tracking, student communication, and analytics.
                  <br />
                  <br />
                  AMS often integrates with other ERP and academic systems and
                  offers customization options to adapt to the specific needs of
                  each institution. Overall, it plays a vital role in
                  streamlining admissions, improving enrollment rates, and
                  enhancing applicant experience.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.img
                src="https://www.shahucollegelatur.org.in/admissionimages/admission.gif"
                alt="Admission Management"
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
                src="https://cdn.dribbble.com/userupload/23269877/file/original-8ddf261f961c5c8c062a49db2deeff95.gif"
                alt="Admission Information System"
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
                  <span style={{ color: "#2874A6" }}>Admission</span>{" "}
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
                  An Admission Information System is a robust platform designed
                  to manage and maintain comprehensive applicant and student
                  data throughout the admission lifecycle. It enables
                  institutions to securely store and access application records,
                  documents, communication logs, and more. The system
                  streamlines admission processing, supports analytics, and
                  empowers teams to make informed decisions, ensuring timely
                  enrollment and improved student relationships.
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
            of Admission Management System
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

export default AdmissionManagementSystem;
