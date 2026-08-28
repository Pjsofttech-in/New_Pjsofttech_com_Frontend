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
import image1 from "../images/testseriesebook.gif";
import dashboard1 from "../images/leaddashboard1.png";
import dashboard2 from "../images/LeadDashboard2.png";
import dashboard3 from "../images/leaddashboard3.png";
import styles from "./TestSeriesManagemenSystem.module.css";

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
  "Dashboard",
  "Test Management",
  "Test Series",
  "Assessment",
  "Automation",
  "Analytics",
  "Feedback",
  "Scheduling",
  "Reports",
  "Support",
  "Apps",
];

const blogs = [
  {
    id: 1,
    title: <span style={{ fontSize: "16px" }}>Test Creation</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-KgH9_ZuE6K9eRTzV4XEOtWu4DHz-62GXNg&s",
    group: "Test Series",
  },
  {
    id: 2,
    title: <span style={{ fontSize: "16px" }}>Question Bank</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8En8doe-MfKKVKuIRdfLIHr69WTFJI38qsG0GJokbWM57IhahxKo7qW5tvX76CJb0KG0&usqp=CAU",
    group: "Test Series",
  },
  {
    id: 3,
    title: <span style={{ fontSize: "16px" }}>Online Assessment</span>,
    image:
      "https://www.shutterstock.com/image-vector/3d-evaluate-result-icon-file-600nw-2431373979.jpg",
    group: "Assessment",
  },
  {
    id: 4,
    title: <span style={{ fontSize: "16px" }}>Instant Results</span>,
    image: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    group: "Reports",
  },
  {
    id: 5,
    title: <span style={{ fontSize: "16px" }}>Performance Analytics</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/analytics-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--data-analysis-of-analyzing-task-manager-pack-business-illustrations-3878340.png",
    group: "Reports",
  },
  {
    id: 6,
    title: <span style={{ fontSize: "16px" }}>Exam Scheduling</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3503/3503788.png",
    group: "Scheduling",
  },
  {
    id: 7,
    title: <span style={{ fontSize: "16px" }}>Student App</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/app-development-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--application-programming-coding-computer-pack-design-illustrations-4315311.png?f=webp",
    group: "Apps",
  },
  {
    id: 8,
    title: <span style={{ fontSize: "16px" }}>Teacher App</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-development-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--app-design-application-technology-pack-user-interface-illustrations-4708214.png",
    group: "Apps",
  },
  {
    id: 9,
    title: <span style={{ fontSize: "16px" }}>Support & Doubt Clearing</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHThAh2yM7nMp7mRwVfmMAGIG16cHi5L9rI6JvxaQdGDOsJEXMpnkcaz3vrzxLvZD3CrQ&usqp=CAU",
    group: "Support",
  },
  {
    id: 10,
    group: "Dashboard",
    title: <span style={{ fontSize: "16px" }}>Admin Dashboard</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_6hoFFnSphXhgUNALiS3B38YDZrelvpRysQ&s",
  },
  {
    id: 11,
    group: "Test Management",
    title: <span style={{ fontSize: "16px" }}>Test Creation</span>,
    image:
      "https://img.freepik.com/premium-psd/testing-features-3d-icon_720522-103.jpg",
  },
  {
    id: 12,
    group: "Test Management",
    title: <span style={{ fontSize: "16px" }}>Question Bank Management</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEcNXG_k6Z_Y9v13OTF9UpwCj1I79vxJKiOU5qUJQHvs1rfGfYdcAHOZdRoLpIiln-6-g&usqp=CAU",
  },
  {
    id: 13,
    group: "Test Management",
    title: <span style={{ fontSize: "16px" }}>User Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/user-management-3d-icon-download-in-png-blend-fbx-gltf-file-formats--setting-managing-vol-2-pack-business-icons-5588783.png",
  },
  {
    id: 14,
    group: "Analytics",
    title: <span style={{ fontSize: "16px" }}>Result Analysis</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6k3BqyH3v9RH6OYngmQRCR3XLPwEwCHqgvg&s",
  },
  {
    id: 15,
    group: "Automation",
    title: <span style={{ fontSize: "16px" }}>Automated Grading</span>,
    image:
      "https://img.freepik.com/premium-vector/settings-3d-icon-automatisation-icon_1115399-461.jpg",
  },
  {
    id: 16,
    group: "Test Management",
    title: <span style={{ fontSize: "16px" }}>Customizable Test Settings</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV9KdM-WRuk7NOikcPYqAMQDEwRR4xrY6BDg&s",
  },
  {
    id: 17,
    group: "Analytics",
    title: <span style={{ fontSize: "16px" }}>Progress Tracking</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/progress-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--path-logo-calculation-dial-gain-timer-fiscal-year-pack-business-illustrations-4233409.png",
  },
  {
    id: 18,
    group: "Feedback",
    title: <span style={{ fontSize: "16px" }}>Feedback Mechanism</span>,
    image:
      "https://cdn3d.iconscout.com/3d/free/thumb/free-user-feedback-3d-icon-download-in-png-blend-fbx-gltf-file-formats--like-logo-customer-review-satisfaction-ads-for-ui-pack-business-icons-8131861.png?f=webp",
  },
  {
    id: 19,
    group: "Support",
    title: <span style={{ fontSize: "16px" }}>Secure Access</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/access-control-3d-icon-download-in-png-blend-fbx-gltf-file-formats--profile-secure-insurance-data-security-pack-crime-icons-9940598.png?f=webp",
  },
  {
    id: 20,
    group: "Apps",
    title: <span style={{ fontSize: "16px" }}>Mobile Compatibility</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-app-testing-3d-icon-download-in-png-blend-fbx-gltf-file-formats--quality-banking-pack-business-icons-11171984.png?f=webp",
  },
  {
    id: 21,
    group: "Scheduling",
    title: (
      <span style={{ fontSize: "16px" }}>Integration with Other Modules</span>
    ),
    image:
      "https://static.vecteezy.com/system/resources/previews/021/054/297/non_2x/integration-3d-icon-free-png.png",
  },
  {
    id: 22,
    group: "Support",
    title: <span style={{ fontSize: "16px" }}>Notification System</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_viT5IU7TPIBvzw9Pa7AFh99amtefL7rVYA&s",
  },
  {
    id: 23,
    group: "Scheduling",
    title: <span style={{ fontSize: "16px" }}>Data Export</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/computer-export-data-3d-icon-download-in-png-blend-fbx-gltf-file-formats--solutions-business-insights-cloud-computing-network-pack-communication-icons-10958407.png?f=webp",
  },
  {
    id: 24,
    group: "Test Management",
    title: <span style={{ fontSize: "16px" }}>Test Management Tools</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/software-testing-3d-icon-download-in-png-blend-fbx-gltf-file-formats--development-programming-coding-pack-design-icons-11281511.png?f=webp",
  },
  {
    id: 25,
    group: "Support",
    title: <span style={{ fontSize: "16px" }}>Multilingual Support</span>,
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/customer-service-and-multilingual-support-illustration-download-in-svg-png-gif-file-formats--chat-care-call-center-business-technology-pack-design-development-illustrations-10087109.png?f=webp",
  },
  {
    id: 26,
    group: "Test Management",
    title: <span style={{ fontSize: "16px" }}>Question Import/Export</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGDRYcRzqqs2z3dQvLhexXOeqrliewQiu1Q&s",
  },
  {
    id: 27,
    group: "Feedback",
    title: <span style={{ fontSize: "16px" }}>Adaptive Testing</span>,
    image:
      "https://img.freepik.com/premium-psd/testing-features-3d-icon_720522-103.jpg",
  },
  {
    id: 28,
    group: "Assessment",
    title: <span style={{ fontSize: "16px" }}>Certification Generation</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9c9y5J-kAnMI7ZZKf0lNHx80UmeflfNO2w&s",
  },
  {
    id: 29,
    group: "Support",
    title: <span style={{ fontSize: "16px" }}>Audit Trail</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6TI6W8pA4-_9yO3ACIH7mTua8gQFpg3Enw&s",
  },
];
const dashboardData = [
  {
    title: "Daily TestSeries Dashboard",
    desc: "The Daily Lead Count Dashboard provides a clear picture of the leads generated on a day-to-day basis. It helps businesses closely monitor their daily performance, identify peak hours of lead generation, and quickly act on any sudden drops in numbers. This real-time visibility is especially valuable for tracking the effectiveness of ongoing campaigns, advertisements, or short-term promotions.",
    img: dashboard1,
  },
  {
    title: "Yearly/Monthly TestSeries Dashboard",
    desc: "The Monthly/Monthly Lead Count Dashboard consolidates leads generated throughout the month and highlights growth trends compared to previous months. It enables businesses to track monthly targets, analyze marketing effectiveness, and plan resources more efficiently. Seasonal or campaign-driven variations also become more visible in this view, making it easier to understand customer behavior patterns.",
    img: dashboard2,
  },
  {
    title: "Source / Course-Wise TestSeries Dashboard",
    desc: "The Source / Course-Wise Lead Dashboard categorizes leads based on their origin, such as website inquiries, social media ads, referrals, walk-ins, agents, or QR code scans. By identifying the most effective lead sources, businesses can optimize their marketing spend, maximize ROI, and focus on the channels that bring in the highest-quality leads. This breakdown ensures better decision-making for campaign planning and channel prioritization.",
    img: dashboard3,
  },

];


const subfeatures = [
  {
    title: "Automated Test Creation",
    detail:
      "Easily create and manage test series with a variety of question types and difficulty levels.",
    image: "https://cdn-icons-png.flaticon.com/512/3079/3079161.png",
  },
  {
    title: "Question Bank Management",
    detail:
      "Maintain a centralized repository of questions for quick test generation and reuse.",
    image: "https://cdn-icons-png.flaticon.com/512/883/883407.png",
  },
  {
    title: "Online Assessment & Evaluation",
    detail:
      "Conduct online tests with instant evaluation and detailed feedback for students.",
    image: "https://cdn-icons-png.flaticon.com/512/2278/2278992.png",
  },
  {
    title: "Performance Analytics",
    detail:
      "Analyze student performance with comprehensive reports and analytics dashboards.",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/analytics-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--data-analysis-of-analyzing-task-manager-pack-business-illustrations-3878340.png",
  },
  {
    title: "Exam Scheduling",
    detail:
      "Schedule tests and notify students with reminders and calendar integration.",
    image: "https://cdn-icons-png.flaticon.com/512/3503/3503788.png",
  },
  {
    title: "Mobile Test Series App",
    detail:
      "Access and attempt test series anytime, anywhere with a secure mobile app.",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/app-development-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--application-programming-coding-computer-pack-design-illustrations-4315311.png?f=webp",
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

const TestSeriesManagementSystem = () => {
  const [selectedGroup, setSelectedGroup] = useState("Test Management");

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
                  Test Series <span style={{ color: "#FFBF00" }}>Management System</span>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
                >
                  <b>Create, manage, and evaluate</b> online and offline tests seamlessly with our
                  Test Series Management System. Organize multiple test series, schedule exams,
                  monitor student performance, and generate instant results — all in one platform.
                  <br />
                  <br />
                  Simplify assessment creation, ensure fair evaluation, and provide detailed analytics
                  to help students and institutions track progress and improve outcomes.
                </Typography>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                  <Chip label="Online & Offline Tests" color="primary" />
                  <Chip label="Instant Result Analysis" color="secondary" />
                  <Chip
                    label="Customizable Question Banks"
                    sx={{ background: "#e1bee7", color: "#333" }}
                  />
                </Box>
              </Grid>

              {/* Right Image Section */}
              <Grid item xs={12} md={6} data-aos="fade-left">
                <motion.img
                  src={image1.src} // replace with a test or exam management dashboard image
                  alt="Test Series Management System"
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
                for Test Series & Assessment Management
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
                The Test Series Management System streamlines and automates all
                test-related processes for educational institutions and coaching
                centers. It covers test creation, scheduling, online assessment,
                reporting, and analytics, ensuring transparency and efficiency
                for both educators and students.
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
              alt="Test Series Management Mobile"
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
              <span className={styles.highlight}>
                Test Series Management System
              </span>
            </h1>
            <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

            <ul className={styles.benefitList}>
              <li>
                <b>Centralized Test Administration:</b> Manage all test series,
                question banks, schedules, and results from one dashboard.
              </li>
              <li>
                <b>Automated Test Creation:</b> Simplifies creation, assignment, and
                grading of tests with smart automation tools.
              </li>
              <li>
                <b>Instant Results & Analytics:</b> Provides real-time result
                generation with performance tracking and student progress reports.
              </li>
              <li>
                <b>Comprehensive Reporting:</b> Generate insightful analytics for
                test performance, difficulty analysis, and subject-wise strengths.
              </li>
              <li>
                <b>Seamless Integration:</b> Integrates with LMS or academic portals
                for smooth data synchronization.
              </li>
              <li>
                <b>Mobile Accessibility:</b> Enables students and faculty to access
                tests, results, and schedules anytime, anywhere on mobile.
              </li>
              <li>
                <b>Role-Based Security:</b> Ensures secure access with encryption
                and permissions for admins, faculty, and students.
              </li>
              <li>
                <b>Enhanced Engagement:</b> Improves learning outcomes with instant
                feedback and detailed performance insights.
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
              <span style={{ color: "#FFBF00" }}>Test Series</span> Management System
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

        {/* Test Series Management & TMS Section */}
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
                    <span> Test Series Management </span>
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      lineHeight: "1.8",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    A Test Series Management System (TMS) serves as a
                    centralized platform for educational institutions and
                    coaching centers to efficiently manage test series,
                    assessments, and student progress. It encompasses
                    functionalities including test creation, question bank
                    management, scheduling, instant evaluation, and analytics.
                    <br />
                    <br />
                    TMS often integrates with other academic and administrative
                    systems and offers customization options to adapt to the
                    specific needs of each institution. Overall, it plays a
                    vital role in streamlining test administration, improving
                    student outcomes, and enhancing the learning experience.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.img
                  src="https://mintbook.com/assetsNew/img/animated2.gif"
                  alt="Test Series Management"
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
                  src="https://relinksys.com/assets/images/bb375cdd655184ca2715ac5059e73651.gif"
                  alt="Test Series Information System"
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
                    <span style={{ color: "#2874A6" }}>Test Series</span>{" "}
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
                    A Test Series Information System is a robust platform
                    designed to manage and maintain comprehensive test data
                    throughout the academic year. It enables institutions to
                    securely store and access test schedules, question banks,
                    results, analytics, and more. The system streamlines test
                    processes, supports analytics, and empowers educators to
                    make informed decisions, ensuring improved student outcomes
                    and engagement.
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
              of Test Series Management System
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

export default TestSeriesManagementSystem;
