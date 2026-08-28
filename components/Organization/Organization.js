
import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import styles from "./Organization.module.css";

const OrganizationValues = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const values = [
    {
      title: "Transparent and Friendly Workplace",
      content: "We value every team member, fostering an open and amicable environment to cultivate strong, healthy working relationships."
    },
    {
      title: "Embrace Change",
      content: "We actively embrace change, continuously refining our methodologies and products by incorporating the latest technological advancements."
    },
    {
      title: "Going the Extra Mile",
      content: "Whether for our team members, customers, or partners, we consistently go above and beyond to provide assistance and support."
    },
    {
      title: "Customers Come First",
      content: "Our decisions are centered around our customers, prioritizing their needs to deliver high-quality ERP solutions."
    },
    {
      title: "Collaborating with Academicians",
      content: "Our products are developed in consultation with knowledgeable educationists, ensuring they meet the specific needs of educational institutions."
    },
    {
      title: "Commitment to Integrity",
      content: "We uphold the highest standards of integrity, always doing what is right to deliver exceptional service."
    }
  ];

  return (
    <div>
      <Container>
        <h1 className={styles.heading}>PJSoftTech Core Values and Culture</h1>
        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                className={styles.cardHoverEffect}
                data-aos="flip-left" // Add AOS animation attribute
                sx={{
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <CardContent>
                  <Typography variant="h6" className={styles.title} component="div" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" className={styles.p} color="textSecondary">
                    {value.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      <div className={styles['culture-section']}>
        <h1><span className={styles.span}>O</span>ur Culture</h1>
        <h3 className="mt-4">Dedication, Creativity, and Integrity.</h3>
      </div>
      
      <div className={`container ${styles.culture}`}>
        <p>
          At PJSoftTech, collaboration is at the heart of everything we do. We
          believe in the power of teamwork and synergy, where every team
          member's voice is valued and respected. Our open-door policy fosters
          communication and encourages the sharing of ideas, leading to
          innovative solutions and successful outcomes. We are committed to
          the personal and professional growth of our employees. Our culture
          of continuous learning provides ample opportunities for skill
          development and career advancement. From workshops and training
          programs to mentorship and coaching, we invest in our team members'
          success and empower them to reach their full potential. We
          understand the importance of maintaining a healthy work-life
          balance. That's why we offer flexible work arrangements and remote
          work options to accommodate the diverse needs of our employees. By
          prioritizing well-being and flexibility, we ensure that our team
          members can thrive both personally and professionally. Innovation is
          in our DNA. We encourage creativity and out-of-the-box thinking,
          challenging our team members to push the boundaries and explore new
          possibilities. Whether it's developing cutting-edge solutions or
          refining existing processes, we embrace change and strive for
          excellence in everything we do. We celebrate diversity and believe
          in creating an inclusive workplace where everyone feels welcome and
          valued. By embracing different perspectives and backgrounds, we
          foster a culture of creativity, empathy, and mutual respect. We are
          committed to building a diverse team that reflects the world we live
          in and drives innovation through diversity.
        </p>
      </div>
    </div>
  );
};

export default OrganizationValues;



