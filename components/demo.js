import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Modal, Box } from '@mui/material';
import styles from './Solutions.module.css';

const blogPosts = [
  {
    title: "Software Development",
    image: "https://i.pinimg.com/originals/2a/53/65/2a53651a35816f499270d8275fd5318f.gif",
    content: "At PJSoftTech, we offer comprehensive web development services to bring your digital vision to life. Our team combines cutting-edge technologies, industry best practices, and creative innovation to deliver exceptional websites and web applications tailored to your needs. Our front-end developers specialize in crafting engaging user interfaces and seamless user experiences using HTML, CSS, and JavaScript. With a keen eye for design and usability, we ensure that your website or web application not only looks stunning but also delivers intuitive navigation and interaction."
  },
  {
    title: "App Development ",
    image: "https://cdn.dribbble.com/users/1603428/screenshots/4158705/mob-dev.gif",
    content: "We specialize in creating native applications that fully leverage the capabilities of iOS and Android platforms. This ensures top-notch performance, security, and seamless integration with device hardware and software features. We follow platform-specific design guidelines (Material Design for Android, Human Interface Guidelines for iOS) to ensure consistency and usability. We implement advanced security measures to protect user data and ensure that our applications meet the highest security standards of both iOS and Android platforms."
  },
  {
    title: "UI/UX Design",
    image: "https://www.fullstacktechnology.com/wp-content/uploads/2020/11/web_developing_2.gif",
    content:"At PJSoftTech, we understand the critical importance of user interface (UI) and user experience (UX) design in ensuring the success of mobile applications. Our UI/UX design team combines creativity, functionality, and user-centric principles to deliver captivating and intuitive app experiences that engage users and drive results. We place users at the center of our design process, focusing on understanding their needs, preferences, and behaviors. This allows us to create interfaces that are intuitive, easy to navigate, and visually appealing."
  },
];

const blogPosts1 = [
  {
    title: "Back End Development",
    image: "https://www.chawtechsolutions.com/wp-content/uploads/2019/03/senior-front-end-developer-openings-1.gif",
    content: "Our backend developers are skilled in building robust, scalable, and secure server-side applications to power your website or web application. We specialize in: Utilizing powerful languages and frameworks such as Node.js, Express.js, Python with Django or Flask, Ruby on Rails, and Java with Spring Boot to develop the core functionality and business logic of your application. Expertise in designing and managing both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis, Cassandra) databases to ensure efficient data storage, retrieval, and management. Creating and managing RESTful APIs."
  },
  {
    title: "Testing and Deploy",
    image: "https://4foxsolutions.com/uploads/services/161278968216133562921805571624.gif",
    content: "At PJSoftTech, we understand the importance of delivering high-quality software. Our dedicated QA team ensures that your application is thoroughly tested before launch. Our services include: Implementing automated tests using frameworks like Selenium, Cypress, and Jest to ensure that your application functions correctly across different browsers and devices. Conducting rigorous manual testing to catch edge cases and usability issues that automated tests might miss, ensuring a smooth user experience."
  },
  {
    title: "Revolutionizing Business with AI",
    image: "https://miro.medium.com/v2/resize:fit:1280/1*Jwt-NggFZflXNmkndLYLJA.gif",
    content:"PJSoftTech is an innovative company that offers a range of software solutions, focusing on web design, web development, product management, and app development. They are recognized for their high-quality CRM (Customer Relationship Management), CMS (Content Management System), and HRM (Human Resource Management) software, which integrate AI technologies to enhance user experience and operational efficiency. The company emphasizes innovation and creativity, constantly pushing the boundaries to solve problems and improve existing processes."
  },
];

const Solutions = () => {
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleOpen = (post) => {
    setSelectedPost(post);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPost(null);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div>
        <h1 className={`text-center ${styles.heading}`}>Our Solutions</h1>
      </div>
      <br />
      <div className={`container mb-5 ${styles.container}`}>
        <Grid container spacing={3}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={styles.card1}>
                <CardMedia
                  component="img"
                  alt={post.title}
                  // paddingBottom="20px"
                  height="350"
                  image={post.image}
                />
                <CardContent className={styles.cardContent}>
  <Typography gutterBottom variant="h5" component="div">
    {post.title}
  </Typography>
  <Typography component="div">
    {post.content.substring(0, 100)}... 
  </Typography>
  <Button 
    variant="contained"  
    className={styles.readMoreButton} 
    sx={{ backgroundColor: '#0083B9', color: '#fff',   }}
    onClick={() => handleOpen(post)}
  > 
    Read More
  </Button>
</CardContent>

              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <div className={`container mb-5 ${styles.container}`}>
        <Grid container spacing={3}>
          {blogPosts1.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={styles.card1}>
                <CardMedia
                  component="img"
                  alt={post.title}
                  height="350"
                  image={post.image}
                />
                <CardContent className={styles.cardContent}>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography component="div">
                    {post.content.substring(0, 100)}... 
                  </Typography>
                  <Button 
                    variant="contained" 
                    className={styles.readMoreButton} 
                    sx={{ backgroundColor: '#0083B9', color: '#fff' }}
                    onClick={() => handleOpen(post)}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            {selectedPost?.title}
          </Typography>
          <CardMedia
            component="img"
            alt={selectedPost?.title}
            height="200"
            image={selectedPost?.image}
          />
          <Typography sx={{ mt: 2 }}>
            {selectedPost?.content}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Solutions;
