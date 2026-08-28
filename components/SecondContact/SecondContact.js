// import React, { useState, useEffect } from "react";
// import "./SecondContact.css";
// import callCenterImage from "../images/SECONDCONTACT.png";
// import Swal from "sweetalert2";
// import axios from "axios";

// const SecondContact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     organization_email: "",
//     mobile_no: "",
//     services: "",
//     message: "",
//     organizationType: "",
//     designation: "",

//   });

//   const [errors, setErrors] = useState({});


//   const statusData = [
//     "4+ Years Of Experience",
//     "15+ Our Softwares",
//     "200000+ Enrolled Students",
//     "6000+ Teachers Enrolled",
//     "250+ Organizations",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % statusData.length);
//     }, 2000); // Change every 2 seconds

//     return () => clearInterval(interval);
//   }, [statusData.length]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const validateForm = () => {
//     const errors = {};

//     if (!formData.name.trim())
//       errors.name = "Name/Organization Name is required";
//     if (!formData.organization_email.trim())
//       errors.organization_email = "Organization email is required";
//     if (!formData.mobile_no.trim()) {
//       errors.mobile_no = "Mobile number is required";
//     } else if (!/^\d{10}$/.test(formData.mobile_no)) {
//       errors.mobile_no = "Mobile number must be a valid 10-digit number";
//     }
//     if (!formData.services.trim()) errors.services = "Please select a service";
//     if (!formData.message.trim()) errors.message = "Message is required";

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//       const inquiry = {
//         name: formData.name,
//         organization_email: formData.organization_email,
//         mobile_no: Number(formData.mobile_no),
//         services: formData.services,

//         message: formData.message,
//         remark: formData.message,

//         organizationType: formData.organizationType,
//         designation: formData.designation,

//         enquiryDate: new Date().toISOString().split("T")[0],
//         source_by: "Website",
//         status1: "New",
//       };

//       const response = await axios.post(
//         "http://localhost:8089/save",
//         inquiry
//       );

//       if (response.status === 200 || response.status === 201) {
//         Swal.fire({
//           icon: "success",
//           title: "Success",
//           text: "Form submitted successfully!",
//           confirmButtonText: "OK",
//         });
//         setFormData({
//           name: "",
//           organization_email: "",
//           mobile_no: "",
//           services: "",
//           message: "",
//           organizationType: "",
//           designation: "",
//         });
//         setErrors({});
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Error",
//           text: "There was an error submitting the form.",
//           confirmButtonText: "Try Again",
//         });
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Something went wrong. Please try again later.",
//         confirmButtonText: "OK",
//       });
//     }
//   };

//   return (
//     <div className="container">
//       <div className="container1">
//         <div className="row">
//           <div className="col-md-6">
//             <img
//               className="img1 rounded-5"
//               src={callCenterImage}
//               alt="Call Center Design"
//               style={{
//                 borderRadius: "30px",
//                 width: "110%",
//                 height: "85%",
//               }}
//             />
//           </div>

//           <div className="col-md-6 form-section">
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label>Organization / Institute / Name:</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Organization/Institute/Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//                 {errors.name && <span className="error">{errors.name}</span>}
//               </div>

//               <div className="form-group pt-3">
//                 <label>Organization Email:</label>
//                 <input
//                   type="email"
//                   id="organization_email"
//                   name="organization_email"
//                   placeholder="Organization Email Address"
//                   value={formData.organization_email}
//                   onChange={handleChange}
//                 />
//                 {errors.organization_email && (
//                   <span className="error">{errors.organization_email}</span>
//                 )}
//               </div>

//               <div className="form-group pt-3">
//                 <label>Services:</label>
//                 <select
//                   id="services"
//                   name="services"
//                   value={formData.services}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select a Service</option>

//                   <option value="School Management System">
//                     School Management System
//                   </option>
//                   <option value="College Management System">
//                     College Management System
//                   </option>
//                   <option value="Academy Management System">
//                     Academy Management System
//                   </option>
//                   <option value="Enquiry Management System">
//                     University Management System
//                   </option>
//                   <option value="Company Management System">
//                     Company Management System
//                   </option>
//                   <option value="Lead Managemen System">
//                     Lead Management System
//                   </option>
//                   <option value="Inventory Management System">
//                     Inventory Management System
//                   </option>
//                   <option value="Employee Management System">
//                     Employee Management System
//                   </option>
//                   <option value="StudyPoint Management System">
//                     StudyPoint Management System
//                   </option>
//                   <option value="Student Management System">
//                     Student Management System
//                   </option>
//                   <option value="HR Management System">
//                     HR Management System
//                   </option>
//                   <option value="Shipment Management System">
//                     Shipment Management System
//                   </option>
//                   <option value="Payroll Management System">
//                     Payroll Management System
//                   </option>
//                   <option value="Project Management System">
//                     Project Management System
//                   </option>
//                   <option value="Hostel Management System">
//                     Hostel Management System
//                   </option>
//                   <option value="Online Examination System">
//                     Online Examination System
//                   </option>
//                   <option value="Attendance Management System">
//                     Attendance Management System
//                   </option>
//                   <option value="Admission Management System">
//                     Admission Management System
//                   </option>
//                   <option value="Sales Management System">
//                     Sales Management System
//                   </option>
//                   <option value="Classroom Management System">
//                     Classroom Management System
//                   </option>
//                   <option value="Test Series Management System">
//                     Test Series Management System
//                   </option>
//                   <option value="Ecommerce Management System">
//                     Ecommerce Management System
//                   </option>
//                   <option value="BookShop Management System">
//                     BookShop Management System
//                   </option>

//                 </select>
//                 {errors.services && (
//                   <span className="error">{errors.services}</span>
//                 )}
//               </div>

//               <div className="form-row pt-4">
//                 <div className="form-group ">
//                   <label>Designation in Organization:</label>
//                   <select
//                     id="designation"
//                     name="designation"
//                     value={formData.designation}
//                     onChange={handleChange}
//                   >
//                     <option value="">Select a Designation</option>
//                     <option value="hr">HR</option>
//                     <option value="principal">Principal</option>
//                     <option value="vice-principal">Vice Principal</option>
//                     <option value="chairman">Chairman</option>
//                     <option value="director">Director</option>
//                     <option value="school-admin">School Admin</option>
//                     <option value="manager">Manager</option>
//                     <option value="co-ordinator">Co-Ordinator</option>
//                     <option value="teacher">Teacher</option>
//                     <option value="parent">Parent</option>
//                     <option value="student">Student</option>
//                     <option value="other">Other</option>
//                   </select>
//                   {errors.designation && (
//                     <span className="error">{errors.designation}</span>
//                   )}
//                 </div>

//                 <div className="form-group">
//                   <label>Select Organization Type:</label>
//                   <select
//                     id="organizationType"
//                     name="organizationType"
//                     value={formData.organizationType}
//                     onChange={handleChange}
//                   >
//                     <option value="">Select a Organization</option>
//                     <option value="academy">Academy</option>
//                     <option value="institute">Institute</option>
//                     <option value="school">School</option>
//                     <option value="college">College</option>
//                     <option value="university">University</option>
//                     <option value="">Company</option>company
//                     <option value="organization">Organization</option>
//                   </select>
//                   {errors.schoolType && (
//                     <span className="error">{errors.schoolType}</span>
//                   )}
//                 </div>
//               </div>

//               <div className="form-group pt-3">
//                 <label>Mobile:</label>
//                 <input
//                   type="text"
//                   id="mobile_no"
//                   name="mobile_no"
//                   placeholder="10 Digit Contact Number"
//                   value={formData.mobile_no}
//                   onChange={handleChange}
//                 />
//                 {errors.mobile_no && (
//                   <span className="error">{errors.mobile_no}</span>
//                 )}
//               </div>

//               <div className="form-group pt-3">
//                 <label>Message:</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   placeholder="Enter Your Message Here..."
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     width: "100%",
//                     height: "100px", // Adjust height as needed
//                     fontSize: "16px", // Adjust font size
//                     padding: "10px", // Add padding for better spacing
//                   }}
//                 />
//                 {errors.message && (
//                   <span className="error-text">{errors.message}</span>
//                 )}
//               </div>

//               <button type="submit" className="submit-btn">
//                 Submit
//               </button>
//             </form>

//             <div className="status">
//               <div
//                 className="status-item"
//                 key={currentIndex}
//                 style={{ animation: `slide-in 2s ease-in-out` }}
//               >
//                 <span className="status-icon">✔</span>
//                 <span>{statusData[currentIndex]}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecondContact;


import React, { useState, useEffect } from "react";
import "./SecondContact.css";
import callCenterImage from "../images/SECONDCONTACT.png";
import Swal from "sweetalert2";
import axios from "axios";

const SecondContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization_email: "",
    mobile_no: "",
    services: "",
    message: "",
    organizationType: "",
    designation: "",

  });

  const [errors, setErrors] = useState({});


  const statusData = [
    "4+ Years Of Experience",
    "15+ Our Softwares",
    "200000+ Enrolled Students",
    "6000+ Teachers Enrolled",
    "250+ Organizations",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % statusData.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [statusData.length]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim())
      errors.name = "Name/Organization Name is required";
    if (!formData.organization_email.trim())
      errors.organization_email = "Organization email is required";
    if (!formData.mobile_no.trim()) {
      errors.mobile_no = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile_no)) {
      errors.mobile_no = "Mobile number must be a valid 10-digit number";
    }
    if (!formData.services.trim()) errors.services = "Please select a service";
    if (!formData.message.trim()) errors.message = "Message is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const inquiry = {
        name: formData.name,
        organization_email: formData.organization_email,
        mobile_no: Number(formData.mobile_no),
        services: formData.services,

        message: formData.message,
        remark: formData.message,

        organizationType: formData.organizationType,
        designation: formData.designation,

        enquiryDate: new Date().toISOString().split("T")[0],
        source_by: "Website",
        status1: "New",
      };

      console.log("Sending inquiry:", inquiry);
      const response = await axios.post(
        "https://pjsofttech.com:16443/save",
        inquiry
      );

      console.log("Response:", response);

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
          organizationType: "",
          designation: "",
        });
        setErrors({});
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "There was an error submitting the form.",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      console.error("Error response:", error.response);
      
      const serverMsg = error.response?.data?.message || error.response?.data || error.message;
      
      Swal.fire({
        icon: "error",
        title: "Error",
        text: serverMsg || "Something went wrong. Please try again later.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="container">
      <div className="container1">
        <div className="row">
          <div className="col-md-6">
            <img
              className="img1 rounded-5"
              src={callCenterImage.src}
              alt="Call Center Design"
              style={{
                borderRadius: "30px",
                width: "110%",
                height: "85%",
              }}
            />
          </div>

          <div className="col-md-6 form-section">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Organization / Institute / Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Organization/Institute/Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>

              <div className="form-group pt-3">
                <label>Organization Email:</label>
                <input
                  type="email"
                  id="organization_email"
                  name="organization_email"
                  placeholder="Organization Email Address"
                  value={formData.organization_email}
                  onChange={handleChange}
                />
                {errors.organization_email && (
                  <span className="error">{errors.organization_email}</span>
                )}
              </div>

              <div className="form-group pt-3">
                <label>Services:</label>
                <select
                  id="services"
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                >
                  <option value="">Select a Service</option>

                  <option value="School Management System">
                    School Management System
                  </option>
                  <option value="College Management System">
                    College Management System
                  </option>
                  <option value="Academy Management System">
                    Academy Management System
                  </option>
                  <option value="Enquiry Management System">
                    University Management System
                  </option>
                  <option value="Company Management System">
                    Company Management System
                  </option>
                  <option value="Lead Managemen System">
                    Lead Management System
                  </option>
                  <option value="Inventory Management System">
                    Inventory Management System
                  </option>
                  <option value="Employee Management System">
                    Employee Management System
                  </option>
                  <option value="StudyPoint Management System">
                    StudyPoint Management System
                  </option>
                  <option value="Student Management System">
                    Student Management System
                  </option>
                  <option value="HR Management System">
                    HR Management System
                  </option>
                  <option value="Shipment Management System">
                    Shipment Management System
                  </option>
                  <option value="Payroll Management System">
                    Payroll Management System
                  </option>
                  <option value="Project Management System">
                    Project Management System
                  </option>
                  <option value="Hostel Management System">
                    Hostel Management System
                  </option>
                  <option value="Online Examination System">
                    Online Examination System
                  </option>
                  <option value="Attendance Management System">
                    Attendance Management System
                  </option>
                  <option value="Admission Management System">
                    Admission Management System
                  </option>
                  <option value="Sales Management System">
                    Sales Management System
                  </option>
                  <option value="Classroom Management System">
                    Classroom Management System
                  </option>
                  <option value="Test Series Management System">
                    Test Series Management System
                  </option>
                  <option value="Ecommerce Management System">
                    Ecommerce Management System
                  </option>
                  <option value="BookShop Management System">
                    BookShop Management System
                  </option>

                </select>
                {errors.services && (
                  <span className="error">{errors.services}</span>
                )}
              </div>

              <div className="form-row pt-4">
                <div className="form-group ">
                  <label>Designation in Organization:</label>
                  <select
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                  >
                    <option value="">Select a Designation</option>
                    <option value="hr">HR</option>
                    <option value="principal">Principal</option>
                    <option value="vice-principal">Vice Principal</option>
                    <option value="chairman">Chairman</option>
                    <option value="director">Director</option>
                    <option value="school-admin">School Admin</option>
                    <option value="manager">Manager</option>
                    <option value="co-ordinator">Co-Ordinator</option>
                    <option value="teacher">Teacher</option>
                    <option value="parent">Parent</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.designation && (
                    <span className="error">{errors.designation}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>Select Organization Type:</label>
                  <select
                    id="organizationType"
                    name="organizationType"
                    value={formData.organizationType}
                    onChange={handleChange}
                  >
                    <option value="">Select a Organization</option>
                    <option value="academy">Academy</option>
                    <option value="institute">Institute</option>
                    <option value="school">School</option>
                    <option value="college">College</option>
                    <option value="university">University</option>
                    <option value="company">Company</option>
                    <option value="organization">Organization</option>
                  </select>
                  {errors.organizationType && (
                    <span className="error">{errors.organizationType}</span>
                  )}
                </div>
              </div>

              <div className="form-group pt-3">
                <label>Mobile:</label>
                <input
                  type="text"
                  id="mobile_no"
                  name="mobile_no"
                  placeholder="10 Digit Contact Number"
                  value={formData.mobile_no}
                  onChange={handleChange}
                />
                {errors.mobile_no && (
                  <span className="error">{errors.mobile_no}</span>
                )}
              </div>

              <div className="form-group pt-3">
                <label>Message:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter Your Message Here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    height: "100px", // Adjust height as needed
                    fontSize: "16px", // Adjust font size
                    padding: "10px", // Add padding for better spacing
                  }}
                />
                {errors.message && (
                  <span className="error-text">{errors.message}</span>
                )}
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>

            <div className="status">
              <div
                className="status-item"
                key={currentIndex}
                style={{ animation: `slide-in 2s ease-in-out` }}
              >
                <span className="status-icon">✔</span>
                <span>{statusData[currentIndex]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondContact;