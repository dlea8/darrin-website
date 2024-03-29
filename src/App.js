import logo from './logo.svg';
import './App.css';
import Header from './Header/header';
import Welcome from './WelcomeSection/welcome';
import Projects from './ProjectsSection/projects';
import NavBar from './NavBar/navbar';
import Footer from './Footer/footer';
import SudokuSolver from './Pages/SudokuSolver';
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import GolfAssistant from './Pages/GolfPage';
import PersonalWebsite from './Pages/PersonalWeb';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/SudokuSolver" element={<SudokuSolver/>}/>
          <Route exact path="/GolfAssistant" element={<GolfAssistant/>}/>
          <Route exact path="/PersonalWebsite" element={<PersonalWebsite/>}/>
        </Routes>
      </div>
    </Router>
    // <div className="App">
    //   <NavBar></NavBar>
    //   <Header></Header>
    //   <Welcome></Welcome>
    //   <Projects/>
    //   <Footer></Footer>

    // </div>
  );
}

export default App;
