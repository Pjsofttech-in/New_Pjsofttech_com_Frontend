import React, { useState } from "react";
import styles from "./CareerPost.module.css";

const JobsPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Pjsofttech PVt Ltd",
      location: "Swargate Pune ",
      salary: "₹ 10 to 25K Per Months ",
      type: "Full-time",
      desc: "Lead the frontend development of our flagship product, working with modern frameworks and ensuring performance.",
      tags: ["React", "Javascript", "Redux", "Boostrap"],
      posted: "1 day ago",
    },
    {
      id: 2,
      title: "Frontend Developer (Intern)",
      company: "Pjsofttech PVt Ltd",
      location: "Swargate Pune ",
      salary: "₹ 0 to 8K Per Months ",
      type: "Full-time",
      desc: "Lead the frontend development of our flagship product, working with modern frameworks and ensuring performance.",
      tags: ["React", "Javascript", "Redux", "Boostrap"],
      posted: "1 day ago",
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "Pjsofttech PVt Ltd",
      location: "Swargate Pune ",
      salary: "₹ 10 to 25 K Per Months ",
      type: "Full-time",
      desc: "Design and implement scalable backend services and APIs ensuring high availability and low latency.",
      tags: ["Node.js", "Python", "PostgreSQL", "JAVA"],
      posted: "3 days ago",
    },
    {
      id: 4,
      title: "Backend Developer (Intern)",
      company: "Pjsofttech PVt Ltd",
      location: "Swargate Pune ",
      salary: "₹ 0 to 8K Per Months ",
      type: "Full-time",
      desc: "Design and implement scalable backend services and APIs ensuring high availability and low latency.",
      tags: ["Node.js", "Python", "PostgreSQL", "JAVA"],
      posted: "3 days ago",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "Pjsofttech PVt Ltd",
      location: "Swargate Pune ",
      salary: "₹ 12 to 30K Per Months ",
      type: "Full-time",
      desc: "Build and maintain our cloud infrastructure, ensuring high availability, security, and scalability of our services.",
      tags: ["AWS", "Kubernetes", "Terraform", "CI/CD"],
      posted: "3 days ago",
    },
    {
      id: 6,
      title: "DevOps Engineer (Intern)",
      company: "Pjsofttech PVt Ltd",
      location: "Swargate Pune ",
      salary: "₹ 0 to 8K Per Months ",
      type: "Full-time",
      desc: "Build and maintain our cloud infrastructure, ensuring high availability, security, and scalability of our services.",
      tags: ["AWS", "Kubernetes", "Terraform", "CI/CD"],
      posted: "3 days ago",
    },
    {
      id: 7,
      title: "Data Scientist",
      company: "Pjsofttech PVt Ltd",
      location: "Swargate Pune ",
      salary: "₹ 20 to 30 K Per Months ",
      type: "Full-time",
      desc: "Develop and implement machine learning models to solve complex business problems and drive data-driven decisions.",
      tags: ["Python", "Machine Learning", "TensorFlow", "SQL"],
      posted: " 1 week ago",
    },
    {
      id: 8,
      title: "Mobile App Developer (React Native)",
      company: "Pjsofttech PVt Ltd",
      location: "Swargate Pune ",
      salary: "₹ 15 to 30 K Per Months ",
      type: "Full-time",
      desc: "Develop and maintain cross-platform mobile applications with a focus on performance and user experience.",
      tags: ["React Native", "JavaScript", "Redux"],
      posted: " 4 days ago",
    },
    {
      id: 9,
      title: "Mobile App Developer (React Native)-Intern",
      company: "Pjsofttech PVt Ltd",
      location: "Swargate Pune ",
      salary: "₹ 0 to 8K Per Months ",
      type: "Full-time",
      desc: "Develop and maintain cross-platform mobile applications with a focus on performance and user experience.",
      tags: ["React Native", "JavaScript", "Redux"],
      posted: " 4 days ago",
    },
     {
      id: 10,
      title: "Mobile App Developer (ios)",
      company: "Pjsofttech PVt Ltd",
      location: "Swargate Pune ",
      salary: "₹ 10 to 25 K Per Months ",
      type: "Full-time",
      desc: "Develop and maintain cross-platform mobile applications with a focus on performance and user experience.",
      tags: ["React Native", "JavaScript", "Redux", "IOS"],
      posted: " 4 days ago",
    },
    {
      id: 11,
      title: "Mobile App Developer (ios)-Intern",
      company: "Pjsofttech PVt Ltd",
      location: "Swargate Pune ",
      salary: "₹ 0 to 8K Per Months ",
      type: "Full-time",
      desc: "Develop and maintain cross-platform mobile applications with a focus on performance and user experience.",
      tags: ["React Native", "JavaScript", "Redux", "IOS"],
      posted: " 4 days ago",
    },
    {
      id: 12,
      title: "Graphic Designer & Video Creator",
      company: "Pjsofttech PVt Ltd",
      location: "Swargate Pune ",
      salary: "₹10 to 20 K Per Months ",
      type: "Full-time",
      desc: "We are seeking a creative and versatile Graphic Designer with strong expertise in CorelDRAW and Adobe Illustrator to join our team on a part-time or freelance basis.",
      tags: ["CorelDRAW ", "Adobe Illustrator", "Adobe Photoshop", "Canvas"],
      posted: " 7 days ago",
    },
     {
      id: 13,
      title: "Graphic Designer & Video Creator (Intern)",
      company: "Pjsofttech PVt Ltd",
      location: "Swargate Pune ",
      salary: "₹ 0 to 8K Per Months ",
      type: "Full-time",
      desc: "We are seeking a creative and versatile Graphic Designer with strong expertise in CorelDRAW and Adobe Illustrator to join our team on a part-time or freelance basis.",
      tags: ["CorelDRAW ", "Adobe Illustrator", "Adobe Photoshop", "Canvas"],
      posted: " 7 days ago",
    },
    {
      id: 14,
      title: "Business Development Executive",
      company: "Pjsofttech PVt Ltd",
      location: "Swargate Pune ",
      salary: "₹ 24 to 30 K Per Months ",
      type: "Full-time",
      desc: "This is an entry-level position for freshers or candidates with up to one year of experience in client-facing role.",
      tags: ["Lead Generation ", "Business Development", "sales", "Postsales Support"],
      posted: "10 days ago",
    },
     {
      id: 15,
      title: "Business Development Executive (Field Visit Sales)",
      company: "Pjsofttech PVt Ltd",
      location: "Swargate Pune ",
      salary: "₹ 24 to 30 K Per Months ",
      type: "Full-time",
      desc: "This is an entry-level position for freshers or candidates with up to one year of experience in client-facing role.",
      tags: ["Lead Generation ", "Business Development", "sales", "Postsales Support"],
      posted: "10 days ago",
    },
     {
      id: 16,
      title: "Business Development Manager",
      company: "Pjsofttech PVt Ltd",
      location: "Swargate Pune ",
      salary: "₹ 24 to 30 K Per Months ",
      type: "Full-time",
      desc: "This is an entry-level position for freshers or candidates with up to one year of experience in client-facing role.",
      tags: ["Lead Generation ", "Business Development", "sales", "Postsales Support"],
      posted: "10 days ago",
    },
    {
      id: 17,
      title: "Digital Marketing Executive",
      company: "Pjsofttech PVt Ltd",
      location: "Swargate Pune ",
      salary: "₹10 to 15 K Per Months ",
      type: "Full-time",
      desc: "Manage SEO (on/off-page) & Google Ads campaigns.",
      tags: ["CorelDRAW ", "Adobe Illustrator", "Adobe Photoshop", "Canvas","SEO"],
      posted: "2 days ago",
    },
    {
      id: 18,
      title: " Digital Marketing Executive (Intern)",
      company: "Pjsofttech PVt Ltd",
      location: "Swargate Pune ",
      salary: "₹ 0 to 8K Per Months ",
      type: "Full-time",
      desc: "Manage SEO (on/off-page) & Google Ads campaigns.",
      tags: ["CorelDRAW ", "Adobe Illustrator", "Adobe Photoshop", "Canvas","SEO"],
      posted: "2 days ago",
    },
  ];

  const openPopup = (job) => {
    setSelectedJob(job);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedJob(null);
  };


  return (
    <div className={styles.jobsPage}>
      {/* ===== HERO SECTION ===== */}
      <section className={styles.heroSection}>
        <div className={styles.overlay}>
          <div className={styles.heroContent}>
            <div className={styles.iconCircle}>
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <h1>We Are Hiring Top Talent In Pjsofttech </h1>
            <div className={styles.heroButtons}>
              <button className={styles.btnPrimary}>Apply a Job – It's Free</button>
              <button
                className={styles.btnOutline}
                onClick={() => { window.location.href = "/contact-us"; }}
              >
                Learn More
              </button>
            </div>
            <div className={styles.heroRating}>
              <span>⭐⭐⭐⭐⭐</span> Working Happily 2000 Employees
            </div>
          </div>
        </div>
      </section>

      {/* ===== JOB LISTINGS ===== */}
      <section className={styles.jobListings}>
        <h3>{jobs.length} Jobs Found</h3>
        {jobs.map((job) => (
          <div key={job.id} className={styles.jobCard}>
            <div className={styles.jobInfo}>
              <h4>{job.title}</h4>
              <div className={styles.companyInfo}>
                <span>
                  <i className="fa-solid fa-building"></i> {job.company}
                </span>
                <span>
                  <i className="fa-solid fa-location-dot"></i> {job.location}
                </span>
                <span className={styles.jobType}>{job.type}</span>
              </div>
              <p>{job.desc}</p>
              <div className={styles.tags}>
                {job.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <small>Posted {job.posted}</small>
            </div>
            <div className={styles.applySection}>
              <span className={styles.salary}>{job.salary}</span>
              <button
                className={styles.btnApply}
                onClick={() => openPopup(job)}
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* ===== POPUP MODAL ===== */}
      {showPopup && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popupCard} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closePopup}>✖</button>

            <div className={styles.popupIcon}>
              <i className="fa-solid fa-envelope-open-text"></i>
            </div>

            <h2 className={styles.popupTitle}>Send Your Resume</h2>
            <p className={styles.popupSubtitle}>
              Apply for <strong>{selectedJob?.title}</strong>
            </p>

            {/* Email Section */}
            <div className={styles.emailBox}>
              <span>📧</span>
              <a href="mailto:hr@pjsofttech.com" className={styles.emailLink}>
                hr@pjsofttech.com
              </a>
            </div>

            {/* WhatsApp Section */}
            <div className={styles.whatsappBox}>
              <span>💬</span>
              <a
                href="https://wa.me/919923570901"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappLink}
              >
                Send Your Resume on WhatsApp 9923570901
              </a>
            </div>

            <p className={styles.popupNote}>
              We’ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};

export default JobsPage;
