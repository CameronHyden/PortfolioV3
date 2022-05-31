import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import { useState } from "react";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Routes>
      <Route
        path="*"
        element={<Home menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
      />
    </Routes>
  );
};

export default App;
