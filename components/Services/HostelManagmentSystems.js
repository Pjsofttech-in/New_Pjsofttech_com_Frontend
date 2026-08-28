import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Chip,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import image1 from "../images/hostel-gif.gif";
import phone from "../images/student-info-detail.png";
import dashboard1 from "../images/Hostel-Daily-Inquires-dashboard-1.png";
import dashboard2 from "../images/Timeframe and inquiries by source Dashboard 2.png";
import dashboard3 from "../images/Yearly-Inguiries-dashboard-3.png";
import styles from "./HostelManagement.module.css";

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
    primary: { main: "rgba(52, 152, 219, 1)" },
    secondary: { main: "#FFBF00" },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    button: { textTransform: "none" },
  },
});

const imageVariants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, type: "spring", bounce: 0.4 },
  },
};

const groups = [
  "Dashboard",
  "Inquiry",
  "Admissions",
  "Finance",
  "Administration",
  "Management",
  "Technology",
  "Communication",
  "Report & Analytics",
  "Support",
  "Apps",
];

const blogs = [
  {
    id: 1,
    title: "Fees Payment Reminder",
    image:
      "https://thumbs.dreamstime.com/b/monthly-payment-reminder-d-icon-perfectly-isolated-white-background-finance-billing-notifications-358982730.jpg",
    group: "Finance",
  },


  // Identity & Administration
  {
    id: 3,
    title: "ID Card Generator",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/id-card-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--identity-identification-hotel-pack-holidays-illustrations-3692795.png",
    group: "Administration",
  },
  {
    id: 4,
    title: "Zero Paperwork",
    image:
      "https://www.shutterstock.com/image-vector/3d-cartoon-vector-illustration-hand-260nw-2589548405.jpg",
    group: "Administration",
  },
  {
    id: 5,
    title: "Document Storage",
    image:
      "https://thumbs.dreamstime.com/b/file-storage-cloud-d-computer-icon-isolated-white-background-33598644.jpg",
    group: "Administration",
  },

  // Infrastructure
  {
    id: 6,
    title: "Multi Building Management",
    image:
      "https://static.vecteezy.com/system/resources/previews/060/729/856/non_2x/isometric-rendering-of-a-multi-story-office-building-png.png",
    group: "Management",
  },
  {
    id: 7,
    title: "Bed Allocation",
    image:
      "https://static.vecteezy.com/system/resources/previews/028/541/569/non_2x/bed-3d-rendering-icon-illustration-free-png.png",
    group: "Management",
  },

  {
    id: 9,
    title: "Multi Branch System",
    image:
      "https://t4.ftcdn.net/jpg/11/55/06/09/360_F_1155060960_dTFVYuliH0YU1PLKHcimOHbtt3tPYQXV.jpg",
    group: "Management",
  },

  // Technology & Apps
  {
    id: 10,
    title: "Dynamic Website",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgR1lsnCeU4jgW4nW1RYZsy3yxMtP5m13VAw&s",
    group: "Technology",
  },
  {
    id: 11,
    title: "Cloud Storage",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJaMcFQM5szQYyZpDQ2gHQ-mmp4ITBsKvrA&s",
    group: "Technology",
  },
  {
    id: 12,
    title: "Real-Time Notifications & Alerts",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_qNOIq1IJVgH_yzbubCLxOm4DZQ5viiE2Q&s",
    group: "Technology",
  },
  {
    id: 13,
    title: "Security & Data Privacy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNnxfnZ5LwANs6G89ok5KSURq-PUTC7gDMlw&s",
    group: "Technology",
  },

  // Apps
  {
    id: 14,
    title: "Receptionist App",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/receptionist-3d-icon-download-in-png-blend-fbx-gltf-file-formats--telephone-operator-customer-service-call-center-pack-network-communication-icons-11133520.png?f=webp",
    group: "Apps",
  },
  {
    id: 15,
    title: "Admin App",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-app-3d-icon-download-in-png-blend-fbx-gltf-file-formats--technology-smartphone-phone-digital-agency-pack-website-development-icons-4071987.png?f=webp",
    group: "Apps",
  },

  // Support
  {
    id: 16,
    title: "24*7 Support",
    image: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
    group: "Support",
  },
  {
    id: 17,
    title: "Centralized Dashboard",
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
    group: "Managements",
  },

  // Admission & Registration
  {
    id: 18,
    title: "Student Registration Management",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vKwNoZBGsXomwkWfQ9bKMu2KrZtq2lIOtw&s",
    group: "Admissions",
  },
  {
    id: 19,
    title: "Admission Processing",
    image: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    group: "Admissions",
  },
  {
    id: 20,
    title: "Room Allocation Automation",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/automation-3d-icon-png-download-6308121.png",
    group: "Admissions",
  },

  // Enquiries & Visitors
  {
    id: 21,
    title: "Enquiry Handling",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/questions-3d-icon-png-download-8550616.png",
    group: "Support",
  },
  {
    id: 22,
    title: "Reception Management",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/receptionist-3d-icon-download-in-png-blend-fbx-gltf-file-formats--telephone-operator-customer-service-call-center-pack-network-communication-icons-11133520.png",
    group: "Support",
  },
  {
    id: 23,
    title: "Visitor Log Maintenance",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/hotel-receptionist-service-bell-3d-icon-png-download-9562500.png",
    group: "Support",
  },

  // Configuration & Setup
  {
    id: 24,
    title: "Floor and Room Configuration",
    image:
      "https://thumbs.dreamstime.com/z/floor-plan-color-line-icon-architecture-blueprint-house-sign-vector-graphics-editable-stroke-filled-outline-eps-200867739.jpg",
    group: "Management",
  },

  // Finance & Fees
  {
    id: 25,
    title: "Income & Expense Tracking",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/balance-sheet-3d-icon-download-in-png-blend-fbx-gltf-file-formats--financial-management-portfolio-saving-money-analysis-business-finance-investment-and-pack-icons-11640964.png",
    group: "Finance",
  },
  {
    id: 26,
    title: "Fee Management",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/payment-reminder-3d-icon-download-in-png-blend-fbx-gltf-file-formats--schedule-day-payday-salary-plan-finance-pack-business-icons-9123889.png?f=webp",
    group: "Finance",
  },

  // Maintenance & Feedback
  {
    id: 27,
    title: "Complaint and Feedback System",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/complaint-3d-icon-png-download-9008297.png",
    group: "Support",
  },
  {
    id: 28,
    title: "Maintenance Request Handling",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/maintenance-3d-icon-png-download-10740570.png",
    group: "Support",
  },

  // Assets & Storage
  {
    id: 29,
    title: "Asset Management",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/asset-management-3d-icon-download-in-png-blend-fbx-gltf-file-formats--finance-investment-business-pack-icons-8062629.png",
    group: "Administration",
  },
  {
    id: 30,
    title: "Document Management",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpC26hDHcrxvHxv0eg5C9VgMEXcFgn2KDDnQ&s",
    group: "Administration",
  },

  // Communication & Notifications
  {
    id: 31,
    title: "Notification System",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_qNOIq1IJVgH_yzbubCLxOm4DZQ5viiE2Q&s",
    group: "Communication",
  },

  // Analytics
  {
    id: 32,
    title: "Reporting and Analytics",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/data-analytics-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-technology-business-pack-icons-6149163.png?f=webp",
    group: "Analytics",
  },

  // Access & Integration
  {
    id: 33,
    title: "User Access Control",
    image: "https://cdn-icons-png.flaticon.com/512/1250/1250689.png",
    group: "Security",
  },
  {
    id: 34,
    title: "Integration with Other Modules",
    image: "https://cdn-icons-png.flaticon.com/512/483/483356.png",
    group: "Integration",
  },
  {
    id: 35,
    title: "Mobile Accessibility",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-access-3d-icon-png-download-8932096.png",
    group: "Apps",
  },
  {
    id: 36,
    title: "Daily Inquiries Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/user-dashboard-3d-icon-png-download-12296671.png",
    group: "Dashboard",
  },
  {
    id: 37,
    title: "Timeframe Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/timeline-3d-icon-png-download-5283618.png",
    group: "Dashboard",
  },
  {
    id: 38,
    title: "Inquiries By Source Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/user-dashboard-3d-icon-png-download-12296671.png",
    group: "Dashboard",
  },
  {
    id: 39,
    title: "Yearly Inquries Dashboard",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHMW8KGPXA937ID3EdavqCiFS0rmUpE6_8uuCP13TepVmbtACGwWF8Wl9XHsHAB1fe8oY&usqp=CAU",
    group: "Dashboard",
  },
  {
    id: 40,
    title: "Date's Wise Admissions",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/date-and-time-3d-icon-png-download-8529181.png",
    group: "Dashboard",
  },
  {
    id: 41,
    title: "Timeframe Admission Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-icon-png-download-7577977.png",
    group: "Dashboard",
  },
  {
    id: 42,
    title: "Month's Wise Admissions Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-icon-png-download-3930409.png?f=webp",
    group: "Dashboard",
  },
  {
    id: 43,
    title: "Inquiry Creation",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/search-information-3d-icon-png-download-7502400.png",
    group: "Inquiry",
  },
  {
    id: 44,
    title: "Inquiry List",
    image: "https://png.pngtree.com/png-vector/20240426/ourmid/pngtree-checklist-3d-icon-transparent-png-image_12324415.png",
    group: "Inquiry",
  },
  {
    id: 45,
    title: "Inquiry Data Upload CSV",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/csv-3d-icon-png-download-8248622.png",
    group: "Inquiry",
  },
  {
    id: 46,
    title: "Inquiry Data Download CSV",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/csv-file-3d-icon-png-download-4734935.png",
    group: "Inquiry",
  },
  {
    id: 47,
    title: "Customizable Admission Form",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/application-form-3d-icon-png-download-12031456.png",
    group: "Admissions",
  },
  {
    id: 48,
    title: "Admission List",
    image: "https://png.pngtree.com/png-vector/20240426/ourmid/pngtree-checklist-3d-icon-transparent-png-image_12324415.png",
    group: "Admissions",
  },
  {
    id: 49,
    title: "Admission Regsitration Form",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/registration-form-3d-icon-png-download-4379744.png",
    group: "Admissions",
  },
  {
    id: 50,
    title: "Admission User List",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAfxgVPNoZ_VGoQ-lKGVsYgrjJOoU6GimiZw&s",
    group: "Admissions",
  },
  {
    id: 51,
    title: "Admission Data Download CSV",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/csv-file-3d-icon-png-download-7718398.png",
    group: "Admissions",
  },
  {
    id: 52,
    title: "Admission Data Upload CSV",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/csv-file-3d-icon-png-download-5073906.png",
    group: "Admissions",
  },
  {
    id: 53,
    title: "Admission Data Upload CSV",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RULwr1xxBYwFazPY-st96Oi8G-TgZkJvw&s",
    group: "Admissions",
  },
  {
    id: 54,
    title: "Admission Data Download CSV",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH21xQY9NMHKUpJvy07XWHhHlTbSTNoyvsjg&s",
    group: "Admissions",
  },
  {
    id: 55,
    title: "Dynamic Website",
    image: "https://img.freepik.com/premium-vector/website-icon-3d-illustration-from-digital-marketing-collection-creative-website-3d-icon-web-design-templates-infographics-more_676904-821.jpg",
    group: "Management",
  },
  {
    id: 56,
    title: "Admission Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/student-information-3d-icon-png-download-9436222.png",
    group: "Management",
  },
  {
    id: 57,
    title: "Leave Management",
    image: "https://simg.nicepng.com/png/small/152-1523990_leave-management-system-leave-management-icon.png",
    group: "Management",
  },
  {
    id: 58,
    title: "Inquiry Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/inquiry-3d-icon-png-download-7502415.png",
    group: "Management",
  },
  {
    id: 59,
    title: "Floor Management",
    image: "https://img.icons8.com/?size=1200&id=Oi0WqSaLyf4s&format=png",
    group: "Management",
  },
  {
    id: 60,
    title: "Hostel List Reporting",
    image: "https://cdn-icons-png.flaticon.com/512/10473/10473656.png",
    group: "Report & Analytics",
  },
  {
    id: 61,
    title: "Hostel Conduct Reporting",
    image: "https://static.vecteezy.com/system/resources/previews/046/680/407/non_2x/3d-report-icon-report-symbol-3d-free-png.png",
    group: "Report & Analytics",
  },
  {
    id: 62,
    title: "Hostel Sourses Reporting",
    image: "https://static.vecteezy.com/system/resources/previews/046/680/425/non_2x/3d-report-icon-report-symbol-3d-free-png.png",
    group: "Report & Analytics",
  },
  {
    id: 63,
    title: "Hostel Courses Reporting",
    image: "https://static.vecteezy.com/system/resources/thumbnails/047/666/837/small/business-planning-business-object-illustration-3d-png.png",
    group: "Report & Analytics",
  },
  {
    id: 64,
    title: "Hostel Feedback Reporting Analytics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsJ058P7MPoAdMN-nF3vj46nFUo35dwwo7Q&s",
    group: "Report & Analytics",
  },
  {
    id: 65,
    title: "Hostel Task Reporting Analytics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61xKylgS10ddLCbPG7MLHebCHIeE53UTO-w&s",
    group: "Report & Analytics",
  },
  {
    id: 66,
    title: "Lead Follow-Up History",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-10522938.png",
    group: "Communication",
  },
  {
    id: 67,
    title: "Hostel Lead Follow-Up Reminder",
    image: "https://static.vecteezy.com/system/resources/previews/055/108/905/non_2x/smartphone-reminder-notification-3d-icon-realistic-illustration-png.png",
    group: "Communication",
  },
  {
    id: 68,
    title: "Whtsapp Message Integration",
    image: "https://static.vecteezy.com/system/resources/previews/049/810/881/non_2x/3d-whatsapp-notification-icon-one-new-message-in-the-inbox-concept-3d-illustration-free-png.png",
    group: "Communication",
  },
  {
    id: 69,
    title: "Text Message Integration",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/sms-3d-icon-png-download-10033812.png",
    group: "Communication",
  },
  {
    id: 70,
    title: "Email Message Integration",
    image: "https://static.vecteezy.com/system/resources/previews/019/153/015/non_2x/3d-minimal-online-communication-concept-social-network-online-connection-mail-icon-with-a-contact-and-message-icon-3d-illustration-free-png.png",
    group: "Communication",
  },
  {
    id: 71,
    title: "Bulk Message Integration",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/exchange-3d-icon-png-download-10968183.png",
    group: "Communication",
  },




];
const dashboardData = [
  {
    title: "Daily Inquiries Dashboard",
    desc: "The Daily Lead Count Dashboard provides a clear picture of the leads generated on a day-to-day basis. It helps businesses closely monitor their daily performance, identify peak hours of lead generation, and quickly act on any sudden drops in numbers. This real-time visibility is especially valuable for tracking the effectiveness of ongoing campaigns, advertisements, or short-term promotions.",
    img: dashboard1,
  },
  {
    title: "Timeframe Hostel Inquiries Dashboard",
    desc: "The Monthly/Monthly Lead Count Dashboard consolidates leads generated throughout the month and highlights growth trends compared to previous months. It enables businesses to track monthly targets, analyze marketing effectiveness, and plan resources more efficiently96. Seasonal or campaign-driven variations also become more visible in this view, making it easier to understand customer behavior patterns.",
    img: dashboard2,
  },
  {
    title: "Timeframe Hostel Inquiries Dashboard",
    desc: "The Source / Course-Wise Lead Dashboard categorizes leads based on their origin, such as website inquiries, social media ads, referrals, walk-ins, agents, or QR code scans. By identifying the most effective lead sources, businesses can optimize their marketing spend, maximize ROI, and focus on the channels that bring in the highest-quality leads. This breakdown ensures better decision-making for campaign planning and channel prioritization.",
    img: dashboard3,
  },
  {
    title: "Yearly Inguires Dashboard",
    desc: "The Source / Course-Wise Lead Dashboard categorizes leads based on their origin, such as website inquiries, social media ads, referrals, walk-ins, agents, or QR code scans. By identifying the most effective lead sources, businesses can optimize their marketing spend, maximize ROI, and focus on the channels that bring in the highest-quality leads. This breakdown ensures better decision-making for campaign planning and channel prioritization.",
    img: dashboard3,
  },

];

const subfeatures = [
  {
    "id": 1,
    "title": "Hostel Dashboard",
    "detail": "Centralized dashboard for real-time hostel metrics, occupancy, and resident status.",
    "image": "https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
  },
  {
    "id": 2,
    "title": "Room & Bed Allocation",
    "detail": "Automated room and bed assignment based on availability, preferences, and eligibility.",
    "image": "https://static.vecteezy.com/system/resources/previews/028/541/569/non_2x/bed-3d-rendering-icon-illustration-free-png.png"
  },
  {
    "id": 3,
    "title": "Resident Registration",
    "detail": "Digital registration and record-keeping for all hostel residents.",
    "image": "https://cdn-icons-png.flaticon.com/512/4205/4205497.png"
  },
  {
    "id": 4,
    "title": "Fee & Rent Tracking",
    "detail": "Automated billing, payment reminders, and receipts for hostel fees and rent.",
    "image": "https://cdn3d.iconscout.com/3d/premium/thumb/payment-reminder-3d-icon-download-in-png-blend-fbx-gltf-file-formats--schedule-day-payday-salary-plan-finance-pack-business-icons-9123889.png?f=webp"
  },
  {
    "id": 5,
    "title": "Attendance & Leave Management",
    "detail": "Track resident and staff attendance, leave requests, and approvals.",
    "image": "https://cdn-icons-png.flaticon.com/512/942/942748.png"
  },
  {
    "id": 6,
    "title": "Visitor Log & Security",
    "detail": "Maintain digital visitor logs and access control for enhanced security.",
    "image": "https://cdn-icons-png.flaticon.com/512/9504/9504447.png"
  },
  {
    "id": 7,
    "title": "Complaint & Maintenance Requests",
    "detail": "Online system for residents to submit complaints and maintenance requests.",
    "image": "https://cdn-icons-png.flaticon.com/512/201/201623.png"
  },
  {
    "id": 8,
    "title": "Reporting & Analytics",
    "detail": "Generate reports on occupancy, finances, complaints, and compliance.",
    "image": "https://cdn3d.iconscout.com/3d/premium/thumb/data-analytics-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-technology-business-pack-icons-6149163.png?f=webp"
  },
  {
    "id": 9,
    "title": "Mobile Accessibility",
    "detail": "Manage hostel operations and resident data from any device.",
    "image": "https://cdn-icons-png.flaticon.com/512/69/69524.png"
  },
  {
    "id": 10,
    "title": "Integration with Payroll & ERP",
    "detail": "Seamless integration with payroll and ERP systems for automated deductions and reporting.",
    "image": "https://cdn-icons-png.flaticon.com/512/483/483356.png"
  }
]

const HostelManagmentSystem = () => {
  const [selectedGroup, setSelectedGroup] = useState("Finance");

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
                Hostel Management <span style={{ color: "#FFBF00" }}>System</span>
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
              >
                <b>Manage hostel operations efficiently</b> with our comprehensive
                Hostel Management System. From room allocation, student check-ins,
                and mess management to maintenance tracking and fee collection —
                everything is automated and accessible from one platform.
                <br />
                <br />
                Improve transparency, reduce manual work, and ensure a safe and
                comfortable living experience for students and staff.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                <Chip label="Room Allocation" color="primary" />
                <Chip label="Mess & Attendance" color="secondary" />
                <Chip
                  label="Automated Billing"
                  sx={{ background: "#e1bee7", color: "#333" }}
                />
              </Box>
            </Grid>

            {/* Right Image Section */}
            <Grid item xs={12} md={6} data-aos="fade-left">
              <motion.img
                src={image1.src} // replace with hostel-related image
                alt="Hostel Management System"
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
              Hostel Management
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
              The Hostel Management System streamlines and automates all hostel
              operations for institutions. It covers resident management, room
              allocation, fee tracking, attendance monitoring, visitor logs, and
              reporting, ensuring transparency and efficiency for both staff and
              residents.
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
            alt="Hostel Management Mobile"
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
            <span className={styles.highlight}>Hostel Management System</span>
          </h1>
          <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

          <ul className={styles.benefitList}>
            <li>
              <b>Automated Record-Keeping:</b> Eliminates manual data entry by
              maintaining digital records of residents, room allocations, and
              payments.
            </li>
            <li>
              <b>Seamless Payroll Integration:</b> Automatically deducts hostel
              rent, utilities, and other expenses from faculty and staff salaries.
            </li>
            <li>
              <b>Efficient Room & Bed Allocation:</b> Assigns rooms based on
              availability, preferences, and eligibility criteria, reducing
              administrative workload.
            </li>
            <li>
              <b>Attendance & Leave Management:</b> Tracks staff and resident
              attendance, integrating with payroll for accurate salary processing.
            </li>
            <li>
              <b>Enhanced Security & Monitoring:</b> Maintains visitor logs,
              access control, and emergency contact details for better safety and
              compliance.
            </li>
            <li>
              <b>Student History:</b> Maintains a complete history of attendance
              for each individual, accessible anytime.
            </li>
            <li>
              <b>Online Payment & Billing:</b> Facilitates digital payments for
              hostel fees, reducing cash handling and improving transparency.
            </li>
            <li>
              <b>Centralized Dashboard:</b> Provides a comprehensive view of
              hostel operations, payroll deductions, and occupancy reports.
            </li>
            <li>
              <b>Better Compliance & Reporting:</b> Generates financial reports,
              audit records, and compliance documents effortlessly.
            </li>
            <li>
              <b>Enhanced Security and Privacy:</b> Protects sensitive attendance
              data with secure access controls and encryption.
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Hostel Dashboard Section */}
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
            <span style={{ color: "#FFBF00" }}>Hostel</span> Management Dashboards
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

      {/* Hostel Management & HMS Section */}
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
                  <span>Hostel Management</span>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    lineHeight: "1.8",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  A Hostel Management System (HMS) serves as a centralized
                  platform for institutions to efficiently manage all hostel
                  operations. It encompasses functionalities including resident
                  registration, room and bed allocation, fee tracking,
                  attendance monitoring, visitor management, and maintenance
                  requests.
                  <br />
                  <br />
                  HMS often integrates with ERP and payroll tools, offering
                  customization options to adapt to the specific needs of each
                  hostel. Overall, it plays a vital role in streamlining hostel
                  administration, improving occupancy rates, and enhancing
                  resident satisfaction.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.img
                src="https://www.cisworld.lk/storage/categories/hostel-management-1.jpg"
                alt="Hostel Management"
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
                src="https://static.vecteezy.com/system/resources/previews/060/729/856/non_2x/isometric-rendering-of-a-multi-story-office-building-png.png"
                alt="Hostel Information System"
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
                  <span style={{ color: "#2874A6" }}>Hostel</span> Information
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
                  A Hostel Information System is a robust platform designed to
                  manage and maintain comprehensive hostel and resident data
                  throughout the stay. It enables institutions to securely store
                  and access resident records, room history, fee payments,
                  visitor logs, and more. The system streamlines hostel
                  processes, supports analytics, and empowers staff to make
                  informed decisions, ensuring timely responses and improved
                  resident experience.
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
            of Hostel  Management System
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

export default HostelManagmentSystem;
