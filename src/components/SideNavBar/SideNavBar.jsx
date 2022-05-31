import "./SideNavBar.scss";

const SideNavBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul className="sideBar-links">
        <li onClick={() => setMenuOpen(false)}>
          <a className="sideBar-links--link" href="#intro">
            Home
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a className="sideBar-links--link" href="#carousel">
            Projects
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a className="sideBar-links--link" href="#contact">
            About me
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SideNavBar;
