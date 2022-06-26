import "./navbar.css";
import { scroller } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from  '@fortawesome/free-solid-svg-icons';

const scrollToSection = (navClass) => {
    scroller.scrollTo(navClass, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    })
}

function PageNavbar() {

  return (
    <div className="page-navbar-wrapper">
        <div className="page-navbar">
            <div className="page-navbar-name">
                <a href="/" className="pages-navbar-link">Darrin Lea</a>
            </div>
            <div className="page-navbar-socials-wrapper">
                <div className="page-navbar-socials">
                    <a href="mailto:dlea1@lsu.edu" target="_blank"><FontAwesomeIcon className="icons grow" icon={faEnvelope} size="lg"/></a>
                    <a href="https://www.linkedin.com/in/darrin-lea-a029941b8/" target="_blank"><FontAwesomeIcon className="icons grow" icon={faLinkedin} size="lg"/></a>
                    <a href="https://github.com/dlea8" target="_blank"><FontAwesomeIcon className="icons grow" icon={faGithub} size="lg" /></a>
                </div>
            </div>
        </div>

    </div>
  );
}

export default PageNavbar;
