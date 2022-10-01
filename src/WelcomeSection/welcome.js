import './welcome.css';

import React, {useEffect, useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from "../assets/headshot.jpg";

function Welcome() {

  useEffect(() => {
    AOS.init({
        // delay: parseInt(props.delay),
    });
  }, []);

    return (
      <div className="welcome-section">
        <div className='text-div'>
          <div className='welcome-header' >
              <div className='welcome-wrapper'><label className="welcome-lbl">Welcome!</label></div>
                
          </div>
          <div className="welcome-msg" >
              <p>My name is Darrin Lea and I’m a Junior at Louisiana State University 
                  majoring in Computer Science and Math. 
                  I’ve always had a fascination with computers and a thirst for learning. 
                  Over the past few years I’ve gained industry experience through internships with 
                  T-Mobile and BBP. I have two years of industry experience in full-stack development 
                  as well as a year of experience with Android Mobile development. 
                  Be sure to check out some of my personal projects and feel free to reach out 
                  via LinkedIn or email!</p>
          </div>
        </div>
        <div className='img-div'>
          <img src={image} className='welcome-img-style'></img>
        </div>
      </div>
    );
  }
  
  export default Welcome;