
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar, Alert, IconButton, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './PopupForm.module.css';
import axios from 'axios';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  organization_email: Yup.string().email('Invalid organization_email format').required('organization_email is required'),
  mobile_no: Yup.string()
    .matches(/^[0-9]{10}$/, 'mobile_no number must be exactly 10 digits')
    .required('mobile_no number is required'),
  services: Yup.string().required('Service selection is required'),
  message: Yup.string().required('Message is required'),
});

const PopupForm = ({ open, onClose }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      organization_email: '',
      mobile_no: '',
      services: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios.post('https://pjsofttech.com:16443/save', values)
        .then((response) => {
          console.log(response.data);
          setOpenSnackbar(true);
          formik.resetForm();
          onClose();
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle error here, possibly show an error Snackbar
        });
    }
    
  });

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose} className={styles.snackbar}>
        <Alert onClose={handleSnackbarClose} severity="success" className={styles.alert}>
          Your form has been submitted successfully!
        </Alert>
      </Snackbar> 
    </>
  );
};

export default PopupForm;

