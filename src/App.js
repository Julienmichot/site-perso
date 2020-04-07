import React from "react";
import "./App.css";
import SkillsArticle from "./components/SkillsArticle";
import Course from "./components/Course";

function App() {
  return (
    <div className="App">
      <h1>YOLO</h1>
      <div className="content">
        <SkillsArticle />
        <Course />
      </div>
    </div>
  );
}

export default App;
