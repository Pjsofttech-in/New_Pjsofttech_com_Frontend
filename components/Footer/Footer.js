import React from "react";
import { Link } from "../../router-compat";
import styles from "./Footer.module.css";
import Telegram from "../images/Telegram11.png";
import Youtube from "../images/youtube11.svg";
import Facebook from "../images/facebook11.svg";
import Linkedin from "../images/indeed11.svg";
import Instagram from "../images/instagram11.svg";
import Whatsapp from "../images/Whatsapp11.png";
import logoPj from "../images/logoPj.png";

const Footer = () => {
  return (
    <>
      <footer className={`${styles.footer} d-none d-md-none d-lg-block`}>
        <div className={styles["container-fluid"]}>
          <div className={styles["container-top"]}>
            <div className={styles["footer-top"]}></div>
            <div className={styles["container-bottom"]}>
              <div className={styles["footer-bottom"]}>
                <div className={styles["footer-services"]}>
                  <div className={styles.services}>
                    <h4>
                      <span className={styles.span1}>Our Software</span>
                    </h4>
                  </div>
                  <hr style={{ color: "white", width: "100%" }} />

                  <div className={styles["services-grid"]}>
                    {/* First column */}
                    <div className={styles["service-col"]}>
                      <ul>
                        <li>
                          <Link href="/school-new-management-system" style={{ color: "white", textDecoration: "none" }}>
                            School Management System
                          </Link>
                        </li>
                        <li>
                          <Link href="/college-management-software" style={{ color: "white", textDecoration: "none" }}>
                            College Management System
                          </Link>
                        </li>
                        <li>
                          <Link href="/academy-management-software" style={{ color: "white", textDecoration: "none" }}>
                            Academy Management System
                          </Link>
                        </li>
                        <li>
                          <Link href="/institute-management-software" style={{ color: "white", textDecoration: "none" }}>
                            University Management System
                          </Link>
                        </li>
                        <li>
                          <Link href="/enquiry-management-software" style={{ color: "white", textDecoration: "none" }}>
                            Lead Management System
                          </Link>
                        </li>
                        <li>
                          <Link href="/income-expenses-management-system" style={{ color: "white", textDecoration: "none" }}>
                            Inventory Management System
                          </Link>
                        </li>
                        <li>
                          <Link href="/employee-management-system" style={{ color: "white", textDecoration: "none" }}>
                            Employee Management System
                          </Link>
                        </li>
                        <li>
                          <Link href="/study-point-management-system" style={{ color: "white", textDecoration: "none" }}>
                            StudyPoint Management
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Second column */}
                    <div className={styles["service-col"]}>
                      <ul>
                        <li>
                          <Link href="/student-information-system" style={{ color: "white", textDecoration: "none" }}>
                            Student Management System
                          </Link>
                        </li>
                        <li>
                          <Link href="/hr-management-system" style={{ color: "white", textDecoration: "none" }}>
                            HR Management System
                          </Link>
                        </li>
                        <li>
                          <Link href="/Shippment-management-software" style={{ color: "white", textDecoration: "none" }}>
                            Shipment Management System
                          </Link>
                        </li>
                        <li>
                          <Link href="/payroll-management-system" style={{ color: "white", textDecoration: "none" }}>
                            Payroll Management System
                          </Link>
                        </li>
                        <li>
                          <Link href="/project-management-system" style={{ color: "white", textDecoration: "none" }}>
                            Project Management System
                          </Link>
                        </li>
                        <li>
                          <Link href="/hostel-managment-system" style={{ color: "white", textDecoration: "none" }}>
                            Hostel Management System
                          </Link>
                        </li>
                        <li>
                          <Link href="/fees-management-system" style={{ color: "white", textDecoration: "none" }}>
                            Fees Management System
                          </Link>
                        </li>
                        <li>
                          <Link href="/online-examination-system" style={{ color: "white", textDecoration: "none" }}>
                            Online Examination System
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Third column */}
                    <div className={styles["service-col"]}>
                      <ul>
                        <li>
                          <Link href="/attendance-management-system" style={{ color: "white", textDecoration: "none" }}>
                            Attendance Education System
                          </Link>
                        </li>
                        <li>
                          <Link href="/online-admission-system" style={{ color: "white", textDecoration: "none" }}>
                            Online Admission System
                          </Link>
                        </li>
                        <li>
                          <Link href="/sales-management-system" style={{ color: "white", textDecoration: "none" }}>
                            Sales Management System
                          </Link>
                        </li>
                        <li>
                          <Link href="/classroom-management-system" style={{ color: "white", textDecoration: "none" }}>
                            Classroom Management System
                          </Link>
                        </li>
                        <li>
                          <Link href="/test-series-management-system" style={{ color: "white", textDecoration: "none" }}>
                            Test Series Management
                          </Link>
                        </li>
                        <li>
                          <Link href="/ecommerce-management-system" style={{ color: "white", textDecoration: "none" }}>
                            Ecommerce Management System
                          </Link>
                        </li>
                        <li>
                          <Link href="/book-shop-management-system" style={{ color: "white", textDecoration: "none" }}>
                            BookShop Management
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>

                <div className={styles["footer-services1"]}>
                  <div className={styles.services2}>
                    <h4>
                      <span className={styles.span2}>Links</span>
                    </h4>
                  </div>
                  <hr style={{ color: "white", width: "100%" }} />
                  <div className={styles["services-grid"]}>
                    <div className={styles["service-col"]}>
                      <ul>
                        <li>
                          <Link
                            href="/about"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/contact-page"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/privacy-policy"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Organization"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            Organization
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Terms-and-Conditions"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            Terms and Conditions
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Copyright-Policy"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            Copyright Policy
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/data"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            Data Protection Addendum
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/refund"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            Refund Policy
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={styles["footer-services3"]}>
                  <div className={styles.services4}>
                    <h4>
                      <span className={styles.span3}>Contact Us</span>
                    </h4>
                  </div>
                  <hr style={{ color: "white", width: "70%" }} />
                  <div className={styles["services-grid"]}>
                    <div className={styles["service-col"]}>
                      {/* Location Section */}
                      <div className={styles.contactItem}>
                        <div>
                          <a
                            href="https://www.google.com/maps?q=PjSoftTech+pvt+ltd,+Lokmanya+Bal+Gangadhar+Tilak+Rd,+Sadashiv+Peth,+Pune,+Maharashtra+411030"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", textDecoration: "none" }}
                            className={styles.address}
                          >
                            <h4 className="fw-bold">Head Office:-</h4>
                            203, 2nd floor, Mangalmurti <br />
                            Complex, behind ABIL Tower, Hirabagh Chowk, Tilak
                            Road, Shrukravar Peth, Pune-411002, India
                          </a>

                          <div className={styles.contactItem}>
                            <div className="text-start">
                              <a
                                href="mailto:pjsofttech@gmail.com"
                                style={{ color: "white", textDecoration: "none" }}
                              >
                                sales@pjsofttech.com
                              </a>
                            </div>
                          </div>

                          {/* Phone Section */}
                          <div className={styles.contactItem}>
                            <div>
                              <a
                                href="tel:+919923570901"
                                style={{ color: "white", textDecoration: "none" }}
                              >
                                (+91) 7020 615206
                              </a>
                            </div>
                          </div>

                          <a
                            href="https://www.google.com/maps?q=PjSoftTech+pvt+ltd,+Lokmanya+Bal+Gangadhar+Tilak+Rd,+Sadashiv+Peth,+Pune,+Maharashtra+411030"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", textDecoration: "none", display: "block", marginTop: "20px" }}
                            className={styles.address}
                          >
                            <h4 className="fw-bold">Branch Office:-</h4>
                            2nd floor, White House, Oppo. Tilak Smarak Mandir, <br />
                            Tilak Rd, Perugate, Sadashiv Peth,
                            Pune, MaharashtraÂ 411030, India
                          </a>

                        </div>
                      </div>

                      {/* Email Section */}
                      <div className={styles.contactItem}>
                        <div className="text-start">
                          <a
                            href="mailto:pjsofttech@gmail.com"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            info@pjsofttech.com
                          </a>
                        </div>
                      </div>

                      {/* Phone Section */}
                      <div className={styles.contactItem}>
                        <div>
                          <a
                            href="tel:+919923570901"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            (+91) 99235 70901
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["container-fluid1"]}>
          <div className={styles["container"]}>
            <div className=" d-flex justify-content-between align-items-between flex-column flex-lg-row pt-5">
              {/* Logo Section */}
              <div className="s1 d-flex align-items-center mb-3 mb-lg-0 pt-2">
                <img
                  src="https://www.pjsofttech.com/logoPj.png"
                  width="70px"
                  alt="Logo"
                />
                <h4 className="ms-2 mt-1 fw-bold text-white fs-4">
                  PJSOFTTECH
                </h4>
              </div>

              <div
                className={`${styles["footer-social-icons"]} mb-3 mb-lg-0 gap-2`}
              >
                {/* indeed */}
                <a
                  href="https://www.linkedin.com/company/pjsofttech/"
                  target="_blank"
                  style={{ margin: "0 18px" }}
                >
                  <img
                    src={Linkedin.src || Linkedin}
                    className="iconimg"
                    style={{ width: "30px", height: "30px" }}
                    alt="indeed"
                  />
                </a>

                {/* facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61552852447856"
                  target="_blank"
                  style={{ margin: "0 18px" }}
                >
                  <img
                    src={Facebook.src || Facebook}
                    className="iconimg"
                    style={{ width: "30px", height: "30px" }}
                    alt="facebook"
                  />
                </a>

                {/* youtube */}
                <a
                  href="https://www.youtube.com/@PJsofttech"
                  target="_blank"
                  style={{ margin: "0 18px" }}
                >
                  <img
                    src={Youtube.src || Youtube}
                    className="iconimg"
                    style={{ width: "30px", height: "30px" }}
                    alt="youtube"
                  />
                </a>

                {/* Whatsapp */}
                <a
                  href="https://wa.me/9923570901"
                  target="_blank"
                  style={{ margin: "0 18px" }}
                >
                  <img
                    src={Whatsapp.src || Whatsapp}
                    className="iconimg"
                    style={{ width: "30px", height: "30px" }}
                    alt="Whatsapp"
                  />
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/pjsofttech"
                  target="_blank"
                  style={{ margin: "0 18px" }}
                >
                  <img
                    src={Telegram.src || Telegram}
                    className="iconimg"
                    style={{ width: "30px", height: "30px" }}
                    alt="Telegram"
                  />
                </a>

                {/* instagram */}
                <a
                  href="https://www.instagram.com/pjsofttech/profilecard/?igsh=MWJua3BqbGVvMmY2NA=="
                  target="_blank"
                  style={{ margin: "0 18px" }}
                >
                  <img
                    src={Instagram.src || Instagram}
                    className="iconimg"
                    style={{ width: "30px", height: "30px" }}
                    alt="instagram"
                  />
                </a>
              </div>

              {/* Images Section */}
              <div className="d-flex images justify-content-center justify-content-lg-start pt-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.ooacademy.pune&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://proctur.com/assets/img/playstore.png"
                    onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = logoPj.src; }}
                    width="auto"
                    height="40px"
                    alt="Playstore 1"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.ooacademy.pune&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://proctur.com/assets/img/applestore.png"
                    onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = logoPj.src; }}
                    width="auto"
                    height="40px"
                    alt="Playstore 2"
                    className="ms-3"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div
        className="container-fluid d-block d-md-block d-lg-none text-center mt-2"
        style={{ backgroundColor: "#269DD7" }}
      >
        <div className="row text-center p-5">
          {/* Our Services */}
          <div className="col-md-4 text-center">
            <ul className="text-center">
              <h2 className="nav-item text-center">
                <span style={{ color: "white" }}>Our Softwares</span>
              </h2>
            </ul>

            <div className="d-flex flex-wrap justify-content-center ">
              {[
                {
                  href: "/student-information-system",
                  text: "Student Management System",
                },
                {
                  href: "/online-admission-system",
                  text: "Online Admission System",
                },
                {
                  href: "/school-management-software",
                  text: "School Management System",
                },
                {
                  href: "/employee-management-system",
                  text: "Employee Management System",
                },
                { href: "/higher-education-system", text: "CRM/ERP System" },
                {
                  href: "/attendance-management-system",
                  text: "Attendance Education System",
                },
                {
                  href: "/income-expenses-management-system",
                  text: "Enquiry Management System",
                },
                {
                  href: "/institute-management-software",
                  text: "Institute Management System",
                },
                {
                  href: "/college-management-software",
                  text: "College Management System",
                },
                {
                  href: "/fees-management-system",
                  text: "Fees Management System",
                },
                {
                  href: "/online-examination-system",
                  text: "Online Examination System",
                },
                {
                  href: "/Income-Expenses-Management-System",
                  text: "Income & Expenses Management",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center justify-content-center list-group-item"
                  style={{ width: "100%", padding: "4px", lineHeight: "20px" }}
                >
                  <a
                    href={item.href}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "14px",
                      backgroundColor: "#269DD7",
                      textAlign: "center",
                      borderBottom: "1px solid white",
                    }}
                  >
                    {item.text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-4 text-center mt-4">
            <ul className="text-center">
              <h2 className="nav-item text-center">
                <a
                  className="nav-link active text-white fw-bold text-center fs-1"
                  style={{ textDecoration: "none" }}
                  aria-current="page"
                  href="/your-link"
                >
                  Links
                </a>
              </h2>
            </ul>

            <div className="d-flex flex-wrap justify-content-center">
              {[
                { href: "/about", text: "About Us" },
                { href: "/contact-page", text: "Contact" },
                { href: "/privacy-policy", text: "Privacy Policy" },
                { href: "/organization", text: "Organization" },
                { href: "/Terms-and-Conditions", text: "Terms and Conditions" },
                { href: "/copyright-policy", text: "Copyright Policy" },
                { href: "/data", text: "Data Protection Addendum" },
                { href: "/refund", text: "Refund Policy" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center justify-content-center"
                  style={{ width: "100%", padding: "4px", lineHeight: "20px" }}
                >
                  <a
                    href={item.href}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "14px",
                      backgroundColor: "#269DD7",
                      textAlign: "center",
                      borderBottom: "1px solid white",
                    }}
                  >
                    {item.text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div className="col-md-4 mt-4">
            <ul className="text-center">
              <h2 className="nav-item text-center">
                <a
                  className="nav-link active text-white fw-bold text-center fs-1"
                  aria-current="page"
                  href="/your-link"
                >
                  Contact Us
                </a>
              </h2>
            </ul>

            <ul className="list-group list-group-flush">
              <li
                className="list-group-item"
                style={{ backgroundColor: "#269DD7", color: "white" }}
              >
                <a
                  href="https://www.google.com/maps?q=PjSoftTech+pvt+ltd,+Lokmanya+Bal+Gangadhar+Tilak+Rd,+Sadashiv+Peth,+Pune,+Maharashtra+411030"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white", textDecoration: "none" }}
                  className={styles.address}
                >
                  <h4 className="fw-bold">Head Office:-</h4>
                  203, 2nd floor, Mangalmurti <br />
                  Complex, behind ABIL Tower, Hirabagh Chowk, Tilak
                  Road, Shrukravar Peth, Pune-411002, India
                </a>

                <a
                  href="https://www.google.com/maps?q=PjSoftTech+pvt+ltd,+Lokmanya+Bal+Gangadhar+Tilak+Rd,+Sadashiv+Peth,+Pune,+Maharashtra+411030"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white", textDecoration: "none", display: "block", marginTop: "20px" }}
                  className={styles.address}
                >
                  <h4 className="fw-bold">Branch Office:-</h4>
                  2nd floor, White House, Oppo. Tilak Smarak Mandir, <br />
                  Tilak Rd, Perugate, Sadashiv Peth,
                  Pune, MaharashtraÂ 411030, India
                </a>
              </li>

              <li
                className="list-group-item"
                style={{ backgroundColor: "#269DD7", color: "white" }}
              >
                <a
                  href="mailto:info@pjsofttech.com"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    display: "block",
                    borderBottom: "1px solid white",
                    paddingBottom: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <h6 style={{ margin: 0 }}>info@pjsofttech.com</h6>
                </a>
                <a
                  href="tel:+919923570901"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  <h6 className="text-white" style={{ margin: 0 }}>
                    (+91) 99235 70901
                  </h6>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="container-fluid d-block d-md-block d-lg-none text-center p-1"
        style={{ backgroundColor: "#269DD7" }}
      >
        <div className="row text-center p-1">
          <div className="col-md-4">
            <div className="text-center mb-3">
              <img
                src="https://www.pjsofttech.com/logoPj.png"
                className="img-fluid"
                style={{ width: "80px", height: "auto" }}
                alt="Logo"
              />
              <h4 className="fw-bold text-white">PJSOFTTECH</h4>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            {/* indeed */}
            <a
              href="https://www.linkedin.com/company/101497456/admin/dashboard/"
              target="_blank"
              style={{ margin: "0 18px" }}
            >
              <img
                src={Linkedin.src || Linkedin}
                className="iconimg"
                style={{ width: "30px", height: "30px" }}
                alt="indeed"
              />
            </a>

            {/* facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61552852447856"
              target="_blank"
              style={{ margin: "0 18px" }}
            >
              <img
                src={Facebook.src || Facebook}
                className="iconimg"
                style={{ width: "30px", height: "30px" }}
                alt="facebook"
              />
            </a>

            {/* youtube */}
            <a
              href="https://www.youtube.com/@PJsofttech"
              target="_blank"
              style={{ margin: "0 18px" }}
            >
              <img
                src={Youtube.src || Youtube}
                className="iconimg"
                style={{ width: "30px", height: "30px" }}
                alt="youtube"
              />
            </a>

            {/* Whatsapp */}
            <a
              href="https://wa.me/9923570901"
              target="_blank"
              style={{ margin: "0 18px" }}
            >
              <img
                src={Whatsapp.src || Whatsapp}
                className="iconimg"
                style={{ width: "30px", height: "30px" }}
                alt="Whatsapp"
              />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/pjsofttech"
              target="_blank"
              style={{ margin: "0 18px" }}
            >
              <img
                src={Telegram.src || Telegram}
                className="iconimg"
                style={{ width: "30px", height: "30px" }}
                alt="Telegram"
              />
            </a>

            {/* instagram */}
            <a
              href="https://www.instagram.com/pjsofttech/"
              target="_blank"
              style={{ margin: "0 18px" }}
            >
              <img
                src={Instagram.src || Instagram}
                className="iconimg"
                style={{ width: "30px", height: "30px" }}
                alt="instagram"
              />
            </a>
          </div>

          <div className="col-md-4 mb-3">
            <div className="d-flex justify-content-center justify-content-lg-start pt-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.ooacademy.pune&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://proctur.com/assets/img/playstore.png"
                  onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = logoPj.src; }}
                  width="auto"
                  height="40px"
                  alt="Playstore 1"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.ooacademy.pune&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://proctur.com/assets/img/applestore.png"
                  onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = logoPj.src; }}
                  width="auto"
                  height="40px"
                  alt="Playstore 2"
                  className=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["footer-copyright-container"]}>
        <p className={styles["footer-copyright"]}>
          &copy; 2025 PJSoftTech. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;


