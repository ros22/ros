
import './App.css';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import Typewriter from "typewriter-effect";
import logo from './rotateros512-2.png';
import { useState, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'Manual Testing', level: 95, color: '#4299e1' },
    { name: 'Automation Testing', level: 90, color: '#63b3ed' },
    { name: 'API Testing', level: 88, color: '#90cdf4' },
    { name: 'Performance Testing', level: 85, color: '#bee3f8' },
    { name: 'Mobile Testing', level: 82, color: '#ebf8ff' }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection('home')}>
            <img src={logo} alt="ROS" className="nav-logo-img" />
            <span className="nav-logo-text">ROS</span>
          </div>
          <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <button 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => {
                scrollToSection('home');
                setIsMobileMenuOpen(false);
              }}
            >
              Home
            </button>
            <button 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => {
                scrollToSection('about');
                setIsMobileMenuOpen(false);
              }}
            >
              About
            </button>
            <button 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => {
                scrollToSection('skills');
                setIsMobileMenuOpen(false);
              }}
            >
              Skills
            </button>
            <button 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => {
                scrollToSection('contact');
                setIsMobileMenuOpen(false);
              }}
            >
              Contact
            </button>
          </div>
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="hero-text">
            <h1 className="hero-title">Ros Agustin</h1>
            <p className="hero-subtitle">Senior QA Engineer</p>
            <div className="hero-typewriter">
              <Typewriter 
                options={{
                  loop: true,
                }}
                typeSpeed={50}
                onInit={(typewriter)=> {        
                  typewriter
                    .typeString("Working as Senior QA Engineer")
                    .pauseFor(2000)
                    .deleteAll(30)
                    .typeString("Freelancing (Software Testing)")
                    .pauseFor(2000)
                    .deleteAll(30)
                    .typeString("Play Badminton")
                    .pauseFor(2000)
                    .deleteAll(30)
                    .typeString("Travel")
                    .pauseFor(2000)
                    .deleteAll(30)
                    .start();
                }}
              />
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a passionate Senior QA Engineer with extensive experience in software testing and quality assurance. 
                My expertise spans across manual testing, automation, API testing, and performance testing.
              </p>
              <p>
                I believe in delivering high-quality software that exceeds user expectations through thorough testing 
                methodologies and innovative approaches.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ 
                      width: `${skill.level}%`,
                      backgroundColor: skill.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-text">
              <p>Ready to work together? Let's discuss your project and how I can help ensure its quality.</p>
            </div>
            <div className="App-Social-Icon">          
              <SocialMediaIconsReact 
                borderColor="rgba(66,153,225,0.8)" 
                borderWidth="2" 
                borderStyle="solid" 
                icon="facebook" 
                iconColor="rgba(247,250,252,1)" 
                backgroundColor="rgba(26,54,93,0.8)" 
                iconSize="5" 
                roundness="50%" 
                url="https://www.facebook.com/pugii.agustin/" 
                size="30" 
              />
              <SocialMediaIconsReact 
                borderColor="rgba(66,153,225,0.8)" 
                borderWidth="2" 
                borderStyle="solid" 
                icon="instagram" 
                iconColor="rgba(247,250,252,1)" 
                backgroundColor="rgba(26,54,93,0.8)" 
                iconSize="5" 
                roundness="50%" 
                url="https://www.instagram.com/ros.nitsuga/" 
                size="30" 
              />
              <SocialMediaIconsReact 
                borderColor="rgba(66,153,225,0.8)" 
                borderWidth="2" 
                borderStyle="solid" 
                icon="linkedin" 
                iconColor="rgba(247,250,252,1)" 
                backgroundColor="rgba(26,54,93,0.8)" 
                iconSize="5" 
                roundness="50%" 
                url="https://www.linkedin.com/in/ros-agustin-96016390/" 
                size="30" 
              />
              <SocialMediaIconsReact 
                borderColor="rgba(66,153,225,0.8)" 
                borderWidth="2" 
                borderStyle="solid" 
                icon="github" 
                iconColor="rgba(247,250,252,1)" 
                backgroundColor="rgba(26,54,93,0.8)" 
                iconSize="5" 
                roundness="50%" 
                url="https://github.com/ros22" 
                size="30" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
