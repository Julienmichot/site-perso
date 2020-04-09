import React, { Component } from "react";
import "../styles/Course.css";

class Course extends Component {
  state = {
    formations: [
      {
        nom: "DUT Informatique",
        soustitre: "IUT A, Cité Scientifique",
        contenus: [
          {
            année: "2019 - 2020",
            détails: "2e année et obtention du diplôme.",
          },
          {
            année: "2018 - 2019",
            détails: "1ère année, découverte du Java.",
          },
        ],
      },
      {
        nom: "Bac Scientifique",
        soustitre: "Lycée Kernanec, Marcq",
        contenus: [
          {
            année: "2018",
            détails:
              "Baccalauréat Scientifique obtenu avec la mention Assez Bien et la mention européenne.",
          },
        ],
      },
    ],
  };
  render() {
    return (
      <div className="course">
        <h1 className="compTitle">Parcours scolaire</h1>
        <div className="infos">
          {this.state.formations.map((formation) => (
            <div className="formation">
              <h2 className="title">
                {formation.nom + " "}
                <h4 className="subtitle">{formation.soustitre}</h4>
              </h2>
              {formation.contenus.map((contenu) => (
                <div>
                  <h3 className="year">{contenu.année}</h3>
                  <p>{contenu.détails}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Course;
