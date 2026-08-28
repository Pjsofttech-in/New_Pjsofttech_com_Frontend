import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SlideShow.module.css";
import pjimg4 from "../images/crm banner images.jpg"
import logo from "../images/logoPj.png";

const Slideshow = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600, // Faster transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Faster autoplay
    cssEase: "linear",   // Smoother animation
    pauseOnHover: false,
    prevArrow: null,
    nextArrow: null,
  };

  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  const slides = [
    { src: pjimg4, alt: "Slide 4", url: "/income-expenses-management-system" }, // Fixed URL
  ];


  return (
    <div className={styles.slideshowContainer}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className={styles.slideContent} key={index}>
            <img
              src={slide.src.src || slide.src}
              alt={slide.alt}
              className={styles.size}
              loading="eager"
            />
            <div className={styles.gradientOverlay}></div>
            <button
              className={styles.centerButton}
              onClick={() => handleButtonClick(slide.url)}
            >
              Know More...
            </button>
          </div>
        ))}
      </Slider>
      {/* Logo in Bottom Right */}
      <img src={logo.src || logo} alt="Logo" className={styles.bottomRightLogo} />
    </div>
  );
};


export default Slideshow;

