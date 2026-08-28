import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import heroImg from "../images/GIF IMAGES/about us gif'.gif";
const brochure = "/PJSOFTTECH_Brochure.pdf";

const stats = [
  { id: 1, label: "Years Experience", value: 5 },
  { id: 2, label: "Happy Clients", value: 120 },
  { id: 3, label: "Products Delivered", value: 45 },
  { id: 4, label: "Support Tickets", value: 999 },
];

const cards = [
  {
    title: "Student Lifecycle Management",
    text:
      "Unify and streamline processes from prospecting to graduation — admissions, enrolment, transcripts and alumni workflows in one system.",
    icon: (
      <svg viewBox="0 0 64 64" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#2F9BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 44c0-10 8-18 18-18s18 8 18 18" />
          <path d="M22 28a6 6 0 11-12 0 6 6 0 0112 0zM50 28a6 6 0 11-12 0 6 6 0 0112 0z" />
        </g>
      </svg>
    ),
  },
  {
    title: "AI-Driven Insights",
    text:
      "Built-in analytics and AI help predict trends, spot at-risk students and optimize operations with actionable dashboards.",
    icon: (
      <svg viewBox="0 0 64 64" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#2F9BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 44h48M18 36v8M30 26v18M42 18v26" />
          <circle cx="46" cy="18" r="3" fill="#2F9BFF" />
        </g>
      </svg>
    ),
  },
  {
    title: "Enhanced Operational Efficiency",
    text:
      "Automate workflows, reduce manual tasks across departments and improve staff productivity with role-based automation.",
    icon: (
      <svg viewBox="0 0 64 64" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#2F9BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 44h40M30 12v32" />
          <path d="M18 28h28" />
          <rect x="8" y="8" width="10" height="10" rx="2" />
          <rect x="46" y="8" width="10" height="10" rx="2" />
        </g>
      </svg>
    ),
  },
  {
    title: "Real-Time Reporting & Analytics",
    text:
      "Access hundreds of customizable dashboards & reports enabling data-driven decisions for students, staff and management.",
    icon: (
      <svg viewBox="0 0 64 64" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#2F9BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 48h48M16 36v12M28 28v20M40 20v28M52 12v36" />
        </g>
      </svg>
    ),
  },
];

const whyItems = [
  {
    title: "Expertise",
    text:
      "Our team of seasoned IT professionals brings years of experience in digital transformation projects specifically tailored for educational institutions.",
  },
  {
    title: "Technology-driven Solutions",
    text:
      "We leverage the latest technologies including AI, machine learning, and IoT to deliver cutting-edge solutions that optimize campus operations and enhance learning experiences.",
  },
  {
    title: "Scalability and Flexibility",
    text:
      "Our solutions are designed to scale with your institution's growth and adapt to evolving educational needs, ensuring long-term success.",
  },
  {
    title: "Comprehensive Support",
    text:
      "From initial consultation to ongoing maintenance and support, we provide end-to-end assistance to ensure seamless integration and uninterrupted operations.",
  },
  {
    title: "Cloud-Based & On-Premise Solutions",
    text:
      "Choose between cloud-hosted or on-premise deployment based on your infrastructure needs..Our Solutions are available on both cloud and on-premise servers,providing flexibility and scalability to meet your requirements",
  },
  {
    title: "Working On Live Project",
    text:
      "Live projects provide hands-on experience by allowing students or professionals to work on real-world industry problems rather than theoretical assignments. These projects help in enhancing technical skills, problem-solving abilities, and teamwork, making candidates job-ready.",
  },

];
const whyContainer = { hidden: {}, show: { transition: { staggerChildren: 0.10 } } };

const whyItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


const About = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 1400;
    const start = performance.now();
    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCounts(stats.map((s) => Math.floor(s.value * easeOutCubic(progress))));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <motion.h1
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className={styles.title}
            >
              About PJSoftTech
            </motion.h1>

            <motion.p
              initial={{ y: -6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className={styles.subtitle}
            >
              PJSofttech Pvt. Ltd. is a leading software company at the forefront of technological innovation. Established in 2020, our company is committed to delivering cutting-edge software solutions that empower businesses and individuals to thrive in the digital era. Welcome to PJSoftTech, where innovation meets excellence in technology solutions.
            </motion.p>

            <div className={styles.heroActions}>
              <a 
                className={styles.downloadBtn}
                href={brochure}
                download="PJSOFTTECH_Brochure.pdf"
                rel="noopener noreferrer"
              >
                Download Brochure
              </a>

              <a className={styles.ctaBtn} href="https://pjsofttech.com/contact-us">
                Request For Free Demo
              </a>
            </div>
          </div>
          <div className={styles.bannerMedia}>
            <motion.img
              src={heroImg}
              alt="About banner"
              className={styles.bannerImage}
              initial={{ scale: 0.99 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            />
            <div className={styles.bannerGradient} />
          </div>
        </div>
      </section>

      {/* Centered About Header (matches provided image) */}
      <section className={styles.aboutHeader}>
        <div className="container">
          <h1 className={styles.aboutTitle}>About PJSOFTTECH</h1>
          <p className={styles.aboutLead}>
            PJSofttech Pvt. Ltd. is a leading software company at the forefront of technological innovation. Established in 2020, our company is committed to delivering cutting-edge software solutions that empower businesses and individuals to thrive in the digital era. Welcome to PJSoftTech, where innovation meets excellence in technology solutions. At PJSoftTech, we're dedicated to providing cutting-edge IT services tailored to meet the unique needs of your business. Our team of experts specializes in developing innovative software solutions, implementing robust cybersecurity measures, and providing top-notch IT support to ensure your business stays ahead in today's digital landscape. With a focus on quality, reliability, and customer satisfaction, we strive to be your trusted partner in achieving your technology goals.
          </p>
        </div>
      </section>

      <section className={styles.wrap}>
        <div className="container">
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What We Do?
          </motion.h2>

          <motion.p
            className={styles.lead}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.08, duration: 0.6 }}
          >
            PJSOFTTECH is a comprehensive SIS/ERP that empowers higher education institutions to seamlessly manage the full student lifecycle, automate & optimize institutional workflows, and make data-driven decisions at every step.
          </motion.p>

          <motion.div
            className={styles.grid}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {cards.map((c, idx) => (
              <motion.div className={styles.card} key={c.title} variants={item} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }}>
                <div className={styles.iconWrap}>
                  <div className={styles.iconGlow} />
                  <div className={styles.icon}>{c.icon}</div>
                </div>

                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardText}>{c.text}</p>

                {/* decorative animated graphic */}
                <div className={styles.floatDecor} aria-hidden="true" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MISSION / VALUES */}
      <section className={`container ${styles.features}`}>
        <motion.div
          className={styles.featuresInner}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.header
            className={styles.featuresHeader}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.featuresTitle}>Our Mission & Values</h2>
            <p className={styles.featuresLead}>
              We deliver secure, scalable campus & business software that simplifies operations,
              improves outcomes and builds long-term partnerships through innovation and integrity.
            </p>
          </motion.header>

          <div className={styles.missionGrid}>
            <motion.article
              className={styles.mvCard}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              whileHover={{ y: -8, boxShadow: "0 22px 50px rgba(15,23,36,0.12)" }}
            >
              <div className={styles.iconWrap} aria-hidden="true">
                <div className={styles.iconCircle}>
                  {/* simple inline SVG icon */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2v6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 12h14" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 20h10" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className={styles.iconGlow} />
              </div>

              <div className={styles.mvBody}>
                <h3 className={styles.mvTitle}>Our Mission</h3>
                <p className={styles.mvText}>
                  Deliver secure, scalable campus and business software to simplify operations and improve outcomes
                  for institutions. We automate workflows and enable data-driven decisions.
                </p>
                <div className={styles.mvFooter}>
                  <span className={styles.dot} />
                  <a className={styles.learnLink} href="#contact">Request demo</a>
                </div>
              </div>
            </motion.article>

            <motion.article
              className={styles.mvCard}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.08 } } }}
              whileHover={{ y: -8, boxShadow: "0 22px 50px rgba(15,23,36,0.12)" }}
            >
              <div className={styles.iconWrap} aria-hidden="true">
                <div className={styles.iconCircle}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M3 12h7l3 8 4-16 4 8" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className={styles.iconGlow} />
              </div>

              <div className={styles.mvBody}>
                <h3 className={styles.mvTitle}>Our Vision</h3>
                <p className={styles.mvText}>
                  Empower educational institutions with modern, user‑centric platforms that improve communication,
                  transparency and student success through analytics and automation.
                </p>
                <div className={styles.mvFooter}>
                  <span className={styles.dot} />
                  <a className={styles.learnLink} href="#features">Explore features</a>
                </div>
              </div>
            </motion.article>

            <motion.article
              className={styles.mvCard}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.16 } } }}
              whileHover={{ y: -8, boxShadow: "0 22px 50px rgba(15,23,36,0.12)" }}
            >
              <div className={styles.iconWrap} aria-hidden="true">
                <div className={styles.iconCircle}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 6v6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 18h12" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className={styles.iconGlow} />
              </div>

              <div className={styles.mvBody}>
                <h3 className={styles.mvTitle}>Core Values</h3>
                <p className={styles.mvText}>
                  Client-first attitude, continuous innovation, robust security, and collaborative long‑term partnerships.
                </p>
                <div className={styles.mvFooter}>
                  <span className={styles.dot} />
                  <a className={styles.learnLink} href="#about">Learn more</a>
                </div>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </section>

      {/* Why Pjsofttech */}
      <section className={`container ${styles.whySection}`}>
        <motion.header
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.whyHeader}
        >
          <h2 className={styles.whyTitle}>Why PJSofttech?</h2>
          <p className={styles.whyLead}>
            PJSoftTech offers comprehensive CRM solutions designed to optimize various institutional functions, featuring interactive dashboards and advanced analytics:
          </p>
        </motion.header>

        <motion.div
          className={styles.whyGrid}
          variants={whyContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {whyItems.map((item, idx) => (
            <motion.article
              className={styles.whyCard}
              key={item.title}
              variants={whyItem}
              whileHover={{ translateY: -8, boxShadow: "0 22px 44px rgba(15,23,36,0.12)" }}
            >
              <div className={styles.whyIconWrap}>
                <div className={styles.whyIcon}>
                  {/* white check inside green circle */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className={styles.whyBody}>
                <h3 className={styles.whyCardTitle}>{item.title}</h3>
                <p className={styles.whyCardText}>{item.text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

    </div>
  );
};

export default About;