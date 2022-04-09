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
            <div><label className="nav-item">Resume</label></div>   
            {/* link to resume somehow */}
        </div>

    </div>
  );
}

export default NavBar;
