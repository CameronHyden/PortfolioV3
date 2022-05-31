import Projects from "../../components/Projects/Projects";
import Layout from "../../components/Layout/Layout";
import "./Home.scss";

const Home = () => {
  return (
    <Layout>
      <h1>Page Heading</h1>
      <div className="projectsContainer">
        <Projects />
      </div>
    </Layout>
  );
};

export default Home;
