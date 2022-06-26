import React, {useEffect, useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from "../assets/headshot.jpg";
import "../Styles/GlobalStyles.css";
import Footer from "../Footer/footer";
import PageNavbar from "../NavBar/PagesNavbar";
import "../Styles/pages.css";
import codeImage from "../assets/ReactWebsite.PNG";

function PersonalWebsite() {

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
                <h1>Creating my own Personal Website</h1>
            </div>
            <div className="page-image-holder" >
              <img className="page-header-image" src={codeImage}></img>
            </div>

            <div>
                <p className="project-description">
                    Over the past few months, I've been teachign myself ReaxtJS. I have some web development experience form my internship with BBP,
                    but I wanted to take my experience to the next level. Since, React is a widely used web development platform I decided to take that route
                    and begin teachign myself React. I'm a big believer in hands-on leanring, so i figured the best way to develop my skills in React was by
                    creating a website of my own to showcase myself and some of my projects and experience. That way, I would get experience using react
                    as well as have a custom taliored personal website<br/>
                    <br/>
                    As mentioned, I created this website from scratch with React. I hosted it using AWS Amplifiy, which has proved to be a very effective
                    way to host, update, and maintain my website. Some notable react libraries I used were React Router for structuring a multi-page website andReact AOS 
                    for implementing smooth component animations. <br/>
                    <br/>
                    Through building this website, I've gained a lot of valuable web development skills. This was a very frontend-heavy project, 
                    whcih was not my strongest suit. However, after completing this web site, I feel a lot more confident in my ability to design a web page in Figma,
                    lay out the page in HTML, fight with CSS to make it look just right, and bring the page to life with JavaScript. I hope to continue to add projects, 
                    expereince, and other fun snipppets as tiem goes on. Stay tuned for updates! <br/>
                    <br/>
                    Check out the source code for my personal website on Github <a className="github-link" target="_blank" href="https://github.com/dlea8/darrin-website">here</a>!
                  </p>
            </div>
          </div>
        </div>
        <div className="page-footer-div"><Footer/></div>
          
      </div>
    );
  }
  
  export default PersonalWebsite;