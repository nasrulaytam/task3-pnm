import React from "react";
import { LandingPage } from "./Pages/LandingPage";
import "../src/assets/scss/style.scss";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "../src/custom.scss";

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
