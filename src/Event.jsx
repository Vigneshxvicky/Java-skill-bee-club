import React from 'react'
import './Event.css';
import logo from './images/java-skillbee-logo copy.jpg'

const Event = () => {
  return (
    <div>
         <section id="events" class="events">
        <div class="section-title">
            <h2>Upcoming Events</h2>
            <p>Join our workshops and coding challenges.</p>
        </div>
        <div class="events-grid">
            <div class="event-card animate-hover ">
                <img src={logo} alt="Java Bootcamp" style={{height:'50px',width:'50px'}}/>
                <div class="event-details ">
                    <h3 className='fs-1'>Java club</h3>
                    <p>Start your Java journey in 12th March </p>
                    {/* <a href="#" class="cta-button-small btn ">Register Now</a> */}
                </div>
            </div>
          
        </div>
    </section>
    </div>
  )
}

export default Event