import React from "react";
import Link from "next/link";
import styles from './Cards.module.css';
import Button from '@mui/material/Button';

const Cards = () => {
  const cardData = [
     {
      title: "School Management Software",
      description:
        "The SMS module centralizes student data, including personal details, academic records, attendance, and behavior.",
      imageUrl:
        "https://www.pjsofttech.com/static/media/academy.69b57ad082c0345765ad.gif",
      link: "/school-management-software",
    },
    {
      title: "College Management Software",
      description:
        "College Management Software simplifies the admissions process by automating tasks such as inquiry management and application processing.",
      imageUrl:
        "https://eitpl.in/assets/img/service/lrn.gif",
      link: "/college-management-software",
    },
    {
      title: "Academy Management Software",
      description:
        "The Academy Management Software is a comprehensive digital platform designed to streamline and automate all academic and administrative operations.",
      imageUrl:
        "https://mintbook.com/assetsNew/img/school.gif",
      link: "/academy-management-software",
    },
    {
      title: "University Management Software",
      description:
        "Our University Management Software is a comprehensive, all-in-one digital solution designed to simplify and automate every aspect of university operations.",
      imageUrl:
        "https://www.pjsofttech.com/static/media/institute%20new.cabe38874daf56786175.gif",
      link: "/institute-management-software",
    },
     {
      title: "Company Management Software",
      description:
        "Our Company Management Software is an all-in-one digital solution designed to simplify and automate every aspect of business administration.",
      imageUrl:
        "https://nexozia.com/assets/images/services-details/event-website-development.gif",
      link: "/company-management-system",
    },
     
    {
      title: "Lead Management System",
      description:
        "Enquiry Management System allows instructors to create and organize course content, including lectures, presentations, videos.",
      imageUrl:
        "https://qph.cf2.quoracdn.net/main-qimg-5c9b4f28315dc8f98fd627e9ed5291a2",
      link: "/enquiry-management-software",
    },
    {
      title: "Income and Expenses Management System",
      description:
        "University Management Software (UMS) is a comprehensive solution designed to address the complex administrative and academic.",
      imageUrl:
        "https://jit.ac.in/assets/uploads/2022/05/ims-image-10.gif",
      link: "/income-expenses-management-system",
    },   
    {
      title: "Employee Management System",
      description:
        "Employee Management System centralizes faculty information, including personal details, qualifications, employment history.",
      imageUrl:
        "https://i.pinimg.com/originals/e7/78/2b/e7782b954b20ab768c74fc1dfd6f9377.gif",
      link: "/employee-management-system",
    },
    {
      title: "StudyPoint Management System",
      description:
        "Empower learning, track progress, and manage resources with our advanced Study Point Management System.",
      imageUrl:
        "https://topwebpro.co.uk/wp-content/uploads/2023/02/inventory-management.gif",
      link: "/study-point-management-system",
    },
    {
      title: "Student Management System",
      description:
        "The Student Management System is a software solution designed to manage student data efficiently.",
      imageUrl:
        "https://cdn.dribbble.com/users/1138853/screenshots/4834993/06_08_gif.gif",
      link: "/student-information-system",
    },
    {
      title: "HR Management System",
      description:
        "HR Management Software is a comprehensive digital solution designed to streamline and automate all human resource operations within an organization.",
      imageUrl:
        "https://iiakerala.com/wp-content/uploads/2022/05/staffing-1.gif",
      link: "/hr-management-system",      
    },
    {
      title: "Shipment Management System",
      description:
        "Shipment Management Software is a comprehensive digital solution designed to streamline and automate the entire shipping and logistics process for businesses.",
      imageUrl:
        "https://www.pjsofttech.com/static/media/shipment-gif.455439f62651d2dc73a5.gif",
      link: "/Shippment-management-software",
    },
    {
      title: "Payroll Management System",
      description:
        "Payroll Management Software is a comprehensive solution designed to simplify and automate the process of managing employee salaries, wages, bonuses, deductions, and compliance.",
      imageUrl:
        "https://www.pjsofttech.com/static/media/payrollsystem.2bc64c67522d6f21b0cc.gif",
      link: "/payroll-management-system",
    },
    {
      title: "Project Management System",
      description:
        "Our Project Management Software is a powerful, all-in-one platform designed to help teams plan, organize, execute, and monitor projects with precision and ease.",
      imageUrl:
        "https://i.pinimg.com/originals/0f/65/c2/0f65c227b3198b5e00e6f19a2b4712de.gif",
      link: "/project-management-system",
    },
     
    {
      title: "Hostel Management System",
      description:
        "Hostel Management Software is an all-in-one digital solution designed to automate and streamline the day-to-day operations of hostels, dormitories, or student accommodations.",
      imageUrl:
        "https://s3.us-west-2.amazonaws.com/www.bookingninjas.com/img/illustration-2.svg",
      link: "/hostel-managment-system",
    },
     {
      title: "Online Examination System",
      description:
        "An Online Examination System is a robust platform designed to conduct assessments, quizzes, and examinations remotely.",
      imageUrl:
        "https://mintbook.com/assetsNew/img/ams.gif",
      link: "/online-examination-system",
    },
     {
      title: "Attendance Management System",
      description:
        "An Attendance Management System automates and streamlines attendance tracking in educational institutions and organizations.",
      imageUrl:
        "https://www.qhrm.io/wp-content/uploads/2023/03/qhrm-hr-software-attendance-time.gif",
      link: "/attendance-management-system",
    },
    {
      title: "Admission Management System",
      description:
        "An Online Admission System revolutionizes the traditional admission process by offering a seamless and efficient way..",
      imageUrl:
        "https://qualcampus.com/wp-content/uploads/2023/03/QualCampus-Smooth-Online-Admission-Process.gif",
      link: "/online-admission-system",
    },
     {
      title: "Sales Management System",
      description:
        "Sales Management Software is an all-in-one digital solution designed to streamline your sales operations, improve team productivity, and boost overall business revenue.",
      imageUrl:
        "https://www.pjsofttech.com/static/media/Esalesgif.20fedc49b10936e5a8dd.gif",
      link: "/sales-management-system",
    },
     {
      title: "Classroom Management System",
      description:
        "Classroom management software (CMS) is a specialised tool (or set of tools) designed to assist teachers, instructors and educational institutions.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8QkjPLJUUiqOOzJIR2yREddGdcPYP6WzMcg&s",
      link: "/classroom-management-system",
    },
     {
      title: "TestSeries Management System",
      description:
        "Our Test Series Management Software is a comprehensive platform designed to help educational institutions, coaching centers, and training academies efficiently create, manage, and evaluate test series online or offline.",
      imageUrl:
        "https://www.pjsofttech.com/static/media/hrsystem.796608e361909e848f16.gif",
      link: "/test-series-management-system",
    },

      {
      title: "Ecommerce Management System",
      description:
        "Our Ecommerce Management Software is a comprehensive solution designed to simplify and automate every aspect of your online business.",
      imageUrl:
        "https://www.pjsofttech.com/static/media/ecommerce.a75019ea601c2ef17c92.gif",
      link: "/ecommerce-management-system",
    },

     {
      title: "Bookshop Management System",
      description:
        "A Bookshop Management Software is a specialised software system designed to support the business operations of a bookstore (physical, online, or hybrid).",
      imageUrl:
        "https://cdnl.iconscout.com/lottie/premium/thumb/online-library-animation-gif-download-3653892.gif",
      link: "/book-shop-management-system",
    },

    {
      title: "Fees Management System",
      description:
        "A Fees Management System automates fee management in educational institutions, ensuring efficient and accurate fee collection and reporting.",
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/hd/26ecdb76340011.5c66974fa9a2b.gif",
      link: "/fees-management-system",
    },

  ];

  return (
    <div className={styles.cardsRow}>
      {cardData.map((card) => ( 
        <div key={card.title} className={styles.card}>
          <img src={card.imageUrl} alt={card.title} className={styles.cardImage} loading="lazy" />
          <div className={styles.cardContent}>
            <h2>{card.title}</h2>
            <p className={styles.description}>{card.description}</p>
            <Button component={Link} href={card.link} className={styles.readMore}>
              Read More
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;


