import "./ProjectsPage.scss";
import Projects from "../../components/Projects/Projects";

const ProjectsPage = () => {
  return (
    <>
      <div>
        <h2 className="ProjectsPage__title">My projects</h2>
      </div>
      <div className="projectsContainer">
        <Projects />
      </div>
    </>
  );
};

export default ProjectsPage;
