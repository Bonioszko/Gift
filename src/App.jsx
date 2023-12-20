import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Location from "./components/Locations";
import "./App.css";

function App() {
  const [places, setPlaces] = useState([
    "Berlin",
    "Praga",
    "Promnice",
    "Poznań",
  ]);

  return (
    <div className="main">
      <div className="content">
        <Location location={places[0]}></Location>
        <Location location={places[1]}></Location>
        <Location location={places[2]}></Location>
        <Location location={places[3]}></Location>
      </div>
    </div>
  );
}

export default App;
