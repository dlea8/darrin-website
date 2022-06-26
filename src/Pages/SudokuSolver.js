import React, {useEffect, useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from "../assets/headshot.jpg";
import "../Styles/GlobalStyles.css";
import Footer from "../Footer/footer";
import PageNavbar from "../NavBar/PagesNavbar";
import "../Styles/pages.css";
import codeImage from "../assets/sudokuSolverCode.PNG";

function SudokuSolver() {

  useEffect(() => {
    AOS.init({
        // delay: parseInt(props.delay),
    });
  }, []);

    return (
      <div className="page-background">
         <div className="page-navbar-wrapper"><PageNavbar/></div>
        <div className="page-content-section"> 
          <div className="page-text-div">
            <div className="page-header-div">
                <h1>Sudoku Solver</h1>
            </div>
            <div className="page-image-holder" >
              <img className="page-header-image" src={codeImage}></img>
            </div>

            <div>
                <p className="project-description">
                    During the summer of 2020, quarantined by the pandemic, I decided to devote some time to creating a few personal projects. The first project I 
                    completed was an automated solver for the popular puzzle game Sudoku. Sudoku is a 9x9 grid with each space being filled by a number 1 through 9. 
                    The goal is to find a way to place a number in each sqaure such that the numbers 1 through 9 appear in every row, column, and sub-box of the 
                    puzzle.<br/>
                    <br/>
                    I implemented a program to pull a random puzzle form a Kaggle dataset and solve it. The program then verifies that the solution is correct and indicates 
                    whether the puzzle was solved correctly. The algorithm I used to solve Sudoku puzzles takes inspiration from the method I use in solving puzzles. 
                    It iterates over each number and figures out the spaces the number could go in the box. If there is only one spot the number would work, the number 
                    is inserted. The process is repeated until the puzzle is solved. <br/>
                    <br/>
                    In the future I would love to make improvemnts to this project. The current algorithm is effective but can be slow. I've heard of another algorithm for solving Sudolu 
                    puzzles called the backtracing algorithm. In this implementation, the program inserts numbers until there is a conflict. Them it backtracks to a point where there
                    is no conflict and tries different numbers. This process continues until there is a combination of numbers that solves the puzzle. I'd also love to explore the 
                    possibility of developing a machine learning model for solving Sudoku puzzles. <br/>
                    <br/>
                    Check out the Sudoku Solver on Github <a className="github-link" target="_blank" href="https://github.com/dlea8/SudokuSolver">here</a>!
                  </p>
            </div>
          </div>
        </div>
        {/* <div className="page-footer-div"><Footer/></div> */}
          
      </div>
    );
  }
  
  export default SudokuSolver;