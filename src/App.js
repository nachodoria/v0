import React, {useEffect} from 'react'
import "./app.css"
import { Link, animateScroll as scroll } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion"


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
              <Link className = "navbar-item" to = "" smooth= {true} offset={-70} duration={500}>Projects</Link>

            </ul>
          </div>
        <div className='grid-main' >
          
            
         
        
          <div className='grid-left'>
            <div className='title-cont'>
              <h1>
        Hi !<br></br> I´m Ignacio Doria 
        </h1>
            </div>
        
            <Link to = "ab-me"
            data-aos="fade-down"
            className='redirect-ab-us'
              smooth= {true}
              offset={-70}
            duration={500}
            >
              About Me </Link>
          </div>
        
          <div className='grid-right' data-aos="fade-down">
            <img className='img-me' src={require ('./components/me.jpeg')}/>
          </div>
          
        </div>
        
        </div>

          <div className='ab-me'  > 
          <div className='ab-me-title'>
              <h1 className='title-ab'>About Me</h1>
            </div>
            <div className='ab-me-ph'>
          <p>  
           My name is Ignacio Doria, I am a high school student in Argentina, afortunatly I am a very good tasted man and I like front-end development.
           I started to learn this skills in 2020 and now I can say I know JS, React JS, CSS, HTML, Python and some PHP for some back-end needs. I am open minded when it comes to learn and I enjoy the process of learning. 
          </p>
          </div>
           
          
          
            </div>
            


        </div>
 
    </>
  
    
  
  
  );
}

export default App;
