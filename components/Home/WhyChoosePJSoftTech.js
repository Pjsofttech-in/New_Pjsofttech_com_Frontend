import React from "react";
import styles from "./WhyChoosePJSoftTech.module.css";
import { motion } from "framer-motion";
import { ShieldCheck, Cloud, Laptop, Layers, Users, Wrench, Key, DollarSign, Lightbulb } from "lucide-react";

const cards = [
  {
    icon: <Lightbulb className={styles.icon} />,
    title: "Customized Solutions",
    desc: "We understand that every client has unique requirements, so we offer flexible and customizable software to meet specific needs.",
  },
  {
    icon: <Layers className={styles.icon} />,
    title: "Seamless Integration",
    desc: "Our system easily integrates with ERP, biometric, RFID, and payment gateway systems for a smooth user experience.",
  },
  {
    icon: <Laptop className={styles.icon} />,
    title: "User-Friendly Interface",
    desc: "Designed for ease of use, our dashboard enables administrators, students, and staff to navigate effortlessly.",
  },
  {
    icon: <ShieldCheck className={styles.icon} />,
    title: "High Security & Data Privacy",
    desc: "We implement advanced security protocols to safeguard sensitive data. Our systems are GDPR-compliant and privacy-focused.",
  },
  {
    icon: <Users className={styles.icon} />,
    title: "1:1 with Industry Mentors",
    desc: "Direct mentorship from industry experts offering personalized guidance to enhance professional growth.",
  },
  {
    icon: <Wrench className={styles.icon} />,
    title: "Working On Live Projects",
    desc: "Gain real-world experience through live projects that boost technical skills, problem-solving, and teamwork.",
  },
  {
    icon: <Cloud className={styles.icon} />,
    title: "Cloud & On-Premise Solutions",
    desc: "Choose between cloud-hosted or on-premise deployments — scalable, flexible, and performance-driven.",
  },
  {
    icon: <Laptop className={styles.icon} />,
    title: "Focus on Practical Learning",
    desc: "We emphasize real-world, results-driven training and development to ensure you stay industry-ready.",
  },
  {
    icon: <DollarSign className={styles.icon} />,
    title: "Affordable & Scalable",
    desc: "Our cost-effective pricing suits institutions of all sizes, with scalability as your organization grows.",
  },
];

const WhyChoosePJSoftTech = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.heading}
        >
          <span>Why Choose</span> PJSoftTech?
        </motion.h1>

        <div className={styles.grid}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={styles.card}
            >
              <div className={styles.iconWrapper}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardText}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoosePJSoftTech;
