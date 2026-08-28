import React, { useState } from "react";
import "./Plans.css";


const OrganizationPlans = ({ type, onCardClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  const organizationPlans = [
    {
      name: "Basic",
      price: "50",
      //activationFee: "0",
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
        { name: "Fully Customized Website", included: false },
        { name: "Premium ID Cards", included: false },
      ],
    },
    {
      name: "Premium",
      price: "100",
      //activationFee: "2999",
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
      price: "200",
      //activationFee: "4999",
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
        { name: "50k WhatsApp Messeging", included: true },
        { name: "24/7 Support", included: true },
      ],
    },
  ];

  const planType = organizationPlans;

  return (
    <div className="plans-container">
      <div className="plans-cards">
        {planType.map((plan, index) => (
          <div
            className="plan-card"
            key={index}
          >
            <h3>{plan.name}</h3>
            <h2 className="price">
              {plan.price} <span> / Employee / Month</span>
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
                      {isExpanded && feature.subFeatures && (
                        <ul className="sub-feature-list"  style={{ paddingLeft: "30px" }}>
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

export default OrganizationPlans;
