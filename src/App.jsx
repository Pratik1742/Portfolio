import React from "react";
import "./App.css";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <h1 className="portfolio-title">Pratik's Portfolio</h1>
      <Projects />
      <footer className="App-footer">
        &copy; 2025 Pratik's Portfolio. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
