import React, { useEffect, useRef, Suspense, lazy, useState } from "react";
import styles from "./Home.module.css";
import {
  Typography,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { FaSchool, FaUniversity, FaBookReader, FaChalkboardTeacher, FaBuilding } from 
"react-icons/fa";
import { useInView } from "react-intersection-observer";
const SlideShow = lazy(() => import("./SlideShow"));
const Cards = lazy(() => import("./Cards"));
const Slideshow1 = lazy(() => import("./Slideshow1"));
const WhyChoosePJSoft = lazy(() => import("./WhyChoosePJSoftTech"));
const FAQ = lazy(() => import("./FAQ"));
const Testimonials = lazy(() => import("./Testimonials"))
const Loading = () => (
  <div className={styles.loading}>
    <div className={styles.loader}></div>
  </div>
);

const cards = [
  {
    title: "Academy/Institute",
    icon: <FaChalkboardTeacher />,
    desc: "Manage courses, student data, admissions, communication and academic operations with powerful ERP software.",
    color: "#00BFA6",
  },
  {
    title: "School",
    icon: <FaSchool />,
    desc: "Manage school operations, attendance, fees, student records and daily activities with school ERP software.",
    color: "#6C63FF",
  },
  {
    title: "College",
    icon: <FaBookReader />,
    desc: "Streamline college admissions, student records, results, fees and administration with integrated ERP software.",
    color: "#FF6584",
  },
  {
    title: "University",
    icon: <FaUniversity />,
    desc: "Manage university departments, student records, academic operations and analytics with an integrated ERP system.",
    color: "#F7B32B",
  },
  {
    title: "Company",
    icon: <FaBuilding />,
    desc: "Improve business productivity with CRM and ERP solutions for customers, projects, operations and data management.",
    color: "#0078FF",
  },
];


export default function Home() {
  const slideRef = useRef(null);
  const [showCards, setShowCards] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  // Chatbot floating panel state
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true,
    delay: 1000,
  });

  // States for counters
  const [experience, setExperience] = useState(0);
  const [successImpl, setSuccessImpl] = useState(0);
  const [currentUsers, setCurrentUsers] = useState(0);
  const [school, setSchool] = useState(0);
  const [services, setServices] = useState(0);
  const [academy, setAcademy] = useState(0);
  const [university, setUniversity] = useState(0);


  // Target values for counters
  const targetExperience = 4;
  const targetSuccess = 250;
  const targetUsers = 200000;
  const targetSchool = 150;
  const targetServices = 20;
  const targetAcademy = 500;
  const targetUniversity = 5

  useEffect(() => {
    if (cardsInView) {

      // Animate counters when in view
      const animateCounter = (start, target, setter, duration) => {
        let current = start;
        const increment = target / (duration / 50);
        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            clearInterval(interval);
            setter(target);
          } else {
            setter(Math.ceil(current));
          }
        }, 50);
      };

      animateCounter(0, targetExperience, setExperience, 2000);
      animateCounter(0, targetSuccess, setSuccessImpl, 2000);
      animateCounter(0, targetUsers, setCurrentUsers, 2000);
      animateCounter(0, targetSchool, setSchool, 2000);
      animateCounter(0, targetServices, setServices, 2000);
      animateCounter(0, targetAcademy, setAcademy, 2000);
      animateCounter(0, targetUniversity, setUniversity, 2000);

    }
  }, [cardsInView]);

  useEffect(() => {
    if (cardsInView) {
      setShowCards(true);
    }
  }, [cardsInView]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (slideRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = slideRef.current;
        const isEndOfSlides = scrollLeft + clientWidth >= scrollWidth;
        slideRef.current.scrollLeft = isEndOfSlides ? 0 : scrollLeft + 100;
      }
    }, 100);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        } else {
          entry.target.classList.remove(styles.visible);
        }
      });
    }, options);

    const elements = document.querySelectorAll(`.${styles.hidden}`);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setPopupOpen(false);
  };


  return (
    <>

      <Suspense fallback={<Loading />}>
        <SlideShow />
      </Suspense>

      <section className={styles.section}>
        <div className={styles.container}>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heading}
          >
            Our Software Useful For
          </motion.h1>

         <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
           className={styles.subText}
           >
          PJSOFTTECH provides powerful <strong>ERP and CRM software solutions</strong>
          for <strong>schools, colleges, academies, universities, and businesses</strong>.
          Manage operations, student data, admissions, fees, communication, customer
          information, and daily business processes efficiently.
          </motion.p>


          <div className={styles.cardGrid}>
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className={styles.card}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{ borderTop: `5px solid ${card.color}` }}
              >
                <div className={styles.icon} style={{ color: card.color }}>
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <div className={styles.softwareSection} ref={cardsRef}>
        <div className={styles.textArea}>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.title}
          >
            Our Best CRM & ERP Software
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={styles.description}
          >
            Our <strong>CRM</strong> and <strong>ERP-based software</strong> empowers
            <strong> Schools, Colleges, Academies,</strong> and
            <strong> Universities</strong> to simplify daily operations,
            manage data securely, and enhance collaboration between staff,
            students, and parents. It helps automate admissions, fee
            management, communication, and reporting—improving overall
            efficiency and productivity.
          </motion.p>
        </div>

        <Suspense fallback={<Loading />}>
          {showCards ? <Cards /> : <Loading />}
        </Suspense>
      </div>

      <div className="py-2">
        <div className="containerclient">
          <Typography
            fontWeight="800"
            variant="h3"
            align="center"
            gutterBottom
          >
            Our Milestones{" "}
            <span style={{ color: "#269DD7" }}> We've got it Covered</span>
          </Typography>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "60px",
              flexWrap: "nowrap", // makes all items stay in one line
              marginTop: "50px",
            }}
          >
            {[
              { value: `${experience}+`, label: "Years of Experience" },
              { value: `${services}+`, label: "Our Softwares" },
              { value: `${successImpl}+`, label: "Organizations" },
              { value: `${academy}+`, label: "Academy" },
              { value: `${school}+`, label: "School & College" },
              { value: `${university}+`, label: "University" },
              { value: `${currentUsers}+`, label: "Enrolled Students" },
            ].map((item, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <Typography className="fw-bold" variant="h4" color="#269DD7">
                  {item.value}
                </Typography>
                <Typography variant="h6" color="#696969">
                  {item.label}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className={styles.hidden}>
        <Suspense fallback={<Loading />}>
          <Slideshow1 />
        </Suspense>
      </div>

      <div className={styles.hidden}>
        <Suspense fallback={<Loading />}>
          <WhyChoosePJSoft />
        </Suspense>
      </div>

      <div className={`${styles.hidden} faq-section`}>
        <Suspense fallback={<Loading />}>
          <FAQ />
          <br />
          <Typography
            variant="h3"
            align="center"
            className={styles.testimonials}
          >
            <div className={styles.span}>What Our Client Says</div>
          </Typography>
          <Testimonials />
        </Suspense>
      </div>

    </>
  );
}
<style>
  {`
@keyframes chatbot-float {
  0% { transform: translateY(0);}
  100% { transform: translateY(-8px);}
}
`}
</style>;
