import React, { Component } from "react";

class Skills extends Component {
  state = {
    languages: [
      {
        nom: "JavaScript",
        url: "https://www.developpez.net/forums/attachments/p294178d1/a/a/a",
        description: "Appris à l'IUT Utilisé pour réaliser ce site",
        active: false,
      },
      {
        nom: "React",
        url:
          "https://blog.octo.com/wp-content/uploads/2015/12/react-logo-1000-transparent.png",
        description: "Appris par moi-même",
        active: false,
      },
      {
        nom: "Java",
        url:
          "https://www.solutions-numeriques.com/wp-content/uploads/2016/03/java.png",
        description: "Appris à l'IUT",
        active: false,
      },
      {
        nom: "Langage C",
        url: "https://img.icons8.com/color/480/c-programming.png",
        description: "Appris à l'IUT",
        active: false,
      },
      {
        nom: "Android",
        url:
          "https://www.arobasyk.com/wp-content/uploads/2019/10/Android-Logo.png",
        description: "Appris à l'IUT",
        active: false,
      },
      {
        nom: "PostgreSQL",
        url:
          "https://dyltqmyl993wv.cloudfront.net/assets/stacks/postgresql/img/postgresql-stack-220x234.png",
        description: "Appris à l'IUT",
        active: false,
      },
      {
        nom: "VSCode",
        url:
          "https://websetnet.net/wp-content/uploads/2019/04/vscode-icon245.png",
        description: "Utilisé pour la plupart des langages",
        active: false,
      },
    ],
    os: [
      "https://www.macway.com/blog/wp-content/uploads/2020/04/MacOS.png",
      "https://www.dino-lite.eu/images/windows_logo.png",
      "https://www.allinfoservice.fr/wp-content/uploads/2016/01/linux-logo-600x300-520x245.png",
    ],
  };

  toggleDescription = (name) => {
    const languages = [...this.state.languages];
    const index = languages.findIndex((language) => language.nom === name);
    languages[index].active = !languages[index].active;
    this.setState({ languages });
  };

  displayDescription = (language) => {
    return (
      <div className="logoDescription">
        <h3>{language.nom}</h3>
        <p>{language.description}</p>
      </div>
    );
  };

  render() {
    return (
      <div className="skills">
        <h1 className="compTitle">Compétences</h1>
        <ul className="logoList">
          {this.state.languages.map((language) => (
            <li
              className="languages"
              key={language.nom}
              onMouseEnter={() => this.toggleDescription(language.nom)}
              onMouseLeave={() => this.toggleDescription(language.nom)}
            >
              <img src={language.url} alt={language.nom} />
              {language.active ? this.displayDescription(language) : null}
            </li>
          ))}
        </ul>
        <div className="os">
          {this.state.os.map((os) => (
            <img src={os} alt="OS" />
          ))}
        </div>
      </div>
    );
  }
}

export default Skills;
