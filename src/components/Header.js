import logo from "../assets/guruji_logo.png";
import profile from "../assets/profile_pic.png";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
            <h1>Guruji</h1>
          </div>
          <div className="navbar-items">
            <p>Home</p>
            <p>Call with Astrologer</p>
            <p>Live (Coming Soon)</p>
          </div>
          <div className="navbar-profile">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
