import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Card,
  Box,
  Button,
  Chip,
  CardContent,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Slider from "react-slick";
import styles from "./CollegeManagementSystem.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import phone from "../images/student-info-detail.png";
import image1 from "../images/colllege-gif.gif";
import dashboard1 from "../images/Academy/daily admission dashborad new 1.png";
import dashboard2 from "../images/Academy/Standard Dashboard 2.png";
import dashboard3 from "../images/Academy/Caste Category Dashboard 3.png";
import { FaFileAlt, FaBullseye, FaClock, FaChartLine } from "react-icons/fa";
import {
  FaDesktop,
  FaSyncAlt,
  FaShieldAlt,
  FaExpandArrowsAlt,
  FaHeadset,
  FaPuzzlePiece,
  FaDatabase,
  FaLayerGroup,
  FaBell,
  FaChartBar,
  FaUserLock,
  FaSchool,
  FaBookOpen,
  FaComments,
  FaUserShield,
  FaLaptopCode,
  FaCloud
} from "react-icons/fa";

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

const needdata = [
  {
    title: "Online Admissions & Enquiry",
    desc: "Manage new admissions with digital forms and tracking.",
    img: "https://schoollog.in/assets/images/school-managment-software/online-payment.png"
  },
  {
    title: "Attendance & Timetable Management",
    desc: "Automate daily attendance & customise timetables per class.",
    img: "https://schoollog.in/assets/images/school-managment-software/attendance.png"
  },
  {
    title: "Fees, Billing & Online Payments",
    desc: "Generate invoices, and accept online payments securely.",
    img: "https://schoollog.in/assets/images/school-managment-software/fees.png"
  },
  {
    title: "Exams, Grading & Report Cards",
    desc: "Create exam schedules, auto-calculate grades & deliver downloadable report cards.",
    img: "https://schoollog.in/assets/images/school-managment-software/examgrading.png"
  },
  {
    title: "Library, Transport & Inventory",
    desc: "Track books, buses, and school assets centrally.",
    img: "https://schoollog.in/assets/images/school-managment-software/van.png"
  },
  {
    title: "Parent-Teacher Portal + Mobile App",
    desc: "Real-time updates, communication, homework, and announcements on Android & iOS.",
    img: "https://schoollog.in/assets/images/school-managment-software/meeting.png"
  }
];

const groups = [
  "Dashboard",
  "College",
  "Admissions",
  "Classroom",
  "Attendance",
  "Student",
  "Fees",
  "Management",
  "Support",
  "Reports & Analytics",
  "Apps",
];

const blogs = [
  {
    id: 1,
    title: <span>Timetable Generation</span>,
    image: "https://cdn-icons-png.flaticon.com/512/4695/4695003.png",
    group: "Classroom",
  },
  {
    id: 2,
    title: <span>Placement management</span>,
    image:
      "https://cdn-icons-png.freepik.com/256/11213/11213488.png?semt=ais_hybrid",
    group: "Admissions",
  },

  {
    id: 3,
    title: <span>Assignments Generation</span>,
    image: "https://cdn-icons-png.flaticon.com/512/5842/5842026.png",
    group: "Classroom",
  },

  {
    id: 4,
    title: <span>24*7 support</span>,
    image: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
    group: "Support",
  },
  {
    id: 5,
    title: <span>Reports and Dashboard</span>,
    image:
      "https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1509.jpg?ga=GA1.1.1863634387.1705751972&semt=ais_hybrid",
    group: "Reports",
  },
  {
    id: 6,
    title: <span>Next Generation Software</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3950/3950815.png",
    group: "Technology",
  },
  {
    id: 7,
    title: <span>Mobile Apps</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-app-testing-3d-icon-download-in-png-blend-fbx-gltf-file-formats--software-development-programming-web-pack-design-icons-6547026.png",
    group: "Apps",
  },
  {
    id: 8,
    title: <span>Student Portal</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMEaBMoqFvEF7O-l1ZMnjDnYVVuFXgKTfBw&s",
    group: "Apps",
  },
  {
    id: 9,
    title: <span>Faculty Portal</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-V6mXgr-xuD5vB7jr3_bC0wP6e0W3Mampg&s",
    group: "Apps",
  },
  {
    id: 10,
    title: <span>Admin Portal</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_6hoFFnSphXhgUNALiS3B38YDZrelvpRysQ&s",
    group: "Apps",
  },
  {
    id: 11,
    title: <span>Parent Portal</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/mother-and-father-3d-icon-download-in-png-blend-fbx-gltf-file-formats--parent-parenthood-young-girl-family-pack-people-icons-9056963.png",
    group: "Apps",
  },
  {
    id: 12,
    title: <span>Alumni Portal</span>,
    image:
      "https://media.istockphoto.com/id/1403347545/vector/man-looking-data-of-new-candidate.jpg?s=612x612&w=0&k=20&c=LDvoaYNUJdA7N5IGd6Md_aMf2cEjCGzp5r2n6TeekCM=",
    group: "Apps",
  },
  {
    id: 13,
    title: <span>Library Management</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvXYhSufG72EXuZvrOxYPhyPM9Hwzbzlzgrw&s",
    group: "Apps",
  },
  {
    id: 14,
    title: <span>Fees Management</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0V2R1_4PbBL2WLzZaQ6IQHnOwYXlTEqd5A&s",
    group: "Management",
  },
  {
    id: 15,
    title: <span>Attendance Management</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF15VWSiTybKStQQLpquau1se9MUDkas7AlA&s",
    group: "Management",
  },
  {
    id: 16,
    title: <span>Exam Management</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcm43Dp597TDTQ65VeN7ehcu09-pFJgb6ikQ&s",
    group: "Management",
  },
  {
    id: 17,
    title: <span>Communication Tools</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplDMeuuwehEL7vIYGmrr3FrGqzzxNraxF1Q&s",
    group: "Support",
  },
  {
    id: 18,
    title: <span>Data Security</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHlFAfsITtmlpnAlCbpN7cxhwSGwErJANItQ&s",
    group: "Support",
  },
  {
    id: 19,
    title: <span>Student Count Wise Dashboard</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/domain-secure-3d-icon-png-download-8391425.png",
    group: "Dashboard",
  },
  {
    id: 20,
    title: <span>Student Standard Wise Dashboard</span>,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/014/919/663/small_2x/dashboard-3d-render-icon-png.png",
    group: "Dashboard",
  },
  {
    id: 21,
    title: <span>Student Count by Caste Category Dashboard</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/admin-control-panel-3d-icon-png-download-7794470.png",
    group: "Dashboard",
  },
  {
    id: 22,
    title: <span>Classroom Dashboard</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/graphic-tool-3d-icon-png-download-9749131.png",
    group: "Dashboard",
  },
  {
    id: 23,
    title: <span>Institution Type </span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/school-3d-icon-png-download-5175980.png",
    group: "Classroom",

  },
  {
    id: 24,
    title: <span>Classroom Medium </span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/virtual-classroom-3d-icon-png-download-12809800.png",
    group: "Classroom",

  },
  {
    id: 25,
    title: <span>Classroom Division </span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcQlQ62OV7rzbZypmNnK9EIYPp3kknW7aFA&s",
    group: "Classroom",

  },
  {
    id: 26,
    title: <span>Academic Year </span>,
    image:
      "https://media.istockphoto.com/id/1359134622/vector/calendar-assignment-and-clock-icon-schedule.jpg?s=612x612&w=0&k=20&c=A27qJTLmBQ-xMds81ABYjdu6gRvHnyen4BNAwcPs3OY=",
    group: "Classroom",
  },
  {
    id: 27,
    title: <span>Classroom Management </span>,
    image:
      "https://media.istockphoto.com/id/1359134622/vector/calendar-assignment-and-clock-icon-schedule.jpg?s=612x612&w=0&k=20&c=A27qJTLmBQ-xMds81ABYjdu6gRvHnyen4BNAwcPs3OY=",
    group: "Management",
  },
  {
    id: 28,
    title: <span>Student Management </span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/student-dashboard-3d-icon-png-download-10553610.png",
    group: "Management",
  },
  {
    id: 29,
    title: <span>Admission Management </span>,
    image:
      "https://cdn-icons-png.flaticon.com/512/9523/9523801.png",
    group: "Management",
  },
  {
    id: 30,
    title: <span>Teacher Management </span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrux1uiisuOPiv7CUUaPjnd4vZaNmURZMbpA&s",
    group: "Management",
  },
  {
    id: 31,
    title: <span>Subject Management </span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/geography-subject-3d-icon-png-download-4404334.png",
    group: "Management",
  },
  {
    id: 32,
    title: <span>Timetable Management </span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/class-timetable-3d-icon-png-download-5074039.png",
    group: "Management",
  },
  {
    id: 33,
    title: <span>Student Inquiry </span>,
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/girl-raise-hand-in-classroom-illustration-svg-png-download-11877920.png",
    group: "Admissions",
  },
  {
    id: 34,
    title: <span>Lead Tracking</span>,
    image:
      "https://static.vecteezy.com/system/resources/previews/014/011/388/non_2x/gps-tracking-3d-rendering-isometric-icon-png.png",
    group: "Admissions",
  },
  {
    id: 35,
    title: <span>Document Management</span>,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/047/756/866/small/document-management-and-storage-of-3d-illustrations-icons-of-job-application-documents-and-gears-and-briefcases-png.png",
    group: "Admissions",
  },
  {
    id: 36,
    title: <span>Payment Integration</span>,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/023/887/188/small/bitcoin-payment-3d-cryptocurrency-investment-icon-png.png",
    group: "Admissions",
  },
  {
    id: 37,
    title: <span>Fee Management</span>,
    image:
      "https://www.shutterstock.com/image-illustration/3d-icon-financial-document-calendar-260nw-2647750125.jpg",
    group: "Admissions",
  },
  {
    id: 38,
    title: <span>Exam Scheduling</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/study-schedule-3d-icon-png-download-6235548.png",
    group: "Admissions",
  },
  {
    id: 39,
    title: <span>Interview Scheduling</span>,
    image:
      "https://cdn-icons-png.flaticon.com/512/6543/6543824.png",
    group: "Admissions",
  },
  {
    id: 40,
    title: <span>Id Card Generation</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/id-card-3d-icon-png-download-3892857.png",
    group: "Admissions",
  },
  {
    id: 41,
    title: <span>Help Desk</span>,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/053/348/023/small/a-3d-icon-of-a-person-with-a-headset-and-an-exclamation-mark-symbolizing-support-or-alerts-png.png",
    group: "Support",
  },
  {
    id: 42,
    title: <span>Next Generation Software Updatation</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/man-working-on-web-software-update-3d-icon-png-download-10371384.png",
    group: "Support",
  },
  {
    id: 43,
    title: <span>Attendance Tracking & Reporting</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/time-management-attendance-3d-icon-png-download-10099406.png",
    group: "Reports & Analytics",
  },
  {
    id: 44,
    title: <span>Student Performance Analytics</span>,
    image:
      "https://cdn1.iconfinder.com/data/icons/essential-marketing/512/Analytic.png",
    group: "Reports & Analytics",
  },
  {
    id: 45,
    title: <span>Course & Subject Wise Performance</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/course-completion-3d-icon-png-download-10553625.png",
    group: "Reports & Analytics",
  },
  {
    id: 46,
    title: <span>Customizable Reports & Filters</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96KCTXEBbtAaOPTza1FXm_LYHiCqJWDapLQ&s",
    group: "Reports & Analytics",
  },
  {
    id: 47,
    title: <span>Security & Access Control</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPPfq3WKJQhPjM29lVFBo_aJ0zlWO-h6OqA&s",
    group: "Reports & Analytics",
  },
  {
    id: 48,
    title: <span>Student Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/feedback-and-selfassessment-3d-icon-png-download-9169526.png",
    group: "Student",
  },
  {
    id: 49,
    title: <span>Student Dashboard</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/teacher-dashboard-3d-icon-png-download-10553607.png",
    group: "Student",
  },
  {
    id: 50,
    title: <span>Student Exam Report</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/exam-paper-3d-icon-png-download-8689250.png",
    group: "Student",
  },
  {
    id: 51,
    title: <span>Classroom Management </span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/online-classroom-3d-icon-png-download-10553618.png",
    group: "Student",
  },
  {
    id: 52,
    title: <span>Time Table Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/timetable-3d-icon-png-download-3369788.png",
    group: "Student",
  },

  {
    id: 53,
    title: <span>Attendance Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/attendance-3d-icon-png-download-11245305.png",
    group: "Student",
  },
  {
    id: 54,
    title: <span>Teacher Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/teacher-3d-icon-png-download-11785877.png",
    group: "Student",
  },
  {
    id: 55,
    title: <span>Academic Year</span>,
    image:
      "https://png.pngtree.com/png-vector/20250226/ourmid/pngtree-user-friendly-3d-educational-app-interface-design-vector-png-image_15598649.png",
    group: "Student",
  },
  {
    id: 56,
    title: <span>Student Profile</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SHupunKm-giRTSbAVSXxnwE9JsS1tW6O1w&s",
    group: "Student",
  },
  {
    id: 57,
    title: <span>Subject Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/student-profile-3d-icon-png-download-8824922.png",
    group: "Student",
  },
  {
    id: 58,
    title: <span>Standard/Medium/Division</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/standards-3d-icon-png-download-5431164.png",
    group: "Student",
  },
  {
    id: 59,
    title: <span>Student Stream</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/student-3d-icon-png-download-3369778.png",
    group: "Student",
  },
  {
    id: 60,
    title: <span>Fees By Month Dashboard</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/blog-3d-icon-png-download-9617430.png",
    group: "Fees",
  },
  {
    id: 61,
    title: <span>Fees Collected Payment Mode Dashboard</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/payment-3d-icon-png-download-5272924.png",
    group: "Fees",
  },
  {
    id: 62,
    title: <span>Collected Fees By Year Dashboard</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-icon-png-download-7577977.png",
    group: "Fees",
  },
  {
    id: 63,
    title: <span>Collected Fees By Month Dashboard</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/online-expensive-report-3d-icon-png-download-5727732.png?f=webp",
    group: "Fees",
  },
  {
    id: 64,
    title: <span>Fees Revenue by Bank Dashboard</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/online-expensive-report-3d-icon-png-download-5727732.png?f=webp",
    group: "Fees",
  },
  {
    id: 65,
    title: <span>Student Fee Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/student-loan-payment-3d-icon-png-download-12387215.png",
    group: "Fees",
  },
  {
    id: 66,
    title: <span>Library Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/data-library-3d-icon-png-download-12981117.png",
    group: "Management",
  },
  {
    id: 67,
    title: <span>Exam Fee</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5j-BGLQVBL_cT_mBdfhy68LRxWqT76krNaMYKU1TQHRo9dV1J-JjVmTrwnoMiyANXok&usqp=CAU",
    group: "Fees",
  },
  {
    id: 68,
    title: <span>Sports Fee</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/high-cost-3d-icon-png-download-5106695.png",
    group: "Fees",
  },
  {
    id: 69,
    title: <span>Student Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/feedback-and-selfassessment-3d-icon-png-download-9169526.png",
    group: "College",
  },
  {
    id: 70,
    title: <span>Teacher Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/teacher-3d-icon-png-download-11785877.png",
    group: "College",
  },
  {
    id: 71,
    title: <span>Classroom Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/online-classroom-3d-icon-png-download-10553618.png",
    group: "College",
  },
  {
    id: 72,
    title: <span>Timetable Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/class-timetable-3d-icon-png-download-5074039.png",
    group: "College",
  },
  {
    id: 73,
    title: <span>Fees Management</span>,
    image:
      "https://png.pngtree.com/png-clipart/20250217/original/pngtree-budgeting-3d-icon-financial-planning-symbol-for-expense-management-and-money-png-image_20452281.png",
    group: "College",
  },
  {
    id: 74,
    title: <span>Admission Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/college-3d-icon-png-download-6560104.png",
    group: "College",
  },
  {
    id: 75,
    title: <span>Standard/Medium/Division</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK36-V1folEYppcuPpW--f17f2Lnn34Ejr-w&s",
    group: "College",
  },
  {
    id: 76,
    title: <span>Library Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/digital-library-3d-icon-png-download-5728128.png",
    group: "College",
  },
  {
    id: 77,
    title: <span>Subject Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/language-3d-icon-png-download-8654457.png",
    group: "College",
  },
  {
    id: 78,
    title: <span>Course Management</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWhViThMEa_aRzFErbYekOS-x2j_0--B6FTA&s",
    group: "Admissions",
  },
  {
    id: 79,
    title: <span>Academic Year</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/academic-cap-3d-icon-png-download-3363965.png",
    group: "Admissions",
  },
  {
    id: 80,
    title: <span>Payment Status</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/academic-cap-3d-icon-png-download-3363965.png",
    group: "Admissions",
  },
  {
    id: 81,
    title: <span>Source Management</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlolxN2-iomUaeM5fUztF-dTq3n-mKZVF-pg&s",
    group: "Admissions",
  },
  {
    id: 82,
    title: <span>Batch Name</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFzKmV4WjbFDgGQOKG2w2akjT94b-dqxF7zg&s",
    group: "Classroom",
  },
  {
    id: 83,
    title: <span>Classroom Time Scheduling</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/man-is-doing-time-management-3d-icon-png-download-7408561.png",
    group: "Classroom",
  },
  {
    id: 84,
    title: <span>Academic Year</span>,
    image:
      "https://img.freepik.com/premium-photo/3d-icon-study-schedule-3d-illustration-3d-element-3d-rendering-graphic-elements-design-element_808921-804.jpg",
    group: "Classroom",
  },
  {
    id: 85,
    title: <span>Centralized Course</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/online-course-3d-icon-png-download-10553613.png",
    group: "Classroom",
  },
  {
    id: 86,
    title: <span>Classroom Subject</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/history-subject-3d-icon-png-download-8842446.png",
    group: "Classroom",
  },
  {
    id: 87,
    title: <span>Batch Management</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROVzb15kQnxqr_0dBaQBbWw5rcR9VYSy_8eQ&s",
    group: "Attendance",
  },
  {
    id: 88,
    title: <span>Academic Year</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY4jb3W4JvFMeIATvNF7E0oGVah7152Ctv1g&s",
    group: "Attendance",
  },
  {
    id: 89,
    title: <span>Attendance Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/fingerprint-lock-3d-icon-png-download-7358876.png",
    group: "Attendance",
  },
  {
    id: 90,
    title: <span> Classroom Medium</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/classroom-3d-icon-png-download-10350051.png",
    group: "Attendance",
  },
  {
    id: 91,
    title: <span>Course Management</span>,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/013/168/998/small_2x/online-course-3d-render-png.png",
    group: "Attendance",
  },
  {
    id: 92,
    title: <span>Time Scheduling</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/schedule-time-3d-icon-png-download-4995379.png",
    group: "Attendance",
  },
  {
    id: 93,
    title: <span>Attendance Summary </span>,
    image:
      "https://www.shutterstock.com/image-vector/time-management-3d-illustration-set-600nw-2262043667.jpg",
    group: "Attendance",
  },

];

const cardsData = [

  {
    title: "Reduces Paperwork",
    desc: "Eliminates manual record-keeping and reduces administrative burden",
    icon: <FaFileAlt />,
  },
  {
    title: "Improves Accuracy",
    desc: "Automated processes minimize errors and ensure data consistency",
    icon: <FaBullseye />,
  },
  {
    title: "Saves Staff Time",
    desc: "Automate repetitive tasks and focus on what matters most – education",
    icon: <FaClock />,
  },
  {
    title: "Scalable Features",
    desc: "Grow with your institution – from small Colleges to large networks",
    icon: <FaChartLine />,
  },
  {
    title: "Centralised Student Database",
    desc: "Maintain all student academic, personal, and administrative records in one secure platform.",
    icon: <FaDatabase />,
  },
  {
    title: "One Stop Solution",
    desc: "Manage admissions, attendance, fees, exams, and communication from a single system.",
    icon: <FaLayerGroup />,
  },
  {
    title: "Automated Communication",
    desc: "Send instant notifications, SMS, and updates to parents, students, and staff.",
    icon: <FaComments />,
  },
  {
    title: "Dynamic Reports & Dashboard",
    desc: "Generate real-time analytics, performance insights, and customizable reports.",
    icon: <FaChartBar />,
  },
  {
    title: "User-Wise Access Control (Role-Based Security)",
    desc: "Secure login system with role-based permissions for admin, teachers, staff, and parents.",
    icon: <FaUserShield />,
  },
  {
    title: "Digital & Next-Gen School",
    desc: "Upgrade your institution with modern, smart, and future-ready digital solutions.",
    icon: <FaLaptopCode />,
  },
  {
    title: "NEP 2020 Ready School",
    desc: "Fully aligned with National Education Policy standards and digital transformation goals.",
    icon: <FaBookOpen />,
  },
  {
    title: "Cloud-Based & Anytime Access",
    desc: "Access your College data securely from anywhere, anytime with cloud technology.",
    icon: <FaCloud />,
  },

];;

const dashboardData = [
  {
    title: "Daily College Dashboard",

    img: dashboard1,
  },
  {
    title: "Yearly/Monthly College Dashboard",

    img: dashboard2,
  },
  {
    title: "Source / Course-Wise College Dashboard",

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

const Subfeatures = [
  {
    title: "Attendance Tracking",
    detail:
      "Monitor student and faculty attendance in real-time with automated alerts and comprehensive reports.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF15VWSiTybKStQQLpquau1se9MUDkas7AlA&s",
  },
  {
    title: "Fee & Finance Management",
    detail:
      "Automate fee collection, track payments, manage payroll, and generate financial reports for the entire college.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0V2R1_4PbBL2WLzZaQ6IQHnOwYXlTEqd5A&s",
  },
  {
    title: "Course & Curriculum Management",
    detail:
      "Organize and schedule courses, classes, and faculty assignments for smooth academic operations.",
    image: "https://cdn-icons-png.flaticon.com/512/4695/4695003.png",
  },
  {
    title: "Exam & Result Management",
    detail:
      "Simplify exam scheduling, grading, and result publication with easy access to reports.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcm43Dp597TDTQ65VeN7ehcu09-pFJgb6ikQ&s",
  },
  {
    title: "Student & Faculty Portal",
    detail:
      "Provide dedicated portals for students and faculty to access grades, timetables, and announcements.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-V6mXgr-xuD5vB7jr3_bC0wP6e0W3Mampg&s",
  },
  {
    title: "Library Management",
    detail:
      "Manage book inventories, issue records, and returns efficiently.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvXYhSufG72EXuZvrOxYPhyPM9Hwzbzlzgrw&s",
  },
  {
    title: "Placement Management",
    detail:
      "Track placement activities, manage company visits, and student applications.",
    image:
      "https://cdn-icons-png.freepik.com/256/11213/11213488.png?semt=ais_hybrid",
  },
  {
    title: "Communication Tools",
    detail:
      "Send instant notifications, circulars, and updates to students, faculty, and parents.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplDMeuuwehEL7vIYGmrr3FrGqzzxNraxF1Q&s",
  },
  {
    title: "Advanced Reporting & Analytics",
    detail:
      "Generate detailed reports and analytics on performance, attendance, and financials.",
    image:
      "https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1509.jpg?ga=GA1.1.1863634387.1705751972&semt=ais_hybrid",
  },
  {
    title: "Data Security",
    detail:
      "Ensure privacy and security of all academic and financial data with role-based access and encryption.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHlFAfsITtmlpnAlCbpN7cxhwSGwErJANItQ&s",
  },
];

const whycardSection = [
    {
        title: "Clean Interface",
        desc: "Easy to learn and use for everyone",
        icon: <FaDesktop />,
    },
    {
        title: "Real-time Updates",
        desc: "Get updates instantly",
        icon: <FaSyncAlt />,
    },
    {
        title: "Secure & Cloud-enabled",
        desc: "Enterprise-grade security",
        icon: <FaShieldAlt />,
    },
    {
        title: "Ideal for Growing Schools",
        desc: "Scales with your institution",
        icon: <FaExpandArrowsAlt />,
    },
    {
        title: "Responsive Support",
        desc: "Dedicated assistance",
        icon: <FaHeadset />,
    },
    {
        title: "Fully Integrated",
        desc: "All modules work together",
        icon: <FaPuzzlePiece />,
    },

    // ✅ NEW DATA ADDED
    {
        title: "Centralised Student Database",
        desc: "All student records managed in one secure place",
        icon: <FaDatabase />,
    },
    {
        title: "One Stop Solution",
        desc: "Admissions, academics, fees, exams & reports in one system",
        icon: <FaLayerGroup />,
    },
    {
        title: "Automated Communication",
        desc: "SMS, email & notifications sent automatically",
        icon: <FaBell />,
    },
    {
        title: "Dynamic Reports & Dashboard",
        desc: "Real-time insights with smart dashboards",
        icon: <FaChartBar />,
    },
    {
        title: "Role-Based Access Control",
        desc: "User-wise permissions for secure access",
        icon: <FaUserLock />,
    },
    {
        title: "Digital & Next-Gen School",
        desc: "Paperless, modern & technology-driven education",
        icon: <FaSchool />,
    },
    {
        title: "NEP 2020 Ready School",
        desc: "Aligned with the latest education policy standards",
        icon: <FaBookOpen />,
    }
];

const faqData = [
    {
        question: "What is College Management CRM?",
        answer:
            "A College Management CRM helps Colleges manage student data, communication, admissions, academics, and administration digitally. PJSoftTech Colleges CRM provides a single platform to manage the entire College lifecycle efficiently and securely.",
    },
    {
        question: "How does PJSoftTech College CRM help Colleges?",
        answer:
            "PJSoftTech College CRM automates daily operations like attendance, fees, exams, results, notifications, and reports, reducing manual work and improving overall productivity.",
    },
    {
        question: "Is PJSoftTech Colleges CRM suitable for all types of Colleges?",
        answer:
            "Yes, PJSoftTech Colleges CRM is suitable for CBSE, ICSE, and State Board schools, English and Marathi medium College, and scales easily from small Colleges to large institutions.",
    },
    {
        question: "How does PJSoftTech College CRM improve parent communication?",
        answer:
            "Parents receive real-time updates on attendance, fees, homework, exams, and notices through the mobile app or SMS, ensuring transparency and stronger parent trust.",
    },
    {
        question: "Is the data safe in PJSoftTech College CRM?",
        answer:
            "Yes, PJSoftTech College CRM uses secure cloud hosting, role-based access control, and regular data backups to keep school data private and protected.",
    },
    {
        question: "Can teachers easily use PJSoftTech College CRM?",
        answer:
            "Yes, the system is user-friendly. Teachers can mark attendance, upload homework, enter marks, and view class reports with minimal training.",
    },
    {
        question: "Does PJSoftTech College CRM support NEP 2020?",
        answer:
            "Yes, PJSoftTech College CRM supports NEP 2020 by enabling digital records, continuous assessments, holistic student tracking, and technology-driven governance.",
    },
    {
        question: "Can fees and payments be managed through PJSoftTech College CRM?",
        answer:
            "Yes, the system includes online fee collection, automatic receipts, pending fee reminders, and detailed fee reports to improve cash flow and reduce fee leakage.",
    },
    {
        question: "Is PJSoftTech College CRM mobile-friendly?",
        answer:
            "Yes, PJSoftTech College CRM works smoothly on mobile phones, tablets, laptops, and desktop systems, allowing access anytime and anywhere.",
    },
    {
        question: "How quickly can a school start using PJSoftTech College CRM?",
        answer:
            "Colleges can go live within a few days with complete setup support, data migration, and basic training provided by the PJSoftTech team.",
    },
];


const CollegeManagementSoftware = () => {
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
                  College Management <span style={{ color: "#FFBF00" }}>System</span>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
                >
                  <b>Simplify, organize, and digitize</b> your entire academic and
                  administrative operations with our advanced College Management System.
                  Manage admissions, student records, attendance, examinations, fees,
                  faculty, and more—all in one centralized platform. Enhance
                  communication, improve efficiency, and empower your institution with
                  modern technology.
                  <br />
                  <br />
                </Typography>

                {/* Highlighted Chips */}
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                  <Chip label="Smart Administration" color="primary" />
                  <Chip label="All-in-One Platform" color="secondary" />
                  <Chip
                    label="Secure & Reliable"
                    sx={{ background: "#e1bee7", color: "#333" }}
                  />
                </Box>

                {/* BUTTONS */}
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>

                  {/* Download Brochure */}
                  <a
                    href="/brochure software.pdf"
                    download
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      sx={{
                        borderColor: "#5DADE2",
                        color: "#1B4F72",
                        backgroundColor: "#EBF5FB", // light blue shade
                        px: 3,
                        py: 1.2,
                        fontWeight: "bold",
                        borderRadius: "30px",
                        textTransform: "none",
                        "&:hover": {
                          background: "linear-gradient(45deg, #5DADE2, #85C1E9)",
                          color: "#fff",
                          boxShadow: "0 6px 18px rgba(93,173,226,0.45)",
                        },
                      }}
                    >
                      Download Brochure
                    </Button>
                  </a>
                  {/* Get Free Account */}
                  <Button
                    variant="outlined"
                    onClick={() =>
                      window.open("https://www.pjsofttech.com/contact-page", "_blank")
                    }
                    sx={{
                      borderColor: "#F7C948",
                      color: "#7D6608",
                      backgroundColor: "#FEF9E7", // light golden shade
                      px: 3,
                      py: 1.2,
                      fontWeight: "bold",
                      borderRadius: "30px",
                      textTransform: "none",
                      "&:hover": {
                        background: "linear-gradient(45deg, #F7C948, #F9E79F)",
                        color: "#fff",
                        boxShadow: "0 6px 18px rgba(247,201,72,0.45)",
                      },
                    }}
                  >
                    Get Free Account
                  </Button>

                </Box>

              </Grid>

              {/* Right Image */}
              <Grid item xs={12} md={6} data-aos="fade-left">
                <motion.img
                  src={image1.src} // replace with your college-related image
                  alt="College Management"
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

        {/* Why is College  Management Software */}
        <Box sx={{ py: 8, background: "#fff" }}>
          {/* SECTION WIDTH CONTROL */}
          <Box sx={{ maxWidth: "1400px", mx: "auto", px: 2 }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#00AEEF",
                fontWeight: "bold",
                mb: 2,
              }}
            >
              Why is College Management Software a Smart Investment?
            </Typography>

            <Typography
              sx={{
                textAlign: "center",
                maxWidth: 800,
                mx: "auto",
                mb: 6,
                color: "#666",
                lineHeight: 1.6,
              }}
            >
              College Management System is a comprehensive platform designed to streamline and enhance all administrative, academic, and financial operations within colleges. This software integrates functionalities such as student and staff management, admissions, attendance, timetable scheduling, examination and result processing, fee and payroll management, and seamless communication between faculty, students, and parents.
            </Typography>

            {/* CARDS */}
            <Grid container spacing={3}>
              {cardsData.map((item, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      p: 4,
                      textAlign: "center",
                      borderRadius: "16px",
                      background: "#fff",
                      border: "1.5px solid #cfeeff",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow:
                          "0 16px 36px rgba(0,174,239,0.18)",
                        borderColor: "#00AEEF",
                      },
                    }}
                  >
                    {/* ICON */}
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        mx: "auto",
                        mb: 3,
                        borderRadius: "50%",
                        background: "#00AEEF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 32,
                        color: "#fff",
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Typography
                      sx={{ fontWeight: "bold", mb: 1, fontSize: 18 }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 14,
                        color: "#666",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* LOGIN SECTION ONLY */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #e0f2fe, #f8fafc)",
            py: { xs: 6, md: 10 },
          }}
        >
          <Container maxWidth="md">
            {/* HEADING */}
            <Typography
              textAlign="center"
              sx={{
                fontSize: { xs: 26, md: 34 },
                fontWeight: 800,
                color: "#0f172a",
                mb: 6,
              }}
            >
              Login to Your Dashboard
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {/* ADMIN LOGIN */}
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 4,
                    background: "rgba(255,255,255,0.75)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                    transition: "0.4s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 30px 60px rgba(37,99,235,0.3)",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: 22, fontWeight: 800, mb: 2 }}>
                    🔐 Admin Login
                  </Typography>

                  <Typography sx={{ fontSize: 15, mb: 1 }}>
                    <strong>URL:</strong><br />
                    pjsofttech.in/superadminclient
                  </Typography>

                  <Typography sx={{ fontSize: 15, mb: 1 }}>
                    <strong>Email:</strong><br />
                    demoaccount@gmail.com
                  </Typography>

                  <Typography sx={{ fontSize: 15 }}>
                    <strong>Password:</strong><br />
                    Demo@123
                  </Typography>

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      py: 1.2,
                      borderRadius: "30px",
                      background: "linear-gradient(135deg,#2563EB,#1E40AF)",
                      textTransform: "none",
                      fontSize: 15,
                    }}
                    onClick={() =>
                      window.open("https://pjsofttech.in/superadminclient", "_blank")
                    }
                  >
                    Open Admin Panel
                  </Button>
                </Box>
              </Grid>

              {/* BRANCH LOGIN */}
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 4,
                    background: "rgba(255,255,255,0.75)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                    transition: "0.4s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 30px 60px rgba(245,158,11,0.35)",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: 22, fontWeight: 800, mb: 2 }}>
                    🏫 Branch Login
                  </Typography>

                  <Typography sx={{ fontSize: 15, mb: 1 }}>
                    <strong>Email:</strong><br />
                    branchsc@gmail.com
                  </Typography>

                  <Typography sx={{ fontSize: 15, mb: 1 }}>
                    <strong>Branch Code:</strong><br />
                    BCH137
                  </Typography>

                  <Typography sx={{ fontSize: 15 }}>
                    <strong>Password:</strong><br />
                    123
                  </Typography>

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      py: 1.2,
                      borderRadius: "30px",
                      background: "linear-gradient(135deg,#F59E0B,#D97706)",
                      textTransform: "none",
                      fontSize: 15,
                    }}
                    onClick={() =>
                      window.open("https://pjsofttech.in/superadminclient", "_blank")
                    }
                  >
                    Open Branch Panel
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Want To See Data - College Version */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #3498DB, #1F78C1)",
            px: { xs: 2, sm: 4, md: 8 },
            py: { xs: 6, sm: 8 },
            color: "#fff",
          }}
        >
          <Box
            sx={{
              maxWidth: "1200px",
              mx: "auto",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 5,
            }}
          >
            {/* Left Content */}
            <Box sx={{ maxWidth: "780px" }}>
              <Typography
                sx={{
                  fontSize: { xs: "24px", sm: "28px", md: "34px" },
                  fontWeight: 700,
                  lineHeight: 1.4,
                  mb: 2,
                }}
              >
                🎓 Is Your College Ready for Digital Transformation & Smart Campus Management?
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                  opacity: 0.95,
                  mb: 3,
                }}
              >
                Transform your institution into a fully integrated Digital Campus
                with automated admissions, department coordination, exam management,
                and real-time reporting. Move beyond paperwork and manage your
                college with efficiency, transparency, and control.
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  mb: 2,
                }}
              >
                🧩 Complete Solution: <b>PJSoftTech Next-Gen College Management Software</b>
              </Typography>

              <Typography sx={{ fontSize: "15px", opacity: 0.95 }}>
                🎓 Admissions | 🏫 Departments | 💰 Fees | 📊 Exams & Results | 👩‍🏫 Faculty Management
                — Secure, Scalable & Built for Modern Colleges.
              </Typography>
            </Box>

            {/* Right CTA Section */}
            <Box
              sx={{
                textAlign: { xs: "left", md: "center" },
                minWidth: { md: "320px" },
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                onClick={() =>
                  window.open("https://www.pjsofttech.com", "_blank")
                }
                sx={{
                  backgroundColor: "#fff",
                  color: "#3498DB",
                  fontWeight: "bold",
                  fontSize: "16px",
                  borderRadius: "8px",
                  px: 4,
                  py: 1.5,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
                  "&:hover": {
                    backgroundColor: "#ECF6FD",
                  },
                }}
              >
                Use Free College Software
              </Button>

              <Button
                variant="outlined"
                onClick={() =>
                  window.open("https://www.pjsofttech.com/contact-page", "_blank")
                }
                sx={{
                  borderColor: "#fff",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "16px",
                  borderRadius: "8px",
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderColor: "#fff",
                  },
                }}
              >
                Book a College Demo
              </Button>
            </Box>
          </Box>
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

        {/* Manage Your College */}
        <Box
          sx={{
            py: { xs: 5, md: 9 },
          }}
        >
          {/* CENTER CONTAINER */}
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              align="center"
              fontWeight="700"
              color="#3498DB"
              mb={6}
            >
              Everything You Need to Manage Your College in One Place
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {needdata.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: "18px",
                      background: "linear-gradient(120deg, #eaf7f8, #f8f8f8)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 14px 34px rgba(0,0,0,0.1)"
                      }
                    }}
                  >
                    <CardContent sx={{ textAlign: "center", p: 4 }}>
                      {/* IMAGE */}
                      <Box
                        component="img"
                        src={item.img.src || item.img}
                        alt={item.title}
                        sx={{
                          height: 90,
                          mb: 2,
                          objectFit: "contain"
                        }}
                      />

                      <Typography
                        variant="h6"
                        fontWeight="600"
                        gutterBottom
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </Card>
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
              alt="College Management Mobile"
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
              <span className={styles.highlight}>College Management System</span>
            </h1>
            <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

            <ul className={styles.benefitList}>
              <li>
                <b>Comprehensive Management:</b> Handles all aspects of college
                administration including admissions, academics, exams, and finance — all
                in one platform.
              </li>
              <li>
                <b>Streamlined Admissions:</b> Simplifies the admission process from
                application to enrollment with automated workflows.
              </li>
              <li>
                <b>Course & Curriculum Management:</b> Organizes courses, schedules, and
                faculty assignments for efficient academic planning.
              </li>
              <li>
                <b>Fee and Payment Management:</b> Automates fee collection, reminders,
                and receipt generation, reducing manual errors.
              </li>
              <li>
                <b>Real-Time Attendance Tracking:</b> Tracks student and staff
                attendance in real-time with instant reports.
              </li>
              <li>
                <b>Exam and Result Management:</b> Streamlines exam creation, grading,
                and result publication for transparent evaluation.
              </li>
              <li>
                <b>Student & Faculty Portal:</b> Provides secure access for students and
                faculty to view grades, schedules, and notifications.
              </li>
              <li>
                <b>Advanced Reporting & Analytics:</b> Offers insights into performance,
                attendance, and finances for better decision-making.
              </li>
              <li>
                <b>Secure Data Management:</b> Protects sensitive academic and financial
                data with role-based access and encryption.
              </li>
              <li>
                <b>Mobile Access:</b> Enables students, staff, and administrators to
                access data anytime, anywhere with mobile compatibility.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Dashboard Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: "linear-gradient(135deg, #EEF5FF 0%, #FFF7E6 100%)",
          }}
        >
          <Container>

            {/* Section Heading */}
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: 800,
                fontSize: { xs: "1.9rem", md: "2.6rem" },
                mb: 2,
                color: "#3498DB",
              }}
            >
              College Management Software Dashboards
            </Typography>

            <Typography
              sx={{
                textAlign: "center",
                maxWidth: 720,
                mx: "auto",
                mb: 6,
                color: "#475569",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.7,
              }}
            >
              Monitor academics, attendance, fees, exams, and staff performance through
              powerful real-time dashboards designed for smarter school management.
            </Typography>

            {/* Dashboard Card */}
            <Box
              sx={{
                background: "#fff",
                borderRadius: 4,
                boxShadow: "0 20px 40px rgba(15,23,42,0.08)",
                p: { xs: 2, md: 4 },
              }}
            >
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 3500 }}
                loop
              >
                {dashboardData.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <Box sx={{ textAlign: "center" }}>

                      {/* FULL IMAGE */}
                      <Box
                        component="img"
                        src={item.img.src || item.img}
                        alt={item.title}
                        sx={{
                          width: "100%",
                          height: { xs: 220, md: 420 },
                          objectFit: "contain",
                          borderRadius: 3,
                          background: "#F8FAFC",
                          mb: 3,
                        }}
                      />

                      {/* CONTENT BELOW IMAGE */}
                      <Typography
                        sx={{
                          fontSize: { xs: 18, md: 22 },
                          fontWeight: 700,
                          mb: 1,
                          color: "#2563EB",
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#475569",
                          fontSize: { xs: 14, md: 15 },
                          Width: 720,
                          mx: "auto",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.desc}
                      </Typography>

                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>

            {/* CTA Buttons */}
            <Box
              sx={{
                mt: 6,
                display: "flex",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(45deg, #2563EB, #3B82F6)",
                  color: "#fff",
                  px: 4,
                  py: 1.3,
                  borderRadius: "30px",
                  fontWeight: 600,
                  textTransform: "none",
                  boxShadow: "0 8px 20px rgba(37,99,235,0.35)",
                  "&:hover": {
                    background: "linear-gradient(45deg, #1E40AF, #2563EB)",
                  },
                }}
                onClick={() =>
                  window.open("https://pjsofttech.in/superadminclient", "_blank")
                }
              >
                Explore Live Dashboards
              </Button>

              <Button
                variant="outlined"
                sx={{
                  borderColor: "#F59E0B",
                  color: "#F59E0B",
                  px: 4,
                  py: 1.3,
                  borderRadius: "30px",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": {
                    background: "#F59E0B",
                    color: "#fff",
                    boxShadow: "0 8px 20px rgba(245,158,11,0.35)",
                  },
                }}
                onClick={() =>
                  window.location.href = "/contact-page"
                }
              >
                Get Free Demo Account
              </Button>
            </Box>

          </Container>
        </Box>

        {/* Why choose School Management Software */}
        <Box
          sx={{
            py: 8,
            background: "linear-gradient(135deg, #00c0ff 0%, #0099cc 100%)",
          }}
        >
          <Container maxWidth="xl">
            {/* Heading */}
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#fff",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Why Choose PJSofttech College Management Software
            </Typography>

            <Typography
              sx={{
                textAlign: "center",
                color: "rgba(255,255,255,0.9)",
                maxWidth: 850,
                mx: "auto",
                mb: 6,
                fontSize: 16,
              }}
            >
              PJSOFTTECH is an excellent, flexible, and easy-to-use school
              management software designed to cater to the daily operations
              of a school.
            </Typography>

            {/* CARD CONTAINER */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",   // 👈 Important
                justifyContent: "center",
                gap: 3,
              }}
            >
              {whycardSection.map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    width: {
                      xs: "100%",   // Mobile
                      sm: "48%",    // Tablet
                      md: "30%",    // Medium
                      lg: "23%",    // Large
                    },
                    p: 3.5,
                    textAlign: "center",
                    borderRadius: "14px",
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    backdropFilter: "blur(6px)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      background: "rgba(255,255,255,0.18)",
                    },
                  }}
                >
                  <Box sx={{ fontSize: 42, color: "#6CFF00", mb: 2 }}>
                    {item.icon}
                  </Box>

                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      mb: 1,
                      fontSize: 16,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.85)",
                      fontSize: 14,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
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
              of College Management System
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

        <Box sx={{ py: 4, background: "#f9fbfd" }}>
          <Container maxWidth="lg">
            <Typography
              sx={{
                textAlign: "center",
                fontSize: 32,
                fontWeight: 700,
                mb: 5,
                color: "#00AEEF",
              }}
            >
              Frequently Asked Questions
            </Typography>

            {faqData.map((item, i) => (
              <Accordion
                key={i}
                sx={{
                  mb: 2,
                  borderRadius: "10px !important",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>
                    {item.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Container>
        </Box>

      </ThemeProvider>
    </>
  );
};

export default CollegeManagementSoftware;
