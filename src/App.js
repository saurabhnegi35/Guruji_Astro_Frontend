import "./App.css";
import Header from "./components/Header";
import UserTestimonial from "./components/UserTestimonial";
import Cards from "./components/Cards";
import { CardData } from "./constants/constants";
import Solutions from "./components/Solutions";

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
      <Solutions />
    </div>
  );
}

export default App;
