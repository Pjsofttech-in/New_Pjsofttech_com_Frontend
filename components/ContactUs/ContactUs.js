import React, { useState } from "react";
import axios from "axios";
import styles from "./ContactUs.module.css";
import Swal from "sweetalert2";
import SecondContact from "../SecondContact/SecondContact";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization_email: "",
    mobile_no: "",
    services: "",
    message: "",
    message: "",
    services: "",
    organizationName: "",
  });
  const [errors, setErrors] = useState({});
  const [successmessage, setSuccessmessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    // Validation
    if (!formData.name.trim()) {
      errors.name = "Name/Organization Name is required";
    }
    if (!formData.organization_email.trim()) {
      errors.organization_email = "Organization email is required";
    }
    if (!formData.mobile_no.trim()) {
      errors.mobile_no = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile_no.trim())) {
      errors.mobile_no = "Mobile number must be a valid 10-digit number";
    }
    if (!formData.services.trim()) {
      errors.services = "Selection of any one service is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length === 0) {
      try {
        const inquiry = {
          name: formData.name,
          mobile_no: formData.mobile_no,
          organization_email: formData.organization_email,
          source_by: formData.services,
          message: formData.message,
          services: formData.services,
          status1: "",
          exam: "",
          conduct_by: "",
          remark: formData.message,
          enquiryDate: new Date().toISOString().split("T")[0],
          callBackDate: "",
          callBackTime: "",
        };

        const response = await axios.post(
          "https://pjsofttech.com:16443/save",
          inquiry
        );

        if (response.status === 200 || response.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Form submitted successfully!",
            confirmButtonText: "OK",
          });

          setFormData({
            name: "",
            organization_email: "",
            mobile_no: "",
            services: "",
            message: "",
          });

          setErrors({});
        } else {
          setErrors({ form: "There was an error submitting the form." });

          Swal.fire({
            icon: "error",
            title: "Error",
            text: "There was an error submitting the form.",
            confirmButtonText: "Try Again",
          });
        }
      } catch (error) {
        console.error("There was an error submitting the form!", error);
        setErrors({ form: "There was an error submitting the form." });

        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong. Please try again later.",
          confirmButtonText: "OK",
        });
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
    <div className={styles["contact-pages"]}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#f5f7fa",
        
        }}
      ></div>

      <SecondContact />

     
    </div>
     <div className={styles.horizontal}>
        <hr className={styles["bold-hr"]} />
      </div>
      <div className={styles.container}>
        <div className={styles["map-container"]}>
          <h3>Our Location</h3>
          <iframe
            id="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d289.45386053729334!2d73.85471881312708!3d18.504252909073315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0128b44909f%3A0x52bd480dae08d64b!2sHira%20Baug%20Mitra%20Mandal%20Ganesh%20Temple!5e0!3m2!1sen!2sin!4v1715589288259!5m2!1sen!2sin"
            title="Google Maps - Hira Baug Mitra Mandal Ganesh Temple location"
            width="70%"
            height="550"
            style={{ border: 0 }}
            loading="lazy"
            className={styles.location}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
