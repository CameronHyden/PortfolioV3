import NavBar from "../../components/NavBar/NavBar";
import "./Home.scss";
import SideNavBar from "../../components/SideNavBar/SideNavBar";
import Intro from "../../components/Intro/Intro";

const Home = ({ menuOpen, setMenuOpen }) => {
  return (
    // <Layout>
    <div>
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Intro />
      <SideNavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>

    // {/* </Layout> */}
  );
};

export default Home;
