// ...existing code...
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Scholarship.module.css";

const initial = {
  name: "",
  std: "",
  medium: "",
  schoolName: "",
  dist: "",
  mobNo: "",
  scholarshipExam: "",
  board: "",
};


export default function Schorlarship() {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  // keep message for debugging but no inline render
  const [message, setMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      const t = setTimeout(() => setShowModal(false), 3500);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [showModal]);

      function validate() {
        const e = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!form.std.trim()) e.std = "Class/Std is required";
        if (!form.medium.trim()) e.medium = "Medium is required";
        if (!form.board.trim()) e.board = "Board is required";
        if (!form.scholarshipExam.trim()) e.scholarshipExam = "Scholarship Exam is required";
        if (!form.schoolName.trim()) e.schoolName = "School name is required";
        if (!form.dist.trim()) e.dist = "District is required";
        if (!/^\d{10}$/.test(form.mobNo)) e.mobNo = "Enter a valid 10-digit mobile number";
        return e;
  }

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setMessage(null);
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://pjsofttech.com:16443/createScheme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || res.statusText || "Server error");
      }

      // success
      await res.json().catch(() => null);
      setForm(initial);
      setMessage({ type: "success", text: "Submitted successfully." });
      setShowModal(true); // show popup modal
    } catch (err) {
      setMessage({ type: "error", text: "Submission failed: " + (err.message || "server error") });
      // optionally show error modal in future
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.pageWrap}>
        {/* changed: split layout - left hero, right form */}
        <motion.section
          className={styles.split}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className={styles.hero} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className={styles.heroInner}>
              <div className={styles.badge}>🎓 Scholarship</div>
              <h1 className={styles.heroTitle}>Free Scholorship Registration Form </h1>
              <motion.div
                className={styles.heroAccent}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                aria-hidden
              />
            </div>
          </motion.div>

          <motion.form
            className={styles.formCard}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            noValidate
          >
            <div className={styles.grid}>
              <label className={styles.field}>
                <span className={styles.label}>Full Name *</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? styles.inputError : ""}
                  placeholder="e.g. Rahul Sharma"
                />
                {errors.name && <div className={styles.err}>{errors.name}</div>}
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Mobile Number *</span>
                <input name="mobNo" value={form.mobNo} onChange={handleChange} placeholder="10-digit mobile" />
                {errors.mobNo && <div className={styles.err}>{errors.mobNo}</div>}
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Class / Std *</span>
                <select name="std" value={form.std} onChange={handleChange}>
                  <option value="">Select Class</option>
                  <option value="Nursery">Nursery</option>
                  <option value="KG">KG</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="Other">Other</option>
                </select>
                {errors.std && <div className={styles.err}>{errors.std}</div>}
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Medium *</span>
                <select name="medium" value={form.medium} onChange={handleChange}>
                  <option>Marathi</option>
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Other</option>
                </select>
                  {errors.medium && <div className={styles.err}>{errors.medium}</div>}
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Board *</span>
                <select name="board" value={form.board} onChange={handleChange}>
                  <option>CBSE</option>
                  <option>ICSE</option>
                  <option>State</option>
                  <option>Other</option>
                </select>
                 {errors.board && <div className={styles.err}>{errors.board}</div>}
              </label>

              <label className={styles.field}>
                <span className={styles.label}>School Name *</span>
                <input name="schoolName" value={form.schoolName} onChange={handleChange} placeholder="School name" />
                {errors.schoolName && <div className={styles.err}>{errors.schoolName}</div>}
              </label>

              <label className={styles.field}>
                <span className={styles.label}>District *</span>
                <select name="dist" value={form.dist} onChange={handleChange}>
                  <option value="">Select District</option>
                  <option value="Ahmednagar">Ahmednagar</option>
                  <option value="Akola">Akola</option>
                  <option value="Amravati">Amravati</option>
                  <option value="Aurangabad">Aurangabad</option>
                  <option value="Beed">Beed</option>
                  <option value="Bhandara">Bhandara</option>
                  <option value="Buldhana">Buldhana</option>
                  <option value="Chandrapur">Chandrapur</option>
                  <option value="Dhule">Dhule</option>
                  <option value="Gadchiroli">Gadchiroli</option>
                  <option value="Gondia">Gondia</option>
                  <option value="Hingoli">Hingoli</option>
                  <option value="Jalgaon">Jalgaon</option>
                  <option value="Jalna">Jalna</option>
                  <option value="Kolhapur">Kolhapur</option>
                  <option value="Latur">Latur</option>
                  <option value="Mumbai City">Mumbai City</option>
                  <option value="Mumbai Suburban">Mumbai Suburban</option>
                  <option value="Nagpur">Nagpur</option>
                  <option value="Nanded">Nanded</option>
                  <option value="Nandurbar">Nandurbar</option>
                  <option value="Nashik">Nashik</option>
                  <option value="Osmanabad">Osmanabad</option>
                  <option value="Palghar">Palghar</option>
                  <option value="Parbhani">Parbhani</option>
                  <option value="Pune">Pune</option>
                  <option value="Raigad">Raigad</option>
                  <option value="Ratnagiri">Ratnagiri</option>
                  <option value="Sangli">Sangli</option>
                  <option value="Satara">Satara</option>
                  <option value="Sindhudurg">Sindhudurg</option>
                  <option value="Solapur">Solapur</option>
                  <option value="Thane">Thane</option>
                  <option value="Wardha">Wardha</option>
                  <option value="Washim">Washim</option>
                  <option value="Yavatmal">Yavatmal</option>
                  <option value="Other">Other</option>
                </select>
                {errors.dist && <div className={styles.err}>{errors.dist}</div>}
              </label>



              <label className={styles.field}>
                <span className={styles.label}>Scholarship Exam *</span>
                <select name="scholarshipExam" value={form.scholarshipExam} onChange={handleChange}>
                  <option>NMMS</option>
                  <option>State Scholarship</option>
                  <option>Manthan Exam</option>
                  <option>Olympiad Exam</option>
                  <option>Javahar Navoday Exam</option>
                  <option>Other</option>
                </select>
                 {errors.scholarshipExam && <div className={styles.err}>{errors.scholarshipExam}</div>}
              </label>
            </div>

            <div className={styles.actions}>
              <motion.button type="submit" className={styles.primary} whileTap={{ scale: 0.98 }} disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </motion.button>

              <button
                type="button"
                className={styles.ghost}
                onClick={() => {
                  setForm(initial);
                  setErrors({});
                  setMessage(null);
                  setShowModal(false);
                }}
                disabled={loading}
              >
                Reset
              </button>
            </div>
          </motion.form>
          {/* inline message removed - popup modal is used instead */}
        </motion.section>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.modalBox}
              initial={{ y: 18, scale: 0.96, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 18, scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            > 
              <div className={styles.modalIcon}>✅</div>
              <p>Form submitted successfully — Registration Successful. For More Details Contact 8010457760 </p>
              <button 
                className={styles.modalBtn}
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
