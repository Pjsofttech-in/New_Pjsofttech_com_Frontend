import React from "react";
import { motion } from "framer-motion";
import styles from "./ContactPage.module.css";
import PhoneIco from "@mui/icons-material/Phone";
import EmailIco from "@mui/icons-material/Email";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import heroImg from "../images/Client Logo/contact.jpg"; 
import SecondContact from "../SecondContact/SecondContact";

export default function ContactPage() {
  const contactCards = [
    {
      id: "sales",
      title: "Company",
      email: "info@pjsofttech.com",
      phones: ["+91-9923570901"],
      icon: <EmailIco />,
    },
    {
      id: "support",
      title: "Support",
      email: "sales@pjsofttech.com",
      phones: ["+91-7020615206"],
      icon: <PhoneIco />,
    },
    {
      id: "jobs",
      title: "Jobs",
      email: "hr@pjsofttech.com",
      phones: ["+91-9923570901"],
      icon: <WorkOutlineIcon />,
    },
  ];

  const offices = [
    {
      title: "Headoffice - Pune",
      lines: [
        "203, 2nd floor, Mangalmurti",
        "Complex, behind ABIL Tower, Hirabagh",
        "Chowk, Tilak Road, Shrukravar Peth, Pune-411002",
        "Cell: +91-9923570901",
      ],
    },
    {
      title: "Branchoffice - Pune",
      lines: [
        "2nd floor, White House, Oppo. Tilak Smarak,",
        "Tilak Rd, Perugate, Sadashiv Peth, Pune,",
        "Sadashiv Peth, Pune, Maharashtra 411030",
        "Cell: +91-7020615206",
      ],
    },
   
  ];

  return (
    <div className={styles.page}>
      {/* Hero / Banner Section */}
      <header
        className={styles.hero}
        style={{
          backgroundImage: `url(${heroImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
      </header>
      

      <main className={styles.container}>
        {/* Contact Cards Section */}
        <section className={styles.cardsWrap}>
          <motion.div
            className={styles.cardsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.08 }}
          >
            {contactCards.map((c, i) => (
              <motion.article
                key={c.id}
                className={styles.contactCard}
                whileHover={{ translateY: -8 }}
                transition={{ type: "spring", stiffness: 230, damping: 18 }}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className={styles.iconCircle}>{c.icon}</div>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <div className={styles.cardBody}>
                  <a className={styles.email} href={`mailto:${c.email}`}>
                    {c.email}
                  </a>
                  <div className={styles.phones}>
                    {c.phones.map((p, idx) => (
                      <div key={idx}>{p}</div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Offices Section */}
        <section className={styles.officesWrap}>
          <h2 className={styles.officesTitle}>Our Offices</h2>
          <div className={styles.officesGrid}>
            {offices.map((o) => (
              <motion.div
                className={styles.officeCard}
                key={o.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h4 className={styles.officeTitle}>{o.title}</h4>
                <div className={styles.officeBody}>
                  {o.lines.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className={styles.mapSection}>
          <div className={styles.mapBox}>
            <iframe
              title="PJSOFTTECH location"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d289.45386053729334!2d73.85471881312708!3d18.504252909073315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0128b44909f%3A0x52bd480dae08d64b!2sHira%20Baug%20Mitra%20Mandal%20Ganesh%20Temple!5e0!3m2!1sen!2sin!4v1715589288259!5m2!1sen!2sin"
              loading="lazy"
              className={styles.map}
            />
          </div>
          
        </section>
      </main>
       <SecondContact />
    </div>
  );
}
