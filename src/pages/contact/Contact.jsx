import React, { useState } from "react";
import emailjs from "emailjs-com";
import con from "./contact.module.css";
import { Animate } from "react-simple-animate";
import { BsInfoCircleFill } from "react-icons/bs";
import galaxy from "./images/galaxy.png";
import swal from "sweetalert";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (!validateName() || !validateEmail() || !validateDescription()) {
      return;
    }

    // Send email using email.js
    const serviceId = "service_1erqmxm";
    const templateId = "template_iy8f4sd";
    const userId = "63y8TdRWbInK87Aod";

    emailjs
      .send(serviceId, templateId, formValues, userId)
      .then((response) => {
        swal("Success", "Email Successfully Sent", "success");
        setFormValues({
          name: "",
          email: "",
          description: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const validateName = () => {
    const nameRegex = /^[a-zA-Z\s]*$/;
    if (!formValues.name.trim()) {
      swal("Error", "Name is required", "error");
      return false;
    } else if (!nameRegex.test(formValues.name)) {
      swal("Error", "Invalid name format", "error");
      return false;
    } else if (formValues.name.trim().length < 3) {
      swal("Error", "Name should be greater than 3 characters", "error");
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email.trim()) {
      swal("Error", "Email is required", "error");
      return false;
    } else if (!emailRegex.test(formValues.email)) {
      swal("Error", "Invalid email format", "error");
      return false;
    }
    return true;
  };

  const validateDescription = () => {
    if (!formValues.description.trim()) {
      swal("Error", "Description is required", "error");
      return false;
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={con.content}
        style={{
          background: `url(${galaxy})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className={con.header}>
            Let's Talk
            <span>
              <BsInfoCircleFill />
            </span>
          </h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className={con.form}>
            <div className={con.controlswrapper}>
              <div>
                <input
                  required
                  name="name"
                  className={con.inputName}
                  type="text"
                  value={formValues.name}
                  onChange={handleChange}
                />
                <label htmlFor="name" className={con.nameLabel}>
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className={con.inputEmail}
                  type="text"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className={con.emailLabel}>
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className={con.inputDescription}
                  type="text"
                  rows="5"
                  value={formValues.description}
                  onChange={handleChange}
                />
                <label htmlFor="description" className={con.descriptionLabel}>
                  Description
                </label>
              </div>
            </div>
            <button className={con.submit} type="submit">
              Submit
            </button>
          </div>
        </Animate>
      </div>
    </form>
  );
};

export default Contact;
