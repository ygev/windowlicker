import React from "react";
import { Link } from "gatsby";
import Pixelator from "../pixelator/pixelator";
import "../../css/global.css";
import "../../css/reset.css";
import "../../css/type.css";
import "./search.css";
import Fade from "react-reveal/Fade";
import randomize from "../../images/randomize.svg";
import randomizeBlack from "../../images/randomize--black.svg";
import profilePlaceholder from "../../images/_sample-data/profiles/profile--placeholder.svg";
import arrowRightTeal from "../../images/arrowRight--teal.svg";
import Projects from "../../../data/students.json";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.initialLetterState = {};

    this.state = {
      studentName: props.studentName,
      projectName: props.projectName,
      profilePicture: props.profilePicture
    };
  }

  handleProjectHover(project) {
    this.setState({studentName: project.whatIsYourFirstName + ' ' + project.whatIsYourLastName});
    this.setState({projectName: project.whatIsYourProjectName});
    this.setState({profilePicture: require("../../images/_sample-data/projects/" + project.emailAddress + "/ZoomProfilePic/headshot.png")});
  }

  handleLetterHover(argLetter) {
    let argLetterItems = document.getElementsByClassName('letter-' + argLetter);

    if (argLetterItems.length > 0) {
      for (var i = 0; i < 26; i++) {
        let currentLetter = (i+10).toString(36);
        let currentLetterItems = document.getElementsByClassName('letter-' + currentLetter);
        
        for (let item of currentLetterItems) {
          if (currentLetter == argLetter) {
            document.getElementsByClassName("glossary__randomize")[0].classList.remove("glossary__item--active");
            document.getElementsByClassName("glossary__randomize--img")[0].src = require("../../images/randomize--black.svg")
            document.getElementsByClassName("glossary__letter")[i].classList.add("glossary__item--active");
            item.firstChild.style.height = "";
            item.firstChild.style.width = "";
          } else {
            item.firstChild.style.height = "0";
            item.firstChild.style.width = "0";
            document.getElementsByClassName("glossary__letter")[i].classList.remove("glossary__item--active");
          }
        }
      }
    }
  }

  ungrayLetter() {
    if (typeof document !== `undefined`) {
      for (var i = 0; i < 26; i++) {
        let currentLetter = (i+10).toString(36);
        let currentLetterItems = document.getElementsByClassName('letter-' + currentLetter);
        if (currentLetterItems.length == 1) {
          document.getElementsByClassName("glossary__letter")[i].classList.remove("glossary__letter--ghost");
        }
      }
    }
  }

  randomizeProjects() {
    // for now, just show all letters... todo, actually randomize the projects
    for (var i = 0; i < 26; i++) {
      let currentLetter = (i+10).toString(36);
      let currentLetterItems = document.getElementsByClassName('letter-' + currentLetter);

      document.getElementsByClassName("glossary__randomize")[0].classList.add("glossary__item--active");
      document.getElementsByClassName("glossary__randomize--img")[0].src = require("../../images/randomize.svg")
      document.getElementsByClassName("glossary__letter")[i].classList.remove("glossary__item--active");

      for (let item of currentLetterItems) {
        item.firstChild.style.height = "";
        item.firstChild.style.width = "";
      }
    }
  }

  generateLetters() {
    var letters = [];
    for (var i = 0; i < 26; i++) { // iterate through the alphabet
      let thisLetter = (i+10).toString(36); // thisLetter = a, b, c...
      if (this.initialLetterState[thisLetter] == true) {
        letters.push(<p className="glossary__item glossary__letter" onClick={() => this.handleLetterHover(thisLetter)}>{thisLetter}</p>);
      } else {
        letters.push(<p className="glossary__item glossary__letter glossary__letter--ghost">{thisLetter}</p>);
      }
    }
    return letters;
  }

  generateProjects() {
    let generatedProjects = Projects.map((project, index) => {
      // un-gray this student's letter
      this.initialLetterState[project.whatIsYourLastName[0].toLowerCase()] = true;
      
      // append this student to our generatedStudents array
      return (
        <Link
          to={
            "/" +
            project.whatIsYourFirstName +
            project.whatIsYourLastName
          }
          className={"letter-" + project.whatIsYourLastName[0].toLowerCase()}
          onMouseEnter={() => this.handleProjectHover(project)} // use () => this.function() syntax to prevent losing 'this' context
        >
          <img
            src={require("../../images/_sample-data/projects/" +
              project.emailAddress +
              "/ProjectCoverImage/cover.png")}
            alt=""
            className="photo__grid--img"
          />
        </Link>
      );
    })
    return generatedProjects;
  }

  render() {
    return (
      <div class="fucker__flipper">
        <Fade cascade duration={500}>

        <div className="search__info--wrapper">
            <div className="search__desktop--wrapper">
              <section className="search__profile">
                <div className="search__profile--frame"></div>
                <img
                  src={this.state.profilePicture}
                  alt=""
                  className="search__profile--img"
                  id="profile-pic"
                />
              </section>
              <section className="search__name">
                <h3 className="cta__name" id="studentName">
                  <Pixelator content={this.state.studentName} />
                </h3>
                <h4 className="cta__project" id="projectName">
                  {this.state.projectName}
                </h4>
              </section>
            </div>
            <section className="photo__grid">
              {this.generateProjects()}
            </section>
          </div>
         
          <section className="searchglossary--wrapper">
            <div className="search__title">
              <h3 className="search__title--txt">
                <Pixelator content="Search By Last Name" />
              </h3>
            </div>
            <div className="glossary--scroller">
              <section className="glossary">
                <div onClick={this.randomizeProjects} aria-label="Randomize Projects" className="glossary__item glossary__item--active glossary__randomize">
                  <img src={randomize} alt="" className="glossary__randomize--img"/>
                </div>
                {this.generateLetters()}
              </section>
            </div>
          </section>

          <section className="cta">
            <div className="cta__txt">
              <h3 className="cta__name">
                <Pixelator content={this.props.studentName} />
              </h3>
              <h4 className="cta__project">{this.props.projectName}</h4>
            </div>
            <Link to="/project">
              <img src={arrowRightTeal} alt="" className="cta__arrow" />
            </Link>
          </section>
        </Fade>
      </div>
    );
  }
}

export default Search;
