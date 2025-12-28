import "./headerStyles.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from  '@fortawesome/free-solid-svg-icons';

function Header() {

  return (
    <div className="header">
        <div className="header-wrapper">
          <div></div>
          <div className="header-content">
            <div className="name-div">
                <label className="name">Darrin Lea</label>
            </div>
            
            <div className="socials-flex">
                <a href="mailto:dlea1@lsu.edu" target="_blank"><FontAwesomeIcon className="icons grow" icon={faEnvelope} size="lg"/></a>
                <a href="https://www.linkedin.com/in/darrin-lea-a029941b8/" target="_blank"><FontAwesomeIcon className="icons grow" icon={faLinkedin} size="lg"/></a>
                <a href="https://github.com/dlea8" target="_blank"><FontAwesomeIcon className="icons grow" icon={faGithub} size="lg" /></a>
            </div>
          </div>
          <div></div>
            
        </div>
    


    </div>
  );
}

export default Header;
