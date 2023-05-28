import React from "react";
import about from "./about.module.css";
import { Animate } from "react-simple-animate";
import { Link } from "react-router-dom";
import Skill from "../skill/Skill";

//images
import git from "./images/github.png";
import linkedin from "./images/linkedin.png";
import email from "./images/email.png";
import self from "./images/self.jpg";

const About = () => {
 
  return (
    <div className={about.main_container}>
      <Animate
        play
        duration={1.5}
        start={{
          transform: "translateX(-300px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <h1 className={about.header}>About Me</h1>
      </Animate>
      <div className={about.main}>
        <Animate
          play
          duration={1.5}
          start={{
            transform: "translateX(-550px)",
          }}
          end={{
            transform: "translatex(0px)",
          }}
        >
          <div className={about.image}>
            <img src={self} alt="me" />
          </div>
          <div className={about.icons}>
            <Link to="https://github.com/Janamjay" target="_blank">
              <img src={git} alt="git" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/janamjay-kumar-7255a0210/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" />
            </Link>
            <Link to="mailto:janamjayk6@gmail.com" target="_blank">
              <img src={email} alt="email" />
            </Link>
          </div>
        </Animate>
        <div className={about.content}>
          <Animate
            play
            duration={1.5}
            start={{
              transform: "translateX(850px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h2>Janamjay Kumar</h2>
            <h3>Front End Developer</h3>
            <p>
              Welcome to my portfolio website! I'm a passionate frontend
              developer with a keen eye for design and a love for creating
              seamless user experiences. Through a combination of clean code,
              cutting-edge technologies, and a deep understanding of user needs,
              I craft stunning websites that captivate and engage visitors. With
              expertise in HTML, CSS, JavaScript, and various frontend
              frameworks, I have successfully delivered numerous projects that
              blend aesthetics with functionality. Explore my work to see how I
              turn ideas into pixel-perfect reality. Let's collaborate and bring
              your digital vision to life!"
            </p>
          </Animate>
        </div>
      </div>
      <section className={about.main_skill}>
        <div className={about.skill_header}>
          <h1>My Skill</h1>
        </div>
        <div className={about.skill_content}>
          <div className={about.skill_left}>
            <h3>Technical Skills</h3>
            <div className={about.skill_bar}>
              <div className={about.info}>
                <p>HTML</p>
                <p>90%</p>
              </div>
              <div className={about.bar}>
                <span className={about.html}></span>
              </div>
            </div>
            <div className={about.skill_bar}>
              <div className={about.info}>
                <p>CSS</p>
                <p>80%</p>
              </div>
              <div className={about.bar}>
                <span className={about.css}></span>
              </div>
            </div>
            <div className={about.skill_bar}>
              <div className={about.info}>
                <p>ReactJs</p>
                <p>75%</p>
              </div>
              <div className={about.bar}>
                <span className={about.react}></span>
              </div>
            </div>
            <div className={about.skill_bar}>
              <div className={about.info}>
                <p>JavaScript</p>
                <p>72%</p>
              </div>
              <div className={about.bar}>
                <span className={about.javascript}></span>
              </div>
            </div>
          </div>
            <Skill/>
        </div>
      </section>
    </div>
  );
};

export default About;
