import React, { useEffect, useState } from "react";
import AOS from "aos";
import "swiper/css";
import "swiper/css/navigation";
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
import { motion } from "framer-motion";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import phone from "../images/student-info-detail.png";
import image1 from "../images/studypooint-dashboardnew.gif";
import dashboard1 from "../images/StudyPoint MS Dashborad 1.png";
import dashboard2 from "../images/StudyPoint MS Dasborad 2.png";
import dashboard3 from "../images/studypoint dashboard 3.png";
import dashboard4 from "../images/studypoint dashboard 4.png";
import styles from "./StudyPointManagementSystem.module.css"

const dashboardImages = [dashboard1, dashboard2, dashboard3, dashboard4];

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
  "Lead",
  "Admission",
  "Managements",
  "Technology",
  "Communications",
  "Security",
  "Report & Analytics",
  "Support",
  "Apps",
];

const blogs = [
  {
    id: 1,
    title: "Fees Reminder",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/payment-reminder-3d-icon-download-in-png-blend-fbx-gltf-file-formats--schedule-day-payday-salary-plan-finance-pack-business-icons-9123889.png?f=webp",
    group: "Support",
  },
  {
    id: 2,
    title: "24*7 Support",
    image: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
    group: "Support",
  },
  {
    id: 3,
    title: "Fees Tracking",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/finance-management-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--expense-tracking-budgeting-tools-personal-saving-money-financial-planning-pack-business-illustrations-8060292.png?f=webp",
    group: "Managements",
  },
  {
    id: 4,
    title: "Grading & Assessment Integration",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/assessment-3d-icon-download-in-png-blend-fbx-gltf-file-formats--checklist-to-do-list-task-data-analysis-vol-1-pack-business-icons-5231417.png?f=webp",
    group: "Admission",
  },
  {
    id: 5,
    title: "Attendance Monitoring",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/attendance-3d-icon-download-in-png-blend-fbx-gltf-file-formats--check-time-control-jobs-and-career-pack-business-icons-9276167.png?f=webp",
    group: "Admission",
  },
  {
    id: 6,
    title: "Personalized Learning Paths",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/learning-path-3d-icon-download-in-png-blend-fbx-gltf-file-formats--education-journey-personal-growth-knowledge-seeker-development-self-improvement-training-pack-business-icons-9490633.png?f=webp",
    group: "Admission",
  },
  {
    id: 7,
    title: "Credit-Based System",
    image:
      "https://img.freepik.com/free-vector/paper-money-dollar-bills-blue-credit-card-3d-illustration-cartoon-drawing-payment-options-3d-style-white-background-payment-finances-shopping-banking-commerce-concept_778687-724.jpg",
    group: "Admission",
  },
  {
    id: 8,
    title: "Cross-Institutional Credit Transfer",
    image:
      "https://img.freepik.com/free-vector/bill-receipt-credit-card-3d-illustration-cartoon-drawing-paper-sheet-with-dollar-symbol-credit-card-3d-style-white-background-business-payment-finances-transaction-concept_778687-705.jpg",
    group: "Admission",
  },
  {
    id: 9,
    title: "Real-Time Notifications & Alerts",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_qNOIq1IJVgH_yzbubCLxOm4DZQ5viiE2Q&s",
    group: "Technology",
  },
  {
    id: 10,
    title: "Cloud-Based & Mobile Access",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWCgSzryXkjNUv0ED8CzzYCcDJZUt0unxag&s",
    group: "Technology",
  },
  {
    id: 11,
    title: "Security & Data Privacy",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/privacy-3d-icon-download-in-png-blend-fbx-gltf-file-formats--padlock-safe-data-lock-secure-cyber-security-pack-crime-icons-7517278.png",
    group: "Security",
  },
  {
    id: 12,
    title: "Main Dashboard",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-user-analysis-account-business-marketing-pack-illustrations-3930409.png",
    group: "Managements",
  },
  {
    id: 13,
    title: "Admission Management",
    image: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    group: "Managements",
  },
  {
    id: 14,
    title: "Seat Allocation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ECM53plPTaOGhHD2wVAp-8BXZtmYOjyGvQ&s",
    group: "Managements",
  },
  {
    id: 15,
    title: "User Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/team-management-3d-icon-png-download-4863041.png",
    group: "Managements",
  },
  {
    id: 16,
    title: "Settings Management",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXfmi32jM0f_DMj4Bp_pmJFEMuf5cJ0mp0POazcg9YJ94rqS91u7sas8nMfBguAhEkRY&usqp=CAU",
    group: "Managements",
  },
  {
    id: 17,
    title: "Secure Data Management",
    image: "https://cdn-icons-png.flaticon.com/512/3281/3281302.png",
    group: "Managements",
  },
  {
    id: 18,
    title: "Integration with Other Modules",
    image: "https://static.vecteezy.com/system/resources/previews/021/054/297/non_2x/integration-3d-icon-free-png.png",
    group: "Managements",
  },
  {
    id: 19,
    title: "Analytics & Reporting",
    image: "https://cdn1.iconfinder.com/data/icons/essential-marketing/512/Analytic.png",
    group: "Managements",
  },
  {
    id: 20,
    title: "Task Management",
    image: "https://cdn-icons-png.flaticon.com/512/2599/2599693.png",
    group: "Managements",
  },
  {
    id: 21,
    title: "Document Management",
    image: "https://i.pinimg.com/736x/43/4b/6a/434b6aa63bc993d6afa1c9a7f012b78a.jpg",
    group: "Managements",
  },
  {
    id: 22,
    title: "Calendar Integration",
    image: "https://cdn-icons-png.flaticon.com/512/747/747310.png",
    group: "Managements",
  },
  {
    id: 23,
    title: "Multi-User Access",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/multi-user-access-3d-icon-png-download-10920125.png",
    group: "Managements",
  },
  {
    id: 24,
    title: "Audit Trail",
    image: "https://cdn-icons-png.flaticon.com/512/595/595036.png",
    group: "Managements",
  },
  {
    id: 25,
    title: "Real-Time Notifications",
    image: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png",
    group: "Communications",
  },
  {
    id: 26,
    title: "Communication History",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/history-3d-icon-png-download-8610216.png",
    group: "Communications",
  },
  {
    id: 27,
    title: "Feedback Mechanism",
    image: "https://static.vecteezy.com/system/resources/previews/038/566/807/non_2x/quick-response-3d-icon-illustration-feedback-3d-rendering-free-png.png",
    group: "Communications",
  },
  {
    id: 28,
    title: "Enquiry Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/management-3d-icon-png-download-6723108.png",
    group: "Support",
  },
  {
    id: 29,
    title: "Lead Tracking & Management",
    image: "https://cdn-icons-png.flaticon.com/512/1019/1019607.png",
    group: "Support",
  },
  {
    id: 30,
    title: "Customizable Forms",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/form-3d-icon-png-download-6560109.png?f=webp",
    group: "Support",
  },
  {
    id: 31,
    title: "Mobile Accessibility",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-access-3d-icon-png-download-8932096.png",
    group: "Apps",
  },
  {
    id: 32,
    title: "Study Point App",
    image:
      "https://img.freepik.com/premium-vector/3d-cartoon-style-minimal-city-map-navigation-smartphone-icon-mobile-app-interface-geolocation-concept_365941-662.jpg",
    group: "Apps",
  },
  {
    id: 33,
    title: "Monthly Inquiries Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-icon-png-download-3930409.png",
    group: "Dashboard"
  },
  {
    id: 34,
    title: "Daily Inquiries Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/user-dashboard-3d-icon-png-download-12296671.png",
    group: "Dashboard"
  },
  {
    id: 35,
    title: "Inquiries By Source Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/choices-3d-icon-png-download-11037958.png",
    group: "Dashboard"
  },
  {
    id: 36,
    title: "Monthly Admissions Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-icon-png-download-11233740.png",
    group: "Dashboard"
  },
  {
    id: 37,
    title: "Yearly Admissions Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-template-3d-icon-png-download-4800674.png",
    group: "Dashboard"
  },
  {
    id: 38,
    title: "Admissions By Source Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-icon-png-download-10863238.png",
    group: "Dashboard"
  },
  {
    id: 39,
    title: "StudyPoint List Reporting",
    image: "https://cdn-icons-png.flaticon.com/512/10473/10473656.png",
    group: "Report & Analytics",
  },
  {
    id: 40,
    title: "StudyPoint Conduct Reporting",
    image: "https://static.vecteezy.com/system/resources/previews/046/680/407/non_2x/3d-report-icon-report-symbol-3d-free-png.png",
    group: "Report & Analytics",
  },
  {
    id: 41,
    title: "StudyPoint Sourses Reporting",
    image: "https://static.vecteezy.com/system/resources/previews/046/680/425/non_2x/3d-report-icon-report-symbol-3d-free-png.png",
    group: "Report & Analytics",
  },
  {
    id: 42,
    title: "StudyPoint Courses Reporting",
    image: "https://static.vecteezy.com/system/resources/thumbnails/047/666/837/small/business-planning-business-object-illustration-3d-png.png",
    group: "Report & Analytics",
  },
  {
    id: 43,
    title: "StudyPoint Feedback Reporting Analytics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsJ058P7MPoAdMN-nF3vj46nFUo35dwwo7Q&s",
    group: "Report & Analytics",
  },
  {
    id: 44,
    title: "StudyPoint Task Reporting Analytics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61xKylgS10ddLCbPG7MLHebCHIeE53UTO-w&s",
    group: "Report & Analytics",
  },
  {
    id: 45,
    title: "Montly / Daily Inquiries StudyPoint Dashboard",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRsAG5ecyXcDtJlzPZSwyW6pmu6KSWVEi4eA&s",
    group: "Lead",
  },
  {
    id: 46,
    title: "Inquiries By Source Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/user-dashboard-3d-icon-png-download-12296671.png",
    group: "Lead",
  },
  {
    id: 47,
    title: "Creation of Leads",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/client-acquisition-3d-icon-png-download-10522950.png",
    group: "Lead",
  },
  {
    id: 48,
    title: "Inguiry Follow-Up",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-11035008.png",
    group: "Lead",
  },
  {
    id: 49,
    title: "Inguiry List",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-8399892.png",
    group: "Lead",
  },
  {
    id: 50,
    title: "Monthly / Yearly Admission Dashboard",
    image: "https://thumbs.dreamstime.com/b/monthly-report-d-icon-symbolizing-business-financial-data-analysis-368588101.jpg",
    group: "Admission",
  },
  {
    id: 51,
    title: "Generation of Admission",
    image: "https://png.pngtree.com/png-vector/20250716/ourlarge/pngtree-monitoring-dashboard-3d-icon-png-image_16646524.webp",
    group: "Admission",
  },
  {
    id: 52,
    title: "Admission Follow-Up",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/student-information-3d-icon-png-download-9436222.png",
    group: "Admission",
  },
  {
    id: 53,
    title: "Admission List",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/list-3d-icon-png-download-5526051.png",
    group: "Admission",
  },
  {
    id: 54,
    title: "User Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/team-management-3d-icon-png-download-4863041.png",
    group: "Admission",
  },
  {
    id: 55,
    title: "Conduct Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/management-3d-icon-png-download-12569757.png",
    group: "Admission",
  },
  {
    id: 56,
    title: "QR Code Generation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb4KFB5jik-eLt9Jn_JX3sgFV-EktsShjShA&s",
    group: "Admission",
  },



];

const dashboardData = [
  {
    title: "Monthly / Daily Inquiries StudyPoint Dashboard",
    desc: "The Daily Lead Count Dashboard provides a clear picture of the leads generated on a day-to-day basis. It helps businesses closely monitor their daily performance, identify peak hours of lead generation, and quickly act on any sudden drops in numbers. This real-time visibility is especially valuable for tracking the effectiveness of ongoing campaigns, advertisements, or short-term promotions.",
    img: dashboard1,
  },
  {
    title: "Inquiries By Source Dashboard",
    desc: "The Monthly/Monthly Lead Count Dashboard consolidates leads generated throughout the month and highlights growth trends compared to previous months. It enables businesses to track monthly targets, analyze marketing effectiveness, and plan resources more efficiently. Seasonal or campaign-driven variations also become more visible in this view, making it easier to understand customer behavior patterns.",
    img: dashboard2,
  },
  {
    title: "Monthly / Yearly Admission Dashboard",
    desc: "The Source / Course-Wise Lead Dashboard categorizes leads based on their origin, such as website inquiries, social media ads, referrals, walk-ins, agents, or QR code scans. By identifying the most effective lead sources, businesses can optimize their marketing spend, maximize ROI, and focus on the channels that bring in the highest-quality leads. This breakdown ensures better decision-making for campaign planning and channel prioritization.",
    img: dashboard3,
  },
  {
    title: "Admission By Source  Dashboard",
    desc: "The Source / Course-Wise Lead Dashboard categorizes leads based on their origin, such as website inquiries, social media ads, referrals, walk-ins, agents, or QR code scans. By identifying the most effective lead sources, businesses can optimize their marketing spend, maximize ROI, and focus on the channels that bring in the highest-quality leads. This breakdown ensures better decision-making for campaign planning and channel prioritization.",
    img: dashboard4,
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
const subfeatures = [
  {
    title: "Centralized Student Records",
    detail:
      "Maintain all student data, including enrollment, attendance, grades, and assignments, in a unified digital platform.",
    image: "https://cdn-icons-png.flaticon.com/512/4205/4205497.png",
  },
  {
    title: "Attendance Monitoring",
    detail:
      "Track and report student and faculty attendance in real time, with automated alerts for absentees.",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/attendance-3d-icon-download-in-png-blend-fbx-gltf-file-formats--check-time-control-jobs-and-career-pack-business-icons-9276167.png?f=webp",
  },
  {
    title: "Assignment & Exam Management",
    detail:
      "Schedule, distribute, and collect assignments and exams digitally, with automated grading and feedback.",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/assessment-3d-icon-download-in-png-blend-fbx-gltf-file-formats--checklist-to-do-list-task-data-analysis-vol-1-pack-business-icons-5231417.png?f=webp",
  },
  {
    title: "Performance Analytics",
    detail:
      "Generate real-time reports and analytics on student progress, grades, and academic trends.",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/data-analytics-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-technology-business-pack-icons-6149163.png?f=webp",
  },
  {
    title: "Fee Management",
    detail:
      "Automate fee collection, payment tracking, and receipt generation for students and batches.",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/payment-reminder-3d-icon-download-in-png-blend-fbx-gltf-file-formats--schedule-day-payday-salary-plan-finance-pack-business-icons-9123889.png?f=webp",
  },
  {
    title: "Parent Communication",
    detail:
      "Send SMS/email notifications to parents about attendance, performance, and important updates.",
    image: "https://cdn-icons-png.flaticon.com/512/3550/3550701.png",
  },
  {
    title: "Personalized Learning Paths",
    detail:
      "Adapt course content and study recommendations based on each student’s progress and needs.",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/learning-path-3d-icon-download-in-png-blend-fbx-gltf-file-formats--education-journey-personal-growth-knowledge-seeker-development-self-improvement-training-pack-business-icons-9490633.png?f=webp",
  },
  {
    title: "Cloud-Based & Mobile Access",
    detail:
      "Access the system securely from any device, anywhere, with automatic cloud backups.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWCgSzryXkjNUv0ED8CzzYCcDJZUt0unxag&s",
  },
  {
    title: "Security & Data Privacy",
    detail:
      "Ensure safe storage of academic records and protect sensitive data with robust security protocols.",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/privacy-3d-icon-download-in-png-blend-fbx-gltf-file-formats--padlock-safe-data-lock-secure-cyber-security-pack-crime-icons-7517278.png",
  },
  {
    title: "Multi-Language Support",
    detail:
      "Support different languages for a diverse student base and better understanding of materials.",
    image: "https://cdn-icons-png.flaticon.com/512/1250/1250689.png",
  },
];

const StudyPointManagementSystem = () => {
  const [selectedGroup, setSelectedGroup] = useState("Dashboard");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleGroupChange = (group) => {
    setSelectedGroup(group);
    AOS.refresh();
  };

  const filteredBlogs = blogs.filter((blog) => blog.group === selectedGroup);

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
                Study Point <span style={{ color: "#FFBF00" }}>Management System</span>
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
              >
                <b>Empower learning, track progress, and manage resources</b> with our
                advanced Study Point Management System. From student performance
                monitoring, assignment tracking, and resource sharing to attendance,
                exam records, and communication—everything is centralized on one
                platform. Ensure productivity, transparency, and better collaboration
                for students, teachers, and administrators.
                <br /><br />
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                <Chip label="Performance Tracking" color="primary" />
                <Chip label="Resource Management" color="secondary" />
                <Chip
                  label="Seamless Communication"
                  sx={{ background: "#e1bee7", color: "#333" }}
                />
              </Box>
            </Grid>

            {/* Right Image Section */}
            <Grid item xs={12} md={6} data-aos="fade-left">
              <motion.img
                src={image1.src} // replace with study-related image
                alt="Study Point Management System"
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

      {/* Description Section for Study Point */}
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
              Study Point & Academic Management
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
              The Study Point Management System simplifies and organizes all
              academic and student-related activities. It manages courses, study
              materials, assignments, exams, and progress tracking, providing an
              efficient and transparent platform for students, teachers, and
              administrators.
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
            alt="StudyPoint Information Mobile"
          />
        </div>

        {/* Right Section: Benefits Text */}
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
            <span className={styles.highlight}>StudyPoint Information System</span>
          </h1>
          <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

          <ul className={styles.benefitList}>
            <li>
              <b>Centralized Administration:</b> Manage student data, admissions,
              academics, and finances from one unified platform.
            </li>
            <li>
              <b>Automated Fee Management:</b> Simplifies fee collection, reminders,
              and receipt generation — minimizing manual work.
            </li>
            <li>
              <b>Efficient Attendance Tracking:</b> Real-time attendance for students
              and staff with automated reports and alerts.
            </li>
            <li>
              <b>Library Management:</b> Keep track of books, issues, returns, and
              inventory effortlessly.
            </li>
            <li>
              <b>Timetable & Scheduling:</b> Easily create and manage class and staff
              schedules to ensure smooth academic flow.
            </li>
            <li>
              <b>Mobile Accessibility:</b> Access the system anywhere, anytime, with
              mobile-friendly interfaces.
            </li>
            <li>
              <b>Data Security:</b> Maintain data integrity and privacy with
              role-based secure access and cloud backup.
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
            <span style={{ color: "#FFBF00" }}>StudyPoint</span>Management System Dashboards
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

      {/* Study Point System Section */}
      <Box sx={{ padding: "40px 20px" }}>
        <Container>
          {/* First Row - Study Point Management */}
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
                  <span>Study Point Management</span>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    lineHeight: "1.8",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  A Study Point Management System is a centralized platform that
                  helps educational institutions track and manage students’
                  study progress, assignments, performance points, and
                  attendance. It enhances academic efficiency by providing
                  real-time reports and a digital record of student
                  achievements.
                  <br />
                  <br />
                  The system supports teachers, parents, and students by
                  offering insights into academic performance, enabling better
                  decision-making and improved learning outcomes.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.img
                src="https://i.pinimg.com/originals/d6/47/b4/d647b456928a2d3672f45cc782a94b35.gif"
                alt="Study Point Management"
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

          {/* Second Row - Study Point Information System */}
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{ marginBottom: "40px" }}
          >
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <motion.img
                src="https://topwebpro.co.uk/wp-content/uploads/2023/02/inventory-management.gif"
                alt="Study Point Information System"
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
                  <span style={{ color: "#2874A6" }}>Study Point</span>{" "}
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
                  A Study Point Information System allows institutions to
                  maintain comprehensive student records including assignments,
                  grades, attendance, and study milestones. It streamlines data
                  access for teachers and students, supports academic analytics,
                  and ensures better collaboration between educators and
                  parents.
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
            of StudyPoint Management System
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

export default StudyPointManagementSystem;
