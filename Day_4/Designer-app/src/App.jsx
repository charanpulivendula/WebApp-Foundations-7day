import React, { useState } from "react";
import "./index.css";
import TailwindUI from "./components/TailwindUI";
import RegularCSSUI from "./components/RegularCSSUI";

function App() {
  const [useTailwind, setUseTailwind] = useState(true);

  return (
    <div className="app-container">
      <div className="toggle-section">
        <button onClick={() => setUseTailwind(true)} className="toggle-btn">
          Tailwind CSS
        </button>
        <button onClick={() => setUseTailwind(false)} className="toggle-btn">
          Regular CSS
        </button>
      </div>
      <div className="ui-section">
        {useTailwind ? <TailwindUI /> : <RegularCSSUI />}
      </div>
    </div>
  );
}

export default App;
