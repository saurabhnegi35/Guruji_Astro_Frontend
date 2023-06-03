import texture from "../assets/texture.png";
import star from "../assets/star.svg";
import signs from "../assets/signs.png";
import education from "../assets/education.png";
import love from "../assets/love.png";
import coins from "../assets/coins.png";
import job from "../assets/job.png";
import marriage from "../assets/marriage.png";
import medical from "../assets/medical_sign.png";
import orbit from "../assets/orbit.png";
import number from "../assets/number.png";
import family from "../assets/family.png";
import child from "../assets/child.png";
import sun from "../assets/sun.png";

const Solutions = () => {
  return (
    <>
      <div className="solutions-container">
        <div>
          <img src={texture} alt="" />
        </div>
        <div className="solutions-container-title flex">
          <img src={star} alt="" />
          <h1 className="title">Many Problem one Solution</h1>
          <img src={star} alt="" />
        </div>
        <div className="flex solutions">
          <div className="solution-boxs">
            <div className="flex solution-box">
              <div className="flex solution-image">
                <img src={love} alt="" />
              </div>
              <div className="solution-text">
                <p>Love Related Problem </p>
              </div>
            </div>
            <div className="flex solution-box">
              <div className="flex solution-image">
                <img src={marriage} alt="" />
              </div>
              <div className="solution-text">
                <p>Marriage Problem</p>
              </div>
            </div>
            <div className="flex solution-box">
              <div className="flex solution-image">
                <img src={job} alt="" />
              </div>
              <div className="solution-text">
                <p>Job/Business Problems</p>
              </div>
            </div>
            <div className="flex solution-box">
              <div className="flex solution-image">
                <img src={coins} alt="" />
              </div>
              <div className="solution-text">
                <p>Money Problem</p>
              </div>
            </div>
            <div className="flex solution-box">
              <div className="flex solution-image">
                <img src={education} alt="" />
              </div>
              <div className="solution-text">
                <p>Education Problems</p>
              </div>
            </div>
          </div>
          <div className="middle-div">
            <img className="rotate-image" src={signs} alt="" />
            <img className="sun-image" src={sun} alt="sun" />
          </div>
          <div className="solution-boxs">
            <div className="flex solution-box">
              <div className="solution-text">
                <p>Health Problems</p>
              </div>
              <div className="flex solution-image">
                <img src={medical} alt="" />
              </div>
            </div>
            <div className="flex solution-box">
              <div className="solution-text">
                <p>Grah Shanti</p>
              </div>
              <div className="flex solution-image">
                <img src={orbit} alt="" />
              </div>
            </div>
            <div className="flex solution-box">
              <div className="solution-text">
                <p>Child Birth Issues </p>
              </div>
              <div className="flex solution-image">
                <img src={child} alt="" />
              </div>
            </div>
            <div className="flex solution-box">
              <div className="solution-text">
                <p>Husband Wife Problems </p>
              </div>
              <div className="flex solution-image">
                <img src={family} alt="" />
              </div>
            </div>
            <div className="flex solution-box">
              <div className="solution-text">
                <p>Lucky Number / Color</p>
              </div>
              <div className="flex solution-image">
                <img src={number} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="texture">
            <img src={texture} alt="" />
        </div>
      </div>
    </>
  );
};

export default Solutions;
