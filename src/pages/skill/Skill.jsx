import React, { useEffect, useRef } from "react";
import "./skill.css";

const Skill = () => {
  const circleRefs = useRef([]);

  useEffect(() => {
    circleRefs.current.forEach((elem) => {
      const dots = elem.getAttribute("data-dots");
      const marked = (elem.getAttribute("data-percent"));
      const percent = Math.floor((dots * marked) / 100);
      const rotate = 360 / dots;

      for (let i = 0; i < dots; i++) {
        const point = document.createElement("div");
        point.className = "points";
        point.style.setProperty("--i", i);
        point.style.setProperty("--rot", `${rotate}deg`);
        elem.appendChild(point);
      }

      const pointsMarked = elem.querySelectorAll(".points");
      for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add("marked");
      }
    });
  }, []);

  const setCircleRef = (ref) => {
    if (ref) {
      circleRefs.current.push(ref);
    }
  };

  return (
    <div className="skill_right">
      <h3>Professional Skills</h3>
      <div className="professional">
        <div className="box">
          <div
            ref={setCircleRef}
            className="circle"
            data-dots="100"
            data-percent="90"
          ></div>
          <div className="text">
            <big>90%</big>
            <small>Team Work</small>
          </div>
        </div>
        <div className="box">
          <div
            ref={setCircleRef}
            className="circle"
            data-dots="100"
            data-percent="90"
          ></div>
          <div className="text">
            <big>90%</big>
            <small>Creativity</small>
          </div>
        </div>
        <div className="box">
          <div
            ref={setCircleRef}
            className="circle"
            data-dots="100"
            data-percent="75"
          ></div>
          <div className="text">
            <big>75%</big>
            <small>Project Management</small>
          </div>
        </div>
        <div className="box">
          <div
            ref={setCircleRef}
            className="circle"
            data-dots="80"
            data-percent="70"
          ></div>
          <div className="text">
            <big>70%</big>
            <small>Communication</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
