// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "swiper/css";
// import "swiper/css/navigation";
// import "aos/dist/aos.css";
// import {
//     Card,
//     CardContent,
//     CardMedia,
//     Container,
//     Grid,
//     Typography,
//     Button,
//     Box,
//     Divider,
//     Chip
// } from "@mui/material";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import phone from "../images/student-info-detail.png";
// import heroImg from "../images/school gif.gif";
// import dashboard1 from "../images/SCHOOL-DASHBOARD 1.png";
// import dashboard2 from "../images/SCHOOL-DASHBOARD 2.png";
// import dashboard3 from "../images/SCHOOL-DASHBOARD 3.png";
// import dashboard4 from "../images/SCHOOL-DASHBOARD 4.png";
// import styles from "./SchoolNewManagementSystem.module.css"


// const theme = createTheme({
//     palette: {
//         primary: { main: "rgba(52, 152, 219, 1)" },
//         secondary: { main: "#FFBF00" },
//     },
//     typography: {
//         fontFamily: "'Inter', sans-serif",
//         button: { textTransform: "none" },
//     },
// });

// const groups = [
//     "Dashboard",
//     "School",
//     "Admissions",
//     "Classrooms",
//     "Attendance",
//     "Student",
//     "Fees",
//     "Managements",
//     "Communications",
//     "Settings",
//     "Records",
//     "Reports & Analytics",
//     "Apps",
// ];

// const blogs = [
//     {
//         id: 1,
//         title: <span>School Management </span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvuMHQrO7Cr9oHuth7Bd8D3GZNSEe-CsUbxQDvYTKmP1DXJLSeCydMhyWozVr_g44rQdU&usqp=CAU",
//         group: "Managements",
//     },
//     {
//         id: 2,
//         title: <span>Student Managements</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/student-dashboard-3d-icon-download-in-png-blend-fbx-gltf-file-formats--progress-tracking-performance-report-grades-learning-management-system-pack-school-education-icons-10553610.png?f=webp",
//         group: "Managements",
//     },

//     {
//         id: 3,
//         title: <span>Admission Managements</span>,
//         image:
//             "https://static.vecteezy.com/system/resources/thumbnails/060/441/125/small_2x/graduation-book-3d-illustration-png.png",
//         group: "Managements",
//     },

//     {
//         id: 4,
//         title: <span>Scholarship Managements </span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6df4m7fBUkJuAgOR3epuyRwkKQ2X_YGy-Xw&s",
//         group: "Admissions",
//     },
//     {
//         id: 5,
//         title: <span>Exam & Result Managements</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1OSBhvNytaEMAJYTqi--gmkKHazLqF1CjpA&s",
//         group: "Managements",
//     },
//     {
//         id: 6,
//         title: <span>Course Management</span>,
//         image:
//             "https://img.freepik.com/free-vector/learning-management-system-abstract-concept-illustration-educational-technology-online-learning-delivery-software-application-training-course-tutoring-program-access_335657-3474.jpg",
//         group: "Managements",
//     },
//     {
//         id: 7,
//         title: <span>Fee Payment</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9b7z1bDhdhvjXVyEq9mAcz6wvC_iL4xV_sg&s",
//         group: "Leads",
//     },
//     {
//         id: 8,
//         title: <span>Attendance and Tracking </span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGkRKadDaHs2bX3-Sn4zJvYJhVWv8-QogqYA&s",
//         group: "Admissions",
//     },
//     {
//         id: 9,
//         title: <span> 24*7 Support</span>,
//         image: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
//         group: "Supports",
//     },
//     {
//         id: 10,
//         title: <span>Reports and Dashboard </span>,
//         image:
//             "https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1509.jpg?ga=GA1.1.1863634387.1705751972&semt=ais_hybrid",
//         group: "Dashboard",
//     },
//     {
//         id: 11,
//         title: <span>Next Generation Software</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPx41SKX0MC1IgAFsp1Fdwx8ciq0O2zTFDQ&s",
//         group: "Reports",
//     },
//     {
//         id: 12,
//         title: <span>Student Records</span>,
//         image: "https://cdn-icons-png.flaticon.com/512/3068/3068500.png",
//         group: "Classroom",
//     },
//     {
//         id: 13,
//         title: <span>Class Management</span>,
//         image:
//             "https://thumbs.dreamstime.com/b/classroom-management-icon-representing-organizational-tools-classroom-management-icon-351933808.jpg",
//         group: "Managements",
//     },
//     {
//         id: 14,
//         title: <span>ID Card Generation</span>,
//         image: "https://cdn-icons-png.flaticon.com/512/3861/3861172.png",
//         group: "Classroom",
//     },

//     {
//         id: 15,
//         title: <span>Online Registration</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurWCxVgOvi_pgm0fKUm4ObWAdFMt9Cj1bjw&s",
//         group: "Communications",
//     },

//     {
//         id: 16,
//         title: <span>Fee Management</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnJqnk5yfcc_WRfjKIRBIrs00fCJdnqphLA&s",
//         group: "Managements",
//     },
//     {
//         id: 17,
//         title: <span>Application Managements</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/secure-password-manager-app-3d-icon-download-in-png-blend-fbx-gltf-file-formats--security-seo-and-web-pack-icons-8458922.png?f=webp",
//         group: "Managements",
//     },
//     {
//         id: 18,
//         title: <span>Document Verification</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxwoyW3jFGQGj9AMdH4ZH50jIjWQmW5YescQ&s",
//         group: "Records",
//     },
//     {
//         id: 19,
//         title: <span>Report Card Creator</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/report-card-3d-icon-download-in-png-blend-fbx-gltf-file-formats--grade-sheet-result-a-plus-education-icons-pack-university-8447586.png?f=webp",
//         group: "Classrooms",
//     },
//     {
//         id: 20,
//         title: <span> Parent Management</span>,
//         image:
//             "https://img.freepik.com/premium-photo/3d-cartoon-parents-engaging-parentteacher-meeting-highquality-image-illustrating-parental-i_980716-212298.jpg",
//         group: "Managements",
//     },

//     {
//         id: 21,
//         title: <span> E-Book Content</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/ebook-3d-icon-download-in-png-blend-fbx-gltf-file-formats--content-book-e-knowledge-study-pack-network-communication-icons-10634876.png",
//         group: "Communications",
//     },
//     {
//         id: 22,
//         title: <span> ID Card Creator</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGDvsaBAwJ8HMsl4s8KmuzKJ0ZCQk_fxSB2tLYJiCwcBq0mqTsjcI-z5uLFOTSyollRk&usqp=CAU",
//         group: "Managements",
//     },

//     {
//         id: 23,
//         title: <span> Reporting & Analytics</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7OXyoZTRimJ3x6RXhFOQlltAS7KEBJkDaw&s",
//         group: "Reports",
//     },

//     {
//         id: 24,
//         title: <span> Event Managements</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/business-schedule-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--planning-events-calendar-businessman-creative-worker-vol-4-pack-illustrations-4659636.png?f=webp",
//         group: "Managements",
//     },
//     {
//         id: 25,
//         title: <span> Birthday Managements</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR649d1Sr2Hx4xZuEGICzXwDYxb1ydTiQU2A&s",
//         group: "Managements",
//     },
//     {
//         id: 26,
//         title: <span> Timetable & Scheduling</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsNxqyo1qKbBUOKA25Ppjt32sgTXaxHt5VuA&s",
//         group: "Classrooms",
//     },
//     {
//         id: 27,
//         title: <span> School Management App</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/educational-app-3d-icon-download-in-png-blend-fbx-gltf-file-formats--online-education-learning-study-mobile-university-e-pack-icons-8248946.png?f=webp",
//         group: "Apps",
//     },

//     {
//         id: 28,
//         title: <span>Fees Management App</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-app-3d-icon-download-in-png-blend-fbx-gltf-file-formats--smartphone-application-business-finance-pack-icons-6466897.png",
//         group: "Apps",
//     },
//     {
//         id: 29,
//         title: <span>Fees Management System</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0V2R1_4PbBL2WLzZaQ6IQHnOwYXlTEqd5A&s",
//         group: "Managements",
//     },
//     {
//         id: 30,
//         title: <span>Attendance Management System</span>,
//         image:
//             "https://png.pngtree.com/png-clipart/20250207/original/pngtree-employee-time-tracking-software-featuring-3d-icon-isolated-on-a-transparent-png-image_20375423.png",
//         group: "Managements",
//     },

//     {
//         id: 31,
//         title: <span>Document Verification</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/verified-document-3d-icon-download-in-png-blend-fbx-gltf-file-formats--approved-check-verification-pack-user-interface-icons-5915195.png?f=webp",
//         group: "Classrooms",
//     },
//     {
//         id: 32,
//         title: <span>Result Management</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/result-3d-icon-download-in-png-blend-fbx-gltf-file-formats--test-report-search-survey-vote-pack-politics-icons-8356541.png",
//         group: "Managements",
//     },
//     {
//         id: 33,
//         title: <span>Assessment</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxh0_ePjuNNHwsgLWmh3SxvchtoQJdrrqKA&s",
//         group: "Managements",
//     },
//     {
//         id: 34,
//         title: <span>EBook Managements</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/ebook-3d-icon-download-in-png-blend-fbx-gltf-file-formats--study-write-online-e-learning-tool-computer-functions-pack-windows-interface-icons-8523464.png",
//         group: "Managements",
//     },
//     {
//         id: 35,
//         title: <span>WhatsApp,SMS,Email Integration </span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/social-media-marketing-3d-icon-png-download-3816320.png",
//         group: "Communications",
//     },
//     {
//         id: 36,
//         title: <span>Payment Reminder</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_mB-zxnFyI2U24IHsHVq7Ugt-WsFf9kqQ2Q&s",
//         group: "communications",
//     },
//     {
//         id: 37,
//         title: <span>Staff Management</span>,
//         image:
//             "https://thumbs.dreamstime.com/b/staff-management-d-icon-high-quality-design-ui-ux-apps-websites-digital-projects-png-vector-format-358577236.jpg",
//         group: "Managements",
//     },
//     {
//         id: 38,
//         title: <span>Income/Expense Management</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/balance-sheet-3d-icon-download-in-png-blend-fbx-gltf-file-formats--financial-management-portfolio-saving-money-analysis-business-finance-investment-and-pack-icons-11640964.png?f=webp",
//         group: "Managements",
//     },
//     {
//         id: 39,
//         title: <span>Salary Management System</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUG7aPsFL9K1kKBYhElt943fFJFPDRTuHF2Q&s",
//         group: "Managements",
//     },
//     {
//         id: 40,
//         title: <span>Payroll Management</span>,
//         image:
//             "https://png.pngtree.com/png-vector/20250214/ourlarge/pngtree-salary-3d-icon-financial-earnings-symbol-for-monthly-income-and-payroll-png-image_15473276.png",
//         group: "Managements",
//     },
//     {
//         id: 41,
//         title: <span>Test Series Managements</span>,
//         image:
//             "https://img.freepik.com/free-photo/hand-holding-writing-checklist-application-form-document-clipboard-white-background-3d-illustration_56104-1551.jpg",
//         group: "Managements",
//     },
//     {
//         id: 42,
//         title: <span>Live Classroom</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgcQjv6rxRDgBZ2V4jHBwxgzoD4J35qshN4Q&s",
//         group: "Classrooms",
//     },
//     {
//         id: 43,
//         title: <span>Dynamic Website</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgR1lsnCeU4jgW4nW1RYZsy3yxMtP5m13VAw&s",
//         group: "Managements",
//     },


//     {
//         id: 44,
//         title: <span>Student App</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/app-development-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--application-programming-coding-computer-pack-design-illustrations-4315311.png?f=webp",
//         group: "Apps",
//     },
//     {
//         id: 45,
//         title: <span>Teacher App</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-development-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--app-design-application-technology-pack-user-interface-illustrations-4708214.png",
//         group: "Apps",
//     },
//     {
//         id: 46,
//         title: <span>Parent App</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCodgTpG2Uk7AnOo6ujEgNBCgv2MwE0YkjiQ&s",
//         group: "Apps",
//     },
//     {
//         id: 47,
//         title: <span>Daily Academic Dashboard</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCodgTpG2Uk7AnOo6ujEgNBCgv2MwE0YkjiQ&s",
//         group: "Dashboard",
//     },
//     {
//         id: 48,
//         title: <span>Yearly Academic Dashboard</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCodgTpG2Uk7AnOo6ujEgNBCgv2MwE0YkjiQ&s",
//         group: "Dashboard",
//     },
//     {
//         id: 49,
//         title: <span>Monthly Academic Dashboard</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCodgTpG2Uk7AnOo6ujEgNBCgv2MwE0YkjiQ&s",
//         group: "Dashboard",
//     },
//     {
//         id: 50,
//         title: <span>Course-wise Academic Dashboard</span>,
//         image: "https://png.pngtree.com/png-vector/20250703/ourlarge/pngtree-online-course-3d-icon-high-resolution-png-image_16600962.webp",
//         group: "Dashboard",
//     },
//     {
//         id: 51,
//         title: <span>Source-wise Academic Dashboard</span>,
//         image: "https://cdn3d.iconscout.com/3d/premium/thumb/online-education-3d-icon-download-in-png-blend-fbx-gltf-file-formats--learning-e-study-website-pack-design-development-icons-9779173.png",
//         group: "Dashboard",
//     },
//     {
//         id: 52,
//         title: <span>Centralized Academic Dashboard</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCodgTpG2Uk7AnOo6ujEgNBCgv2MwE0YkjiQ&s",
//         group: "Dashboard",
//     },
//     {
//         id: 53,
//         title: <span>Genarate Course</span>,
//         image: "https://cdn3d.iconscout.com/3d/premium/thumb/customer-support-3d-icon-download-in-png-blend-fbx-gltf-file-formats--service-care-online-course-pack-school-education-icons-10089848.png?f=webp",
//         group: "Admissions",
//     },
//     {
//         id: 54,
//         title: <span>Genarate Source</span>,
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyudqemgyg4r8gtmOOZvrhYn-vaZBKmx5_Lg&s",
//         group: "Admissions",
//     },
//     {
//         id: 55,
//         title: <span>Conduct Management</span>,
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLhMdELN5QfNCvU3XorN9jUbAKXJFsCCJdzw&s",
//         group: "Admissions",
//     },
//     {
//         id: 56,
//         title: <span>Exam Type </span>,
//         image: "https://static.vecteezy.com/system/resources/previews/021/596/615/non_2x/3d-illustration-exam-in-online-learning-set-free-png.png",
//         group: "Admissions",
//     },
//     {
//         id: 57,
//         title: <span>Paper Type</span>,
//         image: "https://static.vecteezy.com/system/resources/previews/018/868/596/non_2x/3d-paper-and-pen-icon-free-png.png",
//         group: "Admissions",
//     },
//     {
//         id: 58,
//         title: <span>Generate QR Code </span>,
//         image: "https://thumbs.dreamstime.com/b/d-qr-code-icon-isolated-render-modern-symbol-concept-online-shopping-advertisement-marketing-promotion-scan-310050935.jpg",
//         group: "Admissions",
//     },
//     {
//         id: 59,
//         title: <span> Teacher Management</span>,
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWFTEjpXwJ4KYWdfdj3jrAOY3BjHe8dwrBlQ&s",
//         group: "Managements",
//     },
//     {
//         id: 60,
//         title: <span>Genarate Medium</span>,
//         image: "https://cdn3d.iconscout.com/3d/premium/thumb/content-3d-icon-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-megaphone-video-technology-media-digital-marketing-pack-business-icons-5115836.png",
//         group: "Admissions",
//     },
//     {
//         id: 61,
//         title: <span>Genarate Classroom</span>,
//         image: "https://png.pngtree.com/png-vector/20250712/ourlarge/pngtree-online-classroom-3d-icon-png-image_16625923.webp",
//         group: "Admissions",
//     },

//     {
//         id: 62,
//         title: <span>Teacher App</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-development-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--app-design-application-technology-pack-user-interface-illustrations-4708214.png",
//         group: "Teacher",
//     },
//     {
//         id: 63,
//         title: <span>Student App</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/app-development-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--application-programming-coding-computer-pack-design-illustrations-4315311.png?f=webp",
//         group: "Student",
//     },
//     {
//         id: 64,
//         title: <span>Parent App</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCodgTpG2Uk7AnOo6ujEgNBCgv2MwE0YkjiQ&s",
//         group: "Parent",
//     },
//     {
//         id: 65,
//         title: <span> Generate Course</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/online-course-3d-icon-png-download-5526386.png",
//         group: "Settings",
//     },
//     {
//         id: 66,
//         title: <span> Generate source</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScG91Xz6bd_AykiYnw8EthQHDqtVrwtq557Q&s",
//         group: "Settings",
//     },
//     {
//         id: 67,
//         title: <span>Exam Type </span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzUaEKXt58oq5exmcCfrsEdUdNmHaIf3eEvwdVPmQQNNKxhdgwBQI1fhjLOftQHEcA-0Y&usqp=CAU",
//         group: "Settings",
//     },
//     {
//         id: 68,
//         title: <span>Paper Type </span>,
//         image:
//             "https://static.vecteezy.com/system/resources/thumbnails/043/988/340/small_2x/exam-paper-3d-icon-png.png",
//         group: "Settings",
//     },
//     {
//         id: 69,
//         title: <span>Calling Follow up Entry </span>,
//         image:
//             "https://static.vecteezy.com/system/resources/previews/019/872/926/non_2x/3d-minimal-phone-ringing-icon-incoming-call-notification-call-center-service-concept-communication-technology-phone-icon-with-a-chat-and-mail-icon-3d-illustration-free-png.png",
//         group: "Communications",
//     },
//     {
//         id: 70,
//         title: <span>Lead Capture & Lead Distribution</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-10215983.png",
//         group: "Communications",
//     },
//     {
//         id: 71,
//         title: <span>Role Based Access Control</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/access-control-8724825-7067630.png",
//         group: "Reports & Analytics",
//     },
//     {
//         id: 72,
//         title: <span>Reporting and Analytics </span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/analytics-chart-3d-icon-png-download-4312549.png",
//         group: "Reports & Analytics",
//     },
//     {
//         id: 73,
//         title: <span>Centralized Academy Records </span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/online-learning-3d-icon-png-download-3162172.png",
//         group: "Records",
//     },
//     {
//         id: 74,
//         title: <span>Follow-Up Scheduling </span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzBldQpqNf2CU10YECKBpJ71Up3tXBXFSo8gut8fuGxNEBNCpLquDeMTHkao8M4VQImc&usqp=CAU",
//         group: "Records",
//     },
//     {
//         id: 75,
//         title: <span>Academic Generation Records </span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRKd3QMM_6TmFfauYU9Gmh9cXo3CJduoHGsQ&s",
//         group: "Records",
//     },
//     {
//         id: 76,
//         title: <span>Student Management</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/feedback-and-selfassessment-3d-icon-png-download-9169526.png",
//         group: "School",
//     },
//     {
//         id: 77,
//         title: <span>Teacher Management</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/teacher-3d-icon-png-download-11785877.png",
//         group: "School",
//     },
//     {
//         id: 78,
//         title: <span>Classroom Management</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/online-classroom-3d-icon-png-download-10553618.png",
//         group: "School",
//     },
//     {
//         id: 79,
//         title: <span>Timetable Management</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/class-timetable-3d-icon-png-download-5074039.png",
//         group: "School",
//     },
//     {
//         id: 80,
//         title: <span>Fees Management</span>,
//         image:
//             "https://png.pngtree.com/png-clipart/20250217/original/pngtree-budgeting-3d-icon-financial-planning-symbol-for-expense-management-and-money-png-image_20452281.png",
//         group: "School",
//     },
//     {
//         id: 81,
//         title: <span>Admission Management</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/college-3d-icon-png-download-6560104.png",
//         group: "School",
//     },
//     {
//         id: 82,
//         title: <span>Standard/Medium/Division</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK36-V1folEYppcuPpW--f17f2Lnn34Ejr-w&s",
//         group: "School",
//     },
//     {
//         id: 83,
//         title: <span>Library Management</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/digital-library-3d-icon-png-download-5728128.png",
//         group: "School",
//     },
//     {
//         id: 84,
//         title: <span>Subject Management</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/language-3d-icon-png-download-8654457.png",
//         group: "School",
//     },
//     {
//         id: 85,
//         title: <span>Timetable Generation</span>,
//         image: "https://cdn-icons-png.flaticon.com/512/4695/4695003.png",
//         group: "Classrooms",
//     },
//     {
//         id: 86,
//         title: <span>Institution Type </span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/school-3d-icon-png-download-5175980.png",
//         group: "Classrooms",

//     },
//     {
//         id: 87,
//         title: <span>Classroom Medium </span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/virtual-classroom-3d-icon-png-download-12809800.png",
//         group: "Classrooms",

//     },
//     {
//         id: 88,
//         title: <span>Classroom Division </span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcQlQ62OV7rzbZypmNnK9EIYPp3kknW7aFA&s",
//         group: "Classrooms",

//     },
//     //   {
//     //     id: 89,
//     //     title: <span>Academic Year </span>,
//     //     image:
//     //       "https://media.istockphoto.com/id/1359134622/vector/calendar-assignment-and-clock-icon-schedule.jpg?s=612x612&w=0&k=20&c=A27qJTLmBQ-xMds81ABYjdu6gRvHnyen4BNAwcPs3OY=",
//     //     group: "Classrooms",
//     //   },
//     {
//         id: 90,
//         title: <span>Batch Name</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFzKmV4WjbFDgGQOKG2w2akjT94b-dqxF7zg&s",
//         group: "Classrooms",
//     },
//     {
//         id: 91,
//         title: <span>Classroom Time Scheduling</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/man-is-doing-time-management-3d-icon-png-download-7408561.png",
//         group: "Classrooms",
//     },
//     {
//         id: 92,
//         title: <span>Academic Year</span>,
//         image:
//             "https://img.freepik.com/premium-photo/3d-icon-study-schedule-3d-illustration-3d-element-3d-rendering-graphic-elements-design-element_808921-804.jpg",
//         group: "Classrooms",
//     },
//     {
//         id: 93,
//         title: <span>Centralized Course</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/online-course-3d-icon-png-download-10553613.png",
//         group: "Classrooms",
//     },
//     {
//         id: 94,
//         title: <span>Classroom Subject</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/history-subject-3d-icon-png-download-8842446.png",
//         group: "Classrooms",
//     },
//     {
//         id: 95,
//         title: <span>Batch Management</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROVzb15kQnxqr_0dBaQBbWw5rcR9VYSy_8eQ&s",
//         group: "Attendance",
//     },
//     {
//         id: 96,
//         title: <span>Academic Year</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY4jb3W4JvFMeIATvNF7E0oGVah7152Ctv1g&s",
//         group: "Attendance",
//     },
//     {
//         id: 97,
//         title: <span>Attendance Management</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/fingerprint-lock-3d-icon-png-download-7358876.png",
//         group: "Attendance",
//     },
//     {
//         id: 98,
//         title: <span> Classroom Medium</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/classroom-3d-icon-png-download-10350051.png",
//         group: "Attendance",
//     },
//     {
//         id: 99,
//         title: <span>Course Management</span>,
//         image:
//             "https://static.vecteezy.com/system/resources/thumbnails/013/168/998/small_2x/online-course-3d-render-png.png",
//         group: "Attendance",
//     },
//     {
//         id: 100,
//         title: <span>Time Scheduling</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/schedule-time-3d-icon-png-download-4995379.png",
//         group: "Attendance",
//     },
//     {
//         id: 101,
//         title: <span>Attendance Summary </span>,
//         image:
//             "https://www.shutterstock.com/image-vector/time-management-3d-illustration-set-600nw-2262043667.jpg",
//         group: "Attendance",
//     },
//     {
//         id: 102,
//         title: <span>Student Management</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/feedback-and-selfassessment-3d-icon-png-download-9169526.png",
//         group: "Student",
//     },
//     {
//         id: 103,
//         title: <span>Student Dashboard</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/teacher-dashboard-3d-icon-png-download-10553607.png",
//         group: "Student",
//     },
//     {
//         id: 104,
//         title: <span>Student Exam Report</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/exam-paper-3d-icon-png-download-8689250.png",
//         group: "Student",
//     },
//     {
//         id: 105,
//         title: <span>Classroom Management </span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/online-classroom-3d-icon-png-download-10553618.png",
//         group: "Student",
//     },
//     {
//         id: 106,
//         title: <span>Time Table Management</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/timetable-3d-icon-png-download-3369788.png",
//         group: "Student",
//     },

//     {
//         id: 107,
//         title: <span>Attendance Management</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/attendance-3d-icon-png-download-11245305.png",
//         group: "Student",
//     },
//     {
//         id: 108,
//         title: <span>Teacher Management</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/teacher-3d-icon-png-download-11785877.png",
//         group: "Student",
//     },
//     {
//         id: 109,
//         title: <span>Academic Year</span>,
//         image:
//             "https://png.pngtree.com/png-vector/20250226/ourmid/pngtree-user-friendly-3d-educational-app-interface-design-vector-png-image_15598649.png",
//         group: "Student",
//     },
//     {
//         id: 110,
//         title: <span>Student Profile</span>,
//         image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SHupunKm-giRTSbAVSXxnwE9JsS1tW6O1w&s",
//         group: "Student",
//     },
//     {
//         id: 111,
//         title: <span>Subject Management</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/student-profile-3d-icon-png-download-8824922.png",
//         group: "Student",
//     },
//     {
//         id: 112,
//         title: <span>Standard/Medium/Division</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/standards-3d-icon-png-download-5431164.png",
//         group: "Student",
//     },
//     {
//         id: 113,
//         title: <span>Fees By Month Dashboard</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/blog-3d-icon-png-download-9617430.png",
//         group: "Fees",
//     },
//     {
//         id: 114,
//         title: <span>Fees Collected Payment Mode Dashboard</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/payment-3d-icon-png-download-5272924.png",
//         group: "Fees",
//     },
//     {
//         id: 115,
//         title: <span>Collected Fees By Year Dashboard</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-icon-png-download-7577977.png",
//         group: "Fees",
//     },
//     {
//         id: 116,
//         title: <span>Collected Fees By Month Dashboard</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/online-expensive-report-3d-icon-png-download-5727732.png?f=webp",
//         group: "Fees",
//     },
//     {
//         id: 117,
//         title: <span>Fees Revenue by Bank Dashboard</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/online-expensive-report-3d-icon-png-download-5727732.png?f=webp",
//         group: "Fees",
//     },
//     {
//         id: 118,
//         title: <span>Student Fee Management</span>,
//         image:
//             "https://cdn3d.iconscout.com/3d/premium/thumb/student-loan-payment-3d-icon-png-download-12387215.png",
//         group: "Fees",
//     },
// ];

// const featureData = [
//     {
//         title: "Admission Management",
//         desc: "QR-based admission, centralized student records, SMS & Email integration for smooth onboarding.",
//         img: "https://www.getmyuniversity.com/neet/wp-content/uploads/2022/01/career-counselling-7.gif",
//         link: "https://pjsofttech.in/superadminclient/layout/admission/Attendance",
//         points: ["QR Code Admission", "Centralized Student Data", "SMS / Email Alerts"]
//     },
//     {
//         title: "Classroom Management",
//         desc: "Create and manage classes efficiently with structured academic mapping.",
//         img: "https://globaleducation.s3.ap-south-1.amazonaws.com/globaledu/gif/faculty-traning.gif",
//         link: "https://pjsofttech.in/superadminclient/layout/admission/add-Class",
//         points: ["Class-wise Students", "Academic Structure", "Easy Class Setup"]
//     },
//     {
//         title: "Teacher Management",
//         desc: "Manage teacher profiles, roles, and performance from a single dashboard.",
//         img: "https://i.pinimg.com/originals/9d/cb/36/9dcb36579d4518b31451906466dc735d.gif",
//         link: "https://pjsofttech.in/superadminclient/layout/admission/Teacher",
//         points: ["Teacher Profiles", "Role Assignment", "Performance Tracking"]
//     },
//     {
//         title: "Result Management",
//         desc: "Digital result processing with fast access and transparent reporting.",
//         img: "https://www.pjsofttech.com/static/media/testseriesebook.69bac9c208c683422ac3.gif",
//         link: "https://pjsofttech.in/superadminclient/layout/admission/ResultTable",
//         points: ["Exam Results", "Marks Analysis", "Student Performance"]
//     }
// ];


// const imageVariants = {
//     initial: { scale: 0.9, opacity: 0 },
//     animate: {
//         scale: 1,
//         opacity: 1,
//         transition: { duration: 1, type: "spring", bounce: 0.4 },
//     },
// };

// const subfeatures = [
//     {
//         id: 1,
//         title: "Student Profiles",
//         detail: "Maintain detailed records of each student including academics, attendance, and health.",
//         image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//     },
//     {
//         id: 2,
//         title: "Attendance Automation",
//         detail: "Automated daily attendance with instant alerts for absentees.",
//         image: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
//     },
//     {
//         id: 3,
//         title: "Exam Scheduling",
//         detail: "Plan, schedule, and manage exams with automated result publishing.",
//         image: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
//     },
//     {
//         id: 4,
//         title: "Fee Management",
//         detail: "Track fee payments, dues, and generate receipts easily.",
//         image: "https://cdn-icons-png.flaticon.com/512/724/724715.png",
//     },
//     {
//         id: 5,
//         title: "Parent Portal",
//         detail: "Parents can view student progress, attendance, and communicate with teachers.",
//         image: "https://cdn-icons-png.flaticon.com/512/565/565340.png",
//     },
//     {
//         id: 6,
//         title: "Homework & Assignments",
//         detail: "Assign, submit, and review homework digitally.",
//         image: "https://cdn-icons-png.flaticon.com/512/9523/9523801.png",
//     },
//     {
//         id: 7,
//         title: "Transport Management",
//         detail: "Manage bus routes, stops, and student transport details.",
//         image: "https://cdn-icons-png.flaticon.com/512/2942/2942878.png",
//     },
//     {
//         id: 8,
//         title: "Library Management",
//         detail: "Track issued/returned books and manage library inventory.",
//         image: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
//     },
//     {
//         id: 9,
//         title: "Staff Management",
//         detail: "Manage teacher and staff profiles, leaves, and payroll.",
//         image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//     },
//     {
//         id: 10,
//         title: "Mobile Access",
//         detail: "Access all features from any device, anywhere.",
//         image: "https://static.vecteezy.com/system/resources/thumbnails/041/643/995/small_2x/mobile-user-authentication-3d-icon-png.png",
//     },
// ];

// const dashboardData = [
//     {
//         title: "Academic Overview",
//         desc: "Monitor academics, student progress, and class performance in one place with real-time updates and charts.",
//         img: dashboard1,
//     },
//     {
//         title: "Attendance Insights",
//         desc: "Analyze attendance trends, absenteeism, and punctuality. Identify patterns and improve student engagement.",
//         img: dashboard2,
//     },
//     {
//         title: "Exam Analytics",
//         desc: "Track exam results, subject-wise performance, and overall analytics. Make informed decisions for academic excellence.",
//         img: dashboard3,
//     },
//     {
//         title: "Admision  Analytics",
//         desc: "Track exam results, subject-wise performance, and overall analytics. Make informed decisions for academic excellence.",
//         img: dashboard4,
//     },
// ];

// const SchoolManagementSystem = () => {
//     const [selectedGroup, setSelectedGroup] = useState("Dashboard");

//     useEffect(() => {
//         AOS.init({ duration: 1000 });
//     }, []);

//     const handleGroupChange = (group) => {
//         setSelectedGroup(group);
//         AOS.refresh();
//     };

//     const filteredBlogs = blogs.filter((blog) => blog.group === selectedGroup);

//     return (
//         <ThemeProvider theme={theme}>

//             {/* Hero Section */}
//             <Box sx={{ py: { xs: 6, md: 10 } }}>
//                 <Container>
//                     <Grid container spacing={4} alignItems="center">

//                         {/* LEFT CONTENT */}
//                         <Grid item xs={12} md={6} data-aos="fade-right">
//                             <Typography
//                                 variant="h2"
//                                 sx={{
//                                     fontWeight: "bold",
//                                     color: "#3498DB",
//                                     mb: 2,
//                                     fontSize: { xs: 28, md: 38 },
//                                 }}
//                             >
//                                 School Management <span style={{ color: "#FFBF00" }}>System</span>
//                             </Typography>

//                             <Typography
//                                 variant="body1"
//                                 sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
//                             >
//                                 <b>Digitize, organize, and empower</b> your entire school administration
//                                 with our advanced <b>School Management System</b>. Designed to simplify
//                                 operations, it provides a centralized, secure, and user-friendly
//                                 platform for schools of all sizes. From admissions to graduation,
//                                 every academic and administrative process can be managed seamlessly.
//                                 Effortlessly handle{" "}
//                                 <b>
//                                     student records, staff management, attendance tracking, timetable
//                                     scheduling, fee collection, examinations, and performance reports
//                                 </b>
//                                 —all within a single system.
//                             </Typography>

//                             {/* Chips */}
//                             <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 3 }}>
//                                 <Chip label="Centralized Data" color="primary" sx={{ color: "white", fontWeight: "bold" }} />
//                                 <Chip label="Parent Portal" color="secondary" sx={{ color: "white", fontWeight: "bold" }} />
//                                 <Chip label="24x7 Support" sx={{ background: "#e1bee7", color: "white", fontWeight: "bold" }} />
//                             </Box>

//                             {/* BUTTONS */}
//                             <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>

//                                 {/* Download Brochure */}
//                                 <Button
//                                     variant="outlined"
//                                     component="a"
//                                     href="/brochure.pdf"
//                                     download
//                                     sx={{
//                                         borderColor: "#FFBF00",
//                                         color: "#FFBF00",
//                                         px: 3,
//                                         py: 1.2,
//                                         fontWeight: "bold",
//                                         borderRadius: "30px",
//                                         textTransform: "none",
//                                         "&:hover": {
//                                             background: "linear-gradient(45deg, #3498DB, #5DADE2)",
//                                             color: "#fff",
//                                             boxShadow: "0 6px 18px rgba(255,191,0,0.45)",
//                                         },
//                                     }}
//                                 >
//                                     Download Brochure
//                                 </Button>

//                                 {/* Get Free Account */}
//                                 <Button
//                                     variant="outlined"
//                                     onClick={() =>
//                                         window.open("https://your-website.com/signup", "_blank")
//                                     }
//                                     sx={{
//                                         borderColor: "#FFBF00",
//                                         color: "#FFBF00",
//                                         px: 3,
//                                         py: 1.2,
//                                         fontWeight: "bold",
//                                         borderRadius: "30px",
//                                         textTransform: "none",
//                                         "&:hover": {
//                                             background: "#FFBF00",
//                                             color: "#fff",
//                                             boxShadow: "0 6px 18px rgba(255,191,0,0.45)",
//                                         },
//                                     }}
//                                 >
//                                     Get Free Account
//                                 </Button>
//                             </Box>
//                         </Grid>

//                         {/* RIGHT IMAGE */}
//                         <Grid item xs={12} md={6} data-aos="fade-left">
//                             <motion.img
//                                 src={heroImg}
//                                 alt="School Management"
//                                 style={{
//                                     width: "100%",
//                                     maxHeight: "400px",
//                                     objectFit: "contain",
//                                     borderRadius: "16px",
//                                     boxShadow: "0 8px 32px rgba(52,152,219,0.10)",
//                                 }}
//                                 variants={imageVariants}
//                                 initial="initial"
//                                 animate="animate"
//                                 whileHover={{
//                                     scale: 1.04,
//                                     boxShadow: "0px 8px 24px rgba(52,152,219,0.18)",
//                                 }}
//                                 whileTap={{ scale: 0.97 }}
//                             />
//                         </Grid>

//                     </Grid>
//                 </Container>
//             </Box>

//             {/* WHY + LOGIN + PJSOFTTECH INFO SECTION */}
//             <Box sx={{ backgroundColor: "#f5f7fa", py: 8 }}>
//                 <Container maxWidth="lg">

//                     {/* TOP SECTION */}
//                     <Grid container spacing={5} alignItems="center">

//                         {/* LEFT CONTENT */}
//                         <Grid item xs={12} md={6}>
//                             <motion.div
//                                 initial={{ opacity: 0, x: -40 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 0.7 }}
//                                 viewport={{ once: true }}
//                             >
//                                 <Typography
//                                     sx={{
//                                         fontSize: 32,
//                                         fontWeight: 800,
//                                         color: "#1976d2",
//                                         mb: 3,
//                                     }}
//                                 >
//                                     Why Choose Our School Management System?
//                                 </Typography>

//                                 <Typography
//                                     sx={{
//                                         fontSize: 17,
//                                         color: "#444",
//                                         lineHeight: 2,
//                                         mb: 2,
//                                     }}
//                                 >
//                                     Our School Management System helps schools and colleges manage
//                                     admissions, students, staff, attendance, exams, communication,
//                                     reports, and analytics on a single digital platform.
//                                 </Typography>

//                                 <Typography
//                                     sx={{
//                                         fontSize: 17,
//                                         color: "#444",
//                                         lineHeight: 2,
//                                     }}
//                                 >
//                                     It saves time, reduces paperwork, improves transparency, and supports
//                                     smarter decision-making through automation.
//                                 </Typography>
//                             </motion.div>
//                         </Grid>

//                         {/* RIGHT LOGIN CARDS */}
//                         <Grid item xs={12} md={6}>
//                             <Grid container spacing={4}>
//                                 {/* Superadmin Card */}
//                                 <Grid item xs={12} sm={6} sx={{ minWidth: 0 }}>
//                                     <Box
//                                         sx={{
//                                             p: 4,
//                                             height: "100%",
//                                             borderRadius: 3,
//                                             backgroundColor: "#F4F8FF",
//                                             borderLeft: "6px solid #2563EB",
//                                             boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//                                         }}
//                                     >
//                                         <Typography
//                                             sx={{
//                                                 fontSize: 20,
//                                                 fontWeight: 800,
//                                                 mb: 2,
//                                                 display: "flex",
//                                                 alignItems: "center",
//                                                 gap: 1,
//                                                 overflow: "hidden",
//                                                 textOverflow: "ellipsis",
//                                                 whiteSpace: { xs: "normal", sm: "nowrap" },
//                                             }}
//                                         >
//                                             🔐Admin Login
//                                         </Typography>

//                                         <Typography sx={{ fontSize: 15, mb: 1 }}>
//                                             <strong>URL:</strong><br />
//                                             pjsofttech.in/superadminclient
//                                         </Typography>

//                                         <Typography sx={{ fontSize: 15, mb: 1 }}>
//                                             <strong>Email:</strong><br />
//                                             demoaccount@gmail.com
//                                         </Typography>

//                                         <Typography sx={{ fontSize: 15 }}>
//                                             <strong>Password:</strong><br />
//                                             Demo@123
//                                         </Typography>

//                                         {/* BUTTON */}
//                                         <Box sx={{ mt: 3 }}>
//                                             <Button
//                                                 variant="contained"
//                                                 size="small"
//                                                 onClick={() =>
//                                                     window.open("https://pjsofttech.in/superadminclient", "_blank")
//                                                 }
//                                                 sx={{
//                                                     backgroundColor: "#2563EB",
//                                                     textTransform: "none",
//                                                     fontSize: 14,
//                                                     px: 2.5,
//                                                     borderRadius: "20px",
//                                                     boxShadow: "none",
//                                                     "&:hover": {
//                                                         backgroundColor: "#1E40AF",
//                                                     },
//                                                 }}
//                                             >
//                                                 Open Admin Panel
//                                             </Button>
//                                         </Box>
//                                     </Box>
//                                 </Grid>

//                                 {/* Branch Card */}
//                                 <Grid item xs={12} sm={6} sx={{ minWidth: 0 }}>
//                                     <Box
//                                         sx={{
//                                             p: 4,
//                                             height: "100%",
//                                             borderRadius: 3,
//                                             backgroundColor: "#FFFBEB",
//                                             borderLeft: "6px solid #F59E0B",
//                                             boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//                                         }}
//                                     >
//                                         <Typography
//                                             sx={{
//                                                 fontSize: 20,
//                                                 fontWeight: 800,
//                                                 mb: 2,
//                                                 display: "flex",
//                                                 alignItems: "center",
//                                                 gap: 1,
//                                             }}
//                                         >
//                                             🏫 Branch Login
//                                         </Typography>

//                                         <Typography sx={{ fontSize: 15, mb: 1 }}>
//                                             <strong>Email:</strong><br />
//                                             branchac@gmail.com
//                                         </Typography>

//                                         <Typography sx={{ fontSize: 15, mb: 1 }}>
//                                             <strong>Branch Code:</strong><br />
//                                             BCH448
//                                         </Typography>

//                                         <Typography sx={{ fontSize: 15 }}>
//                                             <strong>Password:</strong><br />
//                                             Branchac@123
//                                         </Typography>
//                                         {/* BUTTON */}
//                                         <Box sx={{ mt: 3 }}>
//                                             <Button
//                                                 variant="contained"
//                                                 size="small"
//                                                 onClick={() =>
//                                                     window.open("https://pjsofttech.in/superadminclient", "_blank")
//                                                 }
//                                                 sx={{
//                                                     backgroundColor: "#F59E0B",
//                                                     textTransform: "none",
//                                                     fontSize: 14,
//                                                     px: 2.5,
//                                                     borderRadius: "20px",
//                                                     boxShadow: "none",
//                                                     "&:hover": {
//                                                         backgroundColor: "#F59E0B",
//                                                     },
//                                                 }}
//                                             >
//                                                 Branch Panel
//                                             </Button>
//                                         </Box>
//                                     </Box>
//                                 </Grid>

//                             </Grid>
//                         </Grid>
//                     </Grid>

//                 </Container>
//             </Box>

//             {/* Key Features Section */}
//             <Box
//                 sx={{
//                     background: "linear-gradient(135deg, #fff 0%, #fef9e7 100%)",
//                     display: "flex",
//                     textAlign: "center",
//                     marginBottom: "40px",
//                     padding: "40px 0",
//                 }}
//             >
//                 <Container>
//                     <Typography
//                         variant="h4"
//                         sx={{
//                             fontWeight: "bold",
//                             color: "#3498DB",
//                             marginBottom: "40px",
//                             position: "relative",
//                             display: "inline-block",
//                             "&::after": {
//                                 content: '""',
//                                 position: "absolute",
//                                 left: 0,
//                                 bottom: -8,
//                                 height: "4px",
//                                 width: "100%",
//                                 background: "linear-gradient(90deg, #3498DB 0%, 100%)",
//                                 borderRadius: "2px",
//                             },
//                         }}
//                     >
//                         Key Features
//                     </Typography>

//                     {/* Filter Buttons */}
//                     <Box className="text-center mb-4">
//                         {groups.map((group) => (
//                             <Button
//                                 key={group}
//                                 onClick={() => handleGroupChange(group)}
//                                 variant={selectedGroup === group ? "contained" : "outlined"}
//                                 sx={{
//                                     margin: "5px",
//                                     borderRadius: "20px",
//                                     textTransform: "none",
//                                     backgroundColor:
//                                         selectedGroup === group ? "#FFBF00" : "transparent",
//                                     color: selectedGroup === group ? "#fff" : "#3498DB",
//                                     borderColor: "#3498DB",
//                                     "&:hover": {
//                                         backgroundColor:
//                                             selectedGroup === group ? "#e6ac00" : "#FFBF00",
//                                         color: "#fff",
//                                         borderColor: "#3498DB",
//                                     },
//                                 }}
//                             >
//                                 {group}
//                             </Button>
//                         ))}
//                     </Box>

//                     {/* Feature Cards */}
//                     <Grid container spacing={4}>
//                         {filteredBlogs.map((blog, i) => (
//                             <Grid item xs={12} sm={6} md={3} key={blog.id}>
//                                 <motion.div
//                                     initial={{ opacity: 0, y: 40 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{
//                                         delay: i * 0.08,
//                                         duration: 0.5,
//                                         type: "spring",
//                                     }}
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     viewport={{ once: true, amount: 0.2 }}
//                                 >
//                                     <Card
//                                         sx={{
//                                             boxShadow: "0px 4px 20px rgba(255, 191, 0, 0.3)",
//                                             border: "2px solid  #3498DB",
//                                             borderRadius: "12px",
//                                             overflow: "hidden",
//                                             transition: "all 0.3s ease",
//                                             height: "100%",
//                                             backgroundColor: "#fffbea",
//                                         }}
//                                     >
//                                         <CardMedia
//                                             component="img"
//                                             image={blog.image}
//                                             alt={blog.title}
//                                             sx={{
//                                                 height: "80px",
//                                                 objectFit: "contain",
//                                                 margin: "30px auto 0",
//                                             }}
//                                         />
//                                         <CardContent>
//                                             <Typography
//                                                 sx={{
//                                                     textAlign: "center",
//                                                     color: "#333",
//                                                     fontSize: "14px",
//                                                     borderTop: "1px solid #3498DB",
//                                                     paddingTop: "12px",
//                                                     overflow: "hidden",
//                                                     textOverflow: "ellipsis",
//                                                     whiteSpace: "normal",
//                                                     display: "-webkit-box",
//                                                     WebkitLineClamp: 2,
//                                                     WebkitBoxOrient: "vertical",
//                                                 }}
//                                             >
//                                                 {blog.title}
//                                             </Typography>
//                                         </CardContent>
//                                     </Card>
//                                 </motion.div>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Container>
//             </Box>

//             {/* Benefits Section */}
//             <div className={styles.container2}>
//                 {/* Left: Phone Mockup */}
//                 <div className={styles.phoneMockup} data-aos="fade-right">
//                     <img
//                         className={styles.img22}
//                         src={phone}
//                         alt="School Management Mobile"
//                     />
//                 </div>

//                 {/* Right: Text Content */}
//                 <motion.div
//                     className={styles.benefitsSection}
//                     data-aos="fade-left"
//                     initial={{ opacity: 0, x: 40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.7, ease: "easeOut" }}
//                     viewport={{ once: true, amount: 0.3 }}
//                 >
//                     <h1 className={styles.heading}>
//                         Benefits of{" "}
//                         <span className={styles.highlight}>School Management System</span>
//                     </h1>
//                     <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

//                     <ul className={styles.benefitList}>
//                         <li>
//                             <b>Centralized Data Management:</b> Store and access all student, staff,
//                             and academic records in one secure platform.
//                         </li>
//                         <li>
//                             <b>Automated Attendance Tracking:</b> Simplify attendance management with
//                             digital records and real-time monitoring for students and staff.
//                         </li>
//                         <li>
//                             <b>Smart Timetable & Scheduling:</b> Generate and manage class schedules,
//                             exams, and activities with minimal effort.
//                         </li>
//                         <li>
//                             <b>Seamless Communication:</b> Keep parents, teachers, and students
//                             connected with instant notifications via SMS, email, and app.
//                         </li>
//                         <li>
//                             <b>Online Fee & Finance Management:</b> Automate fee collection, generate
//                             receipts, and track financial records with accuracy.
//                         </li>
//                         <li>
//                             <b>Performance & Exam Reports:</b> Generate detailed progress reports,
//                             grades, and analytics for better student evaluation.
//                         </li>
//                         <li>
//                             <b>Customizable Modules:</b> Adapt the system to match the unique
//                             requirements of your school or institution.
//                         </li>
//                         <li>
//                             <b>Enhanced Security:</b> Protect sensitive data with secure access
//                             controls and cloud-based backup.
//                         </li>
//                         <li>
//                             <b>Analytics & Insights:</b> Track academic performance, staff efficiency,
//                             and resource utilization with data-driven reports.
//                         </li>
//                         <li>
//                             <b>Time & Cost Efficiency:</b> Reduce paperwork, save resources, and
//                             increase productivity across all departments.
//                         </li>
//                     </ul>
//                 </motion.div>
//             </div>

//             {/* Dashboard Section */}
//             <Box
//                 sx={{
//                     py: { xs: 8, md: 12 },
//                     background: "linear-gradient(135deg, #EEF5FF 0%, #FFF7E6 100%)",
//                 }}
//             >
//                 <Container>

//                     {/* Section Heading */}
//                     <Typography
//                         sx={{
//                             textAlign: "center",
//                             fontWeight: 800,
//                             fontSize: { xs: "1.9rem", md: "2.6rem" },
//                             mb: 2,
//                             color: "#1E3A8A",
//                         }}
//                     >
//                         School Management Software Dashboards
//                     </Typography>

//                     <Typography
//                         sx={{
//                             textAlign: "center",
//                             maxWidth: 720,
//                             mx: "auto",
//                             mb: 6,
//                             color: "#475569",
//                             fontSize: { xs: "1rem", md: "1.1rem" },
//                             lineHeight: 1.7,
//                         }}
//                     >
//                         Monitor academics, attendance, fees, exams, and staff performance through
//                         powerful real-time dashboards designed for smarter school management.
//                     </Typography>

//                     {/* Dashboard Card */}
//                     <Box
//                         sx={{
//                             background: "#fff",
//                             borderRadius: 4,
//                             boxShadow: "0 20px 40px rgba(15,23,42,0.08)",
//                             p: { xs: 2, md: 4 },
//                         }}
//                     >
//                         <Swiper
//                             modules={[Navigation, Autoplay]}
//                             navigation
//                             autoplay={{ delay: 3500 }}
//                             loop
//                         >
//                             {dashboardData.map((item, idx) => (
//                                 <SwiperSlide key={idx}>
//                                     <Box sx={{ textAlign: "center" }}>

//                                         {/* FULL IMAGE */}
//                                         <Box
//                                             component="img"
//                                             src={item.img}
//                                             alt={item.title}
//                                             sx={{
//                                                 width: "100%",
//                                                 height: { xs: 220, md: 420 },
//                                                 objectFit: "contain",
//                                                 borderRadius: 3,
//                                                 background: "#F8FAFC",
//                                                 mb: 3,
//                                             }}
//                                         />

//                                         {/* CONTENT BELOW IMAGE */}
//                                         <Typography
//                                             sx={{
//                                                 fontSize: { xs: 18, md: 22 },
//                                                 fontWeight: 700,
//                                                 mb: 1,
//                                                 color: "#2563EB",
//                                             }}
//                                         >
//                                             {item.title}
//                                         </Typography>

//                                         <Typography
//                                             sx={{
//                                                 color: "#475569",
//                                                 fontSize: { xs: 14, md: 15 },
//                                                 maxWidth: 720,
//                                                 mx: "auto",
//                                                 lineHeight: 1.6,
//                                             }}
//                                         >
//                                             {item.desc}
//                                         </Typography>

//                                     </Box>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </Box>

//                     {/* CTA Buttons */}
//                     <Box
//                         sx={{
//                             mt: 6,
//                             display: "flex",
//                             justifyContent: "center",
//                             gap: 2,
//                             flexWrap: "wrap",
//                         }}
//                     >
//                         <Button
//                             variant="contained"
//                             sx={{
//                                 background: "linear-gradient(45deg, #2563EB, #3B82F6)",
//                                 color: "#fff",
//                                 px: 4,
//                                 py: 1.3,
//                                 borderRadius: "30px",
//                                 fontWeight: 600,
//                                 textTransform: "none",
//                                 boxShadow: "0 8px 20px rgba(37,99,235,0.35)",
//                                 "&:hover": {
//                                     background: "linear-gradient(45deg, #1E40AF, #2563EB)",
//                                 },
//                             }}
//                             onClick={() =>
//                                 window.open("https://pjsofttech.in/superadminclient", "_blank")
//                             }
//                         >
//                             Explore Live Dashboards
//                         </Button>

//                         <Button
//                             variant="outlined"
//                             sx={{
//                                 borderColor: "#F59E0B",
//                                 color: "#F59E0B",
//                                 px: 4,
//                                 py: 1.3,
//                                 borderRadius: "30px",
//                                 fontWeight: 600,
//                                 textTransform: "none",
//                                 "&:hover": {
//                                     background: "#F59E0B",
//                                     color: "#fff",
//                                     boxShadow: "0 8px 20px rgba(245,158,11,0.35)",
//                                 },
//                             }}
//                             onClick={() =>
//                                 window.open("https://pjsofttech.com/contact-page", "_blank")
//                             }
//                         >
//                             Get Free Demo Account
//                         </Button>
//                     </Box>

//                 </Container>
//             </Box>

//             {/*  School Management and AIS Section  */}
//             <Box sx={{ py: { xs: 6, md: 10 }, background: "#f9fafb" }}>
//                 <Container>
//                     {/* FEATURES */}
//                     {featureData.map((item, index) => (
//                         <Grid
//                             container
//                             spacing={4}
//                             key={index}
//                             alignItems="center"
//                             sx={{ mb: 10 }}
//                             direction={index % 2 === 0 ? "row" : "row-reverse"}
//                         >
//                             {/* IMAGE */}
//                             <Grid item xs={12} md={5}>
//                                 <Box
//                                     component="img"
//                                     src={item.img}
//                                     alt={item.title}
//                                     sx={{
//                                         width: "100%",
//                                         maxHeight: 240,
//                                         objectFit: "contain"
//                                     }}
//                                 />
//                             </Grid>

//                             {/* CONTENT */}
//                             <Grid item xs={12} md={7}>
//                                 <Typography
//                                     variant="h5"
//                                     onClick={() => {
//                                         if (item.title === "Admission Management System") {
//                                             window.open(
//                                                 "https://pjsofttech.com/admission-management-system",
//                                                 "_blank"
//                                             );
//                                         }
//                                     }}
//                                     sx={{
//                                         fontSize: { xs: "1.8rem", md: "2.5rem" },
//                                         fontWeight: 700,
//                                         textAlign: "center",
//                                         mb: 6,
//                                         color: "#1976d2",
//                                         letterSpacing: "0.4px",
//                                         cursor: "pointer",
//                                         "&:hover": {
//                                             textDecoration: "underline"
//                                         }
//                                     }}
//                                 >
//                                     {item.title}
//                                 </Typography>


//                                 {/* PARAGRAPH 1 */}
//                                 <Typography sx={{ color: "#444", mb: 2, lineHeight: 1.8 }}>
//                                     {item.title} module helps schools manage critical operations in a
//                                     structured and digital manner. It reduces manual workload, ensures
//                                     data accuracy, and provides real-time access to essential
//                                     information, allowing administrators and staff to work more
//                                     efficiently.
//                                 </Typography>

//                                 {/* PARAGRAPH 2 */}
//                                 <Typography sx={{ color: "#555", mb: 3, lineHeight: 1.8 }}>
//                                     With automation, centralized data storage, and smart reporting
//                                     features, this module enhances decision-making and improves
//                                     communication between management, teachers, students, and parents.
//                                     It plays a key role in building a connected and future-ready
//                                     education ecosystem.
//                                 </Typography>

//                                 {/* POINTS */}
//                                 {item.points.map((p, i) => (
//                                     <Typography
//                                         key={i}
//                                         sx={{
//                                             display: "flex",
//                                             alignItems: "center",
//                                             mb: 1,
//                                             fontSize: "0.95rem"
//                                         }}
//                                     >
//                                         ✔ {p}
//                                     </Typography>
//                                 ))}

//                                 <Button
//                                     sx={{
//                                         mt: 3,
//                                         fontWeight: "bold",
//                                         color: "#1d4ed8"
//                                     }}
//                                     onClick={() => window.open(item.link)}
//                                 >
//                                     Explore Feature →
//                                 </Button>
//                             </Grid>
//                         </Grid>
//                     ))}

//                 </Container>
//             </Box>

//             {/* Subfeatures Section */}
//             <Box sx={{ py: 8, background: "#fafdff" }}>
//                 <Container>
//                     <Typography
//                         variant="h4"
//                         fontWeight="bold"
//                         textAlign="center"
//                         color="#3498DB"
//                         mb={6}
//                         sx={{
//                             "& span::after": {
//                                 content: '""',
//                                 display: "block",
//                                 width: "100%",
//                                 height: "4px",
//                                 marginTop: "4px",
//                             },
//                         }}
//                     >
//                         <span style={{ display: "inline-block", position: "relative" }}>
//                             Powerful Sub Features
//                         </span>{" "}
//                         of School Management System
//                     </Typography>

//                     <Grid container spacing={4}>
//                         {subfeatures.map((item, idx) => (
//                             <Grid item xs={12} sm={6} key={item.title}>
//                                 <motion.div
//                                     initial={{ opacity: 0, y: 40, scale: 0.95 }}
//                                     whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                                     transition={{
//                                         delay: idx * 0.08,
//                                         duration: 0.5,
//                                         type: "spring",
//                                         bounce: 0.3,
//                                     }}
//                                     viewport={{ once: true, amount: 0.2 }}
//                                     style={{
//                                         display: "flex",
//                                         alignItems: "center",
//                                         background: "#fff",
//                                         borderRadius: 16,
//                                         boxShadow: "0 4px 24px rgba(52,152,219,0.07)",
//                                         padding: 24,
//                                         gap: 24,
//                                         minHeight: 120,
//                                         borderLeft: `6px solid ${theme.palette.secondary.main}`,
//                                         transition: "box-shadow 0.3s",
//                                     }}
//                                 >
//                                     <motion.img
//                                         src={item.image}
//                                         alt={item.title}
//                                         initial={{ rotate: -10 }}
//                                         whileHover={{ rotate: 10, scale: 1.1 }}
//                                         transition={{
//                                             type: "spring",
//                                             stiffness: 200,
//                                             damping: 10,
//                                         }}
//                                         style={{
//                                             width: 64,
//                                             height: 64,
//                                             objectFit: "contain",
//                                             flexShrink: 0,
//                                             background: "#f5faff",
//                                             borderRadius: "50%",
//                                             padding: 8,
//                                             boxShadow: "0 2px 8px rgba(52,152,219,0.08)",
//                                         }}
//                                     />
//                                     <div>
//                                         <Typography
//                                             variant="h6"
//                                             fontWeight="bold"
//                                             color="primary"
//                                             mb={0.5}
//                                             sx={{ fontSize: 20 }}
//                                         >
//                                             {item.title}
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary" sx={{ fontSize: 16 }}>
//                                             {item.detail}
//                                         </Typography>
//                                     </div>
//                                 </motion.div>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Container>
//             </Box>

//         </ThemeProvider>
//     );
// };

// export default SchoolManagementSystem;


import React, { useEffect, useState, useRef } from "react";
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
    Typography,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    Chip,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import phone from "../images/student-info-detail.png";
import heroImg from "../images/school gif.gif";
import dashboard1 from "../images/SCHOOL-DASHBOARD 1.png";
import dashboard2 from "../images/Academy/Standard Dashboard 2.png";
import dashboard3 from "../images/Academy/Caste Category Dashboard 3.png";
import schoolFeatureImage from "../images/school-management-software.png";
import studentImage from "../images/student.png";
import attendanceImage from "../images/attendance.png";
import feesImage from "../images/fees.png";
import examinationImage from "../images/online-examination.jpg";
import staffImage from "../images/Employee Dashboard 1.png";
import transportImage from "../images/hostel-dashboard.png";
import mobileImage from "../images/mobile.png";
import styles from "./SchoolNewManagementSystem.module.css";
import CampaignIcon from "@mui/icons-material/Campaign";
import ClassIcon from "@mui/icons-material/Class";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import EventIcon from "@mui/icons-material/Event";
import BadgeIcon from "@mui/icons-material/Badge";
import InventoryIcon from "@mui/icons-material/Inventory";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LanguageIcon from "@mui/icons-material/Language";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import QuizIcon from "@mui/icons-material/Quiz";
import WorkIcon from "@mui/icons-material/Work";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { FaFileAlt, FaBullseye, FaClock, FaChartLine } from "react-icons/fa";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";


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

const needdata = [
    {
        title: "Events & Programs Management",
        desc: "Plan and manage school events, annual functions, and programs with scheduling and notifications.",
        img: schoolFeatureImage.src
    },
    {
        title: "ID Card & Visitor Pass Generator",
        desc: "Generate student/staff ID cards and visitor passes with secure entry tracking.",
        img: studentImage.src
    },
    {
        title: "Sales & Project Management",
        desc: "Track school-related projects, sales activities, and project progress efficiently.",
        img: feesImage.src
    },
    {
        title: "Test Series & E-Book Classroom",
        desc: "Create test series, upload e-books, and manage digital learning content for students.",
        img: attendanceImage.src
    },
    {
        title: "Study Point Management",
        desc: "Manage coaching classes, study centers, batches, and student progress.",
        img: examinationImage.src
    },
    {
        title: "Dynamic Website Management",
        desc: "Manage school website content, announcements, and updates easily.",
        img: schoolFeatureImage.src
    },
    {
        title: "Library, Asset & Hostel",
        desc: "Manage library books, transport routes, and hostel student records.",
        img: transportImage.src
    },
    {
        title: "Fees & Online Payment , Inventory Management",
        desc: "Collect fees online, generate receipts, and track payment history securely.",
        img: feesImage.src
    },
    {
        title: "Employee & Staff Management",
        desc: "Manage staff records, attendance, payroll, and performance tracking.",
        img: staffImage.src
    }
];

const groups = [
    "Lead",
    "Inventory",
    "Admissions",
    "Academics",
    "Employee",
    "Classrooms",
    "Attendance",
    "Enrollment",
    "Payroll",
    "Managements",
    "Communications",
    "Dashboard",
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
        group: "Enrollment",
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
        group: "Academics",
    },
    {
        id: 77,
        title: <span>Teacher Management</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/teacher-3d-icon-png-download-11785877.png",
        group: "Academics",
    },
    {
        id: 78,
        title: <span>Classroom Management</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/online-classroom-3d-icon-png-download-10553618.png",
        group: "Academics",
    },
    {
        id: 79,
        title: <span>Timetable Management</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/class-timetable-3d-icon-png-download-5074039.png",
        group: "Academics",
    },
    {
        id: 80,
        title: <span>Fees Management</span>,
        image:
            "https://png.pngtree.com/png-clipart/20250217/original/pngtree-budgeting-3d-icon-financial-planning-symbol-for-expense-management-and-money-png-image_20452281.png",
        group: "Academics",
    },
    {
        id: 81,
        title: <span>Admission Management</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/college-3d-icon-png-download-6560104.png",
        group: "Academics",
    },
    {
        id: 82,
        title: <span>Standard/Medium/Division</span>,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK36-V1folEYppcuPpW--f17f2Lnn34Ejr-w&s",
        group: "Academics",
    },
    {
        id: 83,
        title: <span>Library Management</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/digital-library-3d-icon-png-download-5728128.png",
        group: "Academics",
    },
    {
        id: 84,
        title: <span>Subject Management</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/language-3d-icon-png-download-8654457.png",
        group: "Academics",
    },
    {
        id: 85,
        title: <span>Timetable Generation</span>,
        image: "https://cdn-icons-png.flaticon.com/512/4695/4695003.png",
        group: "Classrooms",
    },
    {
        id: 86,
        title: <span>Institution Type </span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/school-3d-icon-png-download-5175980.png",
        group: "Classrooms",

    },
    {
        id: 87,
        title: <span>Classroom Medium </span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/virtual-classroom-3d-icon-png-download-12809800.png",
        group: "Classrooms",

    },
    {
        id: 88,
        title: <span>Classroom Division </span>,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcQlQ62OV7rzbZypmNnK9EIYPp3kknW7aFA&s",
        group: "Classrooms",

    },
    //   {
    //     id: 89,
    //     title: <span>Academic Year </span>,
    //     image:
    //       "https://media.istockphoto.com/id/1359134622/vector/calendar-assignment-and-clock-icon-schedule.jpg?s=612x612&w=0&k=20&c=A27qJTLmBQ-xMds81ABYjdu6gRvHnyen4BNAwcPs3OY=",
    //     group: "Classrooms",
    //   },
    {
        id: 90,
        title: <span>Batch Name</span>,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFzKmV4WjbFDgGQOKG2w2akjT94b-dqxF7zg&s",
        group: "Classrooms",
    },
    {
        id: 91,
        title: <span>Classroom Time Scheduling</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/man-is-doing-time-management-3d-icon-png-download-7408561.png",
        group: "Classrooms",
    },
    {
        id: 92,
        title: <span>Academic Year</span>,
        image:
            "https://img.freepik.com/premium-photo/3d-icon-study-schedule-3d-illustration-3d-element-3d-rendering-graphic-elements-design-element_808921-804.jpg",
        group: "Classrooms",
    },
    {
        id: 93,
        title: <span>Centralized Course</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/online-course-3d-icon-png-download-10553613.png",
        group: "Classrooms",
    },
    {
        id: 94,
        title: <span>Classroom Subject</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/history-subject-3d-icon-png-download-8842446.png",
        group: "Classrooms",
    },
    {
        id: 95,
        title: <span>Batch Management</span>,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROVzb15kQnxqr_0dBaQBbWw5rcR9VYSy_8eQ&s",
        group: "Attendance",
    },
    {
        id: 96,
        title: <span>Academic Year</span>,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY4jb3W4JvFMeIATvNF7E0oGVah7152Ctv1g&s",
        group: "Attendance",
    },
    {
        id: 97,
        title: <span>Attendance Management</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/fingerprint-lock-3d-icon-png-download-7358876.png",
        group: "Attendance",
    },
    {
        id: 98,
        title: <span> Classroom Medium</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/classroom-3d-icon-png-download-10350051.png",
        group: "Attendance",
    },
    {
        id: 99,
        title: <span>Course Management</span>,
        image:
            "https://static.vecteezy.com/system/resources/thumbnails/013/168/998/small_2x/online-course-3d-render-png.png",
        group: "Attendance",
    },
    {
        id: 100,
        title: <span>Time Scheduling</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/schedule-time-3d-icon-png-download-4995379.png",
        group: "Attendance",
    },
    {
        id: 101,
        title: <span>Attendance Summary </span>,
        image:
            "https://www.shutterstock.com/image-vector/time-management-3d-illustration-set-600nw-2262043667.jpg",
        group: "Attendance",
    },
    {
        id: 102,
        title: <span>Student Management</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/feedback-and-selfassessment-3d-icon-png-download-9169526.png",
        group: "Enrollment",
    },
    {
        id: 103,
        title: <span>Student Dashboard</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/teacher-dashboard-3d-icon-png-download-10553607.png",
        group: "Enrollment",
    },
    {
        id: 104,
        title: <span>Student Exam Report</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/exam-paper-3d-icon-png-download-8689250.png",
        group: "Enrollment",
    },
    {
        id: 105,
        title: <span>Classroom Management </span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/online-classroom-3d-icon-png-download-10553618.png",
        group: "Enrollment",
    },
    {
        id: 106,
        title: <span>Time Table Management</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/timetable-3d-icon-png-download-3369788.png",
        group: "Enrollment",
    },

    {
        id: 107,
        title: <span>Attendance Management</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/attendance-3d-icon-png-download-11245305.png",
        group: "Enrollment",
    },
    {
        id: 108,
        title: <span>Teacher Management</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/teacher-3d-icon-png-download-11785877.png",
        group: "Enrollment",
    },
    {
        id: 109,
        title: <span>Academic Year</span>,
        image:
            "https://png.pngtree.com/png-vector/20250226/ourmid/pngtree-user-friendly-3d-educational-app-interface-design-vector-png-image_15598649.png",
        group: "Enrollment",
    },
    {
        id: 110,
        title: <span>Student Profile</span>,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SHupunKm-giRTSbAVSXxnwE9JsS1tW6O1w&s",
        group: "Enrollment",
    },
    {
        id: 111,
        title: <span>Subject Management</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/student-profile-3d-icon-png-download-8824922.png",
        group: "Enrollment",
    },
    {
        id: 112,
        title: <span>Standard/Medium/Division</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/standards-3d-icon-png-download-5431164.png",
        group: "Enrollment",
    },
    {
        id: 113,
        title: <span>Fees By Month Dashboard</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/blog-3d-icon-png-download-9617430.png",
        group: "Payroll",
    },
    {
        id: 114,
        title: <span>Fees Collected Payment Mode Dashboard</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/payment-3d-icon-png-download-5272924.png",
        group: "Payroll",
    },
    {
        id: 115,
        title: <span>Collected Fees By Year Dashboard</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-icon-png-download-7577977.png",
        group: "Payroll",
    },
    {
        id: 116,
        title: <span>Collected Fees By Month Dashboard</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/online-expensive-report-3d-icon-png-download-5727732.png?f=webp",
        group: "Payroll",
    },
    {
        id: 117,
        title: <span>Fees Revenue by Bank Dashboard</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/online-expensive-report-3d-icon-png-download-5727732.png?f=webp",
        group: "Payroll",
    },
    {
        id: 118,
        title: <span>Student Fee Management</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/student-loan-payment-3d-icon-png-download-12387215.png",
        group: "Payroll",
    },
    {
        id: 119,
        title: <span>Automated Lead Tracking</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-10522938.png",
        group: "Payroll",
    },
    {
        id: 120,
        title: <span>Daily / Monthly / Yearly Lead Dashboard</span>,
        image:
            "https://img.freepik.com/premium-vector/calendar-3d-icon-day-month-year-time-concept-time-management-schedule-appointment-planning-element_313242-1365.jpg",
        group: "Payroll",
    },
    {
        id: 121,
        title: <span>Course/Source Wise Lead Dashboard</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-icon-png-download-3930409.png",
        group: "Lead",
    },
    {
        id: 122,
        title: <span>Lead Generate/ Feedback QR Code</span>,
        image:
            "https://static.vecteezy.com/system/resources/previews/019/549/663/non_2x/qr-code-with-3d-icon-illustration-vector.jpg",
        group: "Lead",
    },

    {
        id: 123,
        title: <span>Lead ToDo Status</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/lead-conversion-3d-icon-png-download-3930394.png",
        group: "Lead",
    },
    {
        id: 124,
        title: <span>Lead Addition via QR Code</span>,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUSyJcQ2GGKlaVtJx7PfrhE3Z9d9NI1Y7fA&s",
        group: "Lead",
    },
    {
        id: 125,
        title: <span>Lead Data Download / Upload CSV</span>,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwj2YOZWbQWGcP4olfjTcxdSupGQTTmNWFVQ&s",
        group: "Lead",
    },
    {
        id: 126,
        title: <span>Lead Course / Source Management</span>,
        image:
            "https://img.freepik.com/premium-photo/marketing-advertisement-3d-icon_612313-264.jpg?semt=ais_hybrid&w=740&q=80",
        group: "Lead",
    },
    {
        id: 127,
        title: <span>Lead Follow-Up Reminder</span>,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_lW1Uy3LphYtywWpgqHPxc5H-Uhl2aYuTmA&s",
        group: "Lead",
    },
    {
        id: 128,
        title: <span>Lead Management Mobile App</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-11035008.png",
        group: "Lead",
    },
    {
        id: 129,
        title: <span>Income, Expense & Saving Comparison Dashboard</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/online-expensive-report-3d-icon-png-download-5727732.png",
        group: "Inventory",
    },
    {
        id: 130,
        title: <span>Income / Expense By Category Dashboard</span>,
        image:
            "https://thumbs.dreamstime.com/b/ai-generated-image-content-title-d-icon-illustrating-financial-expense-management-white-background-d-354620019.jpg",
        group: "Inventory",
    },
    {
        id: 131,
        title: <span>Vendor and Supplier Management</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/wholesaler-3d-icon-png-download-9628101.png",
        group: "Inventory",
    },
    {
        id: 132,
        title: <span>Payment Integration</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/payment-gateway-3d-icon-png-download-9336135.png",
        group: "Inventory",
    },
    {
        id: 133,
        title: <span>User/Category Management</span>,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOewq0JKzjU_7N3BmhEhXGzwK5AcDyHT3vSw&s",
        group: "Inventory",
    },
    {
        id: 134,
        title: <span> GST / TDS Compliance</span>,
        image:
            "https://cdn.iconscout.com/icon/free/png-256/free-tds-icon-svg-download-png-1538188.png",
        group: "Inventory",
    },
    {
        id: 135,
        title: <span>Inventory List Report</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/inventory-3d-icon-png-download-11254652.png",
        group: "Inventory",
    },
    {
        id: 136,
        title: <span>Smart HR Operations</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/hr-recruitment-3d-icon-png-download-12966631.png",
        group: "Employee",
    },
    {
        id: 137,
        title: <span>Employee Attendance Dashboard</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/attendance-3d-icon-png-download-11245305.png",
        group: "Employee",
    },
    {
        id: 138,
        title: <span>Employee Salary Comparison Dashboard ( Daily / Month / Year ) </span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/employee-salary-11271184-9075531.png?f=webp",
        group: "Employee",
    },
    {
        id: 139,
        title: <span>Employee Attendance with face Recognition</span>,
        image:
            "https://cdn.sanity.io/images/4y5gb0f2/production/bb51c7e3cb1807fdf2c42c480184c98c1c42e19e-434x384.svg",
        group: "Employee",
    },
    {
        id: 140,
        title: <span>Employee Salary & Leave Report</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/payroll-3d-icon-png-download-13251083.png",
        group: "Employee",
    },

    {
        id: 141,
        title: <span>Employee Salary Suummary Report</span>,
        image:
            "https://img.freepik.com/premium-vector/flat-design-icon-salary-slip_362714-6064.jpg",
        group: "Employee",
    },

    {
        id: 142,
        title: <span>Employee Attendance App</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/employee-list-3d-icon-png-download-11664648.png",
        group: "Employee",
    },

    {
        id: 143,
        title: <span>Employee Management Mobile App</span>,
        image:
            "https://thumbs.dreamstime.com/b/staff-management-d-icon-high-quality-design-ui-ux-apps-websites-digital-projects-png-vector-format-358577246.jpg",
        group: "Employee",
    },

    {
        id: 144,
        title: <span>Employee Offer / Joining / Increment / Experience Letter</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/employee-resume-3d-icon-png-download-9102109.png",
        group: "Employee",
    },

    {
        id: 145,
        title: <span>Employee Salary & Leave Report</span>,
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/payroll-3d-icon-png-download-8825113.png",
        group: "Employee",
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
        desc: "Grow with your institution – from small schools to large networks",
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
        desc: "Access your school data securely from anywhere, anytime with cloud technology.",
        icon: <FaCloud />,
    },

];;

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
        title: "Student Profiles",
        detail: "Maintain detailed records of each student including academics, attendance, and health.",
        image: studentImage.src,
    },
    {
        id: 2,
        title: "Attendance Automation",
        detail: "Automated daily attendance with instant alerts for absentees.",
        image: attendanceImage.src,
    },
    {
        id: 3,
        title: "Exam Scheduling",
        detail: "Plan, schedule, and manage exams with automated result publishing.",
        image: examinationImage.src,
    },
    {
        id: 4,
        title: "Fee Management",
        detail: "Track fee payments, dues, and generate receipts easily.",
        image: feesImage.src,
    },
    {
        id: 5,
        title: "Parent Portal",
        detail: "Parents can view student progress, attendance, and communicate with teachers.",
        image: studentImage.src,
    },
    {
        id: 6,
        title: "Homework & Assignments",
        detail: "Assign, submit, and review homework digitally.",
        image: schoolFeatureImage.src,
    },
    {
        id: 7,
        title: "Transport Management",
        detail: "Manage bus routes, stops, and student transport details.",
        image: transportImage.src,
    },
    {
        id: 8,
        title: "Library Management",
        detail: "Track issued/returned books and manage library inventory.",
        image: schoolFeatureImage.src,
    },
    {
        id: 9,
        title: "Staff Management",
        detail: "Manage teacher and staff profiles, leaves, and payroll.",
        image: staffImage.src,
    },
    {
        id: 10,
        title: "Mobile Access",
        detail: "Access all features from any device, anywhere.",
        image: mobileImage.src,
    },
];

const dashboardData = [
    {
        title: "Student Classroom Dashboard",
        desc: "This dashboard provides a classroom-wise overview of student distribution across the academy. It helps management analyze classroom strength, identify overcrowded or underutilized classrooms, and plan seating and resources efficiently.",
        img: dashboard1,
    },
    {
        title: "Student Standard Dashboard",
        desc: "This dashboard displays a standard-wise breakdown of students from lower to higher classes. It allows easy comparison of student strength across standards and supports academic planning and workload distribution.",
        img: dashboard2,
    },
    {
        title: "Student Count by Caste Category Dashboard",
        desc: "This dashboard shows the distribution of students based on caste categories such as General, OBC, SC, and ST. It supports diversity analysis, government reporting, and category-wise student tracking.",
        img: dashboard3,
    }

];

const whycardSection = [
    {
        title: "Clean Interface",
        desc: "Simple, intuitive and user-friendly interface designed for administrators, teachers, staff and parents. Anyone can learn and use the system quickly without technical training.",
        icon: <FaDesktop />,
    },
    {
        title: "Real-time Updates",
        desc: "Get instant updates for attendance, homework, fees, exams and announcements. All information is updated in real time across the system.",
        icon: <FaSyncAlt />,
    },
    {
        title: "Secure & Cloud-enabled",
        desc: "Enterprise-grade security with cloud-based infrastructure ensures your school data is safe, encrypted and accessible anytime from anywhere.",
        icon: <FaShieldAlt />,
    },
    {
        title: "Ideal for Growing Schools",
        desc: "Designed to scale with your institution. Whether you have 200 students or 5000+, the system adapts easily to your growth.",
        icon: <FaExpandArrowsAlt />,
    },
    {
        title: "Responsive Support",
        desc: "Our dedicated support team is always ready to help with onboarding, training and technical assistance to ensure smooth operations.",
        icon: <FaHeadset />,
    },
    {
        title: "Fully Integrated",
        desc: "All modules including admissions, academics, fees, attendance, exams and reports work together seamlessly in one unified platform.",
        icon: <FaPuzzlePiece />,
    },

    // ✅ NEW DATA ADDED
    {
        title: "Centralised Student Database",
        desc: "All student records stored in one secure system including academic profile, fee status, attendance and parent details. No scattered files or manual records.",
        icon: <FaDatabase />,
    },
    {
        title: "One Stop Solution",
        desc: "Admissions, academics, fees, exams, reports and administration managed in one platform. No multiple vendors, no data duplication, lower operational costs and faster workflows.",
        icon: <FaLayerGroup />,
    },
    {
        title: "Automated Communication",
        desc: "Send instant alerts through Notifications, SMS, WhatsApp and Email for attendance, events, exams, fees and report updates to improve parent engagement.",
        icon: <FaBell />,
    },
    {
        title: "Dynamic Reports & Dashboard",
        desc: "Access real-time visual reports for fee trends, admission analytics, attendance patterns, academic performance and lead follow-up insights.",
        icon: <FaChartBar />,
    },
    {
        title: "Role-Based Access Control",
        desc: "Assign secure user roles like Admin, Principal, Teacher, Accountant, Parent or Student with specific permissions to view, add, edit or approve data.",
        icon: <FaUserLock />,
    },
    {
        title: "Digital & Next-Gen School",
        desc: "Enable paperless admissions, smooth administration, parent & teacher portals, digital teaching tools and performance tracking for future-ready education.",
        icon: <FaSchool />,
    },
    {
        title: "NEP 2020 Ready School",
        desc: "Supports competency-based learning, student progress tracking, digital assessments, lesson planning and real-time academic updates aligned with NEP 2020.",
        icon: <FaBookOpen />,
    }
];

const faqData = [
    {
        question: "What is School Management CRM?",
        answer:
            "A School Management CRM helps schools manage student data, communication, admissions, academics, and administration digitally. PJSoftTech School CRM provides a single platform to manage the entire school lifecycle efficiently and securely.",
    },
    {
        question: "How does PJSoftTech School CRM help schools?",
        answer:
            "PJSoftTech School CRM automates daily operations like attendance, fees, exams, results, notifications, and reports, reducing manual work and improving overall productivity.",
    },
    {
        question: "Is PJSoftTech School CRM suitable for all types of schools?",
        answer:
            "Yes, PJSoftTech School CRM is suitable for CBSE, ICSE, and State Board schools, English and Marathi medium schools, and scales easily from small schools to large institutions.",
    },
    {
        question: "How does PJSoftTech School CRM improve parent communication?",
        answer:
            "Parents receive real-time updates on attendance, fees, homework, exams, and notices through the mobile app or SMS, ensuring transparency and stronger parent trust.",
    },
    {
        question: "Is the data safe in PJSoftTech School CRM?",
        answer:
            "Yes, PJSoftTech School CRM uses secure cloud hosting, role-based access control, and regular data backups to keep school data private and protected.",
    },
    {
        question: "Can teachers easily use PJSoftTech School CRM?",
        answer:
            "Yes, the system is user-friendly. Teachers can mark attendance, upload homework, enter marks, and view class reports with minimal training.",
    },
    {
        question: "Does PJSoftTech School CRM support NEP 2020?",
        answer:
            "Yes, PJSoftTech School CRM supports NEP 2020 by enabling digital records, continuous assessments, holistic student tracking, and technology-driven governance.",
    },
    {
        question: "Can fees and payments be managed through PJSoftTech School CRM?",
        answer:
            "Yes, the system includes online fee collection, automatic receipts, pending fee reminders, and detailed fee reports to improve cash flow and reduce fee leakage.",
    },
    {
        question: "Is PJSoftTech School CRM mobile-friendly?",
        answer:
            "Yes, PJSoftTech School CRM works smoothly on mobile phones, tablets, laptops, and desktop systems, allowing access anytime and anywhere.",
    },
    {
        question: "How quickly can a school start using PJSoftTech School CRM?",
        answer:
            "Schools can go live within a few days with complete setup support, data migration, and basic training provided by the PJSoftTech team.",
    },
];


const featureSection = {
    CRM: [
        {
            title: "Lead & Communication Management",
            desc: "Smart system to manage enquiries, leads, and institutional communication.",
            icon: <CampaignIcon />,
            points: [
                "Lead Tracking & Management",
                "Follow-up Reminders",
                "SMS, Email & WhatsApp Integration",
                "Call History Tracking",
                "Lead Source Analysis",
                "Auto Lead Assignment",
                "Lead to Admission Conversion",
            ],
        },
        {
            title: "Sales & Project Management",
            desc: "Manage sales leads, projects, and client workflows efficiently.",
            icon: <WorkIcon />,
            points: [
                "Sales Lead Management",
                "Client Follow-ups",
                "Project Task Assignment",
                "Task Deadline Tracking",
                "Team Productivity Reports",
                "Project Status Monitoring",
                "Invoice & Billing Support",
            ],
        },
    ],

    ERP: [
        {
            title: "Admission & Fee Management",
            desc: "Automated admission workflow with secure fee tracking.",
            icon: <SchoolIcon />,
            points: [
                "Online Enquiry to Admission Flow",
                "Admission Form Management",
                "Fee Structure & Installments",
                "Online & Offline Payments",
                "Pending Fee Alerts",
                "Scholarship & Discount Handling",
            ],
        },
        {
            title: "Classroom Management",
            desc: "Digitally manage classrooms and academic activities.",
            icon: <ClassIcon />,
            points: [
                "Class & Section Setup",
                "Subject & Teacher Allocation",
                "Student Attendance",
                "Digital Timetable",
                "Teacher Workload Management",
            ],
        },
        {
            title: "Employee / Staff Management",
            desc: "Complete HR system for staff records and payroll.",
            icon: <PeopleIcon />,
            points: [
                "Staff Profile Management",
                "Attendance & Leave Tracking",
                "Biometric Attendance Support",
                "Payroll & Salary Slip Generation",
            ],
        },
        {
            title: "Inventory & Asset Management",
            desc: "Track and manage institutional assets and stock.",
            icon: <InventoryIcon />,
            points: [
                "Stock & Asset Tracking",
                "Vendor & Purchase Management",
                "Low Stock Alerts",
                "Inventory Audit Reports",
            ],
        },
        {
            title: "Hostel & Library Management",
            desc: "Efficient management of hostel and library resources.",
            icon: <LocalLibraryIcon />,
            points: [
                "Hostel Room Allocation",
                "Library Book Issue & Return",
                "Fine & Due Tracking",
            ],
        },
        {
            title: "Visitor & Event Management",
            desc: "Track visitors and manage events digitally.",
            icon: <EventIcon />,
            points: [
                "Visitor Entry Logs",
                "Event Scheduling",
                "Participant Management",
            ],
        },
        {
            title: "Certificate & ID Card Management",
            desc: "Generate professional certificates instantly.",
            icon: <BadgeIcon />,
            points: [
                "Certificate Templates",
                "Bulk Certificate Generation",
                "QR Code Verification",
            ],
        },
        {
            title: "School Bus & Transport Management",
            desc: "Safe and organized transport management.",
            icon: <DirectionsBusIcon />,
            points: [
                "Bus Route Management",
                "Driver & Vehicle Records",
                "Transport Fee Management",
            ],
        },
        {
            title: "Shipment Management",
            desc: "Track shipments and logistics efficiently.",
            icon: <LocalShippingIcon />,
            points: [
                "Shipment Tracking",
                "Dispatch Status",
                "Delivery Reports",
            ],
        },
    ],

    LMS: [
        {
            title: "StudyPoint Management",
            desc: "Learning management system for coaching institutes.",
            icon: <MenuBookIcon />,
            points: [
                "Course & Batch Management",
                "Student Enrollment",
                "Study Material Upload",
                "Performance Tracking",
            ],
        },
        {
            title: "Test Series & E-Book",
            desc: "Online exam system with digital content.",
            icon: <QuizIcon />,
            points: [
                "Online Test Series",
                "Instant Results",
                "Rank & Merit Lists",
                "E-Book Library",
            ],
        },
    ],

    COMMUNICATION: [
        {
            title: "Portal & Mobile Apps",
            desc: "Dedicated portals and mobile apps.",
            icon: <SmartphoneIcon />,
            points: [
                "Student & Parent Portals",
                "Mobile App Access",
                "Real-time Notifications",
            ],
        },
        {
            title: "Dynamic Website",
            desc: "Fully manageable institutional website.",
            icon: <LanguageIcon />,
            points: [
                "Dynamic Pages",
                "Notice Board",
                "Event & News Section",
                "SEO Friendly",
            ],
        },
    ],
};

const SchoolManagementSystem = () => {
    const [selectedGroup, setSelectedGroup] = useState("Dashboard");
    const [activeTab, setActiveTab] = useState("ERP");
    const tabs = ["CRM", "ERP", "LMS", "COMMUNICATION"];
    const scrollRef = useRef(null);
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

                        {/* LEFT CONTENT */}
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
                                School Management <span style={{ color: "#FFBF00" }}>System</span>
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
                            >
                                <b>Digitize, organize, and empower</b> your entire school administration
                                with our advanced <b>School Management System</b>. Designed to simplify
                                operations, it provides a centralized, secure, and user-friendly
                                platform for schools of all sizes. From admissions to graduation,
                                every academic and administrative process can be managed seamlessly.
                                Effortlessly handle{" "}
                                <b>
                                    student records, staff management, attendance tracking, timetable
                                    scheduling, fee collection, examinations, and performance reports
                                </b>
                                —all within a single system.
                            </Typography>

                            {/* Chips */}
                            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 3 }}>
                                <Chip label="Centralized Data" color="primary" sx={{ color: "white", fontWeight: "bold" }} />
                                <Chip label="Parent Portal" color="secondary" sx={{ color: "white", fontWeight: "bold" }} />
                                <Chip label="24x7 Support" sx={{ background: "#e1bee7", color: "white", fontWeight: "bold" }} />
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

                        {/* RIGHT IMAGE */}
                        <Grid item xs={12} md={6} data-aos="fade-left">
                            <motion.img
                                src={heroImg.src}
                                alt="School Management"
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

            {/* Why is School Management Software */}
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
                        Why is School Management Software a Smart Investment?
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
                        Investing in School Management Software isn’t just about going digital — it’s about making your institution smarter, faster, and future-ready. Whether you run a school, college, or coaching institute, here’s why this investment pays off big time.
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
                <Container maxWidth="lg">
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

                    <Grid container spacing={3} justifyContent="center">
                        {/* ADMIN LOGIN */}
                        <Grid item xs={12} sm={6} md={4}>
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
                        <Grid item xs={12} sm={6} md={4}>
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

                        {/* BRANCH LOGIN */}
                        <Grid item xs={12} sm={6} md={4}>
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
                                    Parent Teacher Login
                                </Typography>

                                <Typography sx={{ fontSize: 15, mb: 1 }}>
                                    <strong>URL:</strong><br />
                                    pjsofttech.in/superadminclient
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

            {/* Want To See Data  */}
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
                        maxWidth: "1180px",
                        mx: "auto",
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 5,
                    }}
                >
                    {/* Left Content */}
                    <Box sx={{ maxWidth: "700px" }}>
                        <Typography
                            sx={{
                                fontSize: { xs: "22px", sm: "28px", md: "34px" },
                                fontWeight: 700,
                                lineHeight: 1.4,
                                mb: 2,
                                whiteSpace: "nowrap",
                            }}
                        >
                            🚀 Is Your School Ready to Go Smart, Digital & Next-Gen?
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: { xs: "16px", sm: "18px" },
                                opacity: 0.95,
                                mb: 3,
                            }}
                        >
                            Build a complete Digital Academic Ecosystem with smart automation,
                            hassle-free communication, and NEP 2020–aligned processes.
                            Stay ahead by aligning technology with education goals — not paperwork.
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight: 500,
                                mb: 2,
                            }}
                        >
                            🧩 One-Stop Solution: <b>PJSoftTech Next-Gen School Management Software</b>
                        </Typography>

                        <Typography sx={{ fontSize: "18px", opacity: 0.95, fontWeight: 500, }}>
                            🎓 Academics | 💰 Fees | 👨‍👩‍👧 Parent Communication | 👩‍🏫 Staff | 📊 Reports
                            — All Secure, Scalable & Future-Ready.
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
                            Use Free Software
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
                            Book a Demo
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

            {/* Manage Your School */}
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
                        Everything You Need to Manage Your School
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
            {/* <div className={styles.container2}>
                <div className={styles.phoneMockup} data-aos="fade-right">
                    <img
                        className={styles.img22}
                        src={phone}
                        alt="School Management Mobile"
                    />
                </div>

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
                        <span className={styles.highlight}>School Management System</span>
                    </h1>
                    <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

                    <ul className={styles.benefitList}>
                        <li>
                            <b>Centralized Data Management:</b> Store and access all student, staff,
                            and academic records in one secure platform.
                        </li>
                        <li>
                            <b>Automated Attendance Tracking:</b> Simplify attendance management with
                            digital records and real-time monitoring for students and staff.
                        </li>
                        <li>
                            <b>Smart Timetable & Scheduling:</b> Generate and manage class schedules,
                            exams, and activities with minimal effort.
                        </li>
                        <li>
                            <b>Seamless Communication:</b> Keep parents, teachers, and students
                            connected with instant notifications via SMS, email, and app.
                        </li>
                        <li>
                            <b>Online Fee & Finance Management:</b> Automate fee collection, generate
                            receipts, and track financial records with accuracy.
                        </li>
                        <li>
                            <b>Performance & Exam Reports:</b> Generate detailed progress reports,
                            grades, and analytics for better student evaluation.
                        </li>
                        <li>
                            <b>Customizable Modules:</b> Adapt the system to match the unique
                            requirements of your school or institution.
                        </li>
                        <li>
                            <b>Enhanced Security:</b> Protect sensitive data with secure access
                            controls and cloud-based backup.
                        </li>
                        <li>
                            <b>Analytics & Insights:</b> Track academic performance, staff efficiency,
                            and resource utilization with data-driven reports.
                        </li>
                        <li>
                            <b>Time & Cost Efficiency:</b> Reduce paperwork, save resources, and
                            increase productivity across all departments.
                        </li>
                    </ul>
                </motion.div>
            </div> */}

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
                        School Management Software Dashboards
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

            {/* FEATURE CARDS SECTION */}
            <Box sx={{ py: 8, background: "#f9fbff" }}>
                <Box sx={{ maxWidth: "1300px", mx: "auto", px: 2 }}>
                  <Typography
                        variant="h4"
                        sx={{
                            textAlign: "center",
                            color: "#00AEEF",
                            fontWeight: "bold",
                            mb: 2,
                        }}
                    >
                        School Management Software Modules ?
                    </Typography>

                    {/* Tabs */}
                    <Box sx={{ textAlign: "center", mb: 5 }}>
                        {tabs.map((tab) => (
                            <Button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                variant={activeTab === tab ? "contained" : "outlined"}
                                sx={{
                                    mx: 1,
                                    mb: 1,
                                    borderRadius: "30px",
                                    textTransform: "none",
                                    px: 3,
                                }}
                            >
                                {tab}
                            </Button>
                        ))}
                    </Box>

                    {/* Cards */}
                    <Grid container spacing={4}>
                        {featureSection[activeTab].map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>

                                <Box
                                    sx={{
                                        borderRadius: "18px",
                                        overflow: "hidden",
                                        background: "#fff",
                                        boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >

                                    {/* TOP BLUE HEADER */}
                                    <Box
                                        sx={{
                                            background: "linear-gradient(135deg,#3e8ec4,#4ea3d8)",
                                            color: "#fff",
                                            p: 3,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                            minHeight: 110,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 50,
                                                height: 50,
                                                borderRadius: "50%",
                                                background: "rgba(255,255,255,0.2)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: 26,
                                            }}
                                        >
                                            {item.icon}
                                        </Box>

                                        <Typography
                                            sx={{
                                                fontWeight: "bold",
                                                fontSize: 20,
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                    </Box>

                                    {/* CARD BODY */}
                                    <Box sx={{ p: 3, flexGrow: 1 }}>
                                        <Typography
                                            sx={{
                                                color: "#555",
                                                fontSize: 14,
                                                mb: 2,
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {item.desc}
                                        </Typography>

                                        {/* LIST */}
                                        {item.points.map((point, i) => (
                                            <Typography
                                                key={i}
                                                sx={{
                                                    fontSize: 14,
                                                    mb: 1,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 1,
                                                    color: "#333",
                                                }}
                                            >
                                                ✔ {point}
                                            </Typography>
                                        ))}
                                    </Box>

                                    {/* BUTTON */}
                                    <Box sx={{ textAlign: "center", pb: 3 }}>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                background: "#4ea3d8",
                                                borderRadius: "30px",
                                                px: 4,
                                                textTransform: "none",
                                                fontWeight: 500,
                                                "&:hover": {
                                                    background: "#3e8ec4",
                                                },
                                            }}
                                        >
                                            View Module
                                        </Button>
                                    </Box>

                                </Box>

                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>

            <Box sx={{ py: 8, background: "#fff" }}>
                {/* SECTION WIDTH CONTROL */}
                <Box sx={{ maxWidth: "1400px", mx: "auto", px: 2 }}>

                    <Typography variant="h4" sx={{ textAlign: "center", color: "#00AEEF", fontWeight: "bold", mb: 2, }} >
                        Why is School Management Software a Smart Investment?
                    </Typography>

                    <Typography sx={{
                        textAlign: "center", maxWidth: 800, mx: "auto", mb: 6, color: "#666", lineHeight:
                            1.6,
                    }} >
                        Investing in School Management Software isn’t just about going digital — it’s
                        about making your institution smarter, faster, and future-ready. Whether you run a school,
                        college, or coaching institute, here’s why this investment pays off big time.

                    </Typography>
                    {/* CARDS */}
                    <Grid container spacing={3}>
                        {cardsData.map((item, i) =>
                        (<Grid item xs={12} sm={6} md={3} key={i}> <Box sx={{
                            width: "100%",
                            height: "100%", p: 4, textAlign: "center", borderRadius: "16px",
                            background: "#fff", border: "1.5px solid #cfeeff", boxShadow:
                                "0 10px 30px rgba(0,0,0,0.06)", transition: "all 0.3s ease", "&:hover":
                            {
                                transform: "translateY(-6px)", boxShadow: "0 16px 36px rgba(0,174,239,0.18)",
                                borderColor: "#00AEEF",
                            },
                        }} >
                            {/* ICON */}
                            <Box sx={{
                                width: 70, height: 70,
                                mx: "auto", mb: 3, borderRadius: "50%", background: "#00AEEF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, color: "#fff",
                            }} > {item.icon} </Box>
                            <Typography sx={{ fontWeight: "bold", mb: 1, fontSize: 18 }} > {item.title}
                            </Typography>
                            <Typography sx={{ fontSize: 14, color: "#666", lineHeight: 1.6, }} >
                                {item.desc}
                            </Typography>
                        </Box>
                        </Grid>))}
                    </Grid>
                </Box>
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
                        of School Management System
                    </Typography>

                    <Grid container spacing={4}>
                        {subfeatures.map((item, idx) => (
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
    );
};

export default SchoolManagementSystem;