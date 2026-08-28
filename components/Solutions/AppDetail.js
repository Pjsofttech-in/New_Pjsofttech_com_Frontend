import React from "react";
import { useParams } from "../../router-compat";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import image from "../images/yashoda.png";
import mahastudy from "../images/mahastudynew.png";
// import shipment from "../images/shipment.png";
import styles from "./Solutions.module.css";
import { Dashboard } from "@mui/icons-material";

export const appdevelopementPosts = [
  {
    title: "Yashoda Publication",
    image: image,
    content:
      "Yashoda Publication is a publisher of books for various recruitment exams, including BMC, Railway NTPC, Police, Vanrakshak, Talathi, and more. Their books are available in Marathi and English. ",
  },

  {
    title: "EBook System",
    image: mahastudy,
    content:
      "An ebook (short for electronic book), also spelled as e-book or eBook, is a book publication made available in electronic form, consisting of text, images, or both, readable on the flat-panel display of computers or other electronic devices.",
  },

  {
    title: "Shipment System",
    image: Dashboard,
    content:
      "A 'Shipping System' is a computerized system that provides information about due date commitments, schedules carriers, generates packing slips and shipping labels, tracks shipping information, estimates shipment cube and weight, and automates customs and dangerous goods documents.",
  },
];

const AppDetail = () => {
  const { title } = useParams();

  return (
    <div className="container">
      <h1 className={`text-center ${styles.heading}`}>
        App Development Details
      </h1>
      <div className={`container mb-5 ${styles.container}`}>
        <Grid container spacing={3}>
          {appdevelopementPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={styles.card1}>
                <CardMedia
                  component="img"
                  alt={post.title}
                  height="350"
                  image={post.image.src || post.image}
                  class="card"
                />
                <CardContent className={styles.cardContent}>
                  <Typography gutterBottom variant="h5" component="div">
                    <b>{post.title}</b>
                  </Typography>
                  <Typography component="div">
                    {post.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default AppDetail;

