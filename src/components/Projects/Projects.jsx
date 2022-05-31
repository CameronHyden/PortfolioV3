import "./Projects.scss";
import { data } from "../../assets/Data/data.js";

const Projects = () => {
  const projectJSX = data.map((d) => {
    return (
      <div className="projects" key={d.id}>
        <div className="projects__heading">
          <h2 className="projects__title">{d.title}</h2>
          <a href={d.url}>
            <img
              className="projects__icon"
              src={d.icon}
              target="_blank"
              rel="noreferrer"
            />
          </a>
          <a href={d.liveSite} target="_blank" rel="noreferrer">
            <p className="projects__liveSite">LIVE SITE</p>
          </a>
        </div>
        <div className="projects__imageDisplay">
          <img className="projects__image" src={d.img} alt="" />
          <p className="projects__description">{d.desc}</p>
        </div>
      </div>
    );
  });
  return projectJSX;
};

export default Projects;
