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
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"
import image1 from "../images/hrsystem.gif";
import phone from "../images/student-info-detail.png";
import dashboard1 from "../images/hR Dashboard 1.png";
import dashboard2 from "../images/HR dashboard 2.png";
import styles from "./HRManagement.module.css";

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

// HR Groups
const groups = [
  "Dashboard",
  "HRMS",
  "Payroll",
  "Recruitment",
  "Managements",
  "Communication",
  "Letters",
  "Report & Analytics",
  "Support",
  "Apps",
];

// HR Features
const blogs = [
  {
    id: 1,
    title: "Employee App",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd3X_DduYw8CpQt2W36FB8g2SyuHgmlxR4BA&s",
    group: "Apps",
  },
  {
    id: 2,
    title: "Attendance Management",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYBDXboTzUJzX7RwiVlAMuqpsOa7JYR9BcGw&s",
    group: "Managements",
  },
  {
    id: 3,
    title: "Slip",
    image:
      "https://img.freepik.com/premium-vector/flat-design-icon-salary-slip_362714-6064.jpg",
    group: "Payroll",
  },
  {
    id: 4,
    title: "Interview Schedule",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoJ_qtLBX--kaOP6Wx-F8OsEaaEQOrX6DPQ&s",
    group: "Recruitment",
  },
  {
    id: 5,
    title: "Automated Message",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32-nVKCxLG0wXVlZLCMfnTXq8B08i6AVJnESQufA4hq0qRtQJA0HIG8cE1XYDZx1nH70&usqp=CAU",
    group: "Communication",
  },
  {
    id: 6,
    title: "Offer Letter",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjS1Ex-jkNnxeTTIOS4NUkAE3y-Lt9KvZNw&s",
    group: "Letters",
  },
  {
    id: 7,
    title: "Termination Letter",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztVJFemCs-cK1LBMk9K3XmaCUauO7o4NLGA&s",
    group: "Letters",
  },
  {
    id: 8,
    title: "Experience Letter",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8zrRMNRJbkFXXjFdEuQmQ4BnUolNyB4KzimCPsQwMhId4OSnQuWhAXjBzBHT56gUfXo&usqp=CAU",
    group: "Letters",
  },
  {
    id: 9,
    title: "PF Management",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvjBbGIkw1uEg0kV1uucPPljkqnAoezfHGrg&s",
    group: "Payroll",
  },
  {
    id: 10,
    title: "Holiday Management",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt80M3FAJouZOu-RsaZi0Ea-ETBLOS2INsmg&s",
    group: "Managements",
  },
  {
    id: 11,
    title: "Employee ID Card Apps",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUtVx1MG3MeDCUycIFburzV8BYyEsDlIRYA&s",
    group: "Apps",
  },
  {
    id: 12,
    title: "24*7 Support",
    image: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
    group: "Support",
  },
  {
    id: 13,
    title: "Daily HR Lead Count Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-icon-png-download-7607721.png",
    group: "Dashboard",
  },
  {
    id: 14,
    title: "Monthly HR Lead Count Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-3d-icon-png-download-3930409.png?f=webp",
    group: "Dashboard",
  },
  {
    id: 15,
    title: "Yearly HR Lead Count Dashboard",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/seo-dashboard-3d-icon-png-download-4596494.png",
    group: "Dashboard",
  },
  {
    id: 16,
    title: "HR Management",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mjsEcAIDlBgqg0B21ZwDXyZWXJg0dVTXbA&s",
    group: "Managements",
  },
  {
    id: 17,
    title: "HR Information System",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/hr-3d-icon-png-download-8950061.png?f=webp",
    group: "Managements",
  },
  {
    id: 18,
    title: "Leave Management",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgB6XQPwcWcgAiYIEhXda_l5Sul5lW9cf1zg&s",
    group: "Managements",
  },
  {
    id: 19,
    title: "Shift Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/manager-3d-icon-png-download-9616909.png",
    group: "Managements",
  },
  {
    id: 20,
    title: "HR Lead Form Generation ",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-8399892.png",
    group: "Managements",
  },
  {
    id: 21,
    title: "HR Lead Report Generation",
    image: "https://cdn3d.iconscout.com/3d/premium/preview/lead-generation-3d-icon-png-download-8210965.png?f=webp&h=700",
    group: "Managements",
  },
  {
    id: 22,
    title: "Human Resource Management System",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/staff-management-3d-icon-png-download-10748555.png",
    group: "HRMS",
  },
  {
    id: 23,
    title: "Staff Management System",
    image: "https://thumbs.dreamstime.com/b/staff-management-d-icon-high-quality-design-ui-ux-apps-websites-digital-projects-png-vector-format-358577236.jpg",
    group: "HRMS",
  },
  {
    id: 24,
    title: "Employee Management System",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/employee-management-3d-icon-png-download-12017645.png",
    group: "HRMS",
  },
  {
    id: 25,
    title: "Payroll Management System",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/payroll-3d-icon-png-download-8825113.png",
    group: "HRMS",
  },
  {
    id: 26,
    title: "Recruitment Management System",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/recruitment-3d-icon-png-download-11202882.png",
    group: "HRMS",
  },
  {
    id: 27,
    title: "Performance Management System",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/performance-3d-icon-png-download-5305736.png",
    group: "HRMS",
  },
  {
    id: 28,
    title: "Time & Attendance Management System",
    image: "https://png.pngtree.com/png-clipart/20250207/original/pngtree-employee-time-tracking-software-featuring-3d-icon-isolated-on-a-transparent-png-image_20375421.png",
    group: "HRMS",
  },
  {
    id: 29,
    title: "Leave Management System",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/employee-attendance-3d-icon-png-download-12207051.png",
    group: "HRMS",
  },
  {
    id: 30,
    title: "Document Management System",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/file-management-system-3d-icon-png-download-12174298.png",
    group: "HRMS",
  },
  {
    id: 31,
    title: "Employee Self-Service Portal",
    image: "https://static.vecteezy.com/system/resources/previews/045/651/582/non_2x/self-service-icon-3d-illustration-from-customer-relationship-collection-creative-self-service-3d-icon-for-web-design-templates-infographics-and-more-vector.jpg",
    group: "HRMS",
  },
  {
    id: 32,
    title: "Training & Development Management System",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/learning-management-system-3d-icon-png-download-12542246.png",
    group: "HRMS",
  },
  {
    id: 33,
    title: "Recruitment & Onboarding System",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/job-recruitment-3d-icon-png-download-12362917.png",
    group: "HRMS",
  },
  {
    id: 34,
    title: "Status of Employee",
    image: "https://thumbs.dreamstime.com/b/employee-performance-d-icon-high-resolution-design-ui-ux-applications-websites-digital-projects-png-vector-358577143.jpg",
    group: "HRMS",
  },
  {
    id: 35,
    title: "Qualification of Employee",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/employee-training-3d-icon-png-download-12008324.png",
    group: "HRMS",
  },
  {
    id: 36,
    title: "Industry Type",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/industry-3d-icon-png-download-10886919.png",
    group: "HRMS",
  },
  {
    id: 37,
    title: "Lanaguage Known",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/language-translate-3d-icon-png-download-3934026.png",
    group: "HRMS",
  },
  {
    id: 38,
    title: "Conduct By Employee",
    image: "https://thumbs.dreamstime.com/b/employee-performance-d-icon-high-resolution-design-ui-ux-applications-websites-digital-projects-png-vector-358577143.jpg",
    group: "HRMS",
  },
  {
    id: 39,
    title: "Source of Hire",
    image: "https://img.freepik.com/premium-psd/hiring-3d-icon_1893-5329.jpg",
    group: "HRMS",
  },
  {
    id: 40,
    title: "Lead Status",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/client-acquisition-3d-icon-png-download-10522950.png",
    group: "HRMS",
  },
  {
    id: 41,
    title: "Lead QR Code",
    image: "https://static.vecteezy.com/system/resources/previews/019/549/663/non_2x/qr-code-with-3d-icon-illustration-vector.jpg",
    group: "HRMS",
  },
  {
    id: 42,
    title: "Lead Follow-Up History",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/lead-generation-3d-icon-png-download-10522938.png",
    group: "Communication",
  },
  {
    id: 43,
    title: "Lead Follow-Up Reminder",
    image: "https://static.vecteezy.com/system/resources/previews/055/108/905/non_2x/smartphone-reminder-notification-3d-icon-realistic-illustration-png.png",
    group: "Communication",
  },
  {
    id: 44,
    title: "Whtsapp Message Integration",
    image: "https://static.vecteezy.com/system/resources/previews/049/810/881/non_2x/3d-whatsapp-notification-icon-one-new-message-in-the-inbox-concept-3d-illustration-free-png.png",
    group: "Communication",
  },
  {
    id: 45,
    title: "Text Message Integration",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/sms-3d-icon-png-download-10033812.png",
    group: "Communication",
  },
  {
    id: 46,
    title: "Email Message Integration",
    image: "https://static.vecteezy.com/system/resources/previews/019/153/015/non_2x/3d-minimal-online-communication-concept-social-network-online-connection-mail-icon-with-a-contact-and-message-icon-3d-illustration-free-png.png",
    group: "Communication",
  },
  {
    id: 47,
    title: "Bulk Message Integration",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/exchange-3d-icon-png-download-10968183.png",
    group: "Communication",
  },
  {
    id: 48,
    title: "Payroll Processing",
    image: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
    group: "Payroll",
  },
  {
    id: 49,
    title: <span>Payroll Integration</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/payroll-card-3d-icon-png-download-12283214.png",
    group: "Payroll",
  },
  {
    id: 50,
    title: <span>Tax Calculation</span>,
    image: "https://cdn-icons-png.flaticon.com/512/2799/2799498.png",
    group: "Payroll",
  },
  {
    id: 51,
    title: <span>Customizable Reports</span>,
    image: "https://cdn-icons-png.flaticon.com/512/10473/10473656.png",
    group: "Payroll",
  },
  {
    id: 52,
    title: <span>Overtime Management</span>,
    image: "https://static.vecteezy.com/system/resources/thumbnails/066/892/644/small/personal-schedule-3d-icon-time-management-with-person-3d-icon-png.png",
    group: "Payroll",
  },
  {
    id: 53,
    title: <span>Loan and Advance Management</span>,
    image: "https://img.freepik.com/premium-psd/loan-3d-icon-illustration_753728-1033.jpg",
    group: "Payroll",
  },
  {
    id: 54,
    title: "HR List Reporting",
    image: "https://cdn-icons-png.flaticon.com/512/10473/10473656.png",
    group: "Report & Analytics",
  },
  {
    id: 55,
    title: "HR Conduct Reporting",
    image: "https://static.vecteezy.com/system/resources/previews/046/680/407/non_2x/3d-report-icon-report-symbol-3d-free-png.png",
    group: "Report & Analytics",
  },
  {
    id: 56,
    title: "HR Sourses Reporting",
    image: "https://static.vecteezy.com/system/resources/previews/046/680/425/non_2x/3d-report-icon-report-symbol-3d-free-png.png",
    group: "Report & Analytics",
  },
  {
    id: 57,
    title: "HR Courses Reporting",
    image: "https://static.vecteezy.com/system/resources/thumbnails/047/666/837/small/business-planning-business-object-illustration-3d-png.png",
    group: "Report & Analytics",
  },
  {
    id: 58,
    title: "HR Feedback Reporting Analytics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsJ058P7MPoAdMN-nF3vj46nFUo35dwwo7Q&s",
    group: "Report & Analytics",
  },
  {
    id: 59,
    title: "HR Task Reporting Analytics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61xKylgS10ddLCbPG7MLHebCHIeE53UTO-w&s",
    group: "Report & Analytics",
  },
  {
    id: 60,
    title: <span>Grievance Handling</span>,
    image: "https://cdn-icons-png.flaticon.com/512/1028/1028506.png",
    group: "Support",
  },
  {
    id: 61,
    title: <span>Policy Management</span>,
    image: "https://cdn-icons-png.flaticon.com/512/1875/1875674.png",
    group: "Support",
  },
  {
    id: 62,
    title: <span>Holiday Calendar</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/holiday-3d-icon-png-download-8341546.png",
    group: "Support",
  },
  {
    id: 63,
    title: <span>Time Tracking</span>,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28u3QI7mDSKtoGK_D3XU8rJghn2vB1geubQ&s",
    group: "Support",
  },
  {
    id: 64,
    title: "HR Mobile App",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/hr-recruitment-3d-icon-png-download-12966631.png",
    group: "Apps",
  },
  {
    id: 65,
    title: "Payroll Mobile App",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/payroll-3d-icon-png-download-6166048.png",
    group: "Apps",
  },
  {
    id: 66,
    title: "Recruitment Mobile App",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/payment-3d-icon-png-download-6777654.png",
    group: "Apps",
  },
  {
    id: 67,
    title: "Employee Self-Service App",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-app-development-3d-icon-png-download-10958613.png",
    group: "Apps",
  },
  {
    id: 68,
    title: "Leave Management App",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-app-development-3d-icon-png-download-10771737.png",
    group: "Apps",
  },
  {
    id: 69,
    title: "Attendance Management App",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-app-3d-icon-png-download-7408680.png",
    group: "Apps",
  },
  {
    id: 70,
    title: "Shift Management App",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlpArOWUx0OyoFbjowINg9n0FWUSgvXwIa-t4IJdJlTS1TZgdGraZMgKhMCuKktdCKsWA&usqp=CAU",
    group: "Apps",
  },
  {
    id: 71,
    title: "Payroll Processing App",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR51JELdhVqzjtnaIkh48-0JSJuS2oPv88Wj3rp0Dpq57dPHKfbrUD_J_Si_kRVO4XJnPA&usqp=CAU",
    group: "Apps",
  },
  {
    id: 72,
    title: "Recruitment Management App",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-app-3d-icon-png-download-3851512.png",
    group: "Apps",
  },
  {
    id: 73,
    title: "Performance Management App",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-development-3d-icon-png-download-4708214.png",
    group: "Apps",
  },
  {
    id: 74,
    title: "Time & Attendance App",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/job-recruitment-application-3d-icon-png-download-4390939.png",
    group: "Apps",
  },
  {
    id: 75,
    title: "Document Management App",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/job-recruitment-application-3d-icon-png-download-4390941.png",
    group: "Apps",
  },
  {
    id: 76,
    title: "HR Recruitment",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-app-3d-icon-png-download-7408680.png",
    group: "Recruitment",
  },
  {
    id: 77,
    title: "Job Posting",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBXjWXivjWTywMgmCEWhjNjuYUdaCv_8JJ8g&s",
    group: "Recruitment",
  },
  {
    id: 78,
    title: "Candidate Tracking",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/gps-tracking-3d-icon-download-in-png-blend-fbx-gltf-file-formats--location-app-mobile-navigation-vol-1-pack-maps-and-icons-5602662.png",
    group: "Recruitment",
  },
  {
    id: 79,
    title: "Resume Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/resume-3d-icon-png-download-5121784.png",
    group: "Recruitment",
  },
  {
    id: 80,
    title: "Interview Scheduling",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/mentor-3671710-3061911.png",
    group: "Recruitment",
  },
  {
    id: 81,
    title: "Offer Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/manager-3d-icon-png-download-9616909.png",
    group: "Recruitment",
  },
  {
    id: 82,
    title: "Onboarding",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/onboarding-3d-icon-png-download-12031470.png",
    group: "Recruitment",
  },
  {
    id: 83,
    title: "Background Verification",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs59DaMMfz6bzOeEjZkt5o0zGyjbZQ7_Ov6w&s",
    group: "Recruitment",
  },
  {
    id: 84,
    title: "Recruitment Analytics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGIUMFTbYDd3DfNvs57JCFfhT1IS8CYzCwg&s",
    group: "Recruitment",
  },
  {
    id: 85,
    title: "Recruitment Compliance",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/compliance-3d-icon-png-download-8202794.png",
    group: "Recruitment",
  },
  {
    id: 86,
    title: "Talent Pool Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/talent-pool-3d-icon-png-download-12031467.png",
    group: "Recruitment",
  },
  {
    id: 87,
    title: "Referral Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/referral-bonus-3d-icon-png-download-4862975.png",
    group: "Recruitment",
  },
  {
    id: 88,
    title: "Recruitment Marketing",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/recruitment-3d-icon-png-download-11202882.png",
    group: "Recruitment",
  },
  {
    id: 89,
    title: "Campus Recruitment",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuO7_518Yi8leCjpj7_bCbtlla_A8MP2SY6Q&s",
    group: "Recruitment",
  },

  {
    id: 90,
    title: "Increament Letter",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/letter-3d-icon-png-download-9211195.png",
    group: "Letters",
  },

];

// HR SubFeatures
const subfeatures = [
  {
    title: "Employee Database Management",
    detail:
      "Centralized storage and management of all employee records, including personal details, job history, and documents.",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Attendance & Leave Tracking",
    detail:
      "Monitor employee attendance, manage leave requests, and automate approvals with real-time notifications.",
    image: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
  },
  {
    title: "Payroll Automation",
    detail:
      "Automate salary calculations, deductions, and payslip generation for efficient payroll processing.",
    image: "https://cdn-icons-png.flaticon.com/512/483/483356.png",
  },
  {
    title: "Recruitment & Onboarding",
    detail:
      "Streamline recruitment, candidate tracking, and onboarding processes for new hires.",
    image: "https://cdn-icons-png.flaticon.com/512/4205/4205497.png",
  },
  {
    title: "Performance Appraisal",
    detail:
      "Conduct performance reviews, set goals, and track employee achievements for transparent appraisals.",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/performance-review-3d-icon-download-in-png-blend-fbx-gltf-file-formats--employee-evaluation-feedback-hr-pack-business-icons-9490637.png?f=webp",
  },
  {
    title: "Document Management",
    detail:
      "Securely store and manage HR documents such as contracts, policies, and certificates.",
    image: "https://cdn-icons-png.flaticon.com/512/2694/2694914.png",
  },
  {
    title: "Expense & Reimbursement",
    detail:
      "Manage employee expense claims, approvals, and reimbursements digitally.",
    image: "https://cdn-icons-png.flaticon.com/512/2886/2886661.png",
  },
  {
    title: "Training & Development",
    detail:
      "Plan, track, and evaluate employee training programs and skill development initiatives.",
    image: "https://cdn-icons-png.flaticon.com/512/1250/1250689.png",
  },
  {
    title: "Analytics & Reporting",
    detail:
      "Generate HR analytics and reports for insights into workforce trends, attrition, and compliance.",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/data-analytics-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-technology-business-pack-icons-6149163.png?f=webp",
  },
  {
    title: "Self-Service Portal",
    detail:
      "Enable employees to view payslips, apply for leave, update profiles, and access HR services online.",
    image: "https://cdn-icons-png.flaticon.com/512/69/69524.png",
  },
];

const dashboardData = [
  {
    title: "Daily / Monthly HR Lead Dashboard",
    desc: "The Daily Lead Count Dashboard provides a clear picture of the leads generated on a day-to-day basis. It helps businesses closely monitor their daily performance, identify peak hours of lead generation, and quickly act on any sudden drops in numbers. This real-time visibility is especially valuable for tracking the effectiveness of ongoing campaigns, advertisements, or short-term promotions.",
    img: dashboard1,
  },
  {
    title: "Yearly/Monthly HR Lead Dashboard",
    desc: "The Monthly/Monthly Lead Count Dashboard consolidates leads generated throughout the month and highlights growth trends compared to previous months. It enables businesses to track monthly targets, analyze marketing effectiveness, and plan resources more efficiently. Seasonal or campaign-driven variations also become more visible in this view, making it easier to understand customer behavior patterns.",
    img: dashboard2,
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

const HRManagementSystem = () => {
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
                HR Management <span style={{ color: "#FFBF00" }}>System</span>
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
              >
                <b>Empower, manage, and optimize</b> your workforce with our advanced
                HR Management System. From recruitment, onboarding, and payroll to
                attendance, performance tracking, and compliance—everything is
                centralized in one platform. Ensure transparency, improve productivity,
                and enhance employee satisfaction across your organization.
                <br /><br />
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                <Chip label="Smart Payroll" color="primary" />
                <Chip label="Employee Self-Service" color="secondary" />
                <Chip
                  label="Real-Time Analytics"
                  sx={{ background: "#e1bee7", color: "#333" }}
                />
              </Box>
            </Grid>

            {/* Right Image Section */}
            <Grid item xs={12} md={6} data-aos="fade-left">
              <motion.img
                src={image1.src} // replace with HR-related image
                alt="HR Management System"
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

      {/* Description Section for HR Management */}
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
              Human Resource & Employee Management
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
              The HR Management System simplifies and centralizes all
              employee-related operations. It manages recruitment, attendance,
              payroll, performance appraisals, and document handling in a single
              platform. This system ensures better workforce efficiency, reduces
              manual errors, enhances compliance, and empowers employees through
              self-service access to their data and payslips. It is an
              all-in-one solution for HR professionals to manage the entire
              employee lifecycle with ease.
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
          <img className={styles.img22} src={phone.src} alt="HR Management Mobile" />
        </div>

        {/* Right: Benefits Content */}
        <motion.div
          className={styles.benefitsSection}
          data-aos="fade-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className={styles.heading}>
            Benefits of <span className={styles.highlight}>HR Management System</span>
          </h1>
          <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

          <ul className={styles.benefitList}>
            <li>
              <b>Enhanced Efficiency & Automation:</b> Automate payroll, attendance,
              and leave management to save time and effort.
            </li>
            <li>
              <b>Improved Accuracy & Compliance:</b> Ensure labor law compliance while
              minimizing payroll and documentation errors.
            </li>
            <li>
              <b>Centralized Employee Data:</b> Store all employee records securely —
              from personal details to job history and documents.
            </li>
            <li>
              <b>Better Recruitment & Onboarding:</b> Simplify hiring with interview
              scheduling, offer letter generation, and streamlined onboarding.
            </li>
            <li>
              <b>Employee Self-Service Access:</b> Enable employees to view payslips,
              apply for leave, and update personal information through a self-service
              portal.
            </li>
            <li>
              <b>Performance & Appraisal Management:</b> Track performance, set goals,
              and manage appraisal cycles efficiently.
            </li>
            <li>
              <b>Cost Savings:</b> Reduce administrative workload and minimize manual
              errors, saving both time and operational costs.
            </li>
          </ul>
        </motion.div>
      </div>

      {/*  HR Dashboard Section */}
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
            <span style={{ color: "#FFBF00" }}>Human Resource</span> Management System Dashboard
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

      {/* HR Management System Section */}
      <Box sx={{ padding: "40px 20px" }}>
        <Container>
          {/* First Row - HR Management */}
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
                  <span>HR Management System</span>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    lineHeight: "1.8",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  An HR Management System (HRMS) is a centralized platform that
                  helps organizations efficiently manage employee records,
                  payroll, attendance, recruitment, and performance evaluations.
                  <br />
                  <br />
                  It enhances operational efficiency by automating repetitive HR
                  tasks and providing real-time data for informed
                  decision-making. Employees and HR teams can access important
                  information anytime, ensuring transparency and reducing
                  administrative workload.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.img
                src="https://iiakerala.com/wp-content/uploads/2022/05/staffing-1.gif"
                alt="HR Management System"
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
                  boxShadow: "24px 24px 14px rgba(52,152,219,0.18)",
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

          {/* Second Row - HR Information System */}
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{ marginBottom: "40px" }}
          >
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <motion.img
                src="https://cdn.prod.website-files.com/655cc140ec69a31f681e0556/66c321c8d59052f91b2ff319_66c3203df334adf9bf113d51_1-12.gif"
                alt="HR Information System"
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
                  boxShadow: "24px 24px 14px rgba(52,152,219,0.18)",
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
                  <span style={{ color: "#2874A6" }}>HR</span> Information
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
                  An HR Information System (HRIS) stores and manages
                  comprehensive employee records including attendance, payroll,
                  performance, and documentation. It streamlines data access for
                  HR teams, provides insights into workforce analytics, and
                  supports better planning and decision-making.
                  <br />
                  <br />
                  By digitizing HR operations, HRIS improves data accuracy,
                  enhances employee experience, and ensures compliance with
                  organizational and legal policies.
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
            of Human Resource Management System
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

export default HRManagementSystem;
