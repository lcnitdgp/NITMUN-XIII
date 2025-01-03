import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";  
import { AnimatePresence, motion } from "framer-motion";

import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [isForm1, setIsForm1] = useState(true); // State to toggle forms
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [roll, setRoll] = useState("");
  const [year, setYear] = useState("");
  const [hall, setHall] = useState("");
  const [instName, setInstName] = useState("");
  const [institute, setInstitute] = useState("");
  const [committee1, setCommittee1] = useState("");
  const [preference1, setPreference1] = useState("");
  const [committee2, setCommittee2] = useState("");
  const [preference2, setPreference2] = useState("");
  const [committee3, setCommittee3] = useState("");
  const [preference3, setPreference3] = useState("");
  const [experience, setExperience] = useState("");

  const postData = async (e) => {
    e.preventDefault();

    await axios
      .post("https://nitmun-xii-backend.onrender.com/api/register", {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        institute: institute,
        committee1: committee1,
        preference1: preference1,
        committee2: committee2,
        preference2: preference2,
        committee3: committee3,
        preference3: preference3,
        experience: experience,
        year: year,
        roll: roll,
        hall:hall
      })
      .then((res) => {
        console.log(res);
        toast.success("Submitted.", {
          onClose: () => window.location.reload(),
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Please enter correct credentials");
      });
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      phone: "",
      institution: "NIT DURGAPUR",
      committee1: "",
      preference1: "",
      committee2: "",
      preference2: "",
      committee3: "",
      preference3: "",
      experience: "",
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .max(15, "Must atleast be of 15 Characters")
        .required("required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().matches(phoneRegExp, "Phone Number not valid"),
      experience: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className="register-body">
      <div className="toggle-container-btn">
  <h6 className="mb-0 pb-3">
    
   
  </h6>
</div>

<div className="checkbox-wrapper-41">
<span style={{
      fontWeight: 'bold',
      fontSize: '1.5rem',
      color: '#222',
      marginRight: '15px',
      textTransform: 'uppercase',
      letterSpacing: '2px'
    }}>DELEGATION</span>
  <input 
    type="checkbox"
    id="reg-log"
    onChange={() => setIsForm1(!isForm1)} 
  />
    <span style={{
      fontWeight: 'bold',
      fontSize: '1.5rem',
      color: '#222',
      marginLeft: '15px',
      textTransform: 'uppercase',
      letterSpacing: '2px'
    }}>IP</span>
</div>
        <div className="reg-card-wrapper">
          <AnimatePresence>
            <motion.div
              key={isForm1 ? "form1" : "form2"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Form 1 */}
              {isForm1 && (
                <div className="card">
                  <div className="banner">
                    <span className="banner-text">REGISTER</span>
                    <span className="banner-text">JOIN US</span>
                  </div>
                  <h4 className="card__title">DELEGATION</h4>
                  <p className="card__subtitle">Fill the form to complete registration</p>
                  <form className="card__form" onSubmit={postData}>

                    <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">NAME*</p>
                    </div>
                    <input
                      type="text"
                      name="name"
                      className="form-style"
                      placeholder="Your Name"
                      autoComplete="off"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                          {formik.touched.Name && formik.errors.Name ? (
                      <div>{formik.errors.Name}</div>
                    ) : null}
                     </div>
                     <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">EMAIL ID*</p>
                    </div>
                    <input
                      type="email"
                      name="email"
                      className="form-style"
                      placeholder="Your Email"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
                    </div>

                    <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">PHONE NUMBER*</p>
                    </div>
                    <input
                      name="phone"
                      className="form-style"
                      placeholder="Your Phone"
                      autoComplete="off"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                  <div>{formik.errors.phone}</div>
                ) : null}
                    </div>
                    
                    <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">INSTITUTION</p>
                    </div>
                    <select
                      name="institute"
                      className="form-style"
                      value={institute}
                      onChange={(e) => setInstitute(e.target.value)}
                    >
                      <option value="Select option">Select option</option>
                      <option value="NIT Durgapur">NIT Durgapur</option>
                      <option value="Other">Other</option>
                    </select>

                    </div>
                     
                     <div style={
                  institute == "NIT Durgapur"
                    ? { display: "block" }
                    : { display: "none" }
                }>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">ROLL NUMBER*</p>
                    </div>
                    <input
                      className="form-style"
                      placeholder="Roll Number"
                      name="roll"
                      autoComplete="off"
                      value={roll}
                      onChange={(e) => setRoll(e.target.value)}
                    />
                    </div>

                    <div style={
                  institute == "NIT Durgapur"
                    ? { display: "block" }
                    : { display: "none" }
                }>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">YEAR*</p>
                    </div>
                    <select
                      name="year"
                      className="form-style"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    >
                      <option value="">Select Year</option>
                      <option value="1st">1st</option>
                      <option value="2nd">2nd</option>
                      <option value="3rd">3rd</option>
                      <option value="4th">4th</option>
                    </select>
                    </div>

                    <div style={
                  institute == "NIT Durgapur"
                    ? { display: "block" }
                    : { display: "none" }
                }>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">HALL*</p>
                    </div>
                    <select
                      name="hall"
                      className="form-style"
                      value={hall}
                      onChange={(e) => setHall(e.target.value)}
                    >
                      <option value="">Select Hall</option>
                      <option value="Hall 1">Hall 1</option>
                      <option value="Hall 2">Hall 2</option>
                      <option value="Hall 3">Hall 3</option>
                    </select>
                    </div>

                    <div style={
                  institute != "NIT Durgapur"
                    ? { display: "block" }
                    : { display: "none" }
                }>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">COLLEGE NAME*</p>
                    </div>
                    <input
                      type="text"
                      name="name"
                      className="form-style"
                      placeholder="Your Name"
                      autoComplete="off"
                      value={instName}
                      onChange={(e) => setInstName(e.target.value)}
                    />
                     </div>

                     <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">committee1</p>
                    </div>
                    <select
                      name="institute"
                      className="form-style"
                      value={committee1}
                      onChange={(e) => setCommittee1(e.target.value)}
                    >
                      <option value="Select option">Select option</option>
                      <option value="NIT Durgapur">UNSC</option>
                      <option value="Other">UNODC</option>
                      <option value="Other">AIPPM</option>
                    </select>

                    </div>

                    <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">preference1</p>
                    </div>
                    <select
                      name="institute"
                      className="form-style"
                      value={preference1}
                      onChange={(e) => setPreference1(e.target.value)}
                    >
                      <option value="Select option">Select option</option>
                      <option value="NIT Durgapur">IND</option>
                      <option value="Other">CHN</option>
                      <option value="Other">US</option>
                    </select>

                    </div>

                    <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">committee2</p>
                    </div>
                    <select
                      name="institute"
                      className="form-style"
                      value={committee2}
                      onChange={(e) => setCommittee2(e.target.value)}
                    >
                      <option value="Select option">Select option</option>
                      <option value="NIT Durgapur">UNSC</option>
                      <option value="Other">UNODC</option>
                      <option value="Other">AIPPM</option>
                    </select>

                    </div>

                    <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">preference2</p>
                    </div>
                    <select
                      name="institute"
                      className="form-style"
                      value={preference2}
                      onChange={(e) => setPreference2(e.target.value)}
                    >
                      <option value="Select option">Select option</option>
                      <option value="NIT Durgapur">IND</option>
                      <option value="Other">CHN</option>
                      <option value="Other">US</option>
                    </select>

                    </div>

                    <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">committee3</p>
                    </div>
                    <select
                      name="institute"
                      className="form-style"
                      value={committee3}
                      onChange={(e) => setCommittee3(e.target.value)}
                    >
                      <option value="Select option">Select option</option>
                      <option value="NIT Durgapur">UNSC</option>
                      <option value="Other">UNODC</option>
                      <option value="Other">AIPPM</option>
                    </select>

                    </div>

                    <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">preference3</p>
                    </div>
                    <select
                      name="institute"
                      className="form-style"
                      value={preference3}
                      onChange={(e) => setPreference3(e.target.value)}
                    >
                      <option value="Select option">Select option</option>
                      <option value="NIT Durgapur">IND</option>
                      <option value="Other">CHN</option>
                      <option value="Other">US</option>
                    </select>

                    </div>

                    <button className="sign-up" type="submit">Submit</button>
                  </form>
                </div>

                


              )}

              {/* Form 2 */}
              {!isForm1 && (
                <div className="card">
                  <div className="banner">
                    <span className="banner-text">REGISTER</span>
                    <span className="banner-text">JOIN US</span>
                  </div>
                  <h4 className="card__title">IP</h4>
                  <p className="card__subtitle">Fill the form to complete registration</p>
                  <form className="card__form" onSubmit={postData}>

                    <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">NAME*</p>
                    </div>
                    <input
                      type="text"
                      name="name"
                      className="form-style"
                      placeholder="Your Name"
                      autoComplete="off"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                          {formik.touched.Name && formik.errors.Name ? (
                      <div>{formik.errors.Name}</div>
                    ) : null}
                     </div>
                     <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">EMAIL ID*</p>
                    </div>
                    <input
                      type="email"
                      name="email"
                      className="form-style"
                      placeholder="Your Email"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
                    </div>

                    <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">PHONE NUMBER*</p>
                    </div>
                    <input
                      name="phone"
                      className="form-style"
                      placeholder="Your Phone"
                      autoComplete="off"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                  <div>{formik.errors.phone}</div>
                ) : null}
                    </div>
                    
                    <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">INSTITUTION</p>
                    </div>
                    <select
                      name="institute"
                      className="form-style"
                      value={institute}
                      onChange={(e) => setInstitute(e.target.value)}
                    >
                      <option value="Select option">Select option</option>
                      <option value="NIT Durgapur">NIT Durgapur</option>
                      <option value="Other">Other</option>
                    </select>

                    </div>
                     
                     <div style={
                  institute == "NIT Durgapur"
                    ? { display: "block" }
                    : { display: "none" }
                }>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">ROLL NUMBER*</p>
                    </div>
                    <input
                      className="form-style"
                      placeholder="Roll Number"
                      name="roll"
                      autoComplete="off"
                      value={roll}
                      onChange={(e) => setRoll(e.target.value)}
                    />
                    </div>

                    <div style={
                  institute == "NIT Durgapur"
                    ? { display: "block" }
                    : { display: "none" }
                }>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">YEAR*</p>
                    </div>
                    <select
                      name="year"
                      className="form-style"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    >
                      <option value="">Select Year</option>
                      <option value="1st">1st</option>
                      <option value="2nd">2nd</option>
                      <option value="3rd">3rd</option>
                      <option value="4th">4th</option>
                    </select>
                    </div>

                    <div style={
                  institute == "NIT Durgapur"
                    ? { display: "block" }
                    : { display: "none" }
                }>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">HALL*</p>
                    </div>
                    <select
                      name="hall"
                      className="form-style"
                      value={hall}
                      onChange={(e) => setHall(e.target.value)}
                    >
                      <option value="">Select Hall</option>
                      <option value="Hall 1">Hall 1</option>
                      <option value="Hall 2">Hall 2</option>
                      <option value="Hall 3">Hall 3</option>
                    </select>
                    </div>

                    <div style={
                  institute != "NIT Durgapur"
                    ? { display: "block" }
                    : { display: "none" }
                }>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">COLLEGE NAME*</p>
                    </div>
                    <input
                      type="text"
                      name="name"
                      className="form-style"
                      placeholder="Your Name"
                      autoComplete="off"
                      value={instName}
                      onChange={(e) => setInstName(e.target.value)}
                    />
                     </div>

                     <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">committee1</p>
                    </div>
                    <select
                      name="institute"
                      className="form-style"
                      value={committee1}
                      onChange={(e) => setCommittee1(e.target.value)}
                    >
                      <option value="Select option">Select option</option>
                      <option value="NIT Durgapur">UNSC</option>
                      <option value="Other">UNODC</option>
                      <option value="Other">AIPPM</option>
                    </select>

                    </div>

                    <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">preference1</p>
                    </div>
                    <select
                      name="institute"
                      className="form-style"
                      value={preference1}
                      onChange={(e) => setPreference1(e.target.value)}
                    >
                      <option value="Select option">Select option</option>
                      <option value="NIT Durgapur">Reuters</option>
                      <option value="Other">WION</option>
                      <option value="Other">Bloomberg</option>
                    </select>

                    </div>

                    <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">committee2</p>
                    </div>
                    <select
                      name="institute"
                      className="form-style"
                      value={committee2}
                      onChange={(e) => setCommittee2(e.target.value)}
                    >
                      <option value="Select option">Select option</option>
                      <option value="NIT Durgapur">UNSC</option>
                      <option value="Other">UNODC</option>
                      <option value="Other">AIPPM</option>
                    </select>

                    </div>

                    <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">preference2</p>
                    </div>
                    <select
                      name="institute"
                      className="form-style"
                      value={preference2}
                      onChange={(e) => setPreference2(e.target.value)}
                    >
                      <option value="Select option">Select option</option>
                      <option value="NIT Durgapur">Reuters</option>
                      <option value="Other">WION</option>
                      <option value="Other">Bloomberg</option>
                    </select>

                    </div>

                    <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">committee3</p>
                    </div>
                    <select
                      name="institute"
                      className="form-style"
                      value={committee3}
                      onChange={(e) => setCommittee3(e.target.value)}
                    >
                      <option value="Select option">Select option</option>
                      <option value="NIT Durgapur">UNSC</option>
                      <option value="Other">UNODC</option>
                      <option value="Other">AIPPM</option>
                    </select>

                    </div>

                    <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">preference3</p>
                    </div>
                    <select
                      name="institute"
                      className="form-style"
                      value={preference3}
                      onChange={(e) => setPreference3(e.target.value)}
                    >
                      <option value="Select option">Select option</option>
                      <option value="NIT Durgapur">Reuters</option>
                      <option value="Other">WION</option>
                      <option value="Other">Bloomberg</option>
                    </select>

                    </div>

                    <button className="sign-up" type="submit">Submit</button>
                  </form>
                </div>




              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Register;
