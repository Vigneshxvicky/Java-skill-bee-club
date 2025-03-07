import React from 'react'
import './About.css'
const About = () => {
  return (
    <div>
         <section id="about" class="features">
            
               
        <div class="section-title">
            <h2>Why Join Us?</h2>
            <p>We empower students to excel in Java through collaboration and mentorship.</p>
        </div>
        <div class="features-grid">
            <div className="container d-flex justify-content-center">
            <div className="row">
            <div class="feature-card animate-hover col-12 col-md-3 m-1">
                <i class="fas fa-laptop-code"></i>
                <h3>Hands-On Projects</h3>
                <p>Build real applications with peer support.</p>
            </div>
            <div class="feature-card animate-hover col-12 col-md-3 m-1">
                <i class="fas fa-users"></i>
                <h3>Mentorship</h3>
                <p>Learn from experienced developers.</p>
            </div>
            <div class="feature-card animate-hover col-12 col-md-3 m-1">
                <i class="fas fa-calendar-alt"></i>
                <h3>Workshops</h3>
                <p>Weekly coding sessions and hackathons.</p>
            </div>
                 
            </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About