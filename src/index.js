import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./MainPage";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
