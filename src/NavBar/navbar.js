import "./navbar.css";
import { scroller } from "react-scroll";

const scrollToSection = (navClass) => {
    scroller.scrollTo(navClass, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    })
}

function NavBar() {

  return (
    <div className="navbar-container">
        <div className="navbar-flex">
            <div onClick={e => scrollToSection("welcome-section")}><label className="nav-item">About</label></div>
            <div onClick={e => scrollToSection("projects-section")}><label className="nav-item">Projects</label></div>
            <div><a className="resume-link" href="https://darrinfiles.s3.us-east-2.amazonaws.com/Darrin+Lea+Resume+September+2022.pdf" target="None"><label className="nav-item">Resume</label></a></div>   
            {/* link to resume somehow */}
        </div>

    </div>
  );
}

export default NavBar;
