import logo from './logo.svg';
import './App.css';
import Header from './Header/header';
import Welcome from './WelcomeSection/welcome';
import Projects from './ProjectsSection/projects';
import NavBar from './NavBar/navbar';
import Footer from './Footer/footer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Header></Header>
      <Welcome></Welcome>
      <Projects/>
      <Footer></Footer>

    </div>
  );
}

export default App;
