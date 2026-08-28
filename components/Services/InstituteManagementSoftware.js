import React, { useEffect, useState } from "react";
import AOS from "aos";
import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import styles from "./InstituteManagementSoftware.module.css";
import phone from "../images/student-info-detail.png";
import Slider from "react-slick";
import dashboard1 from "../images/dashboard.png";
import dashboard2 from "../images/LeadDashboard.png";
import dashboard3 from "../images/Project-Dashboard.png";
import dashboard4 from "../images/SCHOOL-DASHBOARD 4.png";
import institutenew from "../images/institute new.gif"

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
  "Managements",
  "Classrooms",
  "Communications",
  "Admissions",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCodgTpG2Uk7AnOo6ujEgNBCgv2MwE0YkjiQ&s",
    group: "Dashboard",
  },
  {
    id: 48,
    title: <span>Yearly Academic Dashboard</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCodgTpG2Uk7AnOo6ujEgNBCgv2MwE0YkjiQ&s",
    group: "Dashboard",
  },
  {
    id: 49,
    title: <span>Monthly Academic Dashboard</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCodgTpG2Uk7AnOo6ujEgNBCgv2MwE0YkjiQ&s",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCodgTpG2Uk7AnOo6ujEgNBCgv2MwE0YkjiQ&s",
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
];

const imageVariants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, type: "spring", bounce: 0.4 },
  },
};

const Subfeatures = [
  {
    title: "Attendance Tracking",
    detail:
      "Monitor institute-wide attendance for students and staff in real-time with automated alerts and comprehensive reports.",
    image: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
  },
  {
    title: "Fee & Finance Management",
    detail:
      "Automate fee collection, track payments, manage payroll, and generate financial reports for the entire institute.",
    image: "https://cdn-icons-png.flaticon.com/512/1170/1170678.png",
  },
  {
    title: "Staff & HR Management",
    detail:
      "Manage staff records, attendance, leave, payroll, and performance from a unified dashboard.",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Resource & Facility Management",
    detail:
      "Track and allocate classrooms, labs, library resources, and other institute assets efficiently.",
    image: "https://cdn-icons-png.flaticon.com/512/1995/1995525.png",
  },
  {
    title: "Communication & Notifications",
    detail:
      "Send instant notifications, circulars, and updates to staff, students, and parents via SMS or email.",
    image: "https://cdn-icons-png.flaticon.com/512/2541/2541991.png",
  },
  {
    title: "Timetable & Scheduling",
    detail:
      "Create and manage class, exam, and event schedules for the entire institute.",
    image: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
  },
];
const dashboardData = [
  {
    title: "Institute / University Overview",
    desc: "Monitor academics, student progress, and class performance in one place with real-time updates and charts.",
    img: dashboard1,
  },
  {
    title: "Attendance Insights",
    desc: "Analyze attendance trends, absenteeism, and punctuality. Identify patterns and improve student engagement.",
    img: dashboard2,
  },
  {
    title: "Exam Analytics",
    desc: "Track exam results, subject-wise performance, and overall analytics. Make informed decisions for academic excellence.",
    img: dashboard3,
  },
  {
    title: "Admision  Analytics",
    desc: "Track exam results, subject-wise performance, and overall analytics. Make informed decisions for academic excellence.",
    img: dashboard4,
  },
];



const InstituteManagementSoftware = () => {

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
                University <span style={{ color: "#FFBF00" }}>Management System</span>
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
              >
                <b>Streamline, digitalize, and empower</b> your institute or university
                with our advanced <b>Management System</b>. Built to handle the
                complexities of higher education, it offers a secure, scalable, and
                user-friendly platform for academic and administrative excellence.
                Manage <b>admissions, student records, staff & faculty, course & curriculum,
                  attendance, fee collection, examinations, hostel, library, and performance reports</b>
                —all from a centralized system.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                <Chip
                  label="Campus Managment"
                  color="primary"
                  sx={{ color: "white", textDecoration: "bold" }}
                />
                <Chip
                  label="Alumni Management"
                  color="secondary"
                  sx={{ color: "white", textDecoration: "bold" }}
                />
                <Chip
                  label="Scholorship Management"
                  sx={{ background: "#e1bee7", color: "white", textDecoration: "bold" }}
                />
                <Chip
                  label="NAAc Based System"
                  sx={{ background: "lightblue", color: "white", textDecoration: "bold", textAlign: "center" }}
                />
              </Box>
            </Grid>

            {/* Right Image */}
            <Grid item xs={12} md={6} data-aos="fade-left">
              <motion.img
                src={institutenew} // 👉 Replace with your university illustration/image
                alt="Institute / University Management"
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
              <span className={styles.span}>A</span> Complete Platform for
              Managing University Operations and Academic Excellence
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
              Institute management software offers an all-in-one solution to
              efficiently manage academic and administrative operations for
              training centers, coaching classes, and professional institutes.
              It includes features like course and batch management, student and
              faculty enrollment, attendance tracking, performance evaluation,
              fee collection, and real-time communication to ensure seamless
              coordination and productivity across departments.
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
            alt="Institute Management Mobile"
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
            <span className={styles.highlight}>University Management System</span>
          </h1>
          <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

          <ul className={styles.benefitList}>
            <li>
              <b>Centralized Institute Administration:</b> Manage all operations —
              admissions, academics, HR, payroll, and finances — from a single
              platform.
            </li>
            <li>
              <b>Automated Fee & Finance Management:</b> Simplify fee collection,
              payment reminders, payroll, and expense tracking.
            </li>
            <li>
              <b>Efficient Attendance Tracking:</b> Monitor attendance for students
              and staff in real-time with detailed reports.
            </li>
            <li>
              <b>Streamlined Communication:</b> Enable seamless communication between
              management, staff, students, and parents via SMS, email, and app
              notifications.
            </li>
            <li>
              <b>Resource & Facility Management:</b> Keep track of classrooms,
              libraries, labs, and campus assets efficiently.
            </li>
            <li>
              <b>Timetable & Scheduling:</b> Automatically create, adjust, and manage
              class and staff timetables.
            </li>
            <li>
              <b>Mobile Accessibility:</b> Access data and perform tasks anytime,
              anywhere using mobile devices.
            </li>
            <li>
              <b>Data Security:</b> Protect sensitive information with role-based
              access control and cloud backup.
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
            <span style={{ color: "#FFBF00" }}>University</span> Management Dashboards
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

      {/* Institute Management & IMS Section */}
      <Box sx={{ padding: "40px 20px" }}>
        <Container>
          {/* First Section: Institute Management */}
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
                  <span>University Management</span>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    lineHeight: "1.8",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  An University Management System (IMS) is a comprehensive
                  solution that helps educational Universities efficiently
                  manage daily operations and administrative tasks. It covers a
                  wide range of modules such as academic scheduling, staff and
                  faculty management, infrastructure tracking, and financial
                  planning.
                  <br />
                  <br />
                  With real-time analytics and customizable workflows, IMS
                  facilitates streamlined decision-making, reduces manual
                  errors, and promotes greater operational transparency. The
                  system is essential for maintaining regulatory compliance and
                  optimizing resource utilization across the entire institution.
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.img
                src="https://cdn.dribbble.com/users/1138853/screenshots/4834993/06_08_gif.gif"
                alt="Institute Management"
                style={{
                  width: "100%",
                  maxWidth: 350,
                  height: "auto",
                  maxHeight: 260,
                  objectFit: "contain",
                  borderRadius: "10px",
                  display: "block",
                  margin: "0 auto",
                  scale: 1.04,
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

          {/* Second Section: Institute Information Management */}
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{ marginBottom: "40px" }}
          >
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <motion.img
                src="https://i.pinimg.com/originals/18/98/81/189881c7d4d7969a1b43585c660cf603.gif"
                alt="Institute Information System"
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
                  <span style={{ color: "#2874A6" }}>
                    University Information Management
                  </span>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    lineHeight: "1.8",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  An University Information System acts as the digital backbone
                  of an educational organization by centralizing and
                  safeguarding key institutional data. It manages critical
                  records including infrastructure details, accreditation
                  reports, compliance documentation, human resource files, and
                  policy frameworks.
                  <br />
                  <br />
                  This system empowers administrators with instant access to
                  organized and secure data, enabling timely audits, effective
                  internal communication, and informed planning. A
                  well-structured Institute Information System ensures
                  data-driven governance and institutional excellence.
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
            of University Management System
          </Typography>

          <Grid container spacing={4}>
            {Subfeatures.map((item, idx) => (
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

export default InstituteManagementSoftware;
