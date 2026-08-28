import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Box,
  Container,
  Grid,
  Chip,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import styles from "./IncomeExpensesManagementSystem.module.css";
import Slider from "react-slick";
import dashboard1 from "../images/inventoryimgae1.png";
import dashboard2 from "../images/inventoryimage2.png";
import image1 from "../images/income-expense-gif.gif";
import phone from "../images/student-info-detail.png";

const dashboardImages = [dashboard1, dashboard2];

const groups = [
  "Dashboard",
  "Income & Expense",
  "Leads",
  "Finance",
  "Managements",
  "Communications",
  "Report & Analytics",
  "Support",
  "Apps",
];

const blogs = [
  {
    id: 1,
    title: (
      <span>Centralized Enquiry Management</span>
    ),
    image: "https://cdn-icons-png.flaticon.com/512/8741/8741068.png",
    group: "Application",
  },
  {
    id: 2,
    title: <span>Real-Time Notifications</span>,
    image:
      "https://cdn-icons-png.freepik.com/256/10178/10178571.png?semt=ais_hybrid",
    group: "Support",
  },
  {
    id: 3,
    title: <span>Communication History</span>,
    image:
      "https://cdn4.iconfinder.com/data/icons/marketing-and-digital-marketing/32/business_marketing_advertising_focus_group-512.png",
    group: "Communications",
  },
  {
    id: 4,
    title: <span>Lead Tracking & Management</span>,
    image: "https://cdn-icons-png.flaticon.com/512/11279/11279979.png",
    group: "Managements",
  },
  {
    id: 5,
    title: <span>Secure Data Management</span>,
    image: "https://cdn-icons-png.flaticon.com/512/5581/5581387.png",
    group: "Managements",
  },
  {
    id: 6,
    title: (
      <span>Integration with Existing CRM</span>
    ),
    image: "https://cdn-icons-png.flaticon.com/512/3967/3967041.png",
    group: "Managements",
  },
  {
    id: 7,
    title: <span> 24*7 support</span>,
    image: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
    group: "Support",
  },
  {
    id: 8,
    title: <span>Reports and dashboard </span>,
    image:
      "https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1509.jpg?ga=GA1.1.1863634387.1705751972&semt=ais_hybrid",
    group: "Managements",
  },
  {
    id: 9,
    title: <span>Next Generation Software</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3950/3950815.png",
    group: "Managements",
  },
  {
    id: 10,
    title: (
      <span>
        Real-Time Income & Expense Tracking
      </span>
    ),
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/online-expensive-report-3d-icon-png-download-5727732.png",
    group: "Finance",
  },
  {
    id: 11,
    title: (
      <span>
        Daily, Monthly, and Yearly Reports
      </span>
    ),
    image: "https://static.vecteezy.com/system/resources/thumbnails/050/699/202/small_2x/report-document-3d-illustration-png.png",
    group: "Finance",
  },
  {
    id: 12,
    title: (
      <span>
        Category-Wise Transaction Management
      </span>
    ),
    image: "https://cdn-icons-png.flaticon.com/512/1865/1865269.png",
    group: "Finance",
  },
  {
    id: 13,
    title: (
      <span>Customizable Expense Categories</span>
    ),
    image: "https://cdn3d.iconscout.com/3d/premium/preview/expense-tracking-3d-icon-png-download-8060296.png?f=webp&h=700",
    group: "Finance",
  },
  {
    id: 14,
    title: (
      <span>Automated Report Generation</span>
    ),
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/finance-report-3d-icon-png-download-5819017.png",
    group: "Finance",
  },
  {
    id: 15,
    title: (
      <span>PDF and Excel Export Options</span>
    ),
    image: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
    group: "Finance",
  },
  {
    id: 16,
    title: <span>Dashboard Overview</span>,
    image: "https://www.shutterstock.com/image-vector/computer-display-screen-diagram-charts-600nw-2441689731.jpg",
    group: "Managements",
  },
  {
    id: 17,
    title: (
      <span>
        Multi-User Access with Role-Based Permissions
      </span>
    ),
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/multi-user-access-3d-icon-png-download-10920125.png",
    group: "Managements",
  },
  {
    id: 18,
    title: <span>Secure Data Storage</span>,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/secure-data-storage-3d-icon-download-in-png-blend-fbx-gltf-file-formats--server-security-safe-pack-crime-icons-10247261.png?f=webp",
    group: "Support",
  },
  {
    id: 19,
    title: <span>Audit Trail</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3719/3719813.png",
    group: "Support",
  },
  {
    id: 20,
    title: (
      <span>Integration with Other Modules</span>
    ),
    image: "https://cdn-icons-png.flaticon.com/512/9311/9311485.png",
    group: "Apps",
  },
  {
    id: 21,
    title: <span>Mobile Accessibility</span>,
    image: "https://cdn-icons-png.flaticon.com/512/8462/8462282.png",
    group: "Apps",
  },
  {
    id: 22,
    title: (
      <span>Customizable Financial Templates</span>
    ),
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/finance-report-3d-icon-png-download-5806798.png",
    group: "Finance",
  },
  {
    id: 23,
    title: (
      <span>Recurring Transaction Management</span>
    ),
    image: "https://www.shutterstock.com/image-vector/3d-illustration-vector-render-credit-260nw-2617599075.jpg",
    group: "Finance",
  },
  {
    id: 24,
    title: <span>Budaget Planning Tools</span>,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Gy-eOXfBeAO_Iw5dCD25Q7YvhUgQVsEHOQ&s",
    group: "Finance",
  },
  {
    id: 25,
    title: <span>Alerts and Notifications</span>,
    image: "https://cdn-icons-png.flaticon.com/512/1827/1827270.png",
    group: "Communications",
  },
  {
    id: 26,
    title: (
      <span>Vendor and Supplier Management</span>
    ),
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd2IXCmXHxpUmLOSVMpJPbPeZBcrWVurOF2g&s",
    group: "Finance",
  },
  {
    id: 27,
    title: (
      <span>Tax Calculation and Reporting</span>
    ),
    image: "https://cdn-icons-png.flaticon.com/512/2799/2799498.png",
    group: "Finance",
  },
  {
    id: 28,
    title: <span>Bank Reconciliation</span>,
    image: "https://static.vecteezy.com/system/resources/thumbnails/032/517/120/small_2x/bank-reconciliation-color-icon-illustration-vector.jpg",
    group: "Finance",
  },
  {
    id: 29,
    title: <span>User-Friendly Interface</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3899/3899618.png",
    group: "Support",
  },
  {
    id: 30,
    title: <span>Fee Payment</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9b7z1bDhdhvjXVyEq9mAcz6wvC_iL4xV_sg&s",
    group: "Leads",
  },
  {
    id: 31,
    title: <span> Parent Communication</span>,
    image:
      "https://img.freepik.com/premium-photo/3d-cartoon-parents-engaging-parentteacher-meeting-highquality-image-illustrating-parental-i_980716-212298.jpg",
    group: "Managements",
  },
  // {
  //   id: 32,
  //   title: <span> Reporting & Analytics</span>,
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7OXyoZTRimJ3x6RXhFOQlltAS7KEBJkDaw&s",
  //   group: "Leads",
  // },
  {
    id: 33,
    title: <span>Inventory Follow Up</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7OXyoZTRimJ3x6RXhFOQlltAS7KEBJkDaw&s",
    group: "Leads",
  },
  {
    id: 34,
    title: <span>Scholarship System </span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6df4m7fBUkJuAgOR3epuyRwkKQ2X_YGy-Xw&s",
    group: "Admissions",
  },
  {
    id: 35,
    title: <span>Online Registration</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurWCxVgOvi_pgm0fKUm4ObWAdFMt9Cj1bjw&s",
    group: "Admissions",
  },
  {
    id: 36,
    title: <span>Fee Reminder</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnJqnk5yfcc_WRfjKIRBIrs00fCJdnqphLA&s",
    group: "Admissions",
  },
  {
    id: 37,
    title: <span>Document Verification</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxwoyW3jFGQGj9AMdH4ZH50jIjWQmW5YescQ&s",
    group: "Admissions",
  },
  {
    id: 38,
    title: <span> ID Card Creator</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGDvsaBAwJ8HMsl4s8KmuzKJ0ZCQk_fxSB2tLYJiCwcBq0mqTsjcI-z5uLFOTSyollRk&usqp=CAU",
    group: "Admissions",
  },
  {
    id: 39,
    title: <span>Document Verification</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/verified-document-3d-icon-download-in-png-blend-fbx-gltf-file-formats--approved-check-verification-pack-user-interface-icons-5915195.png?f=webp",
    group: "Admissions",
  },
  {
    id: 40,
    title: <span>Student Records</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3068/3068500.png",
    group: "Classroom",
  },
  {
    id: 41,
    title: <span>ID Card Generation</span>,
    image: "https://cdn-icons-png.flaticon.com/512/3861/3861172.png",
    group: "Classroom",
  },
  {
    id: 42,
    title: <span>Report Card Creator</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/report-card-3d-icon-download-in-png-blend-fbx-gltf-file-formats--grade-sheet-result-a-plus-education-icons-pack-university-8447586.png?f=webp",
    group: "Classrooms",
  },
  {
    id: 43,
    title: <span> Timetable & Scheduling</span>,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsNxqyo1qKbBUOKA25Ppjt32sgTXaxHt5VuA&s",
    group: "Classrooms",
  },
  {
    id: 44,
    title: <span>Result</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/result-3d-icon-download-in-png-blend-fbx-gltf-file-formats--test-report-search-survey-vote-pack-politics-icons-8356541.png",
    group: "Classrooms",
  },
  {
    id: 45,
    title: <span>EBook</span>,
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/ebook-3d-icon-download-in-png-blend-fbx-gltf-file-formats--study-write-online-e-learning-tool-computer-functions-pack-windows-interface-icons-8523464.png",
    group: "Classrooms",
  },
  {
    id: 46,
    title: (
      <span>Income Management Mobile App</span>
    ),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCodgTpG2Uk7AnOo6ujEgNBCgv2MwE0YkjiQ&s",
    group: "Apps",
  },
  {
    id: 47,
    title: (
      <span>Expense Management Mobile App</span>
    ),
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-development-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--app-design-application-technology-pack-user-interface-illustrations-4708214.png",
    group: "Apps",
  },
  {
    id: 48,
    title: "Income, Expense & Saving Comparison Dashboard",
    image: "https://png.pngtree.com/png-clipart/20250217/original/pngtree-budgeting-3d-icon-financial-planning-symbol-for-expense-management-and-money-png-image_20452281.png",
    group: "Dashboard",
  },
  {
    id: 49,
    title: "Monthly Trends Dashboard",
    image: "https://thumbs.dreamstime.com/b/monthly-report-d-icon-perfectly-isolated-white-background-business-financial-analysis-358982518.jpg",
    group: "Dashboard",
  },
  {
    id: 50,
    title: "Income By Category Dashboard",
    image: "https://static.vecteezy.com/system/resources/thumbnails/022/452/416/small_2x/3d-render-illustration-of-activity-icon-hands-are-building-growing-income-suitable-for-social-media-asset-web-app-presentation-png.png",
    group: "Dashboard",
  },
  {
    id: 51,
    title: "Expense By Category Dashboard",
    image: "https://thumbs.dreamstime.com/b/ai-generated-image-content-title-d-icon-illustrating-financial-expense-management-white-background-d-354620019.jpg",
    group: "Dashboard",
  },
  {
    id: 52,
    title: "User Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/team-management-3d-icon-png-download-4863041.png",
    group: "Income & Expense",
  },
  {
    id: 53,
    title: "Caregory Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/management-3d-icon-png-download-6723108.png",
    group: "Income & Expense",
  },
  {
    id: 54,
    title: "Payment Integration",
    image: "https://png.pngtree.com/png-clipart/20250207/original/pngtree-digital-payment-processing-gateway-with-a-3d-icon-isolated-on-transparent-png-image_20375449.png",
    group: "Income & Expense",
  },
  {
    id: 55,
    title: "GST Compliance",
    image: "https://cdn-icons-png.flaticon.com/256/12404/12404537.png",
    group: "Income & Expense",
  },
  {
    id: 56,
    title: "TDS Compliance",
    image: "https://cdn.iconscout.com/icon/free/png-256/free-tds-icon-svg-download-png-1538166.png",
    group: "Income & Expense",
  },
  {
    id: 57,
    title: "Billing & Invoicing",
    image: "https://static.vecteezy.com/system/resources/previews/066/762/242/non_2x/3d-icon-invoice-billing-png.png",
    group: "Income & Expense",
  },
  {
    id: 58,
    title: "Category Management",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/blog-3d-icon-png-download-9617430.png?f=webp",
    group: "Managements",
  },
  {
    id: 59,
    title: "User Management",
    image: "https://png.pngtree.com/png-clipart/20250217/original/pngtree-management-3d-icon-business-strategy-symbol-for-financial-planning-and-corporate-png-image_20452292.png",
    group: "Managements",
  },
  {
    id: 60,
    title: "Payment Mode",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/payment-3d-icon-png-download-5272924.png",
    group: "Managements",
  },
  {
    id: 61,
    title: "Billing & Invoicing Management",
    image: "https://static.vecteezy.com/system/resources/thumbnails/028/114/979/small_2x/invoice-3d-rendering-isometric-icon-png.png",
    group: "Managements",
  },
  {
    id: 62,
    title: "Whtsapp Message Integration",
    image: "https://static.vecteezy.com/system/resources/previews/049/810/881/non_2x/3d-whatsapp-notification-icon-one-new-message-in-the-inbox-concept-3d-illustration-free-png.png",
    group: "Communications",
  },
  {
    id: 63,
    title: "Text Message Integration",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/sms-3d-icon-png-download-10033812.png",
    group: "Communications",
  },
  {
    id: 64,
    title: "Email Message Integration",
    image: "https://static.vecteezy.com/system/resources/previews/019/153/015/non_2x/3d-minimal-online-communication-concept-social-network-online-connection-mail-icon-with-a-contact-and-message-icon-3d-illustration-free-png.png",
    group: "Communications",
  },
  {
    id: 65,
    title: "Bulk Message Integration",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/exchange-3d-icon-png-download-10968183.png",
    group: "Communications",
  },
  {
    id: 66,
    title: "Help Desk Support",
    image: "https://cdn-icons-png.flaticon.com/512/4961/4961759.png",
    group: "Support",
  },
  {
    id: 67,
    title: "Next Generation Software Updatation",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/software-update-3d-icon-png-download-11009195.png",
    group: "Support",
  },
  {
    id: 40,
    title: "Inventory List Reporting",
    image: "https://cdn-icons-png.flaticon.com/512/10473/10473656.png",
    group: "Report & Analytics",
  },
  {
    id: 41,
    title: "Inventory Category Reporting",
    image: "https://static.vecteezy.com/system/resources/previews/046/680/407/non_2x/3d-report-icon-report-symbol-3d-free-png.png",
    group: "Report & Analytics",
  },
  {
    id: 42,
    title: "Inventory User Reporting",
    image: "https://static.vecteezy.com/system/resources/previews/046/680/425/non_2x/3d-report-icon-report-symbol-3d-free-png.png",
    group: "Report & Analytics",
  },
  {
    id: 43,
    title: "Inventory Payment Reporting",
    image: "https://static.vecteezy.com/system/resources/thumbnails/047/666/837/small/business-planning-business-object-illustration-3d-png.png",
    group: "Report & Analytics",
  },
  {
    id: 44,
    title: "Inventory Feedback Reporting Analytics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsJ058P7MPoAdMN-nF3vj46nFUo35dwwo7Q&s",
    group: "Report & Analytics",
  },
  {
    id: 45,
    title: "Lead Task Reporting Analytics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61xKylgS10ddLCbPG7MLHebCHIeE53UTO-w&s",
    group: "Report & Analytics",
  },
  {
    id: 46,
    title: "Income Lead",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/income-3d-icon-png-download-5115847.png",
    group: "Leads",
  },
  {
    id: 47,
    title: "Expense Lead",
    image: "https://png.pngtree.com/png-clipart/20250217/original/pngtree-budgeting-3d-icon-financial-planning-symbol-for-expense-management-and-money-png-image_20452281.png",
    group: "Leads",
  },
  {
    id: 48,
    title: "Pending Income/Expense Lead",
    image: "https://static.vecteezy.com/system/resources/thumbnails/014/208/066/small_2x/expense-ratio-3d-rendering-isometric-icon-png.png",
    group: "Leads",
  },



];
const dashboardData = [
  {
    title: "Yearly/Monthly Inventory Dashboard",
    desc: "The overall design of the dashboard is user-friendly, colorful, and well-structured, giving a clear picture of financial activities. The blue, red, green, yellow, and grey sections make it easy to differentiate between categories. The sidebar on the left also provides various navigational icons for accessing other features of the system, making it suitable for institutions or organizations to manage their financial flow efficiently.",
    img: dashboard1,
  },
  {
    title: "Category Inventory Dashboard",
    desc: "The highest income comes from salary, contributing a massive ₹10,00,000. Other income sources include bills (₹90,000), software (₹74,500), and maintenance, which is relatively low. Electricity is listed but shows minimal or no contribution compared to the major sources. This highlights that salary forms the backbone of income for the institution, while other categories provide smaller but supplementary contributions.",
    img: dashboard2,
  },




];

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
    title: "Income Tracking",
    detail:
      "Record and categorize all income sources such as fees, grants, and donations in one centralized platform.",
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
  },
  {
    title: "Expense Management",
    detail:
      "Log and manage daily, monthly, and recurring expenses to gain full visibility of your financial outflows.",
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828859.png",
  },
  {
    title: "Budget Planning",
    detail:
      "Set department-wise budgets, monitor spend limits, and stay within financial targets effortlessly.",
    image: "https://cdn-icons-png.flaticon.com/512/3184/3184062.png",
  },
  {
    title: "Real-time Financial Reports",
    detail:
      "Generate instant balance sheets, cash flow reports, and income statements for smart decisions.",
    image: "https://cdn-icons-png.flaticon.com/512/11329/11329247.png",
  },
  {
    title: "Automated Reminders",
    detail:
      "Get alerts for due bills, upcoming renewals, and budget overruns to stay financially proactive.",
    image: "https://cdn-icons-png.flaticon.com/512/3771/3771518.png",
  },
  {
    title: "Audit Trail & Logs",
    detail:
      "Maintain complete logs of all financial activity for internal audits and compliance reporting.",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055644.png",
  },
  {
    title: "Secure Data Management",
    detail:
      "Protect sensitive financial records with encrypted storage and role-based access control.",
    image: "https://cdn-icons-png.flaticon.com/512/2889/2889676.png",
  },
  {
    title: "Custom Report Export",
    detail:
      "Export reports in PDF, Excel, or CSV formats for board meetings, tax filing, or external audits.",
    image: "https://cdn-icons-png.flaticon.com/512/2936/2936773.png",
  },
];

const IncomeExpenseSystem = () => {
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
              {/* Left Text Section */}
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
                  Inventory <span style={{ color: "#FFBF00" }}>Management</span> System
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
                >
                  <b>Track, manage, and optimize</b> your organization’s finances with our advanced
                  Income & Expense Management System. Seamlessly record income sources, categorize
                  expenses, and monitor cash flow in real-time—all from a single, user-friendly dashboard.
                  Generate detailed reports, set budgets, and gain complete financial transparency to
                  make informed business decisions.
                  <br /><br />
                  Stay on top of your financial health with automated alerts, role-based access, and
                  secure cloud storage that ensures your data is always safe and accessible.
                </Typography>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                  <Chip label="Real-time Tracking" color="primary" />
                  <Chip label="Detailed Reports" color="secondary" />
                  <Chip
                    label="Secure & Reliable"
                    sx={{ background: "#e1bee7", color: "#333" }}
                  />
                </Box>
              </Grid>

              {/* Right Image Section */}
              <Grid item xs={12} md={6} data-aos="fade-left">
                <motion.img
                  src={image1.src} // <-- Replace with Income & Expense image
                  alt="Income & Expense Management"
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
                <span className={styles.span}>A</span> Complete Solution for
                Financial Management and Expense Control
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
                The Income & Expense Management System is a powerful platform
                designed to simplify and automate your organization’s financial
                processes. From tracking daily income and monitoring expenses to
                generating real-time financial reports and budgeting analytics —
                this system ensures complete transparency, accuracy, and control
                over your finances.
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
        {/* Benefits Section */}
        <div className={styles.container2}>
          {/* Left Section: Phone Mockup */}
          <div className={styles.phoneMockup} data-aos="fade-right">
            <img
              className={styles.img22}
              src={phone.src}
              alt="Inventory Management Mobile"
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
              <span className={styles.highlight}>Inventory Management System</span>
            </h1>
            <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

            <ul className={styles.benefitList}>
              <li>
                <b>Centralized Financial Dashboard:</b> View all income and expense data
                in one intuitive interface.
              </li>
              <li>
                <b>Automated Income Tracking:</b> Record and categorize revenue streams
                effortlessly with real-time updates.
              </li>
              <li>
                <b>Expense Monitoring & Control:</b> Track every expense, prevent
                overspending, and identify spending patterns.
              </li>
              <li>
                <b>Budget Planning:</b> Set department-wise budgets and receive instant
                alerts when limits are exceeded.
              </li>
              <li>
                <b>Smart Report Generation:</b> Generate balance sheets, income
                statements, and cash flow reports instantly.
              </li>
              <li>
                <b>Recurring Reminders:</b> Set automated alerts for due payments,
                renewals, and bills.
              </li>
              <li>
                <b>Secure Data Storage:</b> Keep financial records safe with encrypted,
                role-based access control.
              </li>
              <li>
                <b>Custom Report Exports:</b> Export data in various formats for audits
                and presentations.
              </li>
              <li>
                <b>Mobile Access:</b> Manage finances anywhere, anytime through mobile
                devices.
              </li>
              <li>
                <b>Audit Trail & Logs:</b> Maintain a complete record of transactions
                for transparency and compliance.
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
              <span style={{ color: "#FFBF00" }}>Inventory</span>Management Dashboards
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

        {/* Income & Expense Management Section */}
        <Box sx={{ padding: "40px 20px" }}>
          <Container>
            {/* Income Management */}
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
                    Income Management
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      lineHeight: "1.8",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    The Income Management module helps institutions track and
                    categorize all revenue sources — including tuition,
                    donations, grants, and other inflows. It ensures real-time
                    visibility into financial performance.
                    <br />
                    <br />
                    By automating collection entries and integrating with other
                    finance tools, this system promotes accuracy, reduces
                    errors, and supports transparency in fund utilization.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.img
                  src="https://globaleducation.s3.ap-south-1.amazonaws.com/globaledu/gif/financial-management-advisory-services.gif"
                  alt="Income Management"
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

            {/* Expense Management */}
            <Grid
              container
              spacing={4}
              alignItems="center"
              sx={{ marginBottom: "40px" }}
            >
              <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                <motion.img
                  src="https://cdnl.iconscout.com/lottie/premium/thumb/calculate-expenses-animation-download-in-lottie-json-gif-static-svg-file-formats--manager-tax-report-earnings-consultant-business-management-pack-animations-9778966.gif"
                  alt="Expense Management"
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
                    Expense Management
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      lineHeight: "1.8",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    Expense Management enables systematic tracking of all
                    outgoing transactions such as salaries, utilities, and
                    operational costs. Categorized spending records ensure
                    accountability and planning.
                    <br />
                    <br />
                    It supports real-time notifications, budget enforcement, and
                    audit readiness — helping administrators control costs while
                    improving efficiency and transparency.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>

            {/* Financial Reporting */}
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
                    Financial Reporting
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      lineHeight: "1.8",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    With built-in reporting tools, institutions can generate
                    balance sheets, income statements, and cash flow summaries
                    instantly. These reports aid in strategic planning and
                    improve financial decision-making.
                    <br />
                    <br />
                    The system also allows customized exports for audits,
                    funding applications, and administrative reviews — reducing
                    time and effort while maintaining full financial clarity.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.img
                  src="https://cdn.prod.website-files.com/5f543735f8e374338e5778e7/5f74e12126bc76f650fabcc7_8a4e06_5d9a57e077b44e2684d2c10a3a13db99~mv2.gif"
                  alt="Financial Reporting"
                  style={{
                    width: "100%",
                    maxWidth: 380,
                    height: "auto",
                    maxHeight: 260,
                    objectFit: "contain",
                    borderRadius: "10px",
                    display: "block",
                    margin: "0 auto",
                    scale: 1.04,
                    boxShadow: "0px 8px 24px rgba(52,152,219,0.18)",
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
              of Inventory Management System
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

export default IncomeExpenseSystem;
