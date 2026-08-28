import React, { useState, useEffect } from "react";
import { useLocation } from "../../router-compat";
import {
  Typography,
  Grid,
  TextField,
  Divider,
  Checkbox,
  FormControlLabel,
  FormControl,
  MenuItem,
  Button,
  InputLabel,
  Box,
} from "@mui/material";
import indianStatesAndDistricts from "../indianStatesAndDistricts";
import "./CreateAccountForm.css";

const CreateAccountForm = () => {
  const { state } = useLocation();
  const [showOptionalFields, setShowOptionalFields] = useState(false);
  const [formData, setFormData] = useState({
    emailaddress: "",
    password: "",
    confirmpassword: "",
    phonenumber: "",
    institutename: "",
    mobilenumber: "",
    websitename: "",
    address: "",
    landmark: "",
    city: "",
    state: "",
    district: "",
    aadhar: "",
    pancard: "",
    country: "India",
    gstNo: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setShowOptionalFields(e.target.checked);
  };

  const validateForm = () => {
    let formErrors = {};

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailaddress)) {
      formErrors.emailaddress = "Invalid email address";
    }

    // Password validation
    if (formData.password !== formData.confirmpassword) {
      formErrors.confirmpassword = "Passwords do not match";
    }

    // Phone number validation
    if (!/^\d{10}$/.test(formData.phonenumber)) {
      formErrors.phonenumber = "Invalid phone number (10 digits required)";
    }

    // PAN number validation
    if (!/^[A-Z]{5}\d{4}[A-Z]{1}$/.test(formData.pancard)) {
      formErrors.pancard = "Invalid PAN number format";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Proceed to the next step (e.g., payment gateway)
      console.log("Form submitted successfully:", formData);
    }
  };

  const states = Object.keys(indianStatesAndDistricts);
  const districts = formData.state
    ? indianStatesAndDistricts[formData.state]
    : [];

  return (
    <div style={{ justifyContent: "center" }}>
      <div
        className="next-page-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "-20px",
        }}
      >
        {/* review your Information */}

        <Box
          border={"1px solid lightgray"}
          padding={"1%"}
          borderRadius={"12px"}
          width={"fit-content"}
          marginRight={"2%"}
        >
          <Typography
            variant="h6"
            textAlign="center"
            color="purple"
            // className="title"
          >
            Essential Credentials for Login
          </Typography>
          <Divider style={{ width: "1%" }} className="divider" />

          <Grid container spacing={1} className="textField-root">
            <Grid item xs={12}>
              <TextField
                label="Owner's Email Address"
                name="emailaddress"
                value={formData.emailaddress}
                onChange={handleChange}
                fullWidth
                required
                error={!!errors.emailaddress}
                helperText={errors.emailaddress}
                InputLabelProps={{ className: "required-asterisk" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                required
                InputLabelProps={{ className: "required-asterisk" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Confirm Password"
                name="confirmpassword"
                type="password"
                value={formData.confirmpassword}
                onChange={handleChange}
                fullWidth
                required
                error={!!errors.confirmpassword}
                helperText={errors.confirmpassword}
                InputLabelProps={{ className: "required-asterisk" }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Basic Information */}

        <Box
          border={"1px solid lightgray"}
          padding={"1%"}
          borderRadius={"12px"}
          width={"fit-content"}
        >
          <Typography
            variant="h6"
            textAlign="center"
            color="purple"
            // className="title"
          >
            Fill The Legal Information
          </Typography>
          <Divider style={{ margin: "20px 0" }} className="divider" />

          <Grid container spacing={2} className="textField-root">
            {/* Additional fields */}
            <Grid item xs={12} sm={4}>
              <TextField
                label="Firm / Institute Name"
                name="institutename"
                value={formData.institutename}
                onChange={handleChange}
                fullWidth
                required
                InputLabelProps={{ className: "required-asterisk" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Website Name"
                name="websitename"
                value={formData.websitename}
                onChange={handleChange}
                fullWidth
                required
                InputLabelProps={{ className: "required-asterisk" }}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                label="Admin Phone Number"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
                fullWidth
                required
                error={!!errors.phonenumber}
                helperText={errors.phonenumber}
                InputLabelProps={{ className: "required-asterisk" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="PAN Number"
                name="pancard"
                value={formData.pancard}
                onChange={handleChange}
                fullWidth
                required
                error={!!errors.pancard}
                helperText={errors.pancard}
                InputLabelProps={{ className: "required-asterisk" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Adhar Number"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleChange}
                fullWidth
                required
                error={!!errors.aadhar}
                helperText={errors.aadhar}
                InputLabelProps={{ className: "required-asterisk" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                fullWidth
                required
              >
                {states.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                label="District"
                name="district"
                value={formData.district}
                onChange={handleChange}
                fullWidth
                required
                disabled={!formData.state}
              >
                {districts.map((district) => (
                  <MenuItem key={district} value={district}>
                    {district}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                fullWidth
                multiline
                required
                InputLabelProps={{ className: "required-asterisk" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                fullWidth
                multiline
                required
                InputLabelProps={{ className: "required-asterisk" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Landmark"
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
                fullWidth
                required
                InputLabelProps={{ className: "required-asterisk" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                fullWidth
                required
                InputLabelProps={{ className: "required-asterisk" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                fullWidth
                required
                InputLabelProps={{ className: "required-asterisk" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="GST No."
                name="gstNo"
                value={formData.gstNo}
                onChange={handleChange}
                fullWidth
                multiline
                required
                InputLabelProps={{ className: "required-asterisk" }}
              />
            </Grid>
          </Grid>
        </Box>
      </div>

      {/* Confirm & Pay Button */}
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "20px", justifyContent: "center" }}
        onClick={handleSubmit}
      >
        Confirm & Pay
      </Button>
    </div>
  );
};

export default CreateAccountForm;

