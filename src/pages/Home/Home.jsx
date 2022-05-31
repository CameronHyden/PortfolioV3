import Projects from "../../components/Projects/Projects";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.scss";
import SideNavBar from "../../components/SideNavBar/SideNavBar";

const Home = ({ menuOpen, setMenuOpen }) => {
  return (
    <Layout>
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SideNavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <h1>Page Heading</h1>
      <div className="projectsContainer">
        <Projects />
      </div>
    </Layout>
  );
};

export default Home;
