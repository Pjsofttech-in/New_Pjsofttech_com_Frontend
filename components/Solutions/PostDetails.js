import React from "react";
import { useParams } from "../../router-compat";
import { Card, CardContent, CardMedia, Typography, Container } from "@mui/material";
import { blogPosts, blogPosts1, blogPosts2 } from "./postData";
import { softwarePosts } from "./softwareData";
import styles from "./Solutions.module.css"

const allPosts = [...blogPosts, ...blogPosts1, ...blogPosts2, ...softwarePosts];

const PostDetails = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const post = allPosts.find((post) => post.title === decodedTitle);

  if (!post) {
    console.error(`Post not found for title: ${decodedTitle}`);
    return <Typography variant="h6" align="center">Post not found</Typography>;
  }

  return (
    <Container maxWidth="lg" className={styles.postContainer}>
      <Card className={styles.postCard}>
        <CardMedia
          component="img"
          alt={post.title}
          image={post.image.src || post.image}
          className={styles.postImage}
        />
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom className={styles.postTitle}>
            {post.title}
          </Typography>
          <Typography variant="body1" className={styles.postContent}>
            {post.content}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PostDetails;


