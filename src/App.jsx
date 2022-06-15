import Home from "./pages/Home/Home";
import "./styles/main.scss";
import { useState } from "react";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage/AboutPage";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Layout>
      <Home menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <ProjectsPage />
      <AboutPage />
    </Layout>
  );
};

export default App;
