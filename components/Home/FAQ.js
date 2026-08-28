import React, { useState } from "react";
import styles from "./FAQ.module.css"; // Importing the CSS module

const faqData = [
  {
    question: "How can PJSoftTech's CRM help manage student information effectively?",
    answer: (
      <p className="">
        PJSoftTech's CRM for student management integrates detailed student profiles, academic records, and communication logs. Utilizing interactive dashboards and graphs, administrators can track student performance, attendance trends, and engagement metrics in real-time.
      </p>
    ),
  },
  {
    question: "How does PJSoftTech's CRM enhance employee management processes?",
    answer: (
      <p>
        Our CRM streamlines HR operations by centralizing employee data, performance evaluations, and payroll information. Graphical representations provide insights into workforce productivity, training needs, and employee satisfaction levels across departments.
      </p>
    ),
  },
  {
    question: "How does PJSoftTech's CRM handle attendance management efficiently?",
    answer: (
      <p>
        PJSoftTech's CRM automates attendance tracking, allowing supervisors to monitor attendance patterns and trends through intuitive dashboards. Graphical representations highlight absenteeism rates, punctuality, and compliance with attendance policies.
      </p>
    ),
  },
  {
    question: "How does PJSoftTech's CRM manage inquiries and customer interactions?",
    answer: (
      <p>
        Our CRM captures and categorizes inquiries, ensuring timely responses and personalized customer interactions. Dashboards display inquiry volumes, response times, and customer satisfaction metrics, enabling proactive customer service management.
      </p>
    ),
  },
  {
    question: "How does PJSoftTech's CRM facilitate leave management for organizations?",
    answer: (
      <p>
        PJSoftTech's CRM simplifies leave requests, approvals, and tracking processes. Interactive dashboards provide visibility into leave balances, usage trends, and team availability, ensuring efficient workforce planning and management.
      </p>
    ),
  },
  {
    question: "What graphical tools does PJSoftTech's CRM offer to visualize data?",
    answer: (
      <p>
        PJSoftTech's CRM includes customizable dashboards with graphs, charts, and visual analytics tools. Users can generate reports on student performance, employee productivity, attendance trends, inquiry volumes, leave utilization, and more, enabling data-driven decision-making and strategic planning.
      </p>
    ),
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const firstColumnData = faqData.slice(0, 3);
  const secondColumnData = faqData.slice(3);

  return (
    <>
      <div className={styles.centeredImageContainer}>
        <img
          src="https://img.freepik.com/free-vector/tiny-people-sitting-standing-near-giant-faq_74855-7879.jpg"
          alt="image"
          className={styles.faq_img}
        />
      </div>
      <div className={styles.faqContainer}>
        <div className={styles.column}>
          {firstColumnData.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={styles.question}
                onClick={() => handleQuestionClick(index)}
              >
                {item.question}
                <span className={styles.toggleIcon}>
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className={styles.answer}>{item.answer}</div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.column}>
          {secondColumnData.map((item, index) => (
            <div key={index + 3} className={styles.faqItem}>
              <div
                className={styles.question}
                onClick={() => handleQuestionClick(index + 3)}
              >
                {item.question}
                <span className={styles.toggleIcon}>
                  {activeIndex === index + 3 ? "−" : "+"}
                </span>
              </div>
              {activeIndex === index + 3 && (
                <div className={styles.answer}>{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQ;
