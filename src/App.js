import React from 'react'
import "./app.css"
import { Link, animateScroll as scroll } from "react-scroll";


function App() {
  return (
    <>
    <div className='container-top-button'>
      <Link to = "container" 
         smooth = {true} 
         offset={-70}
         duration={800}
          id='top-button' class="material-symbols-outlined">
     keyboard_double_arrow_up
     </Link>
    
    </div>
    
    <div className='container'>
     
     <div className='grid-main'>
       <div className='grid-left'>
         <h1>Hi ! <br></br> Im Ignacio Doria</h1>
         <Link to = "ab-me"
          smooth= {true}
          offset={-70}
         duration={500}
         >
           About Me </Link>
       </div>
     
       <div className='grid-right'>
         <img className='img-me' src={require ('./components/me.jpeg')}/>
       </div>
      
     </div>
     
   </div>
   
      <div className='ab-me'>
       <h1>About Me</h1>
        </div>
        
    
    
    </>
     
    
  
  
  );
}

export default App;
