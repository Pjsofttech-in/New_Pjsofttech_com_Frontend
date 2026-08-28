import React, { useState } from "react";
import "./Plans.css";

const InstituteOrgPlan = ({ type, onCardClick }) => {
  const InstituteOrgPlan = [
    {
      name: "Basic",
      price: "2000",
      //originalPrice: "999",
      features: [
        {
          name: "Inquiry Management",
          included: true,
          subFeatures: [
            "Inquiry Summery",
            "Inquiry Report Generation",
            "Barcode Inquiry Form",
          ],
        },
        {
          name: "Admission Management",
          included: true,
          subFeatures: [
            "Admission Summery",
            "Admission Report Generation",
            "Revenue management",
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
        { name: "10k WhatsApp Messeging", included: true },
        { name: "24/7 Support", included: true },
        { name: "Fully Customized Websites", included: false },
        { name: "Premium ID Cards", included: false },

      ],
    },
    {
      name: "Premium",
      price: "3000",
      //originalPrice: "1935",
      features: [
        {
          name: "Inquiry Management",
          included: true,
          subFeatures: [
            "Inquiry Summery",
            "Inquiry Report Generation",
            "Barcode Inquiry Form",
          ],
        },
        {
          name: "Admission Management",
          included: true,
          subFeatures: [
            "Admission Summery",
            "Admission Report Generation",
            "Revenue management",
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
        { name: "Unlimited Entries", included: true },
        { name: "Daily Back-Up", included: true },
        { name: "Cloud Storing", included: true },
        { name: "30k WhatsApp Messeging", included: true },
        { name: "24/7 Support", included: true },
        { name: "Premium ID Cards", included: false },
      ],
    },
    {
      name: "Business",
      price: "5000",
      //originalPrice: "2435",
      features: [
        {
          name: "Inquiry Management",
          included: true,
          subFeatures: [
            "Inquiry Summery",
            "Inquiry Report Generation",
            "Barcode Inquiry Form",
          ],
        },
        {
          name: "Admission Management",
          included: true,
          subFeatures: [
            "Admission Summery",
            "Admission Report Generation",
            "Revenue management",
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
        { name: "50k WhatsApp Messeging", included: true},
        { name: "24/7 Support", included: true },
       
      ],
    },
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  const planType = InstituteOrgPlan;

  return (
    <div className="plans-container">
      <div className="plans-cards">
        {planType.map((plan, index) => (
          <div
            key={index}
            className="plan-card"
            // onClick={() => onCardClick(plan, type)}
          >
            <h3>{plan.name}</h3>
            <h4 className="price">₹{plan.price} / Month</h4>
            <button
              className="details-button"
              onClick={() => onCardClick(plan, type)}
            >
             Select Plan
            </button>
            <div className="feature-list">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="feature-item">
                  <div className="feature-content">
                  <span
                        className={`${
                          feature.included ? "included-feature" : "excluded-feature"
                        }`}
                      >
                        {feature.included ? (
                          <span className="dash-icon">✔</span>
                        ) : (
                          <span className="dash-icon">✘</span>
                        )}
                        {feature.name}
                      </span>
                   
                  </div>
                
                  {isExpanded && feature.subFeatures && (
                    <ul className="sub-feature-list" style={{ paddingLeft: "30px" }}>
                      {feature.subFeatures.map((subFeature, idx) => (
                        <li key={idx} className="sub-feature-item">
                          {subFeature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="toggle-details-button" onClick={toggleDetails}>
        {isExpanded ? "Show Less" : "View All Features"}
      </button>
    </div>
  );
};

export default InstituteOrgPlan;