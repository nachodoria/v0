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
         <div className="navbar">
            <ul>
              <li>About</li>
              <li>Home</li>
              <li>Projects</li>

            </ul>
          </div>

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec blandit orci.
            Integer malesuada odio in quam feugiat feugiat. In et mauris sagittis, facilisis justo nec, sollicitudin neque.
              Nunc quis tellus id mi accumsan pharetra. Mauris at pretium velit. Suspendisse facilisis nisl et nisi viverra, id tempor lectus iaculis.
              Donec lobortis nibh et lorem fermentum facilisis. Phasellus enim tellus, porta id vestibulum at, feugiat a sapien. Proin vehicula, nulla nec pretium scelerisque, quam risus dapibus dui, in pretium lacus nisi maximus lectus.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent bibendum dui et metus fringilla, ac malesuada diam aliquam. Duis at ex eget nisi fermentum commodo.
          </p>
          </div>
           
          
          
            </div>
            


        </div>
 
    </>
  
    
  
  
  );
}

export default App;
