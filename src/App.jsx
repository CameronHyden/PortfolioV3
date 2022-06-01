import Home from "./pages/Home/Home";
import "./styles/main.scss";
import { useState } from "react";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import Layout from "./components/Layout/Layout";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Layout>
      <Home menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> <ProjectsPage />
    </Layout>
  );
};

export default App;
