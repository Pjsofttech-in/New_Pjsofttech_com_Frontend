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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import image1 from "../images/EmpGif.gif";
import phone from "../images/student-info-detail.png";
import dashboard1 from "../images/Employee Dashboard 1.png";
import dashboard2 from "../images/Employee Salary Dshboard 2.png";


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
  "Employee",
  "HR Lead",
  "Attendance",
  "Leave",
  "Salary",
  "Managements",
  "Communications",
  "Payroll",
  "Report & Analytics",
  "Support",
  "Apps",
];

const blogs = [
  {
    id: 1,
    title: "Employee Attendance",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    group: "Attendance",
  },
  {
    id: 2,
    title: "Leave Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/job-attendance-absent-3d-icon-png-download-12056157.png",
    group: "Attendance",
  },
  {
    id: 3,
    title: "Payroll Processing",
    image: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
    group: "Payroll",
  },
  {
    id: 4,
    title: "Salary Slip Generation",
    image: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
    group: "Salary",
  },
  {
    id: 5,
    title: "Employee Reports",
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
    group: "Reports",
  },
  {
    id: 6,
    title: "Performance Analytics",
    image: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
    group: "Reports",
  },
  {
    id: 7,
    title: "24*7 Support",
    image: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
    group: "Support",
  },
  {
    id: 8,
    title: "Dashboard & Insights",
    image:
      "https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1509.jpg",
    group: "Reports",
  },
  {
    id: 9,
    title: "Next Generation Software",
    image: "https://cdn-icons-png.flaticon.com/512/3950/3950815.png",
    group: "Support",
  },
  {
    id: 10,
    title: <span>HR Management</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/training-evaluation-3d-icon-png-download-9490615.png",
    group: "Managements",
  },
  {
    id: 11,
    title: <span>Employee Directory</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/search-employee-3d-icon-download-in-png-blend-fbx-gltf-file-formats--workforce-management-remote-working-pack-business-icons-10958510.png?f=webp",
    group: "Employee",
  },
  {
    id: 12,
    title: <span>Attendance Tracking</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/attendance-3d-icon-png-download-9276167.png",
    group: "Support",
  },
  {
    id: 13,
    title: <span>Salary Management</span>,
    image: "https://cdn-icons-png.flaticon.com/512/610/610124.png",
    group: "Salary",
  },
  {
    id: 14,
    title: <span>Leave Management</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/logout-3d-icon-png-download-12031417.png",
    group: "Support",
  },
  {
    id: 15,
    title: <span>Notice Board</span>,
    image: "https://img.freepik.com/premium-psd/notice-board-3d-icon_554821-2781.jpg",
    group: "Communications",
  },
  {
    id: 16,
    title: <span>Memo Issuance</span>,
    image: "https://cdn-icons-png.flaticon.com/512/2891/2891491.png",
    group: "Communications",
  },
  {
    id: 17,
    title: <span>Shift Management</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3004/3004619.png",
    group: "Managements",
  },
  {
    id: 18,
    title: <span>Performance Appraisal</span>,
    image: "https://cdn-icons-png.flaticon.com/512/2913/2913462.png",
    group: "Managements",
  },
  {
    id: 19,
    title: <span>Training Management</span>,
    image: "https://img.freepik.com/premium-vector/business-training-icon-3d-illustration-from-business-training-collection-creative-business-training-3d-icon-web-design-templates-infographics-more_676904-415.jpg",
    group: "Managements",
  },
  {
    id: 20,
    title: <span>Document Management</span>,
    image: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
    group: "Support",
  },
  {
    id: 21,
    title: <span>Payroll Integration</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/payroll-card-3d-icon-png-download-12283214.png",
    group: "Payroll",
  },
  {
    id: 22,
    title: <span>Tax Calculation</span>,
    image: "https://cdn-icons-png.flaticon.com/512/2799/2799498.png",
    group: "Payroll",
  },
  {
    id: 23,
    title: <span>Employee Self-Service Portal</span>,
    image: "https://cdn-icons-png.flaticon.com/512/5087/5087579.png",
    group: "Apps",
  },
  {
    id: 24,
    title: <span>Recruitment Management</span>,
    image: "https://cdn-icons-png.flaticon.com/512/4010/4010624.png",
    group: "Managements",
  },
  {
    id: 25,
    title: <span>Onboarding Process</span>,
    image: "https://cdn-icons-png.flaticon.com/512/11325/11325681.png",
    group: "Managements",
  },
  {
    id: 26,
    title: <span>Exit Management</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135773.png",
    group: "Managements",
  },
  {
    id: 27,
    title: <span>Asset Management</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/asset-management-3d-icon-png-download-8062629.png?f=webp",
    group: "Payroll",
  },
  {
    id: 28,
    title: <span>Compliance Management</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/compliance-3d-icon-png-download-12669020.png",
    group: "Support",
  },
  {
    id: 29,
    title: <span>Customizable Reports</span>,
    image: "https://cdn-icons-png.flaticon.com/512/10473/10473656.png",
    group: "Payroll",
  },
  {
    id: 30,
    title: <span>Alerts and Notifications</span>,
    image: "https://cdn-icons-png.flaticon.com/512/1827/1827270.png",
    group: "Communications",
  },
  {
    id: 31,
    title: <span>Mobile Accessibility</span>,
    image: "https://cdn-icons-png.flaticon.com/512/8462/8462282.png",
    group: "Apps",
  },
  {
    id: 32,
    title: <span>Face Recognition Integration</span>,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIUfa9uCuYauRv2XX-pCVegeTi5y71jgdiQ&s",
    group: "Support",
  },
  {
    id: 33,
    title: <span>Overtime Management</span>,
    image: "https://static.vecteezy.com/system/resources/thumbnails/066/892/644/small/personal-schedule-3d-icon-time-management-with-person-3d-icon-png.png",
    group: "Payroll",
  },
  {
    id: 34,
    title: <span>Loan and Advance Management</span>,
    image: "https://img.freepik.com/premium-psd/loan-3d-icon-illustration_753728-1033.jpg",
    group: "Payroll",
  },
  {
    id: 35,
    title: <span>Grievance Handling</span>,
    image: "https://cdn-icons-png.flaticon.com/512/1028/1028506.png",
    group: "Support",
  },
  {
    id: 36,
    title: <span>Policy Management</span>,
    image: "https://cdn-icons-png.flaticon.com/512/1875/1875674.png",
    group: "Support",
  },
  {
    id: 37,
    title: <span>Holiday Calendar</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/holiday-3d-icon-png-download-8341546.png",
    group: "Support",
  },
  {
    id: 38,
    title: <span>Time Tracking</span>,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28u3QI7mDSKtoGK_D3XU8rJghn2vB1geubQ&s",
    group: "Support",
  },
  {
    id: 39,
    title: <span>Integration with Other Modules</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3581/3581378.png",
    group: "Apps",
  },
  {
    id: 40,
    title: <span>Employee Management Mobile App</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-apps-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--applications-smartphone-app-business-marketing-pack-illustrations-3930404.png",
    group: "Apps",
  },
  {
    id: 41,
    title: <span>Generate Department</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4HgqUiY0I3MWQZ8Fe91Ew7bvjY-31bIm8pg&s",
    group: "Managements",
  },
  {
    id: 42,
    title: <span>Generate Category</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/categories-3d-icon-download-in-png-blend-fbx-gltf-file-formats--menu-category-list-option-application-online-streaming-pack-communication-icons-9496639.png",
    group: "Managements",
  },
  {
    id: 43,
    title: <span>Manage Holidays</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNbogBmkijOec5b45-ky24UJmNRNQ8lMce7w&s",
    group: "Managements",
  },
  {
    id: 44,
    title: <span>Generate Employee</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/employee-of-month-3d-icon-download-in-png-blend-fbx-gltf-file-formats--reward-appraisal-employees-team-work-pack-business-icons-8583584.png",
    group: "Employee",
  },
  {
    id: 45,
    title: <span>Employee Report</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/report-3d-icon-download-in-png-blend-fbx-gltf-file-formats--employee-growth-job-promotion-pack-business-icons-10844928.png?f=webp",
    group: "Employee",
  },
  {
    id: 46,
    title: <span>Employee Quries</span>,
    image:
      "https://cdn.iconscout.com/icon/premium/png-256-thumb/employee-query-654663.png?f=webp",
    group: "Employee",
  },
  {
    id: 47,
    title: <span>Department Wise Dashboard Report</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/ai-report-dashboard-3d-icon-png-download-11758251.png",
    group: "Dashboard",
  },
  {
    id: 48,
    title: <span>Category Wise Dashboard Report</span>,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/021/666/136/small_2x/3d-data-analytics-dashboard-and-business-finance-report-online-marketing-financial-report-chart-data-analysis-and-web-development-concept-3d-illustration-png.png",
    group: "Dashboard",
  },
  {
    id: 49,
    title: <span>HR Lead Dashboard<br></br>
      ( Daily / Monthly / Yearly )</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-icon-png-download-7577977.png",
    group: "Dashboard",
  },
  {
    id: 50,
    title: <span>Employee Attendance Dashboard</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/admin-control-panel-3d-icon-png-download-7794470.png",
    group: "Dashboard",
  },
  {
    id: 51,
    title: <span>Employee Leave Dashboard</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVrlTPkhMauM6Vi3jJqXLSbBbZ0nn4Xm4e1w&s",
    group: "Dashboard",
  },
  {
    id: 52,
    title: <span>Employee Salary Comparison Dashboard ( Daily / Month / Year )</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-icon-png-download-7277248.png",
    group: "Dashboard",
  },
  {
    id: 53,
    title: <span>Employee salary </span>,
    image:
      "https://img.freepik.com/premium-photo/salary-payroll-system-employee-wages-concept-realistic-3d-object-cartoon-style_977617-134681.jpg",
    group: "Employee",
  },
  {
    id: 54,
    title: <span>Employee Attendance with face Recognition </span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWsNu6Zkd7SbQGjGRbFLwc2WLWN4IebKTl3Q&s",
    group: "Employee",
  },
  {
    id: 55,
    title: <span>Employee settings </span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/employee-adding-calendar-event-3d-icon-png-download-4000981.png",
    group: "Employee",
  },
  {
    id: 56,
    title: <span>Employee Department </span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDf6QJT1fboD8TLxjLyJesM4tjHPmx0mOLMA&s",
    group: "Employee",
  },
  {
    id: 57,
    title: <span>Employee Category </span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/employee-team-3d-icon-png-download-9616906.png",
    group: "Employee",
  },
  {
    id: 58,
    title: <span>Employee Experience Letter </span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/employee-resume-3d-icon-png-download-9102109.png",
    group: "Employee",
  },
  {
    id: 59,
    title: <span>Employee Settlement Letter </span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zOA67FjF8pk0kEFVonyZUWjRRtfMVHN4Rg&s",
    group: "Employee",
  },
  {
    id: 60,
    title: <span>Employee Increment Letter </span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/settlement-3d-icon-png-download-10708111.png",
    group: "Employee",
  },
  {
    id: 61,
    title: <span>Employee Offer Letter </span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/job-offer-letter-3d-icon-png-download-12056174.png",
    group: "Employee",
  },
  {
    id: 62,
    title: <span>Employee Joining Letter </span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/job-offer-letter-3d-icon-png-download-12056174.png",
    group: "Employee",
  },
  {
    id: 63,
    title: <span>Employee Personal Information </span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/employee-attendance-3d-icon-png-download-12207051.png",
    group: "Employee",
  },
  {
    id: 64,
    title: <span>Employee Detail Information </span>,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/037/760/967/small/3d-badge-with-personal-data-icon-id-card-with-user-photo-and-information-identity-document-for-company-employees-and-those-invited-to-conference-3d-rendering-illustration-vector.jpg",
    group: "Employee",
  },
  {
    id: 65,
    title: <span>Employee Salary & Leave Report </span>,
    image:
      "https://img.freepik.com/premium-vector/flat-design-icon-salary-slip_362714-6064.jpg",
    group: "Employee",
  },
  {
    id: 66,
    title: <span>Employee Attendance Report </span>,
    image:
      "https://www.slideteam.net/media/catalog/product/cache/1280x720/e/m/employee_leave_tracking_colored_icon_in_powerpoint_pptx_png_and_editable_eps_format_slide01.jpg",
    group: "Attendance",
  },
  {
    id: 67,
    title: <span>Employee Attendance Status </span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/employee-list-3d-icon-png-download-11664648.png",
    group: "Attendance",
  },
  {
    id: 68,
    title: <span>Employee Management </span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUCkILZulKTC-q8i9o7SbGSM0EYn31exoZQ&s",
    group: "Managements",
  },
  {
    id: 69,
    title: <span>Attendance Management </span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/attendance-3d-icon-png-download-11245305.png",
    group: "Managements",
  },
  {
    id: 70,
    title: <span>Leave Management </span>,
    image:
      "https://cdn-icons-png.freepik.com/256/11827/11827113.png?semt=ais_white_label",
    group: "Managements",
  },
  {
    id: 71,
    title: <span>Salary Management </span>,
    image:
      "https://img.freepik.com/premium-vector/employee-salary-concept-flat-icon-style-illustration_357500-1648.jpg",
    group: "Managements",
  },
  {
    id: 72,
    title: "Employee Lead Controller",
    image:
      "https://img.freepik.com/premium-psd/controlling-3d-icon-gaming-esports_431668-758.jpg",
    group: "Communications",
  },
  {
    id: 73,
    title: "Automated Follow-Ups",
    image:
      "https://img.freepik.com/premium-photo/sign-up-icon-follow-icon-3d-illustration_115990-2221.jpg",
    group: "Communications",
  },
  {
    id: 74,
    title: "Communication History",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQYOdJKBPerfZ9IXgfO8Cu4f72Wusx63sOpg&s",
    group: "Communications",
  },
  {
    id: 75,
    title: "Integration with Other Systems",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/data-integration-3d-icon-download-in-png-blend-fbx-gltf-file-formats--automation-management-server-cloud-services-and-network-pack-communication-icons-7647733.png",
    group: "Communications",
  },
  {
    id: 76,
    title: "HR Lead Dashboard ( Daily / Monthly / Yearly )",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/hr-server-3d-icon-png-download-10748556.png",
    group: "HR Lead",
  },
  {
    id: 77,
    title: "HR Lead Form Creation ",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/hr-3d-icon-png-download-8950061.png?f=webp",
    group: "HR Lead",
  },
  {
    id: 78,
    title: "HR Lead Report Generation",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-11035008.png",
    group: "HR Lead",
  },
  {
    id: 79,
    title: "HR Status Report",
    image:
      "https://static.vecteezy.com/system/resources/previews/043/987/820/non_2x/report-3d-icon-png.png",
    group: "HR Lead",
  },
  {
    id: 80,
    title: "Education Qualification Details",
    image:
      "https://png.pngtree.com/png-vector/20250226/ourmid/pngtree-user-friendly-3d-educational-app-interface-design-vector-png-image_15598649.png",
    group: "HR Lead",
  },
  {
    id: 81,
    title: "Industry Experience Details",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFgY2L2e482t0lWD41aIMjsRI1yX5GSo-HlQ&s",
    group: "HR Lead",
  },
  {
    id: 82,
    title: "Lanauage Details",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/language-translate-3d-icon-png-download-3404368.png",
    group: "HR Lead",
  },
  {
    id: 83,
    title: "Lead QR Code Generation",
    image:
      "https://static.vecteezy.com/system/resources/previews/019/549/663/non_2x/qr-code-with-3d-icon-illustration-vector.jpg",
    group: "HR Lead",
  },
  {
    id: 84,
    title: "Employee Leave Report",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/employee-discusses-business-target-report-3d-icon-png-download-9627677.png",
    group: "Leave",
  },
  {
    id: 85,
    title: "Employee Leave Request",
    image:
      "https://cdn-icons-png.flaticon.com/512/3387/3387188.png",
    group: "Leave",
  },
  {
    id: 86,
    title: "Leave Request Details",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0V72mTF5-nN0V1IkLIhJXGXANMw6d0cqCA&s",
    group: "Leave",
  },
  {
    id: 87,
    title: "Employee Salary Comparison Dashboard ( Daily / Month / Year )",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zXzxgH_AK1_23_NFfjlHnv4r-zVScH8H4g&s",
    group: "Salary",
  },
  {
    id: 88,
    title: "Employee Salary Generation",
    image:
      "https://img.freepik.com/premium-psd/salary-3d-icon-job-carrer_431668-2292.jpg",
    group: "Salary",
  },
  {
    id: 89,
    title: "Employee Salary Suummary Report",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/payroll-3d-icon-png-download-8825113.png",
    group: "Salary",
  },
  {
    id: 90,
    title: "Employee Attendance Dashboard",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjajIkqLkXXfJstO6DxDvc_pZJILV5oyYE-w&s",
    group: "Attendance",
  },
  {
    id: 91,
    title: "Employee Attendance ManagementEmployee Attendance Management",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/employee-list-3d-icon-png-download-11664648.png",
    group: "Attendance",
  },
  {
    id: 92,
    title: "Empluyee Leave Management",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDf6QJT1fboD8TLxjLyJesM4tjHPmx0mOLMA&s",
    group: "Leave",
  },
  {
    id: 93,
    title: "Empluyee Leave Dashboard",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-template-3d-icon-png-download-4800674.png",
    group: "Leave",
  },

  {
    id: 94,
    title: "Employee  List Reporting",
    image: "https://cdn-icons-png.flaticon.com/512/10473/10473656.png",
    group: "Report & Analytics",
  },
  {
    id: 95,
    title: "Employee Conduct Reporting",
    image: "https://static.vecteezy.com/system/resources/previews/046/680/407/non_2x/3d-report-icon-report-symbol-3d-free-png.png",
    group: "Report & Analytics",
  },
  {
    id: 96,
    title: "Employee Sourses Reporting",
    image: "https://static.vecteezy.com/system/resources/previews/046/680/425/non_2x/3d-report-icon-report-symbol-3d-free-png.png",
    group: "Report & Analytics",
  },
  {
    id: 97,
    title: "Employee Courses Reporting",
    image: "https://static.vecteezy.com/system/resources/thumbnails/047/666/837/small/business-planning-business-object-illustration-3d-png.png",
    group: "Report & Analytics",
  },
  {
    id: 98,
    title: "Employee Feedback Reporting Analytics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsJ058P7MPoAdMN-nF3vj46nFUo35dwwo7Q&s",
    group: "Report & Analytics",
  },
  {
    id: 99,
    title: "Employee Task Reporting Analytics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61xKylgS10ddLCbPG7MLHebCHIeE53UTO-w&s",
    group: "Report & Analytics",
  },
  {
    id: 100,
    title: "Employee Attendance App",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/employee-list-3d-icon-png-download-11664648.png",
    group: "Apps",
  },












];
const dashboardData = [
  {
    title: "Category/Department Wise Employee Dashboard",
    desc: "A Category/Department Wise Employee Dashboard is a structured visual tool that helps management track, monitor, and analyze employees across different departments or categories in an organization. It provides a centralized overview of workforce distribution, performance, and engagement.",
    img: dashboard1,
  },
  {
    title: "Employee Salary Dashboard",
    desc: "An Employee Salary Dashboard is a centralized tool (web-based, software, or Excel/Power BI/ERP integrated) that helps HR, finance teams, and management monitor, analyze, and manage employee salary data in real time. It provides clear insights into salary distribution, payroll expenses, and compensation trends.",
    img: dashboard2,
  },


];

const subfeatures = [
  {
    title: "Biometric Attendance Integration",
    detail:
      "Integrate with biometric devices for accurate and real-time attendance tracking. Prevent proxy attendance and ensure transparency.",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Automated Payroll Calculation",
    detail:
      "Automatically calculate salaries, deductions, and bonuses based on attendance and company policies. Reduce manual errors and save time.",
    image: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
  },
  {
    title: "Leave & Holiday Management",
    detail:
      "Manage employee leave requests, approvals, and holiday calendars efficiently. Keep everyone informed and compliant.",
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
  },
  {
    title: "Salary Slip Generation",
    detail:
      "Generate digital and printable salary slips instantly. Employees can access their salary history anytime.",
    image: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
  },
  {
    title: "Automated Notifications",
    detail:
      "Send automated notifications for attendance, payroll, and important HR updates via email or SMS.",
    image: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
  },
  {
    title: "Comprehensive Employee Reports",
    detail:
      "Get detailed reports on attendance, payroll, performance, and more. Filter by department, date, or employee for in-depth analysis.",
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

const EmployeeManagementSystem = () => {
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
                  Employee Management <span style={{ color: "#FFBF00" }}>System</span>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
                >
                  <b>Streamline, monitor, and optimize</b> all your employee-related operations
                  with our advanced Employee Management System. Handle recruitment, onboarding,
                  payroll, attendance, performance tracking, leaves, and more—within a single
                  powerful platform. Improve workforce productivity, ensure transparency, and
                  empower HR teams with modern digital tools.
                  <br />
                  <br />
                </Typography>

                {/* Highlighted Chips */}
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                  <Chip label="Smart HR Operations" color="primary" />
                  <Chip label="All-in-One Dashboard" color="secondary" />
                  <Chip
                    label="Time & Cost Efficient"
                    sx={{ background: "#e1bee7", color: "#333" }}
                  />
                </Box>
              </Grid>

              {/* Right Image */}
              <Grid item xs={12} md={6} data-aos="fade-left">
                <motion.img
                  src={image1.src} // replace with your employee-related image
                  alt="Employee Management"
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
                for Employee & HR Management
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
                The Employee Management System streamlines and automates all HR
                processes for organizations. It covers attendance, payroll,
                leave management, reporting, and analytics, ensuring
                transparency and efficiency for both HR teams and employees.
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
        <Box
          sx={{
            py: { xs: 6, md: 10 },
            backgroundColor: "#fff",
          }}
        >
          <Container>
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent="center"
              sx={{ flexDirection: { xs: "column", md: "row" } }}
            >
              {/* Left Side – Phone Image */}
              <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
                <motion.img
                  src={phone.src}
                  alt="Employee Management Mobile"
                  data-aos="fade-right"
                  style={{
                    With: "530px",
                    height: "600px",
                    objectFit: "contain",
                  }}
                />
              </Grid>

              {/* Right Side – Text Content */}
              <Grid item xs={12} md={6}>
                <motion.div
                  data-aos="fade-left"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: "#000",
                      mb: 1,
                      fontSize: { xs: "1.8rem", md: "2.3rem" },
                      lineHeight: 1.3,
                    }}
                  >
                    Benefits of{" "}
                    <span style={{ color: "#007BCA" }}>Employee Management System</span>
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 3,
                      color: "#222",
                      fontSize: { xs: "1rem", md: "1.2rem" },
                    }}
                  >
                    With PJSOFTTECH, you get:
                  </Typography>

                  {/* Benefits List */}
                  <Box
                    component="ul"
                    sx={{
                      listStyle: "none",
                      pl: 0,
                      color: "#333",
                      fontSize: { xs: "0.95rem", md: "1.05rem" },
                      lineHeight: 1.8,
                    }}
                  >
                    {[
                      {
                        title: "Centralized HR Administration",
                        desc: "Manage all employee operations including attendance, payroll, and reports from a single platform.",
                      },
                      {
                        title: "Automated Payroll",
                        desc: "Simplifies salary calculation, payslip generation, and compliance, reducing manual work.",
                      },
                      {
                        title: "Accurate Attendance",
                        desc: "Real-time tracking of attendance and leaves for precise reports.",
                      },
                      {
                        title: "Streamlined Communication",
                        desc: "Seamless communication with employees via email or notifications.",
                      },
                      {
                        title: "Comprehensive Reporting",
                        desc: "Generate detailed analytics for attendance, payroll, and compliance.",
                      },
                      {
                        title: "Mobile Accessibility",
                        desc: "Access the system anytime, anywhere with mobile compatibility.",
                      },
                      {
                        title: "Data Security",
                        desc: "Ensures data integrity and privacy with secure, role-based access controls.",
                      },
                    ].map((item, index) => (
                      <Box
                        key={index}
                        component="li"
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1.2,
                          mb: 1.5,
                        }}
                      >
                        <span
                          style={{
                            color: "#0096FF",
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                            marginTop: "2px",
                          }}
                        >
                          ✓
                        </span>
                        <Typography component="span">
                          <b>{item.title}:</b> {item.desc}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Employee Dashboard Section */}
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
              <span style={{ color: "#FFBF00" }}>Employee </span>Management Dashboards
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
              Get a complete overview of your workforce at a glance. Monitor attendance,
              payroll, leave requests, and performance with interactive, real-time dashboards—
              empowering HR and management to make data-driven decisions and enhance
              employee productivity.
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

        {/* Employee Management & EMS Section */}
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
                    <span> Employee Management </span>
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      lineHeight: "1.8",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    An Employee Management System (EMS) serves as a centralized
                    platform for organizations to efficiently manage all HR and
                    employee-related operations. It encompasses functionalities
                    including attendance tracking, payroll processing, leave
                    management, performance monitoring, and analytics.
                    <br />
                    <br />
                    EMS often integrates with other ERP and payroll systems and
                    offers customization options to adapt to the specific needs
                    of each organization. Overall, it plays a vital role in
                    streamlining HR administration, improving compliance, and
                    enhancing employee satisfaction.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.img
                  src="https://media.tenor.com/tFc_NHUS1CEAAAAM/employee-appreciation-theecards.gif"
                  alt="Employee Management"
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

            <Grid
              container
              spacing={4}
              alignItems="center"
              sx={{ marginBottom: "40px" }}
            >
              <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                <motion.img
                  src="https://www.shrm.org/content/dam/en/shrm/topics-tools/news/all-things-work/202203ATW-03_kpz6me.gif"
                  alt="Employee Information System"
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
                    <span style={{ color: "#2874A6" }}>Employee</span>{" "}
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
                    An Employee Information System is a robust platform designed
                    to manage and maintain comprehensive employee data
                    throughout the employment lifecycle. It enables
                    organizations to securely store and access attendance
                    records, payroll details, leave history, and more. The
                    system streamlines HR processing, supports analytics, and
                    empowers teams to make informed decisions, ensuring
                    compliance and improved employee engagement.
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
              of Employee Management System
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

export default EmployeeManagementSystem;
