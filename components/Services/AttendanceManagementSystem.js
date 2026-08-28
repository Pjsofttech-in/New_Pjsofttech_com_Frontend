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
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import image1 from "../images/attandancegif.gif";
import phone from "../images/student-info-detail.png";
import dashboard1 from "../images/admissiondashboard.png";
import dashboard2 from "../images/academydashboard2.png";
import dashboard3 from "../images/academydashboard.png";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./AttendanceManagementSystem.module.css";

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
  "Attendance",
  "HR & Payroll",
  "Technology",
  "Support",
  "Analytics",
  "Apps",
];

const blogs = [
  {
    id: 1,
    title: "Biometric Integration",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8of9o8vzZTdvz0Xc2u8YXZRdXCVfuCy-Iqw&s",
    group: "Attendance",
  },
  {
    id: 2,
    title: "Employees Self Service",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ckWnVWoeBvBoRCMDBeQtXADnbmvxYPfMcg&s",
    group: "HR & Payroll",
  },
  {
    id: 3,
    title: "Attendance Recording",
    image: "https://cdn-icons-png.flaticon.com/512/3589/3589030.png",
    group: "Attendance",
  },
  {
    id: 4,
    title: "Payroll Integration",
    image: "https://cdn-icons-png.flaticon.com/512/3862/3862961.png",
    group: "HR & Payroll",
  },
  {
    id: 5,
    title: "Cloud Capabilities",
    image: "https://cdn-icons-png.flaticon.com/512/4318/4318400.png",
    group: "Technology",
  },
  {
    id: 6,
    title: "Overtime Tracking",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZLCBLtnDlq4wFgMOqTPVMEcFwW5m8FskEA&s",
    group: "Attendance",
  },
  {
    id: 7,
    title: "24*7 Support",
    image: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
    group: "Support",
  },
  {
    id: 8,
    title: "Reports and Dashboard",
    image:
      "https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1509.jpg",
    group: "Analytics",
  },
  {
    id: 9,
    title: "Next Generation Software",
    image: "https://cdn-icons-png.flaticon.com/512/3950/3950815.png",
    group: "Technology",
  },
  {
    id: 10,
    title: "Attendance App",
    image: "https://cdn-icons-png.flaticon.com/512/3950/3950815.png",
    group: "Apps",
  },
];

const dashboardData = [
  {
    title: "Daily Attendance Dashboard",
    desc: "The Daily Lead Count Dashboard provides a clear picture of the leads generated on a day-to-day basis. It helps businesses closely monitor their daily performance, identify peak hours of lead generation, and quickly act on any sudden drops in numbers. This real-time visibility is especially valuable for tracking the effectiveness of ongoing campaigns, advertisements, or short-term promotions.",
    img: dashboard1,
  },
  {
    title: "Yearly/Monthly Attendance Dashboard",
    desc: "The Monthly/Monthly Lead Count Dashboard consolidates leads generated throughout the month and highlights growth trends compared to previous months. It enables businesses to track monthly targets, analyze marketing effectiveness, and plan resources more efficiently. Seasonal or campaign-driven variations also become more visible in this view, making it easier to understand customer behavior patterns.",
    img: dashboard2,
  },
  {
    title: "Source / Course-Wise Attendance Dashboard",
    desc: "The Source / Course-Wise Lead Dashboard categorizes leads based on their origin, such as website inquiries, social media ads, referrals, walk-ins, agents, or QR code scans. By identifying the most effective lead sources, businesses can optimize their marketing spend, maximize ROI, and focus on the channels that bring in the highest-quality leads. This breakdown ensures better decision-making for campaign planning and channel prioritization.",
    img: dashboard3,
  },

];

const subfeatures = [
  {
    title: "Real-Time Attendance Tracking",
    detail:
      "Monitor and record attendance in real-time using biometric, RFID, or digital inputs to ensure accuracy and reduce fraud.",
    image: "https://cdn-icons-png.flaticon.com/512/3095/3095583.png",
  },
  {
    title: "Automated Alerts & Notifications",
    detail:
      "Send automatic notifications for late arrivals, absences, and early check-outs via SMS or email.",
    image: "https://cdn-icons-png.flaticon.com/512/1827/1827370.png",
  },
  {
    title: "Daily & Monthly Reports",
    detail:
      "Generate insightful reports and visual analytics for student and staff attendance with just a few clicks.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYnDVxbR6SpZYgUoiAeDglSUw-gpxRDDrcvg&s",
  },
  {
    title: "Biometric & RFID Integration",
    detail:
      "Support for fingerprint, face-recognition, and RFID-based attendance to eliminate proxy and manual entries.",
    image: "https://cdn-icons-png.flaticon.com/512/3050/3050525.png",
  },
  {
    title: "Leave & Holiday Management",
    detail:
      "Manage leave requests, holidays, and approvals within the same system, integrated with attendance logs.",
    image: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
  },
  {
    title: "Mobile App Support",
    detail:
      "Enable attendance marking and viewing from mobile apps for teachers, students, and parents.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6B6QYhS9ShtrOWmBNUZJ4Kk6-Tk7OQr_3Tw&s",
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

const AttendanceManagementSystem = () => {
  const [selectedGroup, setSelectedGroup] = useState("Attendance");

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
                Attendance Management <span style={{ color: "#FFBF00" }}>System</span>
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
              >
                <b>Monitor and manage attendance effortlessly</b> with our advanced
                Attendance Management System. Automate daily attendance tracking,
                reduce errors, and ensure accurate reporting for students, teachers,
                and employees. Get real-time insights, generate detailed reports, and
                maintain transparency with digital records—all in one integrated
                platform.
                <br /><br />
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                <Chip label="Real-Time Tracking" color="primary" />
                <Chip label="Automated Reports" color="secondary" />
                <Chip
                  label="Error-Free Management"
                  sx={{ background: "#e1bee7", color: "#333" }}
                />
              </Box>
            </Grid>

            {/* Right Image Section */}
            <Grid item xs={12} md={6} data-aos="fade-left">
              <motion.img
                src={image1.src} // replace with attendance-related image
                alt="Attendance Management System"
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
              Attendance Management & Tracking
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
              The Attendance Management System simplifies the process of
              recording, managing, and analyzing attendance data for students
              and staff. It offers features like biometric or digital check-in,
              real-time tracking, absence notifications, reporting tools, and
              integration with payroll or academic systems—enhancing accuracy
              and reducing manual efforts.
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
      <Box className={styles.container2}>
        {/* Left: Phone Mockup */}
        <div className={styles.phoneMockup}>
          <img
            className={styles.img22}
            data-aos="fade-right"
            src={phone.src}
            alt="phone"
          />
        </div>

        {/* Right: Text Section */}
        <motion.div
          className={styles.benefitsSection}
          data-aos="fade-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className={styles.heading}>
            Benefits of <span className={styles.highlight}>Attendance Management Software</span>
          </h1>
          <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

          <ul className={styles.benefitList}>
            <li><b>Centralized Administration:</b> Manage all attendance operations for students and staff from a single dashboard.</li>
            <li><b>Automated Tracking:</b> Real-time attendance updates with biometric and RFID support.</li>
            <li><b>Instant Notifications:</b> Sends alerts for absentees and late arrivals instantly.</li>
            <li><b>Leave & Payroll Integration:</b> Integrates seamlessly with payroll for accurate deductions.</li>
            <li><b>Detailed Reports:</b> Generate attendance analytics for specific dates, classes, or employees.</li>
            <li><b>Customizable Rules:</b> Configure attendance policies for different roles and departments.</li>
            <li><b>Mobile Accessibility:</b> Access and mark attendance anytime via mobile devices.</li>
            <li><b>Data Security:</b> Role-based encryption ensuring data protection and transparency.</li>
          </ul>
        </motion.div>
      </Box>
      
      {/*Dashboard Section for Attendance Management*/}
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
            <span style={{ color: "#FFBF00" }}>Attendance</span> Management System Dashboards
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

      {/* Attendance Management & AMS Section */}
      <Box sx={{ padding: "40px 20px" }}>
        <Container>
          {/* First Block */}
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
                  <span> Attendance Management </span>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    lineHeight: "1.8",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  An Attendance Management System helps institutions monitor,
                  record, and manage daily attendance of students and staff with
                  complete accuracy. The system integrates with biometric
                  devices, RFID, or mobile apps to eliminate manual efforts and
                  reduce errors.
                  <br />
                  <br />
                  It generates detailed reports, tracks late arrivals and
                  absences, and can seamlessly integrate with payroll and
                  academic modules, enabling institutions to enforce policies
                  while improving productivity.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.img
                src="https://cdnl.iconscout.com/lottie/premium/thumb/online-class-attendance-animated-icon-download-in-lottie-json-gif-static-svg-file-formats--education-study-set-02-pack-school-icons-9188860.gif"
                alt="Attendance Management"
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
                  boxShadow: "0px 8px 24px rgba(52,152,219,0.18)",
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

          {/* Second Block */}
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{ marginBottom: "40px" }}
          >
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <motion.img
                src="https://aidco.com.pk/wp-content/uploads/2022/09/smart-attandance.gif"
                alt="Attendance Information System"
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
                  boxShadow: "0px 8px 24px rgba(52,152,219,0.18)",
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
                  <span style={{ color: "#2874A6" }}>Attendance</span>{" "}
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
                  The Attendance Information System stores, analyzes, and
                  synchronizes attendance data securely in one place. It tracks
                  entry and exit logs, provides user-specific attendance
                  histories, and generates real-time summaries for
                  administrators and HR teams. This system ensures transparency,
                  timely compliance, and effective workforce or student
                  monitoring.
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
            of Attendance Management System
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

export default AttendanceManagementSystem;
