import React, { useEffect, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import styles from './OnlineAdmissionSystem.module.css';
import image from '../images/admission managment system.png'
import SecondContact from "../SecondContact/SecondContact";
import image1 from "../images/admition.jpg";


const OnlineAdmissionSystem = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const blogs = [
    {
      id: 1,
      title: <span style={{ fontSize: '19px' }}>Application status</span>,
      image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/application-form-2476403-2075397.png",
      // content:"Upon submitting an application, students receive an immediate confirmation along with a unique application ID for tracking purposes. Automated email or SMS notifications are sent to the applicants at key stages to inform them of any changes in their application status. Alerts for important deadlines and required actions.",
    },
    {
      id: 2,
      title: <span style={{ fontSize: '19px' }}>Detailed  Report</span>,
      image: "https://cdn-icons-png.flaticon.com/512/3534/3534063.png",
      // content:"Detailed reports in an Online Admission System provide comprehensive insights into various aspects of the admissions process. These reports are crucial for administrators, admission officers, and institutional stakeholders to make informed decisions and improve the efficiency of the admissions process. Shows the total number of applications received over a specific period.",
    },
    {
      id: 3,

      title: <span style={{ fontSize: '19px' }}> Lesser Paperwork</span>,
      image: "https://cdn-icons-png.freepik.com/256/3417/3417309.png?semt=ais_hybrid",
      // content:"Reducing paperwork in an Online Admission System involves leveraging digital tools and processes to streamline and simplify the application and admissions process. This approach enhances efficiency, reduces errors, and improves the overall experience for both applicants and administrators. Applicants complete and submit their applications online through digital forms.",
    },
    {
      id: 4,

      title: <span style={{ fontSize: '19px' }}> Online Application Process</span>,
      image: "https://cdn-icons-png.flaticon.com/512/10159/10159810.png",
      // content:"The online application process for an Online Admission System is designed to provide a seamless, efficient, and user-friendly experience for applicants while ensuring that institutions can manage applications effectively. Applicants start by creating an account on the online admission portal.",
    },
    {
      id: 5,

      title: <span style={{ fontSize: '19px' }}> Security and Privacy</span>,
      image: "https://cdn-icons-png.flaticon.com/512/10162/10162904.png",
      // content:"Efficient campus operations are essential for ensuring the smooth functioning of educational institutions. To streamline processes and enhance productivity, institutions can leverage customizable solutions that seamlessly integrate institute-specific workflows, automating every facet of the process, Customizable solutions.",
    },
    {
      id: 6,
      title: <span style={{ fontSize: '19px' }}> No Long Queues</span>,
      image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/online-form-2766596-2297967.png",
      // content:"The 'No Long Queues' feature in an Online Admission System aims to eliminate the need for applicants to wait in physical lines or face lengthy processing times. By leveraging digital technologies, this system streamlines the entire admission process, making it more efficient and user-friendly.",
    },
    {
      id: 7,
      title: <span style={{ fontSize: '19px' }}> 24*7 support</span>,
      image: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
      // content:"Providing round-the-clock support is crucial for addressing the diverse needs of students, faculty, and staff. A 24*7 support system ensures that technical issues, queries, and concerns are promptly resolved, enhancing the overall experience and minimizing disruptions to the learning process.",
    },
    {
      id: 8,
      title: <span style={{ fontSize: '19px' }}>Reports and dashboard </span>,
      image: "https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1509.jpg?ga=GA1.1.1863634387.1705751972&semt=ais_hybrid",
      // content:"Effective decision-making relies on accurate and timely information. Implementing comprehensive reports and dashboards allows educational institutions to visualize data, track key performance indicators, and generate insights that drive strategic planning and operational improvements.",
    },
    {
      id: 9,
      title: <span style={{ fontSize: '19px' }}>Next Generation Software</span>,
      image: "https://cdn-icons-png.flaticon.com/512/3950/3950815.png",
      // content:"Adopting next-generation software solutions is essential for staying ahead in the rapidly evolving educational landscape. These advanced systems offer innovative features, enhanced user experience, and greater flexibility, enabling institutions.",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row" style={{ position: "relative" }}>
          <div className="col">
            <img
              className={styles.Img2}
              data-aos="flip-left"
              // src="https://5.imimg.com/data5/SELLER/Default/2021/5/DD/US/OZ/10646612/online-admission-system.jpg"
              src={image1.src}
              alt="student_photo"
            // className={styles.simg}
            />
          </div>
          <div className="col div1 pt-5">
            <h1 className={styles.h1} style={{ width: '900px', height: '200px' }}>
              <div className="h1-content fw-bold fs-3">
                <span className={styles.span}>O</span>nline dmission &< br />
                <span className={styles.span}>E</span>nrollment<br />
                <span className={styles.span}>M</span>anagement<br />
              </div>
            </h1>
            <p className={styles.top_text}>
              Simplified Admission Process: Manages the entire admission lifecycle, from inquiries to enrollment, on a single platform. Online Application Handling: Allows students to apply online, reducing paperwork and streamlining data collection.Real-Time Inquiry Tracking: Tracks and manages inquiries efficiently, ensuring no leads are missed.
              Document Management: Digitally stores and organizes student documents for easy retrieval.
              Automated Notifications: Sends automated SMS or email updates to applicants about their admission status.
              Fee Integration: Integrates with fee collection systems to ensure smooth payment processing during admissions.
              Customizable Forms: Allows institutions to design application forms tailored to their requirements.

            </p>
          </div>
        </div>

        <div className="container-fluid p-5 text-center mt-3">
          <h2 className="fs-1 fw-bold ">
            <span className={styles.span}>Efficient</span>  Admission Management Simplified
          </h2>
          <p className="mt-4">
            Transform your institution's admission procedures with PJSoftTech's cutting-edge online admission software. Enjoy round-the-clock accessibility and a streamlined application process, enticing students to embrace online admissions. Save valuable time and deliver a seamless experience for prospective students.
          </p>
        </div>
        <div>
          <h2 className="text-center mt-5 key-features fw-bold fs-1"><span className={styles.span}> Key</span> Features</h2>
        </div>

        <div className={styles.div2}>
          <Container className="mt-5">
            <Grid container spacing={3}>
              {blogs.map((blog) => (
                <Grid item key={blog.id} lg={4} md={6} className="mb-4">
                  <Card className="d-flex justify-content-center align-items-center bg-light">
                    <CardMedia
                      component="img"
                      data-aos="flip-left"
                      image={blog.image.src || blog.image}
                      style={{
                        width: "75px",
                        height: "75px",
                        objectFit: "cover",
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        className="d-flex justify-content-start fw-bold align-items-center text-center"
                      >
                        {blog.title}
                      </Typography>
                      <Typography variant="body2" component="p" className="text-center">
                        {blog.content}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>

        <div className={styles.container2}>
          {/* Left: Phone Mockup */}
          <div className={styles.phoneMockup} data-aos="fade-right">
            <img
              className={styles.img22}
              src="https://classonapp.com/frontend-assets/Graphics%20for%20Pages/School%20ERP%20Software/Benefits%20of%20School%20Management%20Software.png"
              alt="Online Admission Software"
            />
          </div>

          {/* Right: Benefits Section */}
          <motion.div
            className={styles.benefitsSection}
            data-aos="fade-left"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className={styles.heading}>
              Benefits of{" "}
              <span className={styles.highlight}>Online Admission Software</span>
            </h1>
            <p className={styles.subheading}>With PJSOFTTECH, you get:</p>

            <ul className={styles.benefitList}>
              <li>
                <b>Efficient Exam Conducting:</b> Administer exams easily online,
                eliminating the need for physical setups.
              </li>
              <li>
                <b>Automated Grading:</b> Automatically grades objective-type
                questions, saving time and reducing human error.
              </li>
              <li>
                <b>Customizable Question Banks:</b> Create and manage question
                banks with varied question types (MCQs, essays, etc.) to suit exam
                needs.
              </li>
              <li>
                <b>Instant Results:</b> Students receive immediate feedback on
                objective questions, helping them assess their performance quickly.
              </li>
              <li>
                <b>Secure Exam Environment:</b> Prevent cheating with secure login
                systems, random question orders, and time limits.
              </li>
              <li>
                <b>Real-Time Monitoring:</b> Track student activity in real time,
                ensuring the integrity of the exam process.
              </li>
              <li>
                <b>Flexible Scheduling:</b> Schedule exams at convenient times,
                providing students with a flexible and accessible platform.
              </li>
              <li>
                <b>Comprehensive Analytics:</b> Access detailed reports on student
                performance, question difficulty, and exam analytics.
              </li>
              <li>
                <b>Cost-Effective:</b> Reduces costs associated with paper exams,
                printing, and manual grading.
              </li>
              <li>
                <b>Scalable & Accessible:</b> Accommodates large numbers of students
                and can be accessed from anywhere, anytime, on multiple devices.
              </li>
            </ul>
          </motion.div>
        </div>

        <div className={styles.container}>
          <div className={styles.div3}>
            <div className="row">
              <div className="col sub">
                The Online Admission System revolutionizes every facet of the institution's admission process through a robust software infrastructure. It efficiently oversees a comprehensive student database, eligibility criteria, merit lists, fee structures, and institutional announcements. Furthermore, it ensures secure access control, granting authorities tailored access based on their roles and responsibilities within the organization. <br /> <br /> With seamless automation, the software streamlines institutional operations, eliminating the need for manual intervention. By transitioning all activities online, the admission management system significantly reduces paperwork. It effortlessly generates merit lists and allocates colleges to students based on their academic achievements and preferences. <br /> <br /> Conducting the entire admission process virtually, the system empowers students to monitor their application status through a dedicated online portal. Additionally, it fosters integration with various systems and devices, ensuring a seamless workflow and reducing human intervention to a minimum.
              </div>
              <div className="col">
                <h1 className="pt-4 pb-2 text-center fw-bold"><span className={styles.span}> Automating</span> the Admission Workflow</h1>
                <img className={styles.Img1} data-aos="flip-left" src="https://www.paatham.in/assets/images/img/adm.png" alt="img"></img>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.div4}>
          <div className="row">
            <div className="col">
              <h1 className=" pb-2 text-center fw-bold"><span className={styles.span}> Online</span> Application Filling</h1>
              <img className={styles.Img1} data-aos="flip-left" src="https://www.edusys.co/images/online-admission-software.png" alt="img"></img>
            </div>
            <div className="col sub">
              Students are now empowered to complete online application forms and apply for admission to the institute seamlessly. The admission management system efficiently collects and securely stores all data provided by prospective students, encompassing personal information, academic qualifications, and course preferences. <br /> <br /> Upon confirmation of eligibility and subsequent admission confirmation, students are required to submit documentary evidence and supporting documents to validate the information provided during the application process. <br /> <br /> The online admission software factors in student preferences alongside entrance exam results or eligibility scores for respective courses, culminating in the generation of merit lists. Students can conveniently access their personalized login credentials on the online portal to review the merit list and monitor their admission status effortlessly.
            </div>
          </div>
        </div>


        <div className={styles.div5}>
          <div className="row">
            <div className="col sub">
              The online admission software continually generates extensive data for admissions, encompassing applications, fee transactions, student inquiries, and more. This data is securely stored on a centralized cloud platform, ensuring safe processing and accessibility for future utilization. Utilizing the admission management system, the software dynamically produces tailored reports based on user preferences. <br /> <br /> These reports can be customized to cover specific timeframes, including daily, monthly, or periodic intervals. Additionally, the software generates reports in various formats, including Doc, PDF, and Word, catering to diverse institutional needs such as accreditation requirements. <br /> <br /> Furthermore, the generated reports prioritize readability and accuracy, eliminating any potential for data redundancy or gaps. This streamlined approach minimizes the need for file merging and simplifies data processing, enhancing overall operational efficiency.
            </div>
            <div className="col">
              <h1 className="pt-4 pb-2 text-center fw-bold"><span className={styles.span}> Report</span> Generation</h1>
              <img className={styles.Img1} data-aos="flip-left" src="https://educloud.app/lms/src/admission-workflow/Investment%20data-pana.png" alt="img"></img>
            </div>
          </div>
        </div>


        <div className={styles.div6}>
          <div className="row div4">
            <div className="col">
              <h1 className="pt-3 pb-2 text-center fw-bold"><span className={styles.span}> Data</span> Analysis</h1>
              <img className={styles.Img1} data-aos="flip-left" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkFVI6-ooMeBQ4DIiUmXSsE6wQ-K1DphklSg&s" alt="img"></img>
            </div>
            <div className="col sub">
              <p>The online admission software aggregates data from diverse sources and employs AI technology to conduct comprehensive analysis. Through continuous learning and refinement, the system enhances its functionality over time. This data is instrumental for institute authorities in making informed, data-driven decisions regarding financial allocations, investments, and pedagogical strategies.<br /> <br />Moreover, the software facilitates faculty members in gaining insights into student behavior throughout the admissions process. It provides valuable insights into student interests, engagement levels, and overall experience, enabling educators to optimize their approach to teaching and learning.<br /><br />Utilizing Business Intelligence (BI) technology, the online admission system presents data analysis reports in a visually appealing format. Through graphical representations such as tables, graphs, and pie charts, the system empowers decision-makers with actionable insights, thereby augmenting the decision-making process within educational institutions.</p>
            </div>
          </div>
        </div>

        <div className={styles.hidden}>
          <Suspense>
            <SecondContact />
          </Suspense>
        </div>
      </div>
    </>

  );
};

export default OnlineAdmissionSystem;
