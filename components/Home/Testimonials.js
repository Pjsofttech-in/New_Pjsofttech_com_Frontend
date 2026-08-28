import React from 'react';
import styles from './Testimonials.module.css'; 
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const testimonials = [
  {
    name: 'SR International School',
    content: 'As a client of PJSoftTech, I can confidently say that my experience with them has been nothing short of exceptional. From the initial consultation to the final implementation, every step of the way was marked by genuine commitment to delivering results.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR61B0DhvsTqbNKxzqUlgYmzH7tl9f2zOxXXQ&s'
  },
  {
    name: 'Percentage International College',
    content: 'Working with PJSoftTech has been nothing short of outstanding. From the outset, their dedication to understanding our unique needs and providing tailored IT solutions was evident, laying the foundation for a truly collaborative partnership.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR431DLvaEwZir-vF4_z6k0enThxuGOD_6FQg&s'
  },
  {
    name: 'Sri Vaani International School',
    content: 'Working with PJSoftTech has been an absolute pleasure. From the moment we engaged with their team, it was evident that they were not just another IT company, but a strategic partner invested in our success.',
    image: 'https://content.jdmagicbox.com/v2/comp/coimbatore/a4/0422px422.x422.240330131318.q7a4/catalogue/sri-vaani-international-school-mallegoundenpalayam-coimbatore-u7km9gktza.jpg'
  },
  {
    name: 'Sai Arjuna International University',
    content: 'Working with PJSoftTech has been an absolute pleasure. From the moment we engaged with their team, it was evident that they were not just another IT company, but a strategic partner invested in our success.',
    image: 'https://content.jdmagicbox.com/comp/pune/p3/020pxx20.xx20.230325173427.k5p3/catalogue/arjuna-international-school-wagholi-pune-playgroups-ji3v1e66by-250.jpg'
  },
];

const Testimonials = () => {
  return (
    <Container className='pt-5'>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia className='pt-2'
                component="img"
                image={testimonial.image}
                alt={testimonial.name}
                sx={{ width: '100%', height: 180, objectFit: 'contain' }}
              />
              <CardContent>
                <Typography variant="h6 font-pop fw-bold fs-6 text-center p-2" component="div" gutterBottom>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {testimonial.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;