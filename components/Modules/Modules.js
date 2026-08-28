import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Module.module.css";
import { FaArrowRight } from "react-icons/fa"; 

// ✅ Add category property to each module
const modules = [
    { title: "School Management System", icon: "school", link: "/school-new-management-system", category: "Modules" },
    { title: "College Management System", icon: "college", link: "/college-management-software", category: "Modules" },
    { title: "Academy Management System", icon: "academy", link: "/academy-management-software", category: "Modules" },
    { title: "University Management System", icon: "university", link: "/institute-management-software", category: "Modules" },
    { title: "Company Management System", icon: "company", link: "/company-management-system", category: "Modules" },
    { title: "Lead Management System", icon: "lead", link: "/enquiry-management-software", category: "Modules" },
    { title: "Inventory Management System", icon: "inventory", link: "/income-expenses-management-system", category: "Modules" },
    { title: "Employee Management System", icon: "employee", link: "/employee-management-system", category: "Modules" },
    { title: "StudyPoint Management System", icon: "studypiont", link: "/study-point-management-system", category: "Modules" },
    { title: "Student Management System", icon: "student", link: "/student-information-system", category: "Modules" },
    { title: "HR Management System", icon: "hr", link: "/hr-management-system", category: "Modules" },
    { title: "Shipment Management System", icon: "shipment", link: "/Shippment-management-software", category: "Modules" },
    { title: "Payroll Management System", icon: "payroll", link: "/payroll-management-system", category: "Modules" },
    { title: "Project Management System", icon: "project", link: "/project-management-system", category: "Modules" },
    { title: "Hostel Management System", icon: "hostel", link: "/hostel-managment-system", category: "Modules" },
    { title: "Fees Management System", icon: "fees", link: "/fees-management-system", category: "Modules" },
    { title: "Online Examination Management System", icon: "examination", link: "/online-examination-system", category: "Modules" },
    { title: "Attendance Management System", icon: "attendance", link: "/attendance-management-system", category: "Modules" },
    { title: "Admission Management System", icon: "admission", link: "/admission-management-system", category: "Modules" },
    { title: "Sales Management System", icon: "sales", link: "/sales-management-system", category: "Modules" },
    { title: "Classroom Management System", icon: "classroom", link: "/classroom-management-system", category: "Modules" },
    { title: "Test Series Management System", icon: "testseries", link: "/test-series-management-system", category: "Modules" },
    { title: "Ecommerce Management System", icon: "ecommerce", link: "/ecommerce-management-system", category: "Modules" },
    { title: "Bookshop Management System", icon: "bookshop", link: "/book-shop-management-system", category: "Modules" },

    // Portals and Apps 👇
    { title: "Student Portal", icon: "school", link: "https://pjsofttech.in/admissionuser/", category: "Web Portal" },
    { title: "Employee Portal", icon: "employee", link: "https://pjsofttech.in/layringemployeeuser/", category: "Web Portal" },
    { title: "Academy Teacher Portal", icon: "academy", link: "https://pjsofttech.in/admission-teacher/", category: "Web Portal" },
    { title: "Academy Student Portal", icon: "student", link: "https://pjsofttech.in/admissionuser/", category: "Web Portal" },
    { title: "Academy Parent Portal", icon: "school", link: "", category: "Web Portal" },
    { title: "School Teacher Portal", icon: "school", link: "https://pjsofttech.in/studentteacher/", category: "Web Portal" },
    { title: "School Student Portal", icon: "school", link: "https://pjsofttech.in/layringstudentuser/", category: "Web Portal" },
    { title: "School Parent Portal", icon: "school", link: "", category: "Web Portal" },
    { title: "Studypoint User Portal", icon: "studypoint", link: "https://pjsofttech.in/studypointuser/", category: "Web Portal" },
    { title: "Project Member Portal", icon: "project", link: "", category: "Web Portal" },
    { title: "Project Leader Portal", icon: "project", link: "https://pjsofttech.in/layringprojectmember/", category: "Web Portal" },
    { title: "Hostel User Portal", icon: "hostel", link: "", category: "Web Portal" },


    // Mobile apps
    { title: "SuperAdmin App", icon: "admin", link: "", category: "Android App" },
    { title: "Attendance App", icon: "attendance", link: "", category: "Android App" },
    { title: "Employee App", icon: "employee", link: "", category: "Android App" },
    { title: "Admission App", icon: "admission", link: "", category: "Android App" },
    { title: "Academy Teacher App", icon: "teacher", link: "", category: "Android App" },
    { title: "Academy Student App", icon: "Student", link: "", category: "Android App" },
    { title: "Academy Parent App", icon: "parent", link: "", category: "Android App" },
    { title: "School Teacher App", icon: "school", link: "", category: "Android App" },
    { title: "School Student App", icon: "student", link: "", category: "Android App" },
    { title: "School Parent App", icon: "school", link: "", category: "Android App" },
    { title: "Project Admin App", icon: "admin", link: "", category: "Android App" },
    { title: "Project Leader App", icon: "project", link: "", category: "Android App" },
    { title: "Project Member App", icon: "admin", link: "", category: "Android App" },
    { title: "Study Point Admin App", icon: "admin", link: "", category: "Android App" },
    { title: "Study Point User App", icon: "user", link: "", category: "Android App" },
    { title: "Hostel Admin App", icon: "hostel", link: "", category: "Android App" },
    { title: "Hostel User App", icon: "hostel", link: "", category: "Android App" },
    { title: "Sales Super Manager App", icon: "sales", link: "", category: "Android App" },
    { title: "Sales Manager App", icon: "manager", link: "", category: "Android App" },
    { title: "Sales Excutive App", icon: "sales", link: "", category: "Android App" },
    { title: "Visitor Management App", icon: "admin", link: "", category: "Android Ap/p" },


//IOS APP
    { title: "SuperAdmin App", icon: "admin", link: "#", category: "iOS App" },
    { title: "Attendance App", icon: "attendance", link: "", category: "iOS App" },
    { title: "Employee App", icon: "employee", link: "", category: "iOS App" },
    { title: "Admission App", icon: "admission", link: "", category: "iOS App" },
    { title: "Academy Teacher App", icon: "academy", link: "#", category: "iOS App" },
    { title: "Academy Student App", icon: "Student", link: "", category: "iOS App" },
    { title: "Academy Parent App", icon: "parent", link: "", category: "iOS App" },
    { title: "School Teacher App", icon: "school", link: "", category: "iOS App" },
    { title: "School Student App", icon: "student", link: "", category: "iOS App" },
    { title: "School Parent App", icon: "school", link: "", category: "iOS App" },
    { title: "Project Admin App", icon: "admin", link: "", category: "iOS App" },
    { title: "Project Leader App", icon: "project", link: "", category: "iOS App" },
    { title: "Project Member App", icon: "admin", link: "", category: "iOS App" },
    { title: "Study Point Admin App", icon: "admin", link: "", category: "iOS App" },
    { title: "Study Point User App", icon: "user", link: "", category: "iOS App" },
    { title: "Hostel Admin App", icon: "hostel", link: "", category: "iOS App" },
    { title: "Hostel User App", icon: "hostel", link: "", category: "iOS App" },
    { title: "Sales Super Manager App", icon: "sales", link: "", category: "iOS App" },
    { title: "Sales Manager App", icon: "manager", link: "", category: "iOS App" },
    { title: "Sales Excutive App", icon: "sales", link: "", category: "iOS App" },
    { title: "Visitor Management App", icon: "admin", link: "", category: "iOS App" },

];

const Icon = ({ name }) => {
    const common = {
        width: 28,
        height: 28,
        fill: "none",
        stroke: "#1e293b",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
    };

    switch (name) {
        case "lead": // Lead Management
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <circle cx="12" cy="7" r="4" />
                    <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2" />
                </svg>
            );

        case "academy": // Academy
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <path d="M3 7l9-4 9 4-9 4-9-4z" />
                    <path d="M21 10v10a1 1 0 0 1-1 1h-3v-7H7v7H4a1 1 0 0 1-1-1V10" />
                </svg>
            );

        case "inventory": // Inventory
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M3 10h18M9 16h6" />
                </svg>
            );

        case "fees": // Fees
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M12 8v8M9 11h6" />
                </svg>
            );

        case "employee": // Employee
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <circle cx="12" cy="7" r="4" />
                    <path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
                </svg>
            );

        case "school": // School
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <path d="M3 11l9-7 9 7v9H3z" />
                    <path d="M9 22V12h6v10" />
                </svg>
            );

        case "student": // Student
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <path d="M12 2L1 7l11 5 9-4.09V17" />
                    <path d="M8 22V13l4-2 4 2v9" />
                </svg>
            );

        case "attendance": // Attendance
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                </svg>
            );

        case "shipment": // Shipment
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <rect x="1" y="3" width="22" height="13" rx="2" />
                    <path d="M1 16h22M5 20h2M17 20h2" />
                </svg>
            );

        case "payroll": // Payroll
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M8 9h8M8 12h5" />
                </svg>
            );

        case "studypoint": // Study Point
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4z" />
                    <path d="M4 8h16M4 12h10" />
                </svg>
            );

        case "hr": // HR
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <circle cx="8" cy="7" r="4" />
                    <path d="M2 21v-2a6 6 0 0 1 6-6" />
                    <circle cx="18" cy="7" r="4" />
                    <path d="M22 21v-2a6 6 0 0 0-6-6" />
                </svg>
            );

        case "hostel": // Hostel
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <path d="M3 7v14M21 14V7M3 14h18v7H3z" />
                </svg>
            );

        case "project": // Project
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M8 8h8v4H8zM8 14h4v4H8z" />
                </svg>
            );

        case "admission": // Admission
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <rect x="4" y="5" width="16" height="14" rx="2" />
                    <path d="M4 9h16M8 13h8" />
                </svg>
            );

        case "examination": // Online Exam
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M8 10h8M8 14h5" />
                </svg>
            );

        case "sales": // Sales
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <polyline points="3 17 9 11 13 15 21 7" />
                    <polyline points="21 7 15 7 15 13" />
                </svg>
            );

        case "classroom": // Classroom
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                </svg>
            );

        case "testseries": // Test Series
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <rect x="4" y="3" width="16" height="18" rx="2" />
                    <path d="M8 7h8M8 11h8M8 15h5" />
                </svg>
            );

        case "ecommerce": // E-commerce
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
            );

        case "bookshop": // Bookshop
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <path d="M3 4h16v18H3z" />
                    <path d="M7 4v18M11 4v18M15 4v18" />
                </svg>
            );

        default:
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                </svg>
            );
    }
};


const Modules = () => {
    const [filter, setFilter] = useState("Modules");
    const filteredModules = modules.filter((m) => filter === "All" || m.category === filter);
    const [copiedMap, setCopiedMap] = useState({});

    const handleCopy = async (cred) => {
        try {
            const lines = cred.fields.map(([k, v]) => `${k}: ${v}`);
            const text = `${cred.title}\n${lines.join("\n")}`;
            await navigator.clipboard.writeText(text);
            setCopiedMap((s) => ({ ...s, [cred.title]: true }));
            setTimeout(() => setCopiedMap((s) => ({ ...s, [cred.title]: false })), 1800);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className={styles.section}>
            {/* 🌟 Heading Section */}
            <div className={styles.moduleHeadingSection}>
                <motion.h2
                    className={styles.moduleHeading}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    PJSOFTTECH Valuable Modules
                </motion.h2>

                <div className={styles.headingUnderline}></div>

                <motion.p
                    className={styles.moduleDescription}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    We are proud to present our collection of software modules that empower institutions and
                    organizations to achieve seamless digital transformation. At PJSOFTTECH, we focus on building
                    reliable, efficient, and intelligent management systems — from ERP and CRM to Payroll and
                    Mobile Solutions — tailored for schools, colleges, universities, and businesses. Explore our
                    innovative modules designed to enhance automation, transparency, and productivity.
                </motion.p>
            </div>

            <div className="container">
                {/* 🌈 Filter Buttons */}
                <div className={styles.filterBtns}>
                    {["Modules", "iOS App", "Android App", "Web Portal" ].map((cat) => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${filter === cat ? styles.active : ""}`}
                            onClick={() => setFilter(cat)}
                        >
                            <span>{cat}</span>
                        </button>
                    ))}
                </div>

                {/* 🔍 Compact Horizontal Module Cards */}
                <motion.div
                    className={styles.moduleGrid}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.06 }}
                >
                    {filteredModules.map((m) => (
                        <motion.div
                            key={m.title}
                            className={styles.moduleCardGrid}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 200, damping: 18 }}
                        >
                            <div className={styles.leftIcon}><Icon name={m.icon} /></div>
                            <div className={styles.middleTitle}>{m.title}</div>
                            <div
                                className={styles.rightIcon}
                                onClick={() => window.open(m.link || "#", "_blank")}
                            >
                                <FaArrowRight />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Modules;
