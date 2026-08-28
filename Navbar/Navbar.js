"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import {
  FaUserGraduate,
  FaBook,
  FaBuilding,
  FaShopify,
} from "react-icons/fa";

import MenuIcon from "@mui/icons-material/Menu";
import { NavDropdown, Row, Col } from "react-bootstrap";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { SiBmcsoftware } from "react-icons/si";
import { AiOutlineSolution } from "react-icons/ai";
import { TbLogs } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
import { MdContactPage } from "react-icons/md";
import { CgOrganisation } from "react-icons/cg";
import { RiPriceTag2Line } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import {
  FaUserTie,
  FaMoneyCheckAlt,
  FaShippingFast,
  FaProjectDiagram,
  FaRegChartBar,
  FaRegAddressBook,
  FaRegCalendarCheck,
} from "react-icons/fa";
import { MdOutlineAssignment, MdOutlineSchool } from "react-icons/md";
import { RiTestTubeLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbReportAnalytics } from "react-icons/tb";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineContactPhone } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import "./Navbarnew.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [softwareDropdownOpen, setSoftwareDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [isHovered] = useState(false);
  let softwareTimeout, companyTimeout;
  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSoftwareDropdownToggle = (event) => {
    event.stopPropagation();
    setSoftwareDropdownOpen((prev) => !prev);
  };

  const handleCompanyDropdownToggle = (event) => {
    event.stopPropagation();
    setCompanyDropdownOpen((prev) => !prev);
  };

  const handleMouseEnterSoftware = () => {
    clearTimeout(softwareTimeout);
    setSoftwareDropdownOpen(true);
  };

  const handleMouseLeaveSoftware = () => {
    softwareTimeout = setTimeout(() => {
      setSoftwareDropdownOpen(false);
    }, 300);
  };

  const handleMouseEnterCompany = () => {
    clearTimeout(companyTimeout);
    setCompanyDropdownOpen(true);
  };

  const handleMouseLeaveCompany = () => {
    companyTimeout = setTimeout(() => {
      setCompanyDropdownOpen(false);
    }, 300);
  };

  const services = [
    {
      name: "School Management System",
      icon: <MdOutlineSchool />,
      path: "/school-new-management-system",
    },
    {
      name: "College Management System",
      icon: <FaBuilding />,
      path: "/college-management-software",
    },
    {
      name: "Academy Management System",
      icon: <MdOutlineSchool />,
      path: "/academy-management-software",
    },

    {
      name: "University Management System",
      icon: <AiOutlineTeam />,
      path: "/institute-management-software",
    },
    {
      name: "Compnay Management System",
      icon: <FaBuilding />,
      path: "/company-management-system",
    },

    {
      name: "Lead Management System",
      icon: <MdOutlineContactPhone />,
      path: "/Enquiry-management-software",
    },

    {
      name: "Income Expenses Management System",
      icon: <GiReceiveMoney />,
      path: "/Income-Expenses-Management-System",
    },

    {
      name: "Employee Management System",
      icon: <FaUserTie />,
      path: "/employee-management-system",
    },

    {
      name: "StudyPoint Management System",
      icon: <FaRegChartBar />,
      path: "/study-point-management-system",
    },
    {
      name: "Student Management System",
      icon: <FaUserGraduate />,
      path: "/student-information-system",
    },
    {
      name: "HR Management System",
      icon: <FaUserTie />,
      path: "/hr-management-system",
    },
    {
      name: "Shipment Management System",
      icon: <FaShippingFast />,
      path: "/Shippment-management-software",
    },
    {
      name: "Payroll Management System",
      icon: <BiMoneyWithdraw />,
      path: "/payroll-management-system",
    },
    {
      name: "Project Management System",
      icon: <FaProjectDiagram />,
      path: "/project-management-system",
    },
    {
      name: "Hostel Management System",
      icon: <BsFillPersonLinesFill />,
      path: "/hostel-managment-system",
    },
    {
      name: "Fees Management System",
      icon: <FaMoneyCheckAlt />,
      path: "/fees-management-system",
    },
    {
      name: "Online Examination System",
      icon: <MdOutlineAssignment />,
      path: "/online-examination-system",
    },
    {
      name: "Attendance Management System",
      icon: <FaRegCalendarCheck />,
      path: "/attendance-management-system",
    },
    {
      name: "Admission Management System",
      icon: <FaRegAddressBook />,
      path: "/admission-management-system",
    },
    {
      name: "Sales Management Software",
      icon: <TbReportAnalytics />,
      path: "/sales-management-system",
    },
    {
      name: "Classroom Management System",
      icon: <SiGoogleclassroom />,
      path: "/classroom-management-system",
    },
    {
      name: "Test Series Management System",
      icon: <RiTestTubeLine />,
      path: "/test-series-management-system",
    },
    {
      name: "Ecommerce Management System",
      icon: <FaShopify />,
      path: "/ecommerce-management-system",
    },
    {
      name: "BookShop Management System",
      icon: <FaBook />,
      path: "/book-shop-management-system",
    },
  ];

  const company = [
    { name: "Contact US", icon: <FaMoneyCheckAlt />, path: "/contact-page" },
    { name: "Organization", icon: <CgOrganisation />, path: "/organization" },
    { name: "Team", icon: <FaUsers />, path: "/team" },
    { name: "Scholarship", icon: <FaMoneyCheckAlt />, path: "/freescholarship" },
    { name: "About Us", icon: <FaMoneyCheckAlt />, path: "/about" },
    { name: "Placement", icon: <FaUserGraduate />, path: "/career" }
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "rgb(38,157,215)" }}>
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2px",
        }}
      >
        {/* Left Section: Logo and Title */}

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/logoPj.png"
            alt="Logo"
            style={{ width: "50px", marginRight: "10px" }}
          />

          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "white",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            PJSOFTTECH
          </Typography>
        </Box>

        {/* Centered Navbar Menu */}

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
            maxWidth: "1000px",
            gap: 1.5,
            flexWrap: "wrap",
            // transform: "translateX(-50px)", 
          }}
        >
          <Button
            component={Link}
            href="/"
            sx={{
              position: "relative",
              overflow: "hidden",
              color: "white",
              textTransform: "none",
              fontSize: "16px",
              backgroundColor: "transparent",
              borderRadius: 0,
              transition: "all 0.4s ease-in-out",

              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                width: 0,
                height: "3px",
                backgroundColor: "#FFE066",
                transition: "all 0.3s ease",
                // transform: "translateX(-50%)",
              },

              "&:hover": {
                color: "white",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
              },

              "&:hover::after": {
                width: "100%",
              },
            }}
          >
            Home
          </Button>

          {/* <Button
            component={Link}
            href="/about"
            sx={{
              position: "relative",
              overflow: "hidden",
              color: "white",
              textTransform: "none",
              fontSize: "16px",
              backgroundColor: "transparent",
              borderRadius: 0,
              transition: "all 0.4s ease-in-out",

              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                width: 0,
                height: "3px",
                backgroundColor: "#FFE066",
                transition: "all 0.3s ease",
                transform: "translateX(-50%)",
              },

              "&:hover": {
                color: "white",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
              },

              "&:hover::after": {
                width: "100%",
              },
            }}
          >
            About Us
          </Button> */}


          {/* 
          <NavDropdown
            title="SOFTWARES"
            id="software-nav-dropdown"
            className={`mega-menu ${isHovered ? "hovered" : ""}custom-dropdown`}
            show={softwareDropdownOpen}
            onClick={handleSoftwareDropdownToggle}
            onMouseEnter={handleMouseEnterSoftware}
            onMouseLeave={handleMouseLeaveSoftware}
            onToggle={(isOpen) => setSoftwareDropdownOpen(isOpen)}
            menuVariant=""
          >
            <Container>
              <Row>
                {services.map((service, index) => (
                  <Col xs={12} sm={6} md={4} key={index}>
                    <NavDropdown.Item
                      as={Link}
                      href={service.path}
                      onClick={handleSoftwareDropdownToggle}
                      sx={{
                        borderRadius: "0",
                        textTransform: "none",
                        fontSize: "16px",
                        backgroundColor: "transparent",
                        "&:hover": {
                          backgroundColor: "white",
                          color: "rgb(38,157,215)",
                          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                        },
                      }}
                    >
                      {service.name}
                    </NavDropdown.Item>
                  </Col>
                ))}
              </Row>
            </Container>
          </NavDropdown> */}

          <NavDropdown
            title="Softwares"
            id="software-nav-dropdown"
            className={`mega-menu ${isHovered ? "hovered" : ""
              } custom-dropdown`}
            show={softwareDropdownOpen}
            onClick={handleSoftwareDropdownToggle}
            onMouseEnter={handleMouseEnterSoftware}
            onMouseLeave={handleMouseLeaveSoftware}
            onToggle={(isOpen) => setSoftwareDropdownOpen(isOpen)}
            menuVariant=""
          >
            <Container>
              <Row>
                {services.map((service, index) => (
                  <Col xs={12} sm={6} md={4} key={index}>
                    <NavDropdown.Item
                      as={Link}
                      href={service.path}
                      onClick={handleSoftwareDropdownToggle}
                      className="dropdown-item-with-icon"
                      sx={{
                        borderRadius: "8px",
                        textTransform: "none",
                        fontSize: "16px",
                        backgroundColor: "transparent",
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                        padding: "12px 18px",
                        transition:
                          "background 0.18s, color 0.18s, box-shadow 0.18s",
                        "&:hover": {
                          backgroundColor: "#e3f6ff",
                          color: "#0083b9",
                          boxShadow: "0 2px 8px rgba(0,131,185,0.08)",
                          transform: "translateY(-2px) scale(1.03)",
                        },
                      }}
                    >
                      <span
                        className="dropdown-icon"
                        style={{
                          fontSize: "1.5rem",
                          color: "#FFBF00",
                          minWidth: 12,
                        }}
                      >
                        {service.icon}
                      </span>
                      <span>{service.name}</span>
                    </NavDropdown.Item>
                  </Col>
                ))}
              </Row>
            </Container>
          </NavDropdown>

          <Button
            component={Link}
            href="/solutions"
            sx={{
              position: "relative",
              overflow: "hidden",
              color: "white",
              borderRadius: 0,
              textTransform: "none",
              fontSize: "16px",
              backgroundColor: "transparent",
              transition: "all 0.4s ease-in-out",

              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                width: 0,
                height: "3px",
                backgroundColor: "#FFE066",
                transition: "all 0.3s ease",
                transform: "translateX(-50%)",
              },

              "&:hover": {
                color: "white",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
              },

              "&:hover::after": {
                width: "100%",
              },
            }}
          >
            Solutions
          </Button>

          <Button
            component={Link}
            href="/blogs"
            sx={{
              position: "relative",
              overflow: "hidden",
              color: "white",
              borderRadius: 0,
              textTransform: "none",
              fontSize: "16px",
              backgroundColor: "transparent",
              transition: "all 0.4s ease-in-out",

              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                width: 0,
                height: "3px",
                backgroundColor: "#FFE066",
                transition: "all 0.3s ease",
                transform: "translateX(-50%)",
              },

              "&:hover": {
                color: "white",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
              },

              "&:hover::after": {
                width: "100%",
              },
            }}
          >
            Blogs
          </Button>

          <Button
            component="a"
            href="https://pjsofttech.in/superadminclient/SubscriptionPlan"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              position: "relative",
              overflow: "hidden",
              color: "white",
              textTransform: "none",
              fontSize: "16px",
              backgroundColor: "transparent",
              borderRadius: 0,
              transition: "all 0.4s ease-in-out",

              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                width: 0,
                height: "3px",
                backgroundColor: "#FFE066",
                transition: "all 0.3s ease",
                transform: "translateX(-50%)",
              },

              "&:hover": {
                color: "white",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
              },

              "&:hover::after": {
                width: "100%",
              },
            }}
          >
            Pricings
          </Button>

          {/* <NavDropdown
            title="COMPANY"
            id="company-nav-dropdown"
            className="company-menu"
            onMouseEnter={handleMouseEnterCompany}
            onMouseLeave={handleMouseLeaveCompany}
            show={companyDropdownOpen}
            onToggle={(isOpen) => setCompanyDropdownOpen(isOpen)}
            menu
            Variant=""
          >
            <Container>
              <Row>
                {company.map((company, index) => (
                  <NavDropdown.Item
                    key={index}
                    as={Link}
                    href={company.path}
                    onClick={handleCompanyDropdownToggle}
                    style={{ color: "black" }}
                  >
                    {company.name}
                  </NavDropdown.Item>
                ))}
              </Row>
            </Container>
          </NavDropdown> */}

          <Button
            component={Link}
            href="/become"
            sx={{
              position: "relative",
              overflow: "hidden",
              color: "white",
              textTransform: "none",
              fontSize: "16px",
              backgroundColor: "transparent",
              borderRadius: 0,
              transition: "all 0.4s ease-in-out",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                width: 0,
                height: "3px",
                backgroundColor: "#FFE066",
                transition: "all 0.3s ease",
                transform: "translateX(-50%)",
              },

              "&:hover": {
                color: "white",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
              },

              "&:hover::after": {
                width: "100%",
              },
            }}
          >
            Become Partner
          </Button>

          <Button
            component={Link}
            href="/Career-post"
            sx={{
              position: "relative",
              overflow: "hidden",
              color: "white",
              textTransform: "none",
              fontSize: "16px",
              backgroundColor: "transparent",
              borderRadius: 0,
              transition: "all 0.4s ease-in-out",

              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                width: 0,
                height: "3px",
                backgroundColor: "#FFBF00",
                transition: "all 0.3s ease",
                transform: "translateX(-50%)",
              },

              "&:hover": {
                color: "white",
                textShadow: "0 0 6px rgba(255, 191, 0, 0.5)",
              },

              "&:hover::after": {
                width: "100%",
              },
            }}
          >
            Career
          </Button>

          <Button
            component={Link}
            href="/modules"
            sx={{
              position: "relative",
              overflow: "hidden",
              color: "white",
              textTransform: "none",
              fontSize: "16px",
              backgroundColor: "transparent",
              borderRadius: 0,
              transition: "all 0.4s ease-in-out",

              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                width: 0,
                height: "3px",
                backgroundColor: "#FFBF00",
                transition: "all 0.3s ease",
                transform: "translateX(-50%)",
              },

              "&:hover": {
                color: "white",
                textShadow: "0 0 6px rgba(255, 191, 0, 0.5)",
              },

              "&:hover::after": {
                width: "100%",
              },
            }}
          >
            Modules
          </Button>

          <Button
            component={Link}
            href="/clients"
            sx={{
              position: "relative",
              overflow: "hidden",
              color: "white",
              textTransform: "none",
              fontSize: "16px",
              backgroundColor: "transparent",
              borderRadius: 0,
              transition: "all 0.4s ease-in-out",

              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                width: 0,
                height: "3px",
                backgroundColor: "#FFE066",
                transition: "all 0.3s ease",
                transform: "translateX(-50%)",
              },

              "&:hover": {
                color: "white",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
              },

              "&:hover::after": {
                width: "100%",
              },
            }}
          >
            Clients
          </Button>

          <NavDropdown
            title="Company"
            id="company-nav-dropdown"
            className="company-menu"
            onMouseEnter={handleMouseEnterCompany}
            onMouseLeave={handleMouseLeaveCompany}
            show={companyDropdownOpen}
            onToggle={(isOpen) => setCompanyDropdownOpen(isOpen)}
          >
            <Container>
              <Row>
                {company.map((company, index) => (
                  <NavDropdown.Item
                    key={index}
                    as={Link}
                    href={company.path}
                    onClick={handleCompanyDropdownToggle}
                    className="dropdown-item-with-icon"
                    style={{ color: "black" }}
                  >
                    <span
                      className="dropdown-icon"
                      style={{
                        fontSize: "1.4rem",
                        color: "#FFBF00",
                        minWidth: 24,
                      }}
                    >
                      {company.icon}
                    </span>
                    <span>{company.name}</span>
                  </NavDropdown.Item>
                ))}
              </Row>
            </Container>
          </NavDropdown>

          {/* <Button
            component={Link}
            href="/courseList"
            sx={{
              position: "relative",
              overflow: "hidden",
              color: "white",
              textTransform: "none",
              fontSize: "16px",
              backgroundColor: "transparent",
              borderRadius: 0,
              transition: "all 0.4s ease-in-out",

              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                width: 0,
                height: "3px",
                backgroundColor: "#FFBF00",
                transition: "all 0.3s ease",
                transform: "translateX(-50%)",
              },

              "&:hover": {
                color: "white",
                textShadow: "0 0 6px rgba(255, 191, 0, 0.5)",
              },

              "&:hover::after": {
                width: "100%",
              },
            }}
          >
            Courses
          </Button> */}

          {/* <Button
            component={Link}
            href="/pricing"
            sx={{
              color: "white",
              fontWeight: "bold",
              borderRadius: "",
              textTransform: "none",
              fontSize: "16px",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "white",
                color: "rgb(38,157,215)",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <b> Pricing</b>
          </Button> */}
        </Box>

        {/* Right Section: Buttons */}

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 1.5,
            flexShrink: 0,
            marginRight: "20px",
            whiteSpace: "nowrap",
          }}
        >
          <Button
            component={Link}
            href="/contact-us"
            sx={{
              backgroundColor: "#FFBF00",
              color: "white",
              width: "108px",
              fontSize: "14px",
              border: "2px solid transparent",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "transparent",
                color: "white",
                border: "2px solid #FFBF00",
              },
            }}
          >
            Free Demo
          </Button>

          <Button
            component={Link}
            href="/apps"
            variant="contained"
            sx={{
              backgroundColor: "#FFBF00",
              color: "white",
              width: "80px",
              border: "2px solid transparent",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "transparent",
                color: "white",
                border: "2px solid #FFBF00",
              },
            }}
          >
            Apps
          </Button>
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMobileMenu}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100vw",
            height: 60,
            background: "#fff",
            borderTop: "1px solid #eee",
            zIndex: 1301,
            justifyContent: "space-around",
            alignItems: "center",
            boxShadow: "0px -2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <IconButton
            component={Link}
            href="/"
            sx={{ color: "rgb(38,157,215)" }}
          >
            <FaHome size={24} />
          </IconButton>
          <IconButton
            component={Link}
            href="/solutions"
            sx={{ color: "rgb(38,157,215)" }}
          >
            <AiOutlineSolution size={24} />
          </IconButton>
          <IconButton
            component={Link}
            href="/pricing"
            sx={{ color: "rgb(38,157,215)" }}
          >
            <RiPriceTag2Line size={24} />
          </IconButton>
          <IconButton
            component={Link}
            href="/about"
            sx={{ color: "rgb(38,157,215)" }}
          >
            <FcAbout size={24} />
          </IconButton>
          <IconButton
            component={Link}
            href="/blogs"
            sx={{ color: "rgb(38,157,215)" }}
          >
            <TbLogs size={24} />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleMobileMenu}>
        <Box
          sx={{
            width: 270,
            height: "100%",
            backgroundColor: "rgb(38,157,215)",
          }}
          role="presentation"
          onClick={toggleMobileMenu}
        >
          <List
            sx={{
              color: "white",
              backgroundColor: "rgb(38,157,215)",
              bottom: 14,
            }}
          >
            <ListItem button component={Link} href="/">
              <div
                style={{ display: "flex", alignItems: "center", gap: "18px" }}
              >
                <IoMdHome size={22} />
                <ListItemText primary="Home" />
              </div>
            </ListItem>

            <ListItem button onClick={handleSoftwareDropdownToggle}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "18px" }}
              >
                <SiBmcsoftware size={20} /> <ListItemText primary="Softwares" />
              </div>
              {softwareDropdownOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={softwareDropdownOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {services.map((service, index) => (
                  <ListItem
                    button
                    key={index}
                    component={Link}
                    href={service.path}
                    sx={{ pl: 4, color: "white" }}
                  >
                    <ListItemText
                      primary={service.name}
                      primaryTypographyProps={{ fontSize: "14px" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Collapse>

            <ListItem button component={Link} href="/solutions">
              <div
                style={{ display: "flex", alignItems: "center", gap: "18px" }}
              >
                <AiOutlineSolution size={20} />
                <ListItemText primary="Solutions" />
              </div>
            </ListItem>

            <ListItem button component={Link} href="/blogs">
              <div
                style={{ display: "flex", alignItems: "center", gap: "18px" }}
              >
                <TbLogs size={21} />
                <ListItemText primary="Blogs" />
              </div>
            </ListItem>

            <ListItem
              button
              component="a"
              href="https://pjsofttech.in/superadminclient/SubscriptionPlan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "18px" }}
              >
                <BiSolidOffer size={21} /> <ListItemText primary="Plan" />
              </div>
            </ListItem>

            <ListItem button component={Link} href="/about">
              <div
                style={{ display: "flex", alignItems: "center", gap: "18px" }}
              >
                <BiCommentDetail size={21} /> <ListItemText primary="About" />
              </div>
            </ListItem>

            <ListItem button component={Link} href="/contact-us">
              <div
                style={{ display: "flex", alignItems: "center", gap: "18px" }}
              >
                <MdContactPage size={20} />{" "}
                <ListItemText primary="Contact Us" />
              </div>
            </ListItem>

            <ListItem button onClick={handleCompanyDropdownToggle}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "18px" }}
              >
                <CgOrganisation size={21} /> <ListItemText primary="Company" />
                {companyDropdownOpen ? <ExpandLess /> : <ExpandMore />}
              </div>
            </ListItem>

            <Collapse in={companyDropdownOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {company.map((company, index) => (
                  <ListItem
                    button
                    key={index}
                    component={Link}
                    href={company.path}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText
                      primary={company.name}
                      primaryTypographyProps={{ fontSize: "15px" }}
                    />
                  </ListItem>
                ))}

              </List>
            </Collapse>

            {/* <ListItem button component={Link} href="/courseList">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                }}
              >
                <FaDiscourse size={19} /> <ListItemText primary="Courses" />
              </div>
            </ListItem> */}

            <div
              style={{
                gap: "120px",
                marginTop: "40px",
              }}
            >
              <Button
                component={Link}
                href="/contact-us"
                variant="contained"
                sx={{
                  backgroundColor: "rgb(232, 186, 48)", // Original yellowish-gold
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "center",
                  marginLeft: "15px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "orange", // Hover effect with orange
                    boxShadow: "0 4px 20px rgba(255, 165, 0, 0.5)", // Optional glowing orange effect
                    transform: "scale(1.05)", // Slight zoom-in effect
                  },
                }}
              >
                Free Demo
              </Button>

              <Button
                component={Link}
                href="https://pjsofttech.in/"
                variant="outlined"
                sx={{
                  backgroundColor: "rgb(232, 186, 48);",
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "center",
                  marginLeft: "15px",
                }}
              >
                Login
              </Button>
            </div>
          </List>
        </Box>
      </Drawer>

    </AppBar>
  );
};

export default Navbar;

