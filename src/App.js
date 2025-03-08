import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import logo from './images/java-skillbee-logo copy.png'
import banner from './images/VMKVEC-LOGO.jpg'

import './App.css'
import About from "./About";
import Event from "./Event";



// modefid
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Message from './pages/Message'
import Teams from "./pages/Teams";




function App() {




   const openNav=()=> {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  const  closeNav=()=> {
    document.getElementById("mySidenav").style.width = "0";
  }


  return (
    <div >
      <div className="banner">
        <img src={banner} alt="" />
      </div>
   <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
    <div className="logo">
    <img src={logo} alt="..."  />
    </div>
  
    <button id="join">Join Us</button>
     



     <div className="lg-view">
    <button class="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa-solid fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
      <ul class="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to='/events'>Events</Link></li>
                <li><Link to='./message'>Message</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/teams'>Teams</Link></li>
                <li><a href="#contact" class="cta-button">Join Us</a></li>
            </ul>
      </div>
    </div>
    </div>


<div id="mySidenav" class="sidenav">
                <a  class="closebtn" onClick={closeNav} >&times;</a>
                 <li><Link to="/" onClick={closeNav}>Home</Link></li>
                <li><Link to="/about" onClick={closeNav}>About</Link></li>
                <li><Link to='/events' onClick={closeNav}>Events</Link></li>
                <li><Link to='./message' onClick={closeNav}>Message</Link></li>
                <li><Link to='/projects' onClick={closeNav}>Projects</Link></li>
                <li><Link to='/teams' onClick={closeNav}>Teams</Link></li>
                <li><a href="#contact" class="cta-button">Join Us</a></li>
</div>

<span style={{fontSize:'30px',cursor:'pointer'}} onClick={openNav} className="side-nav-icon"  >&#9776;</span>

  </div>
</nav> 



   
          
      <div className="router" >
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/about" element={<About/>} />
         <Route path="/events" element={<Event/>}/>
         <Route path="/message" element={<Message/>}/>
         <Route path="/Projects" element={<Projects/>}/>        
         <Route path="/teams" element={<Teams/>}/>        
         <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      
      </div>
      
    </div>
  );
}

export default App;
