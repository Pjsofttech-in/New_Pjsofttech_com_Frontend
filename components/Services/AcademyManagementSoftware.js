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
import styles from "./AcademyManagementSystem.module.css";
import image1 from "../images/academy.gif";
import phone from "../images/student-info-detail.png";
import dashboard1 from "../images/academyimage1.png"
import dashboard2 from "../images/academyimage2.png"
import dashboard3 from "../images/academyimage3.png"
import dashboard4 from "../images/academyimage4.png"
import dashboard5 from "../images/academyimage5.png";

const dashboardImages = [dashboard1, dashboard2, dashboard3, dashboard4, dashboard5];

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

const imageVariants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, type: "spring", bounce: 0.4 },
  },
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
  "Admissions",
  "Lead",
  "Inventory",
  "Employee",
  "Payroll",
  "Dyanamic Website",
  "Departments",
  "Classrooms",
  "Managements",
  "Communications",
  "Settings",
  "Records",
  "Reports & Analytics",
  "Apps",
];

const blogs = [
  {
    id: 1,
    title: <span>School Management </span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvuMHQrO7Cr9oHuth7Bd8D3GZNSEe-CsUbxQDvYTKmP1DXJLSeCydMhyWozVr_g44rQdU&usqp=CAU",
    group: "Managements",
  },
  {
    id: 2,
    title: <span>Student Managements</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/student-dashboard-3d-icon-download-in-png-blend-fbx-gltf-file-formats--progress-tracking-performance-report-grades-learning-management-system-pack-school-education-icons-10553610.png?f=webp",
    group: "Managements",
  },

  {
    id: 3,
    title: <span>Admission Managements</span>,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/060/441/125/small_2x/graduation-book-3d-illustration-png.png",
    group: "Managements",
  },

  {
    id: 4,
    title: <span>Scholarship Managements </span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6df4m7fBUkJuAgOR3epuyRwkKQ2X_YGy-Xw&s",
    group: "Admissions",
  },
  {
    id: 5,
    title: <span>Exam & Result Managements</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1OSBhvNytaEMAJYTqi--gmkKHazLqF1CjpA&s",
    group: "Managements",
  },
  {
    id: 6,
    title: <span>Course Management</span>,
    image:
      "https://img.freepik.com/free-vector/learning-management-system-abstract-concept-illustration-educational-technology-online-learning-delivery-software-application-training-course-tutoring-program-access_335657-3474.jpg",
    group: "Managements",
  },
  {
    id: 7,
    title: <span>Fee Payment</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9b7z1bDhdhvjXVyEq9mAcz6wvC_iL4xV_sg&s",
    group: "Leads",
  },
  {
    id: 8,
    title: <span>Attendance and Tracking </span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGkRKadDaHs2bX3-Sn4zJvYJhVWv8-QogqYA&s",
    group: "Admissions",
  },
  {
    id: 9,
    title: <span> 24*7 Support</span>,
    image: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
    group: "Supports",
  },
  {
    id: 10,
    title: <span>Reports and Dashboard </span>,
    image:
      "https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1509.jpg?ga=GA1.1.1863634387.1705751972&semt=ais_hybrid",
    group: "Dashboard",
  },
  {
    id: 11,
    title: <span>Next Generation Software</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPx41SKX0MC1IgAFsp1Fdwx8ciq0O2zTFDQ&s",
    group: "Reports",
  },
  {
    id: 12,
    title: <span>Student Records</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3068/3068500.png",
    group: "Classroom",
  },
  {
    id: 13,
    title: <span>Class Management</span>,
    image:
      "https://thumbs.dreamstime.com/b/classroom-management-icon-representing-organizational-tools-classroom-management-icon-351933808.jpg",
    group: "Managements",
  },
  {
    id: 14,
    title: <span>ID Card Generation</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3861/3861172.png",
    group: "Classroom",
  },

  {
    id: 15,
    title: <span>Online Registration</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurWCxVgOvi_pgm0fKUm4ObWAdFMt9Cj1bjw&s",
    group: "Communications",
  },

  {
    id: 16,
    title: <span>Fee Management</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnJqnk5yfcc_WRfjKIRBIrs00fCJdnqphLA&s",
    group: "Managements",
  },
  {
    id: 17,
    title: <span>Application Managements</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/secure-password-manager-app-3d-icon-download-in-png-blend-fbx-gltf-file-formats--security-seo-and-web-pack-icons-8458922.png?f=webp",
    group: "Managements",
  },
  {
    id: 18,
    title: <span>Document Verification</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxwoyW3jFGQGj9AMdH4ZH50jIjWQmW5YescQ&s",
    group: "Records",
  },
  {
    id: 19,
    title: <span>Report Card Creator</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/report-card-3d-icon-download-in-png-blend-fbx-gltf-file-formats--grade-sheet-result-a-plus-education-icons-pack-university-8447586.png?f=webp",
    group: "Classrooms",
  },
  {
    id: 20,
    title: <span> Parent Management</span>,
    image:
      "https://img.freepik.com/premium-photo/3d-cartoon-parents-engaging-parentteacher-meeting-highquality-image-illustrating-parental-i_980716-212298.jpg",
    group: "Managements",
  },

  {
    id: 21,
    title: <span> E-Book Content</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/ebook-3d-icon-download-in-png-blend-fbx-gltf-file-formats--content-book-e-knowledge-study-pack-network-communication-icons-10634876.png",
    group: "Communications",
  },
  {
    id: 22,
    title: <span> ID Card Creator</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGDvsaBAwJ8HMsl4s8KmuzKJ0ZCQk_fxSB2tLYJiCwcBq0mqTsjcI-z5uLFOTSyollRk&usqp=CAU",
    group: "Managements",
  },

  {
    id: 23,
    title: <span> Reporting & Analytics</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7OXyoZTRimJ3x6RXhFOQlltAS7KEBJkDaw&s",
    group: "Reports",
  },

  {
    id: 24,
    title: <span> Event Managements</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/business-schedule-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--planning-events-calendar-businessman-creative-worker-vol-4-pack-illustrations-4659636.png?f=webp",
    group: "Managements",
  },
  {
    id: 25,
    title: <span> Birthday Managements</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR649d1Sr2Hx4xZuEGICzXwDYxb1ydTiQU2A&s",
    group: "Managements",
  },
  {
    id: 26,
    title: <span> Timetable & Scheduling</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsNxqyo1qKbBUOKA25Ppjt32sgTXaxHt5VuA&s",
    group: "Classrooms",
  },
  {
    id: 27,
    title: <span> School Management App</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/educational-app-3d-icon-download-in-png-blend-fbx-gltf-file-formats--online-education-learning-study-mobile-university-e-pack-icons-8248946.png?f=webp",
    group: "Apps",
  },

  {
    id: 28,
    title: <span>Fees Management App</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-app-3d-icon-download-in-png-blend-fbx-gltf-file-formats--smartphone-application-business-finance-pack-icons-6466897.png",
    group: "Apps",
  },
  {
    id: 29,
    title: <span>Fees Management System</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0V2R1_4PbBL2WLzZaQ6IQHnOwYXlTEqd5A&s",
    group: "Managements",
  },
  {
    id: 30,
    title: <span>Attendance Management System</span>,
    image:
      "https://png.pngtree.com/png-clipart/20250207/original/pngtree-employee-time-tracking-software-featuring-3d-icon-isolated-on-a-transparent-png-image_20375423.png",
    group: "Managements",
  },

  {
    id: 31,
    title: <span>Document Verification</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/verified-document-3d-icon-download-in-png-blend-fbx-gltf-file-formats--approved-check-verification-pack-user-interface-icons-5915195.png?f=webp",
    group: "Classrooms",
  },
  {
    id: 32,
    title: <span>Result Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/result-3d-icon-download-in-png-blend-fbx-gltf-file-formats--test-report-search-survey-vote-pack-politics-icons-8356541.png",
    group: "Managements",
  },
  {
    id: 33,
    title: <span>Assessment</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxh0_ePjuNNHwsgLWmh3SxvchtoQJdrrqKA&s",
    group: "Managements",
  },
  {
    id: 34,
    title: <span>EBook Managements</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/ebook-3d-icon-download-in-png-blend-fbx-gltf-file-formats--study-write-online-e-learning-tool-computer-functions-pack-windows-interface-icons-8523464.png",
    group: "Managements",
  },
  {
    id: 35,
    title: <span>WhatsApp,SMS,Email Integration </span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/social-media-marketing-3d-icon-png-download-3816320.png",
    group: "Communications",
  },
  {
    id: 36,
    title: <span>Payment Reminder</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_mB-zxnFyI2U24IHsHVq7Ugt-WsFf9kqQ2Q&s",
    group: "communications",
  },
  {
    id: 37,
    title: <span>Staff Management</span>,
    image:
      "https://thumbs.dreamstime.com/b/staff-management-d-icon-high-quality-design-ui-ux-apps-websites-digital-projects-png-vector-format-358577236.jpg",
    group: "Managements",
  },
  {
    id: 38,
    title: <span>Income/Expense Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/balance-sheet-3d-icon-download-in-png-blend-fbx-gltf-file-formats--financial-management-portfolio-saving-money-analysis-business-finance-investment-and-pack-icons-11640964.png?f=webp",
    group: "Managements",
  },
  {
    id: 39,
    title: <span>Salary Management System</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUG7aPsFL9K1kKBYhElt943fFJFPDRTuHF2Q&s",
    group: "Managements",
  },
  {
    id: 40,
    title: <span>Payroll Management</span>,
    image:
      "https://png.pngtree.com/png-vector/20250214/ourlarge/pngtree-salary-3d-icon-financial-earnings-symbol-for-monthly-income-and-payroll-png-image_15473276.png",
    group: "Managements",
  },
  {
    id: 41,
    title: <span>Test Series Managements</span>,
    image:
      "https://img.freepik.com/free-photo/hand-holding-writing-checklist-application-form-document-clipboard-white-background-3d-illustration_56104-1551.jpg",
    group: "Managements",
  },
  {
    id: 42,
    title: <span>Live Classroom</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgcQjv6rxRDgBZ2V4jHBwxgzoD4J35qshN4Q&s",
    group: "Classrooms",
  },
  {
    id: 43,
    title: <span>Dynamic Website</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgR1lsnCeU4jgW4nW1RYZsy3yxMtP5m13VAw&s",
    group: "Managements",
  },

  {
    id: 44,
    title: <span>Student App</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/app-development-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--application-programming-coding-computer-pack-design-illustrations-4315311.png?f=webp",
    group: "Apps",
  },
  {
    id: 45,
    title: <span>Teacher App</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-development-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--app-design-application-technology-pack-user-interface-illustrations-4708214.png",
    group: "Apps",
  },
  {
    id: 46,
    title: <span>Parent App</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCodgTpG2Uk7AnOo6ujEgNBCgv2MwE0YkjiQ&s",
    group: "Apps",
  },
  {
    id: 47,
    title: <span>Daily Academic Dashboard</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-template-3d-icon-png-download-4800674.png",
    group: "Dashboard",
  },
  {
    id: 48,
    title: <span>Yearly Academic Dashboard</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/user-dashboard-3d-icon-png-download-12296671.png",
    group: "Dashboard",
  },
  {
    id: 49,
    title: <span>Monthly Academic Dashboard</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/user-dashboard-3d-icon-png-download-12296671.png",
    group: "Dashboard",
  },
  {
    id: 50,
    title: <span>Course-wise Academic Dashboard</span>,
    image: "https://png.pngtree.com/png-vector/20250703/ourlarge/pngtree-online-course-3d-icon-high-resolution-png-image_16600962.webp",
    group: "Dashboard",
  },
  {
    id: 51,
    title: <span>Source-wise Academic Dashboard</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/online-education-3d-icon-download-in-png-blend-fbx-gltf-file-formats--learning-e-study-website-pack-design-development-icons-9779173.png",
    group: "Dashboard",
  },
  {
    id: 52,
    title: <span>Centralized Academic Dashboard</span>,
    image:
      "https://img.freepik.com/premium-psd/dashboard-3d-vector-icon-illustration-asset_509353-91.jpg",
    group: "Dashboard",
  },
  {
    id: 53,
    title: <span>Genarate Course</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/customer-support-3d-icon-download-in-png-blend-fbx-gltf-file-formats--service-care-online-course-pack-school-education-icons-10089848.png?f=webp",
    group: "Admissions",
  },
  {
    id: 54,
    title: <span>Genarate Source</span>,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyudqemgyg4r8gtmOOZvrhYn-vaZBKmx5_Lg&s",
    group: "Admissions",
  },
  {
    id: 55,
    title: <span>Conduct Management</span>,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLhMdELN5QfNCvU3XorN9jUbAKXJFsCCJdzw&s",
    group: "Admissions",
  },
  {
    id: 56,
    title: <span>Exam Type </span>,
    image: "https://static.vecteezy.com/system/resources/previews/021/596/615/non_2x/3d-illustration-exam-in-online-learning-set-free-png.png",
    group: "Admissions",
  },
  {
    id: 57,
    title: <span>Paper Type</span>,
    image: "https://static.vecteezy.com/system/resources/previews/018/868/596/non_2x/3d-paper-and-pen-icon-free-png.png",
    group: "Admissions",
  },
  {
    id: 58,
    title: <span>Generate QR Code </span>,
    image: "https://thumbs.dreamstime.com/b/d-qr-code-icon-isolated-render-modern-symbol-concept-online-shopping-advertisement-marketing-promotion-scan-310050935.jpg",
    group: "Admissions",
  },
  {
    id: 59,
    title: <span> Teacher Management</span>,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWFTEjpXwJ4KYWdfdj3jrAOY3BjHe8dwrBlQ&s",
    group: "Managements",
  },
  {
    id: 60,
    title: <span>Genarate Medium</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/content-3d-icon-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-megaphone-video-technology-media-digital-marketing-pack-business-icons-5115836.png",
    group: "Admissions",
  },
  {
    id: 61,
    title: <span>Genarate Classroom</span>,
    image: "https://png.pngtree.com/png-vector/20250712/ourlarge/pngtree-online-classroom-3d-icon-png-image_16625923.webp",
    group: "Admissions",
  },

  {
    id: 62,
    title: <span>Teacher App</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-development-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--app-design-application-technology-pack-user-interface-illustrations-4708214.png",
    group: "Teacher",
  },
  {
    id: 63,
    title: <span>Student App</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/app-development-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--application-programming-coding-computer-pack-design-illustrations-4315311.png?f=webp",
    group: "Student",
  },
  {
    id: 64,
    title: <span>Parent App</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCodgTpG2Uk7AnOo6ujEgNBCgv2MwE0YkjiQ&s",
    group: "Parent",
  },
  {
    id: 65,
    title: <span> Generate Course</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/online-course-3d-icon-png-download-5526386.png",
    group: "Settings",
  },
  {
    id: 66,
    title: <span> Generate source</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScG91Xz6bd_AykiYnw8EthQHDqtVrwtq557Q&s",
    group: "Settings",
  },
  {
    id: 67,
    title: <span>Exam Type </span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzUaEKXt58oq5exmcCfrsEdUdNmHaIf3eEvwdVPmQQNNKxhdgwBQI1fhjLOftQHEcA-0Y&usqp=CAU",
    group: "Settings",
  },
  {
    id: 68,
    title: <span>Paper Type </span>,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/043/988/340/small_2x/exam-paper-3d-icon-png.png",
    group: "Settings",
  },
  {
    id: 69,
    title: <span>Calling Follow up Entry </span>,
    image:
      "https://static.vecteezy.com/system/resources/previews/019/872/926/non_2x/3d-minimal-phone-ringing-icon-incoming-call-notification-call-center-service-concept-communication-technology-phone-icon-with-a-chat-and-mail-icon-3d-illustration-free-png.png",
    group: "Communications",
  },
  {
    id: 70,
    title: <span>Lead Capture & Lead Distribution</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-10215983.png",
    group: "Communications",
  },
  {
    id: 71,
    title: <span>Role Based Access Control</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/access-control-8724825-7067630.png",
    group: "Reports & Analytics",
  },
  {
    id: 72,
    title: <span>Reporting and Analytics </span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/analytics-chart-3d-icon-png-download-4312549.png",
    group: "Reports & Analytics",
  },
  {
    id: 73,
    title: <span>Centralized Academy Records </span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/online-learning-3d-icon-png-download-3162172.png",
    group: "Records",
  },
  {
    id: 74,
    title: <span>Follow-Up Scheduling </span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzBldQpqNf2CU10YECKBpJ71Up3tXBXFSo8gut8fuGxNEBNCpLquDeMTHkao8M4VQImc&usqp=CAU",
    group: "Records",
  },
  {
    id: 75,
    title: <span>Academic Generation Records </span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRKd3QMM_6TmFfauYU9Gmh9cXo3CJduoHGsQ&s",
    group: "Records",
  },
  {
    id: 76,
    title: <span>Student Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/feedback-and-selfassessment-3d-icon-png-download-9169526.png",
    group: "School",
  },
  {
    id: 77,
    title: <span>Teacher Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/teacher-3d-icon-png-download-11785877.png",
    group: "School",
  },
  {
    id: 78,
    title: <span>Classroom Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/online-classroom-3d-icon-png-download-10553618.png",
    group: "School",
  },
  {
    id: 79,
    title: <span>Timetable Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/class-timetable-3d-icon-png-download-5074039.png",
    group: "School",
  },
  {
    id: 80,
    title: <span>Fees Management</span>,
    image:
      "https://png.pngtree.com/png-clipart/20250217/original/pngtree-budgeting-3d-icon-financial-planning-symbol-for-expense-management-and-money-png-image_20452281.png",
    group: "School",
  },
  {
    id: 81,
    title: <span>Admission Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/college-3d-icon-png-download-6560104.png",
    group: "School",
  },
  {
    id: 82,
    title: <span>Standard/Medium/Division</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK36-V1folEYppcuPpW--f17f2Lnn34Ejr-w&s",
    group: "School",
  },
  {
    id: 83,
    title: <span>Library Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/digital-library-3d-icon-png-download-5728128.png",
    group: "School",
  },
  {
    id: 84,
    title: <span>Subject Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/language-3d-icon-png-download-8654457.png",
    group: "School",
  },
  {
    id: 85,
    title: <span> Date / Month Wise Admissions</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-AuKg3ZfToJrxLoHQJV4Hi202b7yik1f8ZQ&s",
    group: "Admissions",
  },
  {
    id: 86,
    title: <span>Timeframe Admissions Dashboard</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-template-3d-icon-png-download-4800674.png",
    group: "Admissions",
  },
  {
    id: 87,
    title: <span>Admission Form </span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/registration-form-3d-icon-png-download-4379744.png",
    group: "Admissions",
  },
  {
    id: 88,
    title: <span>Student Registration</span>,
    image:
      "https://img.freepik.com/premium-vector/3d-account-login-password-form_165488-5795.jpg",
    group: "Admissions",
  },
  {
    id: 89,
    title: <span>Profile Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/profile-management-3d-icon-png-download-11664659.png",
    group: "Admissions",
  },
  {
    id: 90,
    title: <span>Document Upload & Verification</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/file-upload-3d-icon-png-download-8884903.png",
    group: "Admissions",
  },
  {
    id: 91,
    title: <span>Admission Fee Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/money-management-3d-icon-png-download-7525156.png",
    group: "Admissions",
  },
  // {
  //   id: 92,
  //   title: <span></span>,
  //   image:
  //     "",
  //   group: "Admissions",
  // },
  {
    id: 93,
    title: <span>Admission Management Mobile App</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-app-development-3d-icon-png-download-10771737.png",
    group: "Admissions",
  },

  {
    id: 94,
    title: <span>Admission Added Via QR Code</span>,
    image:
      "https://static.vecteezy.com/system/resources/previews/019/549/663/non_2x/qr-code-with-3d-icon-illustration-vector.jpg",
    group: "Admissions",
  },
  {
    id: 95,
    title: <span>Automated Lead Tracking</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-10522938.png",
    group: "Lead",
  },
  {
    id: 96,
    title: <span>Daily / Monthly / Yearly Lead Dashboard</span>,
    image:
      "https://img.freepik.com/premium-vector/calendar-3d-icon-day-month-year-time-concept-time-management-schedule-appointment-planning-element_313242-1365.jpg",
    group: "Lead",
  },
  {
    id: 97,
    title: <span>Course/Source Wise Lead Dashboard</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-icon-png-download-3930409.png",
    group: "Lead",
  },
  {
    id: 98,
    title: <span>Lead Generate/ Feedback QR Code</span>,
    image:
      "https://static.vecteezy.com/system/resources/previews/019/549/663/non_2x/qr-code-with-3d-icon-illustration-vector.jpg",
    group: "Lead",
  },

  {
    id: 99,
    title: <span>Lead ToDo Status</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/lead-conversion-3d-icon-png-download-3930394.png",
    group: "Lead",
  },
  {
    id: 100,
    title: <span>Lead Addition via QR Code</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUSyJcQ2GGKlaVtJx7PfrhE3Z9d9NI1Y7fA&s",
    group: "Lead",
  },
  {
    id: 101,
    title: <span>Lead Data Download / Upload CSV</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwj2YOZWbQWGcP4olfjTcxdSupGQTTmNWFVQ&s",
    group: "Lead",
  },
  {
    id: 102,
    title: <span>Lead Course / Source Management</span>,
    image:
      "https://img.freepik.com/premium-photo/marketing-advertisement-3d-icon_612313-264.jpg?semt=ais_hybrid&w=740&q=80",
    group: "Lead",
  },
  {
    id: 103,
    title: <span>Lead Follow-Up Reminder</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_lW1Uy3LphYtywWpgqHPxc5H-Uhl2aYuTmA&s",
    group: "Lead",
  },
  {
    id: 104,
    title: <span>Lead Management Mobile App</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-11035008.png",
    group: "Lead",
  },
  {
    id: 105,
    title: <span>Income, Expense & Saving Comparison Dashboard</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/online-expensive-report-3d-icon-png-download-5727732.png",
    group: "Inventory",
  },
  {
    id: 106,
    title: <span>Income / Expense By Category Dashboard</span>,
    image:
      "https://thumbs.dreamstime.com/b/ai-generated-image-content-title-d-icon-illustrating-financial-expense-management-white-background-d-354620019.jpg",
    group: "Inventory",
  },
  {
    id: 107,
    title: <span>Vendor and Supplier Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/wholesaler-3d-icon-png-download-9628101.png",
    group: "Inventory",
  },
  {
    id: 108,
    title: <span>Payment Integration</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/payment-gateway-3d-icon-png-download-9336135.png",
    group: "Inventory",
  },
  {
    id: 109,
    title: <span>User/Category Management</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOewq0JKzjU_7N3BmhEhXGzwK5AcDyHT3vSw&s",
    group: "Inventory",
  },
  {
    id: 110,
    title: <span> GST / TDS Compliance</span>,
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-tds-icon-svg-download-png-1538188.png",
    group: "Inventory",
  },
  {
    id: 111,
    title: <span>Inventory List Report</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/inventory-3d-icon-png-download-11254652.png",
    group: "Inventory",
  },
  {
    id: 112,
    title: <span>Smart HR Operations</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/hr-recruitment-3d-icon-png-download-12966631.png",
    group: "Employee",
  },
  {
    id: 113,
    title: <span>Employee Attendance Dashboard</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/attendance-3d-icon-png-download-11245305.png",
    group: "Employee",
  },
  {
    id: 114,
    title: <span>Employee Salary Comparison Dashboard ( Daily / Month / Year ) </span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/employee-salary-11271184-9075531.png?f=webp",
    group: "Employee",
  },
  {
    id: 115,
    title: <span>Employee Attendance with face Recognition</span>,
    image:
      "https://cdn.sanity.io/images/4y5gb0f2/production/bb51c7e3cb1807fdf2c42c480184c98c1c42e19e-434x384.svg",
    group: "Employee",
  },
  {
    id: 116,
    title: <span>Employee Salary & Leave Report</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/payroll-3d-icon-png-download-13251083.png",
    group: "Employee",
  },

  {
    id: 117,
    title: <span>Employee Salary Suummary Report</span>,
    image:
      "https://img.freepik.com/premium-vector/flat-design-icon-salary-slip_362714-6064.jpg",
    group: "Employee",
  },

  {
    id: 118,
    title: <span>Employee Attendance App</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/employee-list-3d-icon-png-download-11664648.png",
    group: "Employee",
  },

  {
    id: 119,
    title: <span>Employee Management Mobile App</span>,
    image:
      "https://thumbs.dreamstime.com/b/staff-management-d-icon-high-quality-design-ui-ux-apps-websites-digital-projects-png-vector-format-358577246.jpg",
    group: "Employee",
  },

  {
    id: 120,
    title: <span>Employee Offer / Joining / Increment / Experience Letter</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/employee-resume-3d-icon-png-download-9102109.png",
    group: "Employee",
  },

  {
    id: 121,
    title: <span>Employee Salary & Leave Report</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/payroll-3d-icon-png-download-8825113.png",
    group: "Employee",
  },

  {
    id: 122,
    title: <span>Auto Salary Calculation</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/financial-calculation-3d-icon-png-download-9581064.png",
    group: "Payroll",
  },

  {
    id: 123,
    title: <span>Tax & Compliance Ready</span>,
    image:
      "https://thumbs.dreamstime.com/b/tax-circle-icon-check-mark-d-illustration-blue-badge-yellow-arrow-checkmark-symbol-representing-approved-processes-358672214.jpg",
    group: "Payroll",
  },

  {
    id: 124,
    title: <span>Secure Data Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/data-management-3d-icon-png-download-9709881.png",
    group: "Payroll",
  },
  {
    id: 125,
    title: <span> Daily / Monthly / Yearly Dashboard</span>,
    image:
      "https://img.freepik.com/premium-vector/calendar-3d-icon-day-month-year-time-concept-time-management-schedule-appointment-planning-element_313242-1365.jpg",
    group: "Payroll",
  },
  {
    id: 126,
    title: <span>Monthly Salary Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/salary-3d-icon-png-download-3892858.png",
    group: "Payroll",
  },
  {
    id: 127,
    title: <span>Hourly Salary Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/time-and-money-management-icon-3d-icon-png-download-9394300.png",
    group: "Payroll",
  },

  {
    id: 128,
    title: <span>Teacher Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/male-teacher-explaining-geography-3d-icon-png-download-12928317.png",
    group: "Payroll",
  },

  {
    id: 129,
    title: <span>Exam Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/exam-3d-icon-png-download-8341975.png",
    group: "Payroll",
  },

  {
    id: 130,
    title: <span>Subject Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/manager-3d-icon-png-download-4444825.png",
    group: "Payroll",
  },

  {
    id: 131,
    title: <span>Primary domain or URL settings</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSajlRICwS0aD8hC2zkD2cdn7UUaU5VFPbIbA&s",
    group: "Dyanamic Website",
  },

  {
    id: 132,
    title: <span>Header/footer configuration</span>,
    image:
      "https://png.pngtree.com/png-vector/20240917/ourmid/pngtree-header-menu-3d-icon-png-image_13856371.png",
    group: "Dyanamic Website",
  },

  {
    id: 133,
    title: <span>Social media links & integration</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqmAY7Eh3VSeV8Uo_rKQCWuH2GwoO8j9UIsw&s",
    group: "Dyanamic Website",
  },

  {
    id: 134,
    title: <span>Contact information ( address, phone, email ) </span>,
    image:
      "https://img.freepik.com/free-vector/contact-icons-3d_1053-96.jpg",
    group: "Dyanamic Website",
  },

  {
    id: 135,
    title: <span>Website Testimonial </span>,
    image:
      "https://thumbs.dreamstime.com/b/customer-review-d-icon-illustration-great-business-technology-company-websites-apps-education-marketing-promotion-e-342664865.jpg",
    group: "Dyanamic Website",
  },

  {
    id: 136,
    title: <span>Vision & Mission</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/business-goal-3d-icon-png-download-3010228.png?f=webp",
    group: "Dyanamic Website",
  },
  {
    id: 137,
    title: <span>Image & Map</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1xLJhKe2Zax7Bq9Z9vyU-DIG8qlQ6pHhwA&s",
    group: "Dyanamic Website",
  },
  {
    id: 138,
    title: <span>Customised Sidebar</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/sidebar-3d-icon-png-download-8573207.png",
    group: "Dyanamic Website",
  },
  {
    id: 139,
    title: <span>Manage Department</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXcynTE-YNkWfLfKW4P_OqH3fmFXwEqVJ3Q&s",
    group: "Departments",
  },
  {
    id: 140,
    title: <span>Add New Department</span>,
    image:
      "https://png.pngtree.com/png-clipart/20250104/original/pngtree-add-document-3d-icon-png-image_19850534.png",
    group: "Departments",
  },
  {
    id: 141,
    title: <span>Permissions & Access Control</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/user-permissions-3d-icon-png-download-9132872.png",
    group: "Departments",
  },
  {
    id: 142,
    title: <span>Department Metadata / Settings</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/metadata-3d-icon-png-download-12008372.png",
    group: "",
  },

];

const dashboardData = [
  {
    title: "Daily Academy Admission Dashboard",
    desc: "The Daily Admission Count highlights the number of students admitted on a particular day, allowing management to track short-term performance and daily enrollment fluctuations.",
    img: dashboard1,
  },
  {
    title: "Yearly Academy Admission Dashboard",
    desc: "The Yearly Admission Count aggregates admissions across the month, making it easier to compare growth, identify seasonal trends, and measure the impact of ongoing campaigns. The Yearly Admission Count gives a consolidated picture of overall admissions in an academic year, supporting long-term planning, forecasting, and performance evaluation.",
    img: dashboard2,
  },
  {
    title: "Course-Wise Admission Dashboard",
    desc: "The Course-wise Admission Count provides insights into the popularity and demand of specific courses, aiding curriculum planning and marketing strategies.",
    img: dashboard3,
  },
  {
    title: "Sourse-Wise Admission Dashboard",
    desc: "The system offers Source-wise Admission Count, which categorizes students based on their admission sources—such as walk-ins, referrals, online campaigns, or partner institutions—helping institutions identify the most effective lead generation channels.",
    img: dashboard4,
  },
  {
    title: "Admission Count by Staff Dashboard",
    desc: "The system also tracks Admissions by Staff, showing how many students were enrolled by each staff member. This enables performance analysis, fair workload distribution, and recognition of high-performing team members.",
    img: dashboard5,
  },




];

const subfeatures = [
  {
    title: "Student Lifecycle Management",
    detail:
      "Manage admissions, personal records, academic tracking, and graduations in one platform.",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/lifecycle-3d-icon-download-in-png-blend-fbx-gltf-file-formats--product-market-analysis-growth-strategy-development-management-pack-e-commerce-shopping-icons-10958667.png?f=webp",
  },
  {
    title: "Attendance Monitoring",
    detail:
      "Track real-time student and faculty attendance with automated alerts and summaries.",
    image: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
  },
  {
    title: "Online Fee Management",
    detail:
      "Automate invoicing, track payments, and generate reports with multi-mode payment support.",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/online-credit-card-3d-icon-download-in-png-blend-fbx-gltf-file-formats--payment-method-financial-flexibility-secure-transactions-rewards-programs-remote-working-pack-business-icons-10958516.png?f=webp",
  },
  {
    title: "Exam & Result Management",
    detail:
      "Schedule exams, enter marks, publish results, and send report cards digitally.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpEiJUCXoQ3HgRwtJZeL-_nDU2XFIEssmUCg&s",
  },
  {
    title: "Parent Communication",
    detail:
      "Send notifications, SMS, emails, and updates to parents and guardians instantly.",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/mother-and-father-3d-icon-download-in-png-blend-fbx-gltf-file-formats--parent-parenthood-young-girl-family-pack-people-icons-9056963.png",
  },
  {
    title: "Timetable & Scheduling",
    detail:
      "Generate dynamic class and faculty schedules with room and resource optimization.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi5z38fcHWTkvczWT0qCTOw1qjnLg2s6_xKQ&s",
  },
];

const SchoolManagementSoftware = () => {
  const [selectedGroup, setSelectedGroup] = useState("Dashboard");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleGroupChange = (group) => {
    setSelectedGroup(group);
  };

  const filteredBlogs = blogs.filter((blog) => blog.group === selectedGroup);

  return (
    <>
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
                  Academy Management <span style={{ color: "#FFBF00" }}>System</span>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
                >
                  <b>Digitize, streamline, and manage</b> your entire academic
                  operations with our advanced Academy Management System. From student
                  admissions, course enrollment, class scheduling, and attendance
                  tracking to examination management and performance analysis—everything
                  is seamlessly centralized into a single platform. Empower teachers,
                  students, and administrators with real-time insights and smooth
                  communication to ensure a smarter academic journey.
                  <br />
                  <br />
                </Typography>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                  <Chip label="Student-Centric" color="primary" />
                  <Chip label="Automated Workflows" color="secondary" />
                  <Chip
                    label="Scalable & Secure"
                    sx={{ background: "#e1bee7", color: "#333" }}
                  />
                </Box>
              </Grid>

              {/* Right Image */}
              <Grid item xs={12} md={6} data-aos="fade-left">
                <motion.img
                  src={image1.src} // replace with your academy system image
                  alt="Academy Management"
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
                for Streamlining Academy Administrative and Academic Processes
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
                School management software is a comprehensive solution designed
                to streamline and enhance the administrative and academic
                processes within educational institutions. This software
                integrates various functionalities, including student
                enrollment, attendance tracking, timetable scheduling, grade
                management, and communication between teachers, students, and
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
          {/* Left: Mobile Mockup */}
          <div className={styles.phoneMockup} data-aos="fade-right">
            <img
              className={styles.img22}
              src={phone.src}
              alt="Academy Management Mobile"
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
              <span className={styles.highlight}>Academy Management Software</span>
            </h1>
            <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

            <ul className={styles.benefitList}>
              <li>
                <b>Centralized Administration:</b> Manage all school operations,
                including admissions, fees, and academics, from a single platform.
              </li>
              <li>
                <b>Automated Fee Management:</b> Simplifies fee collection,
                reminders, and receipt generation, reducing manual work.
              </li>
              <li>
                <b>Efficient Attendance Tracking:</b> Real-time tracking of
                student and staff attendance with instant reports.
              </li>
              <li>
                <b>Streamlined Communication:</b> Seamless communication between
                teachers, students, and parents via SMS, email, or notifications.
              </li>
              <li>
                <b>Exam and Report Card Management:</b> Conduct exams, evaluate
                results, and generate detailed report cards effortlessly.
              </li>
              <li>
                <b>Library Management:</b> Keep track of book inventories, issue
                records, and returns.
              </li>
              <li>
                <b>Timetable and Scheduling:</b> Easily create and manage timetables for
                classes and staff.
              </li>
              <li>
                <b>Customizable Reports:</b> Generate detailed analytics for school
                performance, finances, and academic outcomes.
              </li>
              <li>
                <b>Mobile Accessibility:</b> Access the system anytime, anywhere
                with mobile compatibility.
              </li>
              <li>
                <b>Data Security:</b> Ensures data integrity and privacy with secure,
                role-based access controls.
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
              <span style={{ color: "#FFBF00" }}>Academy</span>Management Dashboards
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

        {/*  Academy Management and AIS Section  */}
        <Box sx={{ padding: "40px 20px" }}>
          <Container>
            {/* Admissions Management */}
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
                    Admissions Management
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      lineHeight: "1.8",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    Simplify and digitize the entire admission process with our
                    School Management System. From online registrations and document
                    submissions to merit lists and student onboarding – everything is
                    automated and centralized for efficiency.
                    <br />
                    <br />
                    This ensures faster processing, transparency for parents, and
                    reduced manual workload for staff.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.img
                  src="https://i.pinimg.com/originals/ca/35/7d/ca357d4f625e62b94945891ca56b527d.gif"
                  alt="Admissions Management"
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

            {/* Faculty & Staff Management */}
            <Grid
              container
              spacing={4}
              alignItems="center"
              sx={{ marginBottom: "40px" }}
            >
              <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                <motion.img
                  src="https://globaleducation.s3.ap-south-1.amazonaws.com/globaledu/gif/faculty-traning.gif"
                  alt="Faculty Management"
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
                    Faculty & Staff Management
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      lineHeight: "1.8",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    Manage teacher and staff schedules, class assignments, and
                    performance evaluations with ease. Automated workload distribution
                    and real-time dashboards help optimize teaching efficiency.
                    <br />
                    <br />
                    It also supports professional development tracking, ensuring a
                    motivated and productive faculty team.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>

            {/* School Administration */}
            <Grid container spacing={4} alignItems="center">
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
                    School Administration
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      lineHeight: "1.8",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    Oversee fee collection, timetable scheduling, examinations, library
                    management, and parent communication all from one platform.
                    <br />
                    <br />
                    With real-time reporting and secure communication, schools achieve
                    transparency, accountability, and operational excellence.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.img
                  src="https://miro.medium.com/v2/resize:fit:1400/0*eF-hC2hbeW4M3_3n.gif"
                  alt="School Administration"
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
              of Academy Management System
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

export default SchoolManagementSoftware;
