import React, {useEffect} from 'react'
import "./app.css"
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";


function App() {

  useEffect(()=> {
    Aos.init({duration : 2000});
}, [])


  return (
    <>
     
        <div id='main'>
         

        <div className='container-top-button' data-aos="fade-down">
          
          <Link to = "container" 
            smooth = {true} 
            offset={-70}
            duration={800}
              id='top-button' className="material-symbols-outlined">
        keyboard_double_arrow_up
        </Link>
          

        </div>
        
        <div className='container'>
        <div className="navbar" data-aos= "fade-right">
            <ul>
              <Link className = "navbar-item" to ="grid-main" smooth= {true} offset={-70} duration={500}>Home</Link>
              <Link className = "navbar-item" to = "ab-me" smooth= {true} offset={-70} duration={500}>About</Link>
              <Link className = "navbar-item" to = "pject" smooth= {true} offset={-70} duration={500}>Projects</Link>

            </ul>
          </div>
        <div className='grid-main' >
          
            
         
        
          <div className='grid-left'>
            <div className='title-cont'>
              <h1>
        Hi ! 👋🏻<br></br> I´m Ignacio Doria 
        </h1>
            </div>
        <div  data-aos="fade-down">
           <Link to = "ab-me"
           className='redirect-ab'
           
              smooth= {true}
              offset={-70}
            duration={500}>
              About Me
               </Link>
        </div>
           
          </div>
        
          <div className='grid-right' data-aos="fade-down">
            <img className='img-me' alt='me' src={require ('./components/me.jpeg')}/>
          </div>
          
        </div>
        
        </div>

          <div className='ab-me' > 
          <div className='ab-me-title'data-aos = "fade-right">
              <h1 className='title-ab'data-aos = "fade-right">About Me 🙋🏽‍♂️</h1>
            </div>
            <div className='ab-me-ph'data-aos = "fade-right">
          <p>  
           My name is Ignacio Doria, I am a high school student in Argentina, afortunatly I am a very good tasted man and I like front-end development.
           I started to learn this skills in 2020 and now I can say I know JS, React JS, CSS, HTML, Python and some PHP for some back-end needs. I am open minded when it comes to learn and I enjoy the process of learning. 
          </p>
          </div>
           
          
          
            </div>
            

        <div className='projects'>
          <div className='projects-grid'>
            <div className='project-title'>
              <div className='top-projects' data-aos = "fade-right">
              
                <h1>Projects📚</h1>
              </div>
                
            </div>
            <div className='all-projects'>
              <div id='ps' className='pject' data-aos = "fade-left">
                
                    <h5>Linkea2</h5>
                    <p>Linkea2 is an HTML-CSS-JS-PHP based virtual campus for school purposes, in the web application, professors can upload tasks and files, and students can upload their homeworks and take notes of the class in the campus</p>
                    <Link to =""
                  className='button-learn'
                  >
                    Learn More
                  </Link>
              </div>
              <div id='ps' className='pject' data-aos = "fade-left">
                  <h5>You-Detect</h5>
                  <p>YouDetect is a desktop app based con C#, Arduino, and Micrsoft Access, it works locally and it is designed for blind people. It helps blind people to open doors and it also comes with a glasses that help blind people detect stuff from the upper body to the head </p>
                  <Link to =""
                  className='button-learn'
                  >
                    Learn More
                  </Link>
              </div>
              <div id='ps' className='pject' data-aos = "fade-left">
                  <h5>Link-It</h5>
                  <p>Link-It is a MERN Stack project (React JS, Node JS, Angular and Mongo DB) which helps people in enterprises to organize themselves and have a confortable space to comunicate.
                  Project is in development.</p>
                  <Link to =""
                  className='button-learn'
                  >
                    Learn More
                  </Link>
              </div>
              
            </div>
          </div>
        </div>
        </div>
 
    </>
  
    
  
  
  );
}

export default App;
