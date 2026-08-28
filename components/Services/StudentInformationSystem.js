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
import Slider from "react-slick";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import styles from "./StudentInformationSystem.module.css";
import image1 from "../images/student-management.png";
import phone from "../images/student-info-detail.png";
import dashboard1 from "../images/SCHOOL DASHBOARD .png";
import dashboard2 from "../images/SCHOOL-DASHBOARD 2.png";
import dashboard3 from "../images/SCHOOL-DASHBOARD 3.png";
import dashboard4 from "../images/SCHOOL-DASHBOARD 4.png";


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
  "Leads",
  "Admissions",
  "Classrooms",
  "Managements",
  "Communications",
  "Finances",
  "Student",
  "Teacher",
  "Parent",
  "Support",
  "Apps",
];

const blogs = [
  {
    id: 1,
    title: <span>School Manager</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvuMHQrO7Cr9oHuth7Bd8D3GZNSEe-CsUbxQDvYTKmP1DXJLSeCydMhyWozVr_g44rQdU&usqp=CAU",
    group: "Managements",
  },
  {
    id: 2,
    title: <span>Student Manager</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/student-dashboard-3d-icon-download-in-png-blend-fbx-gltf-file-formats--progress-tracking-performance-report-grades-learning-management-system-pack-school-education-icons-10553610.png?f=webp",
    group: "Managements",
  },

  {
    id: 3,
    title: <span>Admission Manager</span>,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/060/441/125/small_2x/graduation-book-3d-illustration-png.png",
    group: "Managements",
  },

  {
    id: 4,
    title: <span>Scholarship System </span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6df4m7fBUkJuAgOR3epuyRwkKQ2X_YGy-Xw&s",
    group: "Admissions",
  },
  {
    id: 5,
    title: <span> Exam & Result Manager</span>,
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
    group: "Finances",
  },
  {
    id: 8,
    title: <span> Attendance and Tracking </span>,
    image:
      "https://thumbs.dreamstime.com/b/time-attendance-tracking-system-abstract-concept-vector-illustration-clock-interactive-management-app-employee-monitoring-194531981.jpg",
    group: "Communications",
  },
  {
    id: 9,
    title: <span> 24*7 Support</span>,
    image: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
    group: "Support",
  },
  {
    id: 10,
    title: <span> Reports and Dashboard </span>,
    image:
      "https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1509.jpg?ga=GA1.1.1863634387.1705751972&semt=ais_hybrid",
    group: "Managements",
  },
  {
    id: 11,
    title: <span>Next Generation Software</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPx41SKX0MC1IgAFsp1Fdwx8ciq0O2zTFDQ&s",
    group: "Managements",
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
    group: "Admissions",
  },
  {
    id: 16,
    title: <span>Teacher Manager</span>,
    image: "https://cdn-icons-png.flaticon.com/512/10881/10881854.png",
    group: "Managements",
  },
  {
    id: 17,
    title: <span>Fee Reminder</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnJqnk5yfcc_WRfjKIRBIrs00fCJdnqphLA&s",
    group: "Admissions",
  },
  {
    id: 18,
    title: <span>Application Manager</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/secure-password-manager-app-3d-icon-download-in-png-blend-fbx-gltf-file-formats--security-seo-and-web-pack-icons-8458922.png?f=webp",
    group: "Managements",
  },
  {
    id: 19,
    title: <span>Document Verification</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxwoyW3jFGQGj9AMdH4ZH50jIjWQmW5YescQ&s",
    group: "Admissions",
  },
  {
    id: 20,
    title: <span>Report Card Creator</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/report-card-3d-icon-download-in-png-blend-fbx-gltf-file-formats--grade-sheet-result-a-plus-education-icons-pack-university-8447586.png?f=webp",
    group: "Classrooms",
  },
  {
    id: 21,
    title: <span> Parent Communication</span>,
    image:
      "https://img.freepik.com/premium-photo/3d-cartoon-parents-engaging-parentteacher-meeting-highquality-image-illustrating-parental-i_980716-212298.jpg",
    group: "Leads",
  },

  {
    id: 22,
    title: <span> E-Book Content</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/ebook-3d-icon-download-in-png-blend-fbx-gltf-file-formats--content-book-e-knowledge-study-pack-network-communication-icons-10634876.png",
    group: "Classrooms",
  },
  {
    id: 23,
    title: <span> ID Card Creator</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGDvsaBAwJ8HMsl4s8KmuzKJ0ZCQk_fxSB2tLYJiCwcBq0mqTsjcI-z5uLFOTSyollRk&usqp=CAU",
    group: "Admissions",
  },

  {
    id: 24,
    title: <span> Reporting & Analytics</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7OXyoZTRimJ3x6RXhFOQlltAS7KEBJkDaw&s",
    group: "Support",
  },

  {
    id: 25,
    title: <span> Event Manager</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/business-schedule-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--planning-events-calendar-businessman-creative-worker-vol-4-pack-illustrations-4659636.png?f=webp",
    group: "Managements",
  },
  {
    id: 26,
    title: <span> Birthday Manager</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR649d1Sr2Hx4xZuEGICzXwDYxb1ydTiQU2A&s",
    group: "Managements",
  },
  {
    id: 27,
    title: <span> Timetable & Scheduling</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsNxqyo1qKbBUOKA25Ppjt32sgTXaxHt5VuA&s",
    group: "Classrooms",
  },
  {
    id: 28,
    title: <span> Student App</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/educational-app-3d-icon-download-in-png-blend-fbx-gltf-file-formats--online-education-learning-study-mobile-university-e-pack-icons-8248946.png?f=webp",
    group: "Apps",
  },
  {
    id: 29,
    title: <span> Student Profile Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/student-dashboard-3d-icon-download-in-png-blend-fbx-gltf-file-formats--progress-tracking-performance-report-grades-learning-management-system-pack-school-education-icons-10553610.png?f=webp",
    group: "Managements",
  },
  {
    id: 30,
    title: <span> Class Timetable Scheduling</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6xn12hWPbzYvd4JqadITmo3XMKKZXQ8QuuA&s",
    group: "Managements",
  },
  {
    id: 31,
    title: <span>Homework and Assignment Management</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRspkN7SNV4MmKcT3Bxp0IBjRtpdiQ5s8pdVQ&s",
    group: "Managements",
  },
  {
    id: 32,
    title: <span> Exam Scheduling and Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/task-schedule-3d-icon-download-in-png-blend-fbx-gltf-file-formats--work-management-business-planning-document-and-set01-pack-files-folders-icons-8140730.png?f=webp",
    group: "Managements",
  },
  {
    id: 33,
    title: <span>Grade and Report Card Generation</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMrqV_3fUv5Y_joztIq3ckNrZFPl0ElPlSw&s",
    group: "Support",
  },
  {
    id: 34,
    title: <span> Parental Access Portal</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/family-insurance-3d-icon-download-in-png-blend-fbx-gltf-file-formats--protection-health-life-healthcare-pack-crime-security-icons-8062778.png",
    group: "Support",
  },
  {
    id: 35,
    title: <span> Teacher-Student Communication</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/teacher-teaching-student-in-class-3d-illustration-download-png-blend-fbx-gltf-file-formats--school-learning-miscellaneous-pack-illustrations-5507029.png",
    group: "Communications",
  },
  {
    id: 36,
    title: <span> Event and Calendar Management</span>,
    image:
      "https://media.istockphoto.com/id/1359134622/vector/calendar-assignment-and-clock-icon-schedule.jpg?s=612x612&w=0&k=20&c=A27qJTLmBQ-xMds81ABYjdu6gRvHnyen4BNAwcPs3OY=",
    group: "Managements",
  },
  {
    id: 37,
    title: <span> Resource Sharing</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJJhuMWFcQUIosM-6aJSMwLtudti51xxdqQ&s",
    group: "Communications",
  },
  {
    id: 38,
    title: <span>Feedback and Surveys</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/survey-3d-icon-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-feedback-checklist-review-polling-and-pack-network-communication-icons-7520736.png?f=webp",
    group: "Support",
  },
  {
    id: 39,
    title: <span> Mobile Accessibility</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-access-3d-icon-download-in-png-blend-fbx-gltf-file-formats--key-security-smartphone-data-cyber-crime-pack-icons-10259523.png?f=webp",
    group: "Support",
  },
  {
    id: 40,
    title: <span>Create Classroom</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/virtual-classroom-3d-icon-png-download-12809800.png",
    group: "Classrooms",
  },
  {
    id: 41,
    title: <span>Send Notifications</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/notifications-3d-icon-png-download-7475536.png",
    group: "Communications",
  },
  {
    id: 42,
    title: <span>Create Subject</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/geography-subject-3d-icon-png-download-4404334.png",
    group: "Classrooms",
  },
  {
    id: 43,
    title: <span>Create Teacher Profiles</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    group: "Managements",
  },
  {
    id: 44,
    title: <span>Attendance Tracking</span>,
    image: "https://cdn-icons-png.flaticon.com/512/1014/1014891.png",
    group: "Managements",
  },
  {
    id: 45,
    title: <span>Parent Messaging for Attendance</span>,
    image: "https://www.shutterstock.com/image-illustration/job-attendance-3d-icon-illustration-600nw-2631618613.jpg",
    group: "Communications",
  },
  {
    id: 46,
    title: <span>Manual Attendance by Admin</span>,
    image: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
    group: "Managements",
  },
  {
    id: 47,
    title: <span>Manual Attendance by Teacher</span>,
    image: "https://cdn-icons-png.flaticon.com/512/1995/1995525.png",
    group: "Managements",
  },
  {
    id: 48,
    title: <span>Student Leave Approval</span>,
    image: "https://cdn-icons-png.flaticon.com/512/564/564619.png",
    group: "Managements",
  },
  {
    id: 49,
    title: <span>Student Profile Management</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
    group: "Managements",
  },
  {
    id: 50,
    title: <span>Class Timetable Scheduling</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/schedule-3d-icon-png-download-10958669.png",
    group: "Classrooms",
  },
  {
    id: 51,
    title: <span>Homework & Assignment Management</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/assignment-3d-icon-png-download-10553633.png",
    group: "Classrooms",
  },
  {
    id: 52,
    title: <span>Exam Scheduling and Management</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/task-schedule-3d-icon-download-in-png-blend-fbx-gltf-file-formats--work-management-business-planning-document-and-set01-pack-files-folders-icons-8140730.png?f=webp",
    group: "Classrooms",
  },
  {
    id: 53,
    title: <span>Fees Management System</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0V2R1_4PbBL2WLzZaQ6IQHnOwYXlTEqd5A&s",
    group: "Finances",
  },
  {
    id: 54,
    title: <span>Result</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/result-3d-icon-download-in-png-blend-fbx-gltf-file-formats--test-report-search-survey-vote-pack-politics-icons-8356541.png",
    group: "Classrooms",
  },
  {
    id: 55,
    title: <span>Assessment</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxh0_ePjuNNHwsgLWmh3SxvchtoQJdrrqKA&s",
    group: "Classrooms",
  },
  {
    id: 56,
    title: <span>EBook</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/ebook-3d-icon-download-in-png-blend-fbx-gltf-file-formats--study-write-online-e-learning-tool-computer-functions-pack-windows-interface-icons-8523464.png",
    group: "Classrooms",
  },
  {
    id: 57,
    title: <span>WhatsApp Message</span>,
    image:
      "https://thumbs.dreamstime.com/b/whatsapp-d-icon-whatsapp-d-icon-instant-messaging-voice-calls-high-quality-visual-representation-359290495.jpg",
    group: "Communications",
  },
  {
    id: 58,
    title: <span>Payment Reminder</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_mB-zxnFyI2U24IHsHVq7Ugt-WsFf9kqQ2Q&s",
    group: "Finances",
  },
  {
    id: 59,
    title: <span>Staff Management</span>,
    image:
      "https://thumbs.dreamstime.com/b/staff-management-d-icon-high-quality-design-ui-ux-apps-websites-digital-projects-png-vector-format-358577236.jpg",
    group: "Managements",
  },
  {
    id: 60,
    title: <span>Income/Expense Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/balance-sheet-3d-icon-download-in-png-blend-fbx-gltf-file-formats--financial-management-portfolio-saving-money-analysis-business-finance-investment-and-pack-icons-11640964.png?f=webp",
    group: "Managements",
  },
  {
    id: 61,
    title: <span>Salary Management System</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUG7aPsFL9K1kKBYhElt943fFJFPDRTuHF2Q&s",
    group: "Managements",
  },
  {
    id: 62,
    title: <span>Payroll Management</span>,
    image:
      "https://png.pngtree.com/png-vector/20250214/ourlarge/pngtree-salary-3d-icon-financial-earnings-symbol-for-monthly-income-and-payroll-png-image_15473276.png",
    group: "Managements",
  },
  {
    id: 63,
    title: <span>Test Series</span>,
    image:
      "https://img.freepik.com/free-photo/hand-holding-writing-checklist-application-form-document-clipboard-white-background-3d-illustration_56104-1551.jpg",
    group: "Classrooms",
  },
  {
    id: 64,
    title: <span>Live Class</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgcQjv6rxRDgBZ2V4jHBwxgzoD4J35qshN4Q&s",
    group: "Communications",
  },
  {
    id: 65,
    title: <span>Dynamic Website</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgR1lsnCeU4jgW4nW1RYZsy3yxMtP5m13VAw&s",
    group: "Communications",
  },
  {
    id: 66,
    title: <span>Lead Follow up</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZe1zw9B6AUTtdsFSYu45K8EBBnvUwzO6ew&s",
    group: "Leads",
  },
  {
    id: 67,
    title: <span>Attendance App</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/attendance-3d-icon-download-in-png-blend-fbx-gltf-file-formats--check-time-control-jobs-and-career-pack-business-icons-9276167.png",
    group: "Apps",
  },
  {
    id: 68,
    title: <span>Teacher App</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-development-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--app-design-application-technology-pack-user-interface-illustrations-4708214.png",
    group: "Apps",
  },
  {
    id: 69,
    title: <span>Parent App</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCodgTpG2Uk7AnOo6ujEgNBCgv2MwE0YkjiQ&s",
    group: "Apps",
  },
  {
    id: 70,
    title: <span>Teacher Management System</span>,
    image:
      "https://png.pngtree.com/png-clipart/20250207/original/pngtree-employee-time-tracking-software-featuring-3d-icon-isolated-on-a-transparent-png-image_20375423.png",
    group: "Managements",
  },
  {
    id: 71,
    title: <span>Students Management System</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/student-dashboard-3d-icon-download-in-png-blend-fbx-gltf-file-formats--progress-tracking-performance-report-grades-learning-management-system-pack-school-education-icons-10553610.png?f=webp",
    group: "Student",
  },
  {
    id: 72,
    title: <span>Parent Management System</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/mother-and-father-3d-icon-download-in-png-blend-fbx-gltf-file-formats--parent-parenthood-young-girl-family-pack-people-icons-9056963.png",
    group: "Parent",
  },
  {
    id: 73,
    title: <span> Student App</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/educational-app-3d-icon-download-in-png-blend-fbx-gltf-file-formats--online-education-learning-study-mobile-university-e-pack-icons-8248946.png?f=webp",
    group: "Student",
  },
  {
    id: 74,
    title: <span>Parent App</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCodgTpG2Uk7AnOo6ujEgNBCgv2MwE0YkjiQ&s",
    group: "Parent",
  },
  {
    id: 75,
    title: <span>Teacher Manager</span>,
    image: "https://cdn-icons-png.flaticon.com/512/10881/10881854.png",
    group: "Teacher",
  },
  {
    id: 76,
    title: <span>Teacher App</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-development-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--app-design-application-technology-pack-user-interface-illustrations-4708214.png",
    group: "Teacher",
  },
  {
    id: 77,
    title: <span>Add Academic Year</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVYEY0PlAUASWdgru0WfDeawGurvXIVp3Zw&s",
    group: "Teacher",
  },
  {
    id: 78,
    title: <span>Add Classroom</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwd1_0snPTLOfdZG76u6_DeZOCwAofJFSyvw&s",
    group: "Classrooms",
  },
  {
    id: 79,
    title: <span>Student List</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SJ-qz0K2X732-xPOikoN98PX6IQbX0SxUw&s",
    group: "Student",
  },
  {
    id: 80,
    title: <span>Student Report</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33J_UWSQlxHccgIqsOTQveJVCgkbpniiqzw&s",
    group: "Student",
  },
  {
    id: 81,
    title: <span>Document Management</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77DcSFVN8glBhQWqrKGWleUybapLZgH3aNw&s",
    group: "Managements",
  },
  {
    id: 82,
    title: <span>Student Requests</span>,
    image:
      "https://img.freepik.com/free-vector/3d-cartoon-style-clipboard-with-document-icon-realistic-paper-holder-with-contract-agreement-flat-vector-illustration-management-information-assignment-concept_778687-986.jpg?semt=ais_hybrid&w=740",
    group: "Managements",
  },
  {
    id: 83,
    title: <span>Classroom List</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/class-leaderboard-3d-icon-download-in-png-blend-fbx-gltf-file-formats--ranking-system-student-achievements-academic-scores-online-pack-school-education-icons-12124834.png?f=webp",
    group: "Classrooms",
  },
  {
    id: 84,
    title: <span>Student Attendance</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/class-attendance-14857025-12031395.png?f=webp",
    group: "Student",
  },
  {
    id: 85,
    title: <span>Student Settings</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/user-settings-3d-icon-download-in-png-blend-fbx-gltf-file-formats--profile-setting-account-configuration-management-efficiency-pack-miscellaneous-icons-9770117.png",
    group: "Student",
  },
  {
    id: 86,
    title: <span>Student Fees</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/student-loan-payment-15176793-12387215.png?f=webp",
    group: "Finances",
  },
  {
    id: 87,
    title: <span>Fees Reports & Export</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/business-report-3d-icon-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-financial-finance-money-pack-icons-8266404.png",
    group: "Finances",
  },
  {
    id: 88,
    title: <span>Student Portal</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/report-3d-icon-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-chart-graph-customer-service-pack-business-icons-9210981.png?f=webp",
    group: "Student",
  },
  {
    id: 89,
    title: <span>Communication Tools</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplDMeuuwehEL7vIYGmrr3FrGqzzxNraxF1Q&s",
    group: "Communications",
  },
  {
    id: 90,
    title: <span>Support Chat</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiA8RtgYcOZFFT5RAem6kATSoq_151dVOHeA&s",
    group: "Support",
  },
  {
    id: 91,
    title: <span>Enquiry</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/questions-10671831-8550616.png",
    group: "Admissions",
  },
  {
    id: 92,
    title: <span>Admission</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4HQ4vFC78c4K7gDGFGdoYJ0QEE2PivCRLLISlbBKMqrzshD0W9K1R-bthuBNcCzCBCb8&usqp=CAU",
    group: "Admissions",
  },
  {
    id: 93,
    title: <span>GPS Integration</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/gps-tracking-6816602-5602662.png",
    group: "Admissions",
  },
  {
    id: 94,
    title: <span>Visitor Management</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTykCUBUB-zmapAFhI0BS0TuWCYHl7YwTGYWw&s",
    group: "Admissions",
  },
  {
    id: 95,
    title: <span>Certificate</span>,
    image:
      "https://img.freepik.com/premium-psd/isolated-certificate-3d-icon_77235-133.jpg",
    group: "Admissions",
  },
  {
    id: 96,
    title: <span>Account</span>,
    image:
      "https://cdn-icons-png.flaticon.com/512/2721/2721031.png",
    group: "Finances",
  },
  {
    id: 97,
    title: <span>Payroll</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGUkwAcL29VW17kavMLCcdTgB1ACgEM7HH-Q&s",
    group: "Finances",
  },
  {
    id: 98,
    title: <span>Purchase</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGd6Ov4G-GLD-uuCCZMUmRNXr3RTM585-qw&s",
    group: "Finances",
  },
  {
    id: 99,
    title: <span>Scholarship Management</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/education-scholarship-10306032-8334425.png",
    group: "Finances",
  },
];

const studentSubfeatures = [
  {
    title: "Attendance Tracking",
    detail: "Monitor student attendance in real-time with automated alerts.",
    image: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
  },
  {
    title: "Fee Management",
    detail: "Track, collect, and manage student fees and receipts digitally.",
    image: "https://cdn-icons-png.flaticon.com/512/1170/1170678.png",
  },
  {
    title: "Result Generation",
    detail:
      "Publish results and report cards instantly to parents and students.",
    image: "https://cdn-icons-png.flaticon.com/512/3011/3011270.png",
  },
  {
    title: "Admissions",
    detail: "Simplify application processing, verification, and enrollment.",
    image: "https://cdn-icons-png.flaticon.com/512/2659/2659360.png",
  },
  {
    title: "Parent Communication",
    detail: "Send timely SMS and email updates regarding student progress.",
    image: "https://cdn-icons-png.flaticon.com/512/3846/3846823.png",
  },
  {
    title: "Time Table & Scheduling",
    detail: "Create and manage academic calendars and class schedules.",
    image: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
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

const StudentInformationSystem = () => {

  const [selectedGroup, setSelectedGroup] = useState("Leads");

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
                  Student <span style={{ color: "#FFBF00" }}>Management System</span>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
                >
                  <b>Streamline student data, enhance collaboration, and simplify administration</b>
                  with our comprehensive Student Management System. From student enrollment,
                  attendance, and academics to exam records, performance analysis, and
                  communication—everything is managed in one centralized platform.
                  Ensure efficiency, transparency, and a smooth academic experience
                  for institutions, teachers, and students.
                  <br /><br />
                </Typography>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                  <Chip label="Student Records" color="primary" />
                  <Chip label="Attendance Tracking" color="secondary" />
                  <Chip
                    label="Performance Analysis"
                    sx={{ background: "#e1bee7", color: "#333" }}
                  />
                </Box>
              </Grid>

              {/* Right Image Section */}
              <Grid item xs={12} md={6} data-aos="fade-left">
                <motion.img
                  src={image1.src} // replace with student-related image
                  alt="Student Management System"
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
                <span className={styles.span}>A</span> Comprehensive Solution
                for Student Data & Academic Management
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
                Student Information System is a comprehensive solution designed
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
              alt="Student Information Mobile"
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
              <span className={styles.highlight}>Student Management System</span>
            </h1>
            <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

            <ul className={styles.benefitList}>
              <li>
                <b>Centralized Administration:</b> Manage all student operations —
                admissions, fees, academics, and records — from a single digital
                platform.
              </li>
              <li>
                <b>Automated Fee Management:</b> Simplifies fee collection, reminders,
                and receipt generation while reducing manual errors.
              </li>
              <li>
                <b>Efficient Attendance Tracking:</b> Enables real-time monitoring of
                student and staff attendance with instant reports.
              </li>
              <li>
                <b>Streamlined Communication:</b> Enhances communication between
                teachers, students, and parents via SMS, email, and app notifications.
              </li>
              <li>
                <b>Library Management:</b> Keep track of book inventories, issue
                records, and returns for efficient library operations.
              </li>
              <li>
                <b>Timetable & Scheduling:</b> Easily create, manage, and share class
                and staff timetables across departments.
              </li>
              <li>
                <b>Mobile Accessibility:</b> Access and manage information from
                anywhere, anytime with mobile-friendly design.
              </li>
              <li>
                <b>Data Security:</b> Ensure data integrity and privacy with
                role-based access control and secure cloud backup.
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
              <span style={{ color: "#FFBF00" }}>Student</span> Management System Dashboards
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

        {/* Student Management & SIS Section */}
        <Box sx={{ padding: "40px 20px" }}>
          <Container>
            {/* First Section: Student Management */}
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
                    <span>Student Management</span>
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      lineHeight: "1.8",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    A Student Management System (SMS) serves as a centralized
                    platform for educational institutions to efficiently manage
                    student-related information and processes. It encompasses
                    various functionalities including admissions, enrollment,
                    academic management, attendance tracking, grading, financial
                    management, and student support services.
                    <br />
                    <br />
                    Additionally, SMS often integrates with other institutional
                    systems and offers customization options to adapt to the
                    specific needs of each institution. Overall, it plays a
                    vital role in streamlining student administration processes
                    and enhancing the overall educational experience.
                  </Typography>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.img
                  src="https://i.pinimg.com/originals/50/78/a0/5078a05eb1b6847d93383eaa4c0ed500.gif"
                  alt="Student Management"
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

            {/* Second Section: Student Information Management */}
            <Grid
              container
              spacing={4}
              alignItems="center"
              sx={{ marginBottom: "40px" }}
            >
              <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                <motion.img
                  src="https://www.careerguide.com/career/wp-content/uploads/2020/04/1576518436-1576518436_goodreads_misc.gif"
                  alt="Student Information System"
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
                    <span style={{ color: "#2874A6" }}>
                      Student Information Management
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
                    A Student Information System (SIS) is a robust platform
                    designed to manage and maintain comprehensive student data
                    throughout their academic journey. It enables institutions
                    to securely store and access student profiles, academic
                    histories, attendance records, grades, disciplinary actions,
                    and more. SIS streamlines administrative tasks such as
                    enrollment, registration, and transcript generation, while
                    also supporting communication between students, parents, and
                    staff. By centralizing all student-related data, SIS
                    enhances data accuracy, improves reporting capabilities, and
                    empowers educators to make informed decisions that support
                    student success.
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
              of Student Management System
            </Typography>

            <Grid container spacing={4}>
              {studentSubfeatures.map((item, idx) => (
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

export default StudentInformationSystem;
