import React from 'react';
import styles from './Slideshow1.module.css';

const images = [
  'https://aws.vedmarg.com/wp-content/uploads/2023/08/geetanjali-high-school-student-management-system.png',
  'https://aws.vedmarg.com/wp-content/uploads/2023/05/online-school-erp-system-free-download-with-source-code-5.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwuT7bOkQWU3M3a0jz9DjIAL56t30w_rWgJFt_tMYOrAx3TTw1c0XInJXCPplUS5B8q0&usqp=CAU',
  'https://aws.vedmarg.com/wp-content/uploads/2023/05/student-information-management-system-download-3.png',
  'https://img.freepik.com/free-vector/gradient-school-logo-design-template_23-2149664332.jpg?semt=ais_incoming&w=740&q=80',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStoJ4KU3bWwa8rUOX0avBYBp3Q6w3Th-NOhA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_0xA9vP8oRDe-_cM8vG7UvMMkQft3CdSpQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaLNa_LcDRFFGsktLYu7JDsc7F9SadeeVsQ&s',
  require('../images/ss1.jpg'),
  require('../images/ss2.jpg'),
  require('../images/ss3.jpg'),
  
];

const Slideshow1 = () => {
  const imageSource = (image) => image?.src || image?.default?.src || image?.default || image;

  return (
    <>
      <h1 className={styles.heading}>Our Respected Clients</h1>
      <div className={styles.logos}>
        <div className={styles['logos-slide']}>
          {images.map((src, index) => (
            <img key={index} src={imageSource(src)} alt={`Slide ${index + 1}`} className={styles.image} />
          ))}
        </div>
        <div className={styles['logos-slide']}>
          {images.map((src, index) => (
            <img key={index} src={imageSource(src)} alt={`Slide ${index + 1}`} className={styles.image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Slideshow1;