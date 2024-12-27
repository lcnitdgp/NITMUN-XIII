import React, { useState } from "react";


function RegisterCard() {
  const [institute, setInstitute] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [roll, setRoll] = useState("");
  const [year, setYear] = useState("");
  const [committee1, setCommittee1] = useState("");
  const [preference1, setPreference1] = useState("");
  const [committee2, setCommittee2] = useState("");
  const [preference2, setPreference2] = useState("");
  const [committee3, setCommittee3] = useState("");
  const [preference3, setPreference3] = useState("");
  const [experience, setExperience] = useState("");
  const [hall, setHall] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!institute) newErrors.institute = "Institute is required";
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Invalid email format";
    if (!phoneNumber.match(/^\d{10}$/)) newErrors.phoneNumber = "Phone number must be 10 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="cardwrapper">
    <div className="card">
      <div className="banner">
        <span className="banner-text">REGISTER</span>
        <span className="banner-text">JOIN US</span>
      </div>
      <span className="card__title">Registration</span>
      <p className="card__subtitle">Fill the form to complete registration</p>
      <form className="card__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}

        <input
          type="text"
          placeholder="Institute"
          value={institute}
          onChange={(e) => setInstitute(e.target.value)}
        />
        {errors.institute && <p className="error">{errors.institute}</p>}

        <input
          type="text"
          placeholder="Roll Number"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Committee Preference 1"
          value={committee1}
          onChange={(e) => setCommittee1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Preference 1"
          value={preference1}
          onChange={(e) => setPreference1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Committee Preference 2"
          value={committee2}
          onChange={(e) => setCommittee2(e.target.value)}
        />
        <input
          type="text"
          placeholder="Preference 2"
          value={preference2}
          onChange={(e) => setPreference2(e.target.value)}
        />
        <input
          type="text"
          placeholder="Committee Preference 3"
          value={committee3}
          onChange={(e) => setCommittee3(e.target.value)}
        />
        <input
          type="text"
          placeholder="Preference 3"
          value={preference3}
          onChange={(e) => setPreference3(e.target.value)}
        />
        <textarea
          placeholder="Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <input
          type="text"
          placeholder="Hall"
          value={hall}
          onChange={(e) => setHall(e.target.value)}
        />
        <button className="sign-up" type="submit">
          Sign up
        </button>
      </form>
    </div>
    </div>
  );
}

export default RegisterCard;

