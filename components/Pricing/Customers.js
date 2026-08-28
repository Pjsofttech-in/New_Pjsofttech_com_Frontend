import React from "react";
import { Box, Typography, Card, CardContent, Avatar, Grid } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const testimonials = [
  {
    logo: "https://via.placeholder.com/40", 
    company: "Lemonade",
    quote: "Substantial rise in our business metrics!",
    description:
      "Mindblown by our experience with pjsofttech! Within 10 days of going live, we’ve seen a 27% increase in website traffic, 25% CAC improvement, and an instant 52% daily revenue growth.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D", 
    name: "Yashoda Book Shop",
    title: "Founder & CEO, Lemonade",
  },
  {
    logo: "https://via.placeholder.com/40", 
    company: "Emo Bois of India",
    quote: "Substantial rise in our business metrics!",
    description:
      "It’s been a really smooth experience with pjsofttech. We were deciding between Shopify and pjsofttech. We thought through a lot and pjsofttech seemed the smoothest for our selling experience considering we were setting up our store for the first time.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxctjU21pUENIsGN1F4qY21P7GfdEbhTMp2g&s", 
    name: "Mauli Book Shop",
    title: "Founder, Emo Bois of India",
  },
  {
    logo: "https://via.placeholder.com/40", 
    company: "Sambuddha Bhattacharya",
    quote: "Substantial rise in our business metrics!",
    description:
      "It’s been a really smooth experience with pjsofttech. We were deciding between Shopify and pjsofttech. We thought through a lot and pjsofttech seemed the smoothest for our selling experience considering we were setting up our store for the first time.",
    avatar: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg", 
    name: "Book Tail Shop",
    title: "Founder, Emo Bois of India",
  },
  {
    logo: "https://via.placeholder.com/40", 
    company: "Emo Bois of India",
    quote: "Substantial rise in our business metrics!",
    description:
      "It’s been a really smooth experience with pjsofttech. We were deciding between Shopify and pjsofttech. We thought through a lot and pjsofttech seemed the smoothest for our selling experience considering we were setting up our store for the first time.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ-v0zNf87egWtW12v6rePO1HdgloPEjtqyUEZlj5t0KcMUemIvfgtgTl2oQmvFJt_ECc&usqp=CAU", 
    name: "Book Vartaman Shop",
    title: "Founder , Emo Bois of India",
  },
];

const Customers = () => {
  return (
    <Box sx={{ backgroundColor: "#FFFAF0", textAlign: "center", py: 6, px: 2 }}>
      <FormatQuoteIcon sx={{ fontSize: 60, color: "black" }} />
      <Typography variant="h5" fontWeight="bold" fontFamily="popins sans-serif" sx={{ mt: 1}}>
        Hear from our satisfied Client's
      </Typography>
      <Typography variant="body1" color="textSecondary" fontFamily="popins sans-serif" sx={{ mt: 1, mb: 4 }}>
        From beginners to enterprise brands, everyone loves Pjsofttech!
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3, textAlign: "center" }}>
              <CardContent> 
                <Typography variant="body1" fontFamily="sans-serif" sx={{ mb: 2 }}>
                  "{testimonial.quote}"
                </Typography>
                <Avatar src={testimonial.avatar} sx={{ width: 80, height: 80, mx: "auto", mb: 2 }} />
                <Typography variant="h6" fontWeight="bold">{testimonial.name}</Typography>
                <Typography variant="body2" fontFamily="sans-serif" color="textSecondary" mt={2}>{testimonial.description}</Typography>
                <Typography variant="body2" mt={2}>{testimonial.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Customers;
