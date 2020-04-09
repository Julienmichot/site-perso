import React from "react";
import "./App.css";
import Skills from "./components/Skills";
import Course from "./components/Course";

function App() {
  return (
    <div className="App">
      <h1>YOLO</h1>
      <div className="content">
        <Skills />
        <Course />
      </div>
    </div>
  );
}

export default App;
