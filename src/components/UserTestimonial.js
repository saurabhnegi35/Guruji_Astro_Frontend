import sun from "../assets/sun.svg";
import star from "../assets/star.svg";
import banner from "../assets/trust_banner.png";
import VideoCarousel from "./VideoCarousel";

const UserTestimonial = () => {
  return (
    <>
      <div className="user-testimonial">
        <img src={sun} alt="" />
        <div className="user-testimonial-title flex">
          <img src={star} alt="" />
          <h1>User Testimonial</h1>
          <img src={star} alt="" />
        </div>
        <VideoCarousel />

        <img className="img-banner" src={banner} alt="Banner"></img>

        <div className="flex user-testimonial-dot">
          <div className="dot-solid"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </>
  );
};

export default UserTestimonial;
