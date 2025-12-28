import Header from '../Header/header';
import Welcome from '../WelcomeSection/welcome';
import Projects from '../ProjectsSection/projects';
import NavBar from '../NavBar/navbar';
import Footer from '../Footer/footer';
import Publications from '../PublicationsSection/publications';

function Home() {
    return (

      <div className="App">
        <NavBar></NavBar>
        <Header></Header>
        <Welcome></Welcome>
        <Projects/>
        <Publications/>
        <Footer></Footer>
  
      </div>
    );
  }
  
  export default Home;
  