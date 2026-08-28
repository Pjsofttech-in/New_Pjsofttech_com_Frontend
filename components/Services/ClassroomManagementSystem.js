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
import phone from "../images/student-info-detail.png";
import classroom from "../images/classroom.gif";
import dashboard1 from "../images/leaddashboard1.png";
import dashboard2 from "../images/LeadDashboard2.png";
import dashboard3 from "../images/leaddashboard3.png";
import styles from "./ClassroomManagementSystem.module.css"

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
  "Communication",
  "Classroom",
  "Attendance",
  "Scheduling",
  "Reports",
  "Support",
  "Apps",
];

const blogs = [
  {
    id: 1,
    title: <span style={{ fontSize: "16px" }}>Class Scheduling</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtqqiKAmm6GypYajL33xTHhoCQhCwAU9wyUq94DZf5xqzJxq11KSAyyGgfjYpiKVvygrw&usqp=CAU",
    group: "Classroom",
  },
  {
    id: 2,
    title: <span style={{ fontSize: "16px" }}>Attendance Tracking</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3048/3048394.png",
    group: "Attendance",
  },
  {
    id: 3,
    title: <span style={{ fontSize: "16px" }}>Assignment Management</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Q06SJCHpbHIt-k598JVbf1B0QZ_3m3L99g&s",
    group: "Classroom",
  },
  {
    id: 4,
    title: <span style={{ fontSize: "16px" }}>Student Performance</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UkqojDGLQZYHHzffFs-fy-oh5EkQdN4ifeO46cfqb9iLW1NAGBfCdZMZME330r6BHFQ&usqp=CAU",
    group: "Reports",
  },
  {
    id: 5,
    title: <span style={{ fontSize: "16px" }}>Parent Communication</span>,
    image: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
    group: "Support",
  },
  {
    id: 6,
    title: <span style={{ fontSize: "16px" }}>Timetable Management</span>,
    image: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    group: "Scheduling",
  },
  {
    id: 7,
    title: <span style={{ fontSize: "16px" }}>Mobile Classroom App</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2JugdZHfy7yfhqVpw0wpAsDcn4z9IBbbjBw&s",
    group: "Apps",
  },
  {
    id: 8,
    title: <span style={{ fontSize: "16px" }}>Resource Sharing</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3950/3950815.png",
    group: "Classroom",
  },
  {
    id: 9,
    title: <span style={{ fontSize: "16px" }}>Exam Scheduling</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3503/3503788.png",
    group: "Scheduling",
  },
  {
    id: 10,
    title: <span style={{ fontSize: "16px" }}>Classroom Analytics</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/analytics-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--data-analysis-of-analyzing-task-manager-pack-business-illustrations-3878340.png",
    group: "Reports",
  },
  {
    id: 11,
    title: <span style={{ fontSize: "16px" }}>Live Classroom</span>,
    image: "https://img.freepik.com/premium-photo/mix-82_1266756-2636.jpg",
    group: "Classroom",
  },
  {
    id: 12,
    title: <span style={{ fontSize: "16px" }}>Assignment Management</span>,
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
    group: "Assessment",
  },
  {
    id: 13,
    title: <span style={{ fontSize: "16px" }}>Test Series Creation</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3079/3079161.png",
    group: "Assessment",
  },
  {
    id: 14,
    title: <span style={{ fontSize: "16px" }}>Quizzes</span>,
    image: "https://cdn-icons-png.flaticon.com/512/2278/2278992.png",
    group: "Assessment",
  },
  {
    id: 15,
    title: <span style={{ fontSize: "16px" }}>eBook Integration</span>,
    image: "https://cdn-icons-png.flaticon.com/512/2991/2991109.png",
    group: "Content",
  },
  {
    id: 16,
    title: <span style={{ fontSize: "16px" }}>Homework Tracking</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3304/3304566.png",
    group: "Assessment",
  },
  {
    id: 17,
    title: <span style={{ fontSize: "16px" }}>Student Progress Reports</span>,
    image: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    group: "Reports",
  },
  {
    id: 18,
    title: <span style={{ fontSize: "16px" }}>Interactive Whiteboard</span>,
    image:
      "https://thumbs.dreamstime.com/b/interactive-whiteboard-23365137.jpg",
    group: "Classroom",
  },
  {
    id: 19,
    title: <span style={{ fontSize: "16px" }}>Multimedia Support</span>,
    image:
      "https://cdn2.iconfinder.com/data/icons/multimedia-design/512/Transition.png",
    group: "Support",
  },
  {
    id: 20,
    title: <span style={{ fontSize: "16px" }}>Discussion Forums</span>,
    image:
      "https://img.freepik.com/premium-photo/3d-group-discussion-illustration_541443-201.jpg",
    group: "Communication",
  },
  {
    id: 21,
    title: <span style={{ fontSize: "16px" }}>Calendar Integration</span>,
    image: "https://cdn-icons-png.flaticon.com/512/747/747310.png",
    group: "Utilities",
  },
  {
    id: 22,
    title: <span style={{ fontSize: "16px" }}>Notifications and Alerts</span>,
    image:
      "https://img.freepik.com/free-vector/realistic-notification-bell-3d-icon-isolated-white-background-new-notification-concept-social-media-element_145391-1218.jpg",
    group: "Communication",
  },
  {
    id: 23,
    title: <span style={{ fontSize: "16px" }}>Gradebook</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJi4aeidDq8JfqAbvesfKOUkbrOa41idUa4g&s",
    group: "Reports",
  },
  {
    id: 24,
    title: <span style={{ fontSize: "16px" }}>Attendance Monitoring</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3524/3524377.png",
    group: "Utilities",
  },
  {
    id: 25,
    title: <span style={{ fontSize: "16px" }}>Resource Library</span>,
    image: "https://cdn-icons-png.flaticon.com/512/883/883407.png",
    group: "Content",
  },
  {
    id: 26,
    title: <span style={{ fontSize: "16px" }}>Mobile Accessibility</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3602/3602123.png",
    group: "Utilities",
  },
  {
    id: 27,
    title: <span style={{ fontSize: "16px" }}>Customizable Interface</span>,
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828910.png",
    group: "Utilities",
  },
  {
    id: 28,
    title: <span style={{ fontSize: "16px" }}>Secure Data Management</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    group: "Security",
  },
  {
    id: 29,
    title: (
      <span style={{ fontSize: "16px" }}>Integration with Other Modules</span>
    ),
    image: "https://cdn-icons-png.flaticon.com/512/3004/3004613.png",
    group: "Integration",
  },
  {
    id: 30,
    title: <span style={{ fontSize: "16px" }}>Feedback Mechanism</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yy_ubrlRZrP02l-9ilJ0RoXcvhuMYLK7og&s",
    group: "Communication",
  },
  {
    id: 31,
    title: <span style={{ fontSize: "16px" }}>User Role Management</span>,
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
    group: "Security",
  },
  {
    id: 32,
    title: <span style={{ fontSize: "16px" }}>Data Backup and Recovery</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    group: "Security",
  },
  {
    id: 33,
    title: <span style={{ fontSize: "16px" }}>Customizable Dashboards</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-user-analysis-account-business-marketing-pack-illustrations-3930409.png?f=webp",
    group: "Reports",
  },
  {
    id: 34,
    title: (
      <span style={{ fontSize: "16px" }}>Virtual Classroom Integration</span>
    ),
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/digital-learning-3d-icon-download-in-png-blend-fbx-gltf-file-formats--online-education-study-e-pack-icons-8248945.png?f=webp",
    group: "Classroom",
  },
  {
    id: 35,
    title: <span style={{ fontSize: "16px" }}>Student Profiles</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    group: "Communication",
  },
  {
    id: 36,
    title: <span style={{ fontSize: "16px" }}>Teacher Profiles</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpXQ2TwvZBCc-3tTgKqdRVNZ8dfUP3dzCaKQ&s",
    group: "Communication",
  },
  {
    id: 37,
    title: <span style={{ fontSize: "16px" }}>Classroom Resources</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/classroom-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--learning-study-students-class-teacher-miscellaneous-pack-illustrations-4463489.png",
    group: "Classroom",
  },
  {
    id: 38,
    title: <span style={{ fontSize: "16px" }}>Event Management</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/imag es?q=tbn:ANd9GcT-XkKY1omYBTJBcJbBSe-sOT8i7TP6ydkSgQ&s",
    group: "Scheduling",
  },
  {
    id: 39,
    title: <span style={{ fontSize: "16px" }}>Classroom Feedback</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/feedback-message-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--like-logo-chat-bubble-network-communication-illustrations-4471252.png",
    group: "Communication",
  },
  {
    id: 41,
    title: <span style={{ fontSize: "16px" }}>Classroom Notifications</span>,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/027/127/245/small/3d-rendering-of-notification-bell-icons-suitable-for-vlog-asset-3d-icons-set-png.png",
    group: "Communication",
  },
  {
    id: 42,
    title: <span style={{ fontSize: "16px" }}>Classroom Events</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReXIfTKErXTZYxsFjU50DtodmQw9iBkF-thg&s",
    group: "Scheduling",
  },
  {
    id: 43,
    title: <span style={{ fontSize: "19px" }}>Student App</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/app-development-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--application-programming-coding-computer-pack-design-illustrations-4315311.png?f=webp",
    group: "Apps",
  },
  {
    id: 44,
    title: <span style={{ fontSize: "19px" }}>Teacher App</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-development-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--app-design-application-technology-pack-user-interface-illustrations-4708214.png",
    group: "Apps",
  },

];
const dashboardData = [
  {
    title: "Daily Classroom Dashboard",
    desc: "The Daily Lead Count Dashboard provides a clear picture of the leads generated on a day-to-day basis. It helps businesses closely monitor their daily performance, identify peak hours of lead generation, and quickly act on any sudden drops in numbers. This real-time visibility is especially valuable for tracking the effectiveness of ongoing campaigns, advertisements, or short-term promotions.",
    img: dashboard1,
  },
  {
    title: "Yearly/Monthly Classroom Dashboard",
    desc: "The Monthly/Monthly Lead Count Dashboard consolidates leads generated throughout the month and highlights growth trends compared to previous months. It enables businesses to track monthly targets, analyze marketing effectiveness, and plan resources more efficiently. Seasonal or campaign-driven variations also become more visible in this view, making it easier to understand customer behavior patterns.",
    img: dashboard2,
  },
  {
    title: "Source / Course-Wise Classroom Dashboard",
    desc: "The Source / Course-Wise Lead Dashboard categorizes leads based on their origin, such as website inquiries, social media ads, referrals, walk-ins, agents, or QR code scans. By identifying the most effective lead sources, businesses can optimize their marketing spend, maximize ROI, and focus on the channels that bring in the highest-quality leads. This breakdown ensures better decision-making for campaign planning and channel prioritization.",
    img: dashboard3,
  },

];

const subfeatures = [
  {
    title: "Automated Attendance",
    detail:
      "Track student attendance in real-time and generate instant reports for teachers and parents.",
    image: "https://cdn-icons-png.flaticon.com/512/3048/3048394.png",
  },
  {
    title: "Assignment & Homework Management",
    detail:
      "Assign, collect, and grade homework digitally, making it easy for teachers and students to stay organized.",
    image: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
  },
  {
    title: "Class Scheduling",
    detail:
      "Easily create and manage class timetables, exam schedules, and resource allocation.",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Parent & Student Communication",
    detail:
      "Send notifications, updates, and progress reports directly to parents and students.",
    image: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
  },
  {
    title: "Performance Analytics",
    detail:
      "Analyze student performance with detailed dashboards and customizable reports.",
    image: "https://cdn-icons-png.flaticon.com/512/2784/2784461.png",
  },
  {
    title: "Mobile Classroom App",
    detail:
      "Access classroom features anytime, anywhere with a secure mobile app for teachers and students.",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
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

const ClassroomManagementSystem = () => {
  const [selectedGroup, setSelectedGroup] = useState("Classroom");

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
                  Classroom Management <span style={{ color: "#FFBF00" }}>System</span>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
                >
                  <b>Organize, monitor, and enhance</b> classroom activities effortlessly with our
                  Classroom Management System. Manage student attendance, assignments, performance,
                  and communication — all within a single, user-friendly dashboard.
                  <br />
                  <br />
                  Empower teachers to create a structured learning environment, track progress
                  effectively, and improve student engagement through real-time collaboration tools.
                </Typography>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                  <Chip label="Attendance Tracking" color="primary" />
                  <Chip label="Assignment Management" color="secondary" />
                  <Chip
                    label="Student Performance Reports"
                    sx={{ background: "#e1bee7", color: "#333" }}
                  />
                </Box>
              </Grid>

              {/* Right Image Section */}
              <Grid item xs={12} md={6} data-aos="fade-left">
                <motion.img
                  src={classroom.src} // replace with a classroom dashboard or e-learning image
                  alt="Classroom Management System"
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
                for Classroom & Academic Management
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
                The Classroom Management System streamlines and automates all
                classroom-related processes for educational institutions. It
                covers scheduling, attendance, assignments, communication, and
                analytics, ensuring transparency and efficiency for both
                teachers and students.
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
              alt="Classroom Management Mobile"
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
              <span className={styles.highlight}>Classroom Management System</span>
            </h1>
            <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

            <ul className={styles.benefitList}>
              <li>
                <b>Centralized Classroom Operations:</b> Manage schedules, lesson
                plans, assignments, and attendance seamlessly in one platform.
              </li>
              <li>
                <b>Automated Attendance Tracking:</b> Digitally record attendance
                and generate accurate reports automatically.
              </li>
              <li>
                <b>Assignment & Homework Management:</b> Create, distribute, and
                grade assignments online to boost efficiency.
              </li>
              <li>
                <b>Interactive Communication Tools:</b> Engage students and parents
                through instant alerts, messages, and announcements.
              </li>
              <li>
                <b>Performance Monitoring:</b> Track academic progress with
                analytics, progress charts, and performance summaries.
              </li>
              <li>
                <b>Mobile & Web Accessibility:</b> Access classroom data anytime,
                anywhere—optimized for mobile devices.
              </li>
              <li>
                <b>Data Security & Privacy:</b> Protect sensitive data with
                encryption and secure role-based access.
              </li>
              <li>
                <b>Comprehensive Reports:</b> Generate insights on attendance,
                performance, and overall academic growth.
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
              <span style={{ color: "#FFBF00" }}>Classroom</span> Management System
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

        {/* Classroom Management & CMS Section */}
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
                    <span> Classroom Management </span>
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      lineHeight: "1.8",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    A Classroom Management System (CMS) serves as a centralized
                    platform for educational institutions to efficiently manage
                    classroom activities and processes. It encompasses
                    functionalities including scheduling, attendance, assignment
                    management, resource sharing, and communication.
                    <br />
                    <br />
                    CMS often integrates with other academic and administrative
                    systems and offers customization options to adapt to the
                    specific needs of each institution. Overall, it plays a
                    vital role in streamlining classroom administration,
                    improving student engagement, and enhancing the learning
                    experience.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.img
                  src="https://mintbook.com/assetsNew/img/animated2.gif"
                  alt="Classroom Management"
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
                  src="https://e-tuitions.com/img/demo-classes.gif"
                  alt="Classroom Information System"
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
                    <span style={{ color: "#2874A6" }}>Classroom</span>{" "}
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
                    A Classroom Information System is a robust platform designed
                    to manage and maintain comprehensive classroom data
                    throughout the academic year. It enables institutions to
                    securely store and access schedules, attendance,
                    assignments, grades, and more. The system streamlines
                    classroom processes, supports analytics, and empowers
                    teachers to make informed decisions, ensuring improved
                    student outcomes and engagement.
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
              of Classroom Management System
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

export default ClassroomManagementSystem;
