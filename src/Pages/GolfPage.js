import React, {useEffect, useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from "../assets/headshot.jpg";
import "../Styles/GlobalStyles.css";
import Footer from "../Footer/footer";
import PageNavbar from "../NavBar/PagesNavbar";
import "../Styles/pages.css";
import score from "../assets/score.jpg";
import home from "../assets/GolfAssistantHome.jpg";
import handicap from "../assets/calcHandicap.jpg";
import android from "../assets/androidStudio.PNG";

function GolfAssistant() {

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
                <h1>Golf Assistant Android App</h1>
            </div>
            <div className="page-image-holder" >
              <img className="page-header-image" src={android}></img>
            </div>

            <div>
                <p className="project-description">
                    Playing golf has been one of my hobbies for many years. My grandfather taught me how to play at a young age and I still play with him today. 
                    I saw a need for a system to keep track of my golf scores and stats while playing. Doing some research I found several
                    golf assistant apps in the app store that have some of this functionality. This inspired me to create my own golf assistant app and improve
                    my skills in Android development<br/>
                    <br/>
                    I created my Golf Assistant Android app using Android Studio and Java. It includes the functionality to calculate a player's 
                    golf handicap, a value determined by a subset of scores, the difficulty level of the course, and the par of the course. It also
                    allows a player to keep track of their score while playing a round of golf. During the creation of this app, I researched a method of
                    bottom navigation that I implemented as the main navigation scheme in the app.<br/>
                    <br/>
                    Below are some screenshots of the views on the app.
                  </p>
                    <div className="golf-assistant-images-div">
                        <img src={home}></img>
                        <img src={handicap}></img>
                        <img src={score}></img>
                    </div>
                  <p className="project-description"> 
                    My vision for this app is to expand upon it in the future to allow players to choose which course they are playing on and dynamically
                    display the scorecard for that course. I also want to create a stats page that displays the a player's golf stats such as scores, handicap, 
                    number of pars, average number of strokes per hole, etc. I would also love to allow a user to use the app as a range finder
                    by leveraging gps location of the user's phone and of the green.<br/>
                    <br/>
                    Overall, this project has been really fun to work on and definitely has room for expansion. I would love to make some of those dreams a reality
                    as I continue to improve on this app. Check out the Golf Assistant app on Github <a className="github-link" target="_blank" href="https://github.com/dlea8/GolfAssistant">here</a>!
                  </p>
            </div>
          </div>
        </div>
        <div className="page-footer-div"><Footer/></div>
          
      </div>
    );
  }
  
  export default GolfAssistant;