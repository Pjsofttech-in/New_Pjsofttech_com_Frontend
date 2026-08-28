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
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import phone from "../images/student-info-detail.png";
import payroll from "../images/payrollsystem.gif";
import dashboard1 from "../images/Payroll MS Dashboard 1.png";
import dashboard2 from "../images/Payroll Ms Dashboard 2.png";
import styles from "./PayrollManagement.module.css";

const dashboardImages = [dashboard1, dashboard2];

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
  "Payroll",
  "Attendance",
  "Salary",
  "Managements",
  "Communication",
  "Reports & Analytics",
  "Support",
  "Apps",
];

const blogs = [
  {
    id: 1,
    title: <span style={{ fontSize: "16px" }}>Payroll Processing</span>,
    image: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
    group: "Payroll",
  },
  {
    id: 2,
    title: <span style={{ fontSize: "16px" }}>Salary Calculation</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz7GTciztV0vT3OVvZ6HtEkFzDJL22g3PvGg&s",
    group: "Salary",
  },
  {
    id: 3,
    title: <span style={{ fontSize: "16px" }}>Attendance Integration</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/class-attendance-3d-icon-download-in-png-blend-fbx-gltf-file-formats--present-classroom-digital-remote-education-intelligent-learning-management-pack-school-icons-12031395.png?f=webp",
    group: "Attendance",
  },
  {
    id: 4,
    title: <span style={{ fontSize: "16px" }}>Payslip Generation</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/pay-3d-icon-png-download-8149040.png",
    group: "Payroll",
  },
  {
    id: 5,
    title: <span style={{ fontSize: "16px" }}>Tax Management</span>,
    image:
      "https://img.freepik.com/premium-psd/tax-3d-vector-icon-illustration-asset_509353-143.jpg",
    group: "Payroll",
  },
  {
    id: 6,
    title: (
      <span style={{ fontSize: "16px" }}>Comprehensive Payroll Reports</span>
    ),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkg-yvIOpdllrdebpzDNT8KRmiS2Bw6-rQGOd1D4jTzkWBzaME-06KHIWRks04oT5FHvI&usqp=CAU",
    group: "Reports & Analytics",
  },
  {
    id: 7,
    title: <span style={{ fontSize: "16px" }}>24*7 Support</span>,
    image: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
    group: "Support",
  },
  {
    id: 8,
    title: <span style={{ fontSize: "16px" }}>Mobile Payroll App</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/educational-app-3d-icon-download-in-png-blend-fbx-gltf-file-formats--online-education-learning-study-mobile-university-e-pack-icons-8248946.png?f=webp",
    group: "Apps",
  },

  {
    id: 10,
    title: <span style={{ fontSize: "16px" }}>Statutory Compliance</span>,
    image:
      "https://cdn-icons-png.flaticon.com/512/14639/14639173.png?semt=ais_hybrid",
    group: "Payroll",
  },
  {
    id: 11,
    title: <span style={{ fontSize: "16px" }}>Employee Self Service</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
    group: "Apps",
  },
  {
    id: 12,
    title: <span style={{ fontSize: "16px" }}>Bank Transfer Integration</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/bank-transfer-3d-icon-png-download-8026894.png",
    group: "Payroll",
  },
  {
    id: 13,
    title: (
      <span style={{ fontSize: "16px" }}>Customizable Salary Structures</span>
    ),
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/salary-3d-icon-download-in-png-blend-fbx-gltf-file-formats--business-financial-management-finance-education-income-pack-icons-11470647.png",
    group: "Salary",
  },
  {
    id: 14,
    title: <span style={{ fontSize: "16px" }}>Multi-Branch Payroll</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/payroll-card-3d-icon-png-download-12283214.png",
    group: "Payroll",
  },
  {
    id: 15,
    title: <span style={{ fontSize: "16px" }}>Real-Time Analytics</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/data-analytics-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-technology-business-pack-icons-6149163.png",
    group: "Reports & Analytics",
  },
  {
    id: 16,
    group: "Payroll",
    title: "Hourly Salary Management",
    image: "https://cdn-icons-png.flaticon.com/512/2721/2721066.png",
  },
  {
    id: 17,
    group: "Payroll",
    title: "Monthly Salary Processing",
    image: "https://cdn-icons-png.flaticon.com/512/6997/6997756.png",
  },
  {
    id: 18,
    group: "Payroll",
    title: "Automated Salary Calculations",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/payroll-3d-icon-png-download-6166048.png",
  },
  {
    id: 19,
    group: "Payroll",
    title: "Overtime Calculation",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DfYbq9Pzfiz3y30Lt6IBPnFE5Bb2DE3NUg&s",
  },
  {
    id: 20,
    group: "Payroll",
    title: "Bonus and Incentive Management",
    image: "https://cdn-icons-png.flaticon.com/512/4213/4213256.png",
  },
  {
    id: 21,
    group: "Payroll",
    title: "Loan and Advance Tracking",
    image: "https://static.vecteezy.com/system/resources/thumbnails/028/700/139/small/loan-application-3d-icon-online-loan-application-3d-render-coin-with-loan-application-3d-render-png.png",
  },
  {
    id: 22,
    group: "Payroll",
    title: "Customizable Salary Components",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyrkRPjCM86GQVZ91eimQhaRYeL7lel8-s0Q&s",
  },
  {
    id: 23,
    group: "Payroll",
    title: "Multi-Currency Support",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/multi-currency-3d-icon-download-in-png-blend-fbx-gltf-file-formats--global-wallet-money-app-fintech-pack-business-icons-11668237.png?f=webp",
  },
  {
    id: 24,
    group: "Attendance",
    title: "Attendance Integration",
    image: "https://cdn-icons-png.flaticon.com/512/3048/3048394.png",
  },
  {
    id: 25,
    group: "Attendance",
    title: "Leave Management",
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
  },
  {
    id: 26,
    group: "Reports & Analytics",
    title: "Reporting and Analytics",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/analytics-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--data-analysis-of-analyzing-task-manager-pack-business-illustrations-3878340.png",
  },
  {
    id: 27,
    group: "Reports & Analytics",
    title: "Audit Trail",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfrSlpygQGj41CY90TtdfgRWjMWhRWLl4J5Q&s",
  },
  {
    id: 28,
    group: "Reports & Analytics",
    title: "Tax Computation",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_gMM2ZXKriO5Z8oOJpfRXSXZkjsxWRKCgg&s",
  },
  {
    id: 29,
    group: "Reports & Analytics",
    title: "Compliance Management",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9tXJ-dqnSu3UwyBDVxXa7yaINVt7zjlZ8pg&s",
  },
  {
    id: 30,
    group: "Support",
    title: "Employee Self-Service Portal",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
  },
  {
    id: 31,
    group: "Support",
    title: "Pay slip Generation",
    image:
      "https://img.freepik.com/premium-vector/flat-design-icon-salary-slip_362714-6064.jpg",
  },
  {
    id: 32,
    group: "Support",
    title: "Direct Bank Transfers",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2JugdZHfy7yfhqVpw0wpAsDcn4z9IBbbjBw&s",
  },
  {
    id: 33,
    group: "Apps",
    title: "Mobile Accessibility",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxFu9olEhWWEO0re2S-Fae61xXQo4KW_k8ZQ&s",
  },
  {
    id: 34,
    group: "Apps",
    title: "Secure Data Handling",
    image: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
  },
  {
    id: 35,
    group: "Salary",
    title: "Integration with Accounting Systems",
    image: "https://cdn-icons-png.flaticon.com/512/2784/2784461.png",
  },
  {
    id: 36,
    group: "Dashboard",
    title: "Daily Payroll Dashboard",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsMsPm2GfJ4jfmVWuj4Le7ahVHdIT9U-ECqw&s",
  },
  {
    id: 37,
    group: "Dashboard",
    title: "Monthly Payroll Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/brief-3d-icon-png-download-10958525.png",
  },
  {
    id: 38,
    group: "Dashboard",
    title: "Yearly  Payroll Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-icon-png-download-5431234.png",
  },
  {
    id: 39,
    title: "Payroll Follow-Up History",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-10522938.png",
    group: "Communication",
  },
  {
    id: 40,
    title: "Payroll Follow-Up Reminder",
    image: "https://static.vecteezy.com/system/resources/previews/055/108/905/non_2x/smartphone-reminder-notification-3d-icon-realistic-illustration-png.png",
    group: "Communication",
  },
  {
    id: 41,
    title: "Whtsapp Message Integration",
    image: "https://static.vecteezy.com/system/resources/previews/049/810/881/non_2x/3d-whatsapp-notification-icon-one-new-message-in-the-inbox-concept-3d-illustration-free-png.png",
    group: "Communication",
  },
  {
    id: 42,
    title: "Text Message Integration",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/sms-3d-icon-png-download-10033812.png",
    group: "Communication",
  },
  {
    id: 43,
    title: "Email Message Integration",
    image: "https://static.vecteezy.com/system/resources/previews/019/153/015/non_2x/3d-minimal-online-communication-concept-social-network-online-connection-mail-icon-with-a-contact-and-message-icon-3d-illustration-free-png.png",
    group: "Communication",
  },
  {
    id: 44,
    title: "Bulk Message Integration",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/exchange-3d-icon-png-download-10968183.png",
    group: "Communication",
  },
  {
    id: 45,
    title: "Generate Monthly Salary",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/salary-3d-icon-png-download-3892858.png",
    group: "Salary",
  },
  {
    id: 46,
    title: "Generate Hourly Salary",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/salary-date-3d-icon-png-download-10753089.png",
    group: "Salary",
  },
  {
    id: 47,
    title: "Payment Method",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/payment-3d-icon-png-download-5272924.png",
    group: "Salary",
  },
  {
    id: 48,
    title: "Teacher Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/teacher-3d-icon-png-download-11785877.png",
    group: "Managements",
  },
  {
    id: 49,
    title: "Salary Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/payroll-3d-icon-png-download-8825113.png",
    group: "Managements",
  },
  {
    id: 50,
    title: "Payment Method",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/payment-options-3d-icon-png-download-4314960.png",
    group: "Managements",
  },
  {
    id: 51,
    title: "Payroll Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/payroll-3d-icon-png-download-6166048.png",
    group: "Managements",
  },
  {
    id: 52,
    title: "Exam Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/exam-3d-icon-png-download-8341975.png",
    group: "Managements",
  },
  {
    id: 53,
    title: "Subject Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/history-subject-3d-icon-png-download-8842446.png",
    group: "Managements",
  },
  {
    id: 54,
    title: "Hourly Rate",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/hourly-3d-icon-png-download-11035109.png",
    group: "Managements",
  },
];

const dashboardData = [
  {
    title: "early/Monthly Payroll Dashboard",
    desc: "The Daily Lead Count Dashboard provides a clear picture of the leads generated on a day-to-day basis. It helps businesses closely monitor their daily performance, identify peak hours of lead generation, and quickly act on any sudden drops in numbers. This real-time visibility is especially valuable for tracking the effectiveness of ongoing campaigns, advertisements, or short-term promotions.",
    img: dashboard1,
  },
  {
    title: "Yearly/Monthly Payroll Dashboard",
    desc: "The Monthly/Monthly Lead Count Dashboard consolidates leads generated throughout the month and highlights growth trends compared to previous months. It enables businesses to track monthly targets, analyze marketing effectiveness, and plan resources more efficiently. Seasonal or campaign-driven variations also become more visible in this view, making it easier to understand customer behavior patterns.",
    img: dashboard2,
  },


];

const subfeatures = [
  {
    title: "Automated Payroll Calculation",
    detail:
      "Automatically calculates salaries, deductions, bonuses, and taxes based on attendance and company policies, reducing manual errors.",
    image: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
  },
  {
    title: "Payslip Generation",
    detail:
      "Generate digital and printable payslips instantly for all employees. Payslips are securely stored and accessible anytime.",
    image: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
  },
  {
    title: "Attendance & Leave Integration",
    detail:
      "Integrates with attendance systems to ensure accurate salary calculation based on present days, leaves, and overtime.",
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
  },
  {
    title: "Statutory Compliance",
    detail:
      "Ensures compliance with all statutory requirements like PF, ESI, TDS, and professional tax, with automated calculations and reports.",
    image:
      "https://cdn-icons-png.flaticon.com/512/14639/14639173.png?semt=ais_hybrid",
  },
  {
    title: "Employee Self Service",
    detail:
      "Employees can view their payslips, leave balances, and salary details through a secure mobile app or web portal.",
    image: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
  },
  {
    title: "Comprehensive Payroll Reports",
    detail:
      "Provides detailed payroll reports for management, including salary registers, tax reports, and analytics.",
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
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

const PayrollManagementSystem = () => {
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
                  Payroll Management <span style={{ color: "#FFBF00" }}>System</span>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
                >
                  <b>Automate, manage, and simplify</b> your entire payroll process with our
                  advanced Payroll Management System. Handle employee records, salary
                  calculations, tax deductions, and payslip generation—all from a single,
                  secure dashboard. Ensure accuracy, save time, and maintain compliance
                  with every payroll cycle.
                  <br /><br />
                </Typography>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                  <Chip label="Auto Salary Calculation" color="primary" />
                  <Chip label="Tax & Compliance Ready" color="secondary" />
                  <Chip
                    label="Secure Data Management"
                    sx={{ background: "#e1bee7", color: "#333" }}
                  />
                </Box>
              </Grid>

              {/* Right Image Section */}
              <Grid item xs={12} md={6} data-aos="fade-left">
                <motion.img
                  src={payroll.src} // replace with payroll-related image
                  alt="Payroll Management System"
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
                for Payroll & Salary Management
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
                The Payroll Management System streamlines and automates all
                payroll-related processes for organizations. It covers salary
                calculation, attendance, compliance, reporting, and analytics,
                ensuring transparency and efficiency for both HR and employees.
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
              alt="Payroll Management Mobile"
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
              <span className={styles.highlight}>Payroll Management System</span>
            </h1>
            <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

            <ul className={styles.benefitList}>
              <li>
                <b>Centralized Payroll Administration:</b> Manage all payroll operations
                — salary, attendance, deductions, and reports — from one unified
                platform.
              </li>
              <li>
                <b>Automated Calculations:</b> Automate salary computation, tax
                deductions, and payslip generation to eliminate manual errors.
              </li>
              <li>
                <b>Accurate Salary Processing:</b> Real-time integration with attendance
                and leave records ensures precise and on-time salary calculation.
              </li>
              <li>
                <b>Streamlined Communication:</b> Notify employees instantly via email
                or mobile notifications about salary updates and payslips.
              </li>
              <li>
                <b>Comprehensive Reporting:</b> Generate detailed payroll, tax, and
                compliance reports for audits and management.
              </li>
              <li>
                <b>Mobile Accessibility:</b> Access and manage payroll information from
                anywhere using mobile devices.
              </li>
              <li>
                <b>Data Security:</b> Protect sensitive employee and financial data with
                encrypted, role-based access controls.
              </li>
            </ul>
          </motion.div>
        </div>


        {/* Payroll Dashboard Section */}
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
              <span style={{ color: "#FFBF00" }}>Payroll</span> Management System Dashboards
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

        {/* Payroll Management & PMS Section */}
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
                    <span> Payroll Management </span>
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      lineHeight: "1.8",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    A Payroll Management System (PMS) serves as a centralized
                    platform for organizations to efficiently manage employee
                    payroll and related processes. It encompasses
                    functionalities including salary calculation, attendance
                    integration, statutory compliance, payslip generation, tax
                    management, and employee self-service.
                    <br />
                    <br />
                    PMS often integrates with other HR and accounting systems
                    and offers customization options to adapt to the specific
                    needs of each organization. Overall, it plays a vital role
                    in streamlining payroll administration, ensuring compliance,
                    and enhancing employee satisfaction.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.img
                  src="https://proeffico.com/wp-content/uploads/2023/09/digital-marketing-php-developer-jobs-meerut-delhi-ncr-ghaziabad-muzaffarnagar.gif"
                  alt="Payroll Management"
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
                  src="https://i.pinimg.com/originals/16/9c/11/169c11293f5c08a325ee1bbc8a0d4cb8.gif"
                  alt="Payroll Information System"
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
                    <span style={{ color: "#2874A6" }}>Payroll</span>{" "}
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
                    A Payroll Information System is a robust platform designed
                    to manage and maintain comprehensive payroll data throughout
                    the employee lifecycle. It enables organizations to securely
                    store and access salary records, tax details, attendance,
                    compliance documents, and more. The system streamlines
                    payroll processing, supports statutory compliance, and
                    empowers HR teams to make informed decisions, ensuring
                    timely and accurate salary disbursement and improved
                    employee trust.
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
              of Payroll Management System
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

export default PayrollManagementSystem;
