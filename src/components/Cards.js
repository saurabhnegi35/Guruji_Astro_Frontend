import star from "../assets/stars.svg";
import online from "../assets/online.svg";
import call from "../assets/call.png";

const Card = (props) => {
  const CardData = props.CardData;
  //   console.log(CardData);

  const styles = {
    backgroundColor: "rgba(000, 128, 128, 1)",
    backgroundImage: `url(${CardData.img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    linearGradient: "",

    zIndex: 1,
  };

  return (
    <>
      <div className="card" style={styles}>
        <div className="card-exp">
          <p>{CardData.exp} Years</p>
          <img className="online" src={online} alt="online" />
        </div>
        <div className="title-flex">
          <div className="detail-box">
            <div>
              <img src={star} alt="star" /> {CardData.rating}
            </div>
            <p className="title">Astrologer {CardData.name}</p>
            <div>
              <p> Specialities</p>
              <span> {CardData.spec}</span>
            </div>
            <div>
              <p> Skills</p>
              <span> {CardData.skills}</span>
            </div>
          </div>
          <div className="price-box">
            <p className="price">Price</p>
            <p className="price-min">
              <span className="rupee">₹{CardData.price}</span>
              <span className="min">/min</span>
            </p>
          </div>
        </div>
        <img src={call} alt="" />
      </div>
    </>
  );
};

export default Card;
