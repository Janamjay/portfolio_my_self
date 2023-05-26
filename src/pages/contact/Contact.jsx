import React from "react";
import con from "./contact.module.css";
import { Animate } from "react-simple-animate";
import { BsInfoCircleFill } from "react-icons/bs";
import galaxy from './images/galaxy.png';

const Contact = () => {
  return (
    <div className={con.content}
    style={{
      background:`url(${galaxy})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
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
                type={"text"}
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
                type={"text"}
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

              />
              <label htmlFor="description" className={con.descriptionLabel}>
                Description
              </label>
            </div>
          </div>
          <button className={con.submit}>Submit</button>
        </div>
      </Animate>
    </div>
  );
};

export default Contact;
