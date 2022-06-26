import "./projectStyles.css";

import React, {useEffect, useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useHref } from 'react-router-dom'

function ProjectCard(props) {

  useEffect(() => {
    AOS.init({
        // delay: parseInt(props.delay),
    });
  }, []);

  // const divClick = (navLnk) => {
  //   window.location.href = navLnk;
  // }

  return (
    <div>
      <a href={props.link} style={{ textDecoration: 'none', color: "black"}}>
      <div className="project-card-container " data-aos="fade-up" data-aos-delay={props.delay}>
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
      </a>
    </div>
  );
}

export default ProjectCard;
