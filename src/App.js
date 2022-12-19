import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import SearchMovie from "./Components/SearchMovie/SearchMovie";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SearchMovie />
    </div>
  );
}

export default App;
