import React, { useState } from "react";
import { useNavigate, useLocation } from "../../router-compat";
import "./PlanInfo.css";
import {
  MenuItem,
  FormControl,
  TextField,
  Grid,
  Divider,
  Checkbox,
  FormControlLabel,
  Paper,
} from "@mui/material";
import numToWords from "num-to-words";

const PlanInfo = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { plan, section } = state;

  const [years, setYears] = useState(1);
  const [range, setRange] = useState("200"); // Default value for student/employee range
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const gstRate = 0.18;
  const addOnPrice = 500; // Price for each add-on

  const ranges = (() => {
    switch (section.toLowerCase()) {
      case "school / college":
        return ["200", "500", "800", "1000+"];
      case "organization / company":
        return ["50", "150", "250", "400+"];
      default:
        return ["50", "150", "250", "400+"]; // Default to a safe range
    }
  })();

  const calculatePrice = () => {
    let basePrice;

    if (section === "Institute / Academy") {
      switch (plan.name) {
               case "Basic":
          basePrice = 6999;
          break;
        case "Premium":
          basePrice = 1299;
          break;
        case "Business":
          basePrice = 1699;
          break;
        default:
          basePrice = 1; // Default for unknown plans
      }
    } else if (section === "School / College") {
     
    } else {
      basePrice = 1; // Default for other sections
    }

    const count = parseInt(
      range === "1000+" || range === "200+" ? 1000 : range,
      10
    );
    const yearlyPrice =
      section === "Institute / Academy"
        ? basePrice * 12 * years
        : basePrice * count * 12 * years;

    const addOnsTotal = selectedAddOns.length * addOnPrice;
    const gstAmount = (yearlyPrice + addOnsTotal) * gstRate;
    const total = yearlyPrice + addOnsTotal + gstAmount;

    return { basePrice, yearlyPrice, addOnsTotal, gstAmount, total };
  };

  const handleYearChange = (change) =>
    setYears((prev) => Math.max(1, prev + change));

  const handleRangeChange = (event) => setRange(event.target.value);

  const handleAddOnToggle = (addOn) => {
    setSelectedAddOns((prev) =>
      prev.includes(addOn)
        ? prev.filter((item) => item !== addOn)
        : [...prev, addOn]
    );
  };

  const { basePrice, yearlyPrice, addOnsTotal, gstAmount, total } =
    calculatePrice();

  return (
    <div className="plan-info-container">
      <div className="plan-content-wide">
        {/* Left Side: Features */}
        <div className="features-container">
          <h2>
            {section} Plan ({plan.name})
          </h2>
          <div className="features-grid">
            {plan.features.map((feature, index) => (
              <div key={index} className="feature-item">
                {feature.name}
              </div>
            ))}
          </div>
          <div className="back-button-container">
            <button onClick={() => navigate(-1)} className="back-button">
              Back To Plans
            </button>
          </div>
        </div>
        {/* Centered Back Button */}

        {/* Right Side: Price Breakdown */}
        <div className="price-details">
          <h2>Price Breakdown</h2>
          <Grid container spacing={2}>
            {/* Render Range Selector only for certain sections */}
            {section !== "Institute / Academy" && (
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className="range-selector"
                >
                  <TextField
                    select
                    value={range}
                    className="textField-root"
                    onChange={handleRangeChange}
                    size="small"
                    label={
                      section.toLowerCase() === "school / college"
                        ? "Student Range"
                        : "Employee Range"
                    }
                  >
                    {ranges.map((option, index) => (
                      <MenuItem key={index} value={option}>
                        Upto {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </Grid>
            )}

            {/* Year Adjustment */}
            <Grid item xs={12} sm={section !== "Institute / Academy" ? 6 : 12}>
              <div className="year-adjustment">
                <button onClick={() => handleYearChange(-1)}>-</button>
                <span>{years} year(s)</span>
                <button onClick={() => handleYearChange(1)}>+</button>
              </div>
            </Grid>
          </Grid>

          <Divider style={{ margin: "16px 0", border: "2px solid black" }} />

          {/* Payment Details */}
          <div className="payment-details">
            <ul>
              {plan.originalPrice && (
                <li className="original-price">
                  Original Price: <s>â‚¹{plan.originalPrice}</s>
                </li>
              )}
              {/* {plan.price && (
                <li>
                  Current Price: <strong>â‚¹{plan.price}</strong>
                </li>
              )} */}
              <li>
                Base Price: <strong>â‚¹{basePrice.toFixed(2)} / Month</strong>
              </li>
              <li>
                Total Year(s)<strong>{years} Year(s)</strong>{" "}
              </li>
              {section !== "Institute / Academy" && (
                <li>
                  Range Count:<strong>Upto {range}</strong>
                </li>
              )}

              {/* Add-ons Section */}
              {/* Add-ons Section */}
              <div className="add-ons">
                <Paper
                  elevation={3}
                  style={{
                    padding: "20px",
                    marginTop: "20px",
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  <h3>Optional Add-Ons (â‚¹500 each)</h3>
                  <div className="add-ons-grid">
                    {["Ebook", "Payroll", "Shipment", "Project Management"].map(
                      (addOn, index) => (
                        <div key={index} className="add-ons-item">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedAddOns.includes(addOn)}
                                onChange={() => handleAddOnToggle(addOn)}
                              />
                            }
                            label={addOn}
                          />
                        </div>
                      )
                    )}
                  </div>
                </Paper>
              </div>

              <li>
                Add-Ons Total: <strong>â‚¹{addOnsTotal.toFixed(2)}</strong>
              </li>
              <li>
                Total Price (Excluding GST):
                <strong> â‚¹{yearlyPrice.toFixed(2)}</strong>
              </li>
              <li>
                GST (18%):<strong> â‚¹{gstAmount.toFixed(2)}</strong>
              </li>

              <Divider
                style={{ margin: "16px 0", border: "2px solid black" }}
              />
              <li>
                Total Payable Amount (Including GST):{" "}
                <strong>â‚¹{total.toFixed(2)}</strong>
              </li>
              <li>
                Total in Words: <strong>{numToWords(total)} rupees only</strong>
              </li>
            </ul>
          </div>
          <div className="back-button-container">
            <button
              onClick={() =>
                navigate("/next-page", {
                  state: {
                    total,
                    selectedAddOns,
                    range,
                    years,
                    basePrice,
                    section,
                    planName: plan.name,
                  },
                })
              }
              className="back-button"
            >
              Continue To Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanInfo;

