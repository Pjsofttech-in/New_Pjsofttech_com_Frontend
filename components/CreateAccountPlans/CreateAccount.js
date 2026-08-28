import React, { useState } from "react";
import OrganizationPlans from "./OrganizationPlans"; 
import InstituteOrgPlan from "./InstituteOrgPlan"; 
import { AppBar, Toolbar, Grid, IconButton, Typography } from "@mui/material";
import { useNavigate } from "../../router-compat";
import { Login as LoginIcon } from "@mui/icons-material";
import logo from "../../components/images/logo.jpg";
import Plans from "./Plans"
import "./CreateAccount.css"

const CreateAccount = () => {
  const [activeTab, setActiveTab] = useState("School / College");
  const navigate = useNavigate();

  // Handle card click to navigate to the plan details page
  const handleCardClick = (plan, section) => {
    navigate("/plan-details", { state: { plan, section } });
  };

  const buttonLabels = [
    { id: "School / College", label: "School / College" },
    { id: "Organization / Company", label: "Organization / Company" },
    { id: "Institute / Academy", label: "Institute / Academy" },
  ];

  return (
    <>
      <div className="create-account" style={{ paddingTop: "70px" }}>
        <div className="button-group-toggle">
          {buttonLabels.map((button) => (
            <button
              key={button.id}
              className={activeTab === button.id ? "active" : ""}
              onClick={() => setActiveTab(button.id)}
            >
              {button.label}
            
            </button>
          
          ))}
        </div>
        <h2><b>Select plan To Continue</b></h2>

        {/* Conditionally render sections based on activeTab */}
        {activeTab === "School / College" && (
          <Plans  onCardClick={(plan) => handleCardClick(plan, "School / College")} />
        )}
        {activeTab === "Organization / Company" && (
          <OrganizationPlans onCardClick={(plan) => handleCardClick(plan, "Organization / Company")} />
        )}
        {activeTab === "Institute / Academy" && (
          <InstituteOrgPlan onCardClick={(plan) => handleCardClick(plan, "Institute / Academy")} />
        )}
      </div>
    </>
  );
};

export default CreateAccount;

