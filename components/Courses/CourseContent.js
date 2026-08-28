import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "../../router-compat";
import { Typography, Box, CardMedia , useMediaQuery} from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { Button } from "react-bootstrap";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FcBookmark } from "react-icons/fc";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const videos = [
  {
    id: "1",
    title: "Java Beginners Programming",
    thumbnail: "https://i.ytimg.com/vi/eIrMbAQSU34/maxresdefault.jpg",
    youtubeId: "YOUR_VIDEO_ID_1",
  },
  {
    id: "2",
    title: "Java Programming Course",
    thumbnail: "https://i.ytimg.com/vi/A74TOX803D0/maxresdefault.jpg",
    youtubeId: "YOUR_VIDEO_ID_2",
  },
  {
    id: "3",
    title: "Java Tutorials",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtKgZnD1pZY-IHUneWzP5OOf9WrEvWZAcxkw&s",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "4",
    title: "Learn Java Full Course",
    thumbnail: "https://i.ytimg.com/vi/GoXwIVyNvX0/maxresdefault.jpg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "5",
    title: "Learn Java Full Course",
    thumbnail: "https://i.ytimg.com/vi/2qr7gHNErIk/maxresdefault.jpg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "6",
    title: "Learn Java Full Course",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTn2dyE67jWB20VNKx2It5icPVWCvKAMx8YQ&s",

    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "7",
    title: "Learn Java Full Course",
    thumbnail: "https://i.ytimg.com/vi/mAtkPQO1FcA/maxresdefault.jpg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "8",
    title: "Learn Java Full Course",
    thumbnail:
      "https://i.ytimg.com/vi/hUZ4jQmgwi4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD33oMevn4WoSVKsSmb31bvc_jVXA",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "9",
    title: "Python Developer Full Course",
    thumbnail: "https://i.ytimg.com/vi/XKHEtdqhLK8/maxresdefault.jpg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "10",
    title: "Python Developer Full Course Channel",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToalrND_0cK1yZz92phTxBI59Bw621FBdpQQ&s",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "11",
    title: "What is Python Developer Full Course ",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdorfyrXuSd3CzOJTjkuE-k46xImC2q3xNmQ&s",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "12",
    title: "Python Developer Full Course",
    thumbnail: "https://img-c.udemycdn.com/course/750x422/2314160_8d61_6.jpg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "13",
    title: "Python Developer Learn ",
    thumbnail: "https://www.cdmi.in/courses@2x/python-training-institute.webp",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "13",
    title: "Python Developer Learn ",
    thumbnail:
      "https://www.excelptp.com/wp-content/uploads/2021/05/python-banner-img.jpg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "14",
    title: "Python Developer Learn ",
    thumbnail: "https://cdn.buttercms.com/t349DUJUReydclxkbGiA",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "15",
    title: "Python Developer Learn  (.NET) learning",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ohJgNv8OUZAB7nJJSe2d6DbZzkSSrYARghtETLl2Uj0vIGdtVA5zhMxeRK5sOJg4md4&usqp=CAU",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "16",
    title: " Full Stack Developer (.NET) learning ",
    thumbnail: "https://i.ytimg.com/vi/sBHRd6e5ZBY/maxresdefault.jpg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "17",
    title: " Full Stack Developer (.NET) learning",
    thumbnail:
      "https://i.ytimg.com/vi/PXvSt93HOWc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBtMOdZlwZaUirFmWUIjInYVBm_Bg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "18",
    title: " Full Stack Developer (.NET) learning  ",
    thumbnail: "https://i.ytimg.com/vi/18M5jnvXzuw/maxresdefault.jpg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "18",
    title: "Full Stack Developer (.NET) learning  ",
    thumbnail:
      "https://5.imimg.com/data5/SELLER/Default/2024/8/442531101/HO/IO/EA/21433036/dot-net-full-stack-icon-500x500.png",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "18",
    title: "Full Stack Developer (.NET) learning  ",
    thumbnail:
      "https://i.ytimg.com/vi/AhAxLiGC7Pc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBYdPeRdJpAKgUMgCEqFehNVUKDkg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "18",
    title: "Full Stack Developer (.NET) learning  ",
    thumbnail:
      "https://www.classcentral.com/report/wp-content/uploads/2024/04/BCG_ASP.NET_banner-1.png",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "18",
    title: "Full Stack Developer (.NET) learning  ",
    thumbnail: "https://i.ytimg.com/vi/C5cnZ-gZy2I/maxresdefault.jpg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "18",
    title: "Full Stack Developer (.NET) learning  ",
    thumbnail: "https://i.ytimg.com/vi/5vpA2Hg8hp4/hqdefault.jpg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "19",
    title: "UI/UX Designer",
    thumbnail: "https://i.ytimg.com/vi/ONrvf5bjsF8/maxresdefault.jpg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },

  {
    id: "20",
    title: "UI/UX Designer",
    thumbnail:
      "https://i.ytimg.com/vi/3KzzHK81spw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBOK-tKihvoN0hymAJiNj2U17Jupg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "21",
    title: "UI/UX Designer",
    thumbnail: "https://i.ytimg.com/vi/55NvZjUZIO8/maxresdefault.jpg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "23",
    title: "UI/UX Designer",
    thumbnail:
      "https://www.twine.net/blog/wp-content/uploads/2024/06/Product-Designer-Job-Description-Template-4-1.png",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "23",
    title: "UI/UX Designer",
    thumbnail:
      "https://i.ytimg.com/vi/y6L1fQA5yc0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD4UBhoke6YcZomo9n6cIjIPbG2xA",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "24",
    title: "Cloud Computing",
    thumbnail: "https://i.ytimg.com/vi/RWgW-CgdIk0/maxresdefault.jpg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "25",
    title: "Cloud Computing",
    thumbnail: "https://i.ytimg.com/vi/mxT233EdY5c/maxresdefault.jpg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "26",
    title: "Cloud Computing",
    thumbnail: "https://i.ytimg.com/vi/ShA_u6rG5G8/maxresdefault.jpg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "27",
    title: "Cloud Computing",
    thumbnail:
      "https://i.ytimg.com/vi/N0SYCyS2xZA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBTX_gXM2YGwxS-kpo0_Sg7GgwUxw",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "28",
    title: "Artificial Intelligence ",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHeE-0A2T0BLR6MHhQujM6dVbuAS7Ws0I4Vg&s",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "29",
    title: "Artificial Intelligence ",
    thumbnail:
      "https://i.ytimg.com/vi/LWtU2ZXV2eA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBYw7Xd4LaKQ7ZSFjrasZVn09CtIA",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "30",
    title: "Artificial Intelligence ",
    thumbnail: "https://i.ytimg.com/vi/-uZTfg_DrNY/maxresdefault.jpg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
  {
    id: "31",
    title: "Artificial Intelligence ",
    thumbnail:
      "https://m.media-amazon.com/images/I/51PC4R87LbL._UF1000,1000_QL80_.jpg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
];

const modules = [
  {
    title: "Module 1: Introduction to Generative AI and Amazon Bedrock",
    content:
      "Explore the fundamentals of generative AI, from its evolution to its transformative applications across industries. Gain an introduction to Amazon Bedrock and understand how it enables efficient generative AI model deployment.",
  },
  {
    title: "Module 2: Machine Learning & Deep Learning Foundations",
    content:
      "Learn key machine learning concepts, deep dive into neural networks, transformers, and large language models (LLMs), and understand foundation models essential to Amazon Bedrockâ€™s capabilities.",
  },
  {
    title: "Module 3: Amazon Bedrock Components and Model Services",
    content:
      "Get acquainted with Amazon Bedrockâ€™s core services, pre-trained models, customization options, and integration techniques to build cost-effective AI solutions tailored to real-world needs.",
  },
  {
    title: "Module 4: Building Generative AI Applications",
    content:
      "Master advanced natural language processing, image generation, and automation techniques, including ethical AI practices. This module ensures students can apply generative models for diverse applications, from chatbots to image processing tools.",
  },
  {
    title: "Module 5: Practical Labs and Projects",
    content:
      "Participate in hands-on labs to fine-tune, optimize, and implement generative models on Amazon Bedrock, culminating in a capstone project that showcases a full AI application lifecycle.",
  },
  {
    title: "Module 6: Advanced Topics and Industry Trends",
    content:
      "Stay ahead with insights into multi-modal generative AI models, the future of generative AI, and emerging industry trends, particularly in AI-driven business intelligence and e-commerce.",
  },
];

const CourseContent = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [setSelectedVideo] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    courseName: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const location = useLocation();
  const courseName = location.state?.courseName || "";

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(courseName.toLowerCase())
  );

  const isMobile = useMediaQuery("(max-width:600px)");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://pjsofttech.com:16443/createCourseInquiry",
        formData
      );
      setModalMessage("Form submitted successfully!");
      setShowModal(true);
    } catch (error) {
      console.error("Error during form submission:", error);
      setModalMessage("Failed to submit the form. Please try again");
      setShowModal(true);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://pjsofttech.com:16443/getCourseById/${id}`
        );
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching Course post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <div>Loading......</div>;

  const handleDownloadPDF = () => {
    const input = document.getElementById("pdf-content");

    if (!input) {
      console.error("Element not found!");
      return;
    }

    html2canvas(input, { scale: 3, useCORS: true, taintTest: false }).then(
      (canvas) => {
        const imgData = canvas.toDataURL("image/png", 1.0);
        const pdf = new jsPDF("p", "mm", "a4");

        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let position = 0;

        while (position < imgHeight) {
          pdf.addImage(
            imgData,
            "PNG",
            0,
            position,
            imgWidth,
            Math.min(imgHeight - position, pageHeight)
          );
          position += pageHeight;
          if (position < imgHeight) {
            pdf.addPage();
          }
        }

        pdf.save("course_details.pdf");
      }
    );
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "stretch", md: "center" },
          justifyContent: "space-between",
          textAlign: { xs: "center", md: "left" },
          p: { xs: 2, md: 4 },
          gap: { xs: 2, md: 4 },
        }}
      >
        <div id="pdf-content" style={{ width: isMobile ? "100%" : "80%" }}>
          <Box>
            <Typography
              variant={isMobile ? "h4" : "h2"}
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: isMobile ? "2rem" : undefined,
              }}
            >
              {post.title}
            </Typography>

            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{
                fontWeight: "bold",
                mb: 4,
                textAlign: "left",
                fontSize: isMobile ? "1.2rem" : undefined,
              }}
            >
              {post.courseName}
            </Typography>

            <CardMedia
              component="img"
              image={post.thumbnail}
              style={{
                borderRadius: 12,
                marginTop: 8,
                width: isMobile ? "100%" : "520px",
                maxWidth: "100%",
                height: isMobile ? "auto" : undefined,
              }}
            />

            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
              Course Overview <br />
            </Typography>

            <Typography
              sx={{
                fontWeight: "normal",
                mb: 1,
                fontSize: isMobile ? "1rem" : undefined,
              }}
            >
              {post.courseOverview}A Course Overview Description provides a
              comprehensive summary of a course, detailing its objectives,
              content, structure, learning outcomes, and other essential
              information. This course introduces students to the fundamental
              principles of data science, including data collection, analysis,
              visualization, and interpretation. Students will learn how to
              apply statistical techniques, programming skills, and machine
              learning concepts to real-world problems. By the end of the
              course, students will be able to work with large datasets and
              derive meaningful insights from them.
            </Typography>

            <ul
              style={{
                paddingLeft: 20,
                listStyleType: "none",
                fontSize: isMobile ? "1rem" : undefined,
              }}
            >
              <li>
                â˜… <b>Duration: </b> 8 Month {post.duration}
              </li>
              <li>
                â˜… <b>Mode: </b> {post.mode} Online and Offline Mode
              </li>
              <li>
                â˜… <b>Eligibility:</b> A minimum of two years of experience in
                software development for an advanced AI course.
                {post.eligibility}
              </li>
            </ul>

            <Typography
              variant="h6"
              style={{ fontWeight: "bold", marginTop: "80px" }}
            >
              What Youâ€™ll Learn
            </Typography>

            <Box className="container">
              <Typography
                variant={isMobile ? "h6" : "h5"}
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  mb: 3,
                  fontSize: isMobile ? "1.1rem" : undefined,
                }}
              >
                Course Modules
              </Typography>

              {modules.map((module, index) => (
                <Box key={index} className="module" sx={{ mb: 2 }}>
                  <Typography
                    component="span"
                    className="module-title"
                    sx={{
                      fontWeight: "bold",
                      fontSize: isMobile ? "1rem" : undefined,
                    }}
                  >
                    {module.title}
                  </Typography>
                  <Typography
                    component="span"
                    className="module-content"
                    sx={{ fontSize: isMobile ? "0.95rem" : undefined }}
                  >
                    {module.content}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Typography
              variant="h6"
              style={{ fontWeight: "bold", marginTop: "80px" }}
            >
              <FcBookmark /> Why Choose This Course?
            </Typography>

            <Typography
              sx={{
                fontWeight: "normal",
                mt: 3,
                fontSize: isMobile ? "1rem" : undefined,
              }}
            >
              â˜… <b>Hands-on Projects:</b> Work on practical projects that
              strengthen your understanding and build a compelling portfolio.{" "}
              <br />
            </Typography>

            <Typography
              sx={{
                fontWeight: "normal",
                fontSize: isMobile ? "1rem" : undefined,
              }}
            >
              â˜… <b>Real-World Case Studies:</b>Learn from real-world
              applications of generative AI across sectors. <br />
            </Typography>

            <Typography
              sx={{
                fontWeight: "normal",
                fontSize: isMobile ? "1rem" : undefined,
              }}
            >
              â˜… <b>Expert Instructors: </b> Receive guidance from AI industry
              veterans with extensive practical knowledge.
              <br />
            </Typography>

            <Typography
              sx={{
                fontWeight: "normal",
                fontSize: isMobile ? "1rem" : undefined,
              }}
            >
              â˜… <b> Flexible Learning Options: </b> Both online and classroom
              modes to fit your schedule.
              <br />
            </Typography>

            <Typography
              variant="h6"
              style={{ fontWeight: "bold", marginTop: "80px" }}
            >
              <FcBookmark /> Description
            </Typography>

            <Typography sx={{ fontSize: isMobile ? "1rem" : undefined }}>
              {post.features}
            </Typography>

            <ul
              style={{
                paddingLeft: 20,
                listStyleType: "none",
                marginTop: "20px",
                fontSize: isMobile ? "1rem" : undefined,
              }}
            >
              <li>â˜… Course Name :{post.courseName}</li>
              <li>â˜… Language: English</li>
              <li>â˜… Certificate : Yes</li>
              <li>â˜… Mode : Online / Offline</li>
              <li>â˜… Recorded Lectures Available</li>
              <li>â˜… Phone Pay / Gpay No :8010457790</li>
            </ul>

            <Typography
              style={{
                marginTop: "54px",
                fontSize: isMobile ? "1rem" : undefined,
              }}
            >
              <b>
                <FcBookmark /> Check Online Course Details :{" "}
                <a href="#">pjsofttech.com</a>
              </b>
            </Typography>

            <Typography
              style={{
                marginTop: "54px",
                fontSize: isMobile ? "1rem" : "20px",
              }}
            >
              <b>
                <FcBookmark /> Free Policy: Not Refundable
              </b>
            </Typography>
          </Box>

          <div className="mt-4">
            <button
              id="download-btn"
              onClick={handleDownloadPDF}
              style={{
                backgroundColor: "orange",
                color: "white",
                padding: isMobile ? "8px 14px" : "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: isMobile ? "1rem" : "1.1rem",
                width: isMobile ? "100%" : undefined,
              }}
            >
              <b>Download Brochure</b>
            </button>
          </div>
        </div>
      </Box>

      {/* VIDEO SELECTION BELOW */}
      
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: isMobile ? "1.1rem" : undefined,
          }}
        >
          Demo Videos
        </Typography>
        <div
          style={{
            display: "flex",
            gap: isMobile ? "12px" : "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {filteredVideos.map((video) => (
            <Card
              key={video.id}
              style={{
                width: isMobile ? "100%" : 320,
                textAlign: "center",
                marginBottom: isMobile ? 12 : 0,
              }}
            >
              <CardMedia
                component="img"
                image={video.thumbnail}
                alt="Video Thumbnail"
                style={{
                  height: isMobile ? 140 : 180,
                  cursor: "pointer",
                  width: "100%",
                }}
                onClick={() => setSelectedVideo(video.id)}
              />
              <CardContent>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontWeight: "bold",
                    fontSize: isMobile ? "1rem" : undefined,
                  }}
                >
                  {video.title}
                </Typography>

                <Button
                  variant="contained"
                  style={{
                    marginTop: 10,
                    backgroundColor: "orange",
                    color: "white",
                    fontSize: isMobile ? "1rem" : undefined,
                    width: isMobile ? "100%" : undefined,
                  }}
                  onClick={() => setSelectedVideo(video.id)}
                >
                  <b>Watch Video</b>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Box>
    </>
  );
};

export default CourseContent;

