import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Clients.module.css";
import logo1 from "../images/Client Logo/Shivaji Shikshan Sanstha Washim.jpeg";
import logo2 from "../images/Client Logo/R.A Collage Washim.jpeg";
import logo3 from "../images/Client Logo/Collage Of Management Khamgaon.jpeg";
import logo4 from "../images/Client Logo/A. K National Collage Khamgaon.jpeg";
import logo5 from "../images/Client Logo/Bharat Vidya Mandir Buldana.jpeg";
import logo6 from "../images/Client Logo/Collage Of Engineering Shegaon.jpeg";
import logo7 from "../images/Client Logo/Jadhvar Collage Pune.jpeg";
import logo8 from "../images/Client Logo/Aleard Collage Pune.jpeg";
import logo9 from "../images/Client Logo/Okinwan School.jpg";
import logo10 from "../images/Client Logo/Bora Classes.jpg";
import logo11 from "../images/Client Logo/AArambh Academy.jpg";
import logo12 from "../images/Client Logo/ACE Sceience Academy.jpg";
import logo13 from "../images/Client Logo/IQRA Classes.jpg";
import logo14 from "../images/Client Logo/Delta Education Academy.jpg";
import logo15 from "../images/Client Logo/Ganeet Guru Punde Sir.jpg";
import logo16 from "../images/Client Logo/Lokrajya Academy.jpg";
import logo17 from "../images/Client Logo/OOAcademy.jpg";
import logo18 from "../images/Client Logo/Pixel Pulse.jpg";
import logo19 from "../images/Client Logo/Vishnus Academy.jpg";
import logo20 from "../images/Client Logo/yashoda.jpeg";
import logo21 from "../images/Client Logo/chavan Classes.jpg";
import logo22 from "../images/Client Logo/My Tayari.jpg";
import logo23 from "../images/Client Logo/EDU WRITE.jpg";
import logo24 from "../images/Client Logo/ILHAM COMPUTER INSTITUTE.jpg";
import logo25 from "../images/Client Logo/sikim skills university.jpeg";
import logo26 from "../images/Client Logo/Vishavidyalay.jpeg";
import logo27 from "../images/Client Logo/J D chaware.jpeg";
import logo28 from "../images/Client Logo/shri sanmati dyanmandir.jpeg";
import logo29 from "../images/Client Logo/jain school.jpeg";
import logo30 from "../images/Client Logo/jain public school.jpeg";
import logo31 from "../images/Client Logo/jain global school.jpeg";
import logo32 from "../images/Client Logo/Sri jadavbai nathmal singhavee school.jpeg";
import logo33 from "../images/Client Logo/TJIS.jpeg";
import logo34 from "../images/Client Logo/Shree Mahaveer Jain Vidyalaya.jpeg";
import logo35 from "../images/Client Logo/Shri Digambar jain vidyamandir.jpeg";
import logo36 from "../images/Client Logo/Gurukul Englisg School.jpeg";
import logo37 from "../images/Client Logo/Vaishali jain School.jpeg";
import logo38 from "../images/Client Logo/SMC English School.jpeg";
import logo39 from "../images/Client Logo/Shri Neminath Jain Bramcharya Nashik.jpeg";
import logo40 from "../images/Client Logo/New Logo.jpeg";
import logo41 from "../images/Client Logo/SR International school.jpeg"
import logo42 from "../images/Client Logo/percentage school.png"
import logo43 from "../images/Client Logo/sri vani school.avif"
import logo44 from "../images/Client Logo/arjuna school.webp"

const clientsData = [
  { id: 1, name: "Shivaji Shikshan Sanstha Washim", logo: logo1 },
  { id: 2, name: "R.A Collage Washim", logo: logo2 },
  { id: 3, name: "Collage Of Management Khamgaon", logo: logo3 },
  { id: 4, name: "A. K National Collage Khamgaon", logo: logo4 },
  { id: 5, name: "Bharat Vidya Mandir Buldana", logo: logo5 },
  { id: 6, name: "Collage Of Engineering Shegaon", logo: logo6 },
  { id: 7, name: "Jadhvar Collage Pune", logo: logo7 },
  { id: 8, name: "Aleard Collage Pune", logo: logo8 },
  { id: 9, name: "Okinwan School", logo: logo9 },
  { id: 10, name: "Bora Classes", logo: logo10 },
  { id: 11, name: "AArambh Academy", logo: logo11 },
  { id: 12, name: "ACE Science Academy", logo: logo12 },
  { id: 13, name: "IQRA Classes ", logo: logo13 },
  { id: 14, name: "Delta Education Academy", logo: logo14 },
  { id: 15, name: "Ganit Guru By Punde Sir", logo: logo15 },
  { id: 16, name: "Lokrajya Academy", logo: logo16 },
  { id: 17, name: "OOAcademy Pune", logo: logo17 },
  { id: 18, name: "Pixsel Pulse Academy", logo: logo18 },
  { id: 19, name: "Vishnus Academy", logo: logo19 },
  { id: 20, name: "Yashoda Publication ", logo: logo20 },
  { id: 21, name: "Chavan Classes", logo: logo21 },
  { id: 22, name: "MY TAYARI", logo: logo22 },
  { id: 23, name: "EDU WRITE", logo: logo23 },
  { id: 24, name: "ILHAM COMPUTER INSTITUTE", logo: logo24 },
  { id: 25, name: "Sikim Skills University", logo: logo25 },
  { id: 26, name: "Vishawavidyalay Classes", logo: logo26 },
  { id: 27, name: "J D Chaware Sec", logo: logo27 },
  { id: 28, name: "Shri Sanmati Vidyamandir", logo: logo28 },
  { id: 29, name: "Jain Mandir", logo: logo29 },
  { id: 30, name: "Jain Public School", logo: logo30 },
  { id: 31, name: "Jain Global School", logo: logo31 },
  { id: 32, name: "Sri jadavbai Nathamal Singhavee School", logo: logo32 },
  { id: 33, name: "TJIS", logo: logo33 },
  { id: 34, name: "Shree Mahaveer Jain Vidyamandir", logo: logo34 },
  { id: 35, name: "Shree Dighambar Jain School", logo: logo35 },
  { id: 36, name: "Gurukul Jain English School", logo: logo36 },
  { id: 37, name: "Vaishali Jain School", logo: logo37 },
  { id: 38, name: "SMC English School", logo: logo38 },
  { id: 39, name: "Shri Neminath Jian Nashik", logo: logo39 },
  { id: 40, name: "DR SK Toshiwala", logo: logo40 },
  { id: 41, name: "SR International School", logo: logo41 },
  { id: 42, name: "Percentage International school", logo: logo42 },
  { id: 43, name: "Sri Vaani International School", logo: logo43 },
  { id: 44, name: "Sai Arjuna International school", logo: logo44 },



];

export default function Clients() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("All");

  // Filter logic
  const filteredClients = clientsData.filter((client) => {
    if (filter === "All") return true;
    const name = client.name.toLowerCase();
    if (filter === "School") return name.includes("school") || name.includes("vidyamandir");
    if (filter === "College") return name.includes("collage") || name.includes("college");
    if (filter === "Academy") return name.includes("academy") || name.includes("classes");
    if (filter === "University") return name.includes("university") || name.includes("vishawavidyalay");
    return true;
  });

  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <h3 className={styles.kicker}>PJSOFTTECH Valuable Clients</h3>
        <div className={styles.divider} aria-hidden />
        <p className={styles.lead}>
          We are proud to share some of the clients and institutions we have had the pleasure of partnering with across the education, government and private sectors. At PJSOFTTECH we focus on long‑term relationships built on trust, transparency and measurable results. Our team delivers tailored ERP, CRM, payroll and mobile solutions designed to the unique workflows of schools, colleges, universities and organisations — improving operational efficiency, reporting clarity and stakeholder engagement. We work closely with our clients to understand their challenges and co‑create solutions that drive digital transformation, compliance and better outcomes. Below is a selection of organisations that trust PJSOFTTECH — we continue to add many more as we grow together.
        </p>
        {/* Filter Buttons */}
        <div className={styles.filterBtns}>
          {["All", "School", "College", "Academy", "University"].map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${filter === cat ? styles.active : ""}`}
              onClick={() => setFilter(cat)}
            >
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Filtered Logos Grid */}
        <div className={styles.gridWrap}>
          <motion.div
            className={styles.grid}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ staggerChildren: 0.03 }}
          >
            {filteredClients.map((c, idx) => (
              <motion.button
                key={c.id}
                className={styles.logoCard}
                whileHover={{ scale: 1.03 }}
                onClick={() => setActive(c)}
                style={{ transitionDelay: `${idx * 30}ms` }}
                aria-label={c.name}
              >
                <div className={styles.logoBox}>
                  <img src={c.logo.src} alt={c.name} className={styles.logo} />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Modal */}
        {active && (
          <div className={styles.modal} onClick={() => setActive(null)}>
            <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
              <button className={styles.close} onClick={() => setActive(null)}>×</button>
              <img src={active.logo.src} alt={active.name} className={styles.modalLogo} />
              <h4 className={styles.modalTitle}>{active.name}</h4>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
