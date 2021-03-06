import React from "react";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";
import "../../css/global.css";
import "../../css/reset.css";
import "../../css/type.css";
import "./footer.css";
import footerEarth from "../../images/footerEarth.svg";
import outsideLink from "../../images/outsideLink.svg";

export default (props) => (
  <>
    <Fade duration={200}>
      <footer className="footer__wrapper">
      <Link to="/">
        <img src={footerEarth} aria-label="Go back to the Home Page" alt="An icon of earth." className="footer__img" />
      </Link>
        <div className="footer__link--wrapper">
          <Link to="/">
            <p className="footer__link">Our Pixels</p>
          </Link>
          <Link to="/about">
            <p className="footer__link">Our Story</p>
          </Link>
          <a href="https://www.mica.edu">
            <p className="footer__link">
              MICA{" "}
              <img src={outsideLink} alt="" className="footer__img--micagd" />{" "}
            </p>
          </a>
        </div>
      </footer>
    </Fade>
  </>
);
