import "./projectStyles.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function ProjectCard(props) {

  return (
    <div className="project-card-container grow">
        <div className="title">
            <label className="title-text">{props.title}</label>
        </div>

        <div className="img-holder">
            <img src={props.image} className="img-style"></img>
        </div>

        <div className="text-holder">
            <p className="description-text">{props.text}</p>
        </div>

    </div>
  );
}

export default ProjectCard;
