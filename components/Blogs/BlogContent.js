import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "../../router-compat";
import {
  Container,
  Typography,
  Box,
  Paper,
  CardMedia,
  Divider,
  Chip,
  Avatar,
  IconButton,
  Stack,
  useMediaQuery,
  Skeleton,
} from "@mui/material";
import { motion } from "framer-motion";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkIcon from "@mui/icons-material/Link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SecondContact from "../SecondContact/SecondContact";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PublicIcon from "@mui/icons-material/Public";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PeopleIcon from "@mui/icons-material/People";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupsIcon from "@mui/icons-material/Groups";
import BadgeIcon from "@mui/icons-material/Badge";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentsIcon from "@mui/icons-material/Payments";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import QuizIcon from "@mui/icons-material/Quiz";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import StoreIcon from "@mui/icons-material/Store";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";


const slugify = (text) =>
  text
    ?.toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "") || "";


const fadeIn = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };

const softwareList = [
  { name: "School Management System", path: "/school-new-management-system", icon: <SchoolIcon fontSize="small" /> },
  { name: "College Management System", path: "/college-management-software", icon: <AccountBalanceIcon fontSize="small" /> },
  { name: "Academy Management System", path: "/academy-management-software", icon: <AutoStoriesIcon fontSize="small" /> },
  { name: "University Management System", path: "/institute-management-software", icon: <PublicIcon fontSize="small" /> },
  { name: "Company Management System", path: "/company-management-system", icon: <BusinessCenterIcon fontSize="small" /> },
  { name: "Lead Management System", path: "/enquiry-management-software", icon: <TrendingUpIcon fontSize="small" /> },
  { name: "Income Expenses Management System", path: "/income-expenses-management-system", icon: <ReceiptLongIcon fontSize="small" /> },
  { name: "Employee Management System", path: "/employee-management-system", icon: <PeopleIcon fontSize="small" /> },
  { name: "StudyPoint Management System", path: "/study-point-management-system", icon: <MenuBookIcon fontSize="small" /> },
  { name: "Student Management System", path: "/student-information-system", icon: <GroupsIcon fontSize="small" /> },
  { name: "HR Management System", path: "/hr-management-system", icon: <BadgeIcon fontSize="small" /> },
  { name: "Shipment Management System", path: "/Shippment-management-software", icon: <LocalShippingIcon fontSize="small" /> },
  { name: "Payroll Management System", path: "/payroll-management-system", icon: <PaymentsIcon fontSize="small" /> },
  { name: "Project Management System", path: "/project-management-system", icon: <AssignmentTurnedInIcon fontSize="small" /> },
  { name: "Hostel Management System", path: "/hostel-managment-system", icon: <ApartmentIcon fontSize="small" /> },
  { name: "Fees Management System", path: "/fees-management-system", icon: <MonetizationOnIcon fontSize="small" /> },
  { name: "Online Examination System", path: "/online-examination-system", icon: <QuizIcon fontSize="small" /> },
  { name: "Attendance Management System", path: "/attendance-management-system", icon: <HowToRegIcon fontSize="small" /> },
  { name: "Admission Management System", path: "/admission-management-system", icon: <AppRegistrationIcon fontSize="small" /> },
  { name: "Sales Management Software", path: "/sales-management-system", icon: <StoreIcon fontSize="small" /> },
  { name: "Classroom Management System", path: "/classroom-management-system", icon: <CastForEducationIcon fontSize="small" /> },
  { name: "Test Series Management System", path: "/test-series-management-system", icon: <FactCheckIcon fontSize="small" /> },
  { name: "Ecommerce Management System", path: "/ecommerce-management-system", icon: <ShoppingCartIcon fontSize="small" /> },
  { name: "BookShop Management System", path: "/book-shop-management-system", icon: <LocalLibraryIcon fontSize="small" /> },
];

export default function BlogContent() {
  const { title } = useParams();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://pjsofttech.com:16443/blogs/getAllBlogs");
        const data = await res.json();
        if (!mounted) return;
        const found = data.find((b) => slugify(b.title) === title);
        setPost(found || null);
        const others = (data || []).filter((b) => slugify(b.title) !== title);
        setRelated(others.slice(0, 60));
      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchData();
    return () => {
      mounted = false;
    };
  }, [title]);

  const readingTime = (text = "") => {
    const words = text.split(/\s+/).filter(Boolean).length;
    const mins = Math.max(1, Math.round(words / 200));
    return `${mins} min read`;
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = encodeURIComponent(post?.title || "");
    let shareUrl = "";

    if (platform === "twitter")
      shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`;
    if (platform === "facebook")
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    if (platform === "copy") {
      navigator.clipboard.writeText(url);
      return alert("Link copied to clipboard");
    }
    if (platform === "whatsapp") {
      const txt = "Check this link: " + window.location.href;
      const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(txt)}`;
      return window.open(shareUrl, "_blank");
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Skeleton variant="rectangular" height={44} sx={{ mb: 2 }} />
        <Skeleton variant="rectangular" height={320} sx={{ mb: 2 }} />
        <Skeleton variant="text" width="60%" sx={{ mb: 1 }} />
        <Skeleton variant="text" width="90%" />
      </Container>
    );
  }

  if (!post) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Post not found
        </Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ py: { xs: 2, md: 2 } }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{ width: "100%" }}
        >
          {/* MAIN CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            style={{
              flex: 3,
              width: "100%",
              maxWidth: "100%",
            }}
          >
            <Paper
              elevation={1}
              sx={{
                p: { xs: 2, sm: 3, md: 4 },
                borderRadius: 2,
                width: "100%",
                boxShadow: "none"
              }}
            >
              {/* Top Section */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                spacing={2}
                sx={{ mb: 1 }}
              >
              </Stack>

              {/* Category */}
              <Box sx={{ mb: 2 }}>
                {/* Blog Title */}
                <Typography variant="h4" sx={{ fontWeight: 800, mt: 0.5 }}>
                  {post.title}
                </Typography>

                {/* Meta Row: Category + Author + Share */}
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    flexWrap: "wrap",
                    mt: 1,
                  }}
                >
                  {/* Left Side: Category + Author */}
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    {/* Category */}
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 700,
                          color: "#3498db", // category color
                          textTransform: "uppercase",
                          letterSpacing: 0.6,
                        }}
                      >
                        {post.category || "General"}
                      </Typography>
                    </Stack>

                    <Typography variant="body2" color="text.secondary">
                      â€¢
                    </Typography>

                    {/* Author Info */}
                    <Stack direction="row" spacing={0.8} alignItems="center">
                      <Avatar sx={{ width: 28, height: 28, fontSize: 14 }}>
                        {(post.author || "P").charAt(0)}
                      </Avatar>

                      <Typography variant="body2" color="text.secondary">
                        {post.author || "PJSoftTech"} â€¢{" "}
                        {new Date(post.date || Date.now()).toLocaleDateString()} â€¢{" "}
                        {readingTime(post.content)}
                      </Typography>
                    </Stack>
                  </Stack>

                  {/* Right Side: Share Icons */}
                  <Stack direction="row" spacing={0.5}>
                    <IconButton onClick={() => handleShare("twitter")}>
                      <TwitterIcon sx={{ color: "#1DA1F2" }} />
                    </IconButton>

                    <IconButton onClick={() => handleShare("facebook")}>
                      <FacebookIcon sx={{ color: "#1877F2" }} />
                    </IconButton>

                    <IconButton onClick={() => handleShare("copy")}>
                      <LinkIcon sx={{ color: "#555" }} />
                    </IconButton>

                    <IconButton onClick={() => handleShare("whatsapp")}>
                      <WhatsAppIcon sx={{ color: "#25D366" }} />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>

              {/* Image */}
              {post.uploadImage || post.thumbnail ? (
                <CardMedia
                  component="img"
                  image={post.uploadImage || post.thumbnail}
                  sx={{
                    width: "100%",
                    maxHeight: 420,
                    objectFit: "contain",
                    borderRadius: 2,
                    mb: 3,
                  }}
                />
              ) : null}

              {/* Description */}
              {post.description && (
                <Typography
                  sx={{
                    mb: 3,
                    fontSize: "1.1rem",
                    textAlign: "justify",
                    "& h1": { fontSize: "1.4rem", fontWeight: 600 },
                    "& p": { mb: 1 },
                  }}
                  dangerouslySetInnerHTML={{ __html: post.description }}
                />
              )}

              <Divider sx={{ my: 3 }} />

              {/* Content */}
              <Typography
                variant="body1"
                sx={{
                  color: "#222",
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  lineHeight: 1.8,
                  textAlign: "justify",
                  whiteSpace: "pre-line",
                }}
              >
                {post.content}
              </Typography>

              {/* Tags */}
              {post.tags && Array.isArray(post.tags) && (
                <Stack direction="row" spacing={1} sx={{ mt: 3, flexWrap: "wrap" }}>
                  {post.tags.map((t, i) => (
                    <Chip key={i} labtel={t} size="small" />
                  ))}
                </Stack>
              )}
            </Paper>
          </motion.div>

          {/* SIDEBAR */}
          {!isMobile && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              style={{ flex: 1, minWidth: 360 }}
            >
              <Box sx={{ position: "sticky", top: 20 }}>
                <Paper
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    mb: 3,
                    boxShadow: "0px 2px 10px rgba(0,0,0,0.08)"
                  }}
                >

                  {/* Author Info */}
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: "#1E88E5", width: 56, height: 56 }}>
                      {(post.author || "P").charAt(0)}
                    </Avatar>

                    <Box>
                      <Typography sx={{ fontWeight: 700 }}>
                        {post.author || "PJSoftTech"}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "gray" }}>
                        Author
                      </Typography>
                    </Box>
                  </Stack>

                  {/* Description */}
                  <Typography sx={{ mt: 2 }}>
                    Technical writer at PJSoftTech. Covers CRM, development & SaaS.
                  </Typography>

                  {/* Icons */}
                  <Stack direction="row" spacing={0} sx={{ mt: 2 }}>
                    <IconButton onClick={() => handleShare("twitter")}>
                      <TwitterIcon sx={{ color: "#1DA1F2" }} />
                    </IconButton>

                    <IconButton onClick={() => handleShare("facebook")}>
                      <FacebookIcon sx={{ color: "#1877F2" }} />
                    </IconButton>

                    <IconButton onClick={() => handleShare("copy")}>
                      <LinkIcon sx={{ color: "#555" }} />
                    </IconButton>

                    <IconButton onClick={() => handleShare("whatsapp")}>
                      <WhatsAppIcon sx={{ color: "#25D366" }} />
                    </IconButton>
                  </Stack>
                </Paper>

                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    mb: 3,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    Our Software
                  </Typography>

                  <Box
                    sx={{
                      pr: 1,
                    }}
                  >
                    <Stack spacing={1}>
                      {softwareList.map((software, index) => (
                        <Box
                          component="a"
                          href={software.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            p: 1.2,
                            borderRadius: 2,
                            cursor: "pointer",
                            transition: "0.3s",
                            fontSize: 14,
                            textDecoration: "none",
                            color: "inherit",
                            "&:hover": {
                              background: "#e3f2fd",
                              transform: "translateX(6px)",
                              color: "#1E88E5",
                            },
                          }}
                        >
                          {software.icon}
                          {software.name}
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    Related Posts
                  </Typography>
                  <Stack spacing={1}>
                    {related.map((r) => (
                      <Box
                        key={r.id}
                        onClick={() => navigate(`/blog/${slugify(r.title)}`)}
                        sx={{
                          p: 1,
                          borderRadius: 1,
                          cursor: "pointer",
                          "&:hover": { background: "#f1f5ff" },
                          display: "flex",
                          gap: 1,
                        }}
                      >
                        <Avatar
                          variant="square"
                          src={r.thumbnail || r.uploadImage}
                          sx={{ width: 60, height: 45 }}
                        />
                        <Typography variant="body2">{r.title}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </Paper>

              </Box>
            </motion.div>
          )}
        </Stack>

        <SecondContact />
      </Container>
    </Box>
  );
}





