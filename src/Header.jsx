import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Header.css'

import Footer from './Footer'
import learn from './images/Why-is-it-important-to-teach-your-child-coding-from-an-early-age-removebg-preview.png'



const Header = () => {
  const navigate = useNavigate();





  return (
    <div style={{height:'100vh'}} >
      
     <div className="home">
      <div className="container">
        <div className="row">
        {/* <div className="col-12 side1-img" >
           <img src={code1} alt="..." />
          </div> */}
          <div className="col-12 col-md-3 mt-5">
          <img src={learn} alt="" className='mt-4' />
           
          </div>
          <div className="col-12 col-md-9  title mt-3">

          <h1 className="typing"><span>M</span>aster <span>J</span>ava <br /> with Javaskill Bee</h1>
          <p className="animate-fade">Join a community of passionate learners building real-world projects.</p> 
          <div className="container btn-container">
            <div className="row">
              <div className="col-12 col-md-6">
              <button className='btn-grad button-pro project-btn' onClick={() => navigate('/projects')}>View Projects</button>
              </div>
              <div className="col-12  col-md-6">
              <button className='btn-grad button-pro team-btn' onClick={() => navigate('/teams')}>View Teams</button>
              </div>
            </div>
          </div>
         
          
          </div>
          {/* <div className="col-12 side2-img" >
          
          </div> */}
       
        </div>
      </div>
     </div>
   <Footer/>
    </div>

  )
}

export default Header