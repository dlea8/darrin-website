import "../Footer/footer.css";
import "../Styles/GlobalStyles.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from  '@fortawesome/free-solid-svg-icons';

export default function SocialIcons() {

    return (
        <div className="socials-container">
            <div>
                <a 
                    href="mailto:dlea1@lsu.edu"
                    target="_blank"
                    rel="noreferrer">
                        <FontAwesomeIcon
                            className="social-icon"
                            icon={faEnvelope}
                            size="sm"/>
                </a>
            </div>
            <div>
                <a
                    href="https://www.linkedin.com/in/darrin-lea-a029941b8/"
                    target="_blank"
                    rel="noreferrer">
                        <FontAwesomeIcon
                            className="social-icon"
                            icon={faLinkedin}
                            size="sm"/>
                </a>
            </div>
            <div>
                <a
                    href="https://github.com/dlea8"
                    target="_blank"
                    rel="noreferrer">
                        <FontAwesomeIcon
                            className="social-icon"
                            icon={faGithub}
                            size="sm" />
                </a>
            </div>
        </div>
    );
}