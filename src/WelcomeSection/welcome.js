import './welcome.css';

function Welcome() {
    return (
      <div className="welcome-section">
          <div className='welcome-header'>
            <div className='welcome-wrapper'><label className="welcome-lbl">Welcome!</label></div>
               
          </div>
          <div className="welcome-msg">
              <p>My name is Darrin Lea and I’m a Sophomore at Louisiana State University 
                  majoring in Computer Science and Math. 
                  I’ve always had a fascination with computer and a thirst for learning. 
                  Over the past few years I’ve gained industry experience through my internships with 
                  T-Mobile and BBP. I have a year of industry experience in full stack development 
                  as well as experience with Android Mobile development. 
                  Be sure to check out some of my personal projects and feel free to reach out 
                  via LinkedIn or email!</p>
          </div>
      </div>
    );
  }
  
  export default Welcome;