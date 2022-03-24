import "./projectStyles.css";
import sudoku from "../assets/SudokuImg.png";
import reactLogo from "../assets/reactLogo.jpg";
import golf from "../assets/golfPicTemp.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import ProjectCard from "./projectCard";

function Projects() {

  return (
    <div className="projects-section">
        <div className="projects-title-div">
            <label className="projects-section-title">Personal Projects</label>
        </div>
        <div className="projects-content">
            <ProjectCard
            title = "Sudoku Solver"
            text = "Retreives a random Sudoku puzzle from an online dataset and solves the puzzle. Created in Summer of 2020 and implemented in Java.View more details and run it for yourself on my GitHub page"
            image={sudoku}/>
            <ProjectCard
            title = "Golf Assistant App"
            text = "An Android app that helps you calculate your golf handicap and keep track of scores. Built in Android studio. Click to see features the app offers and view the app on GitHub."
            image={golf}/>
            <ProjectCard
            title = "Personal Website"
            text = "After teaching myself the ReactJs framework, I built this website from scratch using React. "
            image={reactLogo}/>
        </div>
    </div>
  );
}

export default Projects;
