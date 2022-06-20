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
          <a className="sideBar-links--link" href="#projects">
            Projects
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a className="sideBar-links--link" href="#aboutMe">
            About me
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SideNavBar;
