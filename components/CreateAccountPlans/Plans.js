import React, { useState } from "react";
import "./Plans.css";
import CheckIcon from '@mui/icons-material/Check';

const Plans = ({ type, onCardClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  }

  // Plan details specific to students, including features and benefits
  const Student = [
    {
      name: "Basic",
      activationFee: "0",
      subscription: "₹ 5 ",
      benefits: ["No hidden charges"],
      features: [
        {
          name: "Inquiry Management",
          included: true,
          subFeatures: [
            "Inquiry Summary",
            "Inquiry Report Generation",
            "Barcode Inquiry Form",
          ],
        },
        {
          name: "Student Management",
          included: true,
          subFeatures: [
            "Student Records",
            "Class Management",
            "Fees Management",
            "Student Dashboard",
            "ID Card Generation",
            "Fees Report",
            "Dynamic Website",
          ],
        },
        {
          name: "Employee Management",
          included: true,
          subFeatures: [
            "Employee Records",
            "Attendance Tracking",
            "Payroll Management",
            "Leave Tracking",
            "Salary Tracking",
            "Employee Dashboard",
            "Dynamic Memo & Notice",
          ],
        },
        {
          name: "Income/Expense",
          included: true,
          subFeatures: [
            "Expense Tracking",
            "Income Reports",
            "Budget Management",
            "Report Generation",
            "Dynamic Category",
          ],
        },
        { name: "Sub Admin", included: false },
        { name: "Multiple Branches", included: false },
        { name: "Unlimited Entries", included: false },
        { name: "Daily Back-Up", included: false },
        { name: "Cloud Storing", included: true },
        { name: "10k WhatsApp Messaging", included: true },
        { name: "24/7 Support", included: true },
        { name: "fully customized websites", included: false },
        { name: "Premium ID Cards", included: false },

      ],
    },
    {
      name: "Premium",
      activationFee: "₹2,999/- (One Time)",
      subscription: "₹ 10 ",
      benefits: ["No hidden charges", "10k WhatsApp Messages"],
      features: [
        {
          name: "Inquiry Management",
          included: true,
          subFeatures: [
            "Inquiry Summary",
            "Inquiry Report Generation",
            "Barcode Inquiry Form",
          ],
        },
        {
          name: "Student Management",
          included: true,
          subFeatures: [
            "Student Records",
            "Class Management",
            "Fees Management",
            "Student Dashboard",
            "ID Card Generation",
            "Fees Report",
            "Dynamic Website",
          ],
        },
        {
          name: "Employee Management",
          included: true,
          subFeatures: [
            "Employee Records",
            "Attendance Tracking",
            "Payroll Management",
            "Leave Tracking",
            "Salary Tracking",
            "Employee Dashboard",
            "Dynamic Memo & Notice",
          ],
        },
        {
          name: "Income/Expense",
          included: true,
          subFeatures: [
            "Expense Tracking",
            "Income Reports",
            "Budget Management",
            "Report Generation",
            "Dynamic Category",
          ],
        },
        { name: "Sub Admin", included: true },
        { name: "Multiple Branches", included: false },
        { name: "Unlimited Entries", included: false },
        { name: "Daily Back-Up", included: true },
        { name: "Cloud Storing", included: true },
        { name: "30k WhatsApp Messaging", included: true },
        { name: "24/7 Support", included: true },
        { name: "Premium ID Cards", included: false },
      ],
    },
    {
      name: "Business",
      activationFee: "₹4,999/- (One Time)",
      subscription: "₹ 20  ",
     
      features: [
        {
          name: "Inquiry Management",
          included: true,
          subFeatures: [
            "Inquiry Summary",
            "Inquiry Report Generation",
            "Barcode Inquiry Form",
          ],
        },
        {
          name: "Student Management",
          included: true,
          subFeatures: [
            "Student Records",
            "Class Management",
            "Fees Management",
            "Student Dashboard",
            "ID Card Generation",
            "Fees Report",
            "Dynamic Website",
          ],
        },
        {
          name: "Employee Management",
          included: true,
          subFeatures: [
            "Employee Records",
            "Attendance Tracking",
            "Payroll Management",
            "Leave Tracking",
            "Salary Tracking",
            "Employee Dashboard",
            "Dynamic Memo & Notice",
          ],
        },
        {
          name: "Income/Expense",
          included: true,
          subFeatures: [
            "Expense Tracking",
            "Income Reports",
            "Budget Management",
            "Report Generation",
            "Dynamic Category",
          ],
        },
        { name: "Sub Admin", included: true },
        { name: "Multiple Branches", included: true },
        { name: "Unlimited Entries", included: true },
        { name: "Daily Back-Up", included: true },
        { name: "Cloud Storing", included: true },
        { name: "WhatsApp Messaging", included: true },
        { name: "24/7 Support", included: true },
        { name: "No hidden charges", included: true },
        { name: "Fully customized website", included: true },
        { name: "Premium ID cards", included: true },
        { name: "50k WhatsApp Messages", included: true },
       
   ],
    },
  ];

  // Assigns the plan type to Student plans
  const planType = Student;

  return (
    <div className="plans-container">
      <div className="plans-cards">
        {planType.map((plan, index) => (
          <div className="plan-card" key={index}>
            <h3>{plan.name}</h3>
            <h2 className="price">
              {plan.subscription} <span> / Student / Month</span>
            </h2>
            <button
              className="details-button"
              onClick={() => onCardClick(plan, type)}
            >
              Select Plan
            </button>
            {plan.features && (
              <div className="feature-list">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-item">
                    <div className="feature-content">
                      <span
                        className={
                          feature.included ? "included-feature" : "excluded-feature"
                        }
                      >
                        {feature.included ? "✔" : "✘"} {feature.name}
                      </span>
                      {isExpanded && feature.subFeatures && (
                        <ul className="sub-feature-list">
                          {feature.subFeatures.map((subFeature, subIndex) => (
                            <li key={subIndex}>{subFeature}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
           
          </div>
        ))}
      </div>
      <button className="toggle-details-button" onClick={toggleDetails}>
        {isExpanded ? "Hide All Details" : "View All Details"}
      </button>
    </div>
  );
};

export default Plans;