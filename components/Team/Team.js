import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  Box,
  useMediaQuery,
} from "@mui/material";
import founderImage from "./founder.jpg";
import manager from "./Shashank Narad.jpg";
import teamleader from "../Team/Rushbh Team Manager.jpeg"
import javadeveloper from "../Team/Pooja Java Devoloper.jpeg"
import reactdeveloper from "../Team/Sarfraj React Deveoler.jpeg"
import frontendeveoler from "../Team/Ankita FrontEnd Developer.jpeg"
import devops from "../Team/Vikram Sir AWS.jpeg"
import sales from "../Team/Suraj Sir Sales Manager.jpeg"
import ceoImage from "../Team/pooja ceo.jpeg";

const teamMembers = [
  {
    name: "Padamkumar Jain",
    position: "Founder",
    image: founderImage,
    description:
      "Padamkumar Jain is the visionary Founder of PJSoftTech, a pioneering force in the realm of technology solutions. With a profound passion for innovation and a keen understanding of market dynamics.",
  },
   {
    name: "Pooja Halkambe",
    position: "CEO",
    image: ceoImage,
    description:
      "Pooja Halkambe is the Chief Executive Officer at PJSoftTech, where she leverages over 5 years of industry experience to lead the company towards innovation and growth.",
  },

  {
    name: "Shashank Narad",
    position: "Sales & Marketing",
    image: manager,
    description:
      "As the Sales Manager at PJSoftTech, Shashank Narad brings over 4 years of experience in driving sales growth and forging strong client relationships in the IT industry.",
  },
  {
    name: "Rushbh Shete",
    position: "Team Leader - React Developer",
    image: teamleader,
    description:
      "As the Team Leader and React Developer at PJSoftTech, Rushbh Shete drives front-end innovation with strong leadership and technical expertise.",
  },
  {
    name: "Vikramsinh Shinde",
    position: "DevOps Engineer",
    image: devops,
    description:
      "Vikramsinh Shinde serves as the DevOps Engineer at PJSoftTech, ensuring seamless software delivery through automation, CI/CD pipeline management.",
  },
  {
    name: "Suraj Patil",
    position: "Sales Manager",
    image: sales,
    description:
      "As the Sales Manager at PJSoftTech, Suraj Patil plays a key role in driving revenue growth, managing client relationship goals.",
  },
  {
    name: "Pooja Patil",
    position: "Java Developer",
    image: javadeveloper,
    description:
      "Pooja Patil is a dedicated Java Developer at PJSoftTech with expertise in backend systems, API integration, and database management.",
  },
  {
    name: "Sarfaraj Mulani",
    position: "React Developer",
    image: reactdeveloper,
    description:
      "As the Team Leader and React Developer at PJSoftTech, Sarfraj Mulani drives front-end innovation with strong leadership and technical expertise.",
  },
  {
    name: "Ankita Wanjale",
    position: "Front-End Developer",
    image: frontendeveoler,
    description:
      "Ankita Wanjale is a creative Front-End Developer at PJSoftTech, passionate about crafting modern, responsive user interfaces.",
  },
];

const Team = () => {
  const [showPage, setShowPage] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  if (!showPage) return null;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2fd 0%, #fffbea 100%)",
        py: { xs: 4, md: 8 },
      }}
    >
      <Container>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: "#3498DB",
            mb: 6,
            letterSpacing: 1,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Meet Our Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: "0 8px 32px rgba(52,152,219,0.13)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.03)",
                    boxShadow: "0 16px 40px rgba(52,152,219,0.18)",
                  },
                  background: "#fff",
                  textAlign: "center",
                  p: 2,
                  height: "92%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={member.image.src}
                  alt={member.name}
                  sx={{
                    width: isMobile ? 90 : 120,
                    height: isMobile ? 90 : 120,
                    mb: 2,
                    boxShadow: "0 4px 16px rgba(52,152,219,0.10)",
                    border: "4px solid #fff",
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "#2874A6",
                      mb: 0.5,
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#FFBF00",
                      fontWeight: 500,
                      mb: 1,
                      letterSpacing: 0.5,
                    }}
                  >
                    {member.position}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#444",
                      fontSize: isMobile ? "1rem" : "14px",
                      lineHeight: 1.6,
                      mt: 1,
                    }}
                  >
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;