import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Box,
} from "@mui/material";
import { useNavigate } from "../../router-compat";

import styles from "./Courses.module.css";

const Courses = () => {
  const navigate = useNavigate();
  const [coursePosts, setCoursePosts] = useState([]);

  useEffect(() => {
    const fetchCoursePosts = async () => {
      try {
        const response = await fetch(
          "https://pjsofttech.com:16443/getAllCourses"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCoursePosts(data);
      } catch (error) {
        console.error("Error Fetching Course Data:", error);
      }
    };
    fetchCoursePosts();
  }, []);

  return (
    <>
      <h1 className={`text-center ${styles.heading}`}>Our Courses</h1>

      <div className={`container  ${styles.container}`}>
        <Grid container spacing={3} className={styles.gridContainer}>
          {coursePosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card className={styles.card1}>
                <CardMedia
                  component="img"
                  alt={post.courseName}
                  height="250"
                  image={post.thumbnail || "default-image-url.jpg"}
                />

                <CardContent className={styles.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      color: "#0083B9",
                      fontSize: "22px",
                      textAlign: "center",
                    }}
                  >
                    <b>{post.courseName}</b>
                  </Typography>

                  <Typography variant="body1" className={styles.cardContent}>
                    {post.features}
                  </Typography>

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                    sx={{ marginTop: "12px" }}
                  >
                    {/* Price aligned to the left */}
                    <Typography
                      variant="body1"
                      sx={{ textAlign: "left", flex: 1 }}
                    >
                      <b style={{ color: "green" }}>Price:</b>{" "}
                      {post.price ? `${post.price} Rs` : "Free"}
                    </Typography>

         
                    <Typography
                      variant="body1"
                      sx={{ textAlign: "right", flex: 1 }}
                    >
                      <b style={{ color: "green" }}>MRP:</b>{" "}
                      {post.mrp ? `${post.mrp} Rs` : "Free"}
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    className={styles.readMoreButton}  sx={{ marginTop:'20px', flex: 1 }}
                    onClick={() =>
                      navigate(`/Courses/${post.id}`, {
                        state: { courseName: post.courseName },
                      })
                    }
                  >
                    <b>View More</b>
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

export default Courses;

