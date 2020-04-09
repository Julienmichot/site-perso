import React from "react";
import "./App.css";
import Skills from "./components/Skills";
import Course from "./components/Course";

function App() {
  return (
    <div className="App">
      <div className="presentation">
        <h1 className="mainTitle">Julien MICHOT</h1>
        <div className="mainInfos">
          <ul className="personalInfos">
            <li>19 ans</li>
            <li>
              43 rue de champagne<br></br>
              59700, Marcq-en-Barœul
            </li>
            <li>07 83 58 56 26</li>
            <li>julien.michot@hotmail.fr</li>
            <li>
              <a
                className="linkedinIcon"
                href="www.linkedin.com/in/julien-michot"
              >
                <i class="icon-linkedin"></i>
              </a>
            </li>
          </ul>
          <img
            className="photo"
            src="https://png.pngtree.com/png-vector/20190702/ourmid/pngtree-avatar-icon-in-trendy-style-isolated-background-png-image_1534580.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="content">
        <Skills />
        <Course />
      </div>
    </div>
  );
}

export default App;
