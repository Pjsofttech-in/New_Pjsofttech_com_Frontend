import React,{useEffect ,Suspense}from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import styles from './HigherEducationSystem.module.css';
import SecondContact from "../SecondContact/SecondContact";
import image1 from "../images/higher-education.jpg";





const HigherEducationSystem = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const blogs = [
    {
      id: 1,
      title: <span style={{ fontSize: '19px'  }}>Curriculum Management</span>,
      image: "https://cdn-icons-png.flaticon.com/512/548/548198.png",
      // content:"Curriculum management in a higher education system involves the systematic design, development, implementation, evaluation, and improvement of academic programs and courses offered by academic institutions. This process ensures that the curriculum remains current, relevant, and aligned with educational standards, institutional goals, and industry needs.",
    },
    {
      id: 2,
      title: <span style={{ fontSize: '19px'  }}>Advising and Support Services</span>,
      image: "https://cdn-icons-png.flaticon.com/512/3534/3534113.png",
      // content:"Advising and support services are essential components of a higher education system, providing guidance, resources, and assistance to students throughout their academic journey. These services aim to support students in achieving their educational, personal, and career goals, as well as navigating the challenges they may encounter during their time in higher education.",
    },
    {
      id: 3,
      title: <span style={{ fontSize: '19px'  }}>Financial Aid and Billing</span>,
      image: "https://cdn-icons-png.freepik.com/256/4149/4149706.png?semt=ais_hybrid",
      // content:"Financial aid and billing services play a crucial role in supporting students' access to higher education by providing assistance with tuition costs and managing financial transactions within academic institutions. These services encompass various processes related to financial assistance, billing, payment, and financial planning. Administration of financial aid programs such as scholarships, grants, loans, and work-study opportunities ",
    },
    {
      id: 4,
      title: <span style={{ fontSize: '19px'  }}>Alumni Relations and Development</span>,
      image: "https://cdn-icons-png.flaticon.com/512/3751/3751871.png",
      // content:"Alumni relations and development are integral components of a higher education system, fostering lifelong connections between academic institutions and their graduates while supporting the institution's growth, reputation, and fundraising efforts.",
    },
    {
      id: 5,
      title: <span style={{ fontSize: '19px'  }}>Analytics and Reporting</span>,
      image: "https://cdn-icons-png.flaticon.com/512/1478/1478892.png",
      // content:"Analytics and reporting are essential components of a higher education system and data-driven decision-making to improve student outcomes and inform strategic planning initiatives. These capabilities enable academic institutions to track performance metrics and assess the impact of policies and programs on student success.",
    },
    {
      id: 6,
      title: <span style={{ fontSize: '19px'  }}> Compliance and Accreditation</span>,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUHX9VKwZgCOiJWshCjDnzaJnBN5ZYltCznA&s",
      // content:"Compliance and accreditation are critical aspects of a higher education system, ensuring that academic institutions adhere to established standards, regulations, and quality benchmarks. Compliance officers monitor regulatory changes, develop policies and procedures, and provide training to ensure institutional compliance.",
    },
    {
      id: 7,
      title: <span style={{ fontSize: '19px'  }}> 24*7 support</span>,
      image: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
      // content:"Providing round-the-clock support is crucial for addressing the diverse needs of students, faculty, and staff. A 24*7 support system ensures that technical issues, queries, and concerns are promptly resolved, enhancing the overall experience and minimizing disruptions to the learning process.",
    },
    {
      id: 8,
      title: <span style={{ fontSize: '19px'  }}>Reports and dashboard </span>,
      image: "https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1509.jpg?ga=GA1.1.1863634387.1705751972&semt=ais_hybrid",
      // content:"Effective decision-making relies on accurate and timely information. Implementing comprehensive reports and dashboards allows educational institutions to visualize data, track key performance indicators, and generate insights that drive strategic planning and operational improvements.",
    },
    {
      id: 9,
      title: <span style={{ fontSize: '19px'  }}>Next Generation Software</span>,
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
            // src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/05/14220908/Higher-Education-in-India.jpg"
            src={image1.src}
            alt="student_photo"
            // className={styles.simg}
        />
    </div>
    <div className="col div1">
        <h1 className={styles.h1} style={{width:'900px',height:'140px'}}>
            <div className="h1-content fw-bold fs-3">
                <span className={styles.span}>H</span>igher Education< br/>
                
                <span className={styles.span}>S</span>ystem <br />
            </div>
        </h1>
        <p className={styles.top_text}>
        Higher education systems encompass a broad array of institutions, policies, and practices that facilitate post-secondary learning and academic pursuits. These systems typically include universities, colleges, vocational schools, and other educational institutions offering advanced degrees, certifications, and specialized training programs. At the core of higher education systems are academic institutions that provide diverse educational opportunities across various fields of study, including arts, sciences, engineering, humanities, business, and technology.
        </p>
    </div>
</div>

        <div className="container-fluid p-5 text-center mt-3">
          <h2 className="fs-1 fw-bold">
          <span className={styles.span}> Monitor,</span> Track, and Analyze Microscopic Details
          </h2>
          <p className="mt-4">
          Examine procedures meticulously and identify intervention opportunities through interconnected modules. By meticulously linking each aspect, discover areas for enhancement and optimize operations for maximum efficiency.
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
              {/* <img  className={styles.simg} src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/09/09201044/German-Education-System.jpg" alt="imag"></img> */}

              <div className="container2 mt-5">
      {/* Phone Mockup */}
      <div className="phone-mockup">
        
        <img className="img22" data-aos="fade-right" src="https://classonapp.com/frontend-assets/Graphics%20for%20Pages/School%20ERP%20Software/Benefits%20of%20School%20Management%20Software.png"></img>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section " data-aos="fade-left">
        <h1 className="pp fw-bold">
          Benefits of <span className="highlight">Higher Education Software</span>
        </h1>
        <p className="pp fs-4 fw-bold" >With PJSOFTTECH, you get:</p>
        <ul style={{ fontSize: '0.500rem', lineHeight: '1' }} className="">
  <li><b>Centralized Data Management:</b> Consolidates all student, faculty, and course information into one accessible platform.</li>
  <li><b>Course and Program Management:</b> Easily manage course schedules, academic programs, and curriculum details for better organization.</li>
  <li><b>Student Lifecycle Management:</b> Tracks students from admission through graduation, ensuring seamless transitions at each stage.</li>
  <li><b>Efficient Enrollment Process:</b> Automates the entire enrollment process, reducing paperwork and improving accuracy.</li>
  <li><b>Timetable and Scheduling:</b> Automatically generates and manages class schedules for students and faculty.</li>
  <li><b>Grading and Assessment:</b> Simplifies grading, exam management, and result generation with automated tools.</li>
  <li><b>Fee Management:</b> Integrates fee collection, billing, and payment tracking into a streamlined, automated system.</li>
  <li><b>Student Portal:</b> Provides students with easy access to course materials, schedules, grades, and financial information.</li>
  <li><b>Enhanced Reporting and Analytics:</b> Generates detailed reports on academic performance, attendance, and financial status for better decision-making.</li>
  <li><b>Scalable and Customizable:</b> Adapts to the needs of different institutions and can scale as the university or college grows.</li>
</ul>

      </div>

    </div>
        
        <div className={styles.container}>
        <div className={styles.div3}>
        <div className="row">
          <div className="col sub">
          <p>The library administration platform serves as a centralized hub for managing diverse resources, including books, journals, multimedia materials, and digital assets. Through intuitive cataloging tools and metadata management capabilities, librarians can efficiently organize and classify resources, making them easily searchable and accessible to patrons.<br/> <br/>Streamlined Circulation Processes: Simplify circulation processes with automated check-in, check-out, and renewal functionalities. Patrons can conveniently browse the catalog, place holds, and manage their borrowing history through the user-friendly interface, enhancing overall user satisfaction and engagement.<br/> <br/> Enhanced Patron Services: Empower patrons with self-service options, such as online reservations, renewals, and resource recommendations. Integrated communication features facilitate real-time notifications, overdue reminders, and personalized updates, ensuring seamless interaction between library staff and patrons.</p>
          </div>
          <div className="col">
          <h1 className="pt-4 pb-2 text-center fw-bold"><span className={styles.span}> Library</span> Administration Platform</h1>
          <img className={styles.Img1} data-aos="flip-left" src="https://5.imimg.com/data5/SELLER/Default/2023/7/324516612/KS/ON/IF/192802247/library-administration-software-500x500.png" alt="img"></img>
          </div>
        </div>
      </div>
      </div>


      <div className={styles.div4}>
        <div className="row">
        <div className="col">
          <h1 className="pt-4 pb-2 text-center fw-bold"><span className={styles.span}> Financial</span> Management Platform</h1>
          <img className={styles.Img1} data-aos="flip-left" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1GpNCBuW9jRQ8zkWJlzL8w63LSgUP556IQuJ9I5B2Bg&s" alt="img"></img>
          </div>
          <div className="col sub">
          <p>Efficient Budgeting and Forecasting: The financial management platform provides tools for creating and managing budgets, enabling organizations to allocate resources effectively and plan for future expenses. <br/><br/> Advanced forecasting capabilities help anticipExpense Tracking and Management: Streamline expense tracking and management processes with automated workflows for expense approval, reimbursement, and reporting. Integrations with bank accounts and credit cards allow for seamless data synchronization, ensuring accurate and up-to-date financial records.<br/> <br/>Invoicing and Revenue Management: Simplify invoicing processes and improve cash flow management with customizable invoice templates, automated payment reminders, and online payment options. The platform supports multiple payment methods and currencies, facilitating transactions with clients and vendors worldwide.</p>
          </div>
        </div>
      </div>


      <div className={styles.div5}>
        <div className="row">
          <div className="col sub">
          <p>
            Comprehensive Inventory Management: The inventory control platform provides robust tools for managing all aspects of inventory, including stock levels, item details, and supplier information. Users can easily track inventory movements, monitor stock levels in real-time, and streamline replenishment processes to ensure optimal inventory levels and minimize stockouts.<br/> <br/> Procurement and Supplier Management: Streamline procurement processes with automated workflows for purchase requisitions, approvals, and order generation. The platform facilitates seamless communication with suppliers, allowing users to compare quotes, negotiate terms, and track delivery schedules efficiently.<br/> <br/>Order Fulfillment and Customer Service: Improve order fulfillment processes with advanced order management features, including order processing, picking, packing, and shipping. Integration with customer relationship management (CRM) systems enables seamless order tracking and delivery notifications, enhancing the overall customer experience.
            </p>
          </div>
          <div className="col">
          <h1 className="pt-4 pb-2 text-center fw-bold"><span className={styles.span}> Inventory</span> Control Platform</h1>
          <img className={styles.Img1} data-aos="flip-left" src="https://www.koops.in/image/imsTopImage.png" alt="img"></img>
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

export default HigherEducationSystem;
