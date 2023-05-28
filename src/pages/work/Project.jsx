import React from "react";
import { ProjectList } from "./ProjectList";
import ProjectItem from "../../component/projectItems/ProjectItem";
import project from "./project.module.css";
import { Animate } from "react-simple-animate";

const Project = () => {
  return (
    <div className={project.projects}>
      <Animate
        play
        duration={1.5}
        start={{
          transform: "translateX(-1000px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <h1> My Personal Projects</h1>
      </Animate>
      <div className={project.projectList}>
        {ProjectList.map((project, idx) => {
          return (
            <div key={idx}>
              <ProjectItem id={idx} name={project.name} image={project.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
