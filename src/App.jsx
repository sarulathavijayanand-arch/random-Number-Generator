
import { useState } from "react";
import "./App.css";

function App() {

  const [number, setNumber] = useState(null);

  function generateNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
  }

  return (
    <div className="container">

      <div className="generator-card">

        <h1>Random Number Generator</h1>

        <p className="subtitle">
          Generate a number between 1 and 100
        </p>

        <div className="number-display">

          {number === null ? (
            <p className="placeholder">
              No number generated yet
            </p>
          ) : (
            <h2>{number}</h2>
          )}

        </div>

        <button onClick={generateNumber}>
          Generate Random Number
        </button>

      </div>

    </div>
  );
}

export default App;
