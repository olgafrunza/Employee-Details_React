import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import data from "./helper/data";

function App() {
  const [index, setIndex] = useState(0);
  console.log(data[index]);
  const handleNext = () => {
    let newIndex = index + 1;
    if (newIndex > data.length - 1) newIndex = 0;
    setIndex(newIndex);
  };
  const handlePrev = () => {
    let newIndex = index - 1;
    if (newIndex < 0) newIndex = data.length - 1;
    setIndex(newIndex);
  };
  return (
    <div className="team-boxed">
      <div className="container">
        <div className="intro">
          <h2 className="text-center"> Hello Team</h2>
          <p className="text-center">Employee Details - {index + 1}</p>
        </div>
        <div className="row justify-content-md-center people mb-0">
          <Card {...data[index]} />
        </div>
        <div className="row justify-content-md-center mt-0">
          <button onClick={handlePrev} className="m-2">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button onClick={handleNext} className="m-2">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
