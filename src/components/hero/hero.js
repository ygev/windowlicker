import React from "react";
import { Link } from "gatsby";
import "../../css/global.css";
import "../../css/reset.css";
import "../../css/type.css";
import Layout from "../layout/layout";
import smiley from "../../images/smileyFace.svg";
import arrowDown from "../../images/arrowDown.svg";
import Pixelator from "../pixelator/pixelator";
import Fade from "react-reveal/Fade";
import "./hero.css";

export default (props) => (
  <>
    <Layout rows={[7, 7, 6]}>
      <Fade delay={1200} duration={350}>
        <main className="hero">
          <p className="hero__brow">MICA GD BFA 2020 Degree Show</p>
          <header className="hero__lead--wrapper">
            <h1 className="hero__lead">
              <Pixelator content="Pixelation" />
              <img
                src={smiley}
                alt="Smiley face"
                className="hero__smiley"
                align="middle"
              />
            </h1>
          </header>
          <h4 className="hero__paragraph">
            Pixelation, the title of our MICA Artwalk Exhibition (Baltimore's largest display of visual art since 2009), is a portal between the 75 graduating student's new workspaces and their degree projects. We invite you to explore our webxhibition, a self-initiated and student-led website by MICA's Class of 2020 in the BFA Graphic Design program.
          </h4>
        </main>
      </Fade>

      <Fade delay={1500} duration={350}>
        <aside className="linkDown">
          <div className="arrowDown--wrapper">
            <img src={arrowDown} alt="" className="arrowDown" />
          </div>
        </aside>
      </Fade>
    </Layout>
  </>
);
