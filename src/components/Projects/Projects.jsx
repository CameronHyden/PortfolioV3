import "./Projects.scss";
import { data } from "../../assets/Data/data.js";

const Projects = ({ isHovering, handleMouseOver, HandleMouseOut }) => {
  const projectJSX = data.map((d) => {
    return (
      <div
        className="projects"
        onMouseOver={handleMouseOver}
        onMouseOut={HandleMouseOut}
        key={d.id}
      >
        <div className="projects__heading">
          <h2>{d.title}</h2>
          <a href={d.url}>
            <img className="projects__icon" src={d.icon} alt="" />
          </a>
          <h3>{d.liveSite}</h3>
        </div>
        <div className="projects__imageDisplay">
          <img className="projects__image" src={d.img} alt="" />
          {isHovering && <p>{d.desc}</p>}
        </div>
      </div>
    );
  });
  return projectJSX;
};

export default Projects;
