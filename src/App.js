import logo from './logo.svg';
import './App.css';
import Header from './Header/header';
import Welcome from './WelcomeSection/welcome';
import Projects from './ProjectsSection/projects';
import NavBar from './NavBar/navbar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Header></Header>
      <Welcome></Welcome>
      <Projects/>

    </div>
  );
}

export default App;
