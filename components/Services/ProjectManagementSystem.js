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
import image1 from "../images/projectgif.gif";
import dashboard1 from "../images/projectdashboard1.png";
import dashboard2 from "../images/projectdashboard2.png";
import styles from "./ProjectManagementSystem.module.css";

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
  "Project",
  "Team",
  "Managements",
  "Communications",
  "Report & Analytics",
  "Support",
  "Apps",
];

const blogs = [
  {
    id: 1,
    title: "Project Planning and Scheduling",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqe6oYB1cUy7eLNoeaOOwrwztD8t9ezYqvLAY_ZYA2HmnjnsCd6mubYQS5yJLTTbt8_LU&usqp=CAU",
    group: "Managements",
  },
  {
    id: 2,
    title: "Task & Workflow Management",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0AqqMhvJmupbvt0T0Y9N6ads6WOcTBU3tkw&s",
    group: "Managements",
  },
  {
    id: 3,
    title: "Resource Management",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/employee-management-3d-icon-download-in-png-blend-fbx-gltf-file-formats--human-resource-team-staff-head-hunting-pack-business-icons-10303606.png?f=webp",
    group: "Managements",
  },
  {
    id: 4,
    title: "Budgeting & Cost Control",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0V2R1_4PbBL2WLzZaQ6IQHnOwYXlTEqd5A&s",
    group: "Support",
  },
  {
    id: 5,
    title: "Collaboration & Communication",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/collaboration-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--togetherness-cooperation-partnership-communication-business-strategy-pack-illustrations-4377358.png?f=webp",
    group: "Communications",
  },
  {
    id: 6,
    title: "Risk & Issue Management",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8C951SAFiRbpPQh3a5HopL4B_IBCVvXl2PA&s",
    group: "Managements",
  },
  {
    id: 7,
    title: "Reporting & Analytics",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7OXyoZTRimJ3x6RXhFOQlltAS7KEBJkDaw&s",
    group: "Support",
  },
  {
    id: 8,
    title: "Time Tracking & Timesheets",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/time-tracking-3d-icon-download-in-png-blend-fbx-gltf-file-formats--productivity-timesheet-checklist-to-do-list-management-pack-business-icons-8432061.png",
    group: "Managements",
  },
  {
    id: 9,
    title: "Project Dashboard",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsMsPm2GfJ4jfmVWuj4Le7ahVHdIT9U-ECqw&s",
    group: "Dashboard",
  },
  {
    id: 10,
    title: "Task Management",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/project-task-management-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--development-checklist-list-design-pack-business-illustrations-4496029.png",
    group: "Managements",
  },
  {
    id: 11,
    title: "Team Management",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/team-management-3d-icon-download-in-png-blend-fbx-gltf-file-formats--group-teamwork-marketing-advertisement-pack-branding-icons-4863041.png?f=webp",
    group: "Managements",
  },
  {
    id: 12,
    title: "Project Reporting",
    image: "https://cdn-icons-png.flaticon.com/512/10473/10473656.png",
    group: "Support",
  },
  {
    id: 13,
    title: "User Dashboards",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-user-analysis-account-business-marketing-pack-illustrations-3930409.png?f=webp",
    group: "Dashboard",
  },
  {
    id: 14,
    title: "Leader Dashboards",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRus8a2kPzeOdzXSX229B8mwFThQ-_i5k2zGHn22_4AOfAgUXhrTOWXlJiprSOQM76SIQs&usqp=CAU",
    group: "Dashboard",
  },
  {
    id: 15,
    title: "Admin Management",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkBUvC-00mp-IW8siiFj3kaL-aGQCmUMDnlQ&s",
    group: "Managements",
  },
  {
    id: 16,
    title: "Task Viewing",
    image:
      "https://static.vecteezy.com/system/resources/previews/034/114/548/non_2x/3d-icon-checking-task-png.png",
    group: "Managements",
  },
  {
    id: 17,
    title: "My Tasks",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQziY6pWli6LYp9Are-w2nC2cHtIhg3thkJPQ&s",
    group: "Apps",
  },
  {
    id: 18,
    title: "Team Leader Assignment",
    image:
      "https://img.freepik.com/premium-photo/3d-team-leader-symbol-teamwork-concept-business-success-leadership-connection-people-problemsolving-modern-vector-3d-style_839035-1742646.jpg",
    group: "Managements",
  },
  {
    id: 19,
    title: "Project Assignment",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7V5P3Q2tag_Vi9_enyIK_ZnTToNZGLimFiA&s",
    group: "Managements",
  },
  {
    id: 20,
    title: "Member Management",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/employee-management-3d-icon-download-in-png-blend-fbx-gltf-file-formats--human-resource-team-staff-head-hunting-pack-business-icons-10303606.png?f=webp",
    group: "Managements",
  },
  {
    id: 21,
    title: "Project Timeline Tracking",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/project-timeline-3d-icon-download-in-png-blend-fbx-gltf-file-formats--deadline-plan-schedule-time-management-business-operation-pack-icons-11740070.png?f=webp",
    group: "Managements",
  },
  {
    id: 22,
    title: "Resource Allocation",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/resource-allocation-3d-icon-download-in-png-blend-fbx-gltf-file-formats--project-planning-management-budgeting-pack-business-icons-11035262.png?f=webp",
    group: "Managements",
  },
  {
    id: 23,
    title: "Communication Tools",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplDMeuuwehEL7vIYGmrr3FrGqzzxNraxF1Q&s",
    group: "Communications",
  },
  {
    id: 24,
    title: "Document Management",
    image: "https://i.pinimg.com/736x/43/4b/6a/434b6aa63bc993d6afa1c9a7f012b78a.jpg",
    group: "Support",
  },
  {
    id: 25,
    title: "Notification System",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIL_6Pui0F0z3ulb9-E3m3OZy0m4ZY7apLg&s",
    group: "Apps",
  },
  {
    id: 26,
    title: "Access Control",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/access-management-3d-icon-download-in-png-blend-fbx-gltf-file-formats--password-user-session-authentication-cyber-security-pack-crime-icons-7597641.png",
    group: "Support",
  },
  {
    id: 27,
    title: "Integration Capabilities",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/integration-setting-3d-icon-download-in-png-blend-fbx-gltf-file-formats--management-technology-connection-digital-asset-pack-data-security-icons-8231852.png",
    group: "Apps",
  },
  {
    id: 28,
    title: "Mobile Accessibility",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1WPnK5_8NcsCvzbynOUTHgWvisHAcsMPVrQ&s",
    group: "Apps",
  },
  {
    id: 29,
    title: "Team Member",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc78BdqwbTltqqus25K5npLtiCeYtsqC0FOw&s",
    group: "Team",
  },
  {
    id: 30,
    title: "Team Leader",
    image:
      "https://media.istockphoto.com/id/504652253/photo/3d-person-icon-leadership-and-team.jpg?s=612x612&w=is&k=20&c=Nq1vzB2F9qlS7vdON1lvO3PKPHJCpDH7ezgEu8TwfqQ=",
    group: "Team",
  },
  {
    id: 31,
    title: "Team Setting",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhjMrrszcwmXoeK8Frfd7ayvCaK2l-g4838Q&s",
    group: "Team",
  },
  {
    id: 32,
    title: "Add Project",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/project-management-3d-icon-download-in-png-blend-fbx-gltf-file-formats--teamwork-work-planning-business-pack-icons-9291049.png?f=webp",
    group: "Project",
  },
  {
    id: 33,
    title: "Add Branch",
    image:
      "https://media.istockphoto.com/id/1777954200/vector/bank-icon.jpg?s=612x612&w=0&k=20&c=fFqqIsSwnCoxWuei_S6ya-aXb_Qsp1sVkB3R12QMtY4=",
    group: "Project",
  },
  {
    id: 34,
    title: "Add Department",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnQehxQ1lFO3dt1LkRDQN4YBMqDsgmA7UZNA&s",
    group: "Project",
  },
  {
    id: 35,
    title: "Monthly Task Distribution",
    image:
      "https://thumbs.dreamstime.com/b/monthly-report-d-icon-perfectly-isolated-white-background-business-financial-analysis-358982518.jpg",
    group: "Dashboard",
  },
  {
    id: 36,
    title: "Project Count By Status",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvUXQUNEaVdWCccYcYjFj3MKBiAtHQKBqweQ&s",
    group: "Dashboard",
  },
  {
    id: 37,
    title: "Project List Reporting",
    image: "https://cdn-icons-png.flaticon.com/512/10473/10473656.png",
    group: "Report & Analytics",
  },
  {
    id: 38,
    title: "Project Conduct Reporting",
    image: "https://static.vecteezy.com/system/resources/previews/046/680/407/non_2x/3d-report-icon-report-symbol-3d-free-png.png",
    group: "Report & Analytics",
  },
  {
    id: 39,
    title: "Project Sourses Reporting",
    image: "https://static.vecteezy.com/system/resources/previews/046/680/425/non_2x/3d-report-icon-report-symbol-3d-free-png.png",
    group: "Report & Analytics",
  },
  {
    id: 40,
    title: "Project Courses Reporting",
    image: "https://static.vecteezy.com/system/resources/thumbnails/047/666/837/small/business-planning-business-object-illustration-3d-png.png",
    group: "Report & Analytics",
  },
  {
    id: 41,
    title: "Project Feedback Reporting Analytics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsJ058P7MPoAdMN-nF3vj46nFUo35dwwo7Q&s",
    group: "Report & Analytics",
  },
  {
    id: 42,
    title: "Project Task Reporting Analytics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61xKylgS10ddLCbPG7MLHebCHIeE53UTO-w&s",
    group: "Report & Analytics",
  },
  {
    id: 42,
    title: "Project Management App",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/app-3d-icon-png-download-7562518.png",
    group: "Apps",
  },

];

const dashboardData = [
  {
    title: "All Project Dashboard",
    desc: "The Daily Lead Count Dashboard provides a clear picture of the leads generated on a day-to-day basis. It helps businesses closely monitor their daily performance, identify peak hours of lead generation, and quickly act on any sudden drops in numbers. This real-time visibility is especially valuable for tracking the effectiveness of ongoing campaigns, advertisements, or short-term promotions.",
    img: dashboard1,
  },
  {
    title: "Monthly Task Distribution",
    desc: "The Monthly/Monthly Lead Count Dashboard consolidates leads generated throughout the month and highlights growth trends compared to previous months. It enables businesses to track monthly targets, analyze marketing effectiveness, and plan resources more efficiently. Seasonal or campaign-driven variations also become more visible in this view, making it easier to understand customer behavior patterns.",
    img: dashboard2,
  },


];

const subfeatures = [
  {
    title: "Task Management",
    detail:
      "Create, assign, and track tasks with deadlines, priorities, and dependencies to ensure project progress.",
    image: "https://cdn-icons-png.flaticon.com/512/1903/1903162.png",
  },
  {
    title: "Project Planning & Scheduling",
    detail:
      "Plan projects using Gantt charts or Kanban boards, set milestones, and allocate resources efficiently.",
    image: "https://cdn-icons-png.flaticon.com/512/841/841364.png",
  },
  {
    title: "Team Collaboration",
    detail:
      "Enable seamless communication and file sharing among team members for better coordination.",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/collaboration-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--togetherness-cooperation-partnership-communication-business-strategy-pack-illustrations-4377358.png?f=webp",
  },
  {
    title: "Resource Management",
    detail:
      "Allocate and monitor resources to optimize utilization and avoid bottlenecks.",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/employee-management-3d-icon-download-in-png-blend-fbx-gltf-file-formats--human-resource-team-staff-head-hunting-pack-business-icons-10303606.png?f=webp",
  },
  {
    title: "Time Tracking",
    detail:
      "Log hours spent on tasks and projects to improve productivity and support billing.",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/time-tracking-3d-icon-download-in-png-blend-fbx-gltf-file-formats--productivity-timesheet-checklist-to-do-list-management-pack-business-icons-8432061.png",
  },
  {
    title: "Reporting & Analytics",
    detail:
      "Generate detailed reports and analytics for project performance, resource usage, and timelines.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7OXyoZTRimJ3x6RXhFOQlltAS7KEBJkDaw&s",
  },
  {
    title: "Document Management",
    detail:
      "Store, organize, and share project documents securely within the system.",
    image: "https://i.pinimg.com/736x/43/4b/6a/434b6aa63bc993d6afa1c9a7f012b78a.jpg",
  },
  {
    title: "Mobile Accessibility",
    detail:
      "Access project data and collaborate with your team from any device, anywhere.",
    image: "https://cdn-icons-png.flaticon.com/512/8462/8462282.png",
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

const ProjectManagementSystem = () => {
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
                Project Management <span style={{ color: "#FFBF00" }}>System</span>
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
              >
                <b>Plan, collaborate, and execute</b> projects seamlessly with our advanced
                Project Management System. From task assignment, progress tracking, and
                team collaboration to time tracking, reports, and client management —
                everything is simplified in one unified platform. Enhance productivity,
                ensure transparency, and deliver projects efficiently every time.
                <br /><br />
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                <Chip label="Task Automation" color="primary" />
                <Chip label="Real-time Collaboration" color="secondary" />
                <Chip
                  label="Analytics & Reports"
                  sx={{ background: "#e1bee7", color: "#333" }}
                />
              </Box>
            </Grid>

            {/* Right Image Section */}
            <Grid item xs={12} md={6} data-aos="fade-left">
              <motion.img
                src={image1.src} // replace with project-related image
                alt="Project Management System"
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
              Project & Task Management
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
              The Project Management System streamlines and automates all
              project and task processes for organizations. It covers project
              planning, task assignment, team collaboration, progress tracking,
              reporting, and analytics, ensuring transparency and efficiency for
              both managers and team members.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* KeyFeature Section */}
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
            alt="Project Management Mobile"
          />
        </div>

        {/* Right: Benefits Text Section */}
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
            <span className={styles.highlight}>Project Management System</span>
          </h1>
          <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

          <ul className={styles.benefitList}>
            <li>
              <b>Centralized Project Administration:</b> Manage all projects, tasks,
              deadlines, and teams from a single dashboard.
            </li>
            <li>
              <b>Automated Task Tracking:</b> Assign, monitor, and manage tasks
              efficiently with automated progress updates.
            </li>
            <li>
              <b>Accurate Progress Monitoring:</b> Real-time visibility into project
              milestones, deliverables, and deadlines.
            </li>
            <li>
              <b>Streamlined Collaboration:</b> Enhance teamwork through integrated
              chat, file sharing, and comment features.
            </li>
            <li>
              <b>Comprehensive Reporting:</b> Generate detailed analytics and reports
              for project status, performance, and resource usage.
            </li>
            <li>
              <b>Mobile Accessibility:</b> Access project dashboards, tasks, and
              updates anytime, anywhere via mobile devices.
            </li>
            <li>
              <b>Data Security:</b> Ensure privacy and integrity with encrypted,
              role-based access control.
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
            <span style={{ color: "#FFBF00" }}>Project</span> Management Dashboards
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

      {/* Project Management & PMS Section */}
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
                  <span> Project Management </span>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    lineHeight: "1.8",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  A Project Management System (PMS) serves as a centralized
                  platform for organizations to efficiently manage projects,
                  tasks, and teams. It encompasses functionalities including
                  project planning, task assignment, resource allocation,
                  progress tracking, collaboration, and analytics.
                  <br />
                  <br />
                  PMS often integrates with other business tools and offers
                  customization options to adapt to the specific needs of each
                  organization. Overall, it plays a vital role in streamlining
                  project workflows, improving delivery timelines, and enhancing
                  team productivity.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.img
                src="https://assets-v2.lottiefiles.com/a/7ea10e1e-1180-11ee-a8e4-d30d7bcef3df/TrNyR2Uee6.gif"
                alt="Project Management"
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
                src="https://myblog.compuzoft.com/wp-content/uploads/2018/07/Gif-for-Blog-PrjMgmtgif.gif"
                alt="Project Information System"
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
                  <span style={{ color: "#2874A6" }}>Project</span> Information
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
                  A Project Information System is a robust platform designed to
                  manage and maintain comprehensive project data throughout the
                  project lifecycle. It enables organizations to securely store
                  and access project records, task histories, resource details,
                  and more. The system streamlines project execution, supports
                  analytics, and empowers teams to make informed decisions,
                  ensuring timely delivery and improved collaboration.
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
            of Project Management System
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

export default ProjectManagementSystem;
