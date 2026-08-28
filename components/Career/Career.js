import React, { useEffect, useState, useRef } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Chip,
  Box,
  Container,
  Paper,
  IconButton,
  Stack,
  Avatar,
} from "@mui/material";
import Swal from "sweetalert2";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import StarIcon from "@mui/icons-material/Star";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AOS from "aos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ComputerIcon from "@mui/icons-material/Computer";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import EditNoteIcon from "@mui/icons-material/EditNote";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CloudIcon from "@mui/icons-material/Cloud";
import BugReportIcon from "@mui/icons-material/BugReport";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import whyimage from "../images/Why-Choose-Landing-2.jpg";
import whyimage1 from "../images/Why-Choose-Us-Landing.jpg";
import userimage from "../images/usernew.jpeg";
import usernew1 from "../images/usernew1.jpeg";
import usernew3 from "../images/usernew3.jpeg";
import usernew4 from "../images/usernew4.jpeg";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import styles from "./Career.module.css";
import mapimg from "../images/map.png";
import autech from "../images/IT Compnay/amazon.png"
import bajaj from "../images/IT Compnay/BAJAJ.webp"
import ezmid from "../images/IT Compnay/capgemini-logo.jpg"
import fintech from "../images/IT Compnay/flipkart-logo.webp"
import merlion from "../images/IT Compnay/google-logo.webp"
import AIS from "../images/IT Compnay/infosys-logo.png"
import autoscale from "../images/IT Compnay/mastercard-logo.png"
import dtc from "../images/IT Compnay/tcs-logo.jpeg"


const ITEMS_PER_PAGE = 4;
const AUTO_SCROLL_INTERVAL = 5000;
const headerBg = "linear-gradient(90deg,rgb(10, 11, 11) 0%, #2874A6 100%)";
const industryTabs = [{ label: "IT Jobs" }, { label: "Non IT Jobs" }];
const cardWidth = 310;
const testimonials = [
  {
    name: "Ankita Patil",
    image: usernew1,
    companyName: "E MOTORAD",
    CompanyProfile: "React Developer",
    Companypackage: "5 LPA",
    companyTag: "Premium E-Cycles",
  },
  {
    name: "Pooja Sagar",
    image: userimage,
    companyName: "TALVIEW",
    CompanyProfile: "Java Developer",
    Companypackage: "7 LPA",
    companyTag: "Premium E-Cycles",
  },
  {
    name: "Tanvi Kulkarni",
    image: usernew3,
    companyName: "S Company",
    CompanyProfile: "Python Developer",
    Companypackage: "5 LPA",
    companyTag: "Premium E-Cycles",
  },
  {
    name: "Aditi Basri",
    image: usernew4,
    companyName: "infynix",
    CompanyProfile: "React Developer",
    Companypackage: "6 LPA",
    companyTag: "Premium E-Cycles",
  },
  // {
  //   name: "Aditi Basri",
  //   image: usernew4,
  //   companyName: "infynix",
  //   CompanyProfile: "React Developer",
  //   Companypackage: "6 LPA",
  //   companyTag: "Premium E-Cycles",
  // },
  // {
  //   name: "Aditi Basri",
  //   image: usernew4,
  //   companyName: "infynix",
  //   CompanyProfile: "React Developer",
  //   Companypackage: "6 LPA",
  //   companyTag: "Premium E-Cycles",
  // },
  // {
  //   name: "Aditi Basri",
  //   image: usernew4,
  //   companyName: "infynix",
  //   CompanyProfile: "React Developer",
  //   Companypackage: "6 LPA",
  //   companyTag: "Premium E-Cycles",
  // },
  // {
  //   name: "Aditi Basri",
  //   image: usernew4,
  //   companyName: "infynix",
  //   CompanyProfile: "React Developer",
  //   Companypackage: "6 LPA",
  //   companyTag: "Premium E-Cycles",
  // },
  // {
  //   name: "Aditi Basri",
  //   image: usernew4,
  //   companyName: "infynix",
  //   CompanyProfile: "React Developer",
  //   Companypackage: "6 LPA",
  //   companyTag: "Premium E-Cycles",
  // },
  // {
  //   name: "Aditi Basri",
  //   image: usernew4,
  //   companyName: "infynix",
  //   CompanyProfile: "React Developer",
  //   Companypackage: "6 LPA",
  //   companyTag: "Premium E-Cycles",
  // },
];
const sliderInterval = 13500;

const features = [
  {
    icon: <WorkIcon />,
    title: "Industry - Focused Expertise",
    desc: "As a Top Recruitment Agency, we make the hiring process efficient and effective for businesses across India.",
  },
  {
    icon: <PublicIcon />,
    title: "Pre-Screened, Job Ready Candidate",
    desc: "We connect employers with top talent nationwide, ensuring a broad reach across the country.",
  },
  {
    icon: <PeopleIcon />,
    title: " End-to-End Placement Support",
    desc: "With over 5 million active candidates in our database, Talent Track Services offers unmatched access to diverse professionals.",
  },
  {
    icon: <ThumbUpIcon />,
    title: "Career Guidance for candidates",
    desc: "Our reputation as a Leading Manpower Agency extends across India and beyond, with over 2000 satisfied clients.",
  },
];

const featuresnew = [
  {
    icon: <WorkIcon />,
    title: "Cost- Effective Staffing Solution",
    desc: "As a Top Recruitment Agency, we make the hiring process efficient and effective for businesses across India.",
  },
  {
    icon: <PublicIcon />,
    title: "Truesed by Multiple Companies",
    desc: "We connect employers with top talent nationwide, ensuring a broad reach across the country.",
  },
  {
    icon: <PeopleIcon />,
    title: "Fast Hiring Turnaround",
    desc: "With over 5 million active candidates in our database, Talent Track Services offers unmatched access to diverse professionals.",
  },
  {
    icon: <ThumbUpIcon />,
    title: "Real Opening And Real Support",
    desc: "Our reputation as a Leading Manpower Agency extends across India and beyond, with over 2000 satisfied clients.",
  },
];

const itJobs = [
  {
    title: "Java",
    icon: <CodeIcon sx={{ fontSize: 48, color: "#1976d2" }} />,
    tags: ["Backend", "Spring", "J2EE"],
  },
  {
    title: ".Net",
    icon: <CodeIcon sx={{ fontSize: 48, color: "#512da8" }} />,
    tags: ["C#", "ASP.NET", "MVC"],
  },
  {
    title: "Cloud",
    icon: <CloudIcon sx={{ fontSize: 48, color: "#0288d1" }} />,
    tags: ["AWS", "Azure", "GCP"],
  },
  {
    title: "Python",
    icon: <CodeIcon sx={{ fontSize: 48, color: "#388e3c" }} />,
    tags: ["Django", "Flask", "ML"],
  },
  {
    title: "Mernstack",
    icon: <ComputerIcon sx={{ fontSize: 48, color: "#00bcd4" }} />,
    tags: ["MongoDB", "Express", "React", "Node"],
  },
  {
    title: "Meanstack",
    icon: <ComputerIcon sx={{ fontSize: 48, color: "#43a047" }} />,
    tags: ["MongoDB", "Express", "Angular", "Node"],
  },
  {
    title: "Technical support",
    icon: <SupportAgentIcon sx={{ fontSize: 48, color: "#ff9800" }} />,
    tags: ["Helpdesk", "IT Support"],
  },
  {
    title: "Software Testing (Automation + Manual)",
    icon: <BugReportIcon sx={{ fontSize: 48, color: "#e91e63" }} />,
    tags: ["Selenium", "Manual", "QA"],
  },
];

const nonItJobs = [
  {
    title: "Medical",
    icon: <LocalHospitalIcon sx={{ fontSize: 48, color: "#43a047" }} />,
    tags: ["Doctor", "Paramedic"],
  },
  {
    title: "Nursing",
    icon: <PeopleIcon sx={{ fontSize: 48, color: "#1976d2" }} />,
    tags: ["Staff Nurse", "Ward"],
  },
  {
    title: "Hospitals",
    icon: <LocalHospitalIcon sx={{ fontSize: 48, color: "#e91e63" }} />,
    tags: ["Reception", "Admin"],
  },
  {
    title: "Graphics",
    icon: <DesignServicesIcon sx={{ fontSize: 48, color: "#ff9800" }} />,
    tags: ["Designer", "Photoshop"],
  },
  {
    title: "Mechanical",
    icon: <EngineeringIcon sx={{ fontSize: 48, color: "#607d8b" }} />,
    tags: ["Production", "Maintenance"],
  },
  {
    title: "Engineering",
    icon: <EngineeringIcon sx={{ fontSize: 48, color: "#1976d2" }} />,
    tags: ["Civil", "Electrical"],
  },
  {
    title: "Marketings",
    icon: <BusinessCenterIcon sx={{ fontSize: 48, color: "#00bcd4" }} />,
    tags: ["Sales", "Digital"],
  },
  {
    title: "Administrative Assistant",
    icon: <AssignmentIndIcon sx={{ fontSize: 48, color: "#8d6e63" }} />,
    tags: ["Admin", "Clerical"],
  },
  {
    title: "Office Manager",
    icon: <ManageAccountsIcon sx={{ fontSize: 48, color: "#512da8" }} />,
    tags: ["Admin", "Manager"],
  },
  {
    title: "Accountant",
    icon: <AccountBalanceIcon sx={{ fontSize: 48, color: "#388e3c" }} />,
    tags: ["Finance", "Tally"],
  },
  {
    title: "Financial Analyst",
    icon: <AccountBalanceIcon sx={{ fontSize: 48, color: "#0288d1" }} />,
    tags: ["Finance", "Analysis"],
  },
  {
    title: "Payroll Specialist",
    icon: <AssignmentIndIcon sx={{ fontSize: 48, color: "#ff9800" }} />,
    tags: ["Payroll", "HR"],
  },
  {
    title: "Human Resource",
    icon: <PeopleIcon sx={{ fontSize: 48, color: "#e91e63" }} />,
    tags: ["HR", "Recruitment"],
  },
  {
    title: "Business Development Executive",
    icon: <BusinessCenterIcon sx={{ fontSize: 48, color: "#1976d2" }} />,
    tags: ["Sales", "BD"],
  },
  {
    title: "Medical Billing Specialist",
    icon: <AssignmentIndIcon sx={{ fontSize: 48, color: "#43a047" }} />,
    tags: ["Billing", "Medical"],
  },
  {
    title: "Grafic Designer",
    icon: <DesignServicesIcon sx={{ fontSize: 48, color: "#00bcd4" }} />,
    tags: ["Design", "Creative"],
  },
  {
    title: "Content Strategist",
    icon: <EditNoteIcon sx={{ fontSize: 48, color: "#512da8" }} />,
    tags: ["Content", "Writing"],
  },
  {
    title: "Video Editor",
    icon: <VideoLibraryIcon sx={{ fontSize: 48, color: "#e91e63" }} />,
    tags: ["Editing", "Media"],
  },
  {
    title: "Digital Marketing",
    icon: <BusinessCenterIcon sx={{ fontSize: 48, color: "#00bcd4" }} />,
    tags: ["SEO", "Social Media"],
  },
  {
    title: "Sales Executive",
    icon: <BusinessCenterIcon sx={{ fontSize: 48, color: "#388e3c" }} />,
    tags: ["Sales", "Field"],
  },
  {
    title: "Marketing Manager",
    icon: <BusinessCenterIcon sx={{ fontSize: 48, color: "#1976d2" }} />,
    tags: ["Marketing", "Manager"],
  },
];

const counters = [
  { label: "Years of Experience", value: 4, suffix: "+", color: "#269DD7" },
  { label: "Employer", value: 6000, suffix: "+", color: "#269DD7" },
  { label: "Jobseeker", value: 2000000, suffix: "+", color: "#269DD7" },
  { label: "Job Role", value: 250, suffix: "+", color: "#269DD7" },
  { label: "Cities", value: 50, suffix: "+", color: "#269DD7" },
  { label: "Category", value: 30, suffix: "+", color: "#269DD7" },


];

const categories = [
  {
    title: "Full-Time Jobs",
    icon: <WorkOutlineIcon sx={{ fontSize: 48, color: "#2196f3" }} />,
    iconBg: "#e3f2fd",
    rating: 4.2,
    openings: "8.5K+",
    tags: ["Corporate", "Remote", "On-site"],
  },
  {
    title: "Part-Time Jobs",
    icon: <AccessTimeIcon sx={{ fontSize: 48, color: "#43a047" }} />,
    iconBg: "#e8f5e9",
    rating: 3.8,
    openings: "3.6K+",
    tags: ["Flexible", "Weekend", "Hourly"],
  },
  {
    title: "Contract Based",
    icon: <AssignmentIcon sx={{ fontSize: 48, color: "#8e24aa" }} />,
    iconBg: "#f3e5f5",
    rating: 4.1,
    openings: "2.9K+",
    tags: ["Fixed-term", "Project", "Freelance"],
  },
  {
    title: "Temporary",
    icon: <AssignmentTurnedInIcon sx={{ fontSize: 48, color: "#ffb300" }} />,
    iconBg: "#fffde7",
    rating: 3.7,
    openings: "1.8K+",
    tags: ["Seasonal", "Short-term", "Temp-to-hire"],
  },
];

// --- CLIENT LOGOS DATA ---
const clientLogos = [
  {
    name: "",
    logo: autech
  },
  {
    name: "",
    logo: bajaj
  },
  {
    name: "",
    logo: ezmid
  },
  {
    name: "",
    logo: fintech
  },
  {
    name: "",
    logo: merlion
  },
  {
    name: "",
    logo: AIS
  },
  {
    name: "",
    logo: autoscale
  },
  {
    name: "",
    logo: dtc
  },




];
// --- COUNTER ANIMATION LOGIC ---
const useAnimatedCounters = (counters) => {
  const [animatedValues, setAnimatedValues] = useState(counters.map(() => 0));
  
  useEffect(() => {
    const timers = [];
    counters.forEach((counter, idx) => {
      let current = 0;
      const increment = Math.ceil(counter.value / 40);
      timers[idx] = setInterval(() => {
        current += increment;
        setAnimatedValues((prev) => {
          const updated = [...prev];
          updated[idx] = current > counter.value ? counter.value : current;
          return updated;
        });
        if (current >= counter.value) clearInterval(timers[idx]);
      }, 30);
    });
    return () => timers.forEach((t) => clearInterval(t));
  }, [counters]);
  return animatedValues;
};



const jobTypeColor = (type) =>
  type === "International" ? "primary" : "success";

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef();
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

  const [industryTab, setIndustryTab] = useState("IT Jobs");
  const sliderRefIndustry = useRef();

  const filteredIndustryCards = industryTab === "IT Jobs" ? itJobs : nonItJobs;

  const getVisibleCount = () => {
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 900) return 2;
    return 4;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  const handlePrevIndustry = () => {
    sliderRefIndustry.current.scrollBy({
      left: -cardWidth - 24,
      behavior: "smooth",
    });
  };
  const handleNextIndustry = () => {
    sliderRefIndustry.current.scrollBy({
      left: cardWidth + 24,
      behavior: "smooth",
    });
  };

  const animatedValues = useAnimatedCounters(counters);

  // --- AUTO SCROLL LOGO LOGIC ---
  const scrollRef = useRef(null);
  useEffect(() => {
  const scrollContainer = scrollRef.current;
  if (!scrollContainer) return;

  const scrollSpeed = 1; // adjust if too fast or slow
  let scrollPosition = 0;

  const scroll = () => {
    if (!scrollContainer) return;
    scrollPosition += scrollSpeed;
    if (scrollPosition >= scrollContainer.scrollWidth / 2) {
      scrollPosition = 0;
    }
    scrollContainer.scrollLeft = scrollPosition;
    requestAnimationFrame(scroll);
  };

  const animationId = requestAnimationFrame(scroll);
  return () => cancelAnimationFrame(animationId);
}, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-back",
      once: true,
    });
  }, []);

  useEffect(() => {
    timeoutRef.current = setTimeout(
      () => setIndex((prev) => (prev + 1) % testimonials.length),
      sliderInterval
    );
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(interval);
  }, [totalPages, visibleCount, testimonials.length]);

  const translateX = `-${page * 100}%`;


  const getVisibleTestimonials = () => {
    let start = page * visibleCount;
    let end = start + visibleCount;
    if (end <= testimonials.length) {
      return testimonials.slice(start, end);
    } else {
      return [
        ...testimonials.slice(start),
        ...testimonials.slice(0, end - testimonials.length),
      ];
    }
  };

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // States for counters
  const [experience, setExperience] = useState(0);
  const [successImpl, setSuccessImpl] = useState(0);
  const [currentUsers, setCurrentUsers] = useState(0);
  const [teachers, setTeachers] = useState(0);
  const [services, setServices] = useState(0);

  useEffect(() => {
    fetch("Jobs.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading jobs:", error);
        setLoading(false);
      });
  }, []);

  const handleApply = (jobTitle) => {
    Swal.fire({
      title: "Applied!",
      text: `You have successfully applied for ${jobTitle}.`,
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    });
  };

  if (jobs.length === 0)
    return (
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Typography variant="h5" color="error">
            No jobs available
          </Typography>
        </motion.div>
      </Box>
    );

  return (
    <Box sx={{ minHeight: "100vh", pb: 1 }}>
      {/* Header Section */}
      <Box
        sx={{
          background: headerBg,
          py: { xs: 5, md: 7 },
          mb: 5,
          borderRadius: "0 0 40px 40px",
          boxShadow: "0 8px 32px rgba(52,152,219,0.13)",
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
                mb: 2,
                letterSpacing: 1,
              }}
            >
              Career & Placement Opportunities
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#e3f2fd",
                textAlign: "center",
                mb: 2,
                fontWeight: 400,
                maxWidth: 700,
                mx: "auto",
              }}
            >
              We provide <b>Domestic</b> and <b>International</b> job
              opportunities for Skilled professionals. Explore your dream job
              and take your career to the next level with us!
            </Typography>
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Chip
                label="Domestic Jobs"
                color="success"
                sx={{ mx: 1, fontWeight: "bold", fontSize: "1rem" }}
              />
              <Chip
                label="International Jobs"
                color="primary"
                sx={{ mx: 1, fontWeight: "bold", fontSize: "1rem" }}
              />
              <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  borderRadius={4}
                  href="https://fasthire.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ fontWeight: "bold", fontSize: "1rem", px: 4 }}
                >
                  Explore Jobs
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    
      {/* --- Animated Counters Section --- */}
      <Box sx={{ background: "#fff", py: { xs: 4, md: 7 } }}>
        <Container>
          <Typography
            fontWeight="bold"
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontSize: { xs: "2rem", md: "2.8rem" },
              mb: 4,
              color: "#222",
              letterSpacing: 1,
            }}
          >
            <span style={{ color: "#269DD7" }}>
              Your Placement is Unique We've got it Coversed
            </span>
          </Typography>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            {counters.map((counter, idx) => (
              <Grid item xs={6} sm={4} md={2} key={counter.label}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  style={{ textAlign: "center" }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: counter.color,
                      fontWeight: "bold",
                      fontSize: { xs: "1.5rem", md: "2.2rem" },
                    }}
                  >
                    {animatedValues[idx]}
                    {counter.suffix}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "#555", fontWeight: 400, fontSize: "1.1rem" }}
                  >
                    {counter.label}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    
      <Box sx={{ background: "#f6fcff", py: { xs: 5, md: 7 } }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          sx={{ mb: 5, color: "#222", letterSpacing: 1 }}
        >
          Our learners got guaranteed placement !....
        </Typography>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
          sx={{ px: { xs: 2, md: 8 } }}
        >
          {getVisibleTestimonials().map((t, i) => (
            <Grid
              item
              xs={12}
              sm={visibleCount === 2 ? 6 : 12 / visibleCount}
              md={12 / visibleCount}
              key={t.name + i}
              component={motion.div}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ display: "flex" }}
            >
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 5,
                  p: 3,
                  width: "100%",
                  minHeight: 340,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "#fff",
                  boxShadow: "0 4px 18px rgba(34, 112, 165, 0.07)",
                }}
              >
                <Avatar
                  src={t.image}
                  alt={t.name}
                  sx={{
                    width: 110,
                    height: 110,
                    mb: 2,
                    borderRadius: 3,
                    objectFit: "cover",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#222",
                    textAlign: "center",
                  }}
                >
                  {t.name}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#1976d2",
                      fontWeight: 500,
                      fontSize: "1rem",
                      mt: 1,
                    }}
                  >
                    {t.CompanyProfile}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#1976d2",
                      fontWeight: 500,
                      fontSize: "1rem",
                      mt: 1,
                    }}
                  >
                    {t.companyName}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#1976d2",
                      fontWeight: 500,
                      fontSize: "1rem",
                      mt: 1,
                    }}
                  >
                    {t.Companypackage}
                  </Typography>
                  {t.companyTag && (
                    <Typography
                      variant="caption"
                      sx={{ color: "#555", fontSize: "0.95rem" }}
                    >
                      {t.companyTag}
                    </Typography>
                  )}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          background: "#fff",
          py: { xs: 4, md: 7 },
          px: { xs: 2, md: 5, lg: 10 },
          mt: 4,
          borderRadius: 4,
          boxShadow: "0 4px 18px rgba(34, 112, 165, 0.07)",
        }}
      >
        <Container>
          <Grid container spacing={5} alignItems="center">
            {/* Left Image */}
            <Grid item xs={12} md={6}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={whyimage} // Replace with actual image path
                  alt="Handshake"
                  style={{ width: "88%", borderRadius: "10px" }}
                />
              </Box>
            </Grid>

            {/* Right Content */}
            <Grid item xs={12} md={6}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#2874A6",
                    mb: 2,
                    letterSspacing: 1,
                  }}
                >
                  Why to choose{" "}
                  <span style={{ color: "#169DD7" }}>PJSofttech</span>
                </Typography>

                <Stack spacing={4} mt={4}>
                  {features.map((item, i) => (
                    <Box key={i} display="flex" alignItems="flex-start">
                      <Avatar
                        sx={{
                          bgcolor: "rgb(38,157,215)",
                          color: "white",
                          width: 48,
                          height: 48,
                          mr: 2,
                        }}
                      >
                        {item.icon}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                          {item.title}
                        </Typography>
                        <Typography color="text.secondary">
                          {item.desc}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Grid container spacing={5} alignItems="center">
            {/* Left Image */}
            <Grid item xs={12} md={6}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Stack spacing={4} mt={4}>
                  {featuresnew.map((item, i) => (
                    <Box key={i} display="flex" alignItems="flex-start">
                      <Avatar
                        sx={{
                          bgcolor: "rgb(38,157,215)",
                          color: "white",
                          width: 48,
                          height: 48,
                          mr: 2,
                        }}
                      >
                        {item.icon}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                          {item.title}
                        </Typography>
                        <Typography color="text.secondary">
                          {item.desc}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* Right Content */}

            <Grid item xs={12} md={6}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={whyimage1} // Replace with actual image path
                  alt="Handshake"
                  style={{ width: "88%", borderRadius: "10px" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ background: "#fff", py: { xs: 4, md: 7 } }}>
       
          <Typography
            variant="h4"
            sx={{
              color: "#169DD7",
              fontWeight: "bold",
              textAlign: "center",
              mb: 4,
              fontSize: { xs: "1.5rem", md: "2.3rem" },
              letterSpacing: 1,
            }}
          >
            Our Respected Clients
          </Typography>

          {/* Slider container */}
          <Box
            ref={scrollRef}
            className={styles.clientScroll}
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: { xs: 3, md: 6 },
              py: 3,
              px: 1,
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": { display: "none" },
              alignItems: "center",
              borderRadius: 3,
              mb: 3,
              background: "#f5faff",
              scrollBehavior: "smooth",
            }}
          >
            {[...clientLogos, ...clientLogos].map((client, idx) => (
              <motion.div
                key={client.name + idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  textAlign: "center",
                  minWidth: 160,
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  style={{
                    width: "160px",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "12px",
                    background: "#fff",
                    boxShadow: "0 4px 12px rgba(22,157,215,0.15)",
                    marginBottom: "10px",
                    padding: "12px",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <Typography
                  variant="caption"
                  sx={{
                    color: "#333",
                    display: "block",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    textAlign: "center",
                  }}
                >
                  {client.name}
                </Typography>
              </motion.div>
            ))}
          </Box>
      </Box>

      <Box
        sx={{
          background: "#fff",
          py: { xs: 4, md: 7 },
          px: { xs: 2, md: 5, lg: 10 }, // left/right margin for all screens
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 4,
          }}
        >
          Job Categories
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {categories.map((cat, idx) => (
            <Grid item xs={12} sm={6} md={3} key={cat.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    borderRadius: 3,
                    p: 3,
                    minHeight: 270,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "box-shadow 0.3s",
                    "&:hover": {
                      boxShadow: "0 8px 32px rgba(33,150,243,0.13)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      background: cat.iconBg,
                      borderRadius: "50%",
                      width: 70,
                      height: 70,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    {cat.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      mb: 1,
                      mt: 1,
                    }}
                  >
                    {cat.title}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <StarIcon
                      sx={{ color: "#ffb300", fontSize: 20, mr: 0.5 }}
                    />
                    <Typography sx={{ fontWeight: 500, fontSize: "1.1rem" }}>
                      {cat.rating}
                    </Typography>
                    <Typography
                      sx={{ color: "#555", ml: 1, fontSize: "1.1rem" }}
                    >
                      {cat.openings} openings
                    </Typography>
                  </Box>
                  <Box
                    sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 1 }}
                  >
                    {cat.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          background: "#f5f5f5",
                          fontWeight: 500,
                          fontSize: "0.95rem",
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          background: "#fff",
          py: { xs: 4, md: 7 },
          px: { xs: 2, md: 5, lg: 10 },
          // left/right margin for all screens
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bsold",
            textAlign: "center",
            mb: 4,
            letterSpacing: 1,
          }}
        >
          Job Types
        </Typography>
        <Grid container spacing={3} justifyC

          ontent="center">
          {/* On-site Jobs */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={2}
              sx={{
                borderRadius: 3,
                p: 3,
                minHeight: 270,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "box-shadow 0.3s",
                "&:hover": {
                  boxShadow: "0 8px 32px rgba(33,150,243,0.13)",
                },
              }}
            >
              <Box
                sx={{
                  background: "#e3f8fd",
                  borderRadius: "50%",
                  width: 70,
                  height: 70,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <DirectionsBusFilledIcon
                  sx={{ fontSize: 48, color: "#1e88e5" }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  mb: 1,
                  mt: 1,
                }}
              >
                On-site Jobs
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <StarIcon sx={{ color: "#ffb300", fontSize: 20, mr: 0.5 }} />
                <Typography sx={{ fontWeight: 500, fontSize: "1.1rem" }}>
                  4.0
                </Typography>
                <Typography sx={{ color: "#555", ml: 1, fontSize: "1.1rem" }}>
                  15,480 jobs
                </Typography>
              </Box>
              <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 1 }}>
                <Chip
                  label="Office"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
                <Chip
                  label="In-person"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
                <Chip
                  label="Local"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
              </Box>
            </Paper>
          </Grid>

          {/* Remote Jobs */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={2}
              sx={{
                borderRadius: 3,
                p: 3,
                minHeight: 270,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "box-shadow 0.3s",
                "&:hover": {
                  boxShadow: "0 8px 32px rgba(33,150,243,0.13)",
                },
              }}
            >
              <Box
                sx={{
                  background: "#fff7ed",
                  borderRadius: "50%",
                  width: 70,
                  height: 70,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <WorkOutlineIcon sx={{ fontSize: 48, color: "#fb8c00" }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  mb: 1,
                  mt: 1,
                }}
              >
                Remote Jobs
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <StarIcon sx={{ color: "#ffb300", fontSize: 20, mr: 0.5 }} />
                <Typography sx={{ fontWeight: 500, fontSize: "1.1rem" }}>
                  4.6
                </Typography>
                <Typography sx={{ color: "#555", ml: 1, fontSize: "1.1rem" }}>
                  12,350 jobs
                </Typography>
              </Box>
              <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 1 }}>
                <Chip
                  label="Work from Home"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
                <Chip
                  label="Global"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
                <Chip
                  label="Flexible"
                  size="small"
                  sx={{ bacskground: "#f5f5f5" }}
                />
              </Box>
            </Paper>
          </Grid>
          {/* Hybrid Jobs */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={2}
              sx={{
                borderRadius: 3,
                p: 3,
                minHeight: 270,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "box-shadow 0.3s",
                "&:hover": {
                  boxShadow: "0 8px 32px rgba(33,150,243,0.13)",
                },
              }}
            >
              <Box
                sx={{
                  background: "#edf8e3",
                  borderRadius: "50%",
                  width: 70,
                  height: 70,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <HomeWorkIcon sx={{ fontSize: 48, color: "#43a047" }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  mb: 1,
                  mt: 1,
                }}
              >
                Hybrid Jobs
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <StarIcon sx={{ color: "#ffb300", fontSize: 20, mr: 0.5 }} />
                <Typography sx={{ fontWeight: 500, fontSize: "1.1rem" }}>
                  4.3
                </Typography>
                <Typography sx={{ color: "#555", ml: 1, fontSize: "1.1rem" }}>
                  9,870 jobs
                </Typography>
              </Box>
              <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 1 }}>
                <Chip
                  label="Flexible"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
                <Chip
                  label="Part-remote"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
                <Chip
                  label="Modern"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
              </Box>
            </Paper>
          </Grid>
          {/* Internships */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={2}
              sx={{
                borderRadius: 3,
                p: 3,
                minHeight: 270,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "box-shadow 0.3s",
                "&:hover": {
                  boxShadow: "0 8px 32px rgba(33,150,243,0.13)",
                },
              }}
            >
              <Box
                sx={{
                  background: "#e3f8fd",
                  borderRadius: "50%",
                  width: 70,
                  height: 70,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <TrendingUpIcon sx={{ fontSize: 48, color: "#26c6da" }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  mb: 1,
                  mt: 1,
                }}
              >
                Internships
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <StarIcon sx={{ color: "#ffb300", fontSize: 20, mr: 0.5 }} />
                <Typography sx={{ fontWeight: 500, fontSize: "1.1rem" }}>
                  3.9
                </Typography>
                <Typography sx={{ color: "#555", ml: 1, fontSize: "1.1rem" }}>
                  8,450 jobs
                </Typography>
              </Box>
              <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 1 }}>
                <Chip
                  label="Students"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
                <Chip
                  label="Paid"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
                <Chip
                  label="Summer"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          background: "#fff",
          py: { xs: 4, md: 7 },
          px: { xs: 2, md: 5, lg: 10 }, // left/right margin for all screens
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 4,
            letterSpacing: 1,
          }}
        >
          Popular Job Locations
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {/* On-site Jobs */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={2}
              sx={{
                borderRadius: 3,
                p: 3,
                minHeight: 270,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "box-shadow 0.3s",
                "&:hover": {
                  boxShadow: "0 8px 32px rgba(33,150,243,0.13)",
                },
              }}
            >
              <Box
                sx={{
                  background: "#e3f8fd",
                  borderRadius: "50%",
                  width: 70,
                  height: 70,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <img
                  src={mapimg} // <-- replace with your image path or URL
                  alt=""
                  style={{
                    width: 40,
                    height: 40,
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  textAlign: "center",
                  mb: 1,
                  mt: 1,
                }}
              >
                Bangalore
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <StarIcon sx={{ color: "#ffb300", fontSize: 20, mr: 0.5 }} />
                <Typography sx={{ fontWeight: 500, fontSize: "1.1rem" }}>
                  4.0
                </Typography>
                <Typography sx={{ color: "#555", ml: 1, fontSize: "1.1rem" }}>
                  15,480 jobs
                </Typography>
              </Box>
              <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 1 }}>
                <Chip
                  label="Office"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
                <Chip
                  label="In-person"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
                <Chip
                  label="Local"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
              </Box>
            </Paper>
          </Grid>
          {/* Remote Jobs */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={2}
              sx={{
                borderRadius: 3,
                p: 3,
                minHeight: 270,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "box-shadow 0.3s",
                "&:hover": {
                  boxShadow: "0 8px 32px rgba(33,150,243,0.13)",
                },
              }}
            >
              <Box
                sx={{
                  background: "#e3f8fd",
                  borderRadius: "50%",
                  width: 70,
                  height: 70,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <img
                  src={mapimg} // <-- replace with your image path or URL
                  alt=""
                  style={{
                    width: 40,
                    height: 40,
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  textAlign: "center",
                  mb: 1,
                  mt: 1,
                }}
              >
                Mumbai
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <StarIcon sx={{ color: "#ffb300", fontSize: 20, mr: 0.5 }} />
                <Typography sx={{ fontWeight: 500, fontSize: "1.1rem" }}>
                  4.6
                </Typography>
                <Typography sx={{ color: "#555", ml: 1, fontSize: "1.1rem" }}>
                  12,350 jobs
                </Typography>
              </Box>
              <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 1 }}>
                <Chip
                  label="Work from Home"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
                <Chip
                  label="Global"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
                <Chip
                  label="Flexible"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
              </Box>
            </Paper>
          </Grid>
          {/* Hybrid Jobs */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={2}
              sx={{
                borderRadius: 3,
                p: 3,
                minHeight: 270,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "box-shadow 0.3s",
                "&:hover": {
                  boxShadow: "0 8px 32px rgba(33,150,243,0.13)",
                },
              }}
            >
              <Box
                sx={{
                  background: "#e3f8fd",
                  borderRadius: "50%",
                  width: 70,
                  height: 70,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <img
                  src={mapimg} // <-- replace with your image path or URL
                  alt=""
                  style={{
                    width: 40,
                    height: 40,
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  textAlign: "center",
                  mb: 1,
                  mt: 1,
                }}
              >
                Delhi NCR
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <StarIcon sx={{ color: "#ffb300", fontSize: 20, mr: 0.5 }} />
                <Typography sx={{ fontWeight: 500, fontSize: "1.1rem" }}>
                  4.3
                </Typography>
                <Typography sx={{ color: "#555", ml: 1, fontSize: "1.1rem" }}>
                  9,870 jobs
                </Typography>
              </Box>
              <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 1 }}>
                <Chip
                  label="Flexible"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
                <Chip
                  label="Part-remote"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
                <Chip
                  label="Modern"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
              </Box>
            </Paper>
          </Grid>
          {/* Internships */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={2}
              sx={{
                borderRadius: 3,
                p: 3,
                minHeight: 270,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "box-shadow 0.3s",
                "&:hover": {
                  boxShadow: "0 8px 32px rgba(33,150,243,0.13)",
                },
              }}
            >
              <Box
                sx={{
                  background: "#e3f8fd",
                  borderRadius: "50%",
                  width: 70,
                  height: 70,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <img
                  src={mapimg} // <-- replace with your image path or URL
                  alt=""
                  style={{
                    width: 40,
                    height: 40,
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  textAlign: "center",
                  mb: 1,
                  mt: 1,
                }}
              >
                Hyderabad
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <StarIcon sx={{ color: "#ffb300", fontSize: 20, mr: 0.5 }} />
                <Typography sx={{ fontWeight: 500, fontSize: "1.1rem" }}>
                  3.9
                </Typography>
                <Typography sx={{ color: "#555", ml: 1, fontSize: "1.1rem" }}>
                  8,450 jobs
                </Typography>
              </Box>
              <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 1 }}>
                <Chip
                  label="Students"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
                <Chip
                  label="Paid"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
                <Chip
                  label="Summer"
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* why to choose section */}

      <Box
        sx={{
          background: "#fff",
          py: { xs: 4, md: 7 },
          px: { xs: 2, md: 5, lg: 10 }, // left/right margin for all screens
        }}
      >
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          sx={{ mb: 3, letterSpacing: 1 }}
        >
          We Provide Jobs For Industries
        </Typography>
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          sx={{ mb: 3, color: "#2874A6" }}
        >
          IT &amp; Non IT Jobs
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
            mb: 4,
          }}
        >
          {industryTabs.map((tab) => (
            <Button
              key={tab.label}
              variant={industryTab === tab.label ? "contained" : "outlined"}
              color="primary"
              sx={{
                borderRadius: 8,
                px: 3,
                fontWeight: "bold",
                boxShadow: industryTab === tab.label ? 2 : 0,
                bgcolor: industryTab === tab.label ? "#169DD7" : "#fff",
                color: industryTab === tab.label ? "#fff" : "#169DD7",
                "&:hover": { bgcolor: "#169DD7", color: "#fff" },
                textTransform: "none",
                fontSize: "1.1rem",
              }}
              onClick={() => setIndustryTab(tab.label)}
            >
              {tab.label}
            </Button>
          ))}
        </Box>
        <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
          <IconButton
            onClick={handlePrevIndustry}
            sx={{
              position: "absolute",
              left: 1,
              top: "50%",
              zIndex: 2,
              transform: "translateY(-50%)",
              bgcolor: "#fff",
              boxShadow: 2,
              "&:hover": { bgcolor: "#f5f5f5" },
              display: { xs: "none", md: "flex" },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <Box
            ref={sliderRefIndustry}
            sx={{
              display: "flex",
              gap: 3,
              overflowX: "auto",
              scrollBehavior: "smooth",
              py: 1,
              px: 1,

              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {filteredIndustryCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  minWidth: cardWidth,
                  maxWidth: cardWidth,
                  flex: "0 0 auto",
                }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    borderRadius: 3,
                    p: 3,
                    minHeight: 270,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "box-shadow 0.3s",
                    "&:hover": {
                      boxShadow: "0 8px 32px rgba(33,150,243,0.13)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      background: "#f5faff",
                      borderRadius: "50%",
                      width: 70,
                      height: 70,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    {card.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      mb: 1,
                      mt: 1,
                      fontSize: "1.2rem",
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Box
                    sx={{
                      mt: 1,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      justifyContent: "center",
                    }}
                  >
                    {card.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          background: "#e3f2fd",
                          fontWeight: 500,
                          fontSize: "0.95rem",
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Box>
          <IconButton
            onClick={handleNextIndustry}
            sx={{
              position: "absolute",
              right: 20,
              top: "50%",
              zIndex: 2,
              transform: "translateY(-50%)",
              bgcolor: "#fff",
              boxShadow: 2,
              "&:hover": { bgcolor: "#f5f5f5" },
              display: { xs: "none", md: "flex" },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Jobs Grid */}

      <Box sx={{ py: { xs: 4, md: 7 } }}>
        <Container>
          <Grid container spacing={4}>
            {jobs.map((job, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 8px 32px rgba(52,152,219,0.13)",
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                    type: "spring",
                    bounce: 0.25,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Card
                    sx={{
                      boxShadow: "0 4px 18px rgba(34, 112, 165, 0.13)",
                      borderRadius: 5,
                      overflow: "hidden",
                      minHeight: 370,
                      position: "relative",
                      background: "#fff",
                    }}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 18,
                        right: 18,
                        zIndex: 2,
                      }}
                    >
                      <Chip
                        label={job.type || "Domestic"}
                        color={jobTypeColor(job.type)}
                        size="small"
                        sx={{
                          fontWeight: "bold",
                          fontSize: "0.95rem",
                          letterSpacing: 0.5,
                          px: 1.5,
                        }}
                      />
                    </Box>
                    <CardContent>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                          color: "#2874A6",
                          mb: 1,
                          letterSpacing: 0.5,
                          textAlign: "left",
                        }}
                      >
                        {job.title}
                      </Typography>
                      <Typography sx={{ mb: 1 }}>
                        <strong>Posts:</strong> {job.posts}
                      </Typography>
                      <Typography sx={{ mb: 1 }}>
                        <strong>Salary:</strong> {job.salary}
                      </Typography>
                      <Typography sx={{ mb: 1 }}>
                        <strong>Experience:</strong> {job.experience}
                      </Typography>
                      <Typography sx={{ mb: 1 }}>
                        <strong>Skills:</strong> {job.skills}
                      </Typography>
                      <Typography sx={{ mb: 1 }}>
                        <strong>Location:</strong> {job.location}
                      </Typography>
                      <Typography sx={{ mb: 1 }}>
                        <strong>Description:</strong> {job.description}
                      </Typography>
                      <Typography sx={{ mb: 1 }}>
                        <strong>Responsibilities:</strong>{" "}
                        {job.responsibilities}
                      </Typography>
                      <Box sx={{ textAlign: "center", mt: 2 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleApply(job.title)}
                          sx={{
                            borderRadius: "20px",
                            px: 4,
                            fontWeight: "bold",
                            boxShadow: "0 2px 8px rgba(52,152,219,0.13)",
                            transition: "all 0.2s",
                            "&:hover": { background: "#2874A6" },
                          }}
                        >
                          APPLY
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

    </Box>
  );
};

export default Career;
