import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbars from './Navbar';
import Contact from './Contact';
import Projects from './Projects';
import Abouts from './About';
import './About.css';
import './Home.css';
export default function Home(){
  return(
    <div>
        <Navbars/>
      
        <div id="home" class="home-container no-caret">
            <img src="/freepikdata.png" class="background-icon center-icon" />
            <img src="/freepikdata2.png" class="background-icon bottom-right" />
            <div className='text-wrapper'>
            <h1 class="home-title"> HI! I AM Hricha</h1>
            <h2 class="home-subtitle">Aspiring Data Analyst | Business Analytics Graduate Student</h2>
            <p class="home-description">
                Passionate about using data to drive business decisions, optimize processes, and inspire innovation.
                </p>
                <a href="#contact" class="home-button">Contact Me</a>

            </div>
        

        </div>
        <div id="aboutme"  className="about-section">
          <div className="about-image">
            <img src="/profilepic.jpg" alt="Hricha" />
          </div>
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              I am Hricha, a data enthusiast passionate about helping businesses make informed, evidence-based decisions. With a background in analytics and ongoing graduate studies in Business Analytics, I focus on turning raw data into meaningful stories.
            </p>
            <p>
              I specialize in data visualization using Tableau, perform predictive modeling in R, and bring insights through SQL, Python, and Excel. My goal is to bridge the gap between business needs and data solutions.
            </p>
            <p>
              I'm available for internships, part-time roles, or collaborations related to data storytelling, analytics, and dashboard development.
            </p>
          </div>
        </div>
        <Projects/>
        <Contact/>
        
    
            
        

    </div>
  )

}

