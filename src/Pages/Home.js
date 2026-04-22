import Header from '../Header/header';
import Welcome from '../WelcomeSection/welcome';
import Projects from '../ProjectsSection/projects';
import Navbar from '../Navbar/navbar.js';
import Footer from '../Footer/footer';
import Publications from '../PublicationsSection/publications';
import Technologies from '../TechnologiesSection/technologies';

function Home() {
    return (

      <div className="App">
        <Navbar></Navbar>
        <Header></Header>
        <Welcome></Welcome>
        <Projects/>
        <Technologies/>
        <Publications/>
        <Footer></Footer>

      </div>
    );
  }
  
  export default Home;
  