import "./footer.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from  '@fortawesome/free-solid-svg-icons';

import { scroller } from "react-scroll";

const scrollToSection = (navClass) => {
    scroller.scrollTo(navClass, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    })
}

function Footer() {

  return (
    <div className="footer">
        <div className="footer-name" onClick={e => scrollToSection("header")}>
            <label>Darrin Lea</label>
        </div>
        <div className="footer-socials">
            <a href="mailto:dlea1@lsu.edu" target="_blank"><FontAwesomeIcon className="footer-icons grow" icon={faEnvelope} size="lg"/></a>
            <a href="https://www.linkedin.com/in/darrin-lea-a029941b8/" target="_blank"><FontAwesomeIcon className="footer-icons grow" icon={faLinkedin} size="lg"/></a>
            <a href="https://github.com/dlea8" target="_blank"><FontAwesomeIcon className="footer-icons grow" icon={faGithub} size="lg" /></a>
        </div>
        <div className="copywrite">
            Copywrite Darrin Lea 2022
        </div>
    </div>
  );
}

export default Footer;
