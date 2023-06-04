import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectList } from "./ProjectList";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import dis from "./projectdisplay.module.css";
import { Animate } from "react-simple-animate";
import browser from "./images/browser.png";
import git from "./images/git.png";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div>
      <div className={dis.project}>
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
          <h1> {project.name}</h1>
        </Animate>
        <div className={dis.mainImage}>
          <img src={project.image} alt="projects" />
          <div className={dis.browser}>
            <Link
              to={project.deployLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={browser} alt="deploy" />
            </Link>
          </div>
          <div className={dis.git}>
            <Link
              to={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={git} alt="github" />
            </Link>
          </div>
        </div>
        <p>
          <b>Skills:</b> &nbsp; {project.skills}
        </p>
      </div>
      <div className={project.particle}>
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
    </div>
  );
}

export default ProjectDisplay;
