// import logo from "../assets/guruji_logo.png";
import logo from "../assets/guruji.png";
import profile from "../assets/profile_pic.png";
import customer_support from "../assets/customer_support.svg";
import refund from "../assets/refund.svg";
import private_pic from "../assets/private.svg";
import secure_pay from "../assets/secure_pay.svg";
import verified from "../assets/verified.svg";
const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
            {/* <h1>Guruji</h1> */}
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
        <div className="main-heading">
          <h1>“Astrology for Clarity”</h1>
          <p>
            Your Name is a Vedic Astrologer and has expertise in Vaastu and
            Mantra Theraphy
          </p>
          <button>Consult Now</button>
        </div>
        <div className="header-list-items">
          <div className="flex">
            <img src={customer_support} alt="" />
            <p>24 X 7 Customer Support</p>
          </div>
          <div className="flex">
            <img src={refund} alt="" />
            <p>100% Refund if<br />Unsatisfied</p>
          </div>
          <div className="flex">
            <img src={private_pic} alt="" />
            <p> Private &<br />Confidential</p>
          </div>
          <div className="flex">
            <img src={verified} alt="" />
            <p>Verified<br />Astrologer</p>
          </div>
          <div className="flex">
            <img src={secure_pay} alt="" />
            <p>Secure<br />Payment</p>
          </div>
        </div>

        <div className="flex heading-dot">
            <div className="dot-solid"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
