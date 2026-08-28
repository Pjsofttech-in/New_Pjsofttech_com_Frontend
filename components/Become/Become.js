import React, { useState } from "react";
import "./Become.css";
import Slider from "react-slick";
import imgImplementation from "../images/Become img/Implementation Partner.webp";
import imgAuthorized from "../images/Become img/Authorized Partner.webp";
import imgReferral from "../images/Become img/Referral Partner.webp";
import tsc from "../images/Become Partner Client Logo/alyce.png";
import honewell from "../images/Become Partner Client Logo/corilloon.jpg";
import pricsion from "../images/Become Partner Client Logo/servio.avif";
import horizon from "../images/Client Logo/Pixel Pulse.jpg";
import posbank from "../images/Become Partner Client Logo/superstore.webp";
import superstore from "../images/Become Partner Client Logo/talenbizz.jpeg";
import posiflex from "../images/Become Partner Client Logo/technovus.avif";
import hexira from "../images/Become Partner Client Logo/tsc.webp";
import retail from "../images/Become Partner Client Logo/opencl.svg";
import subhlaabh from "../images/Become Partner Client Logo/softtills.png";
import advantech from "../images/Become Partner Client Logo/infosit.png";
import arrowImage from "../images/Become img/aro.png";
import signup from "../images/image 8.avif";
import getonboard from "../images/image 9.avif";
import recivetraning from "../images/image 10.jpg";
import beginEarningImage from "../images/image 11.jpg";
import { motion } from "framer-motion";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Become = () => {
  const [formData, setFormData] = useState({
    name: "",
    bussinessName: "",
    enquiryDate:"",
    email: "",
    contact: "",
    city: "",
  });

  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [modalMessage, setModalMessage] = useState(""); // State for modal message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(
      "https://pjsofttech.com:16443/addPartner",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    setModalMessage("Form submitted successfully!");
    setShowModal(true);
  } catch (error) {
    console.error(error);
    setModalMessage("Failed to submit the form");
    setShowModal(true);
  }
};

const [activeImage, setActiveImage] = useState(imgImplementation);

  const slickOptions = {
    dots: false, // Disable navigation dots
    infinite: true, // Infinite loop for slideshow
    speed: 300, // Transition speed
    slidesToShow: 5, // Show 5 slides at once (adjust as per your needs)
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Speed of autoplay
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4, // On medium screens, show 4 slides
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3, // On smaller screens, show 3 slides
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // On even smaller screens, show 2 slides
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // On mobile, show 1 slide
        },
      },
    ],
  };

  const checkmobile = (id) => {
    const phoneInput = document.getElementById(id);
    const phoneValue = phoneInput.value;

    // Define a regex pattern for a valid phone number (adjust if needed)
    const phonePattern = /^[0-9]{10,15}$/; // Allows 10 to 15 digits

    if (!phonePattern.test(phoneValue)) {
      // Set custom error message
      phoneInput.setCustomValidity("Please enter a valid phone number.");
    } else {
      // Clear the error message if valid
      phoneInput.setCustomValidity("");
    }
  };

  return (
    <>
      <div className="container-fluid pt-5">
        <div className="container partner-section1 pt-5">
          <div className="info pt-5">
            <h2>
              Become a Part of <span>Official Channel Partner</span>
            </h2>
            <p className="text-white fw-bold">
              Achieve Boundless Growth, Endless Profits, <br />
              and Partnership Opportunities with PJSOFTTECH.
            </p>
            <p className="text-white fw-bold">
              Join us as a Channel Partner and unlock PJSOFTTECH’s comprehensive
              suite of software <br /> solutions, ERPs, and custom enterprise
              solutions tailored to 38+ industry sectors.
            </p>
            <div className="partner-types">
              <div>
                <span
                  className="bullet-tick"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  ✔
                </span>{" "}
                Implementation Associate
              </div>
              <div>
                <span
                  className="bullet-tick"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  ✔
                </span>{" "}
                Certified Partner
              </div>
              <div>
                <span
                  className="bullet-tick"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  ✔
                </span>{" "}
                Referral Program Partner
              </div>
            </div>
          </div>

          <div className="form">
            <h5 className="text-center fw-bold ">Become a</h5>
            <h3 className="text-center fw-bold fs-5">
              PJSOFTTECH Partner Now!
            </h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name *"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="businessName"
                placeholder="Business Name *"
                required
                value={formData.businessName}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="text"
                name="phone"
                placeholder="Enter Your Contact Number *"
                required
                value={formData.phone}
                onChange={handleChange}
              />

              <input
                type="text"
                name="city"
                placeholder="City *"
                required
                value={formData.city}
                onChange={handleChange}
              />

              <div className="text-center">
                <button className="btn btn-brand" type="submit">
                  Become a Partner
                </button>
              </div>
            </form>
            <Modal
              show={showModal}
              onHide={() => setShowModal(false)}
              centered
              backdrop="static"
            >
              <Modal.Header closeButton className="custom-modal-header">
                <Modal.Title className="custom-modal-title">
                  Form Submission Status
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="custom-modal-body">
                <p>{modalMessage}</p>
              </Modal.Body>
              <Modal.Footer className="custom-modal-footer">
                <Button onClick={() => setShowModal(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>

      {/* Partner Key Features Section 2 - Advanced Animated Design ********************************************/}
      <section className="partner-keyfeatures-adv py-5" id="keyfeatures">
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="fw-bold fs-1 gradient-text">
              Channel Partner Benefits for <span className="text-brand">PJSOFTTECH</span>
            </h2>
            <p className="fs-5 text-muted">
              Essential Features of Our Partner Program that empower growth, profit, and innovation 🚀
            </p>
          </motion.div>

           <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h4 className="fw-bold text-success">
              💼 0% Investment | 💸 High Earning | 🚀 10x Growth | 💰 Endless Profit | 🌟 Brand Association
            </h4>
            <p className="fw-semibold text-muted mt-2">
              🌐 Expand Market | 🧠 Next-Gen IT | 🤝 Collaboration | ⚙ Zero Hassle | 🎓 Continuous Training
            </p>
          </motion.div>

          <div className="row g-4">
            {[
              {
                title: "Financial Benefits",
                icon: "💰",
                color: "#00b09b",
                items: [
                  "Attractive Margins & Discounts on all sales",
                  "Performance Rebates for meeting targets",
                  "Deal Protection from channel conflict",
                  "Recurring Revenue from renewals",
                  "Market Development Funds for promotions",
                ],
              },
              {
                title: "Sales & Business Growth",
                icon: "📈",
                color: "#ff512f",
                items: [
                  "Lead Sharing & Co-selling Opportunities",
                  "Access to New Markets & Industries",
                  "Joint Go-To-Market Planning",
                  "Cross-Selling of Complementary Services",
                ],
              },
              {
                title: "Marketing Support",
                icon: "📢",
                color: "#007bff",
                items: [
                  "Co-Branded Marketing Materials",
                  "Partner Directory Listing",
                  "Event Collaboration & Webinars",
                  "Global Promotional Campaigns",
                ],
              },
              {
                title: "Training & Certification",
                icon: "🎓",
                color: "#8e2de2",
                items: [
                  "Free or Discounted Product Training",
                  "Official Partner Certifications",
                  "Ongoing Learning via Webinars",
                  "Pre & Post Sales Support Training",
                ],
              },
              {
                title: "Technical & Product Support",
                icon: "⚙️",
                color: "#11998e",
                items: [
                  "Dedicated Partner Support Channel",
                  "Access to Beta Versions / Roadmaps",
                  "Implementation Tools & API Access",
                  "Solution Architecture Assistance",
                ],
              },
              {
                title: "Brand & Reputation",
                icon: "🌟",
                color: "#ff9966",
                items: [
                  "Association with Trusted Software Brand",
                  "Co-Branding Rights & Certificates",
                  "Customer Success Case Studies",
                ],
              },
              {
                title: "Relationship & Community",
                icon: "🤝",
                color: "#00c6ff",
                items: [
                  "Dedicated Partner Manager",
                  "Partner Advisory Boards",
                  "Networking Opportunities & Summits",
                ],
              },
              {
                title: "Operational Efficiency",
                icon: "🧠",
                color: "#f7971e",
                items: [
                  "Partner Portal Access & Tools",
                  "Automated Reporting & Tracking",
                  "Simplified Onboarding Process",
                ],
              },
              {
                title: "Robust Security Features",
                icon: "🔒",
                color: "#169dd7",
                items: [
                  "Advanced data encryption & protection",
                  "Role-based access controls",
                  "Regular security audits & updates",
                  "Secure cloud-based infrastructure",
                ],
              },
              {
                title: "Premium Quality Software",
                icon: "💎",
                color: "#ff7a00",
                items: [
                  "User-friendly interface & seamless navigation",
                  "High performance and reliability",
                  "Continuous product improvement & updates",
                  "Comprehensive technical documentation",
                ],
              },
              {
                title: "Boosted Partner Revenues",
                icon: "📈",
                color: "#28a745",
                items: [
                  "Attractive commission structure",
                  "Performance-based reward programs",
                  "Joint marketing opportunities",
                  "Increased customer retention & upselling potential",
                ],
              },
              {
                title: "All-in-one Channel Integrations",
                icon: "🔗",
                color: "#ff4081",
                items: [
                  "Seamless integration across sales channels",
                  "Unified management dashboard",
                  "Multi-platform data synchronization",
                  "Improved business scalability",
                ],
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                className="col-lg-3 col-md-6 col-sm-12"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="benefit-card-adv p-4 h-100 text-center rounded-4 shadow-lg">
                  <div
                    className="benefit-icon mx-auto mb-3"
                    style={{
                      background: `linear-gradient(135deg, ${card.color}, #ffffff)`,
                    }}
                  >
                    <span className="fs-1">{card.icon}</span>
                  </div>
                  <h5 className="fw-bold mb-3">{card.title}</h5>
                  <ul className="list-unstyled text-start">
                    {card.items.map((item, i) => (
                      <li key={i}> {item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

         
        </div>
      </section>

      {/* Explore Partner Programs Section 1 *******************************************************************************/}
      <section className="explore-program" id="types">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-12">
              <div className="section-title position-relative text-center">
                <h2 className="fs-3">
                  Uncover the Various Partner <br />
                  <span className="s2 text-decoration-underline">
                    Program Opportunities at PJSOFTTECH{" "}
                  </span>
                </h2>
                <h3 className="fs-5">
                  By joining us as a Channel Partner, you unlock access to
                  advanced software solutions and a dependable partner focused
                  on your growth and success.
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 text-center">
              <img
                src={activeImage}
                className="img-fluid desktop-headimg"
                alt="Selected partner program"
              />
            </div>
            <div className="col-lg-6">
              {[
                {
                  title: "Implementation Associate",
                  img: imgImplementation,
                  text: "PJSOFTTECH's Implementation Associate program is aimed at partners responsible for onboarding and implementing solutions for clients acquired by our inbound sales team.",
                },
                {
                  title: "Certified Partner",
                  img: imgAuthorized,
                  text: "As part of the Certified Partner program, partners facilitate sales closure and manage the entire implementation lifecycle.",
                },
                {
                  title: "Referral Program Partner",
                  img: imgReferral,
                  text: "PJSOFTTECH’s Referral Partner program is aimed at partners who refer potential clients, playing a crucial part in broadening our reach.",
                },
              ].map((partner, index) => (
                <div
                  className="feature"
                  key={index}
                  onMouseEnter={() => setActiveImage(partner.img)}
                >
                  <h4 className="fw-bold">{partner.title}</h4>
                  <p>{partner.text}</p>
                </div>
              ))}
            </div>
            <div className="text-center pt-5">
              <button className="btn btn-brand" type="submit">
                Start Earning Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* cards section 0 ***************************************************************/}
      <main id="main">
        <section className="head-features pt-5" id="keybenefits">
          <div className="container">
            <div className="row">
              {/* Feature Boxes */}
              {[
                {
                  title: "Quick Payout",
                  text: "Get your commissions in just 30 days! Maintain steady cash flow with our rapid payout system.",
                },
                {
                  title: "Year-Round Assistance",
                  text: "We offer continuous support to you and your clients, 365 days a year..",
                },
                {
                  title: "High Earnings",
                  text: "Earn up to 40% profit margins on our retail products. Our top-tier commission structure drives fast growth.",
                },
                {
                  title: "Complete Transparency",
                  text: "We ensure no lead conflict between partners and our own sales channels by providing CRM access to the partners.",
                },
                {
                  title: "15 Days of Implementation Training",
                  text: "We provide 15 days of implementation training to ensure smooth onboarding for your clients.",
                },
                {
                  title: "Demo & Closure Support",
                  text: "Our team provides free client demos and sales assistance to help you close leads effectively.",
                },
              ].map((feature, index) => (
                <div className="col-lg-4 col-md-4 col-6" key={index}>
                  <div className="boxes mb-4">
                    <h6 className="fw-bold fs-5">{feature.title}</h6>
                    <p className="text-center">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Valued Partners Carousel Section 3********************************************************************/}
      <section className="valued-partners" id="partners">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-12">
              <div className="section-title position-relative text-center">
                <h2 className="fs-3">
                  <span className="s2 text-decoration-underline ">
                    Our Trusted Partners
                  </span>
                </h2>
                <h3 className="fs-5">
                  PJSOFTTECH's remarkable success story is powered by the
                  enthusiasm and dedication of our partners alongside our
                  strong brand image.
                </h3>
              </div>
            </div>
          </div>

          <Slider {...slickOptions}>
            {[
              { img: tsc, alt: "tsc" },
              { img: honewell, alt: "honewell" },
              { img: pricsion, alt: "pricsion" },
              { img: horizon, alt: "horizon" },
              { img: posbank, alt: "posbank" },
              { img: superstore, alt: "superstore" },
              { img: posiflex, alt: "posiflex" },
              { img: hexira, alt: "hexira" },
              { img: retail, alt: "retail" },
              { img: subhlaabh, alt: "subhlaabh" },
              { img: advantech, alt: "advantech" },
              // { img: zebra, alt: "zebra" },
              // Add other partners here as needed
            ].map((partner, index) => (
              <div className="item client-logo" key={index}>
                <img
                  src={partner.img}
                  alt={`${partner.alt} using PJSOFTTECH `}
                  className="logo1_logo splide_img"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

       {/* Become a partner  section 6 ***********************************/}
      <section className="become-partner" id="onboarding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-9">
              <div className="section-title text-center pt-5">
                <h2 className="text-decoration-underline">
                  <span className="s2 text-decoration-underline">
                    Want to Join Us as a Partner? Here’s the Process.
                  </span>
                  ?
                </h2>
              </div>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-lg-3">
              <div className="partner-steps">
                <div className="steps-image-arrow-container">
                  <div className="steps-image">
                    <img
                      src={signup} // Using imported image
                      className="img-fluid imgaro"
                      alt="become our esteemed channel partner"
                    />
                  </div>
                  <span className="arrowIcon">
                    <img src={arrowImage} alt="Arrow Icon" />{" "}
                    {/* Using imported arrow image */}
                  </span>
                </div>
                <h5 className="fw-bold pt-4">Register Now</h5>
                <p>
                  Contact us for a straightforward sign-up process and
                  documentation to become our trusted channel partner.
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="partner-steps">
                <div className="steps-image-arrow-container">
                  <div className="steps-image">
                    <img
                      src={getonboard} // Using imported image
                      className="img-fluid imgaro"
                      alt="Implementation Partner or a Referral Partner"
                    />
                  </div>
                  <span className="arrowIcon">
                    <img src={arrowImage} alt="Arrow Icon" />{" "}
                    {/* Using imported arrow image */}
                  </span>
                </div>
                <h5 className="fw-bold pt-4">Get Started</h5>
                <p>
                  Upon registration, you'll be onboarded as an Implementation
                  Partner or a Referral Partner.
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="partner-steps">
                <div className="steps-image-arrow-container">
                  <div className="steps-image">
                    <img
                      src={recivetraning} // Using imported image
                      className="img-fluid imgaro"
                      alt="best resell software partner program"
                    />
                  </div>
                  <span className="arrowIcon">
                    <img src={arrowImage} alt="Arrow Icon" />{" "}
                    {/* Using imported arrow image */}
                  </span>
                </div>
                <h5 className="fw-bold pt-4">Master Our Products - Training</h5>
                <p>
                  Get hands-on training from our experts to understand our
                  products inside and out, and sell confidently.&nbsp;
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="partner-steps">
                <div className="steps-image-arrow-container">
                  <div className="steps-image">
                    <img
                      src={beginEarningImage} // Using imported image
                      className="img-fluid imgaro "
                      alt="earn commissions from resell software partner program"
                    />
                  </div>
                </div>
                <h5 className="fw-bold pt-4">Unlock Earning Potential</h5>
                <p>
                  Get the authority to sell our products and earn commissions
                  with impressive margins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* success stories section 4 *******************************/}
      <section className="partner-testimonial" id="success-stories">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-9">
              <div className="section-title text-center pt-5">
                <h2 className="fs-3">
                  <span className="s2 text-decoration-underline">
                    Partner Success Highlights
                  </span>
                </h2>
                <h3 className="fs-5">
                  Explore the success stories of our partners and how they’ve
                  grown with PJSOFTTECH.
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              {
                text: `With PJSOFTTECH, our partners can onboard clients across multiple companies, branches, and users seamlessly.`,
                quote: `" I can always rely on the PJSOFTTECH team to help me resolve implementation challenges, ensuring a flawless process for my clients."`,
                author: "R Ashish Pawar",
                since: "Channel Partner Since 2020",
              },
              {
                text: `Thanks to our partner network, many clients have successfully integrated their operations with seamless online connections.`,
                quote: `"Incredible! That’s the only word that captures my thoughts about the support and benefits."`,
                author: "Pragiti Bisen",
                since: "Channel Partner Since 2021",
              },
              {
                text: `With a vision to innovate, PJSOFTTECH's partner network is set to change the landscape of retail businesses in their region.`,
                quote: `"I’m truly impressed by the PJSOFTTECH team. Their problem-solving features make closing sales feel like a breeze for me."`,
                author: "Nikita Mishra",
                since: "Channel Partner Since 2022",
              },
              {
                text: `PJSOFTTECH supports our partners in onboarding clients with multiple branches and chains, featuring multi-company, multi-branch, and user functionalities.`,
                quote: `"I can always rely on the PJSOFTTECH team to help me with smooth client implementation whenever I get stuck."`,
                author: "Raguveer Narayan",
                since: "Channel Partner Since 2023",
              },
              {
                text: `Thanks to our partner network, many clients have effortlessly connected their operations with online integrations.`,
                quote: `"When I think of the support and benefits, the only word that comes to mind is Wow!"`,
                author: "Meena Pandey",
                since: "Channel Partner Since 2020",
              },
              {
                text: `The vision of PJSOFTTECH’s partner network is to revolutionize the retail industry within their region.`,
                quote: `"I highly appreciate the PJSOFTTECH team. Their problem-solving features make closing sales smooth and easy for me."`,
                author: "Priti Roy",
                since: "Channel Partner Since 2024",
              },
            ].map((testimonial, index) => (
              <div
                className="col-md-4 mb-4 pt-5"
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "400px", // Adjust height as needed
                  // backgroundColor: "#f8f9fa",
                  borderRadius: "8px", // Optional: Border radius
                  // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div
                  className="card testimonial-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <di v className="card-body">
                    <i className="fa-solid fa-quote-right" />
                    <p className="text-center">{testimonial.text}</p>
                    <p className="fw-bold text-center">{testimonial.quote}</p>
                    <h5 className="card-title text-center">
                      {testimonial.author}
                    </h5>
                    <p className="card-text text-center">{testimonial.since}</p>
                  </di>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* intrested program section 5 **********************************/}
      <section className="intrested-program bg-image ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="intrested-content text-center">
                <h3 className="fs-1 text-decoration-underline">
                  Looking Into Our Partner Programs?
                </h3>
                <div className=" ">
                  <button className="btn btn-brand5" type="submit">
                    Join Us Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faqs  section 7 **********************************/}
      <section id="faqs" className="faqs">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title text-center pt-5">
                <h2 className="text-decoration-underline">
                  <span className="">Have Questions? We're Here to Help!</span>
                </h2>
                <h3 className="fs-5">You can count on us.</h3>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-12">
              <div className="accordion" id="faq-items">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="accordion-item border-0 mb-3">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button fw-bold collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          Why is PJSOFTTECH the right choice for a partnership?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#faq-items"
                      >
                        <div className="accordion-body">
                          Success comes easily when you partner with PJSOFTTECH.
                          With 15K+ customers and high ratings on review
                          platforms, our software products and enterprise
                          solutions are trusted by many. Our partners benefit
                          from:
                          <br />
                          <br />
                          <ul>
                            <li>
                              Full access to a robust suite of software &
                              applications
                            </li>
                            <li>High margins (up to 40%) on sales</li>
                            <li>Quick payout system</li>
                            <li>
                              15 days of training for client implementation
                            </li>
                            <li>Full transparency</li>
                            <li>Ongoing support</li>
                            <li>Partnering with an industry leader</li>
                            <li>
                              Greater potential for growth and client expansion
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-0 mb-3">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button fw-bold collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          What benefits are included in the PJSOFTTECH Reseller
                          Partner Program?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faq-items"
                      >
                        <div className="accordion-body">
                          The PJSOFTTECH reseller program is crafted to expand
                          our product availability through a network of trusted
                          partners. Registered partners are authorized to resell
                          our products as Referral Partners (referring potential
                          clients or providing demos), Authorized Partners
                          (closing sales and managing complete implementation),
                          or Implementation Partners (handling the onboarding
                          and implementation of solutions for clients brought in
                          by inbound sales).
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="accordion-item border-0 mb-3">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button fw-bold collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          What support and resources can you expect from
                          PJSOFTTECH?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#faq-items"
                      >
                        <div className="accordion-body">
                          By joining PJSOFTTECH as a partner, you get:
                          <br />
                          <br />
                          <ul>
                            <li>Ongoing support and customer care</li>
                            <li>Sales help whenever required</li>
                            <li>
                              Comprehensive training provided by the PJSOFTTECH
                              team
                            </li>
                            <li>
                              Complete transparency with no lead conflicts
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-0 mb-3">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button fw-bold collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Do I need to make an investment to become a partner
                          with PJSOFTTECH?
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#faq-items"
                      >
                        <div className="accordion-body">
                          Earn with PJSOFTTECH today and benefit from high sales
                          margins—all with no investment required.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-0 mb-3">
                      <h2 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button fw-bold collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          Who is accountable for clients once onboarding and
                          implementation are complete?
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#faq-items"
                      >
                        <div className="accordion-body">
                          Post-implementation, PJSOFTTECH takes full
                          responsibility for ensuring uninterrupted and flawless
                          service delivery.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Become;
