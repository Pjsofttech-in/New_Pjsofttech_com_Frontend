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
import { motion } from "framer-motion";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import styles from "./CompnayManagementSystem.module.css";
import heroImage from "../images/compnay gif.gif";
import phone from "../images/student-info-detail.png";
import dashboard1 from "../images/dashboard-shipment.png";
import dashboard2 from "../images/dashboard.png";
import dashboard3 from "../images/HR dashboard 2.png";

const dashboardImages = [dashboard1, dashboard2, dashboard3];

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
  "HR Management",
  "Projects",
  "Payroll",
  "Clients",
  "CRM",
  "Settings",
  "Reports",
];

const blogs = [
  {
    id: 1,
    title: "Employee Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/hr-recruitment-3d-icon-png-download-12966631.png",
    group: "HR Management",
  },
  {
    id: 2,
    title: "Project Tracking",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/project-management-3d-icon-png-download-10850633.png",
    group: "Projects",
  },
  {
    id: 3,
    title: "Client Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/customer-relationship-3d-icon-png-download-10843775.png",
    group: "Clients",
  },
  {
    id: 4,
    title: "Payroll Automation",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/payroll-3d-icon-png-download-13251083.png",
    group: "Payroll",
  },
  {
    id: 5,
    title: "Reports & Analytics",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/analytics-chart-3d-icon-png-download-4312549.png",
    group: "Reports",
  },
  {
    id: 6,
    title: "Role-Based Access",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/access-control-8724825-7067630.png",
    group: "Settings",
  },
  {
    id: 7,
    title: "CRM Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/crm-3d-icon-png-download-11791849.png",
    group: "CRM",
  },
  {
    id: 8,
    title: "Automated Invoicing",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/invoice-3d-icon-png-download-10213025.png",
    group: "Payroll",
  },
];

const dashboardData = [
  {
    title: "Employee Performance Dashboard",
    desc: "Analyze staff performance, attendance, and productivity metrics with live dashboards.",
    img: dashboard1,
  },
  {
    title: "Project Progress Dashboard",
    desc: "Monitor real-time project completion, deadlines, and team collaboration insights.",
    img: dashboard2,
  },
  {
    title: "Financial Summary Dashboard",
    desc: "Track expenses, revenue, payroll, and cash flow in a single visual panel.",
    img: dashboard3,
  },
];

const subfeatures = [
  {
    title: "Task Automation",
    detail: "Eliminate repetitive tasks with workflow automation and smart triggers.",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/automation-3d-icon-download-in-png-blend-fbx-gltf-file-formats--workflow-process-business-system-pack-icons-10498962.png",
  },
  {
    title: "Centralized Communication",
    detail: "Collaborate across teams using built-in messaging and announcements.",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/chat-3d-icon-download-in-png-blend-fbx-gltf-file-formats--message-communication-technology-pack-icons-11041662.png",
  },
  {
    title: "Document Management",
    detail: "Securely store, share, and version-control company documents and files.",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/document-folder-3d-icon-png-download-9321997.png",
  },
  {
    title: "Real-time Notifications",
    detail: "Receive instant alerts for project updates, approvals, and deadlines.",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/notification-3d-icon-png-download-10087807.png",
  },
];

const CompanyManagementSoftware = () => {
  const [selectedGroup, setSelectedGroup] = useState("Dashboard");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const handleGroupChange = (group) => {
    setSelectedGroup(group);
  };

  const filteredBlogs = blogs.filter((blog) => blog.group === selectedGroup);


  return (
    <ThemeProvider theme={theme}>

      {/* Hero Section */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            {/* Left Content */}
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
                Company Management <span style={{ color: "#FFBF00" }}>System</span>
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
              >
                <b>Digitize, automate, and simplify</b> your entire business operations
                with our advanced <b>Company Management System.</b> From employee and project
                management to client relations, payroll, and analytics — everything
                is centralized in one secure platform. Empower HR, finance, and operations
                teams with real-time insights to ensure a smoother workflow and smarter
                business decisions.
                <br />
                <br />
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                <Chip label="Enterprise Ready" color="primary" />
                <Chip label="Automated Workflows" color="secondary" />
                <Chip
                  label="Cloud Secure"
                  sx={{ background: "#e1bee7", color: "#333" }}
                />
              </Box>
            </Grid>

            {/* Right Image */}
            <Grid item xs={12} md={6} data-aos="fade-left">
              <motion.img
                src={heroImage.src} // replace with your company hero image path
                alt="Company Management"
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "contain",
                  borderRadius: "16px",
                  boxShadow: "0 8px 32px rgba(52,152,219,0.10)",
                }}
                variants={{
                  initial: { scale: 0.9, opacity: 0 },
                  animate: {
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 1, type: "spring", bounce: 0.4 },
                  },
                }}
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
          {/* Heading with animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#3498DB",
                marginBottom: "20px",
              }}
            >
              <span className={styles.span}>A</span> Comprehensive Solution
              for Streamlining Company Operations and Management Processes
            </Typography>
          </motion.div>

          {/* Paragraph with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
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
              Company Management Software is a comprehensive solution designed to
              simplify, automate, and optimize every aspect of business operations.
              It seamlessly integrates key functions like human resource management,
              project tracking, client relationship management, payroll processing,
              financial reporting, and internal communication — all within a unified,
              cloud-based platform. This system empowers organizations to enhance
              productivity, reduce operational costs, and make data-driven decisions
              with real-time insights.
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
          <Box className="text-left mb-4">
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
        {/* Left: Mobile Mockup */}
        <div className={styles.phoneMockup} data-aos="fade-right">
          <img
            className={styles.img22}
            src={phone.src} // replace with your company system mobile image
            alt="Company Management Mobile"
          />
        </div>

        {/* Right: Text Section */}
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
            <span className={styles.highlight}>Company Management Software</span>
          </h1>
          <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

          <ul className={styles.benefitList}>
            <li>
              <b>Centralized Business Control:</b> Manage HR, projects, clients,
              payroll, and finances from a single integrated platform.
            </li>
            <li>
              <b>Employee & Attendance Management:</b> Track attendance, leaves, and
              performance with automated reports.
            </li>
            <li>
              <b>Project & Task Tracking:</b> Monitor project progress, deadlines, and
              deliverables in real time.
            </li>
            <li>
              <b>Client Relationship Management (CRM):</b> Strengthen client
              interactions, manage leads, and improve customer retention.
            </li>
            <li>
              <b>Payroll Automation:</b> Simplify salary processing, expense
              reimbursements, and tax deductions automatically.
            </li>
            <li>
              <b>Data Security & Access Control:</b> Role-based permissions ensure
              sensitive data is always protected.
            </li>
            <li>
              <b>Financial Reports & Analytics:</b> Get insights into revenue,
              expenses, and profitability through detailed analytics.
            </li>
            <li>
              <b>Document Management:</b> Securely store, organize, and share company
              documents with version control.
            </li>
            <li>
              <b>Multi-Department Integration:</b> Connect HR, finance, sales, and
              operations for a unified workflow.
            </li>
            <li>
              <b>Cloud Accessibility:</b> Access company data securely anytime,
              anywhere, across all devices.
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
            <span style={{ color: "#FFBF00" }}>Company</span>Management Dashboards
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

      {/* Company Management & CMS Section */}
      <Box sx={{ py: 8, backgroundColor: "#fff" }}>
        <Container>
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Typography
              variant="h4"
              align="center"
              sx={{
                fontWeight: "bold",
                color: "#3498DB",
                mb: 6,
              }}
            >
              Company Management &{" "}
              <span style={{ color: "#FFBF00" }}>CMS Integration</span>
            </Typography>
          </motion.div>

          {/* Section 1 - Company Management */}
          <Grid
            container
            spacing={6}
            alignItems="center"
            sx={{ mb: 8 }}
          >
            {/* Left Image */}
            <Grid item xs={12} md={6} data-aos="fade-right">
              <motion.img
                src="https://cdn.prod.website-files.com/655cc140ec69a31f681e0556/66c321c8d59052f91b2ff319_66c3203df334adf9bf113d51_1-12.gif" // replace with your company dashboard image
                alt="Company Management Dashboard"
                style={{
                  width: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                  objectFit: "contain",
                }}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              />
            </Grid>

            {/* Right Text */}
            <Grid item xs={12} md={6} data-aos="fade-left">
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#3498DB", mb: 2 }}
                >
                  Centralized Company Management
                </Typography>
                <Typography sx={{ color: "#555", lineHeight: 1.8 }}>
                  Our Company Management System centralizes all core business
                  operations — from HR, payroll, and client management to project
                  tracking and analytics. Manage departments, employees, and clients
                  with efficiency and gain complete control over your business
                  processes in one integrated platform.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          {/* Section 2 - CMS Integration */}
          <Grid
            container
            spacing={6}
            alignItems="center"
            direction={{ xs: "column-reverse", md: "row" }}
          >
            {/* Left Text */}
            <Grid item xs={12} md={6} data-aos="fade-right">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#3498DB", mb: 2 }}
                >
                  Powerful CMS Integration
                </Typography>
                <Typography sx={{ color: "#555", lineHeight: 1.8 }}>
                  The integrated <b>Content Management System (CMS)</b> allows you to
                  manage company websites, blogs, and digital assets with ease.
                  Administrators can update content, manage permissions, and publish
                  announcements instantly — keeping internal and external communication
                  synchronized and professional.
                </Typography>
              </motion.div>
            </Grid>

            {/* Right Image */}
            <Grid item xs={12} md={6} data-aos="fade-left">
              <motion.img
                src="https://iiakerala.com/wp-content/uploads/2022/05/staffing-1.gif" // replace with your CMS dashboard image
                alt="Company CMS Integration"
                style={{
                  width: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                  objectFit: "contain",
                }}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              />
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
            of Company Management System
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: "Automated Task Management",
                detail:
                  "Assign, monitor, and complete tasks automatically with real-time progress tracking and reminders.",
                image:
                  "https://cdn3d.iconscout.com/3d/premium/thumb/lifecycle-3d-icon-download-in-png-blend-fbx-gltf-file-formats--product-market-analysis-growth-strategy-development-management-pack-e-commerce-shopping-icons-10958667.png?f=webp",
              },
              {
                title: "Client Relationship Management (CRM)",
                detail:
                  "Maintain client data, manage leads, follow-ups, and communication in a centralized system.",
                image:
                  "https://cdn3d.iconscout.com/3d/premium/thumb/online-credit-card-3d-icon-download-in-png-blend-fbx-gltf-file-formats--payment-method-financial-flexibility-secure-transactions-rewards-programs-remote-working-pack-business-icons-10958516.png?f=webp",
              },
              {
                title: "Employee Performance Analytics",
                detail:
                  "Track employee KPIs, attendance, and achievements through detailed dashboards and reports.",
                image:
                  "https://cdn3d.iconscout.com/3d/premium/thumb/performance-analysis-3d-icon-png-download-11568057.png",
              },
              {
                title: "Document & File Management",
                detail:
                  "Store, share, and manage company files securely with version control and permission settings.",
                image:
                  "https://cdn3d.iconscout.com/3d/premium/thumb/folder-management-3d-icon-png-download-11664658.png",
              },
              {
                title: "Payroll & Expense Automation",
                detail:
                  "Automate employee salary calculations, expense tracking, and financial reporting seamlessly.",
                image:
                  "https://cdn3d.iconscout.com/3d/premium/thumb/payroll-3d-icon-png-download-13251083.png",
              },
              {
                title: "Role-Based Access Control",
                detail:
                  "Enhance data security by defining roles and restricting sensitive information access.",
                image:
                  "https://cdn3d.iconscout.com/3d/premium/thumb/access-control-8724825-7067630.png",
              },
            ].map((item, idx) => (
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

export default CompanyManagementSoftware;
