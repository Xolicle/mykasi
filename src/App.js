import "./App.css";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Alerts from "./Components/Alerts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <Hero />
      <Alerts />
    </div>
  );
}

export default App;
