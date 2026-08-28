// // import React from "react";
// // import { useParams } from "../../router-compat";
// // import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
// // import yashoda from "../images/yashoda.png";
// // import mahastudy from "../images/mahastudynew.png";
// // import shipment from "../images/shipment.png";

// // const softwarePosts = [
// //   {
// //     title: "Yashoda Publication",
// //     image: yashoda,
// //     content: "Yashoda Publication is a publisher of books for various recruitment exams...",
// //   },
// //   {
// //     title: "EBook System",
// //     image: mahastudy,
// //     content: "An ebook (short for electronic book) is a book publication made available in electronic form...",
// //   },
// //   {
// //     title: "Shipment System",
// //     image: shipment,
// //     content: "A 'Shipping System' provides information about due date commitments, schedules carriers...",
// //   },
// // ];

// // const SoftwareDetails = () => {
// //   const { title } = useParams();

// //   return (
// //     <div className="container">
// //       <h1 className="text-center">Software Development Details</h1>
// //       <Grid container spacing={3}>
// //         {softwarePosts.map((post, index) => (
// //           <Grid item xs={12} sm={6} md={4} key={index}>
// //             <Card>
// //               <CardMedia component="img" alt={post.title} height="350" image={post.image} />
// //               <CardContent>
// //                 <Typography variant="h5">
// //                   <b>{post.title}</b>
// //                 </Typography>
// //                 <Typography>{post.content}</Typography>
// //               </CardContent>
// //             </Card>
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </div>
// //   );
// // };

// // export default SoftwareDetails;

// import React,{ useState } from "react";
// import { useLocation, useParams } from "../../router-compat";
// import {
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Grid,
//   Button,
//   Modal
// } from "@mui/material";
// import styles from "./Solutions.module.css";

// const SoftwareDetails = () => {
//   const { link } = useParams();
//   const location = useLocation();
//   const service = location.state?.service;

//   const [open, setOpen] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);

//   if (!service) {
//     return <Typography variant="h5">Service details not found!</Typography>;
//   }

//   const handleOpenModal = (service) => {
//     setSelectedService(service);
//     setOpen(true);
//   };

//   const handleCloseModal = () => {
//     setOpen(false);
//     setSelectedService(null);
//   };

//   return (
//     <>
//       <div>
//         <h1 className={`text-center ${styles.heading}`}>Software Data</h1>
//       </div>

//       <div className={`container mb-5 ${styles.container}`}>
//         <Grid container spacing={3}>
//           {service.detailedData.map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card className={styles.card1}>
//                 <CardMedia
//                   component="img"
//                   alt={service.title}
//                   height="350"
//                   image={service.image}
//                   className="service-image"
//                   style={{
//                     objectFit: "contain",
//                     borderRadius: "5px", // Optional: Adds rounded corners
//                     overflow: "hidden",
//                   }}
//                 />

//                 <CardContent className={styles.cardContent}>
//                   <Typography gutterBottom variant="h5" component="div">
//                     <b>{service.title}</b>

//                   </Typography>
//                   <Typography component="div">
//                     {service.content.substring(0, 100)}...
//                   </Typography>
//                   <Typography>
//                   <b>{service.email}</b>
//                   </Typography>
//                   <Typography>
//                   <b> {service.password}</b>
//                   </Typography>

//                   <div>
//                     <a
//                       href={service.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Visit Website
//                     </a>
//                   </div>

//                   <Button
//                     variant="contained"
//                     color="primary"
//                     sx={{ mt: 2 }}
//                     className={styles.readMoreButton}
//                     onClick={() => handleOpenModal(service)}
//                   >
//                     View More
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </div>

//        {/* Modal for detailed view */}
//        <Modal open={open} onClose={handleCloseModal}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 500,
//             bgcolor: "background.paper",
//             boxShadow: 24,
//             p: 4,
//             borderRadius: "10px",
//           }}
//         >
//           {selectedService && (
//             <>
//               <Typography variant="h4" gutterBottom>
//                 {selectedService.title}
//               </Typography>
//               <CardMedia
//                 component="img"
//                 height="300"
//                 image={selectedService.image}
//                 alt={selectedService.title}
//                 style={{
//                   objectFit: "contain",
//                   borderRadius: "5px",
//                   marginTop: "10px",
//                 }}
//               />
//               <Typography variant="body1">{selectedService.content}</Typography>
//               <Typography variant="body1"><b>{selectedService.email}</b></Typography>
//               <Typography variant="body1"><b>{selectedService.password}</b></Typography>

//               <Button
//                 variant="contained"
//                 color="secondary"
//                 sx={{ mt: 2 }}
//                 onClick={handleCloseModal}
//               >
//                 Close
//               </Button>
//             </>
//           )}
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default SoftwareDetails;

// import React, { useState } from "react";
// import { useLocation, useParams } from "../../router-compat";
// import {
//   Box,
//   Typography,
//   Grid,
//   Button,
//   Modal,
//   IconButton,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import { motion } from "framer-motion";
// import styles from "./Solutions.module.css";

// const SoftwareDetails = () => {
//   const { link } = useParams();
//   const location = useLocation();
//   const service = location.state?.service;

//   const [open, setOpen] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);

//   if (!service) {
//     return <Typography variant="h5">Service details not found!</Typography>;
//   }

//   const handleOpenModal = (service) => {
//     setSelectedService(service);
//     setOpen(true);
//   };

//   const handleCloseModal = () => {
//     setOpen(false);
//     setSelectedService(null);
//   };

//   return (
//     <>
//       <div>
//         <h1 className={`text-center ${styles.heading}`}>Solutions Data</h1>
//       </div>

//       <Grid container spacing={4} justifyContent="center">
//         {service.detailedData.map((item, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               whileHover={{ scale: 1.03 }}
//               style={{
//                 background: "rgba(255, 255, 255, 0.1)",
//                 borderRadius: "10px",
//                 boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
//                 backdropFilter: "blur(10px)",
//                 padding: "20px",
//                 overflow: "hidden",
//                 margin:"2px"
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 style={{
//                   width: "100%",
//                   height: "250px",
//                   objectFit: "contained",
//                   borderRadius: "10px",
//                 }}
//               />
//               <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" ,textAlign:"center"}}>
//                 {item.title}
//               </Typography>

//               <Typography variant="body2" sx={{ mb: 1 }}>
//                 {item.content.substring(0, 120)}...
//               </Typography>

//               <Typography color="text.secondary ">
//                 <b>{item.email}</b>
//               </Typography>

//               <Typography color="text.secondary">
//                 <b>{item.password}</b>
//               </Typography>

//               <Typography color="text-secondary">
//                  Visit website:{" "}
//                 </Typography>
//               <Button
//                 variant="outlined"
//                 color="primary"
//                 fullWidth
//                 sx={{ mt: 2 }}
//                 onClick={() => handleOpenModal(item)}
//               >
//                 View More
//               </Button>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Modal */}
//       {/* <Modal open={open} onClose={handleCloseModal}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: { xs: "90%", sm: 600 },
//             bgcolor: "background.paper",
//             boxShadow: 24,
//             p: 4,
//             borderRadius: 4,
//             maxHeight: "90vh",
//             overflowY: "auto",
//           }}
//         >
//           <IconButton
//             onClick={handleCloseModal}
//             sx={{ position: "absolute", top: 8, right: 8 }}
//           >
//             <CloseIcon />

//           </IconButton>

//           {selectedService && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//             >
//               <Typography variant="h4" gutterBottom>
//                 {selectedService.title}
//               </Typography>

//               <img
//                 src={selectedService.image}
//                 alt={selectedService.title}
//                 style={{
//                   width: "100%",
//                   height: "300px",
//                   objectFit: "contain",
//                   borderRadius: "8px",
//                 }}
//               />

//               <Typography variant="body1" sx={{ mt: 2 }}>
//                 {selectedService.content}
//               </Typography>
//               <Typography variant="body1" sx={{ mt: 1 }}>
//                 <b>Email:</b> {selectedService.email}
//               </Typography>
//               <Typography variant="body1">
//                 <b>Password:</b> {selectedService.password}
//               </Typography>
//               <a
//                 href={selectedService.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   display: "block",
//                   marginTop: "10px",
//                   color: "#1976d2",
//                 }}
//               >
//                 Visit Website
//               </a>
//             </motion.div>
//           )}
//         </Box>
//       </Modal> */}
//     </>
//   );
// };

// export default SoftwareDetails;

import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "../../router-compat";
import { Box, Typography, Paper, Tooltip } from "@mui/material";
import { School, Book, AccountTree } from "@mui/icons-material";
// Assuming your service.detailedData has: { id, title, icon, content, ... }

const getIcon = (title) => {
  switch (title) {
    case "Yashoda system":
      return <School />;
    case "EBook System":
      return <Book />;
    case "Shipment System":
      return <AccountTree />;
    default:
      return null;
  }
};

const SoftwareDetails = () => {
  const { link } = useParams();
  const location = useLocation();
  const service = location.state?.service;

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);

  const [selectedComponent, setSelectedComponent] = useState(
    service?.detailedData?.[0] || null
  );

  useEffect(() => {
    // Ensure the first item is selected when the page loads
    if (service?.detailedData?.length > 0) {
      setSelectedComponent(service.detailedData[0]);
    }
  }, [service]);

  if (!service) {
    return <Typography variant="h5">Service details not found!</Typography>;
  }

  return (
    <Box sx={{ display: "flex", padding: "10px" }}>
      {/* Sidebar */}
      <Paper
        elevation={3}
        sx={{
          width: "270px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          height: "300px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "30px",
          backgroundColor: "#2980B9",
          transition: "width 0.7s ease",
          position: "relative",
          overflow: "hidden",
          fontWeight:"bold",
          color:"red"
          }}

        // onMouseEnter={() => setIsCollapsed(false)}
        // onMouseLeave={() => setIsCollapsed(true)}
      >
        {service.detailedData.map((item) => (
          <Tooltip key={item.id} title={item.label} placement="right">
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0px",
                cursor: "pointer",
                padding: "10px",
                color: selectedComponent?.id === item.id ? "black" : "white",
                fontWeight:
                  selectedComponent?.id === item.id ? "bold" : "normal",
                borderRadius: "50px",
                backgroundColor:
                  selectedComponent?.id === item.id ? "white" : "normal",
                fontSize: "13px",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
                marginBottom: "10px",
                boxShadow:
                  selectedComponent?.id === item.id
                    ? "0px- 4px 10px rgb(0, 0, 0, 0.2)"
                    : "none",
              }}
              onClick={() => setSelectedComponent(item)}
            >
              {/* Render the icon */}

              <Typography variant="body1">{item.icon}</Typography>

              {/* Render the text */}
              <Typography variant="body1">{item.title}</Typography>

              <Typography>
                {item.AccountTree}
              </Typography>

              {/*Render the label*/ }
              <Typography variant="body1">{item.label}</Typography>
              
            </Typography>
          </Tooltip>
        ))}
      </Paper>

      <Box
        sx={{
          flexGrow: 1,
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        {selectedComponent ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on desktop
              gap: 4,
            }}
          >
            {/* Left Column: Text */}

            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                {selectedComponent.title}
              </Typography>

              <Typography variant="body1" sx={{ mb: 2 }}>
                {selectedComponent.content}
              </Typography>

              {selectedComponent.link && (
                <div>
                  <a
                    href={selectedComponent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit website
                  </a>
                </div>
              )}

              {selectedComponent.email && (
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <b>Email:</b> {selectedComponent.email}
                </Typography>
              )}

              {selectedComponent.password && (
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <b>Password:</b> {selectedComponent.password}
                </Typography>
              )}  
            </Box>

            {/* Right Column: Image */}

            {selectedComponent.image && (
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: "500px",
                  maxHeight: "500px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={selectedComponent.image}
                  alt={selectedComponent.title}
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
              </Box>
            )}
          </Box>
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Select a solution from the menu
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default SoftwareDetails;

