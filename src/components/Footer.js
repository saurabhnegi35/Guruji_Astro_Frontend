import logo from "../assets/guruji.png";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import insta from "../assets/insta.svg";
import youtube from "../assets/youtube.svg";
import razorpay from "../assets/razorpay.svg";
import paytm from "../assets/paytm.svg"
import stripe from "../assets/stripe.svg"

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-container-inner">
          <div className="footer-column-1">
            <img src={logo} alt="logo" />
            <p>
              About Guruji s2 to 3 lines what guruji do and how it works About
              Guruji s2 to 3 lines what guruji do and how it works
            </p>
            <div className="footer-socials">
              <img src={facebook} />
              <img src={insta} />
              <img src={twitter} />
              <img src={youtube} />
            </div>
            <h4>Trusted & Seals</h4>
            <div className="payments">
                <img src={razorpay} alt="" />
                <img src={paytm} alt="" />
                <img src={stripe} alt="" />
            </div>
          </div>
          <div className="footer-column-2">
            <div className="company">
              <h5>Company</h5>
              <p>Home</p>
              <p>Privacy Policy</p>
              <p>T & C </p>
              <p>Verified Payment</p>
            </div>
            <div className="collaborate">
              <h5>Collaborate</h5>
              <p>Clever Tap</p>
              <p>Exotel</p>
              <p>Facebook</p>
              <p>Quora </p>
              <p>Google</p>
              <p>Youtube</p>
            </div>
          </div>
          <div className="footer-column-3">
            <div className="company">
              <h5>Support</h5>
              <p>Home</p>
              <p>Privacy Policy</p>
              <p>T & C </p>
              <p>Verified Payment</p>
            </div>
            <div className="collaborate">
              <h5>Important Link</h5>
              <p>Tarot Reader</p>
              <p>Vedic Astrology </p>
              <p>Palmistry </p>
              <p>Gemology</p>
              <p>Vastu</p>
              <p>Numerology</p>
            </div>
          </div>
          <div className="footer-column-4">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Mail ID" />
            <input
              className="write-query"
              type="text"
              placeholder="Write Query"
            />
            <button type="">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
