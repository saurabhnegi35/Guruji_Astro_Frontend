import "./App.css";
import Header from "./components/Header";
import UserTestimonial from "./components/UserTestimonial";
import Cards from "./components/Cards";
import { CardData } from "./constants/constants";

function App() {
  return (
    <div className="App">
      <Header />
      <UserTestimonial />
      <div className="card-container">
        <div className="card-section">
          {CardData.map((card) => (
            <Cards key={card.id} CardData={card} />
          ))}
        </div>
      </div>

      {/* <Cards CardData={CardData} /> */}
    </div>
  );
}

export default App;
