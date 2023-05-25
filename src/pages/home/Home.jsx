import React from "react";
import home from "./home.module.css";
import Particles from "react-tsparticles";
import resume from "./Janamjay Resume.pdf";
import { loadFull } from "tsparticles";
import { Link } from "react-router-dom";

const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div className={home.main_container}>
      <div className={home.content}>
        <h1 className={home.slide_left}>Hi , I am Janamjay</h1>
        <p className={home.slide_right}>FrontEnd Developer</p>
        <div className={home.approach}>
          <button>
            <Link to="/contact">Hire</Link>
          </button>

          <button>
            <a href={resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </button>
        </div>
      </div>
      <div className={home.particle}>
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
                value: 10,
                density: {
                  enable: false,
                  value_area: 800,
                },
              },
              color: {
                value: "#DAA520",
              },
              shape: {
                type: "star",
                options: {
                  sides: 10,
                },
              },
              opacity: {
                value: 0.8,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 4,
                random: false,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              rotate: {
                value: 0,
                random: true,
                direction: "clockwise",
                animation: {
                  enable: true,
                  speed: 5,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 800,
                color: "#DAA520",
                opacity: 0.4,
                width: 2,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: ["grab"],
                },
                onclick: {
                  enable: false,
                  mode: "bubble",
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
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
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
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Home;
