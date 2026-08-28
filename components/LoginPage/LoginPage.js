import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import axios from "axios";
import { useNavigate } from "../../router-compat";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../images/logo.jpg";

import {
  Home as HomeIcon,
  Person as PersonIcon,
  Adb as AdbIcon,
  School as SchoolIcon,
  BarChart as BarChartIcon,
  MenuBook as MenuBookIcon,
  Work as WorkIcon,
  SupervisorAccount as SupervisorAccountIcon,
  PersonOutline as PersonOutlineIcon,
  HowToReg as HowToRegIcon,
  Visibility,
  VisibilityOff,
  Badge as BadgeIcon,
  AutoStories as AutoStoriesIcon,
  Business as BusinessIcon,
  DriveEta as DriveEtaIcon,
  Analytics as AnalyticsIcon,
} from "@mui/icons-material";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BackgroundContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background-color: hsl(218, 41%, 15%);
  background-image: radial-gradient(
      650px circle at 0% 0%,
      hsl(218, 41%, 35%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%
    ),
    radial-gradient(
      1250px circle at 100% 100%,
      hsl(218, 41%, 45%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%
    );

  padding: 20px;
  margin: 0;
  overflow: hidden;
  padding-bottom: 85px;
`;

const Footer = styled("div")`
   position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #666;
  padding: 15px 0;
  background-color: #f9f9f9;
   z-index: 1000;
`;

const PolicyLink = styled(Link)`
  margin: 0 10px;
  color: #0056b3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ContentWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1300px;

  padding: 10px;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const GridContainer = styled(Grid)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

const LoginContainer = styled("div")`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 170px;

  @media (max-width: 900px) {
    margin-top: 20px;
    padding: 0 16px;
  }
`;

const LoginPaper = styled(Paper)`
  padding: 32px;
  width: 100%;
  max-width: 400px;
  background-color: #f2f2f2;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Logo = styled("img")`
  display: block;
  margin: 0 auto 20px;
  width: 100px;
  height: 80px;
  margin-bottom:20px;
  border-radius:10px;
  backgroundColor: 'hsl(218, 41%, 15%)',
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 1s ease-in-out;
`;

const LoginHeader = styled(Typography)`
  text-align: center;
  margin-bottom: 24px;
  animation: ${fadeIn} 1s ease-in-out;
  word-spacing: 0.3em;
  font-weight: bold;
`;

const CustomForm = styled("form")`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled("div")`
  margin-bottom: 16px;
`;

const FormControl = styled(TextField)`
  width: 100%;
`;

const ErrorMessage = styled(Typography)`
  color: red;
  margin-bottom: 16px;
`;

const BtnPrimary = styled(Button)`
  margin-bottom: 16px;
`;

const ForgotPasswordLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 16px;
`;

const StyledPaper = styled(Paper)(({ delay }) => ({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f7f7f7",
  transition:
    "transform 0.5s ease, box-shadow 0.3s ease, background-color 0.3s ease",
  animation: `popIn 2.5s ease ${delay}s`,
  animationFillMode: "forwards",
  opacity: 0,
  transform: "scale(0)",
  padding: "10px",
  margin: "8px auto",

  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
    backgroundImage:
      "linear-gradient(88.8deg, rgb(239, 171, 245) 13.4%, rgb(196, 181, 249) 76.3%)",
  },

  "@keyframes popIn": {
    "0%": { opacity: 0, transform: "scale(0)" },
    "100%": { opacity: 1, transform: "scale(1)" },
  },
}));

function LoginPage({ onLogin }) {
  const [institutecode, setInstitutecode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const hasAnimated = useRef(false);

  const handlePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const loginUser = async (institutecode, email, password) => {
    return axios.post(
      `http://localhost:8081/institutelogin?institutecode=${institutecode}&emailaddress=${email}&password=${password}`
    );
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const response = await loginUser(institutecode, email, password);
      if (response.status === 200) {
        sessionStorage.setItem("institutecode", institutecode);
        sessionStorage.setItem("email", email);
        onLogin();
        navigate("/layout/combineDash");
      } else if (response.status === 401) {
        setError(response.data || "Unauthorized access");
      } else if (response.status === 404) {
        setError(response.data || "Not found");
      } else {
        throw new Error("Unexpected response from the server");
      }
    } catch (error) {
      setError("An error occurred during login. Please try again later.");
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handleCreateAccount = () => {
    navigate("/create-account");
  };

  const circles = [
    {
      icon: <PersonIcon />,
      link: "https://pjsofttech.in/employee/",
      label: "Employee",
    },
    {
      icon: <AdbIcon />,
      link: "https://pjsofttech.in/employee-app/",
      label: "Employee App",
    },   
    {
      icon: <HomeIcon />,
      link: "https://pjsofttech.in/admin-app/",
      label: "Admin App",
    },
    {
      icon: <SchoolIcon />,
      link: "http://pjsofttech.in/student",
      label: "Student ",
    },

    {
      icon: <SupervisorAccountIcon />,
      link: "/login-page",
      label: "Principal",
    },

    { icon: <SupervisorAccountIcon />, link: "/login-page", label: "HOD" },

    {
      icon: <AdbIcon />,
      link: "https://pjsofttech.in/Academy-Teacher-App/",
      label: "Teacher App",
    },

    { icon: <HowToRegIcon />, link: "/login-page", label: "Parent" },

    {
      icon: <AutoStoriesIcon />,
      link: "https://mahastudy.in",
      label: "EBook Admin",
    },

    {
      icon: <BarChartIcon />,
      link: "https://pjsofttech.in/esales",
      label: "ESales",
    },

    {
      icon: <BarChartIcon />,
      link: "https://pjsofttech.in/esales/app/",
      label: "ESales App",
    },

    { icon: <MenuBookIcon />, link: "/loginPage", label: "Accountant" },

    { icon: <DriveEtaIcon />, link: "/loginPage", label: "Driver" },
    {
      icon: <WorkIcon />,
      link: "https://pjsofttech.in/manager",
      label: "Sales Manager",
    },
    {
      icon: <BadgeIcon />,
      link: "https://pjsofttech.in/jobapp",
      label: "Job App",
    },

    {
      icon: <BusinessIcon />,
      link: "https://pjsofttech.in/project/app/",
      label: "Project App",
    },

    {
      icon: <BusinessIcon />,
      link: "https://pjsofttech.in/projectuser",
      label: "Project User",
    },

    {
      icon: <AnalyticsIcon />,
      link: "https://pjsofttech.in/project",
      label: "Project Admin",
    },

    {
      icon: <MenuBookIcon />,
      link: "http://pjsofttech.in/bookstore",
      label: "Book Store Admin",
    },

    {
      icon: <MenuBookIcon />,
      link: "http://pjsofttech.in/bookstoreuser",
      label: "Book Store User",
    },
  ];

  useEffect(() => {
    hasAnimated.current = true;
  }, []);

  return (
    <>
      {/* 1st Grid (Desktop only) */}
      <Grid
        item
        xs={12}
        sx={{ display: { xs: "none", md: "block" }, marginBottom: "10px" }}
      >
        <Typography
          variant="h3"
          component="div"
          align="center"
          gutterBottom
          sx={{
            fontSize: "40px",
            fontWeight: "bold",
            color: "white",
            marginTop: "10px",
            marginBottom: "-60px",
            background: "white", // fixed typo from "whit e"
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            textTransform: "uppercase",
            letterSpacing: "2px",
            wordSpacing: "0.3em",
          }}
        >
          <span className="typing-effect">PJSOFTTECH Software</span>
        </Typography>
      </Grid>

      {/* 2nd Grid (Mobile only) */}
      <Grid item xs={12} sx={{ display: { xs: "block", md: "none" } }}>
        <Typography
          variant="h3"
          component="div"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: "28px", sm: "32px", md: "40px" },
            fontWeight: "bold",
            color: "white",
            marginTop: "10px",
            marginBottom: "-60px",
            backgroundColor: "hsl(218, 41%, 15%)",
            backgroundImage: `radial-gradient(
        650px circle at 0% 0%,
        hsl(218, 41%, 35%) 15%,
        hsl(218, 41%, 30%) 35%,
        hsl(218, 41%, 20%) 75%,
        hsl(218, 41%, 19%) 80%,
        transparent 100%
      ),
      radial-gradient(
        1250px circle at 100% 100%,
        hsl(218, 41%, 45%) 15%,
        hsl(218, 41%, 30%) 35%,
        hsl(218, 41%, 20%) 75%,
        hsl(218, 41%, 19%) 80%,
        transparent 100%
      )`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            textTransform: "uppercase",
            letterSpacing: "1px",
            wordSpacing: "0.2em",
            padding: "10px",
            width: "100%",
            margin: "auto",
          }}
        >
          <span className="typing-effect">PJSOFTTECH Software</span>
        </Typography>
      </Grid>

      <BackgroundContainer>
        <ContentWrapper>
          {isMobile ? (
            <>
              {/* Circles after form */}
              <GridContainer container alignItems="center">
                {circles.map(({ icon, link, label }, index) => (
                  <Grid
                    item
                    lg={3}
                    md={4}
                    sm={6}
                    xs={6}
                    key={index}
                    marginTop={0}
                  >
                    <StyledPaper
                      delay={
                        hasAnimated.current
                          ? Math.random() * 0.5 + index * 0.1
                          : 0
                      }
                      onClick={() => window.open(link, "_blank")}
                    >
                      <div>{icon}</div>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          color: "black",
                          textAlign: "center",
                        }}
                      >
                        {label}
                      </Typography>
                    </StyledPaper>
                  </Grid>
                ))}
              </GridContainer>

              <LoginContainer>
                <LoginPaper elevation={6}>
                  <Logo src={logo} alt="Logo" />
                  <LoginHeader variant="h5">PJSOFTTECH LOGIN</LoginHeader>
                  <CustomForm onSubmit={handleSubmit}>
                    <FormGroup>
                      <FormControl
                        label="Organization ID"
                        type="text"
                        value={institutecode}
                        onChange={(e) => setInstitutecode(e.target.value)}
                        placeholder="Enter Organization Key"
                        variant="outlined"
                        fullWidth
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControl
                        label="Email address"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        variant="outlined"
                        fullWidth
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControl
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handlePasswordVisibility}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </FormGroup>
                    {error && <ErrorMessage>{error}</ErrorMessage>}

                    <BtnPrimary
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      Login
                    </BtnPrimary>
                    <Link
                      onClick={handleCreateAccount}
                      underline="hover"
                      sx={{
                        display: "block",
                        textAlign: "center",
                        color: "black",
                        "&:hover": { color: "#0056B3" },
                        marginBottom: "5px",
                      }}
                    >
                      Create Account
                    </Link>
                    <ForgotPasswordLink
                      href="#"
                      onClick={handleForgotPassword}
                      underline="hover"
                      sx={{ color: "black", "&:hover": { color: "#0056B3" } }}
                    >
                      Forgot Password?
                    </ForgotPasswordLink>
                  </CustomForm>
                </LoginPaper>
              </LoginContainer>
            </>
          ) : (
            <>
              {/* Circles first in desktop */}
              <GridContainer container alignItems="center">
                {circles.map(({ icon, link, label }, index) => (
                  <Grid
                    item
                    lg={3}
                    md={4}
                    sm={6}
                    xs={6}
                    key={index}
                    marginTop={6}
                  >
                    <StyledPaper
                      delay={
                        hasAnimated.current
                          ? Math.random() * 0.5 + index * 0.1
                          : 0
                      }
                      onClick={() => window.open(link, "_blank")}
                    >
                      <div>{icon}</div>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          color: "black",
                          textAlign: "center",
                        }}
                      >
                        {label}
                      </Typography>
                    </StyledPaper>
                  </Grid>
                ))}
              </GridContainer>

              {/* Form after circles */}
              <LoginContainer>
                <LoginPaper elevation={6}>
                  <Logo src={logo} alt="Logo" />
                  <LoginHeader variant="h5">PJSOFTTECH LOGIN</LoginHeader>
                  <CustomForm onSubmit={handleSubmit}>
                    <FormGroup>
                      <FormControl
                        label="Organization ID"
                        type="text"
                        value={institutecode}
                        onChange={(e) => setInstitutecode(e.target.value)}
                        placeholder="Enter Organization Key"
                        variant="outlined"
                        fullWidth
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControl
                        label="Email address"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        variant="outlined"
                        fullWidth
                      />
                    </FormGroup>
                      
                    <FormGroup>
                      <FormControl
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handlePasswordVisibility}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </FormGroup>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <BtnPrimary
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      Login
                    </BtnPrimary>
                    <Link
                      onClick={handleCreateAccount}
                      underline="hover"
                      sx={{
                        display: "block",
                        textAlign: "center",
                        color: "black",
                        "&:hover": { color: "#0056B3" },
                        marginBottom: "5px",
                      }}
                    >
                      Create Account
                    </Link>
                    <ForgotPasswordLink
                      href="#"
                      onClick={handleForgotPassword}
                      underline="hover"
                      sx={{ color: "black", "&:hover": { color: "#0056B3" } }}
                    >
                      Forgot Password?
                    </ForgotPasswordLink>
                  </CustomForm>
                </LoginPaper>
              </LoginContainer>
            </>
          )}
        </ContentWrapper>
       
      </BackgroundContainer>

      <Footer>
          <PolicyLink
            onClick={() => navigate("/privacy-policy")}
            sx={{ cursor: "pointer" }}
          >
            Privacy Policy
          </PolicyLink>
          |
          <PolicyLink
            onClick={() => navigate("/terms-and-conditions")}
            sx={{ cursor: "pointer" }}
          >
            Terms and Conditions
          </PolicyLink>
          |
          <PolicyLink
            onClick={() => navigate("/refund")}
            sx={{ cursor: "pointer" }}
          >
            Refund Policy
          </PolicyLink>
          |
          <PolicyLink
            onClick={() => navigate("/copyright-policy")}
            sx={{ cursor: "pointer" }}
          >
            Copyright Policy
          </PolicyLink>
          |
          <PolicyLink
            onClick={() => navigate("/return")}
            sx={{ cursor: "pointer" }}
          >
            Return Policy
          </PolicyLink>

        </Footer>
    </>
  );
}

export default LoginPage;

