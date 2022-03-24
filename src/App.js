import logo from './logo.svg';
import './App.css';
import Header from './Header/header';
import Welcome from './WelcomeSection/welcome';
import Projects from './ProjectsSection/projects';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Welcome></Welcome>
      <Projects/>

    </div>
  );
}

export default App;
