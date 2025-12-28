import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from  '@fortawesome/free-solid-svg-icons';

function PageNavbar() {

  return (
    <div className="page-navbar-wrapper">
        <div className="page-navbar">
            <div className="page-navbar-name">
                <a href="/" className="pages-navbar-link">Darrin Lea</a>
            </div>
            <div className="page-navbar-socials-wrapper">
                <div className="page-navbar-socials">
                    <a href="mailto:dlea1@lsu.edu" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icons" icon={faEnvelope} size="lg"/></a>
                    <a href="https://www.linkedin.com/in/darrin-lea-a029941b8/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icons" icon={faLinkedin} size="lg"/></a>
                    <a href="https://github.com/dlea8" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icons" icon={faGithub} size="lg" /></a>
                </div>
            </div>
        </div>

    </div>
  );
}

export default PageNavbar;
