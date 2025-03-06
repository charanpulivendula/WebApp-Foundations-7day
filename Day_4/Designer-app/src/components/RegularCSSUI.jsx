import React from "react";
import "./RegularCSS.css"; // Import custom styles

const RegularCSSUI = () => {
  return (
    <div className="regular-container">
      <nav className="regular-navbar">
        <h1>Regular CSS Navbar</h1>
      </nav>
      <div className="content">
        <button className="regular-button">Regular CSS Button</button>
        <div className="regular-card">
          <h2>Regular CSS Card</h2>
          <p>This is a card styled using Regular CSS.</p>
        </div>
      </div>
    </div>
  );
};

export default RegularCSSUI;
