import "./NavBar.scss";

const NavBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"navbar-container " + (menuOpen && "active")}>
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <a href="#intro" className="logo">
            _Nology
          </a>
          <div className="link-container"></div>
          <div className="link-container">
            <p className="icon">camh.hyden@gmail.com</p>
          </div>
        </div>

        <div className="navbar-right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
