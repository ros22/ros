
import './App.css';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import Typewriter from "typewriter-effect";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='rotateros512-2.png' className="App-logo" alt="logo" />
        <div className="App-text">
            <p>Things I do</p>
            <Typewriter 
                  options={{
                    loop: true,
                  }}
                  typeSpeed={1}
                  onInit={(typewriter)=> {        
                  typewriter
                                
                  .typeString("Working as Senior QA Engineer")
                  .pauseFor(1000)
                  .deleteAll(10)
                  .typeString("Freelancing (Software Testing)")
                  .pauseFor(1000)
                  .deleteAll(10)
                  .typeString("Play Badminton")
                  .pauseFor(1000)
                  .deleteAll(10)
                  .typeString("Travel")
                  .pauseFor(1000)
                  .deleteAll(10)
                  .start();
                }}
              />
        </div>
        <br />

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"


        >
          Facebook
        </a> */}
        <div className="App-Social-Icon">
        <SocialMediaIconsReact borderColor="rgba(55,189,228,1)" borderWidth="5" borderStyle="solid" icon="facebook" iconColor="rgba(33,197,245,1)" backgroundColor="rgba(248,248,248,1)" iconSize="5" roundness="50%" url="https://www.facebook.com/pugii.agustin/" size="35" />  {'\n'}
        <SocialMediaIconsReact borderColor="rgba(55,189,228,1)" borderWidth="5" borderStyle="solid" icon="instagram" iconColor="rgba(33,197,245,1)" backgroundColor="rgba(248,248,248,1)" iconSize="5" roundness="50%" url="https://www.instagram.com/ros.nitsuga/" size="35" /> {'\n'}
        <SocialMediaIconsReact borderColor="rgba(55,189,228,1)" borderWidth="5" borderStyle="solid" icon="linkedin" iconColor="rgba(33,197,245,1)" backgroundColor="rgba(248,248,248,1)" iconSize="5" roundness="50%" url="https://www.linkedin.com/in/ros-agustin-96016390/" size="35" /> {'\n'}
        <SocialMediaIconsReact borderColor="rgba(55,189,228,1)" borderWidth="5" borderStyle="solid" icon="github" iconColor="rgba(33,197,245,1)" backgroundColor="rgba(248,248,248,1)" iconSize="5" roundness="50%" url="https://github.com/ros22" size="35" />
        </div>
      </header>
    </div>
  );
}

export default App;
