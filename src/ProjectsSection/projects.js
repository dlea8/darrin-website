import "./projectStyles.css";
import sudoku from "../assets/SudokuImg.png";
import reactLogo from "../assets/reactLogo.jpg";
import golf from "../assets/golfPicTemp.jpg";
import ProjectCard from "./projectCard";
import React, {useEffect, useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink} from 'react-router-dom'

function Projects() {

  return (
    <div className="projects-section">
        <div className="projects-title-div">
            <label className="projects-section-title">Personal Projects</label>
        </div>
        <div className="projects-content">
            <div className="project-grow">
              <ProjectCard
              title = "Sudoku Solver"
              text = "Retreives a random Sudoku puzzle from an online dataset and solves the puzzle. Created in Summer of 2020 and implemented in Java.View more details and run it for yourself on my GitHub page"
              image={sudoku} 
              delay="0"
              link="./SudokuSolver"/>
            </div>
          
            <siv className="project-grow ">
              <ProjectCard
              title = "Golf Assistant App"
              text = "An Android app that helps you calculate your golf handicap and keep track of scores. Built in Android studio. Click to see features the app offers and view the app on GitHub."
              image={golf}
              delay="150"
              link="../Pages/SudokuSolver" />
            </siv>
            <div className="project-grow ">
              <ProjectCard
              title = "Personal Website"
              text = "After teaching myself the ReactJs framework, I built this website from scratch using React. "
              image={reactLogo}
              delay="300"
              link="../Pages/SudokuSolver"/>
            </div>
           
        </div>
    </div>
  );
}

export default Projects;
