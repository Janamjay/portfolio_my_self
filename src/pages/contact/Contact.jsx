import React, { useState } from "react";
import emailjs from "emailjs-com";
import con from "./contact.module.css";
import { Animate } from "react-simple-animate";
import { BsInfoCircleFill } from "react-icons/bs";
import swal from "sweetalert";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

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

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={con.content}>
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
      <div className={con.particle}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: {
              enable: true,
              zIndex: -1,
            },
            particles: {
              number: {
                value: 160,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#daa520",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "goldenrod",
                },
                polygon: {
                  nb_sides: 10,
                },
              },
              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0,
                  sync: false,
                },
              },
              size: {
                value: 4,
                random: true,
                anim: {
                  enable: false,
                  speed: 102.09290454313434,
                  size_min: 0.3,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 600,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 250,
                  size: 0,
                  duration: 2,
                  opacity: 0,
                  speed: 3,
                },
                repulse: {
                  distance: 400,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
            background: {
              color: "#111",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
            },
          }}
        />
      </div>
    </form>
  );
};

export default Contact;
