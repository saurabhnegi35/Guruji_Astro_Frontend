import sun from "../assets/sun.svg";
import star from "../assets/star.svg";
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
      </div>
    </>
  );
};

export default UserTestimonial;
