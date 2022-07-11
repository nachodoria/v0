import React, {useEffect, useState, useRef} from 'react'
import "./app.css"
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

function App() {

  useEffect(()=> {
    Aos.init({duration : 2000});
}, [])

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
} 

  return (
    <>
     
      <div id='main'>
          <CustomCursor
          customClass='custom-cursor'
          dimensions={50}
          fill='#ff8e3c'
          smoothness={{
            movement: 0.4,
            scale: 0.1,
            opacity: 0.5,
          }}
        />
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
              <div className='navbar-item-container'><Link className = "navbar-item" to ="grid-main" smooth= {true} offset={-70} duration={800}>Home</Link></div>
              <div className='navbar-item-container'><Link className = "navbar-item" to = "ab-me" smooth= {true} offset={-70} duration={800}>About</Link></div>
              <div className='navbar-item-container'><Link className = "navbar-item" to = "pject" smooth= {true} offset={-70} duration={800}>Projects</Link></div>
            </ul>
          </div>
        <div className='grid-main' >
          
            
         
        
          <div className='grid-left'>
            <div className='title-cont'>
              <h1>
        Hi !<br></br> I´m Ignacio Doria 
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
          My name is Ignacio Doria, I am a high school student in Argentina, fortunately I am a very good tasting man and I like front-end development. I started to learn these skills in 2020 and now I can say I know JS, React JS, CSS, HTML, Python and some PHP for some back-end needs. I am open minded and I enjoy the process of learning.
          </p>
          </div>
           
          
          
            </div>
            

        <div className='projects'>
          <div className='projects-grid'>
            <div className='project-title'>
              <div className='top-projects' >
              
                <h1>Projects📚</h1>
              </div>
                
            </div>
            <div className='all-projects'>
              <div id='ps' className='pject' data-aos = "fade-left">
                
                    <h5>Linkea2</h5>
                    <p>Linkea2 is an HTML-CSS-JS-PHP based virtual campus for school purposes, in the web application, professors can upload tasks and files, and students can upload their homeworks and take notes of the class in the campus</p>
                    <div className='button-learn'>
                  <a onClick={() => window.location = 'mailto:ignaciodoriaoberman@gmail.com?subject=I want to learn more about Linkea2'}
                  >
                    Learn More
                  </a>
                  </div>
              </div>
              <div id='ps' className='pject' data-aos = "fade-left">
                  <h5>You-Detect</h5>
                  <p>YouDetect is a desktop app based con C#, Arduino, and Microsoft Access, it works locally and it is designed for blind people. It helps blind people to open doors and it also comes with a glasses that help blind people detect stuff from the upper body to the head </p>
                  <div className='button-learn'>
                  <a onClick={() => window.location = 'mailto:ignaciodoriaoberman@gmail.com?subject=I want to learn more about You-Detect'}
                  >
                    Learn More
                  </a>
                  </div>
              </div>
              <div id='ps' className='pject' data-aos = "fade-left">
                  <h5>Link-It</h5>
                  <p>Link-It is a MERN Stack project (React JS, Node JS, Angular and MongoDB) which helps people in enterprises to organize themselves and have a confortable space to comunicate.
                  Project is in development.</p>
                  <div className='button-learn'>
                  <a onClick={() => window.location = 'mailto:ignaciodoriaoberman@gmail.com?subject=I want to learn more about Link-It'}
                  >
                    Learn More
                  </a>
                  </div>
                  
              </div>
              
            </div>
          </div>
        </div>  
        <div className='socials'>
        <a rel="noreferrer" target="_blank" href='https://www.instagram.com/nacho.doria/' id = "socials" className = "social-1"> <span  alt='social' > </span> </a>
        <a onClick={() => window.location = 'mailto:ignaciodoriaoberman@gmail.com'} id = "socials" className = "social-2"><span alt='social' /></a>
        <a rel="noreferrer" target="_blank" href='https://github.com/nachodoria' id = "socials" className = "social-3"> <span alt='social'/></a>
        <a rel="noreferrer" target="_blank" href='https://twitter.com/NachoDoria_' id = "socials" className = "social-4"> <span  alt='social'/></a>
        </div>
        
        </div>
 
    </>
  
    
  
  
  );
}

export default App;
