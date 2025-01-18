// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import axios from "axios";
// import { useFormik } from "formik";
// import * as Yup from "yup";  
// import { AnimatePresence, motion } from "framer-motion";

// import "react-toastify/dist/ReactToastify.css";

// function Register() {
//   const [isForm1, setIsForm1] = useState(true); // State to toggle forms
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [roll, setRoll] = useState("");
//   const [year, setYear] = useState("");
//   const [hall, setHall] = useState("");
//   const [instName, setInstName] = useState("");
//   const [institute, setInstitute] = useState("");
//   const [committee1, setCommittee1] = useState("");
//   const [preference1, setPreference1] = useState("");
//   const [committee2, setCommittee2] = useState("");
//   const [preference2, setPreference2] = useState("");
//   const [committee3, setCommittee3] = useState("");
//   const [preference3, setPreference3] = useState("");
//   const [experience, setExperience] = useState("");

//   const postData = async (e) => {
//     e.preventDefault();

//     await axios
//       .post("https://nitmun-xiii-backend.onrender.com/api/register", {
//         name: name,
//         email: email,
//         phoneNumber: phoneNumber,
//         institute: institute,
//         committee1: committee1,
//         preference1: preference1,
//         committee2: committee2,
//         preference2: preference2,
//         committee3: committee3,
//         preference3: preference3,
//         experience: experience,
//         year: year,
//         roll: roll,
//         hall:hall
//       })
//       .then((res) => {
//         console.log(res);
//         toast.success("Submitted.", {
//           onClose: () => window.location.reload(),
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("Please enter correct credentials");
//       });
//   };

//   const phoneRegExp =
//     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

//   const formik = useFormik({
//     initialValues: {
//       Name: "",
//       email: "",
//       phone: "",
//       institution: "NIT DURGAPUR",
//       committee1: "",
//       preference1: "",
//       committee2: "",
//       preference2: "",
//       committee3: "",
//       preference3: "",
//       experience: "",
//     },
//     validationSchema: Yup.object({
//       Name: Yup.string()
//         .max(15, "Must atleast be of 15 Characters")
//         .required("required"),
//       email: Yup.string().email("Invalid email address").required("Required"),
//       phone: Yup.string().matches(phoneRegExp, "Phone Number not valid"),
//       experience: Yup.string().required("Required"),
//     }),
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   }); 

//   return (
//     <>
//       <div className="register-body">
//       <div className="toggle-container-btn">
//   <h6 className="mb-0 pb-3">
    
   
//   </h6>
// </div>

// <div className="checkbox-wrapper-41">
// <span style={{
//       fontWeight: 'bold',
//       fontSize: '1.5rem',
//       color: '#fde881',
//       marginRight: '15px',
//       textTransform: 'uppercase',
//       letterSpacing: '2px',
//     }}>DELEGATION</span>
//   <input 
//     type="checkbox"
//     id="reg-log"
//     onChange={() => setIsForm1(!isForm1)} 
//   />
//     <span style={{
//       fontWeight: 'bold',
//       fontSize: '1.5rem',
//       color: '#fde881',
//       marginLeft: '15px',
//       textTransform: 'uppercase',
//       letterSpacing: '2px',
//     }}>IP</span>
// </div>
//         <div className="reg-card-wrapper">
//           <AnimatePresence>
//             <motion.div
//               key={isForm1 ? "form1" : "form2"}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               {/* Form 1 */}
//               {isForm1 && (
//                 <div className="card">
//                   <div className="banner">
//                     <span className="banner-text">REGISTER</span>
//                     <span className="banner-text">JOIN US</span>
//                   </div>
//                   <h4 className="card__title">DELEGATION</h4>
//                   <p className="card__subtitle">Fill the form to complete registration</p>
//                   <form className="card__form" onSubmit={postData}>

//                     <div>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">NAME*</p>
//                     </div>
//                     <input
//                       type="text"
//                       name="name"
//                       className="form-style"
//                       placeholder="Your Name"
//                       autoComplete="off"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                     />
//                           {formik.touched.Name && formik.errors.Name ? (
//                       <div>{formik.errors.Name}</div>
//                     ) : null}
//                      </div>
//                      <div>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">EMAIL ID*</p>
//                     </div>
//                     <input
//                       type="email"
//                       name="email"
//                       className="form-style"
//                       placeholder="Your Email"
//                       autoComplete="off"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                     {formik.touched.email && formik.errors.email ? (
//                   <div>{formik.errors.email}</div>
//                 ) : null}
//                     </div>

//                     <div>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">PHONE NUMBER*</p>
//                     </div>
//                     <input
//                       name="phone"
//                       className="form-style"
//                       placeholder="Your Phone"
//                       autoComplete="off"
//                       value={phoneNumber}
//                       onChange={(e) => setPhoneNumber(e.target.value)}
//                     />
//                     {formik.touched.phone && formik.errors.phone ? (
//                   <div>{formik.errors.phone}</div>
//                 ) : null}
//                     </div>
                    
//                     <div>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">INSTITUTION</p>
//                     </div>
//                     <select
//                       name="institute"
//                       className="form-style"
//                       value={institute}
//                       onChange={(e) => setInstitute(e.target.value)}
//                     >
//                       <option value="Select option">Select option</option>
//                       <option value="NIT Durgapur">NIT Durgapur</option>
//                       <option value="Other">Other</option>
//                     </select>

//                     </div>
                     
//                      <div style={
//                   institute == "NIT Durgapur"
//                     ? { display: "block" }
//                     : { display: "none" }
//                 }>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">ROLL NUMBER*</p>
//                     </div>
//                     <input
//                       className="form-style"
//                       placeholder="Roll Number"
//                       name="roll"
//                       autoComplete="off"
//                       value={roll}
//                       onChange={(e) => setRoll(e.target.value)}
//                     />
//                     </div>

//                     <div style={
//                   institute == "NIT Durgapur"
//                     ? { display: "block" }
//                     : { display: "none" }
//                 }>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">YEAR*</p>
//                     </div>
//                     <select
//                       name="year"
//                       className="form-style"
//                       value={year}
//                       onChange={(e) => setYear(e.target.value)}
//                     >
//                       <option value="">Select Year</option>
//                       <option value="1st">1st</option>
//                       <option value="2nd">2nd</option>
//                       <option value="3rd">3rd</option>
//                       <option value="4th">4th</option>
//                     </select>
//                     </div>

//                     <div style={
//                   institute == "NIT Durgapur"
//                     ? { display: "block" }
//                     : { display: "none" }
//                 }>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">HALL*</p>
//                     </div>
//                     <select
//                       name="hall"
//                       className="form-style"
//                       value={hall}
//                       onChange={(e) => setHall(e.target.value)}
//                     >
//                       <option value="">Select Hall</option>
//                       <option value="Hall 1">Hall 1</option>
//                       <option value="Hall 2">Hall 2</option>
//                       <option value="Hall 3">Hall 3</option>
//                       <option value="Hall 4">Hall 4</option>
//                       <option value="Hall 5">Hall 5</option>
//                       <option value="Hall 6">Hall 6</option>
//                       <option value="Hall 7">Hall 7</option>
//                       <option value="Hall 8">Hall 8</option>
//                       <option value="Hall 9">Hall 9</option>
//                       <option value="Hall 10">Hall 10</option>
//                       <option value="Hall 11">Hall 11</option>
//                       <option value="Hall 12">Hall 12</option>
//                       <option value="Hall 13">Hall 13</option>
//                       <option value="Hall 14">Hall 14</option>
//                     </select>
//                     </div>

//                     <div style={
//                   institute != "NIT Durgapur"
//                     ? { display: "block" }
//                     : { display: "none" }
//                 }>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">COLLEGE NAME*</p>
//                     </div>
//                     <input
//                       type="text"
//                       name="name"
//                       className="form-style"
//                       placeholder="Your Name"
//                       autoComplete="off"
//                       value={instName}
//                       onChange={(e) => setInstName(e.target.value)}
//                     />
//                      </div>

//                      <div>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">committee1</p>
//                     </div>
//                     <select
//                       name="institute"
//                       className="form-style"
//                       value={committee1}
//                       onChange={(e) => setCommittee1(e.target.value)}
//                     >
//                       <option value="Select option">Select option</option>
//                       <option value="NIT Durgapur">UNSC</option>
//                       <option value="Other">UNODC</option>
//                       <option value="Other">AIPPM</option>
//                     </select>

//                     </div>

//                     <div>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">preference1</p>
//                     </div>
//                     <select
//                       name="institute"
//                       className="form-style"
//                       value={preference1}
//                       onChange={(e) => setPreference1(e.target.value)}
//                     >
//                       <option value="Select option">Select option</option>
//                       <option value="NIT Durgapur">IND</option>  
//                       <option value="Other">CHN</option>
//                       <option value="Other">US</option>
//                     </select>

//                     </div>

//                     <div>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">committee2</p>
//                     </div>
//                     <select
//                       name="institute"
//                       className="form-style"
//                       value={committee2}
//                       onChange={(e) => setCommittee2(e.target.value)}
//                     >
//                       <option value="Select option">Select option</option>
//                       <option value="NIT Durgapur">UNSC</option>
//                       <option value="Other">UNODC</option>
//                       <option value="Other">AIPPM</option>
//                     </select>

//                     </div>

//                     <div>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">preference2</p>
//                     </div>
//                     <select
//                       name="institute"
//                       className="form-style"
//                       value={preference2}
//                       onChange={(e) => setPreference2(e.target.value)}
//                     >
//                       <option value="Select option">Select option</option>
//                       <option value="NIT Durgapur">IND</option>
//                       <option value="Other">CHN</option>
//                       <option value="Other">US</option>
//                     </select>

//                     </div>

//                     <div>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">committee3</p>
//                     </div>
//                     <select
//                       name="institute"
//                       className="form-style"
//                       value={committee3}
//                       onChange={(e) => setCommittee3(e.target.value)}
//                     >
//                       <option value="Select option">Select option</option>
//                       <option value="NIT Durgapur">UNSC</option>
//                       <option value="Other">UNODC</option>
//                       <option value="Other">AIPPM</option>
//                     </select>

//                     </div>

//                     <div>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">preference3</p>
//                     </div>
//                     <select
//                       name="institute"
//                       className="form-style"
//                       value={preference3}
//                       onChange={(e) => setPreference3(e.target.value)}
//                     >

// /*value in quotes should be same as the value in the option tag*/

//                       <option value="Select option">Select option</option>  
//                       <option value="NIT Durgapur">IND</option>
//                       <option value="Other">CHN</option>
//                       <option value="Other">US</option>
//                     </select>

//                     </div>

//                     <button className="sign-up" type="submit">Submit</button>
//                   </form>
//                 </div>

                


//               )}

//               {/* Form 2 */}
//               {!isForm1 && (
//                 <div className="card">
//                   <div className="banner">
//                     <span className="banner-text">REGISTER</span>
//                     <span className="banner-text">JOIN US</span>
//                   </div>
//                   <h4 className="card__title">IP</h4>
//                   <p className="card__subtitle">Fill the form to complete registration</p>
//                   <form className="card__form" onSubmit={postData}>

//                     <div>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">NAME*</p>
//                     </div>
//                     <input
//                       type="text"
//                       name="name"
//                       className="form-style"
//                       placeholder="Your Name"
//                       autoComplete="off"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                     />
//                           {formik.touched.Name && formik.errors.Name ? (
//                       <div>{formik.errors.Name}</div>
//                     ) : null}
//                      </div>
//                      <div>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">EMAIL ID*</p>
//                     </div>
//                     <input
//                       type="email"
//                       name="email"
//                       className="form-style"
//                       placeholder="Your Email"
//                       autoComplete="off"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                     {formik.touched.email && formik.errors.email ? (
//                   <div>{formik.errors.email}</div>
//                 ) : null}
//                     </div>

//                     <div>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">PHONE NUMBER*</p>
//                     </div>
//                     <input
//                       name="phone"
//                       className="form-style"
//                       placeholder="Your Phone"
//                       autoComplete="off"
//                       value={phoneNumber}
//                       onChange={(e) => setPhoneNumber(e.target.value)}
//                     />
//                     {formik.touched.phone && formik.errors.phone ? (
//                   <div>{formik.errors.phone}</div>
//                 ) : null}
//                     </div>
                    
//                     <div>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">INSTITUTION</p>
//                     </div>
//                     <select
//                       name="institute"
//                       className="form-style"
//                       value={institute}
//                       onChange={(e) => setInstitute(e.target.value)}
//                     >
//                       <option value="Select option">Select option</option>
//                       <option value="NIT Durgapur">NIT Durgapur</option>
//                       <option value="Other">Other</option>
//                     </select>

//                     </div>
                     
//                      <div style={
//                   institute == "NIT Durgapur"
//                     ? { display: "block" }
//                     : { display: "none" }
//                 }>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">ROLL NUMBER*</p>
//                     </div>
//                     <input
//                       className="form-style"
//                       placeholder="Roll Number"
//                       name="roll"
//                       autoComplete="off"
//                       value={roll}
//                       onChange={(e) => setRoll(e.target.value)}
//                     />
//                     </div>

//                     <div style={
//                   institute == "NIT Durgapur"
//                     ? { display: "block" }
//                     : { display: "none" }
//                 }>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">YEAR*</p>
//                     </div>
//                     <select
//                       name="year"
//                       className="form-style"
//                       value={year}
//                       onChange={(e) => setYear(e.target.value)}
//                     >
//                       <option value="">Select Year</option>
//                       <option value="1st">1st</option>
//                       <option value="2nd">2nd</option>
//                       <option value="3rd">3rd</option>
//                       <option value="4th">4th</option>
//                     </select>
//                     </div>

//                     <div style={
//                   institute == "NIT Durgapur"
//                     ? { display: "block" }
//                     : { display: "none" }
//                 }>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">HALL*</p>
//                     </div>
//                     <select
//                       name="hall"
//                       className="form-style"
//                       value={hall}
//                       onChange={(e) => setHall(e.target.value)}
//                     >
//                       <option value="">Select Hall</option>
//                       <option value="Hall 1">Hall 1</option>
//                       <option value="Hall 2">Hall 2</option>
//                       <option value="Hall 3">Hall 3</option>
//                       <option value="Hall 4">Hall 4</option>
//                       <option value="Hall 5">Hall 5</option>
//                       <option value="Hall 6">Hall 6</option>
//                       <option value="Hall 7">Hall 7</option>
//                       <option value="Hall 8">Hall 8</option>
//                       <option value="Hall 9">Hall 9</option>
//                       <option value="Hall 10">Hall 10</option>
//                       <option value="Hall 11">Hall 11</option>
//                       <option value="Hall 12">Hall 12</option>
//                       <option value="Hall 13">Hall 13</option>
//                       <option value="Hall 14">Hall 14</option>
//                     </select>
//                     </div>

//                     <div style={
//                   institute != "NIT Durgapur"
//                     ? { display: "block" }
//                     : { display: "none" }
//                 }>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">COLLEGE NAME*</p>
//                     </div>
//                     <input
//                       type="text"
//                       name="name"
//                       className="form-style"
//                       placeholder="Your Name"
//                       autoComplete="off"
//                       value={instName}
//                       onChange={(e) => setInstName(e.target.value)}
//                     />
//                      </div>

//                      <div>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">committee1</p>
//                     </div>
//                     <select
//                       name="institute"
//                       className="form-style"
//                       value={committee1}
//                       onChange={(e) => setCommittee1(e.target.value)}
//                     >
//                       <option value="Select option">Select option</option>
//                       <option value="NIT Durgapur">UNSC</option>
//                       <option value="Other">UNODC</option>
//                       <option value="Other">AIPPM</option>
//                     </select>

//                     </div>

//                     <div>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">preference1</p>
//                     </div>
//                     <select
//                       name="institute"
//                       className="form-style"
//                       value={preference1}
//                       onChange={(e) => setPreference1(e.target.value)}
//                     >
//                       <option value="Select option">Select option</option>
//                       <option value="NIT Durgapur">Reuters</option>
//                       <option value="Other">WION</option>
//                       <option value="Other">Bloomberg</option>
//                     </select>

//                     </div>

//                     <div>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">committee2</p>
//                     </div>
//                     <select
//                       name="institute"
//                       className="form-style"
//                       value={committee2}
//                       onChange={(e) => setCommittee2(e.target.value)}
//                     >
//                       <option value="Select option">Select option</option>
//                       <option value="NIT Durgapur">UNSC</option>
//                       <option value="Other">UNODC</option>
//                       <option value="Other">AIPPM</option>
//                     </select>

//                     </div>

//                     <div>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">preference2</p>
//                     </div>
//                     <select
//                       name="institute"
//                       className="form-style"
//                       value={preference2}
//                       onChange={(e) => setPreference2(e.target.value)}
//                     >
//                       <option value="Select option">Select option</option>
//                       <option value="NIT Durgapur">Reuters</option>
//                       <option value="Other">WION</option>
//                       <option value="Other">Bloomberg</option>
//                     </select>

//                     </div>

//                     <div>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">committee3</p>
//                     </div>
//                     <select
//                       name="institute"
//                       className="form-style"
//                       value={committee3}
//                       onChange={(e) => setCommittee3(e.target.value)}
//                     >
//                       <option value="Select option">Select option</option>
//                       <option value="NIT Durgapur">UNSC</option>
//                       <option value="Other">UNODC</option>
//                       <option value="Other">AIPPM</option>
//                     </select>

//                     </div>

//                     <div>
//                     <div className="para-container">
//                       <p className="mb-4 pb-3 reg-p">preference3</p>
//                     </div>
//                     <select
//                       name="institute"
//                       className="form-style"
//                       value={preference3}
//                       onChange={(e) => setPreference3(e.target.value)}
//                     >
//                       <option value="Select option">Select option</option>
//                       <option value="NIT Durgapur">Reuters</option>
//                       <option value="Other">WION</option>
//                       <option value="Other">Bloomberg</option>
//                     </select>

//                     </div>

//                     <button className="sign-up" type="submit">Submit</button>
//                   </form>
//                 </div>




//               )}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//         <ToastContainer position="bottom-right" />
//       </div>
//     </>
//   );
// }

// export default Register;


//Above was the original code before  the changes to include different countrysets for different committees were made 






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
  const [preferenceOptions1, setPreferenceOptions1] = useState([]);
  const [preferenceOptions2, setPreferenceOptions2] = useState([]);
  const [preferenceOptions3, setPreferenceOptions3] = useState([]);

  const handleCommitteeChange = (committee, setPreferenceOptions) => (e) => {
    const selectedCommittee = e.target.value;
    committee(selectedCommittee);

    switch (selectedCommittee) {
      case "UNSC":
        setPreferenceOptions(["United Staes Of America", "The Russian Federation", "Iran","Kingdom of Saudi Arabia","Oman","Yemen","Qatar","Kuwait","Jordan","The United Kingdom","China","United Arab Emirates(UAE)","France","Egypt","Turkiye","Germany","Canada","Sweden","Norway","Japan","South Korea","Australia","Eritrea","Djibouti","Ethiopia","Somalia","Republic Of South Africa","Bahrain","Sudan","South Sudan","Israel","Switzerland","Netherlands","Italy","India","Pakistan","Spain","Malaysia","Indonesia","Brazil","New Zealand","Belgium","Austria","Lebanon","Syria","Libya"]);
        break;
      case "UNODC":
        setPreferenceOptions(["Islamic Republic of Afghanistan", "People’s Democratic Republic of Algeria", "Antigua and Barbuda", "Republic of Argentina", "Commonwealth of Australia", "Republic of Austria", "Commonwealth of the Bahamas", "People’s Republic of Bangladesh", "Barbados", "Kingdom of Belgium", "Belize", "Kingdom of Bhutan", "Plurinational State of Bolivia", "Federative Republic of Brazil", "Republic of Bulgaria", "Kingdom of Cambodia", "Canada", "Central African Republic", "Republic of Chad", "Republic of Chile", "People’s Republic of China", "Republic of Colombia", "Republic of Costa Rica", "Republic of Cuba", "Czech Republic", "Democratic Republic of the Congo", "Kingdom of Denmark", "Dominican Republic", "Republic of Ecuador", "Arab Republic of Egypt", "Republic of El Salvador", "Republic of Equatorial Guinea", "Republic of Estonia", "Federal Democratic Republic of Ethiopia", "Republic of Fiji", "Republic of Finland", "Republic of France", "Gabonese Republic", "Republic of The Gambia", "Georgia", "Federal Republic of Germany", "Republic of Ghana", "Hellenic Republic (Greece)", "Grenada", "Republic of Guatemala", "Co-operative Republic of Guyana", "Republic of Haiti", "Republic of Honduras", "Hungary", "Iceland", "Republic of India", "Republic of Indonesia", "Islamic Republic of Iran", "Republic of Iraq", "State of Israel", "Republic of Italy", "Jamaica", "Japan", "Republic of Kazakhstan", "Republic of Kenya", "State of Libya", "Republic of Lithuania", "Malaysia", "United Mexican States (Mexico)", "Republic of the Union of Myanmar", "Kingdom of The Netherlands", "New Zealand", "Federal Republic of Nigeria", "Kingdom of Norway", "Islamic Republic of Pakistan", "Independent State of Papua New Guinea", "Republic of the Philippines", "Portuguese Republic (Portugal)", "Russian Federation (Russia)", "Republic of Singapore", "Republic of South Africa", "Kingdom of Spain", "Kingdom of Sweden", "Swiss Confederation (Switzerland)", "Kingdom of Thailand", "Republic of Uganda", "United Kingdom", "United Arab Emirates", "United States of America", "Socialist Republic of VietNam", "Republic of Yemen", "Republic of Zimbabwe", "Republic of Zambia"]);
        break;
      case "AIPPM":
        setPreferenceOptions(["Azam Khan", "Amit Shah", "Arvind Kejriwal", "Ashok Gehlot", "Ashwini Vaishnaw", "Bhupender Yadav", "Bhupendra Patel", "Bhupesh Baghel", "Conrad Sangma", "Digvijaya Singh", "Dharmendra Pradhan", "Dr. Jitendra Singh", "Hardeep Singh Puri", "Himanta Biswa Sarma", "K. Chandrashekhar Rao", "Kalyan Banerjee", "Kiren Rijiju", "M.K. Raghavan", "M.K. Stalin", "Mallikarjun Kharge", "Mamata Banerjee", "Mansukh Mandaviya", "M. Thambidurai", "Narendra Modi", "Nirmala Sitharaman", "Nitin Gadkari", "Piyush Goyal", "Rajeev Chandrasekhar", "Rahul Gandhi", "Rameswar Teli", "Randeep Singh Surjewala", "Rajnath Singh", "Sarbananda Sonowal", "Sadhvi Niranjan Jyoti", "S. Jaishankar", "Shashi Tharoor", "Shivraj Singh Chouhan", "Siddaramaiah", "Sonia Gandhi", "Sitaram Yechury", "Sukhendu Sekhar Roy", "Sugata Ray", "Vishnu Deo Sai", "Yogi Adityanath"]);
        break;
      default:
        setPreferenceOptions([]);
    }
  };

  const postData = async (e) => {
    e.preventDefault();

    await axios
      .post("https://nitmun-xiii-backend.onrender.com/api/register", {
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
        hall: hall
      })
      .then((res) => {
        console.log(res);
        toast.success("Submitted. Please check your email for updates.", {
          onClose: () => window.location.href = "/",
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
          <h6 className="mb-0 pb-3"></h6>
        </div>

        <div className="checkbox-wrapper-41">
          <span
            style={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "#fde881",
              marginRight: "15px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontFamily: 'Helvetica',
            }}
          >
            DELEGATION
          </span>
          <input
            type="checkbox"
            id="reg-log"
            onChange={() => setIsForm1(!isForm1)}
          />
          <span
            style={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "#fde881",
              marginLeft: "15px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontFamily: 'Helvetica',
            }}
          >
            IP
          </span>
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
                    <span className="banner-text">NITMUN XIII</span>  
                  </div>
                  <h4 className="card__title">DELEGATION</h4>
                  <p className="card__subtitle">
                    Fill the form to complete registration
                  </p>
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
                        style={{ backgroundColor: '#ccc6c6' }} // Inline style for background color
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
                        style={{ backgroundColor: '#ccc6c6' }} // Inline style for background color
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                      ) : null}
                    </div>

                    <div>
                      <div className="para-container">
                        <p className="mb-4 pb-3 reg-p ">PHONE NUMBER*</p>
                      </div>
                      <input
                        name="phone"
                        className="form-style"
                        placeholder="Your Phone"
                        autoComplete="off"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        style={{ backgroundColor: '#ccc6c6' }} // Inline style for background color
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
                        style={{ backgroundColor: '#ccc6c6' }} // Inline style for background color
                      >
                        <option value="Select option">Select option</option>
                        <option value="NIT Durgapur">NIT Durgapur</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div
                      style={
                        institute == "NIT Durgapur"
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    >
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

                    <div
                      style={
                        institute == "NIT Durgapur"
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    >
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

                    <div
                      style={
                        institute == "NIT Durgapur"
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    >
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
                        <option value="Hall 4">Hall 4</option>
                        <option value="Hall 5">Hall 5</option>
                        <option value="Hall 6">Hall 6</option>
                        <option value="Hall 7">Hall 7</option>
                        <option value="Hall 8">Hall 8</option>
                        <option value="Hall 9">Hall 9</option>
                        <option value="Hall 10">Hall 10</option>
                        <option value="Hall 11">Hall 11</option>
                        <option value="Hall 12">Hall 12</option>
                        <option value="Hall 13">Hall 13</option>
                        <option value="Hall 14">Hall 14</option>
                      </select>
                    </div>

                    <div
                      style={
                        institute != "NIT Durgapur"
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    >
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
                        style={{ backgroundColor: '#ccc6c6' }} // Inline style for background color
                      />
                    </div>

                    <div>
                      <div className="para-container">
                        <p className="mb-4 pb-3 reg-p">COMMITTEE-1*</p>
                      </div>
                      <select
                        name="committee1"
                        className="form-style"
                        value={committee1}
                        onChange={handleCommitteeChange(setCommittee1, setPreferenceOptions1)}
                        style={{ backgroundColor: '#ccc6c6' }} // Inline style for background color
                      >
                        <option value="Select option">Select option</option>
                        <option value="UNSC">UNSC</option>
                        <option value="UNODC">UNODC</option>
                        <option value="AIPPM">AIPPM</option>
                      </select>
                    </div>

                    <div>
                      <div className="para-container">
                        <p className="mb-4 pb-3 reg-p">PREFERENCE-1*</p>
                      </div>
                      <select
                        name="preference1"
                        className="form-style"
                        value={preference1}
                        onChange={(e) => setPreference1(e.target.value)}
                        style={{ backgroundColor: '#ccc6c6' }} // Inline style for background color
                      >
                        <option value="Select option">Select option</option>
                        {preferenceOptions1.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <div className="para-container">
                        <p className="mb-4 pb-3 reg-p">COMMITTEE-2*</p>
                      </div>
                      <select
                        name="committee2"
                        className="form-style"
                        value={committee2}
                        onChange={handleCommitteeChange(setCommittee2, setPreferenceOptions2)}
                        style={{ backgroundColor: '#ccc6c6' }} // Inline style for background color
                      >
                        <option value="Select option">Select option</option>
                        <option value="UNSC">UNSC</option>
                        <option value="UNODC">UNODC</option>
                        <option value="AIPPM">AIPPM</option>
                      </select>
                    </div>

                    <div>
                      <div className="para-container">
                        <p className="mb-4 pb-3 reg-p">PREFERENCE-2*</p>
                      </div>
                      <select
                        name="preference2"
                        className="form-style"
                        value={preference2}
                        onChange={(e) => setPreference2(e.target.value)}
                        style={{ backgroundColor: '#ccc6c6' }} // Inline style for background color
                      >
                        <option value="Select option">Select option</option>
                        {preferenceOptions2.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <div className="para-container">
                        <p className="mb-4 pb-3 reg-p">COMMITTEE-3*</p>
                      </div>
                      <select
                        name="committee3"
                        className="form-style"
                        value={committee3}
                        onChange={handleCommitteeChange(setCommittee3, setPreferenceOptions3)}
                        style={{ backgroundColor: '#ccc6c6' }} // Inline style for background color
                      >
                        <option value="Select option">Select option</option>
                        <option value="UNSC">UNSC</option>
                        <option value="UNODC">UNODC</option>
                        <option value="AIPPM">AIPPM</option>
                      </select>
                    </div>

                    <div>
                      <div className="para-container">
                        <p className="mb-4 pb-3 reg-p">PREFERENCE-3*</p>
                      </div>
                      <select
                        name="preference3"
                        className="form-style"
                        value={preference3}
                        onChange={(e) => setPreference3(e.target.value)}
                        style={{ backgroundColor: '#ccc6c6' }} // Inline style for background color
                      >
                        <option value="Select option">Select option</option>
                        {preferenceOptions3.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <div className="para-container">
                        <p className="mb-4 pb-3 reg-p">EXPERIENCE*</p>
                      </div>
                      <input 
                        type="text"
                        name="name"
                        className="form-style"
                        placeholder="Your Name"
                        autoComplete="off"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        style={{ backgroundColor: '#ccc6c6' }} // Inline style for background color
                      />
                    </div>

                    <button className="sign-up" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              )}

              {/* Form 2 */}
              {!isForm1 && (
                <div className="card">
                  <div className="banner">
                    <span className="banner-text">REGISTER</span>
                    <span className="banner-text">NITMUN XIII</span>
                  </div>
                  <h4 className="card__title">IP</h4>
                  <p className="card__subtitle">
                    Fill the form to complete registration
                  </p>
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
                      <option value="Hall 4">Hall 4</option>
                      <option value="Hall 5">Hall 5</option>
                      <option value="Hall 6">Hall 6</option>
                      <option value="Hall 7">Hall 7</option>
                      <option value="Hall 8">Hall 8</option>
                      <option value="Hall 9">Hall 9</option>
                      <option value="Hall 10">Hall 10</option>
                      <option value="Hall 11">Hall 11</option>
                      <option value="Hall 12">Hall 12</option>
                      <option value="Hall 13">Hall 13</option>
                      <option value="Hall 14">Hall 14</option>
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
                      <p className="mb-4 pb-3 reg-p">COMMITTEE-1*</p>
                    </div>
                    <select
                      name="institute"
                      className="form-style"
                      value={committee1}
                      onChange={(e) => setCommittee1(e.target.value)}
                    >
                      <option value="Select option">Select option</option>
                      <option value="UNSC">UNSC</option>
                      <option value="UNODC">UNODC</option>
                      <option value="AIPPM">AIPPM</option>
                    </select>

                    </div>

                    <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">PREFERENCE-1*</p>
                    </div>
                    <select
                      name="institute"
                      className="form-style"
                      value={preference1}
                      onChange={(e) => setPreference1(e.target.value)}
                    >
                      <option value="Select option">Select option</option>
                      {/* <option value="NIT Durgapur">Reuters</option>
                      <option value="Other">WION</option>
                      <option value="Other">Bloomberg</option> */}
                                        {committee1 === "UNSC" && (
                        <>
                          <option value="BBC">BBC</option>
                          <option value="The New York Times">The New York Times</option>
                          <option value="The Guardian">The Guardian</option>
                        </>
                      )}
                      {committee1 === "UNODC" && (
                        <>
                          <option value="BBC">BBC</option>
                          <option value="The New York Times">The New York Times</option>
                          <option value="The Guardian">The Guardian</option>
                        </>
                      )}
                      {committee1 === "AIPPM" && (
                        <>
                          <option value="Hindustan Times">Hindustan Times</option>
                          <option value="Times of India">Times of India</option>
                          <option value="The Hindu">The Hindu</option>
                        </>
                      )}
                    </select>

                    </div>

                    <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">COMMITTEE-2*</p>
                    </div>
                    <select
                      name="institute"
                      className="form-style"
                      value={committee2}
                      onChange={(e) => setCommittee2(e.target.value)}
                    >
                      <option value="Select option">Select option</option>
                      <option value="UNSC">UNSC</option>
                      <option value="UNODC">UNODC</option>
                      <option value="AIPPM">AIPPM</option>
                      
                    </select>

                    </div>

                    <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">PREFERENCE-2*</p>
                    </div>
                    <select
                      name="institute"
                      className="form-style"
                      value={preference2}
                      onChange={(e) => setPreference2(e.target.value)}
                    >
                      <option value="Select option">Select option</option>
                      {/* <option value="NIT Durgapur">Reuters</option>
                      <option value="Other">WION</option>
                      <option value="Other">Bloomberg</option> */}
                                 {committee2 === "UNSC" && (
                        <>
                          <option value="BBC">BBC</option>
                          <option value="The New York Times">The New York Times</option>
                          <option value="The Guardian">The Guardian</option>
                        </>
                      )}
                      {committee2 === "UNODC" && (
                        <>
                          <option value="BBC">BBC</option>
                          <option value="The New York Times">The New York Times</option>
                          <option value="The Guardian">The Guardian</option>
                        </>
                      )}
                      {committee2 === "AIPPM" && (
                        <>
                          <option value="Hindustan Times">Hindustan Times</option>
                          <option value="Times of India">Times of India</option>
                          <option value="The Hindu">The Hindu</option>
                        </>
                      )}
                    </select>

                    </div>

                    <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">COMMITTEE-3*</p>
                    </div>
                    <select
                      name="institute"
                      className="form-style"
                      value={committee3}
                      onChange={(e) => setCommittee3(e.target.value)}
                    >
                      <option value="Select option">Select option</option>
                      <option value="UNSC">UNSC</option>
                      <option value="UNODC">UNODC</option>
                      <option value="AIPPM">AIPPM</option>
                
                    </select>

                    </div>

                    <div>
                    <div className="para-container">
                      <p className="mb-4 pb-3 reg-p">PREFERENCE-3*</p>
                    </div>
                    <select
                      name="institute"
                      className="form-style"
                      value={preference3}
                      onChange={(e) => setPreference3(e.target.value)}
                    >
                      <option value="Select option">Select option</option>
                      {/* <option value="NIT Durgapur">Reuters</option>
                      <option value="Other">WION</option>
                      <option value="Other">Bloomberg</option> */}
                             {committee3 === "UNSC" && (
                        <>
                          <option value="BBC">BBC</option>
                          <option value="The New York Times">The New York Times</option>
                          <option value="The Guardian">The Guardian</option>
                        </>
                      )}
                      {committee3 === "UNODC" && (
                        <>
                          <option value="BBC">BBC</option>
                          <option value="The New York Times">The New York Times</option>
                          <option value="The Guardian">The Guardian</option>
                        </>
                      )}
                      {committee3 === "AIPPM" && (
                        <>
                          <option value="Hindustan Times">Hindustan Times</option>
                          <option value="Times of India">Times of India</option>
                          <option value="The Hindu">The Hindu</option>
                        </>
                      )}
                    </select>

                    </div>
                    <div>
                      <div className="para-container">
                        <p className="mb-4 pb-3 reg-p">EXPERIENCE</p>
                      </div>
                      <input 
                        type="text"
                        name="name"
                        className="form-style"
                        placeholder="Your Name"
                        autoComplete="off"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        style={{ backgroundColor: '#ccc6c6' }} // Inline style for background color
                      />
                    </div>

                    <button className="sign-up" type="submit">Submit</button>
                  </form>
                </div>




              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <ToastContainer position="bottom-right" />
      </div>
    </>
  );
}

export default Register;
