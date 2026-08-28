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
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import image1 from "../images/LeadGif.gif";
import phone from "../images/student-info-detail.png";
import dashboard1 from "../images/leadimage1.png";
import dashboard2 from "../images/leadimage2.png";
import dashboard3 from "../images/leadimage3.png";
import heroBg from "../images/blue.avif"; // <-- add your background image here
import styles from "./EnquiryManagementSystem.module.css"

const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
};;

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

const groups = [
  "Dashboard",
  "Administration",
  "Managements",
  "Communication",
  "Report & Analytics",
  "Support",
  "Apps",
];

// const blogs = [
//   {
//     id: 1,
//     title: "Centralized Lead Records",
//     image: "https://cdn-icons-png.flaticon.com/512/9184/9184909.png",
//     group: "Records",
//   },

//   {
//     id: 2,
//     title: "Lead Capture & Integration",
//     image: "https://cdn-icons-png.flaticon.com/512/9422/9422977.png",
//     group: "Settings",
//   },
//   {
//     id: 3,
//     title: "Follow-Up Scheduling",
//     image: "https://cdn-icons-png.flaticon.com/512/5864/5864217.png",
//     group: "Records",
//   },
//   {
//     id: 4,
//     title: "Employee Assignment",
//     image: "https://cdn-icons-png.flaticon.com/512/11279/11279979.png",
//     group: "Records",
//   },
//   {
//     id: 5,
//     title: "Status Tracking",
//     image: "https://cdn-icons-png.flaticon.com/512/3950/3950815.png",
//     group: "Report & Analytics",
//   },
//   {
//     id: 6,
//     title: "Response Templates",
//     image: "https://cdn-icons-png.flaticon.com/512/4618/4618571.png",
//     group: "Support",
//   },
//   {
//     id: 7,
//     title: "24*7 Support",
//     image: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
//     group: "Support",
//   },
//   {
//     id: 8,
//     title: "Reports & Dashboard",
//     image:
//       "https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1509.jpg",
//     group: "Report & Analytics",
//   },
//   {
//     id: 9,
//     title: "Customizable Forms",
//     image: "https://cdn-icons-png.flaticon.com/512/8901/8901485.png",
//     group: "Settings",
//   },
//   {
//     id: 10,
//     title: "Lead Course Category",
//     image: "https://cdn3d.iconscout.com/3d/premium/thumb/categories-3d-icon-png-download-9496639.png",
//     group: "Settings",
//   },
//   {
//     id: 11,
//     title: "Lead Course Catalogue",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgl0cinlNIfqpNHORpTNN2FFLMRPSqYOz_g&s",
//     group: "Settings",
//   },
//   {
//     id:12,
//     title: "Lead Genarate Source",
//     image: "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-10522938.png",
//     group: "Settings",
//   },
//   {
//     id: 13,
//     title: "Lead Generation Records",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoi6O2CRnCZo9nSdUKJiZPsrfJDm1nu0H0ZA&s",
//     group: "Records",
//   },
//   {
//     id: 14,
//     title: "Lead Sorting",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP86Rxj5uOfNGkNzg78Q_FWqOby0Ef8RWqDA&s",
//     group: "Settings",
//   },
//   {
//     id: 15,
//     title: "Lead Source Tracker",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYrCFBadLis_dDJm5_eGzMpWexwh3lO_aGuA&s",
//     group: "Report & Analytics",
//   },
//   {
//     id: 16,
//     title: "Lead Controller",
//     image:
//       "https://img.freepik.com/premium-psd/controlling-3d-icon-gaming-esports_431668-758.jpg",
//     group: "Communication",
//   },
//   {
//     id: 17,
//     title: "Automated Follow-Ups",
//     image:
//       "https://img.freepik.com/premium-photo/sign-up-icon-follow-icon-3d-illustration_115990-2221.jpg",
//     group: "Communication",
//   },
//   {
//     id: 18,
//     title: "Communication History",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQYOdJKBPerfZ9IXgfO8Cu4f72Wusx63sOpg&s",
//     group: "Communication",
//   },
//   {
//     id: 19,
//     title: "Integration with Other Systems",
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/data-integration-3d-icon-download-in-png-blend-fbx-gltf-file-formats--automation-management-server-cloud-services-and-network-pack-communication-icons-7647733.png",
//     group: "Communication",
//   },
//   {
//     id: 20,
//     title: "Lead/Enquiry Management",
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/online-analysis-3d-icon-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-data-essential-marketing-pack-business-icons-8210975.png?f=webp",
//     group: "Managements",
//   },
//   {
//     id: 21,
//     title: "Lead Addition via QR Code",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8A-D1j4Dpkjs_CFiUa_Q3p70F77SInujtg&s",
//     group: "Managements",
//   },
//   {
//     id: 22,
//     title: "Lead Generation Management",
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-8210965.png?f=webp",
//     group: "Managements",
//   },
//     {
//     id: 23,
//     title: "Lead List Management",
//     image:
//       "https://static.vecteezy.com/system/resources/thumbnails/043/987/760/small_2x/order-list-3d-icon-png.png",
//     group: "Managements",
//   },
//   {
//     id: 24,
//     title: "Lead Calling by App",
//     image:
//       "https://img.freepik.com/premium-vector/3d-call-center-icon-with-message-concept-talking-phone-support-service-contact-center_110633-1481.jpg",
//     group: "Apps",
//   },
//   {
//     id: 25,
//     title: "Lead Management App",
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-app-3d-icon-download-in-png-blend-fbx-gltf-file-formats--technology-smartphone-phone-digital-agency-pack-website-development-icons-4071987.png?f=webp",
//     group: "Apps",
//   },
//   {
//     id: 26,
//     title: "Daily Lead Dashboard",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDOZFIEDU5S7OhWHsy8cE2FRNh8pgR9h8iHA&s",
//     group: "Dashboard",
//   },
//   {
//     id: 27,
//     title: "Yearly Lead Dashboard",
//     image:
//       "https://static.vecteezy.com/system/resources/previews/024/683/438/non_2x/3d-icon-analysis-chart-data-graph-illustration-concept-icon-render-free-png.png",
//     group: "Dashboard",
//   },
//   {
//     id: 28,
//     title: "Montly Lead Dashboard",
//     image:
//       "https://thumbs.dreamstime.com/b/monthly-report-d-icon-perfectly-isolated-white-background-business-financial-analysis-358982518.jpg",
//     group: "Dashboard",
//   },
//   {
//     id: 29,
//     title: "Source-wise Lead Dashboard",
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-download-in-png-blend-fbx-gltf-file-formats--marketing-seo-customer-relationship-management-pack-business-icons-8399892.png?f=webp",
//     group: "Dashboard",
//   },
//   {
//     id: 30,
//     title: "Course-wise Lead Dashboard",
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/course-completion-3d-icon-download-in-png-blend-fbx-gltf-file-formats--achievement-graduation-certification-learning-management-system-pack-school-education-icons-10553625.png",
//     group: "Dashboard",
//   },
//   {
//     id: 31,
//     title: "Lead Generate Source",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScG91Xz6bd_AykiYnw8EthQHDqtVrwtq557Q&s",
//     group: "Managements",
//   },
//   {
//     id: 32,
//     title: "Lead Generate Category",
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/categories-3d-icon-download-in-png-blend-fbx-gltf-file-formats--menu-category-list-option-application-online-streaming-pack-communication-icons-9496639.png",
//     group: "Managements",
//   },
//   {
//     id: 33,
//     title: "Lead Feedback QR",
//     image:
//       "https://static.vecteezy.com/system/resources/previews/019/549/663/non_2x/qr-code-with-3d-icon-illustration-vector.jpg",
//     group: "Managements",
//   },
//   {
//     id: 34,
//     title: "Lead Generate New QR",
//     image:
//       "https://media.istockphoto.com/id/1454721535/vector/3d-vector-female-hand-holds-smartphone-with-mobile-app-scan-qr-code-poster-design.jpg?s=612x612&w=0&k=20&c=ANqHojxX4y7zvDMFwPAaTvD22CpgCHz-XJDnEo8_wvs=",
//     group: "Managements",
//   },
//   {
//     id: 35,
//     title: "Genarate Lead Conduct",
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/market-analysis-3d-icon-download-in-png-blend-fbx-gltf-file-formats--marketvulnerability-performanceanalysis-innovationstrategy-marketsize-b2c-marketing-pack-business-icons-10932585.png?f=webp",
//     group: "Settings",
//   },
//   {
//     id: 36,
//     title: "Lead Todo Status",
//     image:
//       "https://img.freepik.com/premium-vector/document-3d-icon-todo-list-concept-with-check-mark-round-button-3d-realistic-design-element_363543-543.jpg",
//     group: "Settings",
//   },
//   {
//     id: 37,
//     title: "Centralized Lead Dashboard",
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-icon-png-download-11233740.png",
//     group: "Dashboard",
//   },
//   {
//     id: 38,
//     title: "Admin App",
//     image:
//       "https://static.vecteezy.com/system/resources/previews/024/683/438/non_2x/3d-icon-analysis-chart-data-graph-illustration-concept-icon-render-free-png.png",
//     group: "Apps",
//   },
//   {
//     id: 39,
//     title: "Lead Call Satus Tracking",
//     image:
//       "https://static.vecteezy.com/system/resources/previews/024/683/438/non_2x/3d-icon-analysis-chart-data-graph-illustration-concept-icon-render-free-png.png",
//     group: "Apps",
//   },
//   {
//     id: 40,
//     title: "Calling Follow-up REminder",
//     image:
//       "https://static.vecteezy.com/system/resources/previews/024/683/438/non_2x/3d-icon-analysis-chart-data-graph-illustration-concept-icon-render-free-png.png",
//     group: "Communication",
//   },
//    {
//     id: 41,
//     title: "Whatsapp SMS and Email Integration",
//     image:
//       "https://static.vecteezy.com/system/resources/previews/024/683/438/non_2x/3d-icon-analysis-chart-data-graph-illustration-concept-icon-render-free-png.png",
//     group: "Communication",
//   },
//   {
//     id: 42,
//     title: "Lead Capture and Lead Distribution",
//     image:
//       "https://static.vecteezy.com/system/resources/previews/024/683/438/non_2x/3d-icon-analysis-chart-data-graph-illustration-concept-icon-render-free-png.png",
//     group: "Communication",
//   },
//   {
//     id: 43,
//     title: "Lead Follow-Up Reminder",
//     image:
//       "https://static.vecteezy.com/system/resources/previews/055/108/905/non_2x/smartphone-reminder-notification-3d-icon-realistic-illustration-png.png",
//     group: "Report & Analytics",
//   },
//   {
//     id: 44,
//     title: "Role Based Access Control",
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/access-control-8724825-7067630.png",
//     group: "Report & Analytics",
//   },
//   {
//     id: 45,
//     title: "Reporting and Analytics",
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/data-analytics-3d-icon-png-download-6149163.png",
//     group: "Report & Analytics",
//   },
//   {
//     id: 46,
//     title: "Lead Data Download CSV",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJ3K7sBiknsKFNUjZvJgAJVQjrvP_xKNLcQ&s",
//     group: "Managements",
//   },
//   {
//     id: 47,
//     title: "Lead Data Upload CSV",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25maRklBy5RfBE69LFN_wVMFEfKd0Kr0oHQ&s",
//     group: "Managements",
//   },
//   {
//     id: 48,
//     title: "Task Generation Management",
//     image:
//       "https://cdn3d.iconscout.com/3d/premium/thumb/task-management-3d-icon-png-download-12696776.png",
//     group: "Managements",
//   },
//     {
//     id: 49,
//     title: "Lead Report Management",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUCkILZulKTC-q8i9o7SbGSM0EYn31exoZQ&s",
//     group: "Managements",
//   },


// ];


// const blogs = [
//   // Dashboard
//   {
//     id: 1,
//     title: "Centralized Dashboard",
//     image: "https://cdn-icons-png.flaticon.com/512/9184/9184909.png",
//     group: "Dashboard",
//   },
//   {
//     id: 2,
//     title: "Daily Lead Count Dashboard",
//     image: "https://cdn-icons-png.flaticon.com/512/9184/9184909.png",
//     group: "Dashboard",
//   },
//   {
//     id: 3,
//     title: "Yearly Monthly Lead Count Dashboard",
//     image: "https://cdn-icons-png.flaticon.com/512/9184/9184909.png",
//     group: "Dashboard",
//   },
//   {
//     id: 4,
//     title: "Source-wise Lead Distribution Dashboard",
//     image: "https://cdn-icons-png.flaticon.com/512/9184/9184909.png",
//     group: "Dashboard",
//   },
//     {
//     id: 5,
//     title: "Course-wise Lead Distribution Dashboard",
//     image: "https://cdn-icons-png.flaticon.com/512/9184/9184909.png",
//     group: "Dashboard",
//   },

//   // Lead / Enquiry Management
//   {
//     id: 2,
//     title: "Lead / Enquiry Management",
//     image: "https://cdn3d.iconscout.com/3d/premium/thumb/online-analysis-3d-icon-8210975.png",
//     group: "Managements",
//   },
//   {
//     id: 3,
//     title: "Lead Generation",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoi6O2CRnCZo9nSdUKJiZPsrfJDm1nu0H0ZA&s",
//     group: "Records",
//   },
//   {
//     id: 4,
//     title: "Lead Report",
//     image: "https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1509.jpg",
//     group: "Analytics",
//   },
//   {
//     id: 5,
//     title: "Lead List Filtration",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP86Rxj5uOfNGkNzg78Q_FWqOby0Ef8RWqDA&s",
//     group: "Integration",
//   },
//   {
//     id: 6,
//     title: "Lead Source Tracking",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYrCFBadLis_dDJm5_eGzMpWexwh3lO_aGuA&s",
//     group: "Analytics",
//   },
//   {
//     id: 7,
//     title: "Lead Call Status Tracking",
//     image: "https://img.freepik.com/premium-vector/3d-call-center-icon_110633-1481.jpg",
//     group: "Apps",
//   },
//   {
//     id: 8,
//     title: "Lead Conduct Tracking",
//     image: "https://cdn3d.iconscout.com/3d/premium/thumb/market-analysis-3d-icon-10932585.png",
//     group: "Managements",
//   },
//   {
//     id: 9,
//     title: "Lead Data Download (CSV)",
//     image: "https://cdn-icons-png.flaticon.com/512/9422/9422977.png",
//     group: "Integration",
//   },
//   {
//     id: 10,
//     title: "Lead Follow-Up Reminder",
//     image: "https://cdn-icons-png.flaticon.com/512/5864/5864217.png",
//     group: "Records",
//   },
//   {
//     id: 11,
//     title: "Calling Follow-Up History",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQYOdJKBPerfZ9IXgfO8Cu4f72Wusx63sOpg&s",
//     group: "Communication",
//   },
//   {
//     id: 12,
//     title: "Lead Automatic Add by QR",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8A-D1j4Dpkjs_CFiUa_Q3p70F77SInujtg&s",
//     group: "Managements",
//   },
//   {
//     id: 13,
//     title: "Lead Feedback QR",
//     image: "https://static.vecteezy.com/system/resources/previews/019/549/663/non_2x/qr-code-with-3d-icon-illustration-vector.jpg",
//     group: "Managements",
//   },

//   // Courses
//   {
//     id: 14,
//     title: "Lead Courses Category",
//     image: "https://cdn3d.iconscout.com/3d/premium/thumb/categories-3d-icon-9496639.png",
//     group: "Managements",
//   },

//   // Task & To-do
//   {
//     id: 17,
//     title: "Lead To Do Status",
//     image: "https://img.freepik.com/premium-vector/document-3d-icon-todo-list-concept_363543-543.jpg",
//     group: "Managements",
//   },
//   {
//     id: 18,
//     title: "Task Generation",
//     image: "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-app-3d-icon-4071987.png",
//     group: "Apps",
//   },

//   // Reports & Analytics
//   {
//     id: 19,
//     title: "Reportin ddg and Analytics",
//     image: "https://static.vecteezy.com/system/resources/previews/012/806/392/non_2x/3d-data-analytics-dashboard-and-business-finance-report-business-development-report-chart-3d-goal-for-business-finance-money-investment-3d-rendering-png.png",
//     group: "Analytics",
//   },

//   // Admin & Access Control
//   {
//     id: 20,
//     title: "Super Admin Interface",
//     image: "https://cdn-icons-png.flaticon.com/512/3950/3950815.png",
//     group: "Analytics",
//   },
//   {
//     id: 21,
//     title: "Role Based Access Control",
//     image: "https://cdn-icons-png.flaticon.com/512/11279/11279979.png",
//     group: "Records",
//   },

//   // Communication & Integration
//   {
//     id: 22,
//     title: "WhatsApp, SMS, Email Integration",
//     image: "https://cdn3d.iconscout.com/3d/premium/thumb/data-integration-3d-icon-7647733.png",
//     group: "Communication",
//   },

//   // Apps
//   {
//     id: 23,
//     title: "Admin App",
//     image: "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-app-3d-icon-4071987.png",
//     group: "Apps",
//   },
//   {
//     id: 24,
//     title: "Lead Management App",
//     image: "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-app-3d-icon-4071987.png",
//     group: "Apps",
//   },

//   // System & Support
//   {
//     id: 25,
//     title: "Daily Back Up",
//     image: "https://cdn-icons-png.flaticon.com/512/4618/4618571.png",
//     group: "Support",
//   },
//   {
//     id: 26,
//     title: "Cloud Storing",
//     image: "https://cdn3d.iconscout.com/3d/premium/thumb/data-integration-3d-icon-7647733.png",
//     group: "Support",
//   },
//   {
//     id: 27,
//     title: "24/7 Support",
//     image: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
//     group: "Support",
//   },
// ];

const blogs = [
  {
    id: 1,
    title: "Daily Lead Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/user-dashboard-3d-icon-png-download-12296671.png",
    group: "Dashboard",
  },
  {
    id: 2,
    title: "Monthly Lead Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/ai-report-dashboard-3d-icon-png-download-11758251.png",
    group: "Dashboard",
  },

  {
    id: 3,
    title: "Yearly Lead Dashboard",
    image: "https://thumbs.dreamstime.com/b/d-realistic-isometric-dashboard-ui-elements-charts-donut-graphs-icons-white-background-visually-engaging-rendering-398977176.jpg",
    group: "Dashboard",
  },
  {
    id: 4,
    title: "Sourse-Wise Lead Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-icon-png-download-7607721.png",
    group: "Dashboard",
  },

  {
    id: 5,
    title: "Course-Wise Lead Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/marketing-dashboard-3d-icon-png-download-4788199.png",
    group: "Dashboard",
  },
  {
    id: 6,
    title: "Date Customization Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/personal-dashboard-3d-icon-png-download-12541376.png",
    group: "Dashboard",
  },
  {
    id: 7,
    title: "Lead Course Category",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-8399892.png",
    group: "Administration",
  },
  {
    id: 8,
    title: "Lead Course Catalogue",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-11035008.png",
    group: "Administration",
  },
  {
    id: 9,
    title: "Lead Generate Source",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-10215983.png",
    group: "Administration",
  },
  {
    id: 10,
    title: "Genarate Lead Conduct",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-10522938.png?f=webp",
    group: "Administration",
  },
  {
    id: 11,
    title: "Mannual Lead Creation",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-10766054.png",
    group: "Administration",
  },
  {
    id: 12,
    title: "Lead Generate QR Code",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/qr-code-3d-icon-png-download-12692239.png",
    group: "Administration",
  },
  {
    id: 13,
    title: "Lead Feedback QR Code",
    image: "https://static.vecteezy.com/system/resources/thumbnails/034/759/548/small_2x/qr-code-scanning-payment-qr-code-3d-icon-png.png",
    group: "Administration",
  },
  {
    id: 14,
    title: "Lead ToDo Status",
    image: "https://png.pngtree.com/png-vector/20240426/ourmid/pngtree-checklist-3d-icon-transparent-png-image_12324415.png",
    group: "Administration",
  },
  {
    id: 15,
    title: "Role Based Access Control",
    image: "https://cdn-icons-png.flaticon.com/256/7426/7426463.png",
    group: "Administration",
  },
  {
    id: 16,
    title: "Lead Record Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/lead-conversion-3d-icon-png-download-3930394.png",
    group: "Managements",
  },
  {
    id: 17,
    title: "Lead Records Administration",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/edit-3d-icon-png-download-8231181.png",
    group: "Managements",
  },
  {
    id: 18,
    title: "Lead Course Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/management-3d-icon-png-download-12569757.png",
    group: "Managements",
  },
  {
    id: 19,
    title: "Lead Source Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/expansion-3d-icon-png-download-10958645.png",
    group: "Managements",
  },
  {
    id: 20,
    title: "Lead Conduct Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/client-acquisition-3d-icon-png-download-10522950.png",
    group: "Managements",
  },
  {
    id: 21,
    title: "Lead Time Frame Management",
    image: "https://png.pngtree.com/png-clipart/20250426/original/pngtree-d-illustration-of-time-management-icon-representing-scheduling-and-productivity-concept-png-image_20830103.png",
    group: "Managements",
  },
  {
    id: 22,
    title: "Lead Addition via QR Code",
    image: "https://img.pikbest.com/origin/09/23/96/51qpIkbEsTxIn.png!sw800",
    group: "Managements",
  },
  {
    id: 23,
    title: "Lead Data Download CSV",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/csv-file-3d-icon-png-download-7718398.png",
    group: "Managements",
  },
  {
    id: 24,
    title: "Lead Data Upload CSV",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/csv-file-3d-icon-png-download-5073906.png",
    group: "Managements",
  },
  {
    id: 25,
    title: "Lead Conduct Performance Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-11035008.png",
    group: "Managements",
  },
  {
    id: 26,
    title: "Create Task Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/task-management-4721296-3931550.png",
    group: "Managements",
  },
  {
    id: 27,
    title: "Course Marketing Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/marketing-management-5510253-4603280.png",
    group: "Managements",
  },
  {
    id: 28,
    title: "Employee Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/employee-management-3d-icon-png-download-5700963.png",
    group: "Managements",
  },
  {
    id: 29,
    title: "Lead Follow-Up History",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-10522938.png",
    group: "Communication",
  },
  {
    id: 30,
    title: "Lead Follow-Up Reminder",
    image: "https://static.vecteezy.com/system/resources/previews/055/108/905/non_2x/smartphone-reminder-notification-3d-icon-realistic-illustration-png.png",
    group: "Communication",
  },
  {
    id: 31,
    title: "Whtsapp Message Integration",
    image: "https://static.vecteezy.com/system/resources/previews/049/810/881/non_2x/3d-whatsapp-notification-icon-one-new-message-in-the-inbox-concept-3d-illustration-free-png.png",
    group: "Communication",
  },
  {
    id: 32,
    title: "Text Message Integration",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/sms-3d-icon-png-download-10033812.png",
    group: "Communication",
  },
  {
    id: 33,
    title: "Email Message Integration",
    image: "https://static.vecteezy.com/system/resources/previews/019/153/015/non_2x/3d-minimal-online-communication-concept-social-network-online-connection-mail-icon-with-a-contact-and-message-icon-3d-illustration-free-png.png",
    group: "Communication",
  },
  {
    id: 34,
    title: "Bulk Message Integration",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/exchange-3d-icon-png-download-10968183.png",
    group: "Communication",
  },
  {
    id: 35,
    title: "24/7 Support",
    image: "https://cdn-icons-png.freepik.com/512/9716/9716259.png",
    group: "Support",
  },
  {
    id: 36,
    title: "Help Desk Support",
    image: "https://cdn-icons-png.flaticon.com/512/4961/4961759.png",
    group: "Support",
  },
  {
    id: 37,
    title: "Next Generation Software Updatation",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/software-update-3d-icon-png-download-11009195.png",
    group: "Support",
  },
  {
    id: 38,
    title: "Admin App",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/app-development-3d-icon-png-download-6716446.png",
    group: "Apps",
  },
  {
    id: 39,
    title: "Lead App",
    image: "https://static.vecteezy.com/system/resources/thumbnails/043/987/993/small/mobile-development-3d-icon-png.png",
    group: "Apps",
  },
  {
    id: 40,
    title: "Lead List Reporting",
    image: "https://cdn-icons-png.flaticon.com/512/10473/10473656.png",
    group: "Report & Analytics",
  },
  {
    id: 41,
    title: "Lead Conduct Reporting",
    image: "https://static.vecteezy.com/system/resources/previews/046/680/407/non_2x/3d-report-icon-report-symbol-3d-free-png.png",
    group: "Report & Analytics",
  },
  {
    id: 42,
    title: "Lead Sourses Reporting",
    image: "https://static.vecteezy.com/system/resources/previews/046/680/425/non_2x/3d-report-icon-report-symbol-3d-free-png.png",
    group: "Report & Analytics",
  },
  {
    id: 43,
    title: "Lead Courses Reporting",
    image: "https://static.vecteezy.com/system/resources/thumbnails/047/666/837/small/business-planning-business-object-illustration-3d-png.png",
    group: "Report & Analytics",
  },
  {
    id: 44,
    title: "Lead Feedback Reporting Analytics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsJ058P7MPoAdMN-nF3vj46nFUo35dwwo7Q&s",
    group: "Report & Analytics",
  },
  {
    id: 45,
    title: "Lead Task Reporting Analytics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61xKylgS10ddLCbPG7MLHebCHIeE53UTO-w&s",
    group: "Report & Analytics",
  },

];

const dashboardData = [
  {
    title: "Daily Lead Dashboard",
    desc: "The Daily Lead Count Dashboard provides a clear picture of the leads generated on a day-to-day basis. It helps businesses closely monitor their daily performance, identify peak hours of lead generation, and quickly act on any sudden drops in numbers. This real-time visibility is especially valuable for tracking the effectiveness of ongoing campaigns, advertisements, or short-term promotions.",
    img: dashboard1,
  },
  {
    title: "Yearly/Monthly Lead Dashboard",
    desc: "The Monthly/Monthly Lead Count Dashboard consolidates leads generated throughout the month and highlights growth trends compared to previous months. It enables businesses to track monthly targets, analyze marketing effectiveness, and plan resources more efficiently. Seasonal or campaign-driven variations also become more visible in this view, making it easier to understand customer behavior patterns.",
    img: dashboard2,
  },
  {
    title: "Source / Course-Wise Lead Dashboard",
    desc: "The Source / Course-Wise Lead Dashboard categorizes leads based on their origin, such as website inquiries, social media ads, referrals, walk-ins, agents, or QR code scans. By identifying the most effective lead sources, businesses can optimize their marketing spend, maximize ROI, and focus on the channels that bring in the highest-quality leads. This breakdown ensures better decision-making for campaign planning and channel prioritization.",
    img: dashboard3,
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
    id: 1,
    title: "Enquiry Dashboard",
    detail:
      "Provides a centralized view of all enquiry metrics with real-time graphs and trends.",
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
  },
  {
    id: 2,
    title: "Enquiry Form Builder",
    detail:
      "Design custom enquiry forms with dynamic fields for different academic programs.",
    image: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
  },
  {
    id: 3,
    title: "Lead Source Tracking",
    detail:
      "Identify which channels—website, social media, or walk-ins—are bringing in the most enquiries.",
    image: "https://cdn-icons-png.flaticon.com/512/2942/2942878.png",
  },
  {
    id: 4,
    title: "Follow-up Reminders",
    detail:
      "Get automatic reminders and alerts for timely follow-up with potential students.",
    image: "https://cdn-icons-png.flaticon.com/512/565/565340.png",
  },
  {
    id: 5,
    title: "Auto-Assign Counsellors",
    detail:
      "Assign leads to counsellors based on predefined rules to balance workload.",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    id: 6,
    title: "Enquiry to Admission",
    detail:
      "Easily convert an enquiry into a confirmed admission with all details carried forward.",
    image: "https://cdn-icons-png.flaticon.com/512/9523/9523801.png",
  },
  {
    id: 7,
    title: "Communication Logs",
    detail:
      "Log all interactions including emails, SMS, and calls with enquiry history.",
    image: "https://cdn-icons-png.flaticon.com/512/724/724715.png",
  },
  {
    id: 8,
    title: "Status Management",
    detail:
      "Monitor enquiry stages like New, Contacted, Interested, Converted, or Dropped.",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/management-3d-icon-download-in-png-blend-fbx-gltf-file-formats--gear-setting-settings-cogwheel-business-pack-icons-6723108.png",
  },
  {
    id: 9,
    title: "Report & Analytics",
    detail:
      "Export detailed reports by source, counselor, timeline, and status for deeper insights.",
    image: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
  },
  {
    id: 10,
    title: "Mobile Access",
    detail:
      "Counsellors and staff can manage enquiries from mobile devices with responsive design.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/041/643/995/small_2x/mobile-user-authentication-3d-icon-png.png",
  },
];

const EnquiryManagementSystem = () => {
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
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          color: "#fff",
          backgroundImage: `linear-gradient(90deg, rgba(3,6,25,0.75) 0%, rgba(3,6,25,0.5) 60%), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: { xs: "center center", md: "right center" },
          backgroundRepeat: "no-repeat",
        }}
      >
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
                Lead Management <span style={{ color: "#FFBF00" }}>System</span>
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "white", lineHeight: 1.8, mb: 3 }}
              >
                <b>Capture, track, and convert</b> your leads efficiently with our advanced
                Lead Management System. Manage your entire sales funnel — from lead generation,
                nurturing, and follow-ups to conversions — all in one centralized dashboard.
                Automate repetitive tasks, improve team productivity, and ensure that no
                potential customer slips through the cracks.
              </Typography>

              {/* Feature Chips */}
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 3 }}>
                <Chip label="Automated Lead Tracking" color="primary" />
                <Chip label="Smart Analytics" color="secondary" />
                <Chip
                  label="Real-time Notifications"
                  sx={{ background: "#e1bee7", color: "#333" }}
                />
              </Box>

              {/* Free Book Demo Button */}
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg, #FFBF00 0%, #FFD74A 100%)",
                  color: "white",
                  fontWeight: "bold",
                  px: 5,
                  py: 1.5,
                  borderRadius: "50px",
                  fontSize: "1rem",
                  textTransform: "none",
                  boxShadow: "0 0 15px rgba(255,191,0,0.5)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    background: "linear-gradient(90deg, #FFD74A 0%, #FFBF00 100%)",
                    transform: "translateY(-4px) scale(1.05)",
                    boxShadow: "0 0 25px rgba(255,191,0,0.8)",
                  },
                }}
                onClick={() => {
                  // Example action: open demo page or modal
                  window.location.href = "/contact-us";
                }}
              >
                REQUEST FOR FREE DEMO
              </Button>

            </Grid>

            {/* Right image (optional) */}
            <Grid
              item
              xs={12}
              md={6}
              data-aos="fade-left"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 640,
                  ml: "auto",
                }}
              >
                <motion.img
                  src={image1.src}
                  alt="Lead Management System"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: 16,
                    boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
                  }}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  whileHover={{ scale: 1.03 }}
                />
              </Box>
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
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#3498DB", mb: 2 }}>
              Why Choose Our Lead Management System?
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
              The Enquiry Management System streamlines and automates all
              enquiry and lead processes for organizations. It covers enquiry
              capture, follow-up scheduling, communication tracking, reporting,
              and analytics, ensuring transparency and efficiency for both staff
              and prospects.
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
        {/* Left Section: Phone Image */}
        <div className={styles.phoneMockup} data-aos="fade-right">
          <img
            className={styles.img22}
            src={phone.src}
            alt="Lead Management Mobile"
          />
        </div>

        {/* Right Section: Text Content */}
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
            <span className={styles.highlight}>Lead Management System</span>
          </h1>
          <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

          <ul className={styles.benefitList}>
            <li>
              <b>Centralized Inquiry Management:</b> All incoming inquiries are stored in one place for easy access and follow-up.
            </li>
            <li>
              <b>Efficient Inquiry Tracking:</b> Track each inquiry from initial contact to conversion, ensuring no lead is missed.
            </li>
            <li>
              <b>Automated Follow-Ups:</b> Schedule reminders automatically to ensure timely communication.
            </li>
            <li>
              <b>Customizable Inquiry Forms:</b> Collect relevant data specific to each lead type.
            </li>
            <li>
              <b>Real-Time Reporting:</b> Get insights into inquiry trends, response times, and conversion rates.
            </li>
            <li>
              <b>Lead Categorization:</b> Organize leads by status, interest level, or custom filters.
            </li>
            <li>
              <b>Improved Response Time:</b> Reduce delay between inquiry and follow-up to enhance customer satisfaction.
            </li>
            <li>
              <b>Seamless Communication:</b> Integrates with email, SMS, and other channels for prompt follow-ups.
            </li>
            <li>
              <b>Detailed Analytics:</b> Evaluate performance and marketing ROI with advanced reports.
            </li>
            <li>
              <b>Increased Conversion Rates:</b> Automate workflows to convert more inquiries into clients.
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
            <span style={{ color: "#FFBF00" }}>Lead</span> Management System
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

      {/* Subfeatures Section */}
      <Box sx={{ py: 8, background: "#fafdff" }}>
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
              Powerful Sub Features
            </span>{" "}
            of Lead Management System
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: "Unified Enquiry Inbox",
                detail:
                  "All your leads from website, phone, walk-ins, and social media are captured in one smart inbox—never miss a prospect again.",
                image: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
              },
              {
                title: "Smart Assignment",
                detail:
                  "Automatically assign enquiries to the right team member based on rules, workload, or expertise for faster response.",
                image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              },
              {
                title: "Automated Follow-Ups",
                detail:
                  "Set up reminders and auto-messages so every lead gets timely attention, boosting your conversion rates.",
                image: "https://cdn-icons-png.flaticon.com/512/565/565340.png",
              },
              {
                title: "Custom Forms & Fields",
                detail:
                  "Design beautiful, branded enquiry forms with fields tailored to your business—collect exactly what you need.",
                image: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
              },
              {
                title: "Real-Time Analytics",
                detail:
                  "Track enquiry sources, counselor performance, and conversion trends with interactive dashboards and exportable reports.",
                image: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
              },
              {
                title: "Integrated Communication",
                detail:
                  "Send WhatsApp, SMS, and emails directly from the system—keep all conversations and history in one place.",
                image: "https://cdn3d.iconscout.com/3d/premium/thumb/data-integration-3d-icon-7647733.png",
              },
              {
                title: "Mobile Friendly",
                detail:
                  "Manage, update, and follow up on enquiries from any device—perfect for teams on the go.",
                image:
                  "https://static.vecteezy.com/system/resources/thumbnails/041/643/995/small_2x/mobile-user-authentication-3d-icon-png.png",
              },
              {
                title: "Instant Status Updates",
                detail:
                  "Move leads through stages like New, Contacted, Interested, Converted, or Dropped with a single click.",
                image:
                  "https://cdn3d.iconscout.com/3d/premium/thumb/management-3d-icon-download-in-png-blend-fbx-gltf-file-formats--gear-setting-settings-cogwheel-business-pack-icons-6723108.png",
              },
            ].map((item, idx) => (
              <Grid item xs={12} sm={6} key={item.title}>
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: idx * 0.08,
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.3,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "#fff",
                    borderRadius: 16,
                    boxShadow: "0 4px 24px rgba(52,152,219,0.07)",
                    padding: 24,
                    gap: 24,
                    minHeight: 120,
                    borderLeft: `6px solid ${theme.palette.secondary.main}`,
                    transition: "box-shadow 0.3s",
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
                      width: 64,
                      height: 64,
                      objectFit: "contain",
                      flexShrink: 0,
                      background: "#f5faff",
                      borderRadius: "50%",
                      padding: 8,
                      boxShadow: "0 2px 8px rgba(52,152,219,0.08)",
                    }}
                  />
                  <div>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="primary"
                      mb={0.5}
                      sx={{ fontSize: 20 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: 16 }}>
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

export default EnquiryManagementSystem;

