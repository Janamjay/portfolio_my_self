import React from "react";
import proitem from "./projectitem.module.css";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className={proitem.projectItem}
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={proitem.bgImage}
      />
      <h2 className={proitem.title}> {name} </h2>
    </div>
  );
}

export default ProjectItem;
