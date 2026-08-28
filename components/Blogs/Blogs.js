import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  Button,
  useMediaQuery,
  Box,
  Pagination,
} from "@mui/material";
import { useNavigate } from "../../router-compat";

const slugify = (text = "") =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");

export default function Blogs() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://pjsofttech.com:16443/blogs/getAllBlogs");
        const data = await res.json();
        const sortPostsNewestFirst = (arr) => {
          if (!Array.isArray(arr)) return [];
          const getDate = (p) => {
            const keys = [
              "publishedAt",
              "published_at",
              "publishDate",
              "publish_date",
              "createdAt",
              "created_at",
              "date",
              "updatedAt",
              "updated_at",
            ];
            for (const k of keys) {
              if (p && p[k]) {
                const d = new Date(p[k]);
                if (!isNaN(d)) return d;
              }
            }
            return null;
          };

          const withDate = arr.map((a) => ({ ...a, __date: getDate(a) }));
          if (withDate.some((x) => x.__date)) {
            withDate.sort((a, b) => b.__date - a.__date);
            return withDate.map(({ __date, ...rest }) => rest);
          }

          if (arr.some((p) => typeof p.id === "number")) {
            return [...arr].sort((a, b) => b.id - a.id);
          }

          return [...arr].reverse();
        };

        setPosts(sortPostsNewestFirst(Array.isArray(data) ? data : []));
        setCurrentPage(1);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    })();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 2, color: "#2f9bff" }}>
        Latest Blogs
      </Typography>
      <Typography align="center" sx={{ color: "#556", mb: 4, maxWidth: 920, mx: "auto" }}>
        Read our latest articles on technology, CRM, education and more. Click any card to view full article with author details and related posts.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {(() => {
          const indexOfLastPost = currentPage * postsPerPage;
          const indexOfFirstPost = indexOfLastPost - postsPerPage;
          const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
          return currentPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  textAlign: "center",
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                {/* --- Blog Image --- */}
                <CardMedia
                  component="img"
                  image={post.uploadImage || "/placeholder.jpg"}
                  alt={post.title}
                  sx={{
                    width: "100%",
                    height: 220,
                    objectFit: "contain",
                    borderBottom: "1px solid #eee",
                    backgroundColor: "#fff", // âœ… clean background behind image
                    p: 1, // adds small padding to avoid touching edges
                  }}
                />

                {/* --- Title --- */}
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "700",
                    mt: 2,
                    px: 2,
                    color: "#0a0a0a",
                    fontSize: "1.05rem",
                    lineHeight: 1.4,
                    minHeight: "60px",
                  }}
                >
                  {post.title}
                </Typography>

                {/* --- Read More Button --- */}
                <Button
                  component="a"
                  href={`/blog/${slugify(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  sx={{
                    mt: 2,
                    mb: 3,
                    borderColor: "#0B84EE",
                    color: "#0B84EE",
                    borderRadius: "8px",
                    fontWeight: "600",
                    textTransform: "none",
                    px: 5,
                    width: "70%",
                    mx: "auto",
                    display: "block",
                    "&:hover": {
                      backgroundColor: "#0B84EE",
                      color: "#fff",
                    },
                  }}
                >
                  Read More
                </Button>
              </Card>
            </Grid>
          ));
        })()}
      </Grid>

      {/* Pagination controls */}
      {Math.ceil(posts.length / postsPerPage) > 1 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Pagination
            count={Math.ceil(posts.length / postsPerPage)}
            page={currentPage}
            onChange={(e, value) => {
              setCurrentPage(value);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            color="primary"
          />
        </Box>
      )}
    </Container>
  );
}

