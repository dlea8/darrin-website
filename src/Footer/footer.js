import "./footer.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from  '@fortawesome/free-solid-svg-icons';

const scrollToSection = (navClass) => {
    console.log('replace scroller');
}

function Footer() {

  return (
    <div className="footer">
        <div className="footer-name" onClick={e => scrollToSection("header")}>
            <label>Darrin Lea</label>
        </div>
        <div >
          <div className="footer-socials">
              <div><a href="mailto:dlea1@lsu.edu" target="_blank" rel="noreferrer"><FontAwesomeIcon className="footer-icons" icon={faEnvelope} size="lg"/></a></div>
              <div><a href="https://www.linkedin.com/in/darrin-lea-a029941b8/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="footer-icons" icon={faLinkedin} size="lg"/></a></div>
              <div><a href="https://github.com/dlea8" target="_blank" rel="noreferrer"><FontAwesomeIcon className="footer-icons" icon={faGithub} size="lg" /></a></div>
          </div>
        </div>
        <div className="copywrite">
            Copywrite © {new Date().getFullYear()} Darrin Lea
        </div>
    </div>
  );
}

export default Footer;
