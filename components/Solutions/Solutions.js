import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { useNavigate } from "../../router-compat";
import image from "../images/yashoda.png";
import mahastudy from "../images/mahastudynew.png";
// import shipment from "../images/shipment.png";
import styles from "./Solutions.module.css";

const servicesData = [
  {
    title: "Software Developement",
    image:
      "https://t4.ftcdn.net/jpg/02/67/52/49/360_F_267524919_wXbVQHR189pLVU06eQ85GGLnJMq2eJFR.jpg",

    content:
      "At PJSoftTech, we offer comprehensive web development services to bring your digital vision to life. Our team combines cutting-edge technologies, industry best practices, and creative innovation to deliver exceptional websites and web applications tailored to your needs. Our front-end developers specialize in crafting engaging user interfaces and seamless user experiences using HTML, CSS, and JavaScript. With a keen eye for design and usability, we ensure that your website or web application not only looks stunning but also delivers intuitive navigation and interaction.",

    detailedData: [
      {
        title: "Yashoda Publication",
        image: image,

        content:
          "Yashoda Publication is a publisher of books for various recruitment exams, including BMC, Railway NTPC, Police, Vanrakshak, Talathi, and more. Their books are available in Marathi and English. ",
        link: "https://yashodapublication.com/",
      },

      {
        title: "EBook System",
        image: mahastudy,
        content:
          "An ebook (short for electronic book), also spelled as e-book or eBook, is a book publication made available in electronic form, consisting of text, images, or both, readable on the flat-panel display of computers or other electronic devices.",
        link: "https://mahastudy.in/layout/home",
      },

      {
        title: "Shipment System",
        image: mahastudy,
        content:
          "A 'Shipping System' is a computerized system that provides information about due date commitments, schedules carriers, generates packing slips and shipping labels, tracks shipping information, estimates shipment cube and weight, and automates customs and dangerous goods documents.",
        link: "https://pjsofttech.in/",
      },
    ],
  },
  {
    title: "App Development",
    image:
      "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg",
    content:
      "At PJSoftTech, we of fer comprehensive web development services to bring your digital vision to life. Our team combines cutting-edge technologies, industry best practices, and creative innovation to deliver exceptional websites and web applications tailored to your needs. Our front-end developers specialize in crafting engaging user interfaces and seamless user experiences using HTML, CSS, and JavaScript. With a keen eye for design and usability, we ensure that your website or web application not only looks stunning but also delivers intuitive navigation and interaction.",

    detailedData: [
      {
        title: "Employee App",
        image:
          "https://media.licdn.com/dms/image/v2/D4D12AQGMagqHytV0LA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1678788381212?e=2147483647&v=beta&t=gysjYEM2aMmC-ZELvUsyK1jscXlxp3DHRzFYMjadAPM",
        content:
          "Yashoda Publication is a publisher of books for various recruitment exams, including BMC, Railway NTPC, Police, Vanrakshak, Talathi, and more. Their books are available in Marathi and English.",
        email: "admin@gmail.com",
        password: "admin@123",
      },

      {
        title: "Teacher App ",
        image:
          "https://exatosoftware.com/wp-content/uploads/2024/11/make-app.jpg",
        content:
          "An ebook (short for electronic book), also spelled as e-book or eBook, is a book publication made available in electronic form, consisting of text, images, or both, readable on the flat-panel display of computers or other electronic devices.",
        email: " urmilashinde6472@gmail.com ",
        password: "Urmila123",
      },

      {
        title: "Admin App",
        image:
          "https://img.freepik.com/free-vector/human-hand-holding-mobile-phone-with-text-messages_74855-6531.jpg?w=360",
        content:
          "A 'Shipping System' is a computerized system that provides information about due date commitments, schedules carriers, generates packing slips and shipping labels, tracks shipping information, estimates shipment cube and weight, and automates customs and dangerous goods documents.",
        email: " mahajanpadam@gmail.com ",
        password: "Padam@1212",
      },
    ],
  },

  {
    title: "Web Development",
    image: "https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg",
    content:
      "At PJSoftTech, we offer comprehensive web development services to bring your digital vision to life. Our team combines cutting-edge technologies, industry best practices, and creative innovation to deliver exceptional websites and web applications tailored to your needs. Our front-end developers specialize in crafting engaging user interfaces and seamless user experiences using HTML, CSS, and JavaScript. With a keen eye for design and usability, we ensure that your website or web application not only looks stunning but also delivers intuitive navigation and interaction.",

    detailedData: [
      {
        title: "Yashoda System",
        image: image,
        content:
          "Yashoda Publication is a publisher of books for various recruitment exams, including BMC, Railway NTPC, Police, Vanrakshak, Talathi, and more. Their books are available in Marathi and English. ",
      },

      {
        title: "Shippment System",
        image: mahastudy,
        content:
          "An ebook (short for electronic book), also spelled as e-book or eBook, is a book publication made available in electronic form, consisting of text, images, or both, readable on the flat-panel display of computers or other electronic devices.",
      },

      {
        title: "Mahastudy System",
        image: mahastudy,
        content:
          "A 'Shipping System' is a computerized system that provides information about due date commitments, schedules carriers, generates packing slips and shipping labels, tracks shipping information, estimates shipment cube and weight, and automates customs and dangerous goods documents.",
      },
    ],
  },

  {
    title: "CRM Development",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmGdYUTGKDqUMjBES35qT9v7ac1sxAxdhow&s",
    content:
      "At PJSoftTech, we offer comprehensive web development services to bring your digital vision to life. Our team combines cutting-edge technologies, industry best practices, and creative innovation to deliver exceptional websites and web applications tailored to your needs.  Our front-end developers specialize in crafting engaging user interfaces and seamless user experiences using HTML, CSS, and JavaScript. With a keen eye for design and usability, we ensure that your website or web application not only looks stunning but also delivers intuitive navigation and interaction.",

    detailedData: [
      {
        title: "Student System",
        image: image,
        content:
          "Yashoda Publication is a publisher of books for various recruitment exams, including BMC, Railway NTPC, Police, Vanrakshak, Talathi, and more. Their books are available in Marathi and English.",
      },

      {
        title: "Employee System",
        image: mahastudy,
        content:
          "An ebook (short for electronic book), also spelled as e-book or eBook, is a book publication made available in electronic form, consisting of text, images, or both, readable on the flat-panel display of computers or other electronic devices.",
      },

      {
        title: "Fees System",
        image: mahastudy,
        content:
          "A 'Shipping System' is a computerized system that provides information about due date commitments, schedules carriers, generates packing slips and shipping labels, tracks shipping information, estimates shipment cube and weight, and automates customs and dangerous goods documents.",
      },
      {
        title: "Lead  System",
        image: mahastudy,
        content:
          "A 'Shipping System' is a computerized system that provides information about due date commitments, schedules carriers, generates packing slips and shipping labels, tracks shipping information, estimates shipment cube and weight, and automates customs and dangerous goods documents.",
      },
    ],
  },

  {
    title: "ERP Development",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHG5xqOenO9hJ8jnNDe9MXvP6IJR5-EGWJw&s",
    content:
      "At PJSoftTech, we offer comprehensive web development services to bring your digital vision to life. Our team combines cutting-edge technologies, industry best practices, and creative innovation to deliver exceptional websites and web applications tailored to your needs. Our front-end developers specialize in crafting engaging user interfaces and seamless user experiences using HTML, CSS, and JavaScript. With a keen eye for design and usability, we ensure that your website or web application not only looks stunning but also delivers intuitive navigation and interaction.",

    detailedData: [
      {
        title: "Logo Design 1",
        image: image,
        content:
          "Yashoda Publication is a publisher of books for various recruitment exams, including BMC, Railway NTPC, Police, Vanrakshak, Talathi, and more. Their books are available in Marathi and English.",
      },

      {
        title: "Logo Design 2 ",
        image: mahastudy,
        content:
          "An ebook (short for electronic book), also spelled as e-book or eBook, is a book publication made available in electronic form, consisting of text, images, or both, readable on the flat-panel display of computers or other electronic devices.",
      },

      {
        title: "Logo Design 3",
        image: mahastudy,
        content:
          "A 'Shipping System' is a computerized system that provides information about due date commitments, schedules carriers, generates packing slips and shipping labels, tracks shipping information, estimates shipment cube and weight, and automates customs and dangerous goods documents.",
      },
    ],
  },

  {
    title: "Testing and Deployment",
    image:
      "https://4foxsolutions.com/uploads/services/161278968216133562921805571624.gif",
    content:
      "At PJSoftTech, we offer comprehensive web development services to bring your digital vision to life. Our team combines cutting-edge technologies, industry best practices, and creative innovation to deliver exceptional websites and web applications tailored to your needs. Our front-end developers specialize in crafting engaging user interfaces and seamless user experiences using HTML, CSS, and JavaScript. With a keen eye for design and usability, we ensure that your website or web application not only looks stunning but also delivers intuitive navigation and interaction.",

    detailedData: [
      {
        title: "Testing 1",
        image: image,
        content:
          "Yashoda Publication is a publisher of books for various recruitment exams, including BMC, Railway NTPC, Police, Vanrakshak, Talathi, and more. Their books are available in Marathi and English. ",
      },

      {
        title: "Testing 2 ",
        image: mahastudy,
        content:
          "An ebook (short for electronic book), also spelled as e-book or eBook, is a book publication made available in electronic form, consisting of text, images, or both, readable on the flat-panel display of computers or other electronic devices.",
      },

      {
        title: "Testing 3",
        image: mahastudy,
        content:
          "A 'Shipping System' is a computerized system that provides information about due date commitments, schedules carriers, generates packing slips and shipping labels, tracks shipping information, estimates shipment cube and weight, and automates customs and dangerous goods documents.",
      },
    ],
  },

  {
    title: "Digital Marketing",
    image:
      "https://miro.medium.com/v2/resize:fit:1280/1*Jwt-NggFZflXNmkndLYLJA.gif",
    content:
      "At PJSoftTech, we offer comprehensive web development services to bring your digital vision to life. Our team combines cutting-edge technologies, industry best practices, and creative innovation to deliver exceptional websites and web ap  plications tailored to your needs. Our front-end developers specialize in crafting engaging user interfaces and seamless user experiences using HTML, CSS, and JavaScript. With a keen eye for design and usability, we ensure that your website or web application not only looks stunning but also delivers intuitive navigation and interaction.",

    detailedData: [
      {
        title: "Digital marketing 1",
        image: image,
        content:
          "Yashoda Publication is a publisher of books for various recruitment exams, including BMC, Railway NTPC, Police, Vanrakshak, Talathi, and more. Their books are available in Marathi and English. ",
      },

      {
        title: "Digital marketing 2 ",
        image: mahastudy,
        content:
          "An ebook (short for electronic book), also spelled as e-book or eBook, is a book publication made available in electronic form, consisting of text, images, or both, readable on the flat-panel display of computers or other electronic devices.",
      },

      {
        title: "Digital Marketing 3",
        image: mahastudy,
        content:
          "A 'Shipping System' is a computerized system that provides information about due date commitments, schedules carriers, generates packing slips and shipping labels, tracks shipping information, estimates shipment cube and weight, and automates customs and dangerous goods documen ts.",
      },
    ],
  },

  {
    title: "Logo Design",
    image: "https://www.pjsofttech.com/logoPj.png",
    content:
      "At PJSoftTech, we offer comprehensive web development services to bring your digital vision to life. Our team combines cutting-edge technologies, industry best practices, and creative innovation to deliver exceptional websites and web applications tailored to your needs. Our front-end developers specialize in crafting engaging user interfaces and seamless user experiences using HTML, CSS, and JavaScript. With a keen eye for design and usability, we ensure that your website or web application not only looks stunning but also delivers intuitive navigation and interaction.",

    detailedData: [
      {
        title: "Logo Design 1",
        image: image,
        content:
          "Yashoda Publication is a publisher of books for various recruitment exams, including BMC, Railway NTPC, Police, Vanrakshak, Talathi, and more. Their books are available in Marathi and English. ",
      },

      {
        title: "Logo Design  2 ",
        image: mahastudy,
        content:
          "An ebook (short for electronic book), also spelled as e-book or eBook, is a book publication made available in electronic form, consisting of text, images, or both, readable on the flat-panel display of computers or other electronic devices.",
      },

      {
        title: "Logo Design  3",
        image: mahastudy,
        content:
          "A 'Shipping System' is a computerized system that provides information about due date commitments, schedules carriers, generates packing slips and shipping labels, tracks shipping information, estimates shipment cube and weight, and automates customs and dangerous goods documents.",
      },
    ],
  },

  {
    title: "UI-UX Design",
    image:
      "https://cdn.dribbble.com/userupload/24153620/file/original-644051f8226411aebdb7df782ef56a7e.gif",
    content:
      "At PJSoftTech, we offer comprehensive web development services to bring your digital vision to life. Our team combines cutting-edge technologies, industry best practices, and creative innovation to deliver exceptional websites and web applications tailored to your needs. Our front-end developers specialize in crafting engaging user interfaces and seamless user experiences using HTML, CSS, and JavaScript. With a keen eye for design and usability, we ensure that your website or web application not only looks stunning but also delivers intuitive navigation and interaction.",

    detailedData: [
      {
        title: "PixelFlow",
        image: image,
        content:
          "Yashoda Publication is a publisher of books for various recruitment exams, including BMC, Railway NTPC, Police, Vanrakshak, Talathi, and more. Their books are available in Marathi and English. ",
      },

      {
        title: "UserEase ",
        image: mahastudy,
        content:
          "An ebook (short for electronic book), also spelled as e-book or eBook, is a book publication made available in electronic form, consisting of text, images, or both, readable on the flat-panel display of computers or other electronic devices.",
      },

      {
        title: "InteraXion",
        image: mahastudy,
        content:
          "A 'Shipping System' is a computerized system that provides information about due date commitments, schedules carriers, generates packing slips and shipping labels, tracks shipping information, estimates shipment cube and weight, and automates customs and dangerous goods documents.",
      },
    ],
  },
];

const Solutions = () => {
  const navigate = useNavigate();

  const handleReadMore = (service) => {
    navigate(`/software-details/${service.title}`, { state: { service } });
  };

  return (
    <>
      <div>
        <h1 className={`text-center ${styles.heading}`}>Our Solution</h1>
      </div>

      <div className={`container mb-5 ${styles.container}`}>
        <Grid container spacing={3}>
          {servicesData.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={styles.card1}>
                <CardMedia
                  component="img"
                  alt={service.title}
                  height="350"
                  image={service.image.src || service.image}
                  className={service.card}
                />

                <CardContent
                  className={styles.CardContent}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center", // Ensures text is centered
                  }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    <b>{service.title}</b>
                  </Typography>

                  <Typography component="div">
                    {service.content.substring(0, 100)}...
                  </Typography>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleReadMore(service)}
                    sx={{ mt: 2 }}
                    className={styles.readMoreButton}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Solutions;

