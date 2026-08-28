import React, { useState } from "react";
import styles from "./apps.module.css";
import {
  FaUserGraduate,
  FaUsers,
  FaChalkboardTeacher,
  FaUserTie,
  FaUser,
  FaAndroid,
  FaApple,
  FaGlobe,
  FaMobileAlt,
  FaProjectDiagram,
  FaClipboardList,
  FaBed,
} from "react-icons/fa";

/* ===== DATA ===== */

const webApps = [
  {
    icon: <FaUserGraduate />,
    title: "Student Portal",
    desc:
      "Complete student management portal for academic tracking, assignments, and performance monitoring.",
    btn: "Access Portal",
    color: "green",
  },
  {
    icon: <FaUsers />,
    title: "Employee Portal",
    desc:
      "Comprehensive employee management system with HR functions, attendance, and payroll.",
    btn: "Access Portal",
    color: "blue",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Academy Teacher Portal",
    desc:
      "Specialized portal for academy teachers with lesson planning and student progress tracking.",
    btn: "Access Portal",
    color: "orange",
  },
  {
    icon: <FaUserGraduate />,
    title: "Academy Student Portal",
    desc:
      "Dedicated portal for academy students to access courses, tests, and performance reports.",
    btn: "Access Portal",
    color: "green",
  },
  {
    icon: <FaUser />,
    title: "Academy Parent Portal",
    desc:
      "Parent portal for monitoring student progress, attendance, and communication.",
    btn: "Access Portal",
    color: "blue",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "School Teacher Portal",
    desc:
      "School teacher portal for lesson management, attendance, and academic reports.",
    btn: "Access Portal",
    color: "orange",
  },
  {
    icon: <FaUserGraduate />,
    title: "School Student Portal",
    desc:
      "Student portal for school academics, homework, results, and announcements.",
    btn: "Access Portal",
    color: "green",
  },
  {
    icon: <FaUser />,
    title: "School Parent Portal",
    desc:
      "Parent access portal for tracking student academics and school communications.",
    btn: "Access Portal",
    color: "blue",
  },
  {
    icon: <FaUserTie />,
    title: "Studypoint User Portal",
    desc:
      "User portal for managing study points, progress, and personalized learning data.",
    btn: "Access Portal",
    color: "orange",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Project Member Portal",
    desc:
      "Portal for project members to track tasks, updates, and collaboration.",
    btn: "Access Portal",
    color: "green",
  },
  {
    icon: <FaClipboardList />,
    title: "Project Leader Portal",
    desc:
      "Leadership portal for managing projects, teams, deadlines, and reporting.",
    btn: "Access Portal",
    color: "blue",
  },
  {
    icon: <FaBed />,
    title: "Hostel User Portal",
    desc:
      "Hostel management portal for residents, room allocation, and services.",
    btn: "Access Portal",
    color: "orange",
  },
];

const androidApps = [
    {
        icon: <FaMobileAlt />,
        title: "School ERP App",
        desc:
            "Android based school ERP application for management and communication.",
        btn: "View App",
    },
    {
        icon: <FaMobileAlt />,
        title: "Student Learning App",
        desc:
            "Learning app for students with courses, tests and progress tracking.",
        btn: "View App",
    },
    {
        icon: <FaMobileAlt />,
        title: "Attendance App",
        desc:
            "Quick and easy attendance management Android application.",
        btn: "View App",
    },
];

const iosApps = [
    {
        icon: <FaApple />,
        title: "iOS School ERP",
        desc:
            "iOS based school ERP app for administrators and staff.",
        btn: "View App",
    },
    {
        icon: <FaApple />,
        title: "Teacher iOS App",
        desc:
            "Teacher focused iOS app for academic planning and reports.",
        btn: "View App",
    },
    {
        icon: <FaApple />,
        title: "Parent iOS App",
        desc:
            "Parent communication and student progress tracking app.",
        btn: "View App",
    },
];

/* ===== COMPONENT ===== */

export default function Apps() {
    const [activeTab, setActiveTab] = useState("web");

    const renderCards = (apps) =>
        apps.map((item, i) => (
            <div key={i} className={`${styles.card} ${styles[item.color]}`}>
                {/* top color strip */}
                <div className={styles.topLine}></div>

                {/* icon */}
                <div className={styles.iconCircle}>
                    {item.icon}
                </div>

                {/* title */}
                <h3 className={styles.cardTitle}>{item.title}</h3>

                {/* description */}
                <p className={styles.cardDesc}>{item.desc}</p>

                {/* button */}
                <button className={styles.cardBtn}>
                    {item.btn}
                </button>
            </div>
        ));

    return (
        <section className={styles.wrap}>
            {/* ===== TOP CARD ===== */}
            <div className={styles.topCard}>
                <div className={styles.topBorder}></div>

                <h1 className={styles.title}>
                    Mobile Application <span>Suite</span>
                </h1>

                <p className={styles.subtitle}>
                    Powerful tools for your business needs
                </p>

                <div className={styles.tabButtons}>
                    <button
                        onClick={() => setActiveTab("android")}
                        className={`${styles.tabBtn} ${styles.android} ${activeTab === "android" ? styles.active : ""
                            }`}
                    >
                        <FaAndroid /> Android Apps
                    </button>

                    <button
                        onClick={() => setActiveTab("ios")}
                        className={`${styles.tabBtn} ${styles.ios} ${activeTab === "ios" ? styles.active : ""
                            }`}
                    >
                        <FaApple /> iOS Apps
                    </button>

                    <button
                        onClick={() => setActiveTab("web")}
                        className={`${styles.tabBtn} ${styles.web} ${activeTab === "web" ? styles.active : ""
                            }`}
                    >
                        <FaGlobe /> Web Portals
                    </button>
                </div>
            </div>

            {/* ===== CONTENT ===== */}
            <div className={styles.content}>
                {activeTab === "web" && (
                    <>
                        <h2 className={styles.sectionTitle}>Web Portal Applications</h2>
                        <div className={styles.cards}>{renderCards(webApps)}</div>
                    </>
                )}

                {activeTab === "android" && (
                    <>
                        <h2 className={styles.sectionTitle}>Android Applications</h2>
                        <div className={styles.cards}>{renderCards(androidApps)}</div>
                    </>
                )}

                {activeTab === "ios" && (
                    <>
                        <h2 className={styles.sectionTitle}>iOS Applications</h2>
                        <div className={styles.cards}>{renderCards(iosApps)}</div>
                    </>
                )}
            </div>
        </section>
    );
}